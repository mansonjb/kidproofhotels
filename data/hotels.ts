import type { Hotel } from "@/lib/types";
import type { AmenityId } from "@/data/amenities";
import { SEED_HOTELS } from "@/data/hotels/load";
import { kidProofScore } from "@/lib/score";

// Hotels come from researched JSON seeds under data/hotels/*.json, mapped to the
// Hotel shape in data/hotels/load.ts. Photos are illustrative stock until partner
// photos land (no Google Places, project rule). Scores are our editorial estimates.
export const HOTELS: Hotel[] = SEED_HOTELS;

export const HOTEL_BY_KEY = new Map(HOTELS.map((h) => [h.key, h]));

/** Hotels in a destination, best KidProof Score first. */
export function hotelsInDestination(destinationKey: string): Hotel[] {
  return HOTELS.filter((h) => h.destinationKey === destinationKey).sort(
    (a, b) => kidProofScore(b.scores) - kidProofScore(a.scores),
  );
}

/** All hotels offering a given amenity, best KidProof Score first. */
export function hotelsWithAmenity(id: AmenityId): Hotel[] {
  return HOTELS.filter((h) => h.amenities?.includes(id)).sort(
    (a, b) => kidProofScore(b.scores) - kidProofScore(a.scores),
  );
}

/** How many hotels offer each amenity (for browse-card counts). */
export function amenityCount(id: AmenityId): number {
  return HOTELS.reduce((n, h) => n + (h.amenities?.includes(id) ? 1 : 0), 0);
}
