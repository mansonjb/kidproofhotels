import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import { destinationsRanked } from "@/lib/destination-rank";
import { hotelsInDestination } from "@/data/hotels";
import { hotelHeroSrc, hasRealPhoto } from "@/lib/hotel-photos";
import { grade } from "@/lib/score";
import { getByKey, pageHref } from "@/lib/registry";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { localeHref } from "@/lib/i18n";

const CHIP: Record<string, string> = {
  gold: "bg-sun text-ink",
  green: "bg-grass text-white",
  amber: "bg-coral text-white",
};

export function DestinationsRanking({ locale, dict }: { locale: Locale; dict: Dict }) {
  const ranked = destinationsRanked();

  return (
    <article className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          { label: dict.ranking.title },
        ]}
      />

      <header className="max-w-3xl">
        <p className="kicker mb-3">🏆 {dict.ranking.how}</p>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{dict.ranking.title}</h1>
        <p className="mt-4 text-lg text-muted">{dict.ranking.dek}</p>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{dict.ranking.intro}</p>
      </header>

      <ol className="mt-10 space-y-4">
        {ranked.map((r, i) => {
          const entry = getByKey(r.dest.key);
          if (!entry) return null;
          const hero = hotelsInDestination(r.dest.key).find(hasRealPhoto);
          const src = hero ? hotelHeroSrc(hero, 480, 360) : "";
          const g = grade(r.avg);
          return (
            <li key={r.dest.key}>
              <Link
                href={pageHref(entry, locale)}
                className="group flex gap-4 overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-cloud p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(58,42,51,0.4)] sm:gap-6 sm:p-5"
              >
                <span className="grid w-8 shrink-0 place-items-start pt-2 font-display text-3xl text-muted sm:w-12 sm:text-5xl">
                  {i + 1}
                </span>
                {src && (
                  <div className="hidden aspect-[4/3] w-40 shrink-0 overflow-hidden rounded-2xl sm:block">
                    <img src={src} alt={r.dest.name[locale]} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xl" aria-hidden>{r.dest.emoji}</span>
                    <h2 className="font-display text-2xl leading-tight text-ink">{r.dest.name[locale]}</h2>
                    <span className="kicker">{r.dest.country[locale]}</span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">{r.dest.heroKicker[locale]}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-3 py-1 font-semibold text-ink">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${CHIP[g.band]}`}>{r.avg}</span>
                      {dict.ranking.avgScore}
                    </span>
                    {r.from > 0 && (
                      <span className="text-muted">{dict.ranking.from} <span className="font-semibold text-ink">{r.from}€</span></span>
                    )}
                    <span className="font-semibold text-sky-deep">{fill(dict.browse.hotelsCount, { count: String(r.count) })} →</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>

      <p className="mt-10 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-muted">
        {dict.stay22.disclosure}
      </p>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: dict.ranking.title,
          itemListElement: ranked.map((r, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: r.dest.name[locale],
            url: `${SITE_URL}${localeHref(locale, getByKey(r.dest.key)!.slug[locale])}`,
          })),
        }}
      />
    </article>
  );
}
