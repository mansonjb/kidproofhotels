import { DEFAULT_LOCALE, localeHref, type Locale } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";

function abs(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

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

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: abs(localeHref(DEFAULT_LOCALE)),
    inLanguage: DEFAULT_LOCALE,
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

/** A minimal Hotel node. Ratings are our own editorial KidProof Score. */
export function hotelNode(opts: {
  name: string;
  path: string;
  locale: Locale;
  score: number;
  address: string;
  geo: { lat: number; lng: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: opts.name,
    url: abs(opts.path),
    address: opts.address,
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
        name: "KidProof Score",
      },
    },
  };
}

export function articleNode(opts: {
  title: string;
  description: string;
  path: string;
  updated: string;
  locale: Locale;
}) {
  return {
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
}
