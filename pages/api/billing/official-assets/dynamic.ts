import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import fs from "fs";
import path from "path";

type DynamicAsset =
  | "template"
  | "signature"
  | "stamp";

const ASSETS: Record<
  DynamicAsset,
  {
    fileName: string;
    contentType: string;
  }
> = {
  template: {
    fileName:
      "official-letter-template.jpg",
    contentType:
      "image/jpeg",
  },

  signature: {
    fileName:
      "official-letter-signature-only.png",
    contentType:
      "image/png",
  },

  stamp: {
    fileName:
      "official-letter-stamp-only.png",
    contentType:
      "image/png",
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

  const billingAuth =
    req.cookies.billing_auth;

  if (!billingAuth) {
    return res
      .status(401)
      .json({
        error:
          "Unauthorized",
      });
  }

  const asset =
    String(
      req.query.asset ?? ""
    ) as DynamicAsset;

  const config =
    ASSETS[asset];

  if (!config) {
    return res
      .status(400)
      .json({
        error:
          "Invalid official asset.",
      });
  }

  const filePath =
    path.join(
      process.cwd(),
      "private",
      "billing-assets",
      config.fileName
    );

  if (
    !fs.existsSync(
      filePath
    )
  ) {
    return res
      .status(404)
      .json({
        error:
          `Official asset '${asset}' is not configured.`,
      });
  }

  try {
    const file =
      fs.readFileSync(
        filePath
      );

    res.setHeader(
      "Content-Type",
      config.contentType
    );

    res.setHeader(
      "Cache-Control",
      "private, no-store, max-age=0"
    );

    return res
      .status(200)
      .send(file);
  } catch (error) {
    console.error(
      "Unable to load dynamic Official Letter asset:",
      error
    );

    return res
      .status(500)
      .json({
        error:
          "Unable to load Official Letter asset.",
      });
  }
}