// Hand-drawn SVG doodles: the controlled "kid-core" touch that gives the site its
// family-magazine personality. Decorative only (aria-hidden), currentColor-driven.

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" fill="none" className={className} aria-hidden preserveAspectRatio="none">
      <path d="M2 8C18 2 30 2 44 7s26 5 40 0 24-6 34-1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 14" fill="none" className={className} aria-hidden preserveAspectRatio="none">
      <path d="M3 9C55 4 150 3 197 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden>
      <path d="M8 10c22 2 40 14 40 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 44l12 4 2-13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2c.6 3.8 2.2 5.4 6 6-3.8.6-5.4 2.2-6 6-.6-3.8-2.2-5.4-6-6 3.8-.6 5.4-2.2 6-6z" />
    </svg>
  );
}

export function Burst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x = 20 + Math.cos(a) * 8;
        const y = 20 + Math.sin(a) * 8;
        const x2 = 20 + Math.cos(a) * 16;
        const y2 = 20 + Math.sin(a) * 16;
        return <line key={i} x1={x} y1={y} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />;
      })}
    </svg>
  );
}

/** A wavy top divider that sits between coloured sections. */
export function WaveDivider({
  className = "",
  color = "var(--color-paper)",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path d="M0 24C240 48 480 48 720 30S1200 0 1440 20V48H0Z" fill={color} />
    </svg>
  );
}
