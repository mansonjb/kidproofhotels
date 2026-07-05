import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import type { Amenity } from "@/data/amenities";
import { amenityCount } from "@/data/hotels";
import { getByKey, pageHref } from "@/lib/registry";

export function AmenityCard({
  amenity,
  locale,
  dict,
  withImage = false,
}: {
  amenity: Amenity;
  locale: Locale;
  dict: Dict;
  withImage?: boolean;
}) {
  const entry = getByKey(`amenity-${amenity.id}`);
  if (!entry) return null;
  const count = amenityCount(amenity.id);

  return (
    <Link
      href={pageHref(entry, locale)}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-cloud p-4 transition-all hover:-translate-y-1 hover:border-line-2 hover:shadow-[0_16px_36px_-24px_rgba(58,42,51,0.4)]"
    >
      <span
        className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl transition-transform group-hover:-rotate-6"
        style={{ background: `#${amenity.accent}22` }}
      >
        {amenity.emoji}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg leading-tight text-ink">{amenity.label[locale]}</h3>
        {withImage ? (
          <p className="line-clamp-1 text-xs text-muted">{amenity.short[locale]}</p>
        ) : (
          <p className="text-xs font-semibold text-muted">
            {fill(dict.browse.hotelsCount, { count: String(count) })}
          </p>
        )}
      </div>
      <span className="shrink-0 text-sm font-semibold text-sky-deep opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </Link>
  );
}
