// // // // import type { NextApiRequest, NextApiResponse } from "next";

// // // // export default function handler(req: NextApiRequest, res: NextApiResponse) {
// // // //   if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

// // // //   const { password } = req.body || {};
// // // //   if (!password || password !== process.env.BILLING_PASSWORD) {
// // // //     return res.status(401).json({ ok: false, message: "Invalid password" });
// // // //   }

// // // //   res.setHeader("Set-Cookie", [
// // // //     `sv_billing_auth=1; HttpOnly; Path=/; Max-Age=${60 * 60 * 12}; SameSite=Lax; Secure`,
// // // //   ]);
// // // //   return res.status(200).json({ ok: true });
// // // // }

// // // import type { NextApiRequest, NextApiResponse } from "next";

// // // export default function handler(req: NextApiRequest, res: NextApiResponse) {
// // //   if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

// // //   const { password } = req.body || {};
// // //   if (!password || password !== process.env.BILLING_PASSWORD) {
// // //     return res.status(401).json({ ok: false, message: "Invalid password" });
// // //   }

// // //   const isProd = process.env.NODE_ENV === "production";
// // //   const cookie =
// // //     `sv_billing_auth=1; HttpOnly; Path=/; Max-Age=${60 * 60 * 12}; SameSite=Lax` +
// // //     (isProd ? `; Secure` : ``);

// // //   res.setHeader("Set-Cookie", cookie);
// // //   return res.status(200).json({ ok: true });
// // // }


// // import type { NextApiRequest, NextApiResponse } from "next";

// // export default function handler(req: NextApiRequest, res: NextApiResponse) {
// //   if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

// //   const { password } = req.body || {};
// //   if (!password || password !== process.env.BILLING_PASSWORD) {
// //     return res.status(401).json({ ok: false, message: "Invalid password" });
// //   }

// //   const isProd = process.env.NODE_ENV === "production";
// //   const cookie =
// //     `sv_billing_auth=1; HttpOnly; Path=/; Max-Age=${60 * 60 * 12}; SameSite=Lax` +
// //     (isProd ? `; Secure` : ``); // Secure only in production

// //   res.setHeader("Set-Cookie", cookie);
// //   return res.status(200).json({ ok: true });
// // }



// // pages/api/billing/login.ts
// // import type { NextApiRequest, NextApiResponse } from "next";

// // export default function handler(req: NextApiRequest, res: NextApiResponse) {
// //   if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

// //   const { password } = req.body || {};
// //   if (!password || password !== process.env.BILLING_PASSWORD) {
// //     return res.status(401).json({ ok: false, message: "Invalid password" });
// //   }

// //   const isProd = process.env.NODE_ENV === "production";
// //   const cookie =
// //     `sv_billing_auth=1; HttpOnly; Path=/; SameSite=Lax` + (isProd ? `; Secure` : ``);

// //   res.setHeader("Set-Cookie", cookie);
// //   return res.status(200).json({ ok: true });
// // }

// import type { NextApiRequest, NextApiResponse } from "next";
// import cookie from "cookie";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") return res.status(405).json({ ok: false });
 
//   const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
//   const password = (body.password ?? "").toString();
 
//   if (password !== process.env.BILLING_PASSWORD) {
//     return res.status(401).json({ ok: false, message: "Invalid password" });
//   }
 
//   res.setHeader(
//     "Set-Cookie",
//     cookie.serialize("sv_auth", "1", {
//       path: "/",                                // important
//       httpOnly: true,
//       sameSite: "lax",
//       secure: process.env.NODE_ENV === "production",
//       maxAge: 60 * 60 * 8,                      // 8 hours
//     })
//   );
//   return res.status(200).json({ ok: true });
// }



import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';
import cookie from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body as { email?: string; password?: string };

  console.log('API /billing/login called with:', email);

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Supabase email/password sign in
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    console.error('Supabase login error:', error);
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Put access token in a simple cookie (for middleware billing protection)
  const token = data.session.access_token;

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('billing_auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
    })
  );

  return res.status(200).json({ message: 'OK' });
}

