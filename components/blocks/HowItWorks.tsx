import type { Dict } from "@/data/i18n/ui";

/** The 3-step flow: pick what matters, compare the score, book the best price. */
export function HowItWorks({ dict }: { dict: Dict }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="mb-8 text-center">
        <p className="kicker mb-2">{dict.browse.howKicker}</p>
        <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
          {dict.browse.howTitle}
        </h2>
      </div>
      <ol className="grid gap-4 md:grid-cols-3">
        {dict.browse.steps.map((s, i) => (
          <li key={i} className="relative rounded-[var(--radius-xl2)] border border-line bg-cloud p-6">
            <span className="font-display text-5xl text-sun">{i + 1}</span>
            <h3 className="mt-2 font-display text-xl text-ink">{s.t}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p>
            {i < dict.browse.steps.length - 1 && (
              <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-line-2 md:block" aria-hidden>
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
