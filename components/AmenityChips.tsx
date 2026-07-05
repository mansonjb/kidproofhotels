import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { AmenityId } from "@/data/amenities";
import { AMENITY_BY_ID } from "@/data/amenities";
import { getByKey, pageHref } from "@/lib/registry";

/** A hotel's amenities as chips that link to the browsable amenity pages. */
export function AmenityChips({
  ids,
  locale,
}: {
  ids: AmenityId[];
  locale: Locale;
}) {
  if (!ids || ids.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {ids.map((id) => {
        const a = AMENITY_BY_ID.get(id);
        const entry = getByKey(`amenity-${id}`);
        if (!a || !entry) return null;
        return (
          <li key={id}>
            <Link
              href={pageHref(entry, locale)}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cloud px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-line-2 hover:bg-paper-2"
            >
              <span aria-hidden>{a.emoji}</span>
              {a.label[locale]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
