// Validate + normalise researched hotel JSON seeds.
// Usage: node scripts/validate-seeds.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const DIR = new URL("../data/hotels/", import.meta.url);
const FILES = ["lisbon.json", "algarve.json", "costa-del-sol.json", "mallorca.json", "tenerife.json", "crete.json", "antalya.json", "sardinia.json", "costa-blanca.json", "rhodes.json", "gran-canaria.json"];

const AMENITIES = new Set([
  "pool", "free-kids-club", "water-slides", "baby-friendly", "beach-access",
  "family-suites", "self-catering", "toddler-friendly", "city-base",
]);
const AGES = new Set(["baby", "toddler", "kid", "teen"]);
const PHOTOS = new Set([
  "beachSunset","resortLoungers","poolDusk","poolTropicalMtn","poolCabanas",
  "infinityPoolSea","villaInterior","kidsReading","lisbonTram","villaPoolGreen",
  "villaPink","resortCanal","roomCozy","poolDuskPalms","deckLoungersSea","poolOrange",
  "hotelTowerGreen","swimmer","coastTown","kidsFootball","livingRoom","poolPalms",
  "whiteResortPool","algarveCliffs","villaModern","babyHand","overwater",
]);
const SCORE_KEYS = ["rooms","baby","pool","dining","safety","convenience","location","extras"];
const REQUIRED = ["key","name","area","lat","lng","address","priceTier","ages","amenities","scores","roomsSummary","intro","highlights","pros","cons"];

let emDashCount = 0;
// Recursively strip em/en dashes from every string value.
function clean(v) {
  if (typeof v === "string") {
    if (/[—–]/.test(v)) emDashCount++;
    return v
      .replace(/&amp;/g, "&")
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&nbsp;/g, " ")
      .replace(/\s*[—–]\s*/g, ", ")
      .replace(/, ,/g, ",")
      .replace(/ {2,}/g, " ");
  }
  if (Array.isArray(v)) return v.map(clean);
  if (v && typeof v === "object") {
    const o = {};
    for (const k of Object.keys(v)) o[k] = clean(v[k]);
    return o;
  }
  return v;
}

const problems = [];
let total = 0;

for (const f of FILES) {
  const url = new URL(f, DIR);
  if (!existsSync(url)) { problems.push(`MISSING FILE: ${f}`); continue; }
  let data;
  try { data = JSON.parse(readFileSync(url, "utf8")); }
  catch (e) { problems.push(`INVALID JSON in ${f}: ${e.message}`); continue; }

  data = clean(data);
  const hotels = data.hotels ?? [];
  total += hotels.length;
  const keys = new Set();
  for (const h of hotels) {
    const tag = `${f}:${h.key ?? "?"}`;
    for (const r of REQUIRED) if (h[r] === undefined) problems.push(`${tag} missing ${r}`);
    if (keys.has(h.key)) problems.push(`${tag} duplicate key`); keys.add(h.key);
    for (const a of h.amenities ?? []) if (!AMENITIES.has(a)) problems.push(`${tag} bad amenity: ${a}`);
    for (const a of h.ages ?? []) if (!AGES.has(a)) problems.push(`${tag} bad age: ${a}`);
    for (const p of h.photos ?? []) if (!PHOTOS.has(p)) problems.push(`${tag} bad photo: ${p}`);
    if (h.scores) for (const k of SCORE_KEYS) {
      const val = h.scores[k];
      if (typeof val !== "number" || val < 0 || val > 100) problems.push(`${tag} bad score ${k}=${val}`);
    }
    if (h.priceTier < 1 || h.priceTier > 4) problems.push(`${tag} bad priceTier ${h.priceTier}`);
  }

  writeFileSync(url, JSON.stringify(data, null, 2) + "\n");
}

console.log(`Hotels: ${total}. Em-dashes stripped: ${emDashCount}.`);
if (problems.length) { console.log("PROBLEMS:"); for (const p of problems) console.log("  " + p); process.exit(0); }
else console.log("All seeds valid.");
