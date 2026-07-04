import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";
import { DESTINATIONS } from "@/data/destinations";
import { GUIDES } from "@/data/guides";
import { getByKey, pageHref } from "@/lib/registry";
import { CRITERIA } from "@/lib/score";
import { SectionHeading } from "@/components/SectionHeading";
import { DestinationCard } from "@/components/DestinationCard";
import { GuideCard } from "@/components/GuideCard";

function href(key: string, locale: Locale): string {
  const e = getByKey(key);
  return e ? pageHref(e, locale) : localeHref(locale);
}

export function HomePage({ locale, dict }: { locale: Locale; dict: Dict }) {
  const h = dict.home;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:pt-20">
          <div className="relative">
            <span className="animate-float absolute -top-4 right-6 hidden text-4xl sm:block" style={{ ["--r" as string]: "8deg" }}>🏖️</span>
            <span className="animate-float absolute right-24 top-24 hidden text-3xl lg:block" style={{ ["--r" as string]: "-10deg" }}>🍦</span>
            <p className="kicker mb-4">{h.heroKicker}</p>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              {h.heroTitleA}{" "}
              <span className="relative whitespace-nowrap text-sun-deep">
                {h.heroTitleAccent}
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 9C60 3 240 3 298 8" stroke="var(--color-sun)" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{" "}
              {h.heroTitleB}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {h.heroSub}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={href("destinations-index", locale)}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                {h.ctaPrimary} <span aria-hidden>→</span>
              </Link>
              <Link
                href={href("method", locale)}
                className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-cloud px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-paper-2"
              >
                {h.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured destinations, bento */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <SectionHeading
          kicker={dict.common.byParents}
          title={h.featuredDest}
          sub={h.featuredDestSub}
          action={
            <Link href={href("destinations-index", locale)} className="text-sm font-semibold text-sky-deep hover:text-ink">
              {dict.destination.allDestinations} →
            </Link>
          }
        />
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d, i) => (
            <DestinationCard key={d.key} dest={d} locale={locale} dict={dict} large={i === 0} />
          ))}
        </div>
      </section>

      {/* KidProof Score explainer */}
      <section className="bg-paper-2 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="kicker mb-3">{h.scoreSectionKicker}</p>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              {h.scoreSectionTitle}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
              {h.scoreSectionBody}
            </p>
            <Link
              href={href("method", locale)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-deep hover:text-ink"
            >
              {dict.score.howItWorks} →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {CRITERIA.slice(0, 8).map((c) => (
              <div key={c.id} className="rounded-2xl border border-line bg-cloud p-4">
                <span className="text-2xl">{c.emoji}</span>
                <p className="mt-2 text-sm font-bold text-ink">
                  {dict.score.criteria[c.id].name}
                </p>
                <div className="mt-2 h-1.5 rounded-full bg-line">
                  <div className="h-full rounded-full bg-sun" style={{ width: `${Math.round(c.weight * 100 * 4.2)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest guides */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          kicker={dict.nav.guides}
          title={h.latestGuides}
          sub={h.latestGuidesSub}
          action={
            <Link href={href("guides-index", locale)} className="text-sm font-semibold text-sky-deep hover:text-ink">
              {dict.guides.all} →
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.slice(0, 3).map((g) => (
            <GuideCard key={g.key} guide={g} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="rounded-[var(--radius-xl2)] border border-line bg-cloud p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="kicker mb-3">{h.trustKicker}</p>
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
                {h.trustTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{h.trustBody}</p>
            </div>
            <ul className="space-y-4">
              {h.trustPoints.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sun text-ink">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-ink-soft">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
