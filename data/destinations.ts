import type { Destination } from "@/lib/types";
import { DEST_CONTENT } from "@/data/destination-content";
import { MALLORCA_META, TENERIFE_META } from "@/data/hotels/load";
import { hotelsInDestination } from "@/data/hotels";

// Newer destinations pull their editorial content from the JSON seed's meta.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = (MALLORCA_META ?? {}) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const T = (TENERIFE_META ?? {}) as any;

// SEED content for the MVP. Geo coordinates are public. Hotel line-ups point at
// entries in data/hotels.ts. Replace/extend with verified data before scaling.
export const DESTINATIONS: Destination[] = [
  {
    key: "lisbon",
    name: { en: "Lisbon", fr: "Lisbonne" },
    country: { en: "Portugal", fr: "Portugal" },
    inPhrase: { en: "in Lisbon", fr: "à Lisbonne" },
    slug: {
      en: "family-hotels-lisbon",
      fr: "hotels-famille-lisbonne",
    },
    geo: { lat: 38.7223, lng: -9.1393, zoom: 12 },
    heroKicker: {
      en: "City break, kid approved",
      fr: "City break validé par les enfants",
    },
    intro: {
      en: "Lisbon is one of Europe's easiest cities with children: gentle, sunny, full of trams to ride and custard tarts to eat. The catch is the hills and the old buildings, so where you stay decides whether the buggy is a joy or a battle. These are the hotels that get the room setup and the stroller access right.",
      fr: "Lisbonne est l'une des villes d'Europe les plus faciles avec des enfants : douce, ensoleillée, pleine de tramways à prendre et de pastéis à dévorer. Le hic, ce sont les collines et les vieux immeubles, donc où vous logez décide si la poussette est un plaisir ou un combat. Voici les hôtels qui réussissent la config des chambres et l'accès poussette.",
    },
    whyKids: {
      en: [
        "Short flights from most of Europe and a compact centre you can do on foot or by tram.",
        "Warm but rarely scorching, so kids stay comfortable spring through autumn.",
        "The Oceanário, tram 28 and the Belém pastries make an easy, happy day plan.",
        "Family rooms are common and many hotels have pools, rare for a European capital.",
      ],
      fr: [
        "Vols courts depuis presque toute l'Europe et un centre compact à faire à pied ou en tram.",
        "Chaud mais rarement écrasant, les enfants restent à l'aise du printemps à l'automne.",
        "L'Oceanário, le tram 28 et les pâtisseries de Belém font une journée simple et heureuse.",
        "Les chambres familiales sont courantes et beaucoup d'hôtels ont une piscine, rare pour une capitale européenne.",
      ],
    },
    bestAreas: {
      en: [
        "Parque das Nações: flat, modern, next to the aquarium and cable car. The easiest area with a buggy.",
        "Avenida da Liberdade: central, leafy and gentler underfoot than the old hills.",
        "Belém: riverside space to run, close to the pastries and the monastery.",
      ],
      fr: [
        "Parque das Nações : plat, moderne, à côté de l'aquarium et du téléphérique. Le quartier le plus facile en poussette.",
        "Avenida da Liberdade : central, arboré et plus doux sous les pieds que les vieilles collines.",
        "Belém : de l'espace au bord du fleuve pour courir, proche des pâtisseries et du monastère.",
      ],
    },
    emoji: "🚋",
    accent: "ff9d1c",
    hotelKeys: [], // populated from loaded hotels below
    related: ["algarve", "guide-baby-checklist", "guide-connecting-rooms"],
  },
  {
    key: "algarve",
    name: { en: "The Algarve", fr: "L'Algarve" },
    country: { en: "Portugal", fr: "Portugal" },
    inPhrase: { en: "in the Algarve", fr: "en Algarve" },
    slug: {
      en: "family-hotels-algarve",
      fr: "hotels-famille-algarve",
    },
    geo: { lat: 37.0891, lng: -8.2478, zoom: 11 },
    heroKicker: {
      en: "Beach resorts that get families",
      fr: "Des resorts de plage qui comprennent les familles",
    },
    intro: {
      en: "The Algarve is built for family holidays: calm golden beaches, shallow warm sea and resorts that have been perfecting the kids club for decades. The difference between a great week and a stressful one comes down to whether the club is free, the pool has a shallow end, and breakfast is quick. Here are the resorts that pass.",
      fr: "L'Algarve est fait pour les vacances en famille : plages dorées et calmes, mer chaude et peu profonde, et des resorts qui perfectionnent le club enfants depuis des décennies. La différence entre une semaine géniale et une semaine stressante tient à un club gratuit, une piscine à fond plat et un petit-déjeuner rapide. Voici les resorts qui passent le test.",
    },
    whyKids: {
      en: [
        "Shallow, warm and calm beaches, some of the safest paddling in Europe.",
        "Purpose-built family resorts with real kids clubs, splash pools and evening entertainment.",
        "Short transfers from Faro airport, so no long drive with tired children.",
        "Great value outside July and August, when the water is still warm.",
      ],
      fr: [
        "Plages peu profondes, chaudes et calmes, parmi les plus sûres d'Europe pour barboter.",
        "Des resorts pensés famille avec de vrais clubs enfants, des pataugeoires et de l'animation le soir.",
        "Transferts courts depuis l'aéroport de Faro, pas de longue route avec des enfants fatigués.",
        "Excellent rapport qualité-prix hors juillet-août, quand l'eau est encore chaude.",
      ],
    },
    bestAreas: {
      en: [
        "Albufeira: the most resorts and the easiest logistics, if you want everything on site.",
        "Lagos: prettier beaches and a walkable old town, a touch more grown-up.",
        "Vilamoura: polished marina resorts, calm and very buggy-friendly.",
      ],
      fr: [
        "Albufeira : le plus de resorts et la logistique la plus simple, si vous voulez tout sur place.",
        "Lagos : des plages plus jolies et une vieille ville à pied, un peu plus adulte.",
        "Vilamoura : resorts de marina soignés, calmes et très adaptés à la poussette.",
      ],
    },
    emoji: "🏖️",
    accent: "2bb3c0",
    hotelKeys: [], // populated below
    related: ["lisbon", "guide-allinclusive-europe", "guide-kids-club-free"],
  },
  {
    key: "costa-del-sol",
    name: { en: "Costa del Sol", fr: "Costa del Sol" },
    country: { en: "Spain", fr: "Espagne" },
    inPhrase: { en: "on the Costa del Sol", fr: "sur la Costa del Sol" },
    slug: {
      en: "family-hotels-costa-del-sol",
      fr: "hotels-famille-costa-del-sol",
    },
    geo: { lat: 36.5101, lng: -4.8825, zoom: 11 },
    heroKicker: {
      en: "Sunshine, splash parks and space",
      fr: "Soleil, parcs aquatiques et espace",
    },
    intro: {
      en: "The Costa del Sol trades on sunshine and space: big resorts with several pools, water slides and room configurations that actually fit a family of four or five. If your children are at the water-slide age, this is the stretch of coast that was built for them. We score the resorts on the setup that matters.",
      fr: "La Costa del Sol mise sur le soleil et l'espace : de grands resorts avec plusieurs piscines, des toboggans et des configurations de chambres qui accueillent vraiment une famille de quatre ou cinq. Si vos enfants sont à l'âge des toboggans, c'est le littoral fait pour eux. On note les resorts sur ce qui compte vraiment.",
    },
    whyKids: {
      en: [
        "Big resorts with multiple pools, splash areas and water slides on site.",
        "Family rooms and connecting options are the norm, not the exception.",
        "Sunshine almost guaranteed, with a long shoulder season either side of summer.",
        "Málaga airport is close and well connected, with short transfers.",
      ],
      fr: [
        "De grands resorts avec plusieurs piscines, des zones à jets et des toboggans sur place.",
        "Chambres familiales et communicantes sont la norme, pas l'exception.",
        "Soleil quasi garanti, avec une longue mi-saison de part et d'autre de l'été.",
        "L'aéroport de Málaga est proche et bien desservi, avec des transferts courts.",
      ],
    },
    bestAreas: {
      en: [
        "Torremolinos: the most family resorts and the biggest water parks nearby.",
        "Marbella: smarter resorts with excellent kids clubs, if the budget stretches.",
        "Benalmádena: cable car, sea-life centre and a calm marina, all buggy-friendly.",
      ],
      fr: [
        "Torremolinos : le plus de resorts familiaux et les plus grands parcs aquatiques à proximité.",
        "Marbella : resorts plus chics avec d'excellents clubs enfants, si le budget suit.",
        "Benalmádena : téléphérique, aquarium et une marina calme, le tout adapté à la poussette.",
      ],
    },
    emoji: "🎢",
    accent: "ff6b4a",
    hotelKeys: [], // populated below
    related: ["algarve", "guide-allinclusive-europe", "guide-waterslide-hotels"],
  },
  {
    key: "mallorca",
    name: { en: "Mallorca", fr: "Majorque" },
    country: { en: "Spain", fr: "Espagne" },
    inPhrase: { en: "in Mallorca", fr: "à Majorque" },
    slug: {
      en: "family-hotels-mallorca",
      fr: "hotels-famille-majorque",
    },
    geo: { lat: 39.7, lng: 3.02, zoom: 9 },
    heroKicker: M.heroKicker ?? {
      en: "Europe's family island",
      fr: "L'île famille d'Europe",
    },
    intro: M.intro ?? {
      en: "Mallorca is one of Europe's easiest family islands: shallow calm bays, short transfers and resorts built around kids clubs and splash parks.",
      fr: "Majorque est l'une des îles les plus faciles en famille d'Europe : criques calmes et peu profondes, transferts courts et resorts pensés autour des clubs enfants et des parcs à jets.",
    },
    whyKids: M.whyKids ?? { en: [], fr: [] },
    bestAreas: M.bestAreas ?? { en: [], fr: [] },
    emoji: M.emoji ?? "🏝️",
    accent: "2bb3c0",
    hotelKeys: [], // populated below
    related: ["algarve", "costa-del-sol", "guide-allinclusive-europe"],
    photos: M.photos,
    stats: M.stats,
    activities: M.activities,
    faqs: M.faqs,
    parentTip: M.parentTip,
    goodToKnow: M.goodToKnow,
  },
  {
    key: "tenerife",
    name: { en: "Tenerife", fr: "Tenerife" },
    country: { en: "Spain", fr: "Espagne" },
    inPhrase: { en: "in Tenerife", fr: "à Tenerife" },
    slug: {
      en: "family-hotels-tenerife",
      fr: "hotels-famille-tenerife",
    },
    geo: { lat: 28.09, lng: -16.74, zoom: 10 },
    heroKicker: T.heroKicker ?? {
      en: "Winter sun, year round",
      fr: "Soleil d'hiver, toute l'année",
    },
    intro: T.intro ?? {
      en: "Tenerife is Europe's year-round family island: warm in winter, calm beaches in the sheltered south, and resorts built around kids clubs, splash parks and Siam Park next door.",
      fr: "Tenerife est l'île famille toute l'année d'Europe : douce en hiver, plages calmes dans le sud abrité, et des resorts pensés autour des clubs enfants, des parcs à jets et de Siam Park juste à côté.",
    },
    whyKids: T.whyKids ?? { en: [], fr: [] },
    bestAreas: T.bestAreas ?? { en: [], fr: [] },
    emoji: T.emoji ?? "☀️",
    accent: "f2933c",
    hotelKeys: [], // populated below
    related: ["mallorca", "costa-del-sol", "guide-allinclusive-europe"],
    photos: T.photos,
    stats: T.stats,
    activities: T.activities,
    faqs: T.faqs,
    parentTip: T.parentTip,
    goodToKnow: T.goodToKnow,
  },
];

// Merge rich content (photos, stats, activities, FAQs, tips) onto destinations,
// and populate each destination's hotel line-up from the loaded hotels.
for (const d of DESTINATIONS) {
  const extra = DEST_CONTENT[d.key];
  if (extra) Object.assign(d, extra);
  d.hotelKeys = hotelsInDestination(d.key).map((h) => h.key);
}

export const DEST_BY_KEY = new Map(DESTINATIONS.map((d) => [d.key, d]));
