import type { ComponentType } from "react";
import type { Locale } from "@/lib/i18n";

// Static import of every guide MDX body, keyed by "{locale}:{guideKey}". Using
// static imports (not dynamic) keeps everything statically rendered and typed.
import EnConnecting from "@/content/guides/en/guide-connecting-rooms.mdx";
import EnBaby from "@/content/guides/en/guide-baby-checklist.mdx";
import EnClub from "@/content/guides/en/guide-kids-club-free.mdx";
import EnAllInc from "@/content/guides/en/guide-allinclusive-europe.mdx";
import EnSlides from "@/content/guides/en/guide-waterslide-hotels.mdx";

import FrConnecting from "@/content/guides/fr/guide-connecting-rooms.mdx";
import FrBaby from "@/content/guides/fr/guide-baby-checklist.mdx";
import FrClub from "@/content/guides/fr/guide-kids-club-free.mdx";
import FrAllInc from "@/content/guides/fr/guide-allinclusive-europe.mdx";
import FrSlides from "@/content/guides/fr/guide-waterslide-hotels.mdx";

const CONTENT: Record<string, ComponentType> = {
  "en:guide-connecting-rooms": EnConnecting,
  "en:guide-baby-checklist": EnBaby,
  "en:guide-kids-club-free": EnClub,
  "en:guide-allinclusive-europe": EnAllInc,
  "en:guide-waterslide-hotels": EnSlides,
  "fr:guide-connecting-rooms": FrConnecting,
  "fr:guide-baby-checklist": FrBaby,
  "fr:guide-kids-club-free": FrClub,
  "fr:guide-allinclusive-europe": FrAllInc,
  "fr:guide-waterslide-hotels": FrSlides,
};

export function guideBody(
  locale: Locale,
  key: string,
): ComponentType | null {
  return CONTENT[`${locale}:${key}`] ?? null;
}
