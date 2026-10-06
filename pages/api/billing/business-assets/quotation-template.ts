import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import fs from "fs";
import path from "path";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader(
      "Allow",
      "GET"
    );

    return res
      .status(405)
      .json({
        error: "Method not allowed",
      });
  }

  /*
   * Keep the same billing authentication approach
   * already used by the protected billing assets.
   */
  const billingAuth =
    req.cookies.billing_auth;

  if (!billingAuth) {
    return res
      .status(401)
      .json({
        error: "Unauthorized",
      });
  }

  const filePath =
    path.join(
      process.cwd(),
      "private",
      "billing-assets",
      "business-templates",
      "quotation-template.png"
    );

  if (
    !fs.existsSync(filePath)
  ) {
    return res
      .status(404)
      .json({
        error:
          "Quotation template not found",
      });
  }

  try {
    const fileBuffer =
      fs.readFileSync(
        filePath
      );

    res.setHeader(
      "Content-Type",
      "image/png"
    );

    res.setHeader(
      "Content-Length",
      fileBuffer.length
    );

    res.setHeader(
      "Cache-Control",
      "private, no-store, max-age=0, must-revalidate"
    );

    res.setHeader(
      "Pragma",
      "no-cache"
    );

    res.setHeader(
      "Expires",
      "0"
    );

    return res
      .status(200)
      .send(
        fileBuffer
      );
  } catch (
    error
  ) {
    console.error(
      "Failed to load quotation template:",
      error
    );

    return res
      .status(500)
      .json({
        error:
          "Unable to load quotation template",
      });
  }
}