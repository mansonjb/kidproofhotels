import type { Dict } from "@/data/i18n/ui";
import type { Scores } from "@/lib/types";
import { grade, kidProofScore } from "@/lib/score";

const BAND_STYLE: Record<string, { ring: string; chip: string; label: keyof Dict["score"]["grades"] }> = {
  gold: { ring: "var(--color-sun)", chip: "bg-sun text-ink", label: "gold" },
  green: { ring: "var(--color-grass)", chip: "bg-grass text-white", label: "green" },
  amber: { ring: "var(--color-coral)", chip: "bg-coral text-white", label: "amber" },
};

/** The KidProof Score badge: one clear number, grade chip below. */
export function ScoreBadge({
  scores,
  dict,
  size = "md",
}: {
  scores: Scores;
  dict: Dict;
  size?: "sm" | "md" | "lg";
}) {
  const score = kidProofScore(scores);
  const g = grade(score);
  const s = BAND_STYLE[g.band];

  const dim = size === "lg" ? 132 : size === "sm" ? 80 : 104;
  const num = size === "lg" ? "text-5xl" : size === "sm" ? "text-2xl" : "text-4xl";
  const pct = Math.max(0, Math.min(100, score));

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative grid place-items-center rounded-full bg-cloud"
        style={{
          width: dim,
          height: dim,
          background: `conic-gradient(${s.ring} ${pct * 3.6}deg, var(--color-line) 0deg)`,
        }}
        role="img"
        aria-label={`${dict.score.label}: ${score} ${dict.score.outOf}`}
      >
        <div className="grid h-[82%] w-[82%] place-items-center rounded-full bg-cloud">
          <div className="text-center leading-none">
            <span className={`block font-display ${num} text-ink`}>{score}</span>
            {size !== "sm" && (
              <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                {dict.score.outOf}
              </span>
            )}
          </div>
        </div>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${s.chip}`}
      >
        {dict.score.grades[s.label]}
      </span>
    </div>
  );
}
