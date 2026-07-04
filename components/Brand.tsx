import Link from "next/link";
import { localeHref, type Locale } from "@/lib/i18n";
import { SITE_NAME } from "@/lib/site";

// Wordmark: a sunny "check" sticker (the KidProof stamp) + the name.
export function Brand({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  return (
    <Link
      href={localeHref(locale)}
      className="group inline-flex items-center gap-2.5"
      aria-label={SITE_NAME}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-[0.7rem] bg-sun text-ink shadow-[0_3px_0_0_var(--color-sun-deep)] transition-transform group-hover:-rotate-6">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 12.5l5 5L20 6.5"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="font-display text-xl leading-none text-ink">
          KidProof<span className="text-sun-deep">.</span>
        </span>
      )}
    </Link>
  );
}
