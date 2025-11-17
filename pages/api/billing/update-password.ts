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

  // BACKEND CLIENT (service role)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // STEP 1 — Exchange recovery token -> session (v1 syntax)
  const { data: sessionData, error: sessionErr } =
    await supabase.auth.exchangeCodeForSession(accessToken);

  if (sessionErr || !sessionData?.session?.access_token) {
    console.error("exchangeCodeForSession error:", sessionErr);
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  const recoveredAccessToken = sessionData.session.access_token;

  // STEP 2 — Update password (v1 syntax)
  const { data: updateRes, error: updateErr } = await supabase.auth.update(
    {
      password: newPassword,
    },
    {
      accessToken: recoveredAccessToken,
    }
  );

  if (updateErr) {
    console.error("Password update error:", updateErr);
    return res.status(400).json({ message: updateErr.message });
  }

  return res.status(200).json({ message: "Password reset successful" });
}
