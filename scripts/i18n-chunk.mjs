// Split <dest>.items.json into <dest>.c<N>.json chunks of <size> items.
// Usage: node scripts/i18n-chunk.mjs <dest> <outDir> <size>
import { readFileSync, writeFileSync } from "node:fs";

const [dest, outDir, sizeArg] = process.argv.slice(2);
if (!dest || !outDir) { console.error("usage: i18n-chunk.mjs <dest> <outDir> <size>"); process.exit(1); }
const size = Number(sizeArg) || 140;

const items = JSON.parse(readFileSync(`${outDir}/${dest}.items.json`, "utf8"));
let n = 0;
for (let i = 0; i < items.length; i += size, n++) {
  writeFileSync(`${outDir}/${dest}.c${n}.json`, JSON.stringify(items.slice(i, i + size), null, 2) + "\n");
}
console.log(`${dest}: ${items.length} items -> ${n} chunks of <=${size}`);
