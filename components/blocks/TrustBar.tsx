import type { Dict } from "@/data/i18n/ui";

/** Four trust signals in a row. Reassurance for a high-stakes emotional purchase. */
export function TrustBar({ dict }: { dict: Dict }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {dict.browse.trust.map((t, i) => (
        <li key={i} className="flex items-start gap-3 rounded-2xl border border-line bg-cloud p-4">
          <span className="text-2xl" aria-hidden>{t.icon}</span>
          <div>
            <p className="text-sm font-bold text-ink">{t.t}</p>
            <p className="text-xs leading-snug text-muted">{t.d}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
