import type { AgeBand, Hotel, L10n } from "@/lib/types";
import { slugify } from "@/lib/slug";
import { kidProofScore } from "@/lib/score";
import { backfillDeep, src } from "@/lib/l10n";
import lisbon from "./lisbon.json";
import algarve from "./algarve.json";
import costa from "./costa-del-sol.json";
import mallorca from "./mallorca.json";
import tenerife from "./tenerife.json";
import crete from "./crete.json";
import antalya from "./antalya.json";
import sardinia from "./sardinia.json";
import costaBlanca from "./costa-blanca.json";
import rhodes from "./rhodes.json";
import granCanaria from "./gran-canaria.json";
import cyprus from "./cyprus.json";
import sicily from "./sicily.json";
import corfu from "./corfu.json";
import fuerteventura from "./fuerteventura.json";
import barcelona from "./barcelona.json";
import lanzarote from "./lanzarote.json";
import menorca from "./menorca.json";
import kos from "./kos.json";
import valencia from "./valencia.json";
import malta from "./malta.json";
import zakynthos from "./zakynthos.json";
import madeira from "./madeira.json";
import costaDorada from "./costa-dorada.json";
import seville from "./seville.json";
import halkidiki from "./halkidiki.json";
import puglia from "./puglia.json";
import hurghada from "./hurghada.json";
import sousse from "./sousse.json";
import sharm from "./sharm.json";
import bodrum from "./bodrum.json";
import sal from "./sal.json";
import reunion from "./reunion.json";
import saintMartin from "./saint-martin.json";
import dubai from "./dubai.json";
import martinique from "./martinique.json";
import guadeloupe from "./guadeloupe.json";
import ibiza from "./ibiza.json";
import laPalma from "./la-palma.json";
import agadir from "./agadir.json";
import lakeGarda from "./lake-garda.json";
import frenchRiviera from "./french-riviera.json";
import costaBrava from "./costa-brava.json";
import djerba from "./djerba.json";

// Hotels are authored as JSON seeds (researched + drafted) and mapped to the
// Hotel shape here: geo assembled, a clean unique slug generated per property,
// and "similar" hotels auto-linked within each destination.

type SeedFile = {
  hotels: Record<string, unknown>[];
  destinationMeta?: Record<string, unknown>;
};

const FILES = [lisbon, algarve, costa, mallorca, tenerife, crete, antalya, sardinia, costaBlanca, rhodes, granCanaria, cyprus, sicily, corfu, fuerteventura, barcelona, lanzarote, menorca, kos, valencia, malta, zakynthos, madeira, costaDorada, seville, halkidiki, puglia, hurghada, sousse, sharm, bodrum, sal, reunion, saintMartin, dubai, martinique, guadeloupe, ibiza, laPalma, agadir, lakeGarda, frenchRiviera, costaBrava, djerba] as unknown as SeedFile[];

/** Loosely-typed per-destination meta (used to build newer Destinations). */
export const MALLORCA_META = (mallorca as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const TENERIFE_META = (tenerife as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const CRETE_META = (crete as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const ANTALYA_META = (antalya as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const SARDINIA_META = (sardinia as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const COSTA_BLANCA_META = (costaBlanca as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const RHODES_META = (rhodes as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const GRAN_CANARIA_META = (granCanaria as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const CYPRUS_META = (cyprus as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const SICILY_META = (sicily as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const CORFU_META = (corfu as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const FUERTEVENTURA_META = (fuerteventura as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const BARCELONA_META = (barcelona as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const LANZAROTE_META = (lanzarote as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const MENORCA_META = (menorca as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const KOS_META = (kos as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const VALENCIA_META = (valencia as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const MALTA_META = (malta as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const ZAKYNTHOS_META = (zakynthos as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const MADEIRA_META = (madeira as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const COSTA_DORADA_META = (costaDorada as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const SEVILLE_META = (seville as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const HALKIDIKI_META = (halkidiki as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const PUGLIA_META = (puglia as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const HURGHADA_META = (hurghada as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const SOUSSE_META = (sousse as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const SHARM_META = (sharm as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const BODRUM_META = (bodrum as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const SAL_META = (sal as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const REUNION_META = (reunion as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const SAINT_MARTIN_META = (saintMartin as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const DUBAI_META = (dubai as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const MARTINIQUE_META = (martinique as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const GUADELOUPE_META = (guadeloupe as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const IBIZA_META = (ibiza as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const LA_PALMA_META = (laPalma as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const AGADIR_META = (agadir as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const LAKE_GARDA_META = (lakeGarda as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const FRENCH_RIVIERA_META = (frenchRiviera as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const COSTA_BRAVA_META = (costaBrava as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;
export const DJERBA_META = (djerba as unknown as SeedFile).destinationMeta as
  | Record<string, unknown>
  | undefined;

function toHotel(raw: Record<string, unknown>, usedSlugs: Set<string>): Hotel {
  const s = raw as Record<string, any>;
  const base = slugify(s.name);
  let slug = base;
  let i = 2;
  while (usedSlugs.has(slug)) slug = `${base}-${i++}`;
  usedSlugs.add(slug);

  return {
    key: s.key,
    name: s.name,
    destinationKey: s.destinationKey,
    area: s.area,
    slug: src<L10n>({ en: slug, fr: slug }),
    geo: { lat: s.lat, lng: s.lng, zoom: s.zoom ?? 13 },
    address: s.address,
    priceTier: s.priceTier,
    priceFrom: s.priceFrom,
    ages: (s.ages ?? []) as AgeBand[],
    scores: s.scores,
    roomsSummary: s.roomsSummary,
    intro: s.intro,
    highlights: s.highlights,
    pros: s.pros,
    cons: s.cons,
    clubFree: s.clubFree,
    amenities: s.amenities ?? [],
    photos: s.photos ?? [],
    verdict: s.verdict,
    parentTip: s.parentTip,
    atAGlance: s.atAGlance,
    activities: s.activities,
    sampleDay: s.sampleDay,
    ageNotes: s.ageNotes,
    faqs: s.faqs,
    related: [],
  };
}

const used = new Set<string>();
export const SEED_HOTELS: Hotel[] = FILES.flatMap((f) =>
  (f.hotels ?? []).map((s) => toHotel(s, used)),
);
// Fill missing locales (it/de/es/pt) with English until translated.
backfillDeep(SEED_HOTELS);

// Auto-relate: up to 3 other hotels in the same destination, best score first.
for (const h of SEED_HOTELS) {
  h.related = SEED_HOTELS.filter(
    (o) => o.destinationKey === h.destinationKey && o.key !== h.key,
  )
    .sort((a, b) => kidProofScore(b.scores) - kidProofScore(a.scores))
    .slice(0, 3)
    .map((o) => o.key);
}
