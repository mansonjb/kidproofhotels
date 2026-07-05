import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";
import { SITE_NAME } from "@/lib/site";
import { DESTINATIONS } from "@/data/destinations";
import { GUIDES } from "@/data/guides";
import { getByKey, pageHref } from "@/lib/registry";
import { Brand } from "@/components/Brand";

function href(key: string, locale: Locale): string {
  const e = getByKey(key);
  return e ? pageHref(e, locale) : localeHref(locale);
}

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const year = 2026;
  return (
    <footer className="mt-24 border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Brand locale={locale} />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {dict.footer.tagline}
            </p>
          </div>

          <nav aria-label={dict.footer.colDiscover}>
            <h2 className="kicker mb-3">{dict.footer.colDiscover}</h2>
            <ul className="space-y-2 text-sm">
              {DESTINATIONS.map((d) => (
                <li key={d.key}>
                  <Link href={href(d.key, locale)} className="text-ink-soft hover:text-ink">
                    {d.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.colGuides}>
            <h2 className="kicker mb-3">{dict.footer.colGuides}</h2>
            <ul className="space-y-2 text-sm">
              {GUIDES.slice(0, 5).map((g) => (
                <li key={g.key}>
                  <Link href={href(g.key, locale)} className="text-ink-soft hover:text-ink">
                    {g.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.colAbout}>
            <h2 className="kicker mb-3">{dict.footer.colAbout}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={href("method", locale)} className="text-ink-soft hover:text-ink">
                  {dict.footer.method}
                </Link>
              </li>
              <li>
                <Link href={href("amenities-index", locale)} className="text-ink-soft hover:text-ink">
                  {dict.nav.amenities}
                </Link>
              </li>
              <li>
                <Link href={href("destinations-index", locale)} className="text-ink-soft hover:text-ink">
                  {dict.nav.destinations}
                </Link>
              </li>
              <li>
                <Link href={href("guides-index", locale)} className="text-ink-soft hover:text-ink">
                  {dict.nav.guides}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-muted">
            {dict.footer.disclosure}
          </p>
          <p className="mt-3 text-xs text-muted">
            © {year} {SITE_NAME}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
