import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import type { Destination } from "@/lib/types";
import { getByKey, pageHref } from "@/lib/registry";
import { hotelsInDestination } from "@/data/hotels";
import { Postcard } from "@/components/Postcard";

export function DestinationCard({
  dest,
  locale,
  dict,
  large = false,
}: {
  dest: Destination;
  locale: Locale;
  dict: Dict;
  large?: boolean;
}) {
  const entry = getByKey(dest.key);
  if (!entry) return null;
  const count = hotelsInDestination(dest.key).length;

  return (
    <Link
      href={pageHref(entry, locale)}
      className={`group relative flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-cloud transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(58,42,51,0.4)] ${
        large ? "sm:col-span-2 sm:row-span-2" : ""
      }`}
    >
      <Postcard
        emoji={dest.emoji}
        accent={dest.accent}
        ratio={large ? "aspect-[16/11]" : "aspect-[4/3]"}
        big={large}
      />
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <p className="kicker">{dest.country[locale]}</p>
        <h3 className={`font-display leading-tight text-ink ${large ? "text-3xl" : "text-2xl"}`}>
          {dest.name[locale]}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">
          {dest.heroKicker[locale]}
        </p>
        <span className="mt-auto pt-2 text-sm font-semibold text-sky-deep">
          {count} {count > 1 ? "hotels" : "hotel"} →
        </span>
      </div>
    </Link>
  );
}
