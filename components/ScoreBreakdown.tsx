import type { Dict } from "@/data/i18n/ui";
import type { Scores } from "@/lib/types";
import { CRITERIA } from "@/lib/score";

function barColor(v: number): string {
  if (v >= 90) return "var(--color-grass)";
  if (v >= 78) return "var(--color-sun)";
  return "var(--color-coral)";
}

/** The eight KidProof criteria as labelled bars. Transparency = trust. */
export function ScoreBreakdown({
  scores,
  dict,
}: {
  scores: Scores;
  dict: Dict;
}) {
  return (
    <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
      {CRITERIA.map((c) => {
        const v = scores[c.id];
        const meta = dict.score.criteria[c.id];
        return (
          <div key={c.id}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                <span aria-hidden>{c.emoji}</span>
                {meta.name}
              </span>
              <span className="font-mono text-xs text-muted">{v}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full"
                style={{ width: `${v}%`, background: barColor(v) }}
              />
            </div>
            <p className="mt-1 text-xs leading-snug text-muted">{meta.blurb}</p>
          </div>
        );
      })}
    </div>
  );
}
