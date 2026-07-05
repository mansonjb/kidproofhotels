import type { Guide } from "@/lib/types";

// Guide metadata. The article body for each lives in content/guides/{locale}/{key}.mdx
// and is wired up in data/guide-content.ts.
export const GUIDES: Guide[] = [
  {
    key: "guide-connecting-rooms",
    hero: "roomCozy",
    slug: {
      en: "connecting-rooms-family-hotels",
      fr: "chambres-communicantes-hotels-famille",
    },
    title: {
      en: "Connecting rooms and family suites: what to ask before you book",
      fr: "Chambres communicantes et suites familiales : quoi demander avant de réserver",
    },
    dek: {
      en: "The number one family question, and the one hotels answer worst. Here is how to get a room that actually fits everyone.",
      fr: "La première question des familles, et celle que les hôtels traitent le plus mal. Voici comment obtenir une chambre qui accueille vraiment tout le monde.",
    },
    emoji: "🛏️",
    accent: "ff9d1c",
    ages: ["baby", "toddler", "kid", "teen"],
    updated: "2026-06-20",
    readMinutes: 6,
    related: ["guide-baby-checklist", "lisbon", "algarve"],
  },
  {
    key: "guide-baby-checklist",
    hero: "babyHand",
    slug: {
      en: "travelling-with-a-baby-hotel-checklist",
      fr: "voyager-avec-un-bebe-checklist-hotel",
    },
    title: {
      en: "Travelling with a baby: the hotel check-list",
      fr: "Voyager avec un bébé : la check-list de l'hôtel",
    },
    dek: {
      en: "The kit to confirm, the questions to ask, and the small things that make a first trip with a baby actually restful.",
      fr: "Le matériel à confirmer, les questions à poser et les petites choses qui rendent un premier voyage avec bébé vraiment reposant.",
    },
    emoji: "🍼",
    accent: "2bb3c0",
    ages: ["baby"],
    updated: "2026-06-24",
    readMinutes: 7,
    related: ["guide-connecting-rooms", "guide-kids-club-free", "lisbon"],
  },
  {
    key: "guide-kids-club-free",
    hero: "kidsFootball",
    slug: {
      en: "free-vs-paid-kids-clubs",
      fr: "clubs-enfants-gratuits-ou-payants",
    },
    title: {
      en: "Free vs paid kids clubs: what to check before you book",
      fr: "Clubs enfants gratuits ou payants : quoi vérifier avant de réserver",
    },
    dek: {
      en: "A club at 50 to 100 euros a day changes the maths of a holiday. Here is how to tell a real free club from a token one.",
      fr: "Un club à 50 ou 100 euros par jour change le calcul des vacances. Voici comment distinguer un vrai club gratuit d'un club de façade.",
    },
    emoji: "🎨",
    accent: "ff6b4a",
    ages: ["toddler", "kid"],
    updated: "2026-06-28",
    readMinutes: 5,
    related: ["guide-allinclusive-europe", "algarve", "costa-del-sol"],
  },
  {
    key: "guide-allinclusive-europe",
    hero: "resortLoungers",
    slug: {
      en: "best-all-inclusive-family-resorts-europe",
      fr: "meilleurs-resorts-all-inclusive-famille-europe",
    },
    title: {
      en: "Best all-inclusive family resorts in Europe",
      fr: "Les meilleurs resorts all-inclusive pour familles en Europe",
    },
    dek: {
      en: "Where all-inclusive genuinely pays off for a family, and the details that separate a great resort from a stressful one.",
      fr: "Où l'all-inclusive vaut vraiment le coup pour une famille, et les détails qui séparent un super resort d'un resort stressant.",
    },
    emoji: "🌴",
    accent: "2bb3c0",
    ages: ["toddler", "kid", "teen"],
    updated: "2026-07-01",
    readMinutes: 8,
    related: ["guide-kids-club-free", "algarve", "costa-del-sol"],
  },
  {
    key: "guide-waterslide-hotels",
    hero: "poolCabanas",
    slug: {
      en: "hotels-with-water-slides",
      fr: "hotels-avec-toboggans-aquatiques",
    },
    title: {
      en: "Hotels with water slides your kids will never want to leave",
      fr: "Des hôtels avec toboggans que vos enfants ne voudront plus quitter",
    },
    dek: {
      en: "For the water-slide age, the pool is the holiday. These are the resorts built around it, scored on safety and the shallow end too.",
      fr: "À l'âge des toboggans, la piscine, c'est les vacances. Voici les resorts construits autour, notés aussi sur la sécurité et le fond plat.",
    },
    emoji: "🎢",
    accent: "ff6b4a",
    ages: ["kid", "teen"],
    updated: "2026-06-30",
    readMinutes: 6,
    related: ["guide-allinclusive-europe", "costa-del-sol"],
  },
];

export const GUIDE_BY_KEY = new Map(GUIDES.map((g) => [g.key, g]));
