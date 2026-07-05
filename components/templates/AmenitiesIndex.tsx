import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { AMENITIES } from "@/data/amenities";
import { getByKey, pageHref } from "@/lib/registry";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AmenityCard } from "@/components/AmenityCard";

export function AmenitiesIndex({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          { label: dict.browse.amenitiesTitle },
        ]}
      />
      <header className="max-w-2xl">
        <p className="kicker mb-3">{dict.browse.amenitiesTitle}</p>
        <h1 className="font-display text-5xl leading-tight text-ink sm:text-6xl">
          {dict.browse.amenitiesIndexTitle}
        </h1>
        <p className="mt-4 text-lg text-muted">{dict.browse.amenitiesIndexDek}</p>
      </header>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {AMENITIES.map((a) => (
          <AmenityCard key={a.id} amenity={a} locale={locale} dict={dict} />
        ))}
      </div>
    </div>
  );
}
