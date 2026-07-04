import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { GUIDES } from "@/data/guides";
import { getByKey, pageHref } from "@/lib/registry";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GuideCard } from "@/components/GuideCard";

export function GuidesIndex({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          { label: dict.nav.guides },
        ]}
      />
      <header className="max-w-2xl">
        <p className="kicker mb-3">{dict.common.byParents}</p>
        <h1 className="font-display text-5xl leading-tight text-ink sm:text-6xl">
          {dict.guides.indexTitle}
        </h1>
        <p className="mt-4 text-lg text-muted">{dict.guides.indexDek}</p>
      </header>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((g) => (
          <GuideCard key={g.key} guide={g} locale={locale} dict={dict} />
        ))}
      </div>
    </div>
  );
}
