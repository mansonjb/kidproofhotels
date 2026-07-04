import Link from "next/link";
import { getDict } from "@/lib/i18n";

// Rendered under the pass-through root layout, so it provides its own html/body.
export default function NotFound() {
  const dict = getDict("en");
  return (
    <html lang="en">
      <body className="page-canvas grid min-h-screen place-items-center px-5 text-center">
        <div>
          <p className="text-7xl">🧭</p>
          <h1 className="mt-6 font-display text-4xl text-ink">{dict.notFound.title}</h1>
          <p className="mt-3 text-lg text-muted">{dict.notFound.body}</p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper"
          >
            {dict.notFound.cta} →
          </Link>
        </div>
      </body>
    </html>
  );
}
