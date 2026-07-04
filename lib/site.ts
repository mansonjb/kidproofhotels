export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://kidproofhotels.com"
).replace(/\/+$/, "");

// Brand name. Overridable via env (NEXT_PUBLIC_SITE_NAME).
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "KidProof Hotels";

// Accent colour injected into the embedded Stay22 MAP (hex, no leading #).
// Sunshine amber, the brand's signature.
export const BRAND_ACCENT = "ff9d1c";
