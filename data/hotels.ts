import type { Hotel } from "@/lib/types";
import { HOTEL_CONTENT } from "@/data/hotel-content";
import { HOTEL_AMENITIES, type AmenityId } from "@/data/amenities";

// SEED hotels for the MVP. Names and details are illustrative placeholders so we
// can build and test the template. Replace with verified properties (and real
// photos, per the no-Google-Places rule) before launch.
export const HOTELS: Hotel[] = [
  {
    key: "lisbon-tejo-family",
    name: "Tejo Family Hotel & Pool",
    destinationKey: "lisbon",
    slug: {
      en: "tejo-family-hotel-lisbon",
      fr: "tejo-family-hotel-lisbonne",
    },
    geo: { lat: 38.7681, lng: -9.0946, zoom: 14 },
    address: "Parque das Nações, Lisbon, Portugal",
    priceTier: 2,
    priceFrom: 140,
    image: "",
    ages: ["baby", "toddler", "kid"],
    scores: {
      rooms: 92,
      baby: 88,
      pool: 80,
      dining: 84,
      safety: 86,
      convenience: 90,
      location: 88,
      extras: 78,
    },
    roomsSummary: {
      en: "Family rooms sleep 4 comfortably, with connecting doubles available and a genuine sofa bed rather than a fold-out. Cots are free and set up before you arrive.",
      fr: "Les chambres familiales dorment 4 confortablement, avec des doubles communicantes possibles et un vrai canapé-lit plutôt qu'un lit d'appoint. Les lits bébé sont gratuits et installés avant votre arrivée.",
    },
    intro: {
      en: "A modern hotel in the flat, buggy-friendly Parque das Nações, a two minute walk from the aquarium. It is the practical choice for Lisbon with little ones: lifts everywhere, a small rooftop pool and a breakfast that does not make you queue with a toddler.",
      fr: "Un hôtel moderne dans le Parque das Nações, plat et adapté à la poussette, à deux minutes à pied de l'aquarium. C'est le choix pratique pour Lisbonne avec des petits : des ascenseurs partout, une petite piscine sur le toit et un petit-déjeuner sans file d'attente avec un tout-petit.",
    },
    highlights: {
      en: [
        "Two minute flat walk to the Oceanário and the cable car.",
        "Free cots, high chairs and a bottle warmer on request.",
        "Rooftop pool with a shallow shelf for toddlers.",
        "Grab-and-go breakfast counter for early risers.",
      ],
      fr: [
        "Deux minutes de marche à plat jusqu'à l'Oceanário et le téléphérique.",
        "Lits bébé, chaises hautes et chauffe-biberon gratuits sur demande.",
        "Piscine sur le toit avec un rebord à fond plat pour les tout-petits.",
        "Comptoir petit-déjeuner à emporter pour les lève-tôt.",
      ],
    },
    pros: {
      en: [
        "Genuinely flat and buggy-friendly, rare in Lisbon.",
        "Connecting rooms bookable in advance.",
      ],
      fr: [
        "Vraiment plat et adapté à la poussette, rare à Lisbonne.",
        "Chambres communicantes réservables à l'avance.",
      ],
    },
    cons: {
      en: [
        "The rooftop pool is small and busy at peak times.",
        "A 15 minute metro ride from the historic centre.",
      ],
      fr: [
        "La piscine sur le toit est petite et fréquentée aux heures de pointe.",
        "À 15 minutes de métro du centre historique.",
      ],
    },
    clubFree: true,
    related: ["lisbon-parque-suites", "algarve-falesia-family"],
  },
  {
    key: "lisbon-parque-suites",
    name: "Parque Suites Lisbon",
    destinationKey: "lisbon",
    slug: {
      en: "parque-suites-lisbon",
      fr: "parque-suites-lisbonne",
    },
    geo: { lat: 38.7436, lng: -9.1497, zoom: 14 },
    address: "Avenida da Liberdade, Lisbon, Portugal",
    priceTier: 3,
    priceFrom: 190,
    image: "",
    ages: ["toddler", "kid", "teen"],
    scores: {
      rooms: 90,
      baby: 74,
      pool: 62,
      dining: 88,
      safety: 82,
      convenience: 84,
      location: 94,
      extras: 82,
    },
    roomsSummary: {
      en: "Apartment-style suites with a separate bedroom and a sofa bed in the living area, plus a kitchenette. Sleeps 4 to 5, which is hard to find this central.",
      fr: "Des suites façon appartement avec une chambre séparée et un canapé-lit dans le salon, plus une kitchenette. Dort 4 à 5, difficile à trouver aussi central.",
    },
    intro: {
      en: "A suite hotel on the leafy Avenida da Liberdade, walkable to almost everything and gentler underfoot than the old hills. The separate bedroom and kitchenette make it a strong pick for families who want the little ones asleep while the adults stay up.",
      fr: "Un hôtel de suites sur l'arborée Avenida da Liberdade, à pied de presque tout et plus doux sous les pieds que les vieilles collines. La chambre séparée et la kitchenette en font un choix solide pour les familles qui veulent coucher les petits pendant que les adultes veillent.",
    },
    highlights: {
      en: [
        "Separate bedroom so bedtime does not mean lights out for everyone.",
        "Kitchenette for warming milk and simple meals.",
        "Walk to the centre without a single steep hill.",
        "Family-friendly restaurants on the doorstep.",
      ],
      fr: [
        "Chambre séparée, donc l'heure du coucher n'éteint pas tout le monde.",
        "Kitchenette pour réchauffer le lait et préparer des repas simples.",
        "À pied du centre sans une seule côte raide.",
        "Des restaurants adaptés aux familles juste devant.",
      ],
    },
    pros: {
      en: [
        "Excellent, walkable location.",
        "Space and a kitchenette, unusual downtown.",
      ],
      fr: [
        "Emplacement excellent, tout à pied.",
        "De l'espace et une kitchenette, rare en centre-ville.",
      ],
    },
    cons: {
      en: [
        "No real pool, just a small plunge pool.",
        "Less baby kit than a dedicated resort.",
      ],
      fr: [
        "Pas de vraie piscine, juste un petit bassin.",
        "Moins de matériel bébé qu'un resort dédié.",
      ],
    },
    clubFree: false,
    related: ["lisbon-tejo-family", "costa-marbella-garden"],
  },
  {
    key: "algarve-falesia-family",
    name: "Falésia Family Resort",
    destinationKey: "algarve",
    slug: {
      en: "falesia-family-resort-algarve",
      fr: "falesia-family-resort-algarve",
    },
    geo: { lat: 37.0885, lng: -8.15, zoom: 14 },
    address: "Praia da Falésia, Albufeira, Algarve, Portugal",
    priceTier: 3,
    priceFrom: 210,
    image: "",
    ages: ["baby", "toddler", "kid", "teen"],
    scores: {
      rooms: 88,
      baby: 90,
      pool: 96,
      dining: 90,
      safety: 92,
      convenience: 86,
      location: 84,
      extras: 90,
    },
    roomsSummary: {
      en: "Family rooms and two-bedroom suites, all sleeping 4 to 6, with connecting options and a proper twin room for the kids. Cots and bed rails are free.",
      fr: "Chambres familiales et suites deux chambres, toutes pour 4 à 6 personnes, avec options communicantes et une vraie chambre twin pour les enfants. Lits bébé et barrières gratuits.",
    },
    intro: {
      en: "The complete family resort above the golden Falésia beach: three pools including a shallow lagoon, a free kids club that actually runs a full day, and evening entertainment so the adults get a moment. This is the one to book if you want everything on site.",
      fr: "Le resort familial complet au-dessus de la plage dorée de Falésia : trois piscines dont un lagon à fond plat, un club enfants gratuit qui tourne vraiment toute la journée, et de l'animation le soir pour laisser un moment aux adultes. C'est celui à réserver si vous voulez tout sur place.",
    },
    highlights: {
      en: [
        "Free kids club, 9am to 6pm, split by age group.",
        "Shallow lagoon pool plus two water slides.",
        "Buffet with a kids corner and early dinner sitting.",
        "Direct path down to a calm, shallow beach.",
      ],
      fr: [
        "Club enfants gratuit, 9h à 18h, réparti par tranche d'âge.",
        "Piscine lagon à fond plat plus deux toboggans.",
        "Buffet avec coin enfants et service de dîner tôt.",
        "Chemin direct vers une plage calme et peu profonde.",
      ],
    },
    pros: {
      en: [
        "Free, genuinely all-day kids club.",
        "Everything on site, no car needed.",
      ],
      fr: [
        "Club enfants gratuit, vraiment toute la journée.",
        "Tout sur place, pas besoin de voiture.",
      ],
    },
    cons: {
      en: [
        "The walk back up from the beach is steep.",
        "Books up months ahead for summer.",
      ],
      fr: [
        "La remontée depuis la plage est raide.",
        "Complet des mois à l'avance pour l'été.",
      ],
    },
    clubFree: true,
    related: ["algarve-marina-club", "costa-aqua-resort"],
  },
  {
    key: "algarve-marina-club",
    name: "Marina Club Algarve",
    destinationKey: "algarve",
    slug: {
      en: "marina-club-algarve",
      fr: "marina-club-algarve",
    },
    geo: { lat: 37.0765, lng: -8.1259, zoom: 14 },
    address: "Marina de Vilamoura, Algarve, Portugal",
    priceTier: 2,
    priceFrom: 160,
    image: "",
    ages: ["toddler", "kid", "teen"],
    scores: {
      rooms: 84,
      baby: 72,
      pool: 88,
      dining: 78,
      safety: 84,
      convenience: 88,
      location: 90,
      extras: 74,
    },
    roomsSummary: {
      en: "One and two-bedroom apartments with a kitchen and sofa bed, sleeping 4 to 6. Great for longer, self-catered stays with older kids.",
      fr: "Appartements une et deux chambres avec cuisine et canapé-lit, pour 4 à 6 personnes. Parfait pour des séjours plus longs en autonomie avec des enfants plus grands.",
    },
    intro: {
      en: "Apartment-style living right on the calm Vilamoura marina, flat and easy with a buggy, with the restaurants and boat trips on your doorstep. Best for families with school-age kids who want space, a kitchen and a big pool without full resort prices.",
      fr: "Des appartements en bord de marina calme à Vilamoura, plat et facile en poussette, avec restaurants et sorties en bateau juste devant. Idéal pour les familles avec enfants d'âge scolaire qui veulent de l'espace, une cuisine et une grande piscine sans le prix d'un resort complet.",
    },
    highlights: {
      en: [
        "Flat, buggy-friendly marina setting.",
        "Large outdoor pool with a separate children's pool.",
        "Kitchen for fussy eaters and early breakfasts.",
        "Boat trips and mini golf a short walk away.",
      ],
      fr: [
        "Cadre de marina plat et adapté à la poussette.",
        "Grande piscine extérieure avec bassin enfants séparé.",
        "Cuisine pour les difficiles et les petits-déjeuners tôt.",
        "Sorties en bateau et mini-golf à deux pas.",
      ],
    },
    pros: {
      en: [
        "Great value for the space you get.",
        "Flat, walkable and central to the marina.",
      ],
      fr: [
        "Très bon rapport espace-prix.",
        "Plat, tout à pied et au coeur de la marina.",
      ],
    },
    cons: {
      en: [
        "No kids club or organised activities.",
        "The nearest beach is a short drive or shuttle.",
      ],
      fr: [
        "Pas de club enfants ni d'activités organisées.",
        "La plage la plus proche est à courte route ou navette.",
      ],
    },
    clubFree: false,
    related: ["algarve-falesia-family", "lisbon-parque-suites"],
  },
  {
    key: "costa-aqua-resort",
    name: "Aqua Resort Costa",
    destinationKey: "costa-del-sol",
    slug: {
      en: "aqua-resort-costa-del-sol",
      fr: "aqua-resort-costa-del-sol",
    },
    geo: { lat: 36.6203, lng: -4.4998, zoom: 14 },
    address: "Torremolinos, Costa del Sol, Spain",
    priceTier: 3,
    priceFrom: 230,
    image: "",
    ages: ["toddler", "kid", "teen"],
    scores: {
      rooms: 86,
      baby: 78,
      pool: 98,
      dining: 86,
      safety: 88,
      convenience: 84,
      location: 82,
      extras: 88,
    },
    roomsSummary: {
      en: "Family rooms sleep 4, with interconnecting rooms and family suites for 5 to 6. Ask for a pool-view room away from the slides if you want quiet at nap time.",
      fr: "Les chambres familiales dorment 4, avec chambres communicantes et suites familiales pour 5 à 6. Demandez une chambre côté piscine loin des toboggans si vous voulez le calme à la sieste.",
    },
    intro: {
      en: "If your kids are at the water-slide age, this is the one. An on-site aqua park with slides for all heights, a lazy river and a splash zone for toddlers, plus a free kids club. It is big and busy, and gloriously so for a family that just wants to swim all day.",
      fr: "Si vos enfants sont à l'âge des toboggans, c'est celui-là. Un parc aquatique sur place avec des toboggans pour toutes les tailles, une rivière lente et une zone à jets pour les tout-petits, plus un club enfants gratuit. C'est grand et animé, et c'est parfait pour une famille qui veut juste nager toute la journée.",
    },
    highlights: {
      en: [
        "On-site aqua park with slides, lazy river and toddler splash zone.",
        "Free kids club with an evening mini-disco.",
        "Family buffet with an early sitting and a kids counter.",
        "Interconnecting rooms for bigger families.",
      ],
      fr: [
        "Parc aquatique sur place avec toboggans, rivière lente et zone à jets pour tout-petits.",
        "Club enfants gratuit avec mini-disco le soir.",
        "Buffet familial avec service tôt et comptoir enfants.",
        "Chambres communicantes pour les familles nombreuses.",
      ],
    },
    pros: {
      en: [
        "Outstanding pools and slides on site.",
        "Free kids club and evening entertainment.",
      ],
      fr: [
        "Piscines et toboggans exceptionnels sur place.",
        "Club enfants gratuit et animation le soir.",
      ],
    },
    cons: {
      en: [
        "Big and busy, not a quiet retreat.",
        "Pool-side rooms can be noisy until late.",
      ],
      fr: [
        "Grand et animé, pas une retraite au calme.",
        "Les chambres côté piscine peuvent être bruyantes tard.",
      ],
    },
    clubFree: true,
    related: ["costa-marbella-garden", "algarve-falesia-family"],
  },
  {
    key: "costa-marbella-garden",
    name: "Marbella Garden Villas",
    destinationKey: "costa-del-sol",
    slug: {
      en: "marbella-garden-villas",
      fr: "marbella-garden-villas",
    },
    geo: { lat: 36.5089, lng: -4.9, zoom: 14 },
    address: "Marbella, Costa del Sol, Spain",
    priceTier: 4,
    priceFrom: 340,
    image: "",
    ages: ["baby", "toddler", "kid", "teen"],
    scores: {
      rooms: 94,
      baby: 86,
      pool: 90,
      dining: 92,
      safety: 90,
      convenience: 88,
      location: 86,
      extras: 94,
    },
    roomsSummary: {
      en: "Garden villas with two or three bedrooms, a private terrace and space for a family of 6. The room setup is the best on this coast, with a real separate kids' room in every villa.",
      fr: "Des villas avec jardin, deux ou trois chambres, une terrasse privée et de la place pour une famille de 6. La configuration est la meilleure de ce littoral, avec une vraie chambre enfants séparée dans chaque villa.",
    },
    intro: {
      en: "The premium pick: private garden villas with a separate children's room, set in a calm, well-kept estate with an excellent kids club and a shallow pool. It costs more, but the space and the little touches, from a welcome gift to a bedtime service, earn it.",
      fr: "Le choix premium : des villas privées avec jardin et chambre enfants séparée, dans un domaine calme et bien entretenu, avec un excellent club enfants et une piscine à fond plat. Ça coûte plus cher, mais l'espace et les petites attentions, du cadeau d'accueil au service du coucher, le justifient.",
    },
    highlights: {
      en: [
        "Private villa with a separate children's bedroom.",
        "Welcome gift for the child and a bedtime service.",
        "Shallow, gated pool and an excellent kids club.",
        "Calm, secure and beautifully kept grounds.",
      ],
      fr: [
        "Villa privée avec chambre enfants séparée.",
        "Cadeau d'accueil pour l'enfant et service du coucher.",
        "Piscine à fond plat clôturée et excellent club enfants.",
        "Domaine calme, sécurisé et magnifiquement entretenu.",
      ],
    },
    pros: {
      en: [
        "The best room setup and privacy on the coast.",
        "Thoughtful touches that earn the price.",
      ],
      fr: [
        "La meilleure config de chambres et l'intimité du littoral.",
        "Des attentions qui justifient le prix.",
      ],
    },
    cons: {
      en: [
        "Premium pricing, especially in high season.",
        "You will want a car to get to the beach.",
      ],
      fr: [
        "Tarifs premium, surtout en haute saison.",
        "Une voiture est conseillée pour aller à la plage.",
      ],
    },
    clubFree: true,
    related: ["costa-aqua-resort", "lisbon-parque-suites"],
  },
];

// Merge the rich editorial content (photos, at-a-glance, activities, sample day,
// age notes, FAQs, verdict, tip) onto each hotel record.
for (const h of HOTELS) {
  const extra = HOTEL_CONTENT[h.key];
  if (extra) Object.assign(h, extra);
  h.amenities = HOTEL_AMENITIES[h.key] ?? [];
}

export const HOTEL_BY_KEY = new Map(HOTELS.map((h) => [h.key, h]));

export function hotelsInDestination(destinationKey: string): Hotel[] {
  return HOTELS.filter((h) => h.destinationKey === destinationKey);
}

/** All hotels offering a given amenity, best KidProof Score first. */
export function hotelsWithAmenity(id: AmenityId): Hotel[] {
  return HOTELS.filter((h) => h.amenities?.includes(id));
}

/** How many hotels offer each amenity (for browse-card counts). */
export function amenityCount(id: AmenityId): number {
  return HOTELS.reduce((n, h) => n + (h.amenities?.includes(id) ? 1 : 0), 0);
}
