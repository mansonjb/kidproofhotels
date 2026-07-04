import Link from "next/link";
import { LOCALES, LOCALE_LABEL, type Locale } from "@/lib/i18n";

// No IP-based auto-redirect (bad for UX/SEO). Plain links to the same page in
// the other locale, using the per-page alternate hrefs.
export function LanguageSwitcher({
  locale,
  alt,
}: {
  locale: Locale;
  alt: Record<Locale, string>;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-paper p-0.5">
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={alt[l]}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
              active ? "bg-ink text-paper" : "text-muted hover:text-ink"
            }`}
            title={LOCALE_LABEL[l]}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
