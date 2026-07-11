import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import type { Collection } from "@/data/collections";
import { collectionHotels } from "@/lib/collections";
import { getByKey, pageHref } from "@/lib/registry";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Photo } from "@/components/Photo";
import { Callout } from "@/components/Callout";
import { HotelCard } from "@/components/HotelCard";
import { ComparisonTable } from "@/components/blocks/ComparisonTable";
import { Faq } from "@/components/blocks/Faq";

export function CollectionPage({
  collection,
  locale,
  dict,
}: {
  collection: Collection;
  locale: Locale;
  dict: Dict;
}) {
  const idx = getByKey("collections-index");
  const hotels = collectionHotels(collection);

  return (
    <article className="mx-auto max-w-5xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          { label: dict.collections.nav, href: idx ? pageHref(idx, locale) : undefined },
          { label: collection.title[locale] },
        ]}
      />

      <header className="max-w-3xl">
        <p className="kicker mb-3">{dict.collections.indexTitle}</p>
        <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          <span className="mr-2">{collection.emoji}</span>
          {collection.title[locale]}
        </h1>
        <p className="mt-4 text-lg text-muted">{collection.dek[locale]}</p>
      </header>

      <div className="mt-8 aspect-[16/8] overflow-hidden rounded-[var(--radius-xl2)] sm:aspect-[16/6]">
        <Photo img={collection.heroImg} alt={collection.title[locale]} w={1200} h={520} className="h-full w-full object-cover" eager />
      </div>

      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">{collection.intro[locale]}</p>

      {collection.timing && (
        <Callout variant="tip" title={dict.collections.whenToGo}>
          {collection.timing[locale]}
        </Callout>
      )}

      <section className="mt-10">
        <h2 className="mb-5 font-display text-3xl text-ink">{dict.collections.ourPicks}</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.key} hotel={hotel} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <div className="mt-12">
        <ComparisonTable hotels={hotels} title={collection.title[locale]} dict={dict} locale={locale} />
      </div>

      {collection.faqs.length > 0 && (
        <div className="mt-12">
          <Faq faqs={collection.faqs} dict={dict} locale={locale} />
        </div>
      )}

      <p className="mt-12 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-muted">
        {dict.stay22.disclosure}
      </p>
    </article>
  );
}
