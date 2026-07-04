// A styled "postcard" placeholder: sunny gradient keyed to an accent colour with
// a big emoji. Stands in for real photography (added later, never via Google
// Places) and always renders, so the layout never breaks on a missing image.
export function Postcard({
  emoji,
  accent,
  className = "",
  ratio = "aspect-[4/3]",
  big = false,
}: {
  emoji: string;
  accent: string;
  className?: string;
  ratio?: string;
  big?: boolean;
}) {
  const a = `#${accent}`;
  return (
    <div
      className={`relative grid place-items-center overflow-hidden ${ratio} ${className}`}
      style={{
        background: `radial-gradient(120% 120% at 80% 0%, ${a}33, transparent 55%), linear-gradient(150deg, ${a}22, #ffffff 70%)`,
      }}
      aria-hidden
    >
      <span
        className="pointer-events-none absolute -right-4 -top-5 h-24 w-24 rounded-full opacity-30 blur-xl"
        style={{ background: a }}
      />
      <span className={big ? "text-7xl drop-shadow-sm" : "text-5xl drop-shadow-sm"}>
        {emoji}
      </span>
      <span
        className="absolute bottom-0 left-0 right-0 h-1.5"
        style={{ background: a }}
      />
    </div>
  );
}
