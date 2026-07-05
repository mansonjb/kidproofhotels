import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import type { DayStep } from "@/lib/types";

/** "A day here with kids": a vertical timeline that makes the stay tangible. */
export function SampleDay({
  steps,
  dict,
  locale,
  accent,
}: {
  steps: DayStep[];
  dict: Dict;
  locale: Locale;
  accent: string;
}) {
  if (steps.length === 0) return null;
  return (
    <section className="overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-paper-2 p-6 sm:p-8">
      <h2 className="mb-6 font-display text-2xl text-ink">
        <span className="mr-2">🗓️</span>
        {dict.blocks.sampleDay}
      </h2>
      <ol className="relative ml-3 border-l-2 border-dashed" style={{ borderColor: `#${accent}66` }}>
        {steps.map((s, i) => (
          <li key={i} className="relative pb-6 pl-6 last:pb-0">
            <span
              className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-cloud"
              style={{ background: `#${accent}` }}
            />
            <span className="font-mono text-xs font-semibold text-sun-deep">{s.time}</span>
            <h3 className="font-display text-lg leading-tight text-ink">{s.title[locale]}</h3>
            <p className="mt-0.5 text-sm leading-relaxed text-muted">{s.note[locale]}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
