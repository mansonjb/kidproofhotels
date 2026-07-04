import type { CriterionId, Hotel, Scores } from "@/lib/types";

/**
 * The KidProof Score — our signature.
 *
 * Eight criteria, weighted by how much they actually drive a family's choice
 * (see the brief, section 3). Room configuration is factor n°1 and carries the
 * most weight; the "little touches" nudge the tie-breaks. Weights sum to 1.
 */
export const CRITERIA: { id: CriterionId; weight: number; emoji: string }[] = [
  { id: "rooms", weight: 0.22, emoji: "🛏️" },
  { id: "baby", weight: 0.16, emoji: "🍼" },
  { id: "pool", weight: 0.16, emoji: "🏊" },
  { id: "dining", weight: 0.12, emoji: "🍽️" },
  { id: "safety", weight: 0.1, emoji: "🛟" },
  { id: "convenience", weight: 0.1, emoji: "🧺" },
  { id: "location", weight: 0.08, emoji: "📍" },
  { id: "extras", weight: 0.06, emoji: "🎁" },
];

const WEIGHT = new Map(CRITERIA.map((c) => [c.id, c.weight]));

/** Weighted KidProof Score, 0..100, rounded to the nearest whole point. */
export function kidProofScore(scores: Scores): number {
  let total = 0;
  for (const c of CRITERIA) total += scores[c.id] * (WEIGHT.get(c.id) ?? 0);
  return Math.round(total);
}

export function scoreOf(hotel: Hotel): number {
  return kidProofScore(hotel.scores);
}

export type Grade = {
  band: "gold" | "green" | "amber";
  key: "grade.gold" | "grade.green" | "grade.amber";
};

/** A score band for the badge. Only genuinely strong hotels earn "gold". */
export function grade(score: number): Grade {
  if (score >= 90) return { band: "gold", key: "grade.gold" };
  if (score >= 78) return { band: "green", key: "grade.green" };
  return { band: "amber", key: "grade.amber" };
}

/** The single strongest criterion, for a one-line "what stands out" callout. */
export function topCriterion(scores: Scores): CriterionId {
  return CRITERIA.map((c) => c.id).reduce((best, id) =>
    scores[id] > scores[best] ? id : best,
  );
}
