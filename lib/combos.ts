import { AMENITIES, type AmenityId } from "@/data/amenities";
import { DESTINATIONS } from "@/data/destinations";
import { hotelsInDestination } from "@/data/hotels";
import type { L10n } from "@/lib/types";
import { src } from "@/lib/l10n";

// City x amenity long-tail matrix: "family hotels with a pool in Lisbon".
// The highest-intent pages of all. We only generate a combo when at least two
// scored hotels match, so no page is thin.
const MIN_HOTELS = 2;

export type Combo = {
  key: string;
  destKey: string;
  amenityId: AmenityId;
  slug: L10n;
  hotelKeys: string[];
};

function slugifyPlace(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/^(the|la|le|les|los|las|el)\s+/i, "") // spaced articles
    .replace(/^[ld][''`]/i, "") // elided articles: l'Algarve, d'Azur
    .replace(/[''`]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const COMBOS: Combo[] = [];
for (const d of DESTINATIONS) {
  const inDest = hotelsInDestination(d.key);
  for (const a of AMENITIES) {
    const matches = inDest.filter((h) => h.amenities?.includes(a.id));
    if (matches.length < MIN_HOTELS) continue;
    COMBOS.push({
      key: `combo-${d.key}-${a.id}`,
      destKey: d.key,
      amenityId: a.id,
      slug: src<L10n>({
        en: `${a.slug.en}-in-${slugifyPlace(d.name.en)}`,
        fr: `${a.slug.fr}-a-${slugifyPlace(d.name.fr)}`,
      }),
      hotelKeys: matches.map((h) => h.key),
    });
  }
}

export const COMBO_BY_KEY = new Map(COMBOS.map((c) => [c.key, c]));

export function combosForDestination(destKey: string): Combo[] {
  return COMBOS.filter((c) => c.destKey === destKey);
}

export function combosForAmenity(id: AmenityId): Combo[] {
  return COMBOS.filter((c) => c.amenityId === id);
}
