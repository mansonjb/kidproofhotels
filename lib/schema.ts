import { DEFAULT_LOCALE, localeHref, type Locale } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { PriceTier } from "@/lib/types";

/**
 * A stable "last reviewed" date for evergreen listing pages (hotels,
 * destinations) that carry no per-item date of their own. Bumped by hand at
 * each editorial pass. Never derived from Date.now()/new Date() with no args.
 */
export const SITE_UPDATED = "2026-07-01";

function abs(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Absolute URL for an image src that may already be absolute (external Unsplash
 * URL) or relative to the site (/images/…).
 */
export function absImage(src: string): string {
  return /^https?:\/\//.test(src) ? src : abs(src);
}

/** priceTier 1-4 → schema.org priceRange string. */
const PRICE_RANGE: Record<PriceTier, string> = {
  1: "€",
  2: "€€",
  3: "€€€",
  4: "€€€€",
};

/** Organization node for the site chrome. */
export function orgNode() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: SITE_NAME,
    url: SITE_URL,
    description: "Editorial guide to family-friendly hotels, scored for kids.",
  } as const;
}

/** WebSite node. `locale` sets inLanguage so localized pages aren't hardcoded to en. */
export function websiteNode(locale: Locale = DEFAULT_LOCALE) {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: abs(localeHref(locale)),
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#org` },
  } as const;
}

/** BreadcrumbList from an ordered list of {name, path} pairs (path relative). */
export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** ItemList from an ordered list of {name, path} pairs (path relative). */
export function itemListNode(opts: {
  name: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    itemListElement: opts.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: abs(it.path),
    })),
  };
}

/** A minimal Hotel node. Ratings are our own editorial KidProof Score. */
export function hotelNode(opts: {
  name: string;
  path: string;
  locale: Locale;
  score: number;
  address: { locality: string; country: string };
  geo: { lat: number; lng: number };
  image?: string;
  priceTier?: PriceTier;
}) {
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: opts.name,
    url: abs(opts.path),
    address: {
      "@type": "PostalAddress",
      addressLocality: opts.address.locality,
      addressCountry: opts.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: opts.geo.lat,
      longitude: opts.geo.lng,
    },
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: SITE_NAME },
      reviewRating: {
        "@type": "Rating",
        ratingValue: opts.score,
        bestRating: 100,
        worstRating: 0,
      },
    },
  };
  if (opts.image) node.image = absImage(opts.image);
  if (opts.priceTier) node.priceRange = PRICE_RANGE[opts.priceTier];
  return node;
}

export function articleNode(opts: {
  title: string;
  description: string;
  path: string;
  updated: string;
  locale: Locale;
  image?: string;
}) {
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: abs(opts.path),
    dateModified: opts.updated,
    inLanguage: opts.locale,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@id": `${SITE_URL}/#org` },
  };
  if (opts.image) node.image = absImage(opts.image);
  return node;
}
