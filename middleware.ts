
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public routes that don't require authentication
  const publicRoutes = [
    '/billing/login',
    '/billing/reset-password'
  ];

  // Check if current path is a public route
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));

  // Protect all /billing routes EXCEPT public routes
  if (pathname.startsWith('/billing') && !isPublicRoute) {
    const token = req.cookies.get('billing_auth')?.value;

    // If no cookie, send to login
    if (!token) {
      const loginUrl = new URL('/billing/login', req.url);
      return NextResponse.redirect(loginUrl);
    }

    // If cookie exists, allow access
    return NextResponse.next();
  }

  // Everything else is public (including /billing/login and /billing/reset-password)
  return NextResponse.next();
}

export const config = {
  matcher: ['/billing/:path*'],
};