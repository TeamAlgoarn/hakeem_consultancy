import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { accessToken, newPassword } = req.body;

  if (!accessToken || !newPassword) {
    return res.status(400).json({ message: "Missing accessToken or newPassword" });
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY! // service role required
    );

    // 1️⃣ Exchange token → session
    const { data: sessionData, error: sessionErr } =
      await supabase.auth.exchangeCodeForSession(accessToken);

    if (sessionErr || !sessionData?.session?.access_token) {
      console.error("exchangeCodeForSession error:", sessionErr);
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const userAccessToken = sessionData.session.access_token;

    // 2️⃣ Update password using v0 API
    const { data: updateData, error: updateErr } =
      await supabase.auth.api.updateUser(userAccessToken, {
        password: newPassword,
      });

    if (updateErr) {
      console.error("Password update error:", updateErr);
      return res.status(400).json({ message: updateErr.message });
    }

    return res.status(200).json({ message: "Password reset successful" });
  } catch (err: any) {
    console.error("Server error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
