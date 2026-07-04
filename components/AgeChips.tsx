import type { Dict } from "@/data/i18n/ui";
import type { AgeBand } from "@/lib/types";

const ORDER: AgeBand[] = ["baby", "toddler", "kid", "teen"];
const EMOJI: Record<AgeBand, string> = {
  baby: "👶",
  toddler: "🧒",
  kid: "🧑",
  teen: "🧑‍🎤",
};

/** The (rare, valued) age signal: which ages a hotel or guide really suits. */
export function AgeChips({
  ages,
  dict,
  withRanges = false,
}: {
  ages: AgeBand[];
  dict: Dict;
  withRanges?: boolean;
}) {
  const set = new Set(ages);
  return (
    <ul className="flex flex-wrap items-center gap-1.5">
      {ORDER.filter((a) => set.has(a)).map((a) => (
        <li
          key={a}
          className="inline-flex items-center gap-1 rounded-full border border-line bg-paper px-2.5 py-1 text-xs font-medium text-ink"
        >
          <span aria-hidden>{EMOJI[a]}</span>
          {dict.ages[a]}
          {withRanges && (
            <span className="text-muted">· {dict.ageRanges[a]}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function PriceTag({
  tier,
  from,
  dict,
}: {
  tier: number;
  from?: number;
  dict: Dict;
}) {
  return (
    <span className="inline-flex items-baseline gap-1.5 text-sm text-ink">
      <span className="font-mono tracking-tight text-sun-deep">
        {"€".repeat(tier)}
        <span className="text-line-2">{"€".repeat(4 - tier)}</span>
      </span>
      {from && (
        <span className="text-muted">
          {dict.common.fromPrice} <b className="text-ink">{from}€</b>{" "}
          {dict.common.perNight}
        </span>
      )}
    </span>
  );
}
