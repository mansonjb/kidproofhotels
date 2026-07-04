import type { Dict } from "@/data/i18n/ui";
import { UI_EN } from "@/data/i18n/en";
import { UI_FR } from "@/data/i18n/fr";

// EN is the default language and lives at the root (`/`). FR is prefixed (`/fr`).
// The MVP ships EN + FR; PT/IT/DE/NL are added later on pages that perform.
export const LOCALES = ["en", "fr"] as const;
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
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  fr: "fr-FR",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

const DICTS: Record<Locale, Dict> = { en: UI_EN, fr: UI_FR };

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? DICTS.en;
}

/** Fill a `{name}` template (UI labels). */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
