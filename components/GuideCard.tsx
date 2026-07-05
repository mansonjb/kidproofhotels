import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { fill } from "@/lib/i18n";
import type { Guide } from "@/lib/types";
import { getByKey, pageHref } from "@/lib/registry";
import { AgeChips } from "@/components/AgeChips";
import { Photo } from "@/components/Photo";

export function GuideCard({
  guide,
  locale,
  dict,
}: {
  guide: Guide;
  locale: Locale;
  dict: Dict;
}) {
  const entry = getByKey(guide.key);
  if (!entry) return null;

  return (
    <Link
      href={pageHref(entry, locale)}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-cloud transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(58,42,51,0.4)]"
    >
      {guide.hero && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Photo
            img={guide.hero}
            alt={guide.title[locale]}
            w={560}
            h={315}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className="absolute left-3 top-3 grid h-11 w-11 place-items-center rounded-2xl text-2xl shadow-sm"
            style={{ background: `#${guide.accent}` }}
          >
            {guide.emoji}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
      <h3 className="font-display text-xl leading-tight text-ink">
        {guide.title[locale]}
      </h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-muted">
        {guide.dek[locale]}
      </p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-2">
        <AgeChips ages={guide.ages} dict={dict} />
        <span className="shrink-0 font-mono text-[11px] text-muted">
          {fill(dict.common.readTime, { min: String(guide.readMinutes) })}
        </span>
      </div>
      </div>
    </Link>
  );
}
