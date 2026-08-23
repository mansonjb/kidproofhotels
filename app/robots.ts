import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Crawlers commerciaux sans valeur SEO ni GEO : outils de backlink, scrapers
 * de data B2B, agregateurs. Ils n'envoient ni trafic ni citation, mais ils
 * crawlent en volume et chaque hit sur une page ISR expiree declenche une
 * regeneration facturee (ISR Writes + Fast Origin Transfer). Les bloquer est
 * une pure economie, sans perte de visibilite.
 */
const COST_HOSTILE_BOTS = [
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "DataForSeoBot",
  "Barkrowler",
  "SeekportBot",
  "serpstatbot",
  "ZoominfoBot",
  "MegaIndex.ru",
  "SiteAuditBot",
  "Bytespider",
  "PetalBot",
  "ImagesiftBot",
  "magpie-crawler",
  "YisouSpider",
  "VelenPublicWebCrawler",
  "Timpibot",
  "Diffbot",
  "omgili",
  "omgilibot",
  "TurnitinBot",
  "SEOkicks",
  "linkdexbot",
  "spbot",
  "trendictionbot",
  "AwarioBot",
];

// Ouvert aux moteurs de recherche ET aux crawlers IA (strategie GEO).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: COST_HOSTILE_BOTS, disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
