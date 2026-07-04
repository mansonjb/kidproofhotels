import type { CSSProperties, ReactNode } from "react";

export type AffiliateNetwork = "stay22" | "travelpayouts";

type Props = {
  href: string;
  network: AffiliateNetwork;
  context: string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  children: ReactNode;
};

// Every monetised outbound link goes through here: rel sponsored/nofollow +
// tracking attributes so we can attribute conversions in the Stay22 dashboard.
export function AffiliateLink({
  href,
  network,
  context,
  className,
  style,
  ariaLabel,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener nofollow"
      data-affiliate-network={network}
      data-affiliate-context={context}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
