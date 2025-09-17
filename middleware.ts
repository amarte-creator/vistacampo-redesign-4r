import { NextResponse, type NextRequest } from "next/server";

const locales = ["es", "en"] as const;
const defaultLocale = "es";

function getLocale(request: NextRequest): string {
  // Basic detection via Accept-Language; defaults to 'es'
  const header = request.headers.get("accept-language") || "";
  const preferred = header.split(",").map(p => p.split(";")[0].trim().toLowerCase());
  for (const p of preferred) {
    const base = p.split("-")[0];
    if (locales.includes(base as any)) return base;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore next internals and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") || // file with extension
    pathname.startsWith("/images") ||
    pathname.startsWith("/locales")
  ) {
    return;
  }

  // Already has a locale prefix
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) {
    return;
  }

  // Redirect to default or detected locale maintaining path
  // Force default to 'es' unless Accept-Language explicitly matches a supported locale
  const detected = getLocale(request);
  const locale = locales.includes(detected as any) ? detected : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  
  // Add caching headers for redirects
  const response = NextResponse.redirect(url);
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  
  return response;
}

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico|robots.txt|sitemap.xml|images|placeholder.*|locales).*)",
  ],
};