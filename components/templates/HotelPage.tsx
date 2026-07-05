import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import type { Hotel, PageEntry } from "@/lib/types";
import { DEST_BY_KEY } from "@/data/destinations";
import { HOTEL_BY_KEY } from "@/data/hotels";
import { getByKey, pageHref } from "@/lib/registry";
import { kidProofScore } from "@/lib/score";
import { stay22Url } from "@/lib/affiliates/stay22";
import { hotelNode } from "@/lib/schema";
import { localeHref } from "@/lib/i18n";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScoreBreakdown } from "@/components/ScoreBreakdown";
import { AgeChips, PriceTag } from "@/components/AgeChips";
import { Stay22Map } from "@/components/Stay22Map";
import { HotelCard } from "@/components/HotelCard";
import { AffiliateLink } from "@/components/AffiliateLink";
import { PhotoGallery } from "@/components/Photo";
import { JsonLd } from "@/components/JsonLd";
import { Callout } from "@/components/Callout";
import { Verdict } from "@/components/blocks/Verdict";
import { AtAGlance } from "@/components/blocks/AtAGlance";
import { SampleDay } from "@/components/blocks/SampleDay";
import { Activities } from "@/components/blocks/Activities";
import { AgeSuitability } from "@/components/blocks/AgeSuitability";
import { Faq } from "@/components/blocks/Faq";

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
  const score = kidProofScore(hotel.scores);
  const similar = hotel.related
    .map((k) => HOTEL_BY_KEY.get(k))
    .filter((h): h is NonNullable<typeof h> => Boolean(h));
  const bookHref = stay22Url(hotel.address, hotel.name);
  const accent = dest?.accent ?? "ff9d1c";

  return (
    <article className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          ...(dest ? [{ label: dest.name[locale], href: pageHref(getByKey(dest.key)!, locale) }] : []),
          { label: hotel.name },
        ]}
      />

      {/* Header */}
      <header>
        {dest && (
          <p className="kicker mb-3">
            {fill(dict.hotel.inDestination, { name: `${dest.name[locale]}, ${dest.country[locale]}` })}
          </p>
        )}
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{hotel.name}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <AgeChips ages={hotel.ages} dict={dict} />
          <PriceTag tier={hotel.priceTier} from={hotel.priceFrom} dict={dict} />
        </div>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">{hotel.intro[locale]}</p>
      </header>

      {hotel.photos && hotel.photos.length > 0 && (
        <div className="mt-8">
          <PhotoGallery imgs={hotel.photos} alt={hotel.name} />
        </div>
      )}

      {/* Verdict + score */}
      {hotel.verdict && (
        <div className="mt-10">
          <Verdict verdict={hotel.verdict} scores={hotel.scores} dict={dict} locale={locale} />
        </div>
      )}

      {/* Rooms first: factor n°1 */}
      <section className="mt-10 overflow-hidden rounded-[var(--radius-xl2)] border-2 border-sun bg-sun/10">
        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:p-7">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sun text-3xl">🛏️</span>
          <div>
            <h2 className="font-display text-2xl text-ink">{dict.hotel.rooms}</h2>
            <p className="mt-1 text-base leading-relaxed text-ink-soft">{hotel.roomsSummary[locale]}</p>
          </div>
        </div>
      </section>

      {/* At a glance */}
      {hotel.atAGlance && (
        <div className="mt-10">
          <AtAGlance facts={hotel.atAGlance} dict={dict} locale={locale} />
        </div>
      )}

      {/* Parent hack */}
      {hotel.parentTip && (
        <Callout variant="hack" title={dict.blocks.parentTip}>
          {hotel.parentTip[locale]}
        </Callout>
      )}

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

      {/* Sample day */}
      {hotel.sampleDay && (
        <div className="mt-12">
          <SampleDay steps={hotel.sampleDay} dict={dict} locale={locale} accent={accent} />
        </div>
      )}

      {/* Activities nearby */}
      {hotel.activities && (
        <div className="mt-12">
          <Activities activities={hotel.activities} title={dict.blocks.activitiesNear} dict={dict} locale={locale} />
        </div>
      )}

      {/* Age suitability */}
      {hotel.ageNotes && (
        <div className="mt-12">
          <AgeSuitability ages={hotel.ages} notes={hotel.ageNotes} dict={dict} locale={locale} />
        </div>
      )}

      {/* Heads up (cons) */}
      <div className="mt-4">
        <Callout variant="headsup" title={dict.hotel.cons}>
          <ul className="space-y-1">
            {hotel.cons[locale].map((t, i) => (
              <li key={i}>• {t}</li>
            ))}
          </ul>
        </Callout>
      </div>

      {/* Book CTA */}
      <div className="mt-10 flex flex-col items-center gap-4 rounded-[var(--radius-xl2)] bg-ink p-8 text-center">
        <p className="font-display text-2xl text-paper">{dict.blocks.planStay}</p>
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

      {/* FAQ */}
      {hotel.faqs && (
        <div className="mt-12">
          <Faq faqs={hotel.faqs} dict={dict} locale={locale} />
        </div>
      )}

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

      <JsonLd
        data={hotelNode({
          name: hotel.name,
          path: localeHref(locale, hotel.slug[locale]),
          locale,
          score,
          address: hotel.address,
          geo: hotel.geo,
        })}
      />
    </article>
  );
}
