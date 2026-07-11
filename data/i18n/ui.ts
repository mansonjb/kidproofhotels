import type { AgeBand, CriterionId } from "@/lib/types";

// Shape of the UI dictionary. EN is the reference; every locale implements it.
export type Dict = {
  brandTagline: string;
  nav: {
    destinations: string;
    amenities: string;
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
  collections: {
    nav: string;
    indexTitle: string;
    indexDek: string;
    whenToGo: string;
    ourPicks: string;
    seeAll: string;
  };
  ranking: {
    title: string;
    dek: string;
    intro: string;
    how: string;
    avgScore: string;
    from: string;
    seeHotels: string;
    cta: string;
  };
  blocks: {
    atAGlance: string;
    activitiesNear: string; // "Family activities nearby"
    activitiesIn: string; // "Family things to do in {name}"
    sampleDay: string; // "A day here with kids"
    ageSuitability: string; // "Is it right for your kids?"
    ageGreat: string; // "Great fit"
    ageOkay: string; // "Works with a plan"
    faq: string; // "Parents also ask"
    compare: string; // "Compare our picks in {name}"
    verdict: string; // "Our verdict"
    parentTip: string; // "Parent hack"
    goodToKnow: string; // "Heads up"
    forAges: string; // "For"
    duration: string; // "Time"
    tableHotel: string;
    tableScore: string;
    tableRooms: string;
    tableClub: string;
    tablePrice: string;
    planStay: string; // "Plan your stay"
  };
  browse: {
    amenitiesTitle: string; // "Browse by what matters"
    amenitiesDek: string;
    amenitiesIndexTitle: string;
    amenitiesIndexDek: string;
    hotelsCount: string; // "{count} hotels"
    explore: string;
    finderKicker: string;
    finderTitle: string;
    finderWhere: string;
    finderWhat: string;
    finderAnyDest: string;
    finderAnyAmenity: string;
    finderGo: string;
    alsoGoodFor: string; // amenity chips heading
    ourPicksWith: string; // "Our picks with {name}"
    comboIntro: string; // combo page standfirst, {dest} placeholder
    browseInDest: string; // "Browse {name} by amenity"
    sameElsewhere: string; // "The same, in other destinations"
    moreInDest: string; // "More family hotels {dest}"
    howKicker: string;
    howTitle: string;
    steps: { t: string; d: string }[];
    trust: { icon: string; t: string; d: string }[];
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
