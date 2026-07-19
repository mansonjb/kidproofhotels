import type { ImgKey } from "@/lib/images";
import type { AmenityId } from "@/data/amenities";
import type { Faq, L10n } from "@/lib/types";
import { src } from "@/lib/l10n";

// High-intent, timely landing pages that curate our scored hotels across
// destinations: "winter sun family holidays", "October half term", "best family
// hotels 2026", etc. These target seasonal search demand the destination and
// amenity pages do not, and lean on the KidProof Score as the hook.

export type Collection = {
  key: string;
  slug: L10n;
  emoji: string;
  accent: string;
  heroImg: ImgKey;
  title: L10n; // H1
  dek: L10n; // standfirst
  intro: L10n; // opening paragraph
  timing?: L10n; // seasonal callout ("Book by...", "Best months...")
  faqs: Faq[];
  // Selection: how the hotel line-up is resolved (in lib order, best score first).
  select: {
    destinationKeys?: string[];
    amenityIds?: AmenityId[];
    limit?: number;
  };
};

export const COLLECTIONS: Collection[] = src([
  {
    key: "winter-sun",
    slug: {
      en: "winter-sun-family-holidays",
      fr: "vacances-famille-au-soleil-hiver",
    },
    emoji: "☀️",
    accent: "ff9d1c",
    heroImg: "poolPalms",
    title: {
      en: "Winter sun family holidays",
      fr: "Vacances famille au soleil en hiver",
    },
    dek: {
      en: "Where to find warm sea, short transfers and a real kids club when it is grey at home. Every hotel scored for families.",
      fr: "Où trouver mer chaude, transferts courts et un vrai club enfants quand il fait gris chez vous. Chaque hôtel noté pour les familles.",
    },
    intro: {
      en: "From late October the Canary Islands and the southern Costa keep the sun going while northern Europe shuts down. These are the family hotels that make a winter escape work with kids: warm shallow pools, indoor options for a cool evening, and clubs that run out of season. Booked early, they are the best-value sun of the year.",
      fr: "Dès fin octobre, les Canaries et le sud de la Costa gardent le soleil quand l'Europe du nord s'éteint. Voici les hôtels famille qui rendent une escapade d'hiver réussie avec des enfants : piscines chaudes à fond plat, options couvertes pour les soirées fraîches, et clubs ouverts hors saison. Réservés tôt, c'est le meilleur soleil de l'année au meilleur prix.",
    },
    timing: {
      en: "Best from November to March. Book 2 to 4 months ahead for the best rooms.",
      fr: "Idéal de novembre à mars. Réservez 2 à 4 mois à l'avance pour les meilleures chambres.",
    },
    select: { destinationKeys: ["tenerife", "gran-canaria", "fuerteventura", "lanzarote", "costa-del-sol"], limit: 12 },
    faqs: [
      {
        q: { en: "Where is warmest in Europe in winter?", fr: "Où fait-il le plus chaud en Europe en hiver ?" },
        a: { en: "Tenerife and the Canary Islands stay mild all winter (20 to 24C by day), warmer than the Spanish mainland. The Costa del Sol is a step cooler but still sunny.", fr: "Tenerife et les Canaries restent doux tout l'hiver (20 à 24°C en journée), plus chaud que l'Espagne continentale. La Costa del Sol est un cran plus fraîche mais ensoleillée." },
      },
      {
        q: { en: "Is the sea warm enough to swim?", fr: "La mer est-elle assez chaude pour se baigner ?" },
        a: { en: "In the Canaries the sea is swimmable most of the winter for hardy kids, but a heated hotel pool is the safer bet. We flag heated pools on each hotel.", fr: "Aux Canaries, la mer reste baignable une bonne partie de l'hiver pour les enfants endurcis, mais une piscine chauffée est plus sûre. On signale les piscines chauffées sur chaque hôtel." },
      },
    ],
  },
  {
    key: "october-half-term",
    slug: {
      en: "october-half-term-family-holidays",
      fr: "vacances-famille-toussaint-au-soleil",
    },
    emoji: "🍂",
    accent: "ff6b4a",
    heroImg: "deckLoungersSea",
    title: {
      en: "October half term family holidays in the sun",
      fr: "Vacances de la Toussaint en famille au soleil",
    },
    dek: {
      en: "One week, warm weather, and hotels that still have their kids club open. The autumn-break escapes worth booking now.",
      fr: "Une semaine, du soleil, et des hôtels dont le club enfants est encore ouvert. Les escapades de l'automne à réserver maintenant.",
    },
    intro: {
      en: "The autumn half term is the last easy sun of the year, and the good family hotels sell out early because everyone wants the same week. These stays still run their kids club into late October, keep the pools warm, and sit a short transfer from the airport, so a single week actually feels like a holiday. Book by late summer for the pick of the rooms.",
      fr: "Les vacances de la Toussaint sont le dernier soleil facile de l'année, et les bons hôtels famille se remplissent tôt car tout le monde veut la même semaine. Ces séjours gardent leur club enfants ouvert fin octobre, l'eau des piscines chaude, et se trouvent à courte distance de l'aéroport, pour qu'une semaine ressemble vraiment à des vacances. Réservez avant la fin de l'été pour le choix des chambres.",
    },
    timing: {
      en: "For late October. Book by August for the best family rooms.",
      fr: "Pour fin octobre. Réservez avant août pour les meilleures chambres familiales.",
    },
    select: { destinationKeys: ["tenerife", "gran-canaria", "fuerteventura", "lanzarote", "algarve", "costa-del-sol", "crete", "cyprus", "malta"], limit: 12 },
    faqs: [
      {
        q: { en: "Where is warm at October half term?", fr: "Où fait-il chaud aux vacances de la Toussaint ?" },
        a: { en: "Tenerife is the safest warm bet in late October. The Algarve, Costa del Sol and Crete are usually still mild and sunny, with the sea warm from summer.", fr: "Tenerife est le pari chaud le plus sûr fin octobre. L'Algarve, la Costa del Sol et la Crète sont en général encore douces et ensoleillées, avec une mer réchauffée par l'été." },
      },
      {
        q: { en: "Will the kids club still be open?", fr: "Le club enfants sera-t-il encore ouvert ?" },
        a: { en: "At the bigger resorts, yes, though hours can shorten out of peak season. We note club status on each hotel so you are not caught out.", fr: "Dans les grands resorts, oui, même si les horaires peuvent se réduire hors saison. On indique le statut du club sur chaque hôtel pour éviter les surprises." },
      },
    ],
  },
  {
    key: "best-2026",
    slug: {
      en: "best-family-hotels-europe-2026",
      fr: "meilleurs-hotels-famille-europe-2026",
    },
    emoji: "🏆",
    accent: "ff9d1c",
    heroImg: "whiteResortPool",
    title: {
      en: "The best family hotels in Europe for 2026",
      fr: "Les meilleurs hôtels famille d'Europe pour 2026",
    },
    dek: {
      en: "Our highest KidProof Scores of the year, ranked on the eight things that make or break a trip with kids.",
      fr: "Nos meilleurs Scores KidProof de l'année, classés sur les huit critères qui font ou défont un voyage en famille.",
    },
    intro: {
      en: "These are the hotels that scored highest across our whole list: room setup, baby kit, pools, dining, safety, logistics, location and the little touches. Not the flashiest, the ones that genuinely work with children. If you only look at one shortlist this year, make it this one.",
      fr: "Voici les hôtels qui ont obtenu les meilleures notes de toute notre liste : configuration des chambres, matériel bébé, piscines, restauration, sécurité, praticité, emplacement et petites attentions. Pas les plus tape-à-l'oeil, ceux qui marchent vraiment avec des enfants. Si vous ne regardez qu'une sélection cette année, prenez celle-ci.",
    },
    select: { limit: 12 },
    faqs: [
      {
        q: { en: "How are the hotels ranked?", fr: "Comment les hôtels sont-ils classés ?" },
        a: { en: "By their KidProof Score, our weighted rating across eight family criteria, with room configuration carrying the most weight. It is our own editorial assessment, not a paid placement.", fr: "Par leur Score KidProof, notre note pondérée sur huit critères familiaux, la configuration des chambres pesant le plus. C'est notre évaluation éditoriale, pas un placement payant." },
      },
    ],
  },
  {
    key: "water-park",
    slug: {
      en: "family-holidays-with-a-water-park",
      fr: "vacances-famille-avec-parc-aquatique",
    },
    emoji: "🎢",
    accent: "2bb3c0",
    heroImg: "poolCabanas",
    title: {
      en: "Family holidays with a water park",
      fr: "Vacances en famille avec parc aquatique",
    },
    dek: {
      en: "For the water-slide age, the pool is the whole holiday. The resorts built around slides, splash zones and lazy rivers.",
      fr: "À l'âge des toboggans, la piscine, c'est les vacances entières. Les resorts construits autour des toboggans, zones à jets et rivières lentes.",
    },
    intro: {
      en: "Some kids do not want a beach, a museum or a boat trip. They want to go down the big slide, again. These resorts have serious on-site water play: slides for every height, toddler splash zones and lazy rivers, so a rainy morning or a beach-refuser is never a problem. We score the shallow end and the lifeguards too, not just the flumes.",
      fr: "Certains enfants ne veulent ni plage, ni musée, ni sortie en bateau. Ils veulent refaire le grand toboggan. Ces resorts ont de vrais jeux d'eau sur place : toboggans pour toutes les tailles, zones à jets pour tout-petits et rivières lentes, pour qu'un matin de pluie ou un enfant anti-plage ne soit jamais un problème. On note aussi le fond plat et les maîtres-nageurs, pas seulement les toboggans.",
    },
    select: { amenityIds: ["water-slides"], limit: 12 },
    faqs: [
      {
        q: { en: "Are the water parks suitable for toddlers?", fr: "Les parcs aquatiques conviennent-ils aux tout-petits ?" },
        a: { en: "The best resorts have a separate toddler splash zone with shallow water and gentle sprays, apart from the big slides. We flag which have one.", fr: "Les meilleurs resorts ont une zone à jets séparée pour tout-petits, à faible profondeur, à l'écart des grands toboggans. On indique lesquels en ont une." },
      },
    ],
  },
  {
    key: "all-inclusive",
    slug: {
      en: "all-inclusive-family-resorts",
      fr: "resorts-famille-tout-inclus",
    },
    emoji: "🌴",
    accent: "ff6b4a",
    heroImg: "resortLoungers",
    title: {
      en: "All-inclusive family resorts",
      fr: "Resorts famille tout inclus",
    },
    dek: {
      en: "Meals, drinks, a free kids club and evening entertainment on one bill. Where all-inclusive genuinely pays off with kids.",
      fr: "Repas, boissons, club enfants gratuit et animation du soir sur une seule facture. Où le tout inclus vaut vraiment le coup avec des enfants.",
    },
    intro: {
      en: "All-inclusive earns its keep with a family: no counting the cost of every ice cream, and a free kids club that buys the adults an actual evening. These resorts do it well, with a real all-day club, a family buffet with an early sitting, and enough pools that nobody fights over a lounger. We flag the ones where the club is genuinely free, not a paid add-on.",
      fr: "Le tout inclus se justifie pleinement en famille : on ne compte plus chaque glace, et un club enfants gratuit offre une vraie soirée aux adultes. Ces resorts le font bien, avec un vrai club toute la journée, un buffet familial à service tôt, et assez de piscines pour que personne ne se batte pour un transat. On signale ceux où le club est vraiment gratuit, pas une option payante.",
    },
    select: { amenityIds: ["free-kids-club"], limit: 12 },
    faqs: [
      {
        q: { en: "Is the kids club really included?", fr: "Le club enfants est-il vraiment inclus ?" },
        a: { en: "Not always, even at all-inclusive resorts. Some charge 50 to 100 euros a day for it. Every hotel here has a genuinely free club, and we say so.", fr: "Pas toujours, même dans les resorts tout inclus. Certains le facturent 50 à 100 euros par jour. Chaque hôtel ici a un club vraiment gratuit, et on le précise." },
      },
    ],
  },
]);

export const COLLECTION_BY_KEY = new Map(COLLECTIONS.map((c) => [c.key, c]));
