import { notFound } from "next/navigation";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { HTML_LANG, LOCALES, isLocale } from "@/lib/i18n";
import { orgNode, websiteNode } from "@/lib/schema";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { Stay22Script } from "@/components/Stay22Script";

// Expressive optical-size serif for display + friendly geometric sans for body.
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK"],
  variable: "--ff-display",
  display: "swap",
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ff-body",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={HTML_LANG[locale]}
      className={`${display.variable} ${body.variable}`}
    >
      <head>
        {/* Unsplash serves every hero image; warm the connection early. */}
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="page-canvas min-h-screen">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [orgNode(), websiteNode(locale)],
          }}
        />
        <Stay22Script lmaId={process.env.NEXT_PUBLIC_STAY22_LMA_ID} />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YJGFFQ3XS0"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-YJGFFQ3XS0');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
