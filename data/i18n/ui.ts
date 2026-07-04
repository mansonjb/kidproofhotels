import type { AgeBand, CriterionId } from "@/lib/types";

// Shape of the UI dictionary. EN is the reference; every locale implements it.
export type Dict = {
  brandTagline: string;
  nav: {
    destinations: string;
    guides: string;
    method: string;
    menu: string;
  };
  common: {
    home: string;
    byParents: string;
    fromPrice: string; // "from"
    perNight: string; // "/ night"
    viewHotel: string;
    readMore: string;
    backHome: string;
    sponsored: string;
    updated: string; // "Updated {date}"
    readTime: string; // "{min} min read"
    goodFor: string; // "Good for"
    exploreAll: string;
  };
  ages: Record<AgeBand, string>;
  ageRanges: Record<AgeBand, string>;
  score: {
    label: string; // "KidProof Score"
    outOf: string; // "/ 100"
    whatStandsOut: string; // "What stands out"
    howItWorks: string;
    howItWorksBody: string;
    criteria: Record<CriterionId, { name: string; blurb: string }>;
    grades: { gold: string; green: string; amber: string };
  };
  stay22: {
    eyebrow: string;
    hotelsNear: string; // "Hotels near {name}"
    browse: string; // "Browse stays near {name}"
    note: string;
    disclosure: string;
  };
  hotel: {
    rooms: string; // "The rooms"
    highlights: string; // "Why families love it"
    pros: string;
    cons: string;
    book: string; // "Check prices & book"
    similar: string; // "Similar family stays"
    inDestination: string; // "in {name}"
    clubFree: string;
    clubPaid: string;
  };
  destination: {
    whyKids: string; // "Why it works with kids"
    bestAreas: string; // "Best areas to stay"
    ourPicks: string; // "Our KidProof picks"
    picksNote: string;
    allDestinations: string;
  };
  guides: {
    indexTitle: string;
    indexDek: string;
    all: string;
  };
  home: {
    heroKicker: string;
    heroTitleA: string; // rendered around an accent word
    heroTitleAccent: string;
    heroTitleB: string;
    heroSub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    featuredDest: string;
    featuredDestSub: string;
    latestGuides: string;
    latestGuidesSub: string;
    scoreSectionKicker: string;
    scoreSectionTitle: string;
    scoreSectionBody: string;
    trustKicker: string;
    trustTitle: string;
    trustBody: string;
    trustPoints: string[];
  };
  method: {
    title: string;
    dek: string;
    intro: string;
    sections: { h: string; p: string }[];
  };
  footer: {
    disclosure: string;
    tagline: string;
    colDiscover: string;
    colGuides: string;
    colAbout: string;
    method: string;
    rights: string;
  };
  notFound: { title: string; body: string; cta: string };
};
