"use client";

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

type Gtag = (event: "event", name: string, params: Record<string, unknown>) => void;

// Every monetised outbound link goes through here: rel sponsored/nofollow +
// tracking attributes so we can attribute conversions in the Stay22 dashboard.
// It also fires a GA4 `affiliate_click` event so we can see the on-site half of
// the funnel (who actually clicks Book / Browse) -- the Stay22 report only shows
// bookings, never the clicks that led to them. The map iframe is cross-origin so
// clicks inside it can't be tracked here; this covers the Book/Browse buttons.
export function AffiliateLink({
  href,
  network,
  context,
  className,
  style,
  ariaLabel,
  children,
}: Props) {
  function track() {
    if (typeof window === "undefined") return;
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    if (typeof gtag !== "function") return;
    let linkDomain = "";
    try {
      linkDomain = new URL(href).hostname;
    } catch {
      linkDomain = "";
    }
    gtag("event", "affiliate_click", {
      affiliate_network: network,
      affiliate_context: context,
      link_domain: linkDomain,
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener nofollow"
      data-affiliate-network={network}
      data-affiliate-context={context}
      onClick={track}
      onAuxClick={track}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
