import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import type { Combo } from "@/lib/combos";
import { combosForAmenity, combosForDestination, COMBO_BY_KEY } from "@/lib/combos";
import { AMENITY_BY_ID } from "@/data/amenities";
import { DEST_BY_KEY } from "@/data/destinations";
import { HOTEL_BY_KEY } from "@/data/hotels";
import { getByKey, pageHref } from "@/lib/registry";
import { localeHref } from "@/lib/i18n";
import { scoreOf } from "@/lib/score";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode } from "@/lib/schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Photo } from "@/components/Photo";
import { Callout } from "@/components/Callout";
import { Stay22Map } from "@/components/Stay22Map";
import { HotelCard } from "@/components/HotelCard";
import { ComparisonTable } from "@/components/blocks/ComparisonTable";

function ComboLinks({
  combos,
  title,
  locale,
  label,
}: {
  combos: Combo[];
  title: string;
  locale: Locale;
  label: (c: Combo) => string;
}) {
  if (combos.length === 0) return null;
  return (
    <section className="mt-12">
      <h2 className="mb-4 font-display text-2xl text-ink">{title}</h2>
      <ul className="flex flex-wrap gap-2">
        {combos.map((c) => {
          const entry = getByKey(c.key);
          if (!entry) return null;
          return (
            <li key={c.key}>
              <Link
                href={pageHref(entry, locale)}
                className="inline-flex items-center rounded-full border border-line bg-cloud px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-line-2 hover:bg-paper-2"
              >
                {label(c)}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function ComboPage({
  combo,
  locale,
  dict,
}: {
  combo: Combo;
  locale: Locale;
  dict: Dict;
}) {
  const dest = DEST_BY_KEY.get(combo.destKey)!;
  const amenity = AMENITY_BY_ID.get(combo.amenityId)!;
  const hotels = combo.hotelKeys
    .map((k) => HOTEL_BY_KEY.get(k))
    .filter((h): h is NonNullable<typeof h> => Boolean(h))
    .sort((a, b) => scoreOf(b) - scoreOf(a));

  const h1 = `${amenity.h1[locale]} ${dest.inPhrase[locale]}`;
  const heroImg = dest.photos?.[0] ?? amenity.img;

  const amenityEntry = getByKey(`amenity-${amenity.id}`);
  const destEntry = getByKey(dest.key);

  // Unique, fact-driven standfirst built from real data on this page: the number
  // of hotels that actually matched, the top-scoring hotel's name, and (when we
  // have it) the area families favour. No two combo pages read the same.
  const topHotel = hotels[0]?.name;
  const introFacts = fill(dict.browse.comboIntroFacts, {
    count: String(hotels.length),
    amenity: amenity.label[locale],
    dest: dest.inPhrase[locale],
    top: topHotel ?? "",
  });
  const topArea = dest.bestAreas[locale]?.[0]?.split(":")[0]?.trim();
  const areasLine = topArea ? fill(dict.browse.comboAreas, { area: topArea }) : "";

  // Cross-links: same amenity in other cities, and the rest of this city's matrix.
  const elsewhere = combosForAmenity(amenity.id).filter((c) => c.key !== combo.key);
  const moreHere = combosForDestination(dest.key).filter((c) => c.key !== combo.key);

  return (
    <article className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          {
            label: amenity.label[locale],
            href: amenityEntry ? pageHref(amenityEntry, locale) : undefined,
          },
          { label: dest.name[locale], href: destEntry ? pageHref(destEntry, locale) : undefined },
        ]}
      />

      <header className="max-w-3xl">
        <p className="kicker mb-3">
          {amenity.emoji} {amenity.label[locale]} · {dest.name[locale]}
        </p>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{h1}</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          {introFacts}
          {areasLine ? ` ${areasLine}` : ""}
        </p>
      </header>

      <div className="mt-8 aspect-[16/8] overflow-hidden rounded-[var(--radius-xl2)] sm:aspect-[16/6]">
        <Photo img={heroImg} alt={h1} w={1200} h={520} className="h-full w-full object-cover" eager />
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
        <ComparisonTable hotels={hotels} title={h1} dict={dict} locale={locale} />
      </div>

      {/* City-specific MAP: one page, one booking intent. */}
      <Stay22Map
        geo={dest.geo}
        label={`${dest.name[locale]}, ${dest.country[locale]}`}
        campaign={`combo-${combo.key}`}
        dict={dict}
      />

      <ComboLinks
        combos={elsewhere}
        title={dict.browse.sameElsewhere}
        locale={locale}
        label={(c) => `${amenity.label[locale]} · ${DEST_BY_KEY.get(c.destKey)!.name[locale]}`}
      />

      <ComboLinks
        combos={moreHere}
        title={fill(dict.browse.moreInDest, { dest: dest.inPhrase[locale] })}
        locale={locale}
        label={(c) => AMENITY_BY_ID.get(c.amenityId)!.label[locale]}
      />

      <p className="mt-12 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-muted">
        {dict.stay22.disclosure}
      </p>

      <JsonLd
        data={breadcrumbNode([
          { name: dict.common.home, path: pageHref(getByKey("home")!, locale) },
          ...(amenityEntry ? [{ name: amenity.label[locale], path: pageHref(amenityEntry, locale) }] : []),
          ...(destEntry ? [{ name: dest.name[locale], path: pageHref(destEntry, locale) }] : []),
          { name: h1, path: localeHref(locale, combo.slug[locale]) },
        ])}
      />
    </article>
  );
}

export function comboFromKey(key: string): Combo | undefined {
  return COMBO_BY_KEY.get(key);
}
