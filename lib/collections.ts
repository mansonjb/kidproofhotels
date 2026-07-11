import type { Collection } from "@/data/collections";
import { COLLECTION_BY_KEY } from "@/data/collections";
import { HOTELS } from "@/data/hotels";
import type { Hotel } from "@/lib/types";
import { kidProofScore } from "@/lib/score";

/** Resolve a collection's hotel line-up, best KidProof Score first. */
export function collectionHotels(c: Collection): Hotel[] {
  let pool: Hotel[] = HOTELS;
  const { destinationKeys, amenityIds } = c.select;
  if (destinationKeys && destinationKeys.length) {
    const set = new Set(destinationKeys);
    pool = pool.filter((h) => set.has(h.destinationKey));
  }
  if (amenityIds && amenityIds.length) {
    pool = pool.filter((h) => amenityIds.some((a) => h.amenities?.includes(a)));
  }
  const sorted = [...pool].sort((a, b) => kidProofScore(b.scores) - kidProofScore(a.scores));
  return c.select.limit ? sorted.slice(0, c.select.limit) : sorted;
}

export function collectionFromKey(key: string): Collection | undefined {
  return COLLECTION_BY_KEY.get(key.replace(/^collection-/, ""));
}
