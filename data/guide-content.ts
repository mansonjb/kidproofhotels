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
};

export function guideBody(
  locale: Locale,
  key: string,
): ComponentType | null {
  // Fall back to the English body if a locale MDX is missing.
  return CONTENT[`${locale}:${key}`] ?? CONTENT[`en:${key}`] ?? null;
}
