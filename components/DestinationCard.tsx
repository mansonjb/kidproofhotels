import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import type { Destination } from "@/lib/types";
import { getByKey, pageHref } from "@/lib/registry";
import { hotelsInDestination } from "@/data/hotels";
import { hotelHeroSrc, hasRealPhoto } from "@/lib/hotel-photos";
import { imgUrl } from "@/lib/images";
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
  const hotels = hotelsInDestination(dest.key);
  const count = hotels.length;
  // Use the real photo of the destination's top-scored hotel (unique + relevant),
  // falling back to the illustrative stock only if no hotel has one.
  const hero = hotels.find(hasRealPhoto) ?? hotels[0];
  const heroSrc =
    (hero && hotelHeroSrc(hero, large ? 900 : 560, large ? 620 : 420)) ||
    (dest.photos?.[0] ? imgUrl(dest.photos[0], { w: large ? 900 : 560, h: large ? 620 : 420 }) : "");

  return (
    <Link
      href={pageHref(entry, locale)}
      className={`group relative flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-cloud transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(58,42,51,0.4)] ${
        large ? "sm:col-span-2 sm:row-span-2" : ""
      }`}
    >
      <div className={`overflow-hidden ${large ? "aspect-[16/11]" : "aspect-[4/3]"}`}>
        {heroSrc ? (
          <div className="relative h-full w-full">
            <img
              src={heroSrc}
              alt={dest.name[locale]}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-xl bg-cloud/90 text-xl shadow-sm backdrop-blur">
              {dest.emoji}
            </span>
          </div>
        ) : (
          <Postcard emoji={dest.emoji} accent={dest.accent} ratio="aspect-[4/3]" big={large} />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <p className="kicker">{dest.country[locale]}</p>
        <h3 className={`font-display leading-tight text-ink ${large ? "text-3xl" : "text-2xl"}`}>
          {dest.name[locale]}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">
          {dest.heroKicker[locale]}
        </p>
        <span className="mt-auto pt-2 text-sm font-semibold text-sky-deep">
          {dict.browse.hotelsCount.replace("{count}", String(count))} →
        </span>
      </div>
    </Link>
  );
}
