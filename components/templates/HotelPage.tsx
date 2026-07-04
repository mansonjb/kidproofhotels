import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import type { Hotel, PageEntry } from "@/lib/types";
import { DEST_BY_KEY } from "@/data/destinations";
import { HOTEL_BY_KEY } from "@/data/hotels";
import { getByKey, pageHref } from "@/lib/registry";
import { topCriterion } from "@/lib/score";
import { stay22Url } from "@/lib/affiliates/stay22";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScoreBadge } from "@/components/ScoreBadge";
import { ScoreBreakdown } from "@/components/ScoreBreakdown";
import { AgeChips, PriceTag } from "@/components/AgeChips";
import { Stay22Map } from "@/components/Stay22Map";
import { HotelCard } from "@/components/HotelCard";
import { AffiliateLink } from "@/components/AffiliateLink";
import { Postcard } from "@/components/Postcard";

export function HotelPage({
  hotel,
  entry,
  locale,
  dict,
}: {
  hotel: Hotel;
  entry: PageEntry;
  locale: Locale;
  dict: Dict;
}) {
  const dest = DEST_BY_KEY.get(hotel.destinationKey);
  const top = topCriterion(hotel.scores);
  const similar = hotel.related
    .map((k) => HOTEL_BY_KEY.get(k))
    .filter((h): h is NonNullable<typeof h> => Boolean(h));

  const bookHref = stay22Url(hotel.address, hotel.name);

  return (
    <article className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          ...(dest
            ? [{ label: dest.name[locale], href: pageHref(getByKey(dest.key)!, locale) }]
            : []),
          { label: hotel.name },
        ]}
      />

      {/* Header */}
      <header className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div>
          {dest && (
            <p className="kicker mb-3">
              {fill(dict.hotel.inDestination, { name: `${dest.name[locale]}, ${dest.country[locale]}` })}
            </p>
          )}
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            {hotel.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <AgeChips ages={hotel.ages} dict={dict} />
            <PriceTag tier={hotel.priceTier} from={hotel.priceFrom} dict={dict} />
          </div>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{hotel.intro[locale]}</p>
        </div>

        {/* Score + what stands out */}
        <aside className="rounded-[var(--radius-xl2)] border border-line bg-cloud p-6 text-center">
          <p className="kicker mb-4">{dict.score.label}</p>
          <div className="flex justify-center">
            <ScoreBadge scores={hotel.scores} dict={dict} size="lg" />
          </div>
          <div className="mt-5 rounded-2xl bg-paper-2 p-4 text-left">
            <p className="text-xs font-bold uppercase tracking-wide text-sun-deep">
              {dict.score.whatStandsOut}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-ink">
              {dict.score.criteria[top].name}
            </p>
            <p className="mt-0.5 text-xs leading-snug text-muted">
              {dict.score.criteria[top].blurb}
            </p>
          </div>
        </aside>
      </header>

      {/* Rooms first: factor n°1 */}
      <section className="mt-10 overflow-hidden rounded-[var(--radius-xl2)] border-2 border-sun bg-sun/10">
        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:p-7">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sun text-3xl">🛏️</span>
          <div>
            <h2 className="font-display text-2xl text-ink">{dict.hotel.rooms}</h2>
            <p className="mt-1 text-base leading-relaxed text-ink-soft">
              {hotel.roomsSummary[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Score breakdown */}
      <section className="mt-10 rounded-[var(--radius-xl2)] border border-line bg-cloud p-6 sm:p-8">
        <h2 className="mb-1 font-display text-2xl text-ink">{dict.score.howItWorks}</h2>
        <p className="mb-6 text-sm text-muted">{dict.score.howItWorksBody}</p>
        <ScoreBreakdown scores={hotel.scores} dict={dict} />
      </section>

      {/* Highlights */}
      <section className="mt-10">
        <h2 className="mb-5 font-display text-2xl text-ink">{dict.hotel.highlights}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {hotel.highlights[locale].map((t, i) => (
            <li key={i} className="flex gap-3 rounded-2xl border border-line bg-cloud p-4">
              <span className="text-xl" aria-hidden>✨</span>
              <span className="text-sm leading-relaxed text-ink-soft">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Pros / cons */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-line bg-cloud p-6">
          <h3 className="mb-3 flex items-center gap-2 font-display text-xl text-ink">
            <span className="text-grass">＋</span> {dict.hotel.pros}
          </h3>
          <ul className="space-y-2">
            {hotel.pros[locale].map((t, i) => (
              <li key={i} className="text-sm leading-relaxed text-ink-soft">• {t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-line bg-cloud p-6">
          <h3 className="mb-3 flex items-center gap-2 font-display text-xl text-ink">
            <span className="text-coral">！</span> {dict.hotel.cons}
          </h3>
          <ul className="space-y-2">
            {hotel.cons[locale].map((t, i) => (
              <li key={i} className="text-sm leading-relaxed text-ink-soft">• {t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Book CTA */}
      <div className="mt-10 flex flex-col items-center gap-4 rounded-[var(--radius-xl2)] bg-ink p-8 text-center">
        <Postcard emoji={dest?.emoji ?? "🏨"} accent={dest?.accent ?? "ff9d1c"} ratio="aspect-[6/1]" className="w-full rounded-2xl" />
        <AffiliateLink
          network="stay22"
          context={`hotel-${hotel.key}-book`}
          href={bookHref}
          className="inline-flex items-center gap-2 rounded-full bg-sun px-8 py-4 text-base font-bold text-ink transition-transform hover:-translate-y-0.5"
        >
          {dict.hotel.book} <span aria-hidden>→</span>
        </AffiliateLink>
        <p className="max-w-md text-xs leading-relaxed text-paper/70">{dict.stay22.note}</p>
      </div>

      {/* Hotel-specific MAP */}
      <Stay22Map
        geo={hotel.geo}
        label={hotel.address}
        hotelName={hotel.name}
        campaign={`hotel-${hotel.key}`}
        dict={dict}
      />

      {/* Similar */}
      {similar.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 font-display text-2xl text-ink">{dict.hotel.similar}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {similar.map((s) => (
              <HotelCard key={s.key} hotel={s} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      )}

      <p className="mt-12 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-muted">
        {dict.stay22.disclosure}
      </p>
    </article>
  );
}
