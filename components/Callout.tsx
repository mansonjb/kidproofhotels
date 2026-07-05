import type { ReactNode } from "react";

type Variant = "tip" | "headsup" | "hack" | "note";

const STYLE: Record<Variant, { bg: string; border: string; emoji: string; ink: string }> = {
  // Practical tip
  tip: { bg: "bg-sky/10", border: "border-sky/40", emoji: "💡", ink: "text-sky-deep" },
  // Worth knowing before booking
  headsup: { bg: "bg-coral/10", border: "border-coral/40", emoji: "⚠️", ink: "text-coral" },
  // Parent hack: the insider move
  hack: { bg: "bg-sun/12", border: "border-sun/50", emoji: "❤️", ink: "text-sun-deep" },
  note: { bg: "bg-paper-2", border: "border-line-2", emoji: "📝", ink: "text-ink-soft" },
};

/** Coloured "encart" box. The core device for selling the kids-friendly detail. */
export function Callout({
  variant = "tip",
  title,
  children,
}: {
  variant?: Variant;
  title: string;
  children: ReactNode;
}) {
  const s = STYLE[variant];
  return (
    <aside className={`my-6 flex gap-3 rounded-2xl border ${s.border} ${s.bg} p-4 sm:p-5`}>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cloud text-xl shadow-sm">
        {s.emoji}
      </span>
      <div className="min-w-0">
        <p className={`text-xs font-bold uppercase tracking-wide ${s.ink}`}>{title}</p>
        <div className="mt-1 text-sm leading-relaxed text-ink-soft">{children}</div>
      </div>
    </aside>
  );
}
