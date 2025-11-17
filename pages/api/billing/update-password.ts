import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
      process.env.SUPABASE_SERVICE_ROLE_KEY! // service role – required
    );

    // 1️⃣ Exchange token for a real session (v2 accepts ONLY a string)
    const { data: sessionData, error: exchangeError } =
      await supabase.auth.exchangeCodeForSession(accessToken);

    if (exchangeError || !sessionData?.session) {
      console.error("exchangeCodeForSession error:", exchangeError);
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const userAccessToken = sessionData.session.access_token;

    // 2️⃣ Update password (v2 syntax)
    const { data, error: updateError } = await supabase.auth.updateUser(
      {
        password: newPassword,
      },
      {
        accessToken: userAccessToken,
      }
    );

    if (updateError) {
      console.error("Password update error:", updateError);
      return res.status(400).json({ message: updateError.message });
    }

    return res.status(200).json({ message: "Password reset successful" });
  } catch (err: any) {
    console.error("Server error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
