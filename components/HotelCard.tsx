import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import type { Hotel } from "@/lib/types";
import { DEST_BY_KEY } from "@/data/destinations";
import { grade, kidProofScore } from "@/lib/score";
import { getByKey, pageHref } from "@/lib/registry";
import { Postcard } from "@/components/Postcard";
import { PriceTag } from "@/components/AgeChips";

const CHIP: Record<string, string> = {
  gold: "bg-sun text-ink",
  green: "bg-grass text-white",
  amber: "bg-coral text-white",
};

export function HotelCard({
  hotel,
  locale,
  dict,
}: {
  hotel: Hotel;
  locale: Locale;
  dict: Dict;
}) {
  const entry = getByKey(hotel.key);
  if (!entry) return null;
  const href = pageHref(entry, locale);
  const score = kidProofScore(hotel.scores);
  const g = grade(score);
  const dest = DEST_BY_KEY.get(hotel.destinationKey);

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-cloud transition-all hover:-translate-y-1 hover:border-line-2 hover:shadow-[0_18px_40px_-24px_rgba(58,42,51,0.4)]"
    >
      <div className="relative">
        <Postcard emoji={dest?.emoji ?? "🏨"} accent={dest?.accent ?? "ff9d1c"} />
        <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-cloud/95 px-2.5 py-1 shadow-sm backdrop-blur">
          <span className="font-display text-lg leading-none text-ink">{score}</span>
          <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${CHIP[g.band]}`}>
            {dict.score.grades[g.band === "gold" ? "gold" : g.band === "green" ? "green" : "amber"]}
          </span>
        </div>
        {hotel.clubFree && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[10px] font-semibold text-paper backdrop-blur">
            {dict.hotel.clubFree}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="kicker">
          {dest ? fill(dict.hotel.inDestination, { name: dest.name[locale] }) : ""}
        </p>
        <h3 className="font-display text-xl leading-tight text-ink">{hotel.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">
          {hotel.roomsSummary[locale]}
        </p>
        <div className="mt-auto pt-2">
          <PriceTag tier={hotel.priceTier} from={hotel.priceFrom} dict={dict} />
        </div>
      </div>
    </Link>
  );
}
