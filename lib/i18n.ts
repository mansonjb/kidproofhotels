import type { Dict } from "@/data/i18n/ui";
import { UI_EN } from "@/data/i18n/en";
import { UI_FR } from "@/data/i18n/fr";
import GEN_IT from "@/data/i18n/generated/it.json";
import GEN_DE from "@/data/i18n/generated/de.json";
import GEN_ES from "@/data/i18n/generated/es.json";
import GEN_PT from "@/data/i18n/generated/pt.json";

// EN is the default language and lives at the root (`/`). Every other locale is
// prefixed (`/fr`, `/it`, `/de`, `/es`, `/pt`). EN + FR are authored; it/de/es/pt
// are generated (data/i18n/generated/<locale>.json) and fall back to English
// per key until translated.
export const LOCALES = ["en", "fr", "it", "de", "es", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(x: string | undefined): x is Locale {
  return !!x && (LOCALES as readonly string[]).includes(x);
}

/** URL prefix for a language. Empty for the default language. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/** Build an internal href from a localised path (without the locale segment). */
export function localeHref(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const base = localePrefix(locale);
  const full = clean ? `${base}/${clean}` : base;
  return full === "" ? "/" : full;
}

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  it: "it_IT",
  de: "de_DE",
  es: "es_ES",
  pt: "pt_PT",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  fr: "fr-FR",
  it: "it-IT",
  de: "de-DE",
  es: "es-ES",
  pt: "pt-PT",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
  es: "Español",
  pt: "Português",
};

// deepMerge is defined in lib/l10n; re-implemented tiny here to avoid a cycle
// (l10n imports i18n).
function mergeDict(base: Dict, over: unknown): Dict {
  if (!over || typeof over !== "object") return base;
  const walk = (b: unknown, o: unknown): unknown => {
    if (o === undefined || o === null) return b;
    if (Array.isArray(b)) return Array.isArray(o) ? o : b;
    if (b && typeof b === "object") {
      const out: Record<string, unknown> = { ...(b as Record<string, unknown>) };
      const oo = o as Record<string, unknown>;
      for (const k of Object.keys(out)) if (oo[k] !== undefined) out[k] = walk(out[k], oo[k]);
      return out;
    }
    return typeof o === typeof b ? o : b;
  };
  return walk(base, over) as Dict;
}

const DICTS: Record<Locale, Dict> = {
  en: UI_EN,
  fr: UI_FR,
  it: mergeDict(UI_EN, GEN_IT),
  de: mergeDict(UI_EN, GEN_DE),
  es: mergeDict(UI_EN, GEN_ES),
  pt: mergeDict(UI_EN, GEN_PT),
};

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? DICTS.en;
}

/** Fill a `{name}` template (UI labels). */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
