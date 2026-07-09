import type { Locale } from "@/lib/i18n";
import type { ImgKey } from "@/lib/images";
import type { AmenityId } from "@/data/amenities";

/** A short string translated into every supported locale. */
export type L10n = Record<Locale, string>;
/** A list of short strings, translated into every locale. */
export type L10nList = Record<Locale, string[]>;

export type Geo = { lat: number; lng: number; zoom?: number };

/** A quick fact for the "at a glance" panel. */
export type Fact = { icon: string; label: L10n; value: L10n };
/** A family activity near a hotel or in a destination. */
export type Activity = {
  emoji: string;
  name: L10n;
  detail: L10n;
  ages: AgeBand[];
  time: L10n; // e.g. "Half day", "2h"
};
/** A step in a sample day timeline. */
export type DayStep = { time: string; title: L10n; note: L10n };
export type Faq = { q: L10n; a: L10n };
export type Stat = { value: string; label: L10n };

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
  inPhrase: L10n; // natural "in {place}" phrase, e.g. "in Lisbon" / "en Algarve"
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
  // Rich content
  photos?: ImgKey[];
  stats?: Stat[];
  activities?: Activity[];
  faqs?: Faq[];
  parentTip?: L10n;
  goodToKnow?: L10n;
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
  amenities?: AmenityId[];
  // Rich content
  photos?: ImgKey[];
  verdict?: L10n; // one-line editorial take
  parentTip?: L10n; // the insider move
  atAGlance?: Fact[];
  activities?: Activity[];
  sampleDay?: DayStep[];
  ageNotes?: Partial<Record<AgeBand, L10n>>;
  faqs?: Faq[];
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
  hero?: ImgKey;
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
  | "amenities-index"
  | "amenity"
  | "combo"
  | "method";

export type PageEntry = {
  key: string; // unique across the whole site
  kind: PageKind;
  slug: Record<Locale, string>; // "" == home
  related: string[];
};
