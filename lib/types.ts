import type { Locale } from "@/lib/i18n";

/** A short string translated into every supported locale. */
export type L10n = Record<Locale, string>;
/** A list of short strings, translated into every locale. */
export type L10nList = Record<Locale, string[]>;

export type Geo = { lat: number; lng: number; zoom?: number };

/** Age bands a family travels with. Powers the (rare, valued) age filter. */
export type AgeBand = "baby" | "toddler" | "kid" | "teen";

/**
 * The eight KidProof criteria, in weighted order (see lib/score.ts).
 * Room configuration is factor n°1 and carries the most weight.
 */
export type CriterionId =
  | "rooms"
  | "baby"
  | "pool"
  | "dining"
  | "safety"
  | "convenience"
  | "location"
  | "extras";

export type Scores = Record<CriterionId, number>; // each 0..100

export type PriceTier = 1 | 2 | 3 | 4; // € .. €€€€

export type Destination = {
  key: string;
  name: L10n; // display name, e.g. "Lisbon"
  country: L10n;
  slug: L10n; // localised path segment, e.g. "family-hotels-lisbon"
  geo: Geo;
  intro: L10n;
  heroKicker: L10n;
  whyKids: L10nList; // why the destination works with children
  bestAreas: L10nList;
  emoji: string;
  accent: string; // hex without leading #, for accent theming
  hotelKeys: string[]; // ordered picks shown on the destination page
  related: string[]; // related page keys (guides, destinations)
};

export type Hotel = {
  key: string;
  name: string; // proper noun, not translated
  destinationKey: string;
  slug: L10n;
  geo: Geo;
  address: string;
  priceTier: PriceTier;
  priceFrom?: number; // indicative EUR / night
  image: string;
  ages: AgeBand[];
  scores: Scores;
  roomsSummary: L10n; // factor n°1, shown at the very top of the fiche
  intro: L10n;
  highlights: L10nList; // specific kids-friendly details
  pros: L10nList;
  cons: L10nList;
  clubFree?: boolean; // kids club free vs paid (a real deal-breaker)
  related: string[];
};

export type Guide = {
  key: string;
  slug: L10n;
  title: L10n;
  dek: L10n; // standfirst / subtitle
  emoji: string;
  accent: string;
  ages: AgeBand[];
  updated: string; // ISO date
  readMinutes: number;
  related: string[];
  /** Optional booking-intent MAP anchored on this guide. */
  geo?: Geo;
  geoLabel?: L10n;
};

export type PageKind =
  | "home"
  | "destinations-index"
  | "destination"
  | "hotel"
  | "guides-index"
  | "guide"
  | "method";

export type PageEntry = {
  key: string; // unique across the whole site
  kind: PageKind;
  slug: Record<Locale, string>; // "" == home
  related: string[];
};
