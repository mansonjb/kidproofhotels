# KidProof Hotels

Editorial guide to family-friendly hotels, scored for kids and monetised with Stay22.
_Hotels that actually work with kids._

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**, statically rendered
- **Tailwind CSS v4** (single `@theme` in `app/globals.css`)
- **MDX** for guide bodies (`@next/mdx`)
- **i18n**: EN at the root `/`, FR under `/fr` (proxy in `proxy.ts`), full `hreflang`
- **Stay22** affiliation: embedded MAP + LetMeAllez link rewriting

## Signature: the KidProof Score

Every hotel is scored 0..100 across eight weighted criteria (see `lib/score.ts`),
led by room configuration. Rendered as a badge (`components/ScoreBadge.tsx`) and a
transparent breakdown (`components/ScoreBreakdown.tsx`). The method is public at
`/method`.

## Structure

```
app/
  [locale]/layout.tsx        html/body, fonts, Stay22 script, org schema
  [locale]/[[...slug]]/page.tsx   catch-all: resolves registry -> template
  robots.ts  sitemap.ts  not-found.tsx
proxy.ts                     EN-at-root / FR-prefixed routing
components/                  chrome, primitives, score, cards, templates/
data/
  i18n/{ui,en,fr}.ts         UI dictionary (localised, not machine-translated)
  destinations.ts hotels.ts guides.ts   typed content collections (SEED)
  guide-content.ts           maps guide key + locale -> MDX component
content/guides/{en,fr}/*.mdx article bodies
lib/
  registry.ts                assembles pages from data, resolves slugs
  score.ts seo.ts schema.ts affiliates/stay22.ts i18n.ts site.ts types.ts
```

## Scripts

```bash
npm run dev        # http://localhost:3027
npm run build      # static production build
npm run typecheck  # tsc --noEmit
```

## Environment

Copy `.env.local.example` to `.env.local` and fill in:

- `STAY22_AID` — Stay22 affiliate id (server side, builds MAP + Allez links)
- `NEXT_PUBLIC_STAY22_LMA_ID` — LetMeAllez script id (client, link rewriting)
- `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SITE_NAME`

Until `STAY22_AID` is set the MAP embeds with a placeholder id (still renders,
no commissions).

## Status (MVP)

- Bilingual EN + FR, ready to add PT/IT/DE/NL on pages that perform
- 3 destinations, 6 hotels (SEED placeholders), 5 guides, method + index pages
- **Before launch:** replace SEED hotels with verified properties and real photos
  (no Google Places, per project rule), and wire the real Stay22 ids.
