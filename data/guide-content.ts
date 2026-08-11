import type { ComponentType } from "react";
import type { Locale } from "@/lib/i18n";

// Static import of every guide MDX body, keyed by "{locale}:{guideKey}".
// Bodies exist for all six locales; guideBody() still falls back to English
// for safety.
import EnConnecting from "@/content/guides/en/guide-connecting-rooms.mdx";
import FrConnecting from "@/content/guides/fr/guide-connecting-rooms.mdx";
import ItConnecting from "@/content/guides/it/guide-connecting-rooms.mdx";
import DeConnecting from "@/content/guides/de/guide-connecting-rooms.mdx";
import EsConnecting from "@/content/guides/es/guide-connecting-rooms.mdx";
import PtConnecting from "@/content/guides/pt/guide-connecting-rooms.mdx";

import EnBaby from "@/content/guides/en/guide-baby-checklist.mdx";
import FrBaby from "@/content/guides/fr/guide-baby-checklist.mdx";
import ItBaby from "@/content/guides/it/guide-baby-checklist.mdx";
import DeBaby from "@/content/guides/de/guide-baby-checklist.mdx";
import EsBaby from "@/content/guides/es/guide-baby-checklist.mdx";
import PtBaby from "@/content/guides/pt/guide-baby-checklist.mdx";

import EnClub from "@/content/guides/en/guide-kids-club-free.mdx";
import FrClub from "@/content/guides/fr/guide-kids-club-free.mdx";
import ItClub from "@/content/guides/it/guide-kids-club-free.mdx";
import DeClub from "@/content/guides/de/guide-kids-club-free.mdx";
import EsClub from "@/content/guides/es/guide-kids-club-free.mdx";
import PtClub from "@/content/guides/pt/guide-kids-club-free.mdx";

import EnAllInc from "@/content/guides/en/guide-allinclusive-europe.mdx";
import FrAllInc from "@/content/guides/fr/guide-allinclusive-europe.mdx";
import ItAllInc from "@/content/guides/it/guide-allinclusive-europe.mdx";
import DeAllInc from "@/content/guides/de/guide-allinclusive-europe.mdx";
import EsAllInc from "@/content/guides/es/guide-allinclusive-europe.mdx";
import PtAllInc from "@/content/guides/pt/guide-allinclusive-europe.mdx";

import EnSlides from "@/content/guides/en/guide-waterslide-hotels.mdx";
import FrSlides from "@/content/guides/fr/guide-waterslide-hotels.mdx";
import ItSlides from "@/content/guides/it/guide-waterslide-hotels.mdx";
import DeSlides from "@/content/guides/de/guide-waterslide-hotels.mdx";
import EsSlides from "@/content/guides/es/guide-waterslide-hotels.mdx";
import PtSlides from "@/content/guides/pt/guide-waterslide-hotels.mdx";

// 2027 lead-gen guides: EN + FR bodies; it/de/es/pt fall back to EN in guideBody().
import EnGreece from "@/content/guides/en/guide-greece-family.mdx";
import FrGreece from "@/content/guides/fr/guide-greece-family.mdx";
import EnWaterPark from "@/content/guides/en/guide-water-park-europe.mdx";
import FrWaterPark from "@/content/guides/fr/guide-water-park-europe.mdx";
import EnCheapAI from "@/content/guides/en/guide-cheap-allinclusive-europe.mdx";
import FrCheapAI from "@/content/guides/fr/guide-cheap-allinclusive-europe.mdx";
import EnCrete from "@/content/guides/en/guide-crete-family.mdx";
import FrCrete from "@/content/guides/fr/guide-crete-family.mdx";
import EnRhodes from "@/content/guides/en/guide-rhodes-family.mdx";
import FrRhodes from "@/content/guides/fr/guide-rhodes-family.mdx";
import EnMallorca from "@/content/guides/en/guide-mallorca-family.mdx";
import FrMallorca from "@/content/guides/fr/guide-mallorca-family.mdx";
import EnSpainBeach from "@/content/guides/en/guide-spain-beach-family.mdx";
import FrSpainBeach from "@/content/guides/fr/guide-spain-beach-family.mdx";
import EnToddler from "@/content/guides/en/guide-toddler-hotels-europe.mdx";
import FrToddler from "@/content/guides/fr/guide-toddler-hotels-europe.mdx";

// Seasonal 2027 window guides.
import EnWinter from "@/content/guides/en/guide-winter-sun-2027.mdx";
import FrWinter from "@/content/guides/fr/guide-winter-sun-2027.mdx";
import EnFeb from "@/content/guides/en/guide-family-feb-half-term-2027.mdx";
import FrFeb from "@/content/guides/fr/guide-family-feb-half-term-2027.mdx";
import EnEaster from "@/content/guides/en/guide-family-easter-2027.mdx";
import FrEaster from "@/content/guides/fr/guide-family-easter-2027.mdx";
import EnSummer from "@/content/guides/en/guide-family-summer-2027.mdx";
import FrSummer from "@/content/guides/fr/guide-family-summer-2027.mdx";
import EnOct from "@/content/guides/en/guide-family-oct-half-term-2027.mdx";
import FrOct from "@/content/guides/fr/guide-family-oct-half-term-2027.mdx";
import EnNewYear from "@/content/guides/en/guide-family-new-year-sun-2027.mdx";
import FrNewYear from "@/content/guides/fr/guide-family-new-year-sun-2027.mdx";
import EnSki from "@/content/guides/en/guide-family-ski-allinclusive-2027.mdx";
import FrSki from "@/content/guides/fr/guide-family-ski-allinclusive-2027.mdx";

const CONTENT: Record<string, ComponentType> = {
  "en:guide-connecting-rooms": EnConnecting,
  "fr:guide-connecting-rooms": FrConnecting,
  "it:guide-connecting-rooms": ItConnecting,
  "de:guide-connecting-rooms": DeConnecting,
  "es:guide-connecting-rooms": EsConnecting,
  "pt:guide-connecting-rooms": PtConnecting,
  "en:guide-baby-checklist": EnBaby,
  "fr:guide-baby-checklist": FrBaby,
  "it:guide-baby-checklist": ItBaby,
  "de:guide-baby-checklist": DeBaby,
  "es:guide-baby-checklist": EsBaby,
  "pt:guide-baby-checklist": PtBaby,
  "en:guide-kids-club-free": EnClub,
  "fr:guide-kids-club-free": FrClub,
  "it:guide-kids-club-free": ItClub,
  "de:guide-kids-club-free": DeClub,
  "es:guide-kids-club-free": EsClub,
  "pt:guide-kids-club-free": PtClub,
  "en:guide-allinclusive-europe": EnAllInc,
  "fr:guide-allinclusive-europe": FrAllInc,
  "it:guide-allinclusive-europe": ItAllInc,
  "de:guide-allinclusive-europe": DeAllInc,
  "es:guide-allinclusive-europe": EsAllInc,
  "pt:guide-allinclusive-europe": PtAllInc,
  "en:guide-waterslide-hotels": EnSlides,
  "fr:guide-waterslide-hotels": FrSlides,
  "it:guide-waterslide-hotels": ItSlides,
  "de:guide-waterslide-hotels": DeSlides,
  "es:guide-waterslide-hotels": EsSlides,
  "pt:guide-waterslide-hotels": PtSlides,
  "en:guide-greece-family": EnGreece,
  "fr:guide-greece-family": FrGreece,
  "en:guide-water-park-europe": EnWaterPark,
  "fr:guide-water-park-europe": FrWaterPark,
  "en:guide-cheap-allinclusive-europe": EnCheapAI,
  "fr:guide-cheap-allinclusive-europe": FrCheapAI,
  "en:guide-crete-family": EnCrete,
  "fr:guide-crete-family": FrCrete,
  "en:guide-rhodes-family": EnRhodes,
  "fr:guide-rhodes-family": FrRhodes,
  "en:guide-mallorca-family": EnMallorca,
  "fr:guide-mallorca-family": FrMallorca,
  "en:guide-spain-beach-family": EnSpainBeach,
  "fr:guide-spain-beach-family": FrSpainBeach,
  "en:guide-toddler-hotels-europe": EnToddler,
  "fr:guide-toddler-hotels-europe": FrToddler,
  "en:guide-winter-sun-2027": EnWinter,
  "fr:guide-winter-sun-2027": FrWinter,
  "en:guide-family-feb-half-term-2027": EnFeb,
  "fr:guide-family-feb-half-term-2027": FrFeb,
  "en:guide-family-easter-2027": EnEaster,
  "fr:guide-family-easter-2027": FrEaster,
  "en:guide-family-summer-2027": EnSummer,
  "fr:guide-family-summer-2027": FrSummer,
  "en:guide-family-oct-half-term-2027": EnOct,
  "fr:guide-family-oct-half-term-2027": FrOct,
  "en:guide-family-new-year-sun-2027": EnNewYear,
  "fr:guide-family-new-year-sun-2027": FrNewYear,
  "en:guide-family-ski-allinclusive-2027": EnSki,
  "fr:guide-family-ski-allinclusive-2027": FrSki,
};

export function guideBody(
  locale: Locale,
  key: string,
): ComponentType | null {
  // Fall back to the English body if a locale MDX is missing.
  return CONTENT[`${locale}:${key}`] ?? CONTENT[`en:${key}`] ?? null;
}
