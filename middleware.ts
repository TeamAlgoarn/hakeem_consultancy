// // // // import { NextResponse } from "next/server";
// // // // import type { NextRequest } from "next/server";

// // // // export function middleware(req: NextRequest) {
// // // //   const { pathname } = req.nextUrl;
// // // //   if (!pathname.startsWith("/billing")) return NextResponse.next();

// // // //   const hasCookie = req.cookies.get("sv_billing_auth")?.value === "1";
// // // //   if (hasCookie || pathname.startsWith("/billing/login")) return NextResponse.next();

// // // //   const url = req.nextUrl.clone();
// // // //   url.pathname = "/billing/login";
// // // //   url.search = "";
// // // //   return NextResponse.redirect(url);
// // // // }

// // // // export const config = { matcher: ["/billing/:path*"] };



// // // // middleware.ts
// // // import { NextResponse } from "next/server";
// // // import type { NextRequest } from "next/server";

// // // export function middleware(req: NextRequest) {
// // //   const password = process.env.BILLING_PASSWORD;
// // //   const isBillingPage = req.nextUrl.pathname.startsWith("/billing");
// // //   const isLoginPage = req.nextUrl.pathname.startsWith("/billing/login");

// // //   // skip if not a billing route
// // //   if (!isBillingPage && !isLoginPage) return NextResponse.next();

// // //   // check cookie
// // //   const cookie = req.cookies.get("auth");
// // //   if (cookie?.value === password) return NextResponse.next();

// // //   // if not logged in and not on login page, redirect
// // //   if (!isLoginPage) {
// // //     return NextResponse.redirect(new URL("/billing/login", req.url));
// // //   }

// // //   return NextResponse.next();
// // // }

// // // export const config = {
// // //   matcher: ["/billing/:path*"],
// // // };


// // import { NextResponse } from "next/server";
// // import type { NextRequest } from "next/server";

// // export function middleware(req: NextRequest) {
// //   const { pathname } = req.nextUrl;

// //   // Only guard /billing routes; allow /billing/login
// //   if (!pathname.startsWith("/billing")) return NextResponse.next();
// //   if (pathname.startsWith("/billing/login")) return NextResponse.next();

// //   const authed = req.cookies.get("sv_billing_auth")?.value === "1";
// //   if (authed) return NextResponse.next();

// //   const url = req.nextUrl.clone();
// //   url.pathname = "/billing/login";
// //   url.search = "";
// //   return NextResponse.redirect(url);
// // }

// // export const config = { matcher: ["/billing/:path*"] };



// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // Only guard /billing; allow /billing/login to load
//   if (!pathname.startsWith("/billing")) return NextResponse.next();
//   if (pathname.startsWith("/billing/login")) return NextResponse.next();

//   const authed = req.cookies.get("sv_billing_auth")?.value === "1";
//   if (authed) return NextResponse.next();

//   // Not authed → send to login
//   const url = req.nextUrl.clone();
//   url.pathname = "/billing/login";
//   url.search = "";
//   return NextResponse.redirect(url);
// }

// export const config = { matcher: ["/billing/:path*"] };


// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // Only guard /billing; let /billing/login load
//   if (!pathname.startsWith("/billing")) return NextResponse.next();
//   if (pathname.startsWith("/billing/login")) return NextResponse.next();

//   const authed = req.cookies.get("sv_billing_auth")?.value === "1";

//   if (!authed) {
//     // No cookie → go to login
//     const url = req.nextUrl.clone();
//     url.pathname = "/billing/login";
//     url.search = "";
//     return NextResponse.redirect(url);
//   }

//   // Cookie present → allow this one request,
//   // BUT clear it so the next refresh will require login again.
//   const res = NextResponse.next();
//   res.cookies.set({
//     name: "sv_billing_auth",
//     value: "",
//     maxAge: 0,          // expire immediately
//     path: "/",
//     sameSite: "lax",
//     httpOnly: true,
//   });
//   return res;
// }

// export const config = { matcher: ["/billing/:path*"] };





import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/billing")) return NextResponse.next();
  if (pathname.startsWith("/billing/login")) return NextResponse.next();

  const authed = req.cookies.get("sv_auth")?.value === "1";
  if (!authed) {
    const url = req.nextUrl.clone();
    url.pathname = "/billing/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/billing/:path*"],
};
