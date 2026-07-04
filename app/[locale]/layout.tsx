import { notFound } from "next/navigation";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { HTML_LANG, LOCALES, isLocale } from "@/lib/i18n";
import { orgNode, websiteNode } from "@/lib/schema";
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
      <body className="page-canvas min-h-screen">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [orgNode(), websiteNode()],
          }}
        />
        <Stay22Script lmaId={process.env.NEXT_PUBLIC_STAY22_LMA_ID} />
        {children}
      </body>
    </html>
  );
}
