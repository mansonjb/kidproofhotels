import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, OG_LOCALE, localeHref, type Locale } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { PageEntry } from "@/lib/types";

function abs(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Build Metadata for a page: canonical + hreflang alternates across every
 * locale (plus x-default on the default language), Open Graph and Twitter.
 */
export function buildMetadata(opts: {
  entry: PageEntry;
  locale: Locale;
  title: string;
  description: string;
}): Metadata {
  const { entry, locale, title, description } = opts;

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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
