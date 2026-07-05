import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import type { Faq as FaqItem } from "@/lib/types";
import { JsonLd } from "@/components/JsonLd";

/** Accordion FAQ (details/summary, no JS) plus FAQPage schema for rich results. */
export function Faq({
  faqs,
  dict,
  locale,
}: {
  faqs: FaqItem[];
  dict: Dict;
  locale: Locale;
}) {
  if (faqs.length === 0) return null;
  return (
    <section>
      <h2 className="mb-5 font-display text-3xl text-ink">{dict.blocks.faq}</h2>
      <div className="divide-y divide-line rounded-[var(--radius-xl2)] border border-line bg-cloud">
        {faqs.map((f, i) => (
          <details key={i} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-display text-lg leading-tight text-ink">{f.q[locale]}</span>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-paper-2 text-sun-deep transition-transform group-open:rotate-45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a[locale]}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q[locale],
            acceptedAnswer: { "@type": "Answer", text: f.a[locale] },
          })),
        }}
      />
    </section>
  );
}
