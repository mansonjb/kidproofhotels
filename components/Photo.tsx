import Image from "next/image";
import type { ImgKey } from "@/lib/images";
import { imgUrl } from "@/lib/images";

const DEFAULT_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

/** A single responsive photo (next/image, AVIF/WebP + srcset). Always needs alt.
 *  Intrinsic width/height are preserved so the reserved box never shifts (CLS 0).
 *  Heroes above the fold should pass `priority` (or `eager`) for fetchpriority=high. */
export function Photo({
  img,
  alt,
  w = 1200,
  h,
  className = "",
  eager = false,
  priority = false,
  sizes = DEFAULT_SIZES,
}: {
  img: ImgKey;
  alt: string;
  w?: number;
  h?: number;
  className?: string;
  eager?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const height = h ?? Math.round((w * 3) / 4);
  // `eager` is the pre-existing above-the-fold signal; treat it as priority too.
  const isPriority = priority || eager;
  return (
    <Image
      src={imgUrl(img, { w, h })}
      alt={alt}
      width={w}
      height={height}
      sizes={sizes}
      priority={isPriority}
      className={className}
    />
  );
}

/** A tidy photo strip: one lead image + two stacked, for hotel heads. Takes
 *  ready-made srcs (real local hotel photos, or Unsplash URLs). Uses `fill`
 *  inside fixed aspect-ratio boxes so images cover cleanly without layout shift. */
export function PhotoGallery({ srcs, alt }: { srcs: string[]; alt: string }) {
  const [lead, ...rest] = srcs;
  if (!lead) return null;
  return (
    <div className="grid gap-2 sm:grid-cols-[1.6fr_1fr]">
      <div className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius-xl2)]">
        <Image
          src={lead}
          alt={alt}
          fill
          priority
          sizes="(max-width: 640px) 100vw, 60vw"
          className="object-cover"
        />
      </div>
      {rest.length > 0 && (
        <div className="grid gap-2">
          {rest.slice(0, 2).map((src, i) => (
            <div key={i} className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-xl2)] sm:aspect-auto sm:h-[calc(50%-4px)]">
              <Image
                src={src}
                alt={`${alt} (${i + 2})`}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
