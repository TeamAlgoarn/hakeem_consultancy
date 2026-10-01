import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import fs from "fs";
import path from "path";

type OfficialTemplateVariant =
  | "none"
  | "signature"
  | "stamp"
  | "signature-stamp";

const TEMPLATE_FILES: Record<
  OfficialTemplateVariant,
  string
> = {
  none:
    "unofficial-letter-template.jpg",

  signature:
    "official-letter-signature.jpg",

  stamp:
    "official-letter-stamp.jpg",

  "signature-stamp":
    "official-letter-signature-stamp.jpg",
};

function isOfficialTemplateVariant(
  value: string
): value is OfficialTemplateVariant {
  return (
    value === "none" ||
    value === "signature" ||
    value === "stamp" ||
    value === "signature-stamp"
  );
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /*
   * Only GET is allowed.
   */
  if (
    req.method !== "GET"
  ) {
    res.setHeader(
      "Allow",
      "GET"
    );

    return res
      .status(405)
      .json({
        message:
          "Method not allowed.",
      });
  }

  /*
   * Existing billing authentication.
   *
   * This currently checks for the billing_auth
   * cookie. We can strengthen actual session
   * validation during the final security review.
   */
  const billingAuth =
    req.cookies.billing_auth;

  if (!billingAuth) {
    return res
      .status(401)
      .json({
        message:
          "Unauthorized.",
      });
  }

  /*
   * Read the requested official template variant.
   *
   * Example:
   * /api/billing/official-assets/template?variant=signature
   */
  const rawVariant =
    Array.isArray(
      req.query.variant
    )
      ? req.query.variant[0]
      : req.query.variant;

  /*
   * Default to the safest Official variant:
   * no signature and no stamp.
   */
  const variant =
    rawVariant?.trim() ||
    "none";

  if (
    !isOfficialTemplateVariant(
      variant
    )
  ) {
    return res
      .status(400)
      .json({
        message:
          "Invalid Official Letter template variant.",
      });
  }

  const filename =
    TEMPLATE_FILES[
      variant
    ];

  /*
   * Assets stay outside /public.
   */
  const templatePath =
    path.join(
      process.cwd(),
      "private",
      "billing-assets",
      filename
    );

  /*
   * Do not expose the actual server path
   * if an asset is missing.
   */
  if (
    !fs.existsSync(
      templatePath
    )
  ) {
    return res
      .status(404)
      .json({
        message:
          `Official Letter template '${variant}' is not configured.`,
      });
  }

  try {
    const fileBuffer =
      fs.readFileSync(
        templatePath
      );

    /*
     * Protected document assets must not
     * be publicly cached.
     */
    res.setHeader(
      "Cache-Control",
      "private, no-store, no-cache, must-revalidate"
    );

    res.setHeader(
      "Pragma",
      "no-cache"
    );

    res.setHeader(
      "Expires",
      "0"
    );

    res.setHeader(
      "Content-Type",
      "image/jpeg"
    );

    res.setHeader(
      "Content-Disposition",
      `inline; filename="studyvisum-official-${variant}.jpg"`
    );

    res.setHeader(
      "Content-Length",
      fileBuffer.length.toString()
    );

    return res
      .status(200)
      .send(
        fileBuffer
      );
  } catch {
    return res
      .status(500)
      .json({
        message:
          "Unable to load the Official Letter template.",
      });
  }
}