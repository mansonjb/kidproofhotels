import { DESTINATIONS } from "@/data/destinations";
import { GUIDES } from "@/data/guides";
import { HOTELS } from "@/data/hotels";
import { LOCALES, localeHref, type Locale } from "@/lib/i18n";
import type { PageEntry } from "@/lib/types";

// Localised slugs for the fixed index pages.
const FIXED: PageEntry[] = [
  { key: "home", kind: "home", slug: { en: "", fr: "" }, related: [] },
  {
    key: "destinations-index",
    kind: "destinations-index",
    slug: { en: "destinations", fr: "destinations" },
    related: [],
  },
  {
    key: "guides-index",
    kind: "guides-index",
    slug: { en: "guides", fr: "guides" },
    related: [],
  },
  {
    key: "method",
    kind: "method",
    slug: { en: "method", fr: "methode" },
    related: [],
  },
];

// Assemble the whole site's page list from the typed data collections.
export const REGISTRY: PageEntry[] = [
  ...FIXED,
  ...DESTINATIONS.map(
    (d): PageEntry => ({
      key: d.key,
      kind: "destination",
      slug: d.slug,
      related: d.related,
    }),
  ),
  ...HOTELS.map(
    (h): PageEntry => ({
      key: h.key,
      kind: "hotel",
      slug: h.slug,
      related: h.related,
    }),
  ),
  ...GUIDES.map(
    (g): PageEntry => ({
      key: g.key,
      kind: "guide",
      slug: g.slug,
      related: g.related,
    }),
  ),
];

const BY_KEY = new Map(REGISTRY.map((e) => [e.key, e]));

const BY_SLUG: Record<Locale, Map<string, PageEntry>> = {
  en: new Map(),
  fr: new Map(),
};
for (const e of REGISTRY) {
  for (const l of LOCALES) BY_SLUG[l].set(norm(e.slug[l]), e);
}

function norm(p: string): string {
  return p.replace(/^\/+|\/+$/g, "");
}

export function allPages(): PageEntry[] {
  return REGISTRY;
}

export function getByKey(key: string): PageEntry | undefined {
  return BY_KEY.get(key);
}

/** Resolve a page from the URL segments of a locale (catch-all). */
export function getBySlug(
  locale: Locale,
  segments: string[] | undefined,
): PageEntry | undefined {
  return BY_SLUG[locale].get(norm((segments ?? []).join("/")));
}

/** Internal href of a page in a given locale. */
export function pageHref(entry: PageEntry, locale: Locale): string {
  return localeHref(locale, entry.slug[locale]);
}

/** Related pages (internal linking), in declared order, deduplicated. */
export function relatedOf(entry: PageEntry): PageEntry[] {
  const seen = new Set<string>();
  const out: PageEntry[] = [];
  for (const k of entry.related) {
    if (seen.has(k) || k === entry.key) continue;
    const e = BY_KEY.get(k);
    if (e) {
      out.push(e);
      seen.add(k);
    }
  }
  return out;
}
