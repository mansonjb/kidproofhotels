import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import type { Amenity } from "@/data/amenities";
import { AMENITIES } from "@/data/amenities";
import { hotelsWithAmenity } from "@/data/hotels";
import { getByKey, pageHref } from "@/lib/registry";
import { localeHref } from "@/lib/i18n";
import { scoreOf } from "@/lib/score";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode, itemListNode } from "@/lib/schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Photo } from "@/components/Photo";
import { Callout } from "@/components/Callout";
import { HotelCard } from "@/components/HotelCard";
import { AmenityCard } from "@/components/AmenityCard";
import { ComparisonTable } from "@/components/blocks/ComparisonTable";

export function AmenityPage({
  amenity,
  locale,
  dict,
}: {
  amenity: Amenity;
  locale: Locale;
  dict: Dict;
}) {
  const idx = getByKey("amenities-index");
  const hotels = [...hotelsWithAmenity(amenity.id)].sort((a, b) => scoreOf(b) - scoreOf(a));
  const others = AMENITIES.filter((a) => a.id !== amenity.id).slice(0, 6);

  return (
    <article className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          { label: dict.browse.amenitiesTitle, href: idx ? pageHref(idx, locale) : undefined },
          { label: amenity.label[locale] },
        ]}
      />

      <header className="max-w-3xl">
        <p className="kicker mb-3">{dict.browse.amenitiesTitle}</p>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          <span className="mr-2">{amenity.emoji}</span>
          {amenity.h1[locale]}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{amenity.intro[locale]}</p>
      </header>

      <div className="mt-8 aspect-[16/8] overflow-hidden rounded-[var(--radius-xl2)] sm:aspect-[16/6]">
        <Photo img={amenity.img} alt={amenity.h1[locale]} w={1200} h={520} className="h-full w-full object-cover" eager />
      </div>

      <Callout variant="tip" title={dict.blocks.parentTip}>
        {amenity.tip[locale]}
      </Callout>

      <section className="mt-8">
        <h2 className="mb-5 font-display text-3xl text-ink">
          {fill(dict.browse.ourPicksWith, { name: amenity.label[locale] })}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.key} hotel={hotel} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <div className="mt-12">
        <ComparisonTable
          hotels={hotels}
          title={fill(dict.browse.ourPicksWith, { name: amenity.label[locale] })}
          dict={dict}
          locale={locale}
        />
      </div>

      <section className="mt-14">
        <h2 className="mb-5 font-display text-2xl text-ink">{dict.browse.amenitiesTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((a) => (
            <AmenityCard key={a.id} amenity={a} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <p className="mt-12 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-muted">
        {dict.stay22.disclosure}
      </p>

      <JsonLd
        data={breadcrumbNode([
          { name: dict.common.home, path: pageHref(getByKey("home")!, locale) },
          ...(idx ? [{ name: dict.browse.amenitiesTitle, path: pageHref(idx, locale) }] : []),
          { name: amenity.label[locale], path: localeHref(locale, amenity.slug[locale]) },
        ])}
      />

      <JsonLd
        data={itemListNode({
          name: fill(dict.browse.ourPicksWith, { name: amenity.label[locale] }),
          items: hotels.map((hotel) => ({
            name: hotel.name,
            path: localeHref(locale, hotel.slug[locale]),
          })),
        })}
      />
    </article>
  );
}
