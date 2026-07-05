"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Dict } from "@/data/i18n/ui";
import type { Locale } from "@/lib/i18n";

type Opt = { value: string; label: string };

// Combined "destination + what matters" finder, mirroring how families search.
// Navigates to the amenity page (if chosen) or the destination page.
export function Finder({
  dict,
  destinations,
  amenities,
  amenityHref,
  destHref,
}: {
  dict: Dict;
  locale: Locale;
  destinations: Opt[]; // value = destHref
  amenities: Opt[]; // value = amenityHref
  amenityHref: string; // fallback amenities index href
  destHref: string; // fallback destinations index href
}) {
  const router = useRouter();
  const [dest, setDest] = useState("");
  const [amenity, setAmenity] = useState("");

  function go() {
    // Prefer the most specific browse target the parent chose.
    if (amenity) router.push(amenity);
    else if (dest) router.push(dest);
    else router.push(amenityHref);
  }

  const selectCls =
    "w-full appearance-none rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-sun";

  return (
    <div className="rounded-[var(--radius-xl2)] border border-line bg-cloud/90 p-4 shadow-[0_20px_50px_-34px_rgba(58,42,51,0.6)] backdrop-blur sm:p-5">
      <p className="kicker mb-3">{dict.browse.finderKicker}</p>
      <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <label className="relative block">
          <span className="sr-only">{dict.browse.finderWhere}</span>
          <select className={selectCls} value={dest} onChange={(e) => setDest(e.target.value)}>
            <option value="">{dict.browse.finderWhere}</option>
            {destinations.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">▾</span>
        </label>
        <label className="relative block">
          <span className="sr-only">{dict.browse.finderWhat}</span>
          <select className={selectCls} value={amenity} onChange={(e) => setAmenity(e.target.value)}>
            <option value="">{dict.browse.finderWhat}</option>
            {amenities.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">▾</span>
        </label>
        <button
          type="button"
          onClick={go}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
        >
          {dict.browse.finderGo} <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
