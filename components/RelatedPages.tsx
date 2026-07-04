import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { pageHref, relatedOf } from "@/lib/registry";
import { DEST_BY_KEY } from "@/data/destinations";
import { GUIDE_BY_KEY } from "@/data/guides";
import { HOTEL_BY_KEY } from "@/data/hotels";
import type { PageEntry } from "@/lib/types";

function titleFor(entry: PageEntry, locale: Locale): { label: string; emoji: string; accent: string } {
  if (entry.kind === "destination") {
    const d = DEST_BY_KEY.get(entry.key);
    return { label: d?.name[locale] ?? entry.key, emoji: d?.emoji ?? "📍", accent: d?.accent ?? "ff9d1c" };
  }
  if (entry.kind === "guide") {
    const g = GUIDE_BY_KEY.get(entry.key);
    return { label: g?.title[locale] ?? entry.key, emoji: g?.emoji ?? "📖", accent: g?.accent ?? "2bb3c0" };
  }
  if (entry.kind === "hotel") {
    const h = HOTEL_BY_KEY.get(entry.key);
    return { label: h?.name ?? entry.key, emoji: "🏨", accent: "ff6b4a" };
  }
  return { label: entry.key, emoji: "✨", accent: "ff9d1c" };
}

export function RelatedPages({
  entry,
  locale,
  dict,
  title,
}: {
  entry: PageEntry;
  locale: Locale;
  dict: Dict;
  title: string;
}) {
  const related = relatedOf(entry);
  if (related.length === 0) return null;

  return (
    <section className="mt-14">
      <h2 className="mb-5 font-display text-2xl text-ink">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((e) => {
          const t = titleFor(e, locale);
          return (
            <Link
              key={e.key}
              href={pageHref(e, locale)}
              className="group flex items-center gap-3 rounded-2xl border border-line bg-cloud p-4 transition-colors hover:border-line-2 hover:bg-paper-2"
            >
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-2xl"
                style={{ background: `#${t.accent}22` }}
              >
                {t.emoji}
              </span>
              <span className="text-sm font-semibold leading-snug text-ink group-hover:text-ink">
                {t.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
