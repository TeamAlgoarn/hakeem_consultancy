import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { accessToken, newPassword } = req.body;

  if (!accessToken || !newPassword) {
    return res.status(400).json({ message: "Missing token or password" });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // 1️⃣ Exchange recovery token → session
  const { data: sessionRes, error: sessionErr } =
    await supabase.auth.exchangeCodeForSession({
      type: "recovery",
      token: accessToken,
    });

  if (sessionErr || !sessionRes?.session) {
    console.error("Token exchange error:", sessionErr);
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  const access_token = sessionRes.session.access_token;

  // 2️⃣ Update password
  const { error: updateErr } = await supabase.auth.updateUser(
    { password: newPassword },
    { accessToken: access_token }
  );

  if (updateErr) {
    console.error("Password update error:", updateErr);
    return res.status(400).json({ message: updateErr.message });
  }

  return res.status(200).json({ message: "Password reset successful" });
}
