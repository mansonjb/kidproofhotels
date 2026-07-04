import { NextResponse, type NextRequest } from "next/server";

// i18n routing (Next 16 "proxy", formerly middleware):
// EN (default) at the root, FR prefixed by /fr.
//  - /fr/...  : passes through (rendered by [locale]=fr)
//  - /en/...  : redirects to /... (the default prefix must not be exposed)
//  - /...     : rewritten internally to /en/... (rendered by [locale]=en)
const DEFAULT_LOCALE = "en";
const PREFIXED = ["fr"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.\w+$/.test(pathname)
  ) {
    return;
  }

  const segs = pathname.split("/").filter(Boolean);
  const first = segs[0];

  if (first && PREFIXED.includes(first)) return;

  if (first === DEFAULT_LOCALE) {
    const url = req.nextUrl.clone();
    url.pathname = "/" + segs.slice(1).join("/");
    return NextResponse.redirect(url, 308);
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
