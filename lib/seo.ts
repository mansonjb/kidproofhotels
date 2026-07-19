import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, OG_LOCALE, localeHref, type Locale } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { imgUrl } from "@/lib/images";
import type { PageEntry } from "@/lib/types";

function abs(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Trim a description to a clean length (~155 chars) at a word boundary.
 * No trailing ellipsis: cut at the last space before the limit.
 */
function trimDescription(input: string | undefined, max = 155): string {
  const s = (input ?? "").trim().replace(/\s+/g, " ");
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd();
}

// Branded default OG/Twitter image (absolute, production-safe Unsplash URL).
// Used whenever a page has no hero of its own. 1200x630 = social card ratio.
const DEFAULT_OG_IMAGE = imgUrl("poolPalms", { w: 1200, h: 630 });

/**
 * Build Metadata for a page: canonical + hreflang alternates across every
 * locale (plus x-default on the default language), Open Graph and Twitter.
 */
export function buildMetadata(opts: {
  entry: PageEntry;
  locale: Locale;
  title: string;
  description: string;
  /** Absolute URL of a per-page hero. Falls back to the branded default. */
  image?: string;
}): Metadata {
  const { entry, locale, title, image } = opts;
  const description = trimDescription(opts.description);
  const ogImage = image || DEFAULT_OG_IMAGE;

  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[l] = abs(localeHref(l, entry.slug[l]));
  }
  languages["x-default"] = abs(localeHref(DEFAULT_LOCALE, entry.slug[DEFAULT_LOCALE]));

  const canonical = abs(localeHref(locale, entry.slug[locale]));

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: canonical,
      locale: OG_LOCALE[locale],
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
