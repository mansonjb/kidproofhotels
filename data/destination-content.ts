import type { ImgKey } from "@/lib/images";
import type { Activity, Faq, L10n, Stat } from "@/lib/types";
import { src } from "@/lib/l10n";

// Rich, per-destination content, merged onto the destinations in
// data/destinations.ts. Voice: parent to parent. No em-dashes.

export type DestExtra = {
  photos: ImgKey[];
  stats: Stat[];
  activities: Activity[];
  faqs: Faq[];
  parentTip: L10n;
  goodToKnow: L10n;
};

export const DEST_CONTENT: Record<string, DestExtra> = src({
  lisbon: {
    photos: ["lisbonTram", "coastTown", "poolDusk"],
    stats: [
      { value: "2 min", label: { en: "flat walk to the aquarium from our top pick", fr: "à plat jusqu'à l'aquarium depuis notre premier choix" } },
      { value: "22°C", label: { en: "average sea temperature in summer", fr: "température moyenne de la mer en été" } },
      { value: "15 min", label: { en: "by metro from the flat riverside to the old centre", fr: "en métro du bord de fleuve plat au vieux centre" } },
    ],
    activities: [
      {
        emoji: "🐠",
        name: { en: "Oceanário de Lisboa", fr: "Oceanário de Lisbonne" },
        detail: { en: "One of Europe's finest aquariums, and genuinely all-ages. Book the first slot of the day.", fr: "L'un des plus beaux aquariums d'Europe, vraiment tous âges. Réservez le premier créneau." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "🚋",
        name: { en: "Ride tram 28", fr: "Prendre le tram 28" },
        detail: { en: "The rattling yellow tram through the hills. Go early and treat the ride itself as the outing.", fr: "Le tram jaune qui grince dans les collines. Tôt le matin, et le trajet devient la sortie." },
        ages: ["kid", "teen"],
        time: { en: "2h", fr: "2h" },
      },
      {
        emoji: "🥧",
        name: { en: "Belém and its pastries", fr: "Belém et ses pâtisseries" },
        detail: { en: "Warm custard tarts, riverside space to run, and the monastery for the grown-ups.", fr: "Pastéis chauds, espace au bord du fleuve pour courir, et le monastère pour les adultes." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "🏰",
        name: { en: "São Jorge castle", fr: "Château São Jorge" },
        detail: { en: "Ramparts, cannons and peacocks. Take a tuk-tuk up to save little legs for the exploring.", fr: "Remparts, canons et paons. Montez en tuk-tuk pour garder les jambes pour l'exploration." },
        ages: ["kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
    ],
    faqs: [
      {
        q: { en: "Is Lisbon doable with a buggy?", fr: "Lisbonne, c'est faisable en poussette ?" },
        a: { en: "The old hills are hard work, but stay in flat Parque das Nações or on Avenida da Liberdade and it is easy. Trams and cable car help.", fr: "Les vieilles collines sont dures, mais logez dans le Parque das Nações plat ou sur l'Avenida da Liberdade et c'est facile. Trams et téléphérique aident." },
      },
      {
        q: { en: "When is the best time to visit with kids?", fr: "Quelle est la meilleure période avec des enfants ?" },
        a: { en: "May, June and September are warm but not scorching, with lighter crowds than high summer.", fr: "Mai, juin et septembre sont chauds sans être écrasants, avec moins de monde qu'en plein été." },
      },
      {
        q: { en: "Do many hotels have pools?", fr: "Beaucoup d'hôtels ont-ils une piscine ?" },
        a: { en: "More than most European capitals, which is a real bonus in the summer heat. We flag pool depth on each hotel.", fr: "Plus que la plupart des capitales européennes, un vrai plus dans la chaleur estivale. On indique la profondeur sur chaque hôtel." },
      },
    ],
    parentTip: {
      en: "Base yourself on the flat riverside and use the metro for the hills. You get the best of the city without the buggy battle.",
      fr: "Installez-vous sur le bord de fleuve plat et prenez le métro pour les collines. Le meilleur de la ville sans le combat de la poussette.",
    },
    goodToKnow: {
      en: "Lisbon's charm is its hills, and they are hard work with a pushchair. Where you sleep matters more here than almost anywhere.",
      fr: "Le charme de Lisbonne, ce sont ses collines, et elles sont pénibles en poussette. Où vous dormez compte plus ici que presque partout.",
    },
  },

  algarve: {
    photos: ["algarveCliffs", "deckLoungersSea", "whiteResortPool"],
    stats: [
      { value: "35 min", label: { en: "average transfer from Faro airport", fr: "transfert moyen depuis l'aéroport de Faro" } },
      { value: "3,000+", label: { en: "hours of sunshine a year", fr: "heures de soleil par an" } },
      { value: "24°C", label: { en: "sea temperature in high summer", fr: "température de la mer en plein été" } },
    ],
    activities: [
      {
        emoji: "🏖️",
        name: { en: "Golden calm beaches", fr: "Plages dorées et calmes" },
        detail: { en: "Some of Europe's safest paddling: shallow, warm and sheltered. The daily default for a reason.", fr: "Parmi les baignades les plus sûres d'Europe : peu profondes, chaudes et abritées. Le programme quotidien pour de bonnes raisons." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "🐬",
        name: { en: "Dolphin and cave boat trips", fr: "Sorties bateau dauphins et grottes" },
        detail: { en: "Leave from Vilamoura and Albufeira. Pick a calm-morning slot with younger kids.", fr: "Partent de Vilamoura et Albufeira. Choisissez un créneau matin calme avec de jeunes enfants." },
        ages: ["kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "💦",
        name: { en: "Aquashow water park", fr: "Parc aquatique Aquashow" },
        detail: { en: "The region's big water park, with slides and a wave pool for a proper full day.", fr: "Le grand parc aquatique de la région, avec toboggans et piscine à vagues pour une vraie journée." },
        ages: ["kid", "teen"],
        time: { en: "Full day", fr: "Journée" },
      },
      {
        emoji: "🦩",
        name: { en: "Ria Formosa nature", fr: "Nature de la Ria Formosa" },
        detail: { en: "Lagoons, flamingos and easy boardwalks. A gentle change of pace from the beach.", fr: "Lagunes, flamants et pontons faciles. Un changement de rythme doux après la plage." },
        ages: ["toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
    ],
    faqs: [
      {
        q: { en: "Is the sea safe for young children?", fr: "La mer est-elle sûre pour les jeunes enfants ?" },
        a: { en: "Many Algarve beaches are shallow, calm and sheltered, among the safest in Europe. Always check the local flag.", fr: "Beaucoup de plages de l'Algarve sont peu profondes, calmes et abritées, parmi les plus sûres d'Europe. Vérifiez toujours le drapeau." },
      },
      {
        q: { en: "When is best for a family?", fr: "Quelle est la meilleure période en famille ?" },
        a: { en: "June and September are ideal: warm sea, big-resort facilities open, and better value than August.", fr: "Juin et septembre sont idéaux : mer chaude, resorts ouverts, et meilleur rapport qualité-prix qu'en août." },
      },
      {
        q: { en: "Do we need a hire car?", fr: "Faut-il louer une voiture ?" },
        a: { en: "Not if you pick an all-in resort. A car helps for water parks, dolphin trips and quieter beaches.", fr: "Pas si vous choisissez un resort tout compris. Une voiture aide pour les parcs aquatiques, dauphins et plages calmes." },
      },
    ],
    parentTip: {
      en: "Book a resort with a free kids club and you buy yourself an actual holiday, not just a location change.",
      fr: "Réservez un resort avec club enfants gratuit et vous vous offrez de vraies vacances, pas juste un changement de décor.",
    },
    goodToKnow: {
      en: "Some clifftop resorts have a steep climb back from the beach. Lovely views, hard work with a buggy, so check the access.",
      fr: "Certains resorts en haut de falaise ont une remontée raide depuis la plage. Belles vues, pénible en poussette, vérifiez l'accès.",
    },
  },

  "costa-del-sol": {
    photos: ["poolOrange", "hotelTowerGreen", "villaPink"],
    stats: [
      { value: "20 min", label: { en: "average transfer from Málaga airport", fr: "transfert moyen depuis l'aéroport de Málaga" } },
      { value: "320", label: { en: "days of sunshine a year", fr: "jours de soleil par an" } },
      { value: "5+", label: { en: "big water parks within easy reach", fr: "grands parcs aquatiques à portée" } },
    ],
    activities: [
      {
        emoji: "🎢",
        name: { en: "Water parks galore", fr: "Des parcs aquatiques à foison" },
        detail: { en: "Several big water parks within reach, plus on-site aqua parks at the family resorts.", fr: "Plusieurs grands parcs aquatiques à proximité, plus des parcs sur place dans les resorts familiaux." },
        ages: ["kid", "teen"],
        time: { en: "Full day", fr: "Journée" },
      },
      {
        emoji: "🚠",
        name: { en: "Benalmádena cable car", fr: "Téléphérique de Benalmádena" },
        detail: { en: "Up the mountain for the view and a birds-of-prey show. A break from the water.", fr: "En haut de la montagne pour la vue et un spectacle de rapaces. Une pause loin de l'eau." },
        ages: ["kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "🐧",
        name: { en: "Sea Life and aquariums", fr: "Sea Life et aquariums" },
        detail: { en: "Toddler-friendly and a great too-hot-to-move backup on the fiercest afternoons.", fr: "Adapté aux tout-petits et un super plan B les après-midis trop chauds." },
        ages: ["baby", "toddler", "kid"],
        time: { en: "2h", fr: "2h" },
      },
      {
        emoji: "🏰",
        name: { en: "Marbella old town", fr: "Vieille ville de Marbella" },
        detail: { en: "Orange-tree squares, gelato and gentle, pushchair-friendly streets for a slower morning.", fr: "Places aux orangers, glaces et rues douces adaptées à la poussette pour une matinée tranquille." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
    ],
    faqs: [
      {
        q: { en: "Is it good for the water-slide age?", fr: "Est-ce bien pour l'âge des toboggans ?" },
        a: { en: "It is the best stretch of coast for it: on-site aqua parks plus several big water parks nearby.", fr: "C'est le meilleur littoral pour ça : parcs aquatiques sur place plus plusieurs grands parcs à proximité." },
      },
      {
        q: { en: "Are family rooms easy to find?", fr: "Les chambres familiales sont-elles faciles à trouver ?" },
        a: { en: "Yes. Family rooms and interconnecting options are the norm at the big resorts here, not the exception.", fr: "Oui. Chambres familiales et communicantes sont la norme dans les grands resorts d'ici, pas l'exception." },
      },
      {
        q: { en: "When should we go?", fr: "Quand faut-il y aller ?" },
        a: { en: "Sunshine is near-guaranteed from May to October, with a long shoulder season either side of the August peak.", fr: "Le soleil est quasi garanti de mai à octobre, avec une longue mi-saison de part et d'autre du pic d'août." },
      },
    ],
    parentTip: {
      en: "Match the resort to your kids' ages: a splash zone for toddlers, big flumes for older kids. We flag which is which.",
      fr: "Adaptez le resort à l'âge des enfants : zone à jets pour les tout-petits, grands toboggans pour les plus grands. On l'indique.",
    },
    goodToKnow: {
      en: "Resorts here are big and lively. Wonderful for water-loving kids, but ask for a quiet-side room if you have a napping baby.",
      fr: "Les resorts d'ici sont grands et animés. Formidable pour les enfants qui aiment l'eau, mais demandez une chambre côté calme avec un bébé qui fait la sieste.",
    },
  },
});
