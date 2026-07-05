// Curated, verified Unsplash photo IDs (each checked to resolve 200 and to be
// on theme). Illustrative stock, not the actual properties, until partner photos
// land. No Google Places API (project rule) — Unsplash only here.
//
// URLs are built with Unsplash's own resize/format params, so we can serve a
// plain <img> (already optimised + responsive-friendly) without the next/image
// optimiser in the path. Every image ships an alt text at the call site.

export const IMG = {
  beachSunset: "1507525428034-b723cf961d3e",
  resortLoungers: "1566073771259-6a8506099945",
  poolDusk: "1571896349842-33c89424de2d",
  poolTropicalMtn: "1520250497591-112f2f40a3f4",
  poolCabanas: "1571003123894-1f0594d2b5d9",
  infinityPoolSea: "1540541338287-41700207dee6",
  villaInterior: "1602002418082-a4443e081dd1",
  kidsReading: "1476234251651-f353703a034d",
  lisbonTram: "1585208798174-6cedd86e019a",
  villaPoolGreen: "1512917774080-9991f1c4c750",
  villaPink: "1580587771525-78b9dba3b914",
  resortCanal: "1596178065887-1198b6148b2b",
  roomCozy: "1611892440504-42a792e24d32",
  poolDuskPalms: "1551882547-ff40c63fe5fa",
  deckLoungersSea: "1582719508461-905c673771fd",
  poolOrange: "1615460549969-36fa19521a4f",
  hotelTowerGreen: "1568084680786-a84f91d1153c",
  swimmer: "1530549387789-4c1017266635",
  coastTown: "1533105079780-92b9be482077",
  kidsFootball: "1502086223501-7ea6ecd79368",
  livingRoom: "1560185007-c5ca9d2c014d",
  poolPalms: "1610641818989-c2051b5e2cfd",
  whiteResortPool: "1564501049412-61c2a3083791",
  algarveCliffs: "1493558103817-58b2924bce98",
  villaModern: "1591474200742-8e512e6f98f8",
  babyHand: "1470116945706-e6bf5d5a53ca",
  overwater: "1516815231560-8f41ec531527",
} as const;

export type ImgKey = keyof typeof IMG;

/** Build an Unsplash URL for a given crop size. */
export function imgUrl(
  key: ImgKey,
  opts: { w: number; h?: number; q?: number } = { w: 1200 },
): string {
  const { w, h, q = 68 } = opts;
  const p = new URLSearchParams({
    w: String(w),
    q: String(q),
    auto: "format",
    fit: "crop",
  });
  if (h) p.set("h", String(h));
  return `https://images.unsplash.com/photo-${IMG[key]}?${p.toString()}`;
}
