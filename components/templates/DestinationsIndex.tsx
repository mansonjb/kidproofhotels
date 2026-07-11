import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { DESTINATIONS } from "@/data/destinations";
import { getByKey, pageHref } from "@/lib/registry";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DestinationCard } from "@/components/DestinationCard";

export function DestinationsIndex({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          { label: dict.nav.destinations },
        ]}
      />
      <header className="max-w-2xl">
        <p className="kicker mb-3">{dict.common.byParents}</p>
        <h1 className="font-display text-5xl leading-tight text-ink sm:text-6xl">
          {dict.home.featuredDest}
        </h1>
        <p className="mt-4 text-lg text-muted">{dict.home.featuredDestSub}</p>
        {(() => {
          const r = getByKey("destinations-ranking");
          if (!r) return null;
          return (
            <Link
              href={pageHref(r, locale)}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              🏆 {dict.ranking.cta} <span aria-hidden>→</span>
            </Link>
          );
        })()}
      </header>
      <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d) => (
          <DestinationCard key={d.key} dest={d} locale={locale} dict={dict} />
        ))}
      </div>
    </div>
  );
}
