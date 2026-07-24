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
import { ComboPage, comboFromKey } from "@/components/templates/ComboPage";
import { CollectionsIndex } from "@/components/templates/CollectionsIndex";
import { CollectionPage } from "@/components/templates/CollectionPage";
import { DestinationsRanking } from "@/components/templates/DestinationsRanking";
import { collectionFromKey } from "@/lib/collections";
import { MethodPage } from "@/components/templates/MethodPage";
import { imgUrl, type ImgKey } from "@/lib/images";

// Absolute Unsplash URL for a page hero, at social-card ratio (1200x630).
function heroImage(photos?: ImgKey[]): string | undefined {
  const key = photos?.[0];
  return key ? imgUrl(key, { w: 1200, h: 630 }) : undefined;
}

function amenityFromKey(key: string) {
  return AMENITY_BY_ID.get(key.replace(/^amenity-/, "") as never);
}

// On-demand ISR: single catch-all route was rebuilding every page (2,398
// pages: all destinations/guides/hotels/collections/amenities x 6 locales)
// on every deploy, for the daily kidproof-ship-destination cron's 1 new
// destination. Pages render on first request and cache for `revalidate`.
export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return [];
}

function metaFor(
  entry: PageEntry,
  locale: Locale,
): { title: string; description: string; image?: string } {
  const dict = getDict(locale);
  switch (entry.kind) {
    case "home":
      // Brand is appended once by the layout title template; don't prefix it here.
      return { title: dict.brandTagline, description: dict.home.heroSub };
    case "destinations-index":
      return { title: dict.home.featuredDest, description: dict.home.featuredDestSub };
    case "guides-index":
      return { title: dict.guides.indexTitle, description: dict.guides.indexDek };
    case "method":
      return { title: dict.method.title, description: dict.method.dek };
    case "destination": {
      const d = DEST_BY_KEY.get(entry.key)!;
      return {
        title: `${dict.home.featuredDest}: ${d.name[locale]}`,
        description: d.intro[locale],
        image: heroImage(d.photos),
      };
    }
    case "hotel": {
      const h = HOTEL_BY_KEY.get(entry.key)!;
      const d = DEST_BY_KEY.get(h.destinationKey);
      return {
        title: d ? `${h.name}, ${d.name[locale]}` : h.name,
        description: h.roomsSummary[locale],
        image: heroImage(h.photos),
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
    case "combo": {
      const c = comboFromKey(entry.key)!;
      const a = AMENITY_BY_ID.get(c.amenityId)!;
      const d = DEST_BY_KEY.get(c.destKey)!;
      const title = `${a.h1[locale]} ${d.inPhrase[locale]}`;
      return { title, description: `${a.short[locale]} ${d.inPhrase[locale]}.` };
    }
    case "collections-index":
      return { title: dict.collections.indexTitle, description: dict.collections.indexDek };
    case "collection": {
      const c = collectionFromKey(entry.key)!;
      return { title: c.title[locale], description: c.dek[locale] };
    }
    case "destinations-ranking":
      return { title: dict.ranking.title, description: dict.ranking.dek };
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
  const { title, description, image } = metaFor(entry, loc);
  return buildMetadata({ entry, locale: loc, title, description, image });
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
  const alt = Object.fromEntries(
    LOCALES.map((l) => [l, localeHref(l, entry.slug[l])]),
  ) as Record<Locale, string>;

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
        {entry.kind === "combo" && (
          <ComboPage combo={comboFromKey(entry.key)!} locale={loc} dict={dict} />
        )}
        {entry.kind === "collections-index" && <CollectionsIndex locale={loc} dict={dict} />}
        {entry.kind === "collection" && (
          <CollectionPage collection={collectionFromKey(entry.key)!} locale={loc} dict={dict} />
        )}
        {entry.kind === "destinations-ranking" && <DestinationsRanking locale={loc} dict={dict} />}
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
