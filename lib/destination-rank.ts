import { DESTINATIONS } from "@/data/destinations";
import { hotelsInDestination } from "@/data/hotels";
import { kidProofScore } from "@/lib/score";
import type { Destination } from "@/lib/types";

export type DestRank = {
  dest: Destination;
  avg: number; // average KidProof Score of the destination's hotels
  from: number; // cheapest indicative EUR/night in the destination
  count: number;
};

/** Rank every destination by the average KidProof Score of its hotels. */
export function destinationsRanked(): DestRank[] {
  return DESTINATIONS.map((dest) => {
    const hotels = hotelsInDestination(dest.key);
    const scores = hotels.map((h) => kidProofScore(h.scores));
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    const prices = hotels
      .map((h) => h.priceFrom)
      .filter((p): p is number => typeof p === "number");
    const from = prices.length ? Math.min(...prices) : 0;
    return { dest, avg, from, count: hotels.length };
  }).sort((a, b) => b.avg - a.avg);
}
