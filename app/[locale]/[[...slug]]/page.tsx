import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DEFAULT_LOCALE,
  LOCALES,
  getDict,
  isLocale,
  localeHref,
  type Locale,
} from "@/lib/i18n";
import { SITE_NAME } from "@/lib/site";
import { allPages, getBySlug } from "@/lib/registry";
import { buildMetadata } from "@/lib/seo";
import type { PageEntry } from "@/lib/types";
import { DEST_BY_KEY } from "@/data/destinations";
import { GUIDE_BY_KEY } from "@/data/guides";
import { HOTEL_BY_KEY } from "@/data/hotels";
import { AMENITY_BY_ID } from "@/data/amenities";
import { guideBody } from "@/data/guide-content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/templates/HomePage";
import { DestinationsIndex } from "@/components/templates/DestinationsIndex";
import { DestinationPage } from "@/components/templates/DestinationPage";
import { HotelPage } from "@/components/templates/HotelPage";
import { GuidesIndex } from "@/components/templates/GuidesIndex";
import { GuidePage } from "@/components/templates/GuidePage";
import { AmenitiesIndex } from "@/components/templates/AmenitiesIndex";
import { AmenityPage } from "@/components/templates/AmenityPage";
import { MethodPage } from "@/components/templates/MethodPage";

function amenityFromKey(key: string) {
  return AMENITY_BY_ID.get(key.replace(/^amenity-/, "") as never);
}

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: string; slug: string[] }[] = [];
  for (const e of allPages()) {
    for (const l of LOCALES) {
      params.push({ locale: l, slug: e.slug[l] ? e.slug[l].split("/") : [] });
    }
  }
  return params;
}

function metaFor(
  entry: PageEntry,
  locale: Locale,
): { title: string; description: string } {
  const dict = getDict(locale);
  switch (entry.kind) {
    case "home":
      return { title: `${SITE_NAME}: ${dict.brandTagline}`, description: dict.home.heroSub };
    case "destinations-index":
      return { title: dict.home.featuredDest, description: dict.home.featuredDestSub };
    case "guides-index":
      return { title: dict.guides.indexTitle, description: dict.guides.indexDek };
    case "method":
      return { title: dict.method.title, description: dict.method.dek };
    case "destination": {
      const d = DEST_BY_KEY.get(entry.key)!;
      return { title: `${dict.home.featuredDest}: ${d.name[locale]}`, description: d.intro[locale] };
    }
    case "hotel": {
      const h = HOTEL_BY_KEY.get(entry.key)!;
      const d = DEST_BY_KEY.get(h.destinationKey);
      return {
        title: d ? `${h.name}, ${d.name[locale]}` : h.name,
        description: h.roomsSummary[locale],
      };
    }
    case "guide": {
      const g = GUIDE_BY_KEY.get(entry.key)!;
      return { title: g.title[locale], description: g.dek[locale] };
    }
    case "amenities-index":
      return { title: dict.browse.amenitiesIndexTitle, description: dict.browse.amenitiesIndexDek };
    case "amenity": {
      const a = amenityFromKey(entry.key)!;
      return { title: a.h1[locale], description: a.short[locale] };
    }
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const entry = getBySlug(loc, slug);
  if (!entry) return {};
  const { title, description } = metaFor(entry, loc);
  return buildMetadata({ entry, locale: loc, title, description });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;
  const loc = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const entry = getBySlug(loc, slug);
  if (!entry) notFound();

  const dict = getDict(loc);
  const alt: Record<Locale, string> = {
    en: localeHref("en", entry.slug.en),
    fr: localeHref("fr", entry.slug.fr),
  };

  return (
    <>
      <Header locale={loc} dict={dict} alt={alt} />
      <main>
        {entry.kind === "home" && <HomePage locale={loc} dict={dict} />}
        {entry.kind === "destinations-index" && <DestinationsIndex locale={loc} dict={dict} />}
        {entry.kind === "guides-index" && <GuidesIndex locale={loc} dict={dict} />}
        {entry.kind === "amenities-index" && <AmenitiesIndex locale={loc} dict={dict} />}
        {entry.kind === "amenity" && (
          <AmenityPage amenity={amenityFromKey(entry.key)!} locale={loc} dict={dict} />
        )}
        {entry.kind === "method" && <MethodPage locale={loc} dict={dict} />}
        {entry.kind === "destination" && (
          <DestinationPage dest={DEST_BY_KEY.get(entry.key)!} entry={entry} locale={loc} dict={dict} />
        )}
        {entry.kind === "hotel" && (
          <HotelPage hotel={HOTEL_BY_KEY.get(entry.key)!} entry={entry} locale={loc} dict={dict} />
        )}
        {entry.kind === "guide" && (
          <GuidePage
            guide={GUIDE_BY_KEY.get(entry.key)!}
            entry={entry}
            locale={loc}
            dict={dict}
            Body={guideBody(loc, entry.key)}
          />
        )}
      </main>
      <Footer locale={loc} dict={dict} />
    </>
  );
}
