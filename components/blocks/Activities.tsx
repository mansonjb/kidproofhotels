import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import type { Activity } from "@/lib/types";

const AGE_EMOJI: Record<string, string> = { baby: "👶", toddler: "🧒", kid: "🧑", teen: "🧑‍🎤" };

/** Family activities as scannable cards, each tagged with age fit and duration.
 *  Sells the "what will we actually do" question the OTAs never answer. */
export function Activities({
  activities,
  title,
  dict,
  locale,
}: {
  activities: Activity[];
  title: string;
  dict: Dict;
  locale: Locale;
}) {
  if (activities.length === 0) return null;
  return (
    <section>
      <h2 className="mb-5 font-display text-3xl text-ink">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {activities.map((a, i) => (
          <div key={i} className="flex gap-4 rounded-2xl border border-line bg-cloud p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-paper-2 text-2xl">
              {a.emoji}
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-lg leading-tight text-ink">{a.name[locale]}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{a.detail[locale]}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-sky/10 px-2.5 py-1 font-semibold text-sky-deep">
                  ⏱ {dict.blocks.duration}: {a.time[locale]}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-paper-2 px-2.5 py-1 font-medium text-ink-soft">
                  {dict.blocks.forAges} {a.ages.map((ag) => AGE_EMOJI[ag]).join(" ")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
