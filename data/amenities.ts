import type { ImgKey } from "@/lib/images";
import type { L10n } from "@/lib/types";

// Family amenity taxonomy. This is what turns the site from a handful of pages
// into a browsable matrix: "family hotels with a pool", "with a free kids club",
// and so on. Activity-first discovery, the way parents actually search.

export type AmenityId =
  | "pool"
  | "free-kids-club"
  | "water-slides"
  | "baby-friendly"
  | "beach-access"
  | "family-suites"
  | "self-catering"
  | "toddler-friendly"
  | "city-base";

export type Amenity = {
  id: AmenityId;
  emoji: string;
  img: ImgKey;
  accent: string;
  label: L10n; // short, for chips and cards
  short: L10n; // one-line card blurb
  slug: L10n;
  h1: L10n; // page title
  intro: L10n;
  tip: L10n; // parent tip callout on the amenity page
};

export const AMENITIES: Amenity[] = [
  {
    id: "pool",
    emoji: "🏊",
    img: "poolPalms",
    accent: "2bb3c0",
    label: { en: "Swimming pool", fr: "Piscine" },
    short: { en: "Hotels with a pool the kids can actually use", fr: "Des hôtels avec une piscine où les enfants peuvent vraiment nager" },
    slug: { en: "family-hotels-with-a-pool", fr: "hotels-famille-avec-piscine" },
    h1: { en: "Family hotels with a pool", fr: "Hôtels famille avec piscine" },
    intro: {
      en: "A pool is the number one amenity families search for, but not all pools are equal. We flag the shallow end, the toddler shelf and whether it is watched, so you know it works for your children before you book.",
      fr: "La piscine est l'équipement le plus recherché par les familles, mais toutes ne se valent pas. On signale le fond plat, le rebord pour tout-petits et la surveillance, pour savoir si elle convient à vos enfants avant de réserver.",
    },
    tip: {
      en: "Check the shallow end depth and whether the pool is watched. A deep, unwatched pool is a stressful holiday with young kids.",
      fr: "Vérifiez la profondeur du fond plat et la surveillance. Une piscine profonde et sans surveillance, c'est des vacances stressantes avec de jeunes enfants.",
    },
  },
  {
    id: "free-kids-club",
    emoji: "🎨",
    img: "kidsFootball",
    accent: "ff6b4a",
    label: { en: "Free kids club", fr: "Club enfants gratuit" },
    short: { en: "Genuine, all-day clubs that are actually included", fr: "De vrais clubs toute la journée, vraiment inclus" },
    slug: { en: "family-hotels-with-a-free-kids-club", fr: "hotels-famille-club-enfants-gratuit" },
    h1: { en: "Family hotels with a free kids club", fr: "Hôtels famille avec club enfants gratuit" },
    intro: {
      en: "A club at 50 to 100 euros a day quietly changes the price of a holiday. These hotels run a genuinely free, all-day club, split by age, that gives you an actual break.",
      fr: "Un club à 50 ou 100 euros par jour change discrètement le prix des vacances. Ces hôtels proposent un vrai club gratuit toute la journée, réparti par âge, qui vous offre une vraie pause.",
    },
    tip: {
      en: "Ask the hours and the age split. All day, separated by age, is a real club. Two hours after lunch is a babysitting slot.",
      fr: "Demandez les horaires et la répartition par âge. Toute la journée, séparé par âge, c'est un vrai club. Deux heures après le déjeuner, c'est un créneau de garde.",
    },
  },
  {
    id: "water-slides",
    emoji: "🎢",
    img: "poolCabanas",
    accent: "ff6b4a",
    label: { en: "Water slides", fr: "Toboggans" },
    short: { en: "For the water-slide age, the pool is the holiday", fr: "À l'âge des toboggans, la piscine, c'est les vacances" },
    slug: { en: "family-hotels-with-water-slides", fr: "hotels-famille-avec-toboggans" },
    h1: { en: "Family hotels with water slides", fr: "Hôtels famille avec toboggans" },
    intro: {
      en: "For kids roughly four to twelve, water slides are the whole holiday. These resorts are built around them, and we score the shallow end and the lifeguards too, not just the big flumes.",
      fr: "Pour les enfants d'environ quatre à douze ans, les toboggans sont les vacances entières. Ces resorts sont construits autour, et on note aussi le fond plat et les maîtres-nageurs, pas seulement les grands toboggans.",
    },
    tip: {
      en: "Match the slides to the age: a toddler splash zone for the little ones, big flumes for older kids. We flag which is which.",
      fr: "Adaptez les toboggans à l'âge : zone à jets pour les tout-petits, grands toboggans pour les plus grands. On l'indique.",
    },
  },
  {
    id: "baby-friendly",
    emoji: "🍼",
    img: "babyHand",
    accent: "2bb3c0",
    label: { en: "Baby-friendly", fr: "Adapté aux bébés" },
    short: { en: "Free cots, high chairs and the kit that matters", fr: "Lits bébé gratuits, chaises hautes et le matériel qui compte" },
    slug: { en: "baby-friendly-hotels", fr: "hotels-adaptes-aux-bebes" },
    h1: { en: "Baby-friendly family hotels", fr: "Hôtels adaptés aux bébés" },
    intro: {
      en: "A first trip with a baby is about the kit and the nap. These hotels have clean cots, high chairs and a bottle warmer, plus the flat access and separate sleeping space that make it restful.",
      fr: "Un premier voyage avec un bébé, c'est le matériel et la sieste. Ces hôtels ont des lits parapluie propres, des chaises hautes et un chauffe-biberon, plus l'accès plat et l'espace nuit séparé qui rendent le séjour reposant.",
    },
    tip: {
      en: "Confirm the cot is free and set up before you arrive. Landing with an overtired baby and no cot is the classic first-night mistake.",
      fr: "Confirmez que le lit bébé est gratuit et installé avant l'arrivée. Débarquer avec un bébé épuisé et pas de lit, c'est l'erreur classique de la première nuit.",
    },
  },
  {
    id: "beach-access",
    emoji: "🏖️",
    img: "algarveCliffs",
    accent: "ff9d1c",
    label: { en: "Beach access", fr: "Accès plage" },
    short: { en: "Calm, shallow beaches within easy reach", fr: "Des plages calmes et peu profondes à portée" },
    slug: { en: "family-beach-hotels", fr: "hotels-famille-bord-de-mer" },
    h1: { en: "Family hotels near the beach", fr: "Hôtels famille au bord de la mer" },
    intro: {
      en: "Not all beach hotels are family beach hotels. These are close to calm, shallow, sheltered beaches, and we tell you when the walk back up is steep with a buggy.",
      fr: "Tous les hôtels de plage ne sont pas des hôtels de plage en famille. Ceux-ci sont proches de plages calmes, peu profondes et abritées, et on vous dit quand la remontée est raide en poussette.",
    },
    tip: {
      en: "Check the beach access, not just the distance. A clifftop hotel can be two minutes from the sand and a hard climb back.",
      fr: "Vérifiez l'accès à la plage, pas juste la distance. Un hôtel en haut de falaise peut être à deux minutes du sable et une remontée pénible.",
    },
  },
  {
    id: "family-suites",
    emoji: "🛏️",
    img: "roomCozy",
    accent: "ff9d1c",
    label: { en: "Family suites", fr: "Suites familiales" },
    short: { en: "Connecting rooms and a real separate sleeping space", fr: "Chambres communicantes et un vrai espace nuit séparé" },
    slug: { en: "hotels-with-family-suites", fr: "hotels-avec-suites-familiales" },
    h1: { en: "Family hotels with connecting rooms and suites", fr: "Hôtels famille avec chambres communicantes et suites" },
    intro: {
      en: "The number one family question is the room. These hotels offer connecting rooms or family suites with a separate sleeping area, so bedtime does not black out the whole family at 7pm.",
      fr: "La première question des familles, c'est la chambre. Ces hôtels proposent des chambres communicantes ou des suites familiales avec espace nuit séparé, pour que le coucher n'éteigne pas toute la famille à 19h.",
    },
    tip: {
      en: "Ask if connecting rooms can be guaranteed at booking, not just requested. Requested often means not available on arrival.",
      fr: "Demandez si les chambres communicantes sont garanties à la réservation, pas juste sur demande. Sur demande veut souvent dire indisponible à l'arrivée.",
    },
  },
  {
    id: "self-catering",
    emoji: "🍳",
    img: "livingRoom",
    accent: "2bb3c0",
    label: { en: "Kitchen", fr: "Cuisine" },
    short: { en: "A kitchen for fussy eaters and early breakfasts", fr: "Une cuisine pour les difficiles et les petits-déjeuners tôt" },
    slug: { en: "self-catering-family-hotels", fr: "hotels-famille-avec-cuisine" },
    h1: { en: "Self-catering family hotels and apartments", fr: "Hôtels et appartements famille avec cuisine" },
    intro: {
      en: "A kitchenette is quietly one of the most useful things on a family trip: warm milk at 6am, simple meals for fussy eaters, and no waiting for slow room service. These stays have one.",
      fr: "Une kitchenette est discrètement l'une des choses les plus utiles en voyage en famille : lait chaud à 6h, repas simples pour les difficiles, et pas d'attente d'un room service lent. Ces séjours en ont une.",
    },
    tip: {
      en: "For a week with school-age kids, an apartment with a kitchen often beats two hotel rooms on price and on sanity.",
      fr: "Pour une semaine avec des enfants scolarisés, un appartement avec cuisine bat souvent deux chambres d'hôtel sur le prix et sur les nerfs.",
    },
  },
  {
    id: "toddler-friendly",
    emoji: "🧒",
    img: "poolTropicalMtn",
    accent: "ff6b4a",
    label: { en: "Toddler-friendly", fr: "Adapté aux tout-petits" },
    short: { en: "Shallow pools, gentle pace, safe to roam", fr: "Piscines à fond plat, rythme doux, exploration sans danger" },
    slug: { en: "toddler-friendly-hotels", fr: "hotels-adaptes-aux-tout-petits" },
    h1: { en: "Toddler-friendly family hotels", fr: "Hôtels adaptés aux tout-petits" },
    intro: {
      en: "Toddlers need a shallow pool, safe space to roam, and a gentle pace. These hotels have a paddling area or shallow shelf and the calm, secure setting that suits ages one to three.",
      fr: "Les tout-petits ont besoin d'une piscine à fond plat, d'un espace sûr pour explorer et d'un rythme doux. Ces hôtels ont une pataugeoire ou un rebord peu profond et le cadre calme et sécurisé qui convient de un à trois ans.",
    },
    tip: {
      en: "A shallow, gated pool beats a big deep one at this age. Look for a paddling area rather than just a headline pool.",
      fr: "Une piscine à fond plat et clôturée vaut mieux qu'une grande piscine profonde à cet âge. Cherchez une pataugeoire plutôt qu'une simple grande piscine.",
    },
  },
  {
    id: "city-base",
    emoji: "🚋",
    img: "lisbonTram",
    accent: "ff9d1c",
    label: { en: "City base", fr: "En ville" },
    short: { en: "Central, walkable bases for a city break with kids", fr: "Des bases centrales et à pied pour un city break en famille" },
    slug: { en: "family-city-hotels", fr: "hotels-famille-en-ville" },
    h1: { en: "Family hotels for a city break", fr: "Hôtels famille pour un city break" },
    intro: {
      en: "A city break with kids lives or dies on where you sleep. These hotels are central, walkable and buggy-friendly, so the sightseeing is a joy and not a march.",
      fr: "Un city break avec des enfants se joue sur où vous dormez. Ces hôtels sont centraux, à pied et adaptés à la poussette, pour que les visites soient un plaisir et pas une marche forcée.",
    },
    tip: {
      en: "Prioritise flat, walkable neighbourhoods and a metro at the door. It matters more than the star rating with a pushchair.",
      fr: "Privilégiez les quartiers plats et à pied avec un métro devant. Ça compte plus que le nombre d'étoiles avec une poussette.",
    },
  },
];

export const AMENITY_BY_ID = new Map(AMENITIES.map((a) => [a.id, a]));
