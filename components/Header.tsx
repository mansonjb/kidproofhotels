import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { getByKey, pageHref } from "@/lib/registry";
import { Brand } from "@/components/Brand";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function navLinks(locale: Locale, dict: Dict) {
  return [
    { key: "collections-index", label: dict.collections.nav },
    { key: "amenities-index", label: dict.nav.amenities },
    { key: "destinations-index", label: dict.nav.destinations },
    { key: "guides-index", label: dict.nav.guides },
    { key: "method", label: dict.nav.method },
  ]
    .map((n) => {
      const e = getByKey(n.key);
      return e ? { href: pageHref(e, locale), label: n.label } : null;
    })
    .filter((x): x is { href: string; label: string } => x !== null);
}

export function Header({
  locale,
  dict,
  alt,
}: {
  locale: Locale;
  dict: Dict;
  alt: Record<Locale, string>;
}) {
  const links = navLinks(locale, dict);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Brand locale={locale} />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} alt={alt} />
          <details className="relative md:hidden">
            <summary className="grid h-9 w-9 cursor-pointer list-none place-items-center rounded-full border border-line bg-paper text-ink [&::-webkit-details-marker]:hidden">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-line bg-cloud p-2 shadow-lg">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-ink hover:bg-paper-2"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
