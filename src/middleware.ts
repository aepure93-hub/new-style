import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['it', 'en', 'es', 'zh', 'ja'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`));

  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/it';
    return NextResponse.redirect(url);
  }

  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/it${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
