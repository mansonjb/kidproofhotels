import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import type { Fact } from "@/lib/types";

/** Quick-facts panel: the answers parents scan for before reading a word. */
export function AtAGlance({
  facts,
  dict,
  locale,
}: {
  facts: Fact[];
  dict: Dict;
  locale: Locale;
}) {
  if (facts.length === 0) return null;
  return (
    <section className="rounded-[var(--radius-xl2)] border border-line bg-cloud p-6 sm:p-7">
      <h2 className="mb-5 font-display text-2xl text-ink">{dict.blocks.atAGlance}</h2>
      <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((f, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper-2 text-xl">
              {f.icon}
            </span>
            <div className="min-w-0">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                {f.label[locale]}
              </dt>
              <dd className="text-sm font-semibold leading-snug text-ink">{f.value[locale]}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
