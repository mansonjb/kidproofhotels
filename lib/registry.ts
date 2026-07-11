import { AMENITIES } from "@/data/amenities";
import { COLLECTIONS } from "@/data/collections";
import { DESTINATIONS } from "@/data/destinations";
import { GUIDES } from "@/data/guides";
import { HOTELS } from "@/data/hotels";
import { COMBOS } from "@/lib/combos";
import { LOCALES, localeHref, type Locale } from "@/lib/i18n";
import type { PageEntry } from "@/lib/types";
import { backfillDeep, src } from "@/lib/l10n";

// Localised slugs for the fixed index pages.
const FIXED: PageEntry[] = src([
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
    key: "amenities-index",
    kind: "amenities-index",
    slug: { en: "family-hotels", fr: "hotels-famille" },
    related: [],
  },
  {
    key: "collections-index",
    kind: "collections-index",
    slug: { en: "family-holidays", fr: "vacances-famille" },
    related: [],
  },
  {
    key: "destinations-ranking",
    kind: "destinations-ranking",
    slug: {
      en: "best-family-holiday-destinations",
      fr: "meilleures-destinations-vacances-famille",
    },
    related: [],
  },
  {
    key: "method",
    kind: "method",
    slug: { en: "method", fr: "methode" },
    related: [],
  },
]);

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
  ...AMENITIES.map(
    (a): PageEntry => ({
      key: `amenity-${a.id}`,
      kind: "amenity",
      slug: a.slug,
      related: [],
    }),
  ),
  ...COMBOS.map(
    (c): PageEntry => ({
      key: c.key,
      kind: "combo",
      slug: c.slug,
      related: [],
    }),
  ),
  ...COLLECTIONS.map(
    (c): PageEntry => ({
      key: `collection-${c.key}`,
      kind: "collection",
      slug: c.slug,
      related: [],
    }),
  ),
];

// Fill missing-locale slugs (it/de/es/pt) with English so every page routes.
backfillDeep(REGISTRY);

const BY_KEY = new Map(REGISTRY.map((e) => [e.key, e]));

const BY_SLUG = Object.fromEntries(
  LOCALES.map((l) => [l, new Map<string, PageEntry>()]),
) as Record<Locale, Map<string, PageEntry>>;
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
