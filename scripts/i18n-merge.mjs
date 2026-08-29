// Merge translations back into a seed. Reads <outDir>/<dest>.out.json
// = [{id, it, de, es, pt}] and sets those locales on each matching L10n node.
// Usage: node scripts/i18n-merge.mjs <dest> <outDir>
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";

const dest = process.argv[2];
const outDir = process.argv[3];
if (!dest || !outDir) { console.error("usage: i18n-merge.mjs <dest> <outDir>"); process.exit(1); }

const seedPath = new URL(`../data/hotels/${dest}.json`, import.meta.url);
const data = JSON.parse(readFileSync(seedPath, "utf8"));

// Collect all translation outputs: <dest>.out.json and/or <dest>.c<N>.out.json
const outRe = new RegExp(`^${dest}\\.(c\\d+\\.)?out\\.json$`);
const outFiles = readdirSync(outDir).filter((f) => outRe.test(f)).sort();
if (!outFiles.length) { console.error(`MISSING ${outDir}/${dest}.*out.json`); process.exit(1); }
const map = new Map();
for (const f of outFiles) {
  const arr = JSON.parse(readFileSync(`${outDir}/${f}`, "utf8"));
  for (const t of arr) map.set(t.id, t);
}
console.log(`${dest}: loaded ${map.size} translations from ${outFiles.length} file(s)`);

const TARGETS = ["it", "de", "es", "pt"];
const isL10n = (n) => n && typeof n === "object" && !Array.isArray(n)
  && (typeof n.en === "string" || Array.isArray(n.en));

let filled = 0, leftover = 0, badShape = 0;
const leftoverIds = [];
function walk(node, path) {
  if (Array.isArray(node)) { node.forEach((v, i) => walk(v, `${path}/${i}`)); return; }
  if (node && typeof node === "object") {
    if (isL10n(node)) {
      if (TARGETS.every((t) => t in node)) return; // already complete
      const t = map.get(path);
      if (!t) { leftover++; leftoverIds.push(path); return; }
      const enIsArr = Array.isArray(node.en);
      let ok = true;
      for (const lang of TARGETS) {
        const v = t[lang];
        if (enIsArr) { if (!Array.isArray(v) || v.length !== node.en.length) ok = false; }
        else if (typeof v !== "string") ok = false;
      }
      if (!ok) { badShape++; leftover++; leftoverIds.push(path); return; }
      for (const lang of TARGETS) if (!(lang in node)) node[lang] = t[lang];
      filled++;
      return;
    }
    for (const k of Object.keys(node)) walk(node[k], `${path}/${k}`);
  }
}
walk(data, "");

writeFileSync(seedPath, JSON.stringify(data, null, 2) + "\n");
console.log(`${dest}: filled ${filled}, leftover ${leftover}${badShape ? ` (badShape ${badShape})` : ""}`);
if (leftoverIds.length) console.log("  leftover ids (first 10):\n    " + leftoverIds.slice(0, 10).join("\n    "));
