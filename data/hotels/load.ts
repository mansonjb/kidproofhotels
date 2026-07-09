import type { AgeBand, Hotel } from "@/lib/types";
import { slugify } from "@/lib/slug";
import { kidProofScore } from "@/lib/score";
import lisbon from "./lisbon.json";
import algarve from "./algarve.json";
import costa from "./costa-del-sol.json";
import mallorca from "./mallorca.json";

// Hotels are authored as JSON seeds (researched + drafted) and mapped to the
// Hotel shape here: geo assembled, a clean unique slug generated per property,
// and "similar" hotels auto-linked within each destination.

type SeedFile = {
  hotels: Record<string, unknown>[];
  destinationMeta?: Record<string, unknown>;
};

const FILES = [lisbon, algarve, costa, mallorca] as unknown as SeedFile[];

/** Loosely-typed Mallorca destination meta (used to build its Destination). */
export const MALLORCA_META = (mallorca as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;

function toHotel(raw: Record<string, unknown>, usedSlugs: Set<string>): Hotel {
  const s = raw as Record<string, any>;
  const base = slugify(s.name);
  let slug = base;
  let i = 2;
  while (usedSlugs.has(slug)) slug = `${base}-${i++}`;
  usedSlugs.add(slug);

  return {
    key: s.key,
    name: s.name,
    destinationKey: s.destinationKey,
    area: s.area,
    slug: { en: slug, fr: slug },
    geo: { lat: s.lat, lng: s.lng, zoom: s.zoom ?? 13 },
    address: s.address,
    priceTier: s.priceTier,
    priceFrom: s.priceFrom,
    ages: (s.ages ?? []) as AgeBand[],
    scores: s.scores,
    roomsSummary: s.roomsSummary,
    intro: s.intro,
    highlights: s.highlights,
    pros: s.pros,
    cons: s.cons,
    clubFree: s.clubFree,
    amenities: s.amenities ?? [],
    photos: s.photos ?? [],
    verdict: s.verdict,
    parentTip: s.parentTip,
    atAGlance: s.atAGlance,
    activities: s.activities,
    sampleDay: s.sampleDay,
    ageNotes: s.ageNotes,
    faqs: s.faqs,
    related: [],
  };
}

const used = new Set<string>();
export const SEED_HOTELS: Hotel[] = FILES.flatMap((f) =>
  (f.hotels ?? []).map((s) => toHotel(s, used)),
);

// Auto-relate: up to 3 other hotels in the same destination, best score first.
for (const h of SEED_HOTELS) {
  h.related = SEED_HOTELS.filter(
    (o) => o.destinationKey === h.destinationKey && o.key !== h.key,
  )
    .sort((a, b) => kidProofScore(b.scores) - kidProofScore(a.scores))
    .slice(0, 3)
    .map((o) => o.key);
}
