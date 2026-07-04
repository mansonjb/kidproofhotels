import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  sub,
  action,
}: {
  kicker?: string;
  title: ReactNode;
  sub?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        {kicker && <p className="kicker mb-2">{kicker}</p>}
        <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {sub && <p className="mt-2 text-base text-muted">{sub}</p>}
      </div>
      {action}
    </div>
  );
}
