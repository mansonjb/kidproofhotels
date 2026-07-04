import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

// Root layout: pass-through. The real <html>/<body>, fonts and chrome live in
// app/[locale]/layout.tsx; proxy.ts maps each path to a locale.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
