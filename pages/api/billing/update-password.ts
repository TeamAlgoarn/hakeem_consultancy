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
    return res.status(400).json({ message: "Missing token or password" });
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // STEP 1 — Exchange for session (v1 syntax)
    const { data: sessionData, error: exchangeError } =
      await supabase.auth.api.exchangeCodeForSession(accessToken);

    if (exchangeError || !sessionData?.access_token) {
      console.error("exchangeCodeForSession error:", exchangeError);
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Authenticate super-admin user temporarily
    supabase.auth.setAuth(sessionData.access_token);

    // STEP 2 — Update password
    const { error: updateError } = await supabase.auth.update({
      password: newPassword,
    });

    if (updateError) {
      console.error(updateError);
      return res.status(400).json({ message: "Password update failed" });
    }

    return res.status(200).json({ message: "Password reset successful" });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}
