// Stay22 integration (accommodation affiliation). The affiliate id is read from
// the environment, never hard-coded in pages. Embedded MAP docs: stay22.com

const AID = process.env.STAY22_AID || "";
const LMA = process.env.NEXT_PUBLIC_STAY22_LMA_ID || "";
const CAMPAIGN = "kidproofhotels";

export function hasStay22(): boolean {
  return AID.length > 0;
}

export type Stay22MapOpts = {
  lat: number;
  lng: number;
  zoom?: number;
  campaign?: string;
  checkin?: string; // YYYY-MM-DD
  checkout?: string; // YYYY-MM-DD
  markerLabel?: string;
  maincolor?: string; // hex without #
};

/** URL of the Stay22 MAP to embed in an iframe. */
export function stay22MapSrc(opts: Stay22MapOpts): string {
  const p = new URLSearchParams();
  p.set("aid", AID || "PLACEHOLDER_AID");
  p.set("lat", String(opts.lat));
  p.set("lng", String(opts.lng));
  if (opts.zoom) p.set("zoom", String(opts.zoom));
  if (opts.markerLabel) p.set("markerlabel", opts.markerLabel);
  if (opts.checkin) p.set("checkin", opts.checkin);
  if (opts.checkout) p.set("checkout", opts.checkout);
  p.set("campaign", opts.campaign || CAMPAIGN);
  if (opts.maincolor) p.set("maincolor", opts.maincolor.replace(/^#/, ""));
  p.set("hidemstickyfooter", "true");
  return `https://www.stay22.com/embed/gm?${p.toString()}`;
}

/** Stay22 Allez/Roam link (redirects to the best OTA with affiliate tracking).
 *  Pass hotelName to target a specific property, otherwise shows hotels near the address. */
export function stay22Url(address: string, hotelName?: string): string {
  const p = new URLSearchParams();
  p.set("aid", AID || "partner");
  p.set("campaign", CAMPAIGN);
  if (hotelName) p.set("hotelname", hotelName);
  p.set("address", address);
  if (LMA) p.set("lmaid", LMA);
  return `https://www.stay22.com/allez/roam?${p.toString()}`;
}
