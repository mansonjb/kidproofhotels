# KidProof Hotels — working notes

Affiliate/editorial site for family-friendly hotels. Stay22 monetisation.
Brand voice: written by parents, for parents. Warm, specific, honest, joyful.

## Conventions

- **No em-dashes** in user-facing copy (reads as AI). Use commas, colons, parens.
- Localisation over translation: FR copy is written for FR parents, not translated.
- Every monetised outbound link goes through `AffiliateLink` (rel sponsored/nofollow).
- The Stay22 MAP is the signature converting element: one page = one booking intent.
- Room configuration is factor n°1 everywhere (top of every hotel page, top weight).

## Adding content

- **Hotel**: add an entry to the destination's `data/hotels/<destKey>.json` (the
  HotelSeed shape: 8 `scores`, `roomsSummary`, `amenities`, `photos`, rich content).
  `data/hotels/load.ts` maps it to a `Hotel` (slug/geo/related auto-generated) and
  `data/hotels.ts` exposes it. Destinations auto-populate their line-up and the
  combo matrix regenerates. Run `node scripts/validate-seeds.mjs` after editing
  (it strips em-dashes/entities and checks every field/enum).
- **Destination**: add to `data/destinations.ts`.
- **Guide**: add metadata to `data/guides.ts`, write `content/guides/{en,fr}/<key>.mdx`,
  register both in `data/guide-content.ts`.
- New locale: extend `LOCALES` in `lib/i18n.ts`, add a `data/i18n/<locale>.ts`,
  add the prefix to `proxy.ts`, and provide slugs/copy on every content item.

## Gotchas

- Fraunces is a variable font: no explicit `weight` in `next/font` (use `axes`).
- `proxy.ts` (not `middleware.ts`) handles i18n in Next 16. EN at root, FR under `/fr`.
- Hotel data is SEED placeholder. Replace with verified hotels + real photos before
  launch. No Google Places API (project-wide rule) — use partner/Unsplash photos.

## Verify a deploy

Confirm via `gh` commit status, never by polling the live site (trips the security
checkpoint and 403s the IP).

## Dev

`npm run dev` on port 3027. Repo: github.com/mansonjb/kidproofhotels
