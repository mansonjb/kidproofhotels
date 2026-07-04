import type { Dict } from "@/data/i18n/ui";
import type { Geo } from "@/lib/types";
import { fill } from "@/lib/i18n";
import { BRAND_ACCENT } from "@/lib/site";
import { stay22MapSrc, stay22Url } from "@/lib/affiliates/stay22";
import { AffiliateLink } from "@/components/AffiliateLink";

// The embedded Stay22 MAP: one page = one booking intent. This is the signature
// interactive object of the site, and where it converts.
export function Stay22Map({
  geo,
  label,
  campaign,
  dict,
  hotelName,
}: {
  geo: Geo;
  label: string;
  campaign?: string;
  dict: Dict;
  hotelName?: string;
}) {
  const src = stay22MapSrc({
    lat: geo.lat,
    lng: geo.lng,
    zoom: geo.zoom,
    campaign,
    maincolor: BRAND_ACCENT,
    markerLabel: label,
  });
  const heading = fill(dict.stay22.hotelsNear, { name: label });

  return (
    <section className="frame-dotted my-12 rounded-[var(--radius-xl2)] bg-cloud p-5 sm:p-7">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="kicker">{dict.stay22.eyebrow}</p>
          <h2 className="mt-1 font-display text-2xl text-ink">{heading}</h2>
        </div>
        <span className="rounded-full bg-paper-2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          {dict.common.sponsored}
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-paper">
        <iframe
          src={src}
          title={heading}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block w-full"
          style={{ height: 470, border: 0 }}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <AffiliateLink
          network="stay22"
          context={`${campaign ?? "stay"}-browse`}
          href={stay22Url(label, hotelName)}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
        >
          {fill(dict.stay22.browse, { name: label })}
          <span aria-hidden>→</span>
        </AffiliateLink>
        <p className="max-w-md text-xs leading-relaxed text-muted">
          {dict.stay22.note}
        </p>
      </div>
    </section>
  );
}
