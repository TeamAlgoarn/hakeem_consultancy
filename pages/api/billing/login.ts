// // // import type { NextApiRequest, NextApiResponse } from "next";

// // // export default function handler(req: NextApiRequest, res: NextApiResponse) {
// // //   if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

// // //   const { password } = req.body || {};
// // //   if (!password || password !== process.env.BILLING_PASSWORD) {
// // //     return res.status(401).json({ ok: false, message: "Invalid password" });
// // //   }

// // //   res.setHeader("Set-Cookie", [
// // //     `sv_billing_auth=1; HttpOnly; Path=/; Max-Age=${60 * 60 * 12}; SameSite=Lax; Secure`,
// // //   ]);
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
// //     (isProd ? `; Secure` : ``);

// //   res.setHeader("Set-Cookie", cookie);
// //   return res.status(200).json({ ok: true });
// // }


// import type { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

//   const { password } = req.body || {};
//   if (!password || password !== process.env.BILLING_PASSWORD) {
//     return res.status(401).json({ ok: false, message: "Invalid password" });
//   }

//   const isProd = process.env.NODE_ENV === "production";
//   const cookie =
//     `sv_billing_auth=1; HttpOnly; Path=/; Max-Age=${60 * 60 * 12}; SameSite=Lax` +
//     (isProd ? `; Secure` : ``); // Secure only in production

//   res.setHeader("Set-Cookie", cookie);
//   return res.status(200).json({ ok: true });
// }



// pages/api/billing/login.ts
// import type { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

//   const { password } = req.body || {};
//   if (!password || password !== process.env.BILLING_PASSWORD) {
//     return res.status(401).json({ ok: false, message: "Invalid password" });
//   }

//   const isProd = process.env.NODE_ENV === "production";
//   const cookie =
//     `sv_billing_auth=1; HttpOnly; Path=/; SameSite=Lax` + (isProd ? `; Secure` : ``);

//   res.setHeader("Set-Cookie", cookie);
//   return res.status(200).json({ ok: true });
// }

import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });
 
  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const password = (body.password ?? "").toString();
 
  if (password !== process.env.BILLING_PASSWORD) {
    return res.status(401).json({ ok: false, message: "Invalid password" });
  }
 
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("sv_auth", "1", {
      path: "/",                                // important
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 8,                      // 8 hours
    })
  );
  return res.status(200).json({ ok: true });
}

