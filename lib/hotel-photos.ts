import MANIFEST from "@/data/hotel-photos.json";
import { imgUrl } from "@/lib/images";
import type { Hotel } from "@/lib/types";

// Real per-hotel photos (fetched from Google Places via Apify, stored under
// public/images/hotels/{key}-{i}.jpg) take priority. Hotels with no confident
// match fall back to their illustrative Unsplash stock.
const COUNTS = MANIFEST as Record<string, number>;

function realCount(key: string): number {
  return COUNTS[key] ?? 0;
}

/** Card/hero image src for a hotel (real photo if we have one, else Unsplash). */
export function hotelHeroSrc(hotel: Hotel, w = 560, h = 420): string {
  if (realCount(hotel.key) > 0) return `/images/hotels/${hotel.key}-0.jpg`;
  return hotel.photos?.[0] ? imgUrl(hotel.photos[0], { w, h }) : "";
}

/** Up to `n` gallery srcs: real photos first, topped up with Unsplash stock. */
export function hotelGallerySrcs(hotel: Hotel, n = 3): string[] {
  const out: string[] = [];
  const count = realCount(hotel.key);
  for (let i = 0; i < count && out.length < n; i++) out.push(`/images/hotels/${hotel.key}-${i}.jpg`);
  const stock = hotel.photos ?? [];
  for (let i = 0; out.length < n && i < stock.length; i++) {
    out.push(imgUrl(stock[i], { w: 900, h: 620 }));
  }
  return out;
}

export function hasRealPhoto(hotel: Hotel): boolean {
  return realCount(hotel.key) > 0;
}
