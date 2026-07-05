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

/** A tidy photo strip: one lead image + two stacked, for hotel/destination heads. */
export function PhotoGallery({
  imgs,
  alt,
}: {
  imgs: ImgKey[];
  alt: string;
}) {
  const [lead, ...rest] = imgs;
  if (!lead) return null;
  return (
    <div className="grid gap-2 sm:grid-cols-[1.6fr_1fr]">
      <div className="overflow-hidden rounded-[var(--radius-xl2)]">
        <Photo img={lead} alt={alt} w={900} h={620} className="h-full w-full object-cover" eager />
      </div>
      {rest.length > 0 && (
        <div className="grid gap-2">
          {rest.slice(0, 2).map((k, i) => (
            <div key={k} className="overflow-hidden rounded-[var(--radius-xl2)]">
              <Photo img={k} alt={`${alt} (${i + 2})`} w={560} h={i === 0 && rest.length > 1 ? 302 : 620} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
