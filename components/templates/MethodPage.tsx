import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { getByKey, pageHref } from "@/lib/registry";
import { CRITERIA } from "@/lib/score";
import { Breadcrumb } from "@/components/Breadcrumb";

export function MethodPage({ locale, dict }: { locale: Locale; dict: Dict }) {
  const m = dict.method;
  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <Breadcrumb
        items={[
          { label: dict.common.home, href: pageHref(getByKey("home")!, locale) },
          { label: dict.nav.method },
        ]}
      />
      <header>
        <p className="kicker mb-3">{dict.common.byParents}</p>
        <h1 className="font-display text-5xl leading-tight text-ink sm:text-6xl">{m.title}</h1>
        <p className="mt-3 text-xl text-muted">{m.dek}</p>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">{m.intro}</p>
      </header>

      {/* Criteria + weights, transparently */}
      <section className="mt-10 rounded-[var(--radius-xl2)] border border-line bg-cloud p-6 sm:p-8">
        <h2 className="mb-1 font-display text-2xl text-ink">{dict.score.howItWorks}</h2>
        <p className="mb-6 text-sm text-muted">{dict.score.howItWorksBody}</p>
        <ul className="space-y-3">
          {CRITERIA.map((c) => (
            <li key={c.id} className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper-2 text-xl">{c.emoji}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-bold text-ink">{dict.score.criteria[c.id].name}</span>
                  <span className="font-mono text-xs text-muted">{Math.round(c.weight * 100)}%</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-line">
                  <div className="h-full rounded-full bg-sun" style={{ width: `${Math.round(c.weight * 100 * 4.2)}%` }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="longform mt-12">
        {m.sections.map((s, i) => (
          <div key={i}>
            <h2>{s.h}</h2>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
