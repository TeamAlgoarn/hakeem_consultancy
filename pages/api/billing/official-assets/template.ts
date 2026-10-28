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

function isAuthorizedBillingRequest(
  req: NextApiRequest
): boolean {
  const cookie =
    req.cookies.billing_auth;

  return Boolean(cookie);
}

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
   * Only GET requests are allowed.
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
        error:
          "Method not allowed",
      });
  }

  /*
   * Existing billing authentication boundary.
   */
  if (
    !isAuthorizedBillingRequest(
      req
    )
  ) {
    return res
      .status(401)
      .json({
        error:
          "Unauthorized",
      });
  }

  /*
   * Read requested variant.
   *
   * Examples:
   * ?variant=none
   * ?variant=signature
   * ?variant=stamp
   * ?variant=signature-stamp
   */
  const rawVariant =
    Array.isArray(
      req.query.variant
    )
      ? req.query.variant[0]
      : req.query.variant;

  /*
   * Default to no signature / no stamp.
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
        error:
          "Invalid Official Letter template variant.",
      });
  }

  const filename =
    TEMPLATE_FILES[
      variant
    ];

  const filePath =
    path.join(
      process.cwd(),
      "private",
      "billing-assets",
      filename
    );

  /*
   * Do not expose server filesystem paths.
   */
  if (
    !fs.existsSync(
      filePath
    )
  ) {
    return res
      .status(404)
      .json({
        error:
          `Official Letter template '${variant}' is not configured.`,
      });
  }

  try {
    const file =
      fs.readFileSync(
        filePath
      );

    res.setHeader(
      "Content-Type",
      "image/jpeg"
    );

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
      "Content-Disposition",
      `inline; filename="studyvisum-official-${variant}.jpg"`
    );

    res.setHeader(
      "Content-Length",
      file.length.toString()
    );

    return res
      .status(200)
      .send(
        file
      );
  } catch {
    return res
      .status(500)
      .json({
        error:
          "Unable to load the Official Letter template.",
      });
  }
}