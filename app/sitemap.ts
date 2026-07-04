import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES, localeHref } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { allPages } from "@/lib/registry";

function abs(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

// One entry per page per locale, each with hreflang alternates. FR lives under
// /fr; EN (default) at the root.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const e of allPages()) {
    const languages: Record<string, string> = {};
    for (const l of LOCALES) languages[l] = abs(localeHref(l, e.slug[l]));

    for (const l of LOCALES) {
      entries.push({
        url: abs(localeHref(l, e.slug[l])),
        changeFrequency: e.kind === "home" ? "weekly" : "monthly",
        priority: e.kind === "home" ? 1 : e.kind === "destination" ? 0.9 : 0.7,
        alternates: {
          languages: { ...languages, "x-default": abs(localeHref(DEFAULT_LOCALE, e.slug[DEFAULT_LOCALE])) },
        },
      });
    }
  }

  return entries;
}
