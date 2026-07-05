import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import type { Destination, PageEntry } from "@/lib/types";
import { getByKey, pageHref } from "@/lib/registry";
import { HOTEL_BY_KEY } from "@/data/hotels";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Stay22Map } from "@/components/Stay22Map";
import { HotelCard } from "@/components/HotelCard";
import { RelatedPages } from "@/components/RelatedPages";
import { Photo } from "@/components/Photo";
import { Callout } from "@/components/Callout";
import { StatStrip } from "@/components/blocks/StatStrip";
import { Activities } from "@/components/blocks/Activities";
import { ComparisonTable } from "@/components/blocks/ComparisonTable";
import { Faq } from "@/components/blocks/Faq";

function CheckList({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 rounded-2xl border border-line bg-cloud p-4">
          <span
            className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white"
            style={{ background: `#${accent}` }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-sm leading-relaxed text-ink-soft">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function DestinationPage({
  dest,
  entry,
  locale,
  dict,
}: {
  dest: Destination;
  entry: PageEntry;
  locale: Locale;
  dict: Dict;
}) {
  const idx = getByKey("destinations-index");
  const hotels = dest.hotelKeys
    .map((k) => HOTEL_BY_KEY.get(k))
    .filter((h): h is NonNullable<typeof h> => Boolean(h));

  return (
    <article className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          { label: dict.nav.destinations, href: idx ? pageHref(idx, locale) : undefined },
          { label: dest.name[locale] },
        ]}
      />

      <header className="max-w-3xl">
        <p className="kicker mb-3">{dest.heroKicker[locale]}</p>
        <h1 className="font-display text-5xl leading-[1.03] text-ink sm:text-6xl">
          <span className="mr-2">{dest.emoji}</span>
          {dest.name[locale]}
        </h1>
        <p className="mt-2 text-lg text-muted">{dest.country[locale]}</p>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{dest.intro[locale]}</p>
      </header>

      {dest.photos && dest.photos[0] && (
        <div className="mt-8 aspect-[16/8] overflow-hidden rounded-[var(--radius-xl2)] sm:aspect-[16/6]">
          <Photo img={dest.photos[0]} alt={dest.name[locale]} w={1200} h={520} className="h-full w-full object-cover" eager />
        </div>
      )}

      {dest.stats && (
        <div className="mt-8">
          <StatStrip stats={dest.stats} locale={locale} />
        </div>
      )}

      <Stay22Map
        geo={dest.geo}
        label={`${dest.name[locale]}, ${dest.country[locale]}`}
        campaign={`dest-${dest.key}`}
        dict={dict}
      />

      <section className="mt-4">
        <h2 className="mb-5 font-display text-3xl text-ink">{dict.destination.whyKids}</h2>
        <CheckList items={dest.whyKids[locale]} accent={dest.accent} />
      </section>

      {dest.goodToKnow && (
        <Callout variant="headsup" title={dict.blocks.goodToKnow}>
          {dest.goodToKnow[locale]}
        </Callout>
      )}

      <section className="mt-10">
        <h2 className="mb-5 font-display text-3xl text-ink">{dict.destination.bestAreas}</h2>
        <ol className="space-y-3">
          {dest.bestAreas[locale].map((t, i) => (
            <li key={i} className="flex gap-4 rounded-2xl border border-line bg-cloud p-4">
              <span className="font-display text-2xl text-sun-deep">{i + 1}</span>
              <span className="self-center text-sm leading-relaxed text-ink-soft">{t}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-ink">{dict.destination.ourPicks}</h2>
        <p className="mt-1 text-base text-muted">{dict.destination.picksNote}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.key} hotel={hotel} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <div className="mt-12">
        <ComparisonTable
          hotels={hotels}
          title={fill(dict.blocks.compare, { name: dest.name[locale] })}
          dict={dict}
          locale={locale}
        />
      </div>

      {dest.parentTip && (
        <Callout variant="hack" title={dict.blocks.parentTip}>
          {dest.parentTip[locale]}
        </Callout>
      )}

      {dest.activities && (
        <div className="mt-12">
          <Activities
            activities={dest.activities}
            title={fill(dict.blocks.activitiesIn, { name: dest.name[locale] })}
            dict={dict}
            locale={locale}
          />
        </div>
      )}

      {dest.faqs && (
        <div className="mt-12">
          <Faq faqs={dest.faqs} dict={dict} locale={locale} />
        </div>
      )}

      <RelatedPages entry={entry} locale={locale} dict={dict} title={dict.common.exploreAll} />

      <p className="mt-12 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-muted">
        {dict.stay22.disclosure}
      </p>
    </article>
  );
}
