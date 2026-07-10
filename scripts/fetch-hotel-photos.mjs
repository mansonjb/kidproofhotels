/**
 * Fetch REAL per-hotel photos via the Apify Google Places crawler
 * (compass/crawler-google-places), the same approach as the sibling sites.
 *
 * For each hotel in data/hotels/<dest>.json it searches "{name} {area} {country}",
 * fuzzy-matches the returned place back to the hotel by name-token overlap, and
 * only writes photos on a confident match. Up to 3 images are saved to
 * public/images/hotels/{key}-{i}.jpg, and data/hotel-photos.json records the
 * count per hotel. Hotels with no confident match keep their illustrative
 * Unsplash stock (handled in the app), never a wrong property's photo.
 *
 *   node scripts/fetch-hotel-photos.mjs --dest=algarve        # one destination
 *   node scripts/fetch-hotel-photos.mjs --all                 # every hotel
 *   node scripts/fetch-hotel-photos.mjs --all --force         # re-fetch done ones
 *
 * ~$0.0015/place scraped. Requires APIFY_TOKEN in .env.local.
 */
import sharp from "sharp";
import { mkdir, readFile, writeFile, readdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const destArg = (process.argv.find((a) => a.startsWith("--dest=")) || "").split("=")[1];
const ALL = process.argv.includes("--all");
const FORCE = process.argv.includes("--force");
const MIN_OVERLAP = 0.5;
const MAX_IMAGES = 3;

if (!destArg && !ALL) {
  console.error("Usage: node scripts/fetch-hotel-photos.mjs --dest=algarve | --all [--force]");
  process.exit(1);
}

async function loadToken() {
  if (process.env.APIFY_TOKEN) return process.env.APIFY_TOKEN;
  const env = await readFile(path.join(ROOT, ".env.local"), "utf-8");
  const m = env.match(/APIFY_TOKEN=(.+)/);
  if (!m) throw new Error("No APIFY_TOKEN in .env.local");
  return m[1].trim();
}

async function runActor(token, queries) {
  const input = {
    searchStringsArray: queries,
    maxCrawledPlacesPerSearch: 1,
    language: "en",
    maxImages: MAX_IMAGES,
    skipClosedPlaces: false,
  };
  const res = await fetch(
    `https://api.apify.com/v2/acts/compass~crawler-google-places/run-sync-get-dataset-items?token=${token}`,
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(input) },
  );
  if (!res.ok) throw new Error(`Apify HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

async function downloadPhoto(url, outPath) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`img ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  await sharp(buf)
    .resize(1000, 667, { fit: "cover", position: "centre" })
    .jpeg({ quality: 72, progressive: true, mozjpeg: true })
    .toFile(outPath);
}

const STOP = new Set(["hotel", "hostal", "apartments", "apartment", "apartamentos", "aparthotel",
  "resort", "spa", "suites", "suite", "the", "by", "and", "de", "la", "el", "los", "las", "casa",
  "guesthouse", "house", "rooms", "villa", "villas", "boutique", "a", "collection", "luxury",
  "grand", "gran", "beach", "club", "park", "palace", "selection", "affiliated", "waves"]);
const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
  .replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
const tokens = (s) => norm(s).split(" ").filter((t) => t && !STOP.has(t));

function matchScore(hotelName, placeTitle) {
  const H = tokens(hotelName);
  if (!H.length) return 0;
  const P = new Set(tokens(placeTitle));
  if (!P.has(H[0])) return 0; // distinctive brand word must be present
  let hit = 0;
  for (const t of H) if (P.has(t)) hit++;
  return hit / H.length;
}

// Load hotels from every data/hotels/<dest>.json (destinationMeta ignored).
const HOTELS_DIR = path.join(ROOT, "data", "hotels");
const files = (await readdir(HOTELS_DIR)).filter((f) => f.endsWith(".json"));
const hotels = [];
for (const f of files) {
  const data = JSON.parse(await readFile(path.join(HOTELS_DIR, f), "utf-8"));
  for (const h of data.hotels ?? []) hotels.push(h);
}

const OUT = path.join(ROOT, "public", "images", "hotels");
await mkdir(OUT, { recursive: true });
const MANIFEST = path.join(ROOT, "data", "hotel-photos.json");
const manifest = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, "utf-8")) : {};

let targets = hotels.filter((h) => ALL || h.destinationKey === destArg);
if (ALL && !FORCE) targets = targets.filter((h) => !manifest[h.key]);
console.log(`Targeting ${targets.length} hotels${destArg ? ` in ${destArg}` : ""}`);

const token = await loadToken();
const country = (h) => (h.address || "").split(",").pop().trim();
let filled = 0, scraped = 0, skipped = 0;
const log = [];

for (let i = 0; i < targets.length; i += 10) {
  const batch = targets.slice(i, i + 10);
  const queries = batch.map((h) => `${h.name} ${h.area?.en ?? ""} ${country(h)}`.replace(/\s+/g, " ").trim());
  let raw;
  try {
    raw = await runActor(token, queries);
  } catch (e) {
    console.log(`  batch ${i / 10}: actor error ${e.message}`);
    continue;
  }
  scraped += raw.length;

  const used = new Set();
  for (const r of raw) {
    const imgs = (r.imageUrls || []).filter(Boolean).slice(0, MAX_IMAGES);
    const title = r.title || "";
    if (!imgs.length || !title) continue;
    let best = -1, bestScore = 0;
    batch.forEach((h, k) => {
      if (used.has(k)) return;
      const sc = matchScore(h.name, title);
      if (sc > bestScore) { bestScore = sc; best = k; }
    });
    if (best < 0 || bestScore < MIN_OVERLAP) continue;
    const h = batch[best];
    let n = 0;
    for (let j = 0; j < imgs.length; j++) {
      try {
        await downloadPhoto(imgs[j], path.join(OUT, `${h.key}-${j}.jpg`));
        n++;
        await sleep(50);
      } catch { /* skip this image */ }
    }
    if (n > 0) {
      manifest[h.key] = n;
      used.add(best);
      filled++;
      log.push(`  ✓ ${h.key}  "${h.name}"  <-  "${title}"  (${(bestScore * 100) | 0}%, ${n} imgs)`);
    }
  }
  for (let k = 0; k < batch.length; k++) {
    if (used.has(k)) { continue; }
    skipped++;
    log.push(`  -  ${batch[k].key}  "${batch[k].name}"  no confident match (keeps Unsplash)`);
  }
  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
}

console.log(log.join("\n"));
console.log(`\n${"─".repeat(50)}`);
console.log(`✅ ${filled} hotels with real photos, ${skipped} kept Unsplash`);
console.log(`💰 ~$${(scraped * 0.0015).toFixed(3)} Apify (${scraped} places scraped)`);
