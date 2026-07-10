import type { ImgKey } from "@/lib/images";
import { imgUrl } from "@/lib/images";

/** A single responsive photo (plain <img>, Unsplash-sized). Always needs alt. */
export function Photo({
  img,
  alt,
  w = 1200,
  h,
  className = "",
  eager = false,
}: {
  img: ImgKey;
  alt: string;
  w?: number;
  h?: number;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={imgUrl(img, { w, h })}
      alt={alt}
      width={w}
      height={h ?? Math.round((w * 3) / 4)}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}

/** A tidy photo strip: one lead image + two stacked, for hotel heads. Takes
 *  ready-made srcs (real hotel photos, or Unsplash URLs). */
export function PhotoGallery({ srcs, alt }: { srcs: string[]; alt: string }) {
  const [lead, ...rest] = srcs;
  if (!lead) return null;
  return (
    <div className="grid gap-2 sm:grid-cols-[1.6fr_1fr]">
      <div className="aspect-[3/2] overflow-hidden rounded-[var(--radius-xl2)]">
        <img src={lead} alt={alt} loading="eager" decoding="async" className="h-full w-full object-cover" />
      </div>
      {rest.length > 0 && (
        <div className="grid gap-2">
          {rest.slice(0, 2).map((src, i) => (
            <div key={i} className="aspect-[16/9] overflow-hidden rounded-[var(--radius-xl2)] sm:aspect-auto sm:h-[calc(50%-4px)]">
              <img src={src} alt={`${alt} (${i + 2})`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
