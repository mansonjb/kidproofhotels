import type { ComponentType } from "react";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import type { Guide, PageEntry } from "@/lib/types";
import { getByKey, pageHref } from "@/lib/registry";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AgeChips } from "@/components/AgeChips";
import { Stay22Map } from "@/components/Stay22Map";
import { RelatedPages } from "@/components/RelatedPages";

export function GuidePage({
  guide,
  entry,
  locale,
  dict,
  Body,
}: {
  guide: Guide;
  entry: PageEntry;
  locale: Locale;
  dict: Dict;
  Body: ComponentType | null;
}) {
  const idx = getByKey("guides-index");
  const updated = new Date(guide.updated).toLocaleDateString(
    locale === "fr" ? "fr-FR" : "en-GB",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <article className="mx-auto max-w-3xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          { label: dict.nav.guides, href: idx ? pageHref(idx, locale) : undefined },
          { label: guide.title[locale] },
        ]}
      />

      <header>
        <span
          className="grid h-16 w-16 place-items-center rounded-2xl text-4xl"
          style={{ background: `#${guide.accent}22` }}
        >
          {guide.emoji}
        </span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
          {guide.title[locale]}
        </h1>
        <p className="mt-3 text-xl leading-relaxed text-muted">{guide.dek[locale]}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <AgeChips ages={guide.ages} dict={dict} />
          <span className="font-mono text-xs text-muted">
            {fill(dict.common.updated, { date: updated })} ·{" "}
            {fill(dict.common.readTime, { min: String(guide.readMinutes) })}
          </span>
        </div>
      </header>

      <div className="longform mt-10">{Body ? <Body /> : null}</div>

      {guide.geo && (
        <Stay22Map
          geo={guide.geo}
          label={guide.geoLabel ? guide.geoLabel[locale] : guide.title[locale]}
          campaign={`guide-${guide.key}`}
          dict={dict}
        />
      )}

      <RelatedPages entry={entry} locale={locale} dict={dict} title={dict.common.exploreAll} />

      <p className="mt-12 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-muted">
        {dict.stay22.disclosure}
      </p>
    </article>
  );
}
