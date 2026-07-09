#!/usr/bin/env tsx
/**
 * Translate the site's own copy from English into it/de/es/pt using the Claude API.
 *
 *   npm run translate                                  # all targets, UI + hotels
 *   ANTHROPIC_MODEL=claude-opus-4-8 npm run translate  # higher quality, slower
 *
 * Idempotent (skips anything already translated):
 *  - UI dictionary -> data/i18n/generated/<locale>.json  (mirrors the Dict shape)
 *  - Hotel seeds   -> adds a <locale> key to every L10n inside data/hotels/*.json
 *
 * Everything here is our own generated copy, never third-party text. On any
 * failure we fall back to English so the build stays green. Needs
 * ANTHROPIC_API_KEY in .env.local (script is run via tsx --env-file=.env.local).
 */
import Anthropic from "@anthropic-ai/sdk";
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { UI_EN } from "../data/i18n/en";

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("[translate] ANTHROPIC_API_KEY missing. Add it to .env.local.");
  process.exit(1);
}
const MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-4-5";
const client = new Anthropic();

const TARGETS: [code: string, language: string][] = [
  ["it", "Italian"],
  ["de", "German"],
  ["es", "Spanish"],
  ["pt", "Portuguese (Portugal)"],
];

const ROOT = process.cwd();
const HOTELS_DIR = join(ROOT, "data", "hotels");
const GEN_DIR = join(ROOT, "data", "i18n", "generated");

const SYSTEM = (language: string) => `You are a professional travel localiser for "KidProof Hotels", a site recommending genuinely family-friendly hotels, written by parents for parents. You translate the site's OWN original marketing and editorial copy from English into ${language}.

Rules, always:
- Produce natural, idiomatic, on-brand ${language} travel copy for parents. Not literal word for word.
- NEVER use em-dash characters. Use commas, colons or parentheses.
- NEVER translate: hotel names, place names, brand names (KidProof, Stay22, Booking, Expedia, Siam Park, Oceanario), or "KidProof Score".
- Preserve every {placeholder} in curly braces EXACTLY as is.
- Input is a JSON array of English strings. Return ONLY a JSON array of the SAME length, in the SAME order, each translated. No commentary, no code fences.`;

async function translateBatch(strings: string[], language: string): Promise<string[]> {
  if (strings.length === 0) return [];
  const res = await client.messages.create({
    model: MODEL,
    max_tokens: 8192,
    system: SYSTEM(language),
    messages: [{ role: "user", content: JSON.stringify(strings) }],
  });
  const text = res.content.map((b) => (b.type === "text" ? b.text : "")).join("").trim();
  const clean = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  const out = JSON.parse(clean);
  if (!Array.isArray(out) || out.length !== strings.length) {
    throw new Error(`length mismatch: got ${out.length}, want ${strings.length}`);
  }
  return out.map((s) => String(s));
}

async function translateAll(strings: string[], language: string): Promise<string[]> {
  const CHUNK = 50;
  const out: string[] = [];
  for (let i = 0; i < strings.length; i += CHUNK) {
    const slice = strings.slice(i, i + CHUNK);
    try {
      out.push(...(await translateBatch(slice, language)));
    } catch (e) {
      console.warn(`  ! chunk @${i} failed (${(e as Error).message}); English fallback`);
      out.push(...slice);
    }
  }
  return out;
}

type Slot = { en: string; set: (t: string) => void };

/** Collect L10n nodes (objects with an `en` string or `en` string[]) missing `locale`. */
function collectL10n(node: unknown, locale: string, slots: Slot[]): void {
  if (Array.isArray(node)) {
    for (const item of node) collectL10n(item, locale, slots);
    return;
  }
  if (!node || typeof node !== "object") return;
  const obj = node as Record<string, unknown>;
  if (typeof obj.en === "string" || Array.isArray(obj.en)) {
    if (obj[locale] === undefined) {
      if (typeof obj.en === "string") {
        slots.push({ en: obj.en, set: (t) => (obj[locale] = t) });
      } else {
        const enArr = obj.en as string[];
        const target: string[] = new Array(enArr.length);
        obj[locale] = target;
        enArr.forEach((s, i) => slots.push({ en: s, set: (t) => (target[i] = t) }));
      }
    }
    return; // an L10n node's other keys are sibling locales, not nested content
  }
  for (const k of Object.keys(obj)) collectL10n(obj[k], locale, slots);
}

/** Collect every plain string leaf (for the UI dict, which is not L10n-shaped). */
function collectLeaves(node: unknown, slots: Slot[]): void {
  if (!node || typeof node !== "object") return;
  const obj = node as Record<string, unknown>;
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (typeof v === "string") slots.push({ en: v, set: (t) => (obj[k] = t) });
    else collectLeaves(v, slots);
  }
}

async function run() {
  if (!existsSync(GEN_DIR)) mkdirSync(GEN_DIR, { recursive: true });
  const files = readdirSync(HOTELS_DIR).filter((f) => f.endsWith(".json"));

  for (const [code, language] of TARGETS) {
    console.log(`\n=== ${language} (${code}) ===`);

    // 1) UI dictionary -> generated per-locale JSON
    const genPath = join(GEN_DIR, `${code}.json`);
    if (existsSync(genPath)) {
      console.log(`  UI ${code}.json exists, skipping`);
    } else {
      const dict = JSON.parse(JSON.stringify(UI_EN));
      const slots: Slot[] = [];
      collectLeaves(dict, slots);
      const t = await translateAll(slots.map((s) => s.en), language);
      slots.forEach((s, i) => s.set(t[i]));
      writeFileSync(genPath, JSON.stringify(dict, null, 2) + "\n");
      console.log(`  UI dict -> ${code}.json (${slots.length} strings)`);
    }

    // 2) Hotel seeds -> add locale keys in place
    for (const file of files) {
      const path = join(HOTELS_DIR, file);
      const data = JSON.parse(readFileSync(path, "utf8"));
      const slots: Slot[] = [];
      collectL10n(data, code, slots);
      if (slots.length === 0) {
        console.log(`  ${file}: already has ${code}`);
        continue;
      }
      const t = await translateAll(slots.map((s) => s.en), language);
      slots.forEach((s, i) => s.set(t[i]));
      writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
      console.log(`  ${file}: +${slots.length} ${code} strings`);
    }
  }
  console.log("\nDone. Next: wire the locales into i18n + routing.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
