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
      </header>
      <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d) => (
          <DestinationCard key={d.key} dest={d} locale={locale} dict={dict} />
        ))}
      </div>
    </div>
  );
}
