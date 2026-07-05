import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import type { AgeBand } from "@/lib/types";

const ORDER: AgeBand[] = ["baby", "toddler", "kid", "teen"];
const EMOJI: Record<AgeBand, string> = { baby: "👶", toddler: "🧒", kid: "🧑", teen: "🧑‍🎤" };

/** Per-age suitability: which ages a hotel truly suits, with a one-line why.
 *  A rare, valued signal that turns "does it work for us" into a clear yes/no. */
export function AgeSuitability({
  ages,
  notes,
  dict,
  locale,
}: {
  ages: AgeBand[];
  notes: Partial<Record<AgeBand, { en: string; fr: string }>>;
  dict: Dict;
  locale: Locale;
}) {
  const set = new Set(ages);
  return (
    <section>
      <h2 className="mb-5 font-display text-2xl text-ink">{dict.blocks.ageSuitability}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ORDER.map((a) => {
          const great = set.has(a);
          const note = notes[a];
          return (
            <div
              key={a}
              className={`rounded-2xl border p-4 ${
                great ? "border-grass/40 bg-grass/8" : "border-line bg-paper-2/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{EMOJI[a]}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                    great ? "bg-grass text-white" : "bg-line-2 text-ink-soft"
                  }`}
                >
                  {great ? dict.blocks.ageGreat : dict.blocks.ageOkay}
                </span>
              </div>
              <p className="mt-2 text-sm font-bold text-ink">{dict.ages[a]}</p>
              <p className="text-xs text-muted">{dict.ageRanges[a]}</p>
              {note && (
                <p className="mt-2 text-xs leading-snug text-ink-soft">{note[locale]}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
