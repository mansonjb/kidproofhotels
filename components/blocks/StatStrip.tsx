import type { Locale } from "@/lib/i18n";
import type { Stat } from "@/lib/types";

/** A row of big, punchy stat chips. Fun facts that make a destination feel real. */
export function StatStrip({ stats, locale }: { stats: Stat[]; locale: Locale }) {
  if (stats.length === 0) return null;
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map((s, i) => (
        <div key={i} className="rounded-2xl border border-line bg-cloud p-5 text-center">
          <p className="font-display text-4xl leading-none text-sun-deep">{s.value}</p>
          <p className="mt-2 text-sm leading-snug text-ink-soft">{s.label[locale]}</p>
        </div>
      ))}
    </div>
  );
}
