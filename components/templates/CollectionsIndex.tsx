import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import { COLLECTIONS } from "@/data/collections";
import { collectionHotels } from "@/lib/collections";
import { getByKey, pageHref } from "@/lib/registry";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Photo } from "@/components/Photo";

export function CollectionsIndex({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          { label: dict.collections.nav },
        ]}
      />
      <header className="max-w-2xl">
        <p className="kicker mb-3">{dict.collections.nav}</p>
        <h1 className="font-display text-5xl leading-tight text-ink sm:text-6xl">
          {dict.collections.indexTitle}
        </h1>
        <p className="mt-4 text-lg text-muted">{dict.collections.indexDek}</p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {COLLECTIONS.map((c) => {
          const entry = getByKey(`collection-${c.key}`);
          if (!entry) return null;
          const count = collectionHotels(c).length;
          return (
            <Link
              key={c.key}
              href={pageHref(entry, locale)}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-cloud transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(58,42,51,0.4)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Photo img={c.heroImg} alt={c.title[locale]} w={640} h={360} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 grid h-11 w-11 place-items-center rounded-2xl text-2xl shadow-sm" style={{ background: `#${c.accent}` }}>
                  {c.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h2 className="font-display text-xl leading-tight text-ink">{c.title[locale]}</h2>
                <p className="line-clamp-2 text-sm leading-relaxed text-muted">{c.dek[locale]}</p>
                <span className="mt-auto pt-2 text-sm font-semibold text-sky-deep">
                  {fill(dict.browse.hotelsCount, { count: String(count) })} →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
