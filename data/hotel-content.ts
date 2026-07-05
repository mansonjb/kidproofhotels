import type { ImgKey } from "@/lib/images";
import type { Activity, AgeBand, DayStep, Fact, Faq, L10n } from "@/lib/types";

// Rich, per-hotel editorial content, kept separate from the core hotel records
// so the data file stays readable. Merged onto the hotels in data/hotels.ts.
// Voice: parent to parent. Specific, honest, no em-dashes.

export type HotelExtra = {
  photos: ImgKey[];
  verdict: L10n;
  parentTip: L10n;
  atAGlance: Fact[];
  activities: Activity[];
  sampleDay: DayStep[];
  ageNotes: Partial<Record<AgeBand, L10n>>;
  faqs: Faq[];
};

const f = (icon: string, en: string, fr: string, ven: string, vfr: string): Fact => ({
  icon,
  label: { en, fr },
  value: { en: ven, fr: vfr },
});

export const HOTEL_CONTENT: Record<string, HotelExtra> = {
  "lisbon-tejo-family": {
    photos: ["poolDusk", "roomCozy", "coastTown"],
    verdict: {
      en: "The stress-free base for Lisbon with little ones: flat, walkable, and two minutes from the aquarium.",
      fr: "La base sans stress pour Lisbonne avec des petits : plat, tout à pied, et à deux minutes de l'aquarium.",
    },
    parentTip: {
      en: "Ask for a room on the aquarium side and away from the lift. You get the view and a quiet nap.",
      fr: "Demandez une chambre côté aquarium et loin de l'ascenseur. Vous gagnez la vue et une sieste au calme.",
    },
    atAGlance: [
      f("🛏️", "Sleeps", "Dort", "Family rooms for 4, connecting doubles", "Chambres familiales pour 4, doubles communicantes"),
      f("🍼", "Baby kit", "Matériel bébé", "Free cot, high chair, bottle warmer", "Lit bébé, chaise haute, chauffe-biberon gratuits"),
      f("🏊", "Pool", "Piscine", "Rooftop pool with a toddler shelf", "Piscine sur le toit avec rebord tout-petits"),
      f("🍽️", "Breakfast", "Petit-déj", "Grab-and-go counter from 7am", "Comptoir à emporter dès 7h"),
      f("🚋", "Getting around", "Se déplacer", "Flat, buggy-friendly, metro at the door", "Plat, poussette facile, métro devant"),
      f("🅿️", "Parking", "Parking", "On-site, paid", "Sur place, payant"),
    ],
    activities: [
      {
        emoji: "🐠",
        name: { en: "Lisbon Oceanário", fr: "Oceanário de Lisbonne" },
        detail: {
          en: "One of Europe's best aquariums, a two minute flat walk away. Book the first slot to beat the crowds.",
          fr: "L'un des meilleurs aquariums d'Europe, à deux minutes à plat. Réservez le premier créneau pour éviter la foule.",
        },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "🚠",
        name: { en: "Riverside cable car", fr: "Téléphérique du bord de fleuve" },
        detail: {
          en: "A short, gentle cable car along the water. Big hit with toddlers, no queues most mornings.",
          fr: "Un téléphérique court et doux au bord de l'eau. Gros succès chez les tout-petits, sans file le matin.",
        },
        ages: ["toddler", "kid"],
        time: { en: "1h", fr: "1h" },
      },
      {
        emoji: "🚋",
        name: { en: "Tram 28 adventure", fr: "L'aventure du tram 28" },
        detail: {
          en: "The classic yellow tram through the old hills. Go early, hold on tight, and treat it as the activity.",
          fr: "Le tram jaune classique dans les vieilles collines. Tôt le matin, tenez bon, et faites-en l'activité.",
        },
        ages: ["kid", "teen"],
        time: { en: "2h", fr: "2h" },
      },
      {
        emoji: "🥧",
        name: { en: "Pastéis de Belém", fr: "Pastéis de Belém" },
        detail: {
          en: "Warm custard tarts by the river, with space for kids to run off the sugar afterwards.",
          fr: "Des pastéis chauds au bord du fleuve, avec de l'espace pour que les enfants se défoulent après.",
        },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "1h", fr: "1h" },
      },
    ],
    sampleDay: [
      { time: "8:00", title: { en: "Grab-and-go breakfast", fr: "Petit-déj à emporter" }, note: { en: "No queue, no meltdown. Coffee for you, pastry for them.", fr: "Sans file, sans crise. Café pour vous, viennoiserie pour eux." } },
      { time: "9:30", title: { en: "Aquarium, first slot", fr: "Aquarium, premier créneau" }, note: { en: "Two minutes on the flat. Ocean tank before it fills up.", fr: "Deux minutes à plat. Le grand bassin avant la foule." } },
      { time: "12:30", title: { en: "Lunch and a nap", fr: "Déjeuner et sieste" }, note: { en: "Back to the room for the little one. You are close enough to pop back.", fr: "Retour en chambre pour le petit. Vous êtes assez proche pour y revenir." } },
      { time: "16:00", title: { en: "Rooftop pool", fr: "Piscine sur le toit" }, note: { en: "The shallow shelf is perfect for a splash after the heat.", fr: "Le rebord à fond plat est parfait pour barboter après la chaleur." } },
      { time: "19:00", title: { en: "Early dinner nearby", fr: "Dîner tôt à côté" }, note: { en: "Flat walk to family restaurants along the marina.", fr: "Marche à plat vers les restaurants familiaux de la marina." } },
    ],
    ageNotes: {
      baby: { en: "Flat access and free cots make it a breeze with a baby.", fr: "Accès plat et lits bébé gratuits, un jeu d'enfant avec un bébé." },
      toddler: { en: "The cable car and aquarium are toddler gold.", fr: "Le téléphérique et l'aquarium, du bonheur pour les tout-petits." },
      kid: { en: "Loves the tram and the science museum next door.", fr: "Adore le tram et le musée des sciences juste à côté." },
    },
    faqs: [
      {
        q: { en: "Is it really walkable with a buggy?", fr: "C'est vraiment praticable en poussette ?" },
        a: { en: "Yes. Parque das Nações is flat and modern, unlike the old centre. Lifts everywhere and wide pavements.", fr: "Oui. Le Parque das Nações est plat et moderne, contrairement au vieux centre. Ascenseurs partout et larges trottoirs." },
      },
      {
        q: { en: "How far is the historic centre?", fr: "Le centre historique est à quelle distance ?" },
        a: { en: "About 15 minutes by metro, direct from the station at the hotel door.", fr: "Environ 15 minutes en métro, direct depuis la station devant l'hôtel." },
      },
      {
        q: { en: "Are cots free?", fr: "Les lits bébé sont-ils gratuits ?" },
        a: { en: "Yes, and they set them up before you arrive if you ask when booking.", fr: "Oui, et ils les installent avant votre arrivée si vous le demandez à la réservation." },
      },
    ],
  },

  "lisbon-parque-suites": {
    photos: ["livingRoom", "villaInterior", "coastTown"],
    verdict: {
      en: "A central suite with a separate bedroom, so bedtime does not blackout the whole family at 7pm.",
      fr: "Une suite centrale avec chambre séparée, pour que le coucher n'éteigne pas toute la famille à 19h.",
    },
    parentTip: {
      en: "The kitchenette is the real win: warm milk at 6am without ordering room service.",
      fr: "La kitchenette est le vrai plus : réchauffer le lait à 6h sans commander au room service.",
    },
    atAGlance: [
      f("🛏️", "Sleeps", "Dort", "Suites for 4 to 5, separate bedroom", "Suites pour 4 à 5, chambre séparée"),
      f("🍳", "Kitchen", "Cuisine", "Kitchenette in every suite", "Kitchenette dans chaque suite"),
      f("🏊", "Pool", "Piscine", "Small plunge pool only", "Petit bassin uniquement"),
      f("📍", "Location", "Emplacement", "Avenida da Liberdade, walk everywhere", "Avenida da Liberdade, tout à pied"),
      f("🍽️", "Breakfast", "Petit-déj", "Buffet, family restaurants at the door", "Buffet, restos familiaux devant"),
      f("👶", "Baby kit", "Matériel bébé", "Cot on request, less kit than a resort", "Lit sur demande, moins de matériel qu'un resort"),
    ],
    activities: [
      {
        emoji: "🌳",
        name: { en: "Eduardo VII park", fr: "Parc Eduardo VII" },
        detail: { en: "Big green space to run at the top of the avenue, with a view over the city.", fr: "Grand espace vert pour courir en haut de l'avenue, avec vue sur la ville." },
        ages: ["toddler", "kid", "teen"],
        time: { en: "1h", fr: "1h" },
      },
      {
        emoji: "🏰",
        name: { en: "São Jorge castle", fr: "Château São Jorge" },
        detail: { en: "Ramparts, peacocks and cannons. Older kids love it, take the tuk-tuk up to save legs.", fr: "Remparts, paons et canons. Les plus grands adorent, montez en tuk-tuk pour épargner les jambes." },
        ages: ["kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "🍦",
        name: { en: "Gelato crawl", fr: "Tournée de glaces" },
        detail: { en: "The avenue is lined with gelato. A gentle downhill reward after the castle climb.", fr: "L'avenue est bordée de glaciers. Une récompense en pente douce après la montée au château." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "1h", fr: "1h" },
      },
      {
        emoji: "🚋",
        name: { en: "Tram and viewpoints", fr: "Tram et points de vue" },
        detail: { en: "Miradouros with space and a view. Pack snacks, they are photo stops for you and run-arounds for them.", fr: "Des miradouros avec de l'espace et une vue. Prévoyez des snacks, photos pour vous, défoulement pour eux." },
        ages: ["kid", "teen"],
        time: { en: "2h", fr: "2h" },
      },
    ],
    sampleDay: [
      { time: "7:00", title: { en: "Quiet start in the suite", fr: "Réveil calme en suite" }, note: { en: "Milk from the kitchenette while the little one wakes slowly.", fr: "Lait de la kitchenette pendant que le petit se réveille doucement." } },
      { time: "9:30", title: { en: "Park then castle", fr: "Parc puis château" }, note: { en: "Run in Eduardo VII, then tuk-tuk up to São Jorge.", fr: "On court à Eduardo VII, puis tuk-tuk jusqu'à São Jorge." } },
      { time: "13:00", title: { en: "Lunch on the avenue", fr: "Déjeuner sur l'avenue" }, note: { en: "Family spots on the doorstep, no hunting required.", fr: "Des adresses familiales devant la porte, pas besoin de chercher." } },
      { time: "15:00", title: { en: "Nap, then plunge pool", fr: "Sieste, puis bassin" }, note: { en: "Separate bedroom means the adults get an actual break.", fr: "Chambre séparée, donc les adultes ont une vraie pause." } },
      { time: "19:30", title: { en: "Dinner in, kids asleep", fr: "Dîner sur place, enfants couchés" }, note: { en: "Cook simply in the suite while they sleep next door.", fr: "On cuisine simplement dans la suite pendant qu'ils dorment à côté." } },
    ],
    ageNotes: {
      toddler: { en: "Separate bedroom and kitchenette are made for nap and bottle routines.", fr: "Chambre séparée et kitchenette faites pour la sieste et le biberon." },
      kid: { en: "Central base for castle, trams and viewpoints.", fr: "Base centrale pour château, trams et points de vue." },
      teen: { en: "Space and a walkable city they can half-explore with you.", fr: "De l'espace et une ville à pied qu'ils explorent à moitié avec vous." },
    },
    faqs: [
      {
        q: { en: "Is there a proper pool?", fr: "Y a-t-il une vraie piscine ?" },
        a: { en: "No, just a small plunge pool. If a pool is central to your trip, pick a resort instead.", fr: "Non, juste un petit bassin. Si la piscine est essentielle, choisissez plutôt un resort." },
      },
      {
        q: { en: "Can we self-cater?", fr: "Peut-on cuisiner sur place ?" },
        a: { en: "Yes, every suite has a kitchenette. Great for fussy eaters and early breakfasts.", fr: "Oui, chaque suite a une kitchenette. Parfait pour les difficiles et les petits-déjeuners tôt." },
      },
    ],
  },

  "algarve-falesia-family": {
    photos: ["whiteResortPool", "algarveCliffs", "poolPalms"],
    verdict: {
      en: "The complete family resort: a free all-day kids club, a shallow lagoon, and a beach at the bottom of the path.",
      fr: "Le resort familial complet : club enfants gratuit toute la journée, lagon à fond plat, et la plage en bas du chemin.",
    },
    parentTip: {
      en: "Register for the kids club on day one at check-in. Summer sessions fill fast and the good slots go early.",
      fr: "Inscrivez-vous au club enfants dès le check-in du jour 1. Les créneaux d'été partent vite.",
    },
    atAGlance: [
      f("🛏️", "Sleeps", "Dort", "Family rooms and 2-bed suites, 4 to 6", "Chambres familiales et suites 2 chambres, 4 à 6"),
      f("🎨", "Kids club", "Club enfants", "Free, 9am to 6pm, split by age", "Gratuit, 9h à 18h, par tranche d'âge"),
      f("🏊", "Pools", "Piscines", "Three, incl. a shallow lagoon + 2 slides", "Trois, dont un lagon à fond plat + 2 toboggans"),
      f("🏖️", "Beach", "Plage", "Path down to a calm, shallow beach", "Chemin vers une plage calme et peu profonde"),
      f("🍽️", "Dining", "Restauration", "Buffet with kids corner, early sitting", "Buffet avec coin enfants, service tôt" ),
      f("✈️", "Transfer", "Transfert", "About 35 min from Faro airport", "Environ 35 min de l'aéroport de Faro"),
    ],
    activities: [
      {
        emoji: "🏖️",
        name: { en: "Falésia beach day", fr: "Journée plage de Falésia" },
        detail: { en: "Golden sand and shallow, calm water at the bottom of the resort path. The daily default.", fr: "Sable doré et eau calme peu profonde en bas du chemin. Le programme quotidien par défaut." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "🐬",
        name: { en: "Dolphin-watching trip", fr: "Sortie observation des dauphins" },
        detail: { en: "Boat trips leave from nearby Vilamoura. Choose a calm-morning slot with younger kids.", fr: "Les sorties partent de Vilamoura, tout près. Choisissez un créneau matin calme avec de jeunes enfants." },
        ages: ["kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "💦",
        name: { en: "Aquashow water park", fr: "Parc aquatique Aquashow" },
        detail: { en: "A big water park a short drive away, with slides and a wave pool for a full day out.", fr: "Un grand parc aquatique à courte route, avec toboggans et piscine à vagues pour une journée entière." },
        ages: ["kid", "teen"],
        time: { en: "Full day", fr: "Journée" },
      },
      {
        emoji: "⛳",
        name: { en: "Mini golf and evening shows", fr: "Mini-golf et spectacles du soir" },
        detail: { en: "On-site mini golf plus the evening kids entertainment that buys the adults dinner.", fr: "Mini-golf sur place plus l'animation enfants du soir qui offre le dîner aux adultes." },
        ages: ["toddler", "kid"],
        time: { en: "1h", fr: "1h" },
      },
    ],
    sampleDay: [
      { time: "8:00", title: { en: "Breakfast, kids corner", fr: "Petit-déj, coin enfants" }, note: { en: "Buffet with an early sitting and food they will actually eat.", fr: "Buffet avec service tôt et de quoi les faire manger." } },
      { time: "9:30", title: { en: "Drop at the kids club", fr: "Dépôt au club enfants" }, note: { en: "Free, split by age, until 6pm if you want it.", fr: "Gratuit, réparti par âge, jusqu'à 18h si vous voulez." } },
      { time: "10:00", title: { en: "Grown-up pool time", fr: "Piscine côté adultes" }, note: { en: "Actually read a book by the quiet pool for once.", fr: "Lire un livre au bord de la piscine calme, pour une fois." } },
      { time: "13:00", title: { en: "Family lunch and lagoon", fr: "Déjeuner et lagon" }, note: { en: "Regroup for the shallow lagoon and the slides.", fr: "On se retrouve pour le lagon à fond plat et les toboggans." } },
      { time: "16:00", title: { en: "Beach at the bottom of the path", fr: "Plage en bas du chemin" }, note: { en: "Calm, shallow water for a late-afternoon splash.", fr: "Eau calme et peu profonde pour barboter en fin d'après-midi." } },
      { time: "20:00", title: { en: "Mini-disco, then dinner", fr: "Mini-disco, puis dîner" }, note: { en: "They dance, you eat while it is still light.", fr: "Ils dansent, vous dînez tant qu'il fait jour." } },
    ],
    ageNotes: {
      baby: { en: "Cots and bed rails free, but the beach walk back up is steep with a pram.", fr: "Lits et barrières gratuits, mais la remontée de plage est raide en poussette." },
      toddler: { en: "Shallow lagoon and a toddler club session make it ideal.", fr: "Lagon à fond plat et séance club tout-petits, idéal." },
      kid: { en: "Slides, club and the water park nearby. Prime age.", fr: "Toboggans, club et parc aquatique à côté. L'âge parfait." },
      teen: { en: "Older kids may want the dolphin trip and the bigger water park.", fr: "Les plus grands voudront la sortie dauphins et le grand parc aquatique." },
    },
    faqs: [
      {
        q: { en: "Is the kids club really free?", fr: "Le club enfants est-il vraiment gratuit ?" },
        a: { en: "Yes, included and running a full day, split by age group. Register at check-in for summer.", fr: "Oui, inclus et ouvert toute la journée, par tranche d'âge. Inscrivez-vous au check-in l'été." },
      },
      {
        q: { en: "How is the beach access?", fr: "Comment est l'accès à la plage ?" },
        a: { en: "A path leads down to a calm, shallow beach. Lovely, but the climb back up is steep with a buggy.", fr: "Un chemin descend vers une plage calme et peu profonde. Superbe, mais la remontée est raide en poussette." },
      },
      {
        q: { en: "Do we need a car?", fr: "Faut-il une voiture ?" },
        a: { en: "Not for the resort itself. A car helps for the water park and dolphin trips.", fr: "Pas pour le resort lui-même. Une voiture aide pour le parc aquatique et les sorties dauphins." },
      },
    ],
  },

  "algarve-marina-club": {
    photos: ["resortCanal", "livingRoom", "deckLoungersSea"],
    verdict: {
      en: "Apartment living on a flat, calm marina: space, a kitchen and a big pool without full-resort prices.",
      fr: "Vie en appartement sur une marina plate et calme : espace, cuisine et grande piscine sans le prix d'un resort.",
    },
    parentTip: {
      en: "A two-bed apartment plus the kitchen usually beats two hotel rooms on price for a week with school-age kids.",
      fr: "Un deux-pièces avec cuisine revient souvent moins cher que deux chambres d'hôtel sur une semaine avec des enfants scolarisés.",
    },
    atAGlance: [
      f("🛏️", "Sleeps", "Dort", "1 and 2-bed apartments, 4 to 6", "Appartements 1 et 2 chambres, 4 à 6"),
      f("🍳", "Kitchen", "Cuisine", "Full kitchen in every apartment", "Cuisine complète dans chaque appartement"),
      f("🏊", "Pool", "Piscine", "Large pool + separate kids pool", "Grande piscine + bassin enfants séparé"),
      f("🛥️", "Setting", "Cadre", "Flat marina, boat trips at the door", "Marina plate, sorties bateau devant"),
      f("🏖️", "Beach", "Plage", "Short drive or shuttle", "Courte route ou navette"),
      f("🎨", "Kids club", "Club enfants", "None, activities are DIY", "Aucun, activités en autonomie"),
    ],
    activities: [
      {
        emoji: "🛥️",
        name: { en: "Marina boat trips", fr: "Sorties bateau de la marina" },
        detail: { en: "Dolphin and cave trips leave right from the marina. Book a calm morning with younger kids.", fr: "Sorties dauphins et grottes partent de la marina. Réservez un matin calme avec de jeunes enfants." },
        ages: ["kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "⛳",
        name: { en: "Mini golf on the marina", fr: "Mini-golf sur la marina" },
        detail: { en: "Flat, walkable evening activity right by the apartments.", fr: "Activité du soir à plat et à pied, juste à côté des appartements." },
        ages: ["toddler", "kid", "teen"],
        time: { en: "1h", fr: "1h" },
      },
      {
        emoji: "🏖️",
        name: { en: "Vilamoura beach", fr: "Plage de Vilamoura" },
        detail: { en: "A wide, gentle beach a short shuttle away, with loungers and calm water.", fr: "Une plage large et douce à courte navette, avec transats et eau calme." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "🍨",
        name: { en: "Marina evening stroll", fr: "Balade du soir sur la marina" },
        detail: { en: "Flat and buggy-friendly, lined with gelato and gentle people-watching.", fr: "Plate et adaptée à la poussette, bordée de glaciers et de douce observation." },
        ages: ["baby", "toddler", "kid"],
        time: { en: "1h", fr: "1h" },
      },
    ],
    sampleDay: [
      { time: "8:00", title: { en: "Breakfast in the apartment", fr: "Petit-déj dans l'appart" }, note: { en: "Your own kitchen, your own pace, no dining-room queue.", fr: "Votre cuisine, votre rythme, sans file au restaurant." } },
      { time: "10:00", title: { en: "Boat trip from the marina", fr: "Sortie bateau de la marina" }, note: { en: "Caves and maybe dolphins, straight from the door.", fr: "Grottes et peut-être dauphins, direct depuis la porte." } },
      { time: "13:30", title: { en: "Lunch in, then pool", fr: "Déjeuner puis piscine" }, note: { en: "Fussy-eater friendly, then the kids pool all afternoon.", fr: "Pratique pour les difficiles, puis le bassin enfants tout l'après-midi." } },
      { time: "18:00", title: { en: "Mini golf on the marina", fr: "Mini-golf sur la marina" }, note: { en: "Flat evening walk to burn the last of the energy.", fr: "Balade du soir à plat pour brûler l'énergie qui reste." } },
    ],
    ageNotes: {
      toddler: { en: "Flat and calm, but no club to give you a break.", fr: "Plat et calme, mais pas de club pour souffler." },
      kid: { en: "Space, a kitchen and boat trips make it a great-value base.", fr: "Espace, cuisine et sorties bateau, une base au super rapport qualité-prix." },
      teen: { en: "Independence and the marina to roam suit older kids.", fr: "L'indépendance et la marina à arpenter plaisent aux plus grands." },
    },
    faqs: [
      {
        q: { en: "Is there a kids club?", fr: "Y a-t-il un club enfants ?" },
        a: { en: "No. This is a self-catered apartment stay. If you want a club, pick Falésia Family Resort.", fr: "Non. C'est un séjour en appartement autonome. Pour un club, choisissez le Falésia Family Resort." },
      },
      {
        q: { en: "How do we reach the beach?", fr: "Comment rejoindre la plage ?" },
        a: { en: "A short drive or a seasonal shuttle. The marina itself is flat and walkable.", fr: "Courte route ou navette saisonnière. La marina elle-même est plate et à pied." },
      },
    ],
  },

  "costa-aqua-resort": {
    photos: ["poolOrange", "swimmer", "poolCabanas"],
    verdict: {
      en: "The water-slide-age dream: an on-site aqua park, a toddler splash zone, and a free kids club with a mini-disco.",
      fr: "Le rêve de l'âge des toboggans : parc aquatique sur place, zone à jets pour tout-petits et club enfants gratuit avec mini-disco.",
    },
    parentTip: {
      en: "Ask for a room away from the slide tower. Same pools, half the noise at nap time.",
      fr: "Demandez une chambre loin de la tour des toboggans. Mêmes piscines, moitié moins de bruit à la sieste.",
    },
    atAGlance: [
      f("🛏️", "Sleeps", "Dort", "Family rooms for 4, suites 5 to 6", "Chambres familiales pour 4, suites 5 à 6"),
      f("🎢", "Water park", "Parc aquatique", "On-site slides, lazy river, splash zone", "Toboggans, rivière lente, zone à jets sur place"),
      f("🎨", "Kids club", "Club enfants", "Free, with an evening mini-disco", "Gratuit, avec mini-disco le soir"),
      f("🍽️", "Dining", "Restauration", "Family buffet, early sitting, kids counter", "Buffet familial, service tôt, comptoir enfants"),
      f("🛏️", "Rooms", "Chambres", "Interconnecting rooms available", "Chambres communicantes possibles"),
      f("✈️", "Transfer", "Transfert", "About 20 min from Málaga airport", "Environ 20 min de l'aéroport de Málaga"),
    ],
    activities: [
      {
        emoji: "🎢",
        name: { en: "On-site aqua park", fr: "Parc aquatique sur place" },
        detail: { en: "Slides for every height, a lazy river and a toddler splash zone. The whole holiday for some kids.", fr: "Toboggans pour toutes les tailles, rivière lente et zone à jets. Les vacances entières pour certains enfants." },
        ages: ["toddler", "kid", "teen"],
        time: { en: "Full day", fr: "Journée" },
      },
      {
        emoji: "🚠",
        name: { en: "Benalmádena cable car", fr: "Téléphérique de Benalmádena" },
        detail: { en: "Up the mountain for the view and birds of prey shows. A change of pace from the pool.", fr: "En haut de la montagne pour la vue et les spectacles de rapaces. Un changement de rythme." },
        ages: ["kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "🐧",
        name: { en: "Sea Life centre", fr: "Centre Sea Life" },
        detail: { en: "A rainy-day or too-hot-day standby, close by and toddler-friendly.", fr: "Un plan B jour de pluie ou trop chaud, tout près et adapté aux tout-petits." },
        ages: ["baby", "toddler", "kid"],
        time: { en: "2h", fr: "2h" },
      },
      {
        emoji: "🏖️",
        name: { en: "Torremolinos beach", fr: "Plage de Torremolinos" },
        detail: { en: "A long, gentle town beach a short walk or drive away, with plenty of space.", fr: "Une longue plage de ville douce à courte marche ou route, avec beaucoup d'espace." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
    ],
    sampleDay: [
      { time: "8:30", title: { en: "Big buffet breakfast", fr: "Grand buffet du matin" }, note: { en: "Fuel up, kids counter at their height.", fr: "On fait le plein, comptoir enfants à leur hauteur." } },
      { time: "10:00", title: { en: "Aqua park opens", fr: "Ouverture du parc aquatique" }, note: { en: "First in, before the queues build on the big slides.", fr: "Premiers arrivés, avant la file sur les grands toboggans." } },
      { time: "13:00", title: { en: "Lunch and shade", fr: "Déjeuner et ombre" }, note: { en: "Out of the midday sun, cool down and refuel.", fr: "À l'abri du soleil de midi, on se rafraîchit et on recharge." } },
      { time: "15:00", title: { en: "Kids club or lazy river", fr: "Club enfants ou rivière lente" }, note: { en: "Drop them at the club, or float the lazy river together.", fr: "On les dépose au club, ou on flotte ensemble sur la rivière lente." } },
      { time: "20:30", title: { en: "Mini-disco, then dinner", fr: "Mini-disco, puis dîner" }, note: { en: "The evening club means the adults get a real dinner.", fr: "Le club du soir offre un vrai dîner aux adultes." } },
    ],
    ageNotes: {
      toddler: { en: "The splash zone is perfect, the big slides are not yet.", fr: "La zone à jets est parfaite, les grands toboggans pas encore." },
      kid: { en: "The exact age this resort is built for.", fr: "Exactement l'âge pour lequel ce resort est fait." },
      teen: { en: "The big flumes keep them busy and the town is walkable.", fr: "Les grands toboggans les occupent et la ville est à pied." },
    },
    faqs: [
      {
        q: { en: "Is it too busy for a baby?", fr: "Est-ce trop animé pour un bébé ?" },
        a: { en: "It is big and lively. Fine with a baby if you book a quiet-side room, but it is not a calm retreat.", fr: "C'est grand et animé. Ça va avec un bébé en chambre côté calme, mais ce n'est pas une retraite tranquille." },
      },
      {
        q: { en: "Is the water park included?", fr: "Le parc aquatique est-il inclus ?" },
        a: { en: "Yes, the on-site pools and slides are included for guests. Off-site parks are extra.", fr: "Oui, les piscines et toboggans sur place sont inclus pour les clients. Les parcs externes sont en supplément." },
      },
    ],
  },

  "costa-marbella-garden": {
    photos: ["villaPink", "villaPoolGreen", "villaModern"],
    verdict: {
      en: "The premium pick: a private garden villa with a separate kids' room, a bedtime service and thoughtful touches that earn the price.",
      fr: "Le choix premium : une villa privée avec jardin et chambre enfants séparée, un service du coucher et des attentions qui justifient le prix.",
    },
    parentTip: {
      en: "The bedtime service is the secret weapon. Kids settled, monitor on, and you get a grown-up evening on the terrace.",
      fr: "Le service du coucher est l'arme secrète. Enfants couchés, baby-phone allumé, et une soirée d'adulte sur la terrasse.",
    },
    atAGlance: [
      f("🏡", "Sleeps", "Dort", "2 to 3-bed villas, up to 6", "Villas 2 à 3 chambres, jusqu'à 6"),
      f("🛏️", "Rooms", "Chambres", "Separate children's room in every villa", "Chambre enfants séparée dans chaque villa"),
      f("🎁", "Extras", "Attentions", "Welcome gift and a bedtime service", "Cadeau d'accueil et service du coucher"),
      f("🏊", "Pool", "Piscine", "Shallow, gated pool + kids club", "Piscine à fond plat clôturée + club enfants"),
      f("🌿", "Grounds", "Domaine", "Calm, secure, beautifully kept", "Calme, sécurisé, superbement entretenu"),
      f("🚗", "Beach", "Plage", "Car recommended to reach the sea", "Voiture conseillée pour la mer"),
    ],
    activities: [
      {
        emoji: "🏰",
        name: { en: "Marbella old town", fr: "Vieille ville de Marbella" },
        detail: { en: "Orange-tree squares and gelato, pretty and pushchair-friendly for a gentle morning.", fr: "Places aux orangers et glaces, joli et adapté à la poussette pour une matinée douce." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "🐒",
        name: { en: "Selwo adventure park", fr: "Parc Selwo Aventura" },
        detail: { en: "A safari-style wildlife park a short drive west. A big day out for animal-loving kids.", fr: "Un parc animalier façon safari à courte route à l'ouest. Une belle journée pour les enfants qui aiment les animaux." },
        ages: ["kid", "teen"],
        time: { en: "Full day", fr: "Journée" },
      },
      {
        emoji: "🏖️",
        name: { en: "Marbella beach clubs", fr: "Clubs de plage de Marbella" },
        detail: { en: "Calm, serviced beaches with loungers and shade, a short drive from the villa.", fr: "Plages calmes et aménagées avec transats et ombre, à courte route de la villa." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée" },
      },
      {
        emoji: "⛳",
        name: { en: "Family golf and tennis", fr: "Golf et tennis en famille" },
        detail: { en: "Coaching and short courses nearby for older kids who want more than the pool.", fr: "Cours et parcours courts à proximité pour les plus grands qui veulent plus que la piscine." },
        ages: ["kid", "teen"],
        time: { en: "2h", fr: "2h" },
      },
    ],
    sampleDay: [
      { time: "8:30", title: { en: "Breakfast on the terrace", fr: "Petit-déj sur la terrasse" }, note: { en: "Your own villa, your own garden, no rush.", fr: "Votre villa, votre jardin, sans se presser." } },
      { time: "10:00", title: { en: "Gated pool and kids club", fr: "Piscine clôturée et club enfants" }, note: { en: "Shallow and secure, with the club for a morning session.", fr: "À fond plat et sécurisée, avec le club pour une séance du matin." } },
      { time: "13:00", title: { en: "Lunch, then old town", fr: "Déjeuner, puis vieille ville" }, note: { en: "Gentle stroll through the orange-tree squares.", fr: "Balade douce dans les places aux orangers." } },
      { time: "16:00", title: { en: "Garden downtime", fr: "Temps calme au jardin" }, note: { en: "Private space to nap, play and reset before dinner.", fr: "Espace privé pour la sieste, jouer et souffler avant le dîner." } },
      { time: "19:30", title: { en: "Bedtime service, adult evening", fr: "Service du coucher, soirée adulte" }, note: { en: "Kids settled, you get the terrace and the quiet.", fr: "Enfants couchés, vous avez la terrasse et le calme." } },
    ],
    ageNotes: {
      baby: { en: "The calm, secure grounds and separate room are a dream with a baby.", fr: "Le domaine calme et sécurisé et la chambre séparée, un rêve avec un bébé." },
      toddler: { en: "Gated shallow pool and space to roam safely.", fr: "Piscine clôturée à fond plat et de l'espace pour explorer sans danger." },
      kid: { en: "Kids club, wildlife park and a private garden.", fr: "Club enfants, parc animalier et un jardin privé." },
      teen: { en: "Space, golf and beach clubs suit older kids well.", fr: "Espace, golf et clubs de plage conviennent bien aux plus grands." },
    },
    faqs: [
      {
        q: { en: "Is it worth the higher price?", fr: "Le prix plus élevé en vaut-il la peine ?" },
        a: { en: "If space, privacy and a separate kids' room matter to you, yes. It has the best room setup on this coast.", fr: "Si l'espace, l'intimité et une chambre enfants séparée comptent, oui. C'est la meilleure config de ce littoral." },
      },
      {
        q: { en: "Do we need a car?", fr: "Faut-il une voiture ?" },
        a: { en: "Yes, to reach the beach and the parks comfortably. The estate itself is self-contained.", fr: "Oui, pour rejoindre la plage et les parcs confortablement. Le domaine lui-même est autonome." },
      },
    ],
  },
};
