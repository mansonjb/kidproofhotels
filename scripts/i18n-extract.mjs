// Extract every L10n node missing `it` from a seed, for translation.
// Usage: node scripts/i18n-extract.mjs <dest> <outDir>
// Writes <outDir>/<dest>.items.json = [{id, en, fr}] and prints the count.
import { readFileSync, writeFileSync } from "node:fs";

const dest = process.argv[2];
const outDir = process.argv[3];
if (!dest || !outDir) { console.error("usage: i18n-extract.mjs <dest> <outDir>"); process.exit(1); }

const seedPath = new URL(`../data/hotels/${dest}.json`, import.meta.url);
const data = JSON.parse(readFileSync(seedPath, "utf8"));

const TARGETS = ["it", "de", "es", "pt"];
const isL10n = (n) => n && typeof n === "object" && !Array.isArray(n)
  && (typeof n.en === "string" || Array.isArray(n.en));

const items = [];
function walk(node, path) {
  if (Array.isArray(node)) { node.forEach((v, i) => walk(v, `${path}/${i}`)); return; }
  if (node && typeof node === "object") {
    if (isL10n(node)) {
      if (!TARGETS.every((t) => t in node)) items.push({ id: path, en: node.en, fr: node.fr ?? null });
      return; // do not recurse into locale values
    }
    for (const k of Object.keys(node)) walk(node[k], `${path}/${k}`);
  }
}
walk(data, "");

writeFileSync(`${outDir}/${dest}.items.json`, JSON.stringify(items, null, 2) + "\n");
console.log(`${dest}: ${items.length} L10n nodes need it/de/es/pt`);
