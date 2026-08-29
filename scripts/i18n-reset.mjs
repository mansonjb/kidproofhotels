// Remove given locales from every L10n node in a seed (so they get re-translated).
// Usage: node scripts/i18n-reset.mjs <dest> <loc1> [loc2 ...]
import { readFileSync, writeFileSync } from "node:fs";

const [dest, ...locs] = process.argv.slice(2);
if (!dest || !locs.length) { console.error("usage: i18n-reset.mjs <dest> <loc...>"); process.exit(1); }

const seedPath = new URL(`../data/hotels/${dest}.json`, import.meta.url);
const data = JSON.parse(readFileSync(seedPath, "utf8"));
const isL10n = (n) => n && typeof n === "object" && !Array.isArray(n)
  && (typeof n.en === "string" || Array.isArray(n.en));

let removed = 0;
function walk(node) {
  if (Array.isArray(node)) { node.forEach(walk); return; }
  if (node && typeof node === "object") {
    if (isL10n(node)) { for (const l of locs) if (l in node) { delete node[l]; removed++; } return; }
    for (const k of Object.keys(node)) walk(node[k]);
  }
}
walk(data);
writeFileSync(seedPath, JSON.stringify(data, null, 2) + "\n");
console.log(`${dest}: removed ${removed} locale values (${locs.join(",")})`);
