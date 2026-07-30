import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

// Editorial cross-links from KidProof city destinations to the matching city on
// our sister site Perfect City Break (city-break / sightseeing content). Followed,
// contextual, city-to-city links: relevant and non-spammy. Only the city
// destinations that exist on both sites are mapped.
//
// Perfect City Break URL pattern: perfectcitybreak.com/{city} (English, no prefix)
// and perfectcitybreak.com/{locale}/{city} for the other locales (verified live).
const CITY_SLUG: Record<string, string> = {
  lisbon: "lisbon",
  barcelona: "barcelona",
  valencia: "valencia",
  seville: "seville",
};

const BASE = "https://perfectcitybreak.com";

/** Absolute URL of the matching Perfect City Break city guide, or null. */
export function cityBreakHref(destKey: string, locale: Locale): string | null {
  const slug = CITY_SLUG[destKey];
  if (!slug) return null;
  return locale === DEFAULT_LOCALE ? `${BASE}/${slug}` : `${BASE}/${locale}/${slug}`;
}

// Localized copy for the cross-link block. {name} = localized city name.
type L6 = Record<Locale, string>;
export const CITY_BREAK_COPY: { title: L6; body: L6; cta: L6 } = {
  title: {
    en: "Beyond the hotel: {name} with kids",
    fr: "Au-delà de l'hôtel : {name} en famille",
    it: "Oltre l'hotel: {name} con i bambini",
    de: "Mehr als das Hotel: {name} mit Kindern",
    es: "Más allá del hotel: {name} con niños",
    pt: "Para além do hotel: {name} com crianças",
  },
  body: {
    en: "Hotel sorted? For what to see, where to eat and how many days to stay, our sister site Perfect City Break has a full family-friendly guide to a {name} city break.",
    fr: "L'hôtel est choisi ? Pour les visites, les bonnes tables et le nombre de jours idéal, notre site partenaire Perfect City Break propose un guide complet du city break à {name} en famille.",
    it: "Hotel scelto? Per cosa vedere, dove mangiare e quanti giorni restare, il nostro sito gemello Perfect City Break ha una guida completa a un city break a {name} con la famiglia.",
    de: "Hotel gebucht? Für Sehenswürdigkeiten, Restaurants und die ideale Reisedauer hat unsere Partnerseite Perfect City Break einen kompletten Familienguide für einen Städtetrip nach {name}.",
    es: "¿Hotel elegido? Para qué ver, dónde comer y cuántos días quedarse, nuestra web hermana Perfect City Break tiene una guía completa de una escapada a {name} en familia.",
    pt: "Hotel escolhido? Para o que ver, onde comer e quantos dias ficar, o nosso site parceiro Perfect City Break tem um guia completo de um city break a {name} em família.",
  },
  cta: {
    en: "Read the {name} city break guide",
    fr: "Lire le guide city break de {name}",
    it: "Leggi la guida al city break di {name}",
    de: "Zum Städtetrip-Guide für {name}",
    es: "Ver la guía de escapada a {name}",
    pt: "Ler o guia de city break de {name}",
  },
};
