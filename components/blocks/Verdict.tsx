import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import type { L10n, Scores } from "@/lib/types";
import { ScoreBadge } from "@/components/ScoreBadge";

/** Editorial verdict pull-box: our one-line take, next to the score. The kind of
 *  confident, human line a parent wants before they commit. */
export function Verdict({
  verdict,
  scores,
  dict,
  locale,
}: {
  verdict: L10n;
  scores: Scores;
  dict: Dict;
  locale: Locale;
}) {
  return (
    <section className="relative overflow-hidden rounded-[var(--radius-xl2)] bg-ink p-7 sm:p-9">
      <span className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-sun/20 blur-2xl" />
      <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <div className="shrink-0 rounded-2xl bg-cloud/95 p-4">
          <ScoreBadge scores={scores} dict={dict} size="md" />
        </div>
        <div>
          <p className="kicker text-sun">{dict.blocks.verdict}</p>
          <p className="mt-2 font-display text-2xl leading-snug text-paper sm:text-3xl">
            {verdict[locale]}
          </p>
        </div>
      </div>
    </section>
  );
}
