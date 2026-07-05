import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import type { Hotel } from "@/lib/types";
import { getByKey, pageHref } from "@/lib/registry";
import { grade, kidProofScore } from "@/lib/score";

const CHIP: Record<string, string> = {
  gold: "bg-sun text-ink",
  green: "bg-grass text-white",
  amber: "bg-coral text-white",
};

/** Side-by-side comparison of the destination's picks. Scannable decision aid. */
export function ComparisonTable({
  hotels,
  title,
  dict,
  locale,
}: {
  hotels: Hotel[];
  title: string;
  dict: Dict;
  locale: Locale;
}) {
  if (hotels.length < 2) return null;
  return (
    <section>
      <h2 className="mb-5 font-display text-3xl text-ink">{title}</h2>
      <div className="overflow-x-auto rounded-[var(--radius-xl2)] border border-line">
        <table className="w-full min-w-[560px] border-collapse bg-cloud text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-paper-2 text-xs uppercase tracking-wide text-muted">
              <th className="p-4 font-semibold">{dict.blocks.tableHotel}</th>
              <th className="p-4 text-center font-semibold">{dict.blocks.tableScore}</th>
              <th className="p-4 font-semibold">{dict.blocks.tableClub}</th>
              <th className="p-4 text-right font-semibold">{dict.blocks.tablePrice}</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((h) => {
              const entry = getByKey(h.key);
              const score = kidProofScore(h.scores);
              const g = grade(score);
              return (
                <tr key={h.key} className="border-b border-line last:border-0">
                  <td className="p-4">
                    {entry ? (
                      <Link href={pageHref(entry, locale)} className="font-display text-base text-ink hover:text-sun-deep">
                        {h.name}
                      </Link>
                    ) : (
                      <span className="font-display text-base text-ink">{h.name}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ${CHIP[g.band]}`}>
                      {score}
                    </span>
                  </td>
                  <td className="p-4 text-ink-soft">
                    {h.clubFree ? `✅ ${dict.hotel.clubFree}` : h.clubFree === false ? "—" : "—"}
                  </td>
                  <td className="p-4 text-right font-semibold text-ink">
                    {h.priceFrom ? `${h.priceFrom}€` : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
