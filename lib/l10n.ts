import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import type { L10n, L10nList } from "@/lib/types";

// A localized value that may only have some locales filled. Backfilled to a full
// L10n (missing locales default to English) at the data boundary, so templates
// can read `x[locale]` safely for any locale.

/**
 * Identity pass-through for authored content: lets `{en, fr}` literals satisfy a
 * full `L10n` (all-locale) type without validation. The missing locales are
 * filled at runtime by backfillDeep. Keeps `x[locale]` typed as `string`.
 */
export function src<T>(x: unknown): T {
  return x as T;
}

/** Read a localized string with English fallback. */
export function t(l: L10n | undefined, locale: Locale): string {
  return l?.[locale] ?? l?.[DEFAULT_LOCALE] ?? "";
}
/** Read a localized list with English fallback. */
export function tl(l: L10nList | undefined, locale: Locale): string[] {
  return l?.[locale] ?? l?.[DEFAULT_LOCALE] ?? [];
}

function isL10nNode(o: Record<string, unknown>): boolean {
  return typeof o.en === "string" || Array.isArray(o.en);
}

/**
 * Deep-walk any value; every L10n-shaped node (has an `en` string or string[])
 * gets missing locales filled with its English value. Mutates in place.
 */
export function backfillDeep(node: unknown): void {
  if (Array.isArray(node)) {
    for (const item of node) backfillDeep(item);
    return;
  }
  if (!node || typeof node !== "object") return;
  const obj = node as Record<string, unknown>;
  if (isL10nNode(obj)) {
    for (const loc of LOCALES) if (obj[loc] === undefined) obj[loc] = obj[DEFAULT_LOCALE];
    return; // leaf: siblings are locale values, not nested content
  }
  for (const k of Object.keys(obj)) backfillDeep(obj[k]);
}

/** Deep-merge `over` onto a clone of `base` (per-leaf override). Used for dicts. */
export function deepMerge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) return (Array.isArray(over) ? over : base) as T;
  if (base && typeof base === "object") {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    const o = over as Record<string, unknown>;
    for (const k of Object.keys(out)) {
      if (o[k] !== undefined) out[k] = deepMerge(out[k], o[k]);
    }
    return out as T;
  }
  return (over as T) ?? base;
}
