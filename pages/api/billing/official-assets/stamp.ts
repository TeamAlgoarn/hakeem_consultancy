import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import fs from "fs";
import path from "path";

function isAuthorizedBillingRequest(
  req: NextApiRequest
): boolean {
  const cookie =
    req.cookies.billing_auth;

  return Boolean(cookie);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader(
      "Allow",
      "GET"
    );

    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  if (
    !isAuthorizedBillingRequest(req)
  ) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  const filePath =
    path.join(
      process.cwd(),
      "private",
      "billing-assets",
      "studyvisum-company-stamp.png"
    );

  if (
    !fs.existsSync(filePath)
  ) {
    return res.status(404).json({
      error:
        "Official company stamp is not configured.",
    });
  }

  const file =
    fs.readFileSync(filePath);

  res.setHeader(
    "Content-Type",
    "image/png"
  );

  res.setHeader(
    "Cache-Control",
    "private, no-store, max-age=0"
  );

  res.setHeader(
    "Content-Disposition",
    'inline; filename="company-stamp.png"'
  );

  return res
    .status(200)
    .send(file);
}