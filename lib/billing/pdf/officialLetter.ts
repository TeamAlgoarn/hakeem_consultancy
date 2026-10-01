import { jsPDF } from "jspdf";

import type {
  LetterDocument,
} from "@/lib/billing/types";

type OfficialTemplateVariant =
  | "none"
  | "signature"
  | "stamp"
  | "signature-stamp";

type AssetData = {
  dataUrl: string;
  format: "PNG" | "JPEG";
};

function getOfficialTemplateVariant(
  letter: LetterDocument
): OfficialTemplateVariant {
  const hasSignature = Boolean(letter.includeSignature);
  const hasStamp = Boolean(letter.includeStamp);

  if (hasSignature && hasStamp) {
    return "signature-stamp";
  }

  if (hasSignature) {
    return "signature";
  }

  if (hasStamp) {
    return "stamp";
  }

  return "none";
}

function getTemplateEndpoint(
  variant: OfficialTemplateVariant
): string {
  return (
    "/api/billing/official-assets/template" +
    `?variant=${encodeURIComponent(variant)}`
  );
}

async function fetchImageAsDataUrl(
  url: string
): Promise<AssetData> {
  const response = await fetch(url, {
    method: "GET",
    credentials: "same-origin",
    cache: "no-store",
  });

  if (!response.ok) {
    let message = `Unable to load protected asset (${response.status}).`;

    try {
      const data = await response.json();

      if (data?.message) {
        message = String(data.message);
      } else if (data?.error) {
        message = String(data.error);
      }
    } catch {
      // Keep the default message.
    }

    throw new Error(message);
  }

  const blob = await response.blob();

  const format: "PNG" | "JPEG" =
    blob.type.includes("jpeg") ||
    blob.type.includes("jpg")
      ? "JPEG"
      : "PNG";

  const dataUrl = await new Promise<string>(
    (resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () =>
        resolve(String(reader.result));

      reader.onerror = () =>
        reject(
          new Error(
            "Unable to read the protected Official Letter template."
          )
        );

      reader.readAsDataURL(blob);
    }
  );

  return {
    dataUrl,
    format,
  };
}

function assertOfficialLetter(
  letter: LetterDocument
): void {
  if (letter.type !== "official") {
    throw new Error(
      "Only Official Letters can use the Official Letter PDF generator."
    );
  }

  if (!letter.recipientName?.trim()) {
    throw new Error(
      "Recipient name is required."
    );
  }

  if (!letter.organization?.trim()) {
    throw new Error(
      "Organization / company is required."
    );
  }

  if (!letter.recipientAddress?.trim()) {
    throw new Error(
      "Recipient address is required."
    );
  }

  if (!letter.date?.trim()) {
    throw new Error(
      "Letter date is required."
    );
  }

  if (!letter.subject?.trim()) {
    throw new Error(
      "Subject is required."
    );
  }

  if (!letter.body?.trim()) {
    throw new Error(
      "Letter body is required."
    );
  }
}

function formatDate(
  value: string
): string {
  if (!value) {
    return "";
  }

  const parts = value.split("-");

  if (parts.length !== 3) {
    return value;
  }

  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function downloadPdfBlob(
  doc: jsPDF,
  filename: string
): void {
  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;

  document.body.appendChild(anchor);

  anchor.click();
  anchor.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 60_000);
}

export async function buildOfficialLetterPdf(
  letter: LetterDocument
): Promise<jsPDF> {
  assertOfficialLetter(letter);

  const variant =
    getOfficialTemplateVariant(letter);

  const template =
    await fetchImageAsDataUrl(
      getTemplateEndpoint(variant)
    );

  const doc = new jsPDF({
    unit: "mm",
    format: "a4",
    orientation: "portrait",
    compress: true,
  });

  const PAGE_WIDTH = 210;
  const PAGE_HEIGHT = 297;

  const BODY_LEFT = 19;
  const BODY_RIGHT = 191;
  const BODY_TOP = 52;

  const hasAuthorizationArtwork =
    variant !== "none";

  const BODY_BOTTOM =
    hasAuthorizationArtwork
      ? 214
      : 242;

  const BODY_WIDTH =
    BODY_RIGHT - BODY_LEFT;

  function drawTemplate() {
    doc.addImage(
      template.dataUrl,
      template.format,
      0,
      0,
      PAGE_WIDTH,
      PAGE_HEIGHT,
      undefined,
      "FAST"
    );
  }


  function startPage() {
  drawTemplate();
}
  startPage();

  let y = BODY_TOP;

  function setBodyFont() {
    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(10);

    doc.setTextColor(
      25,
      25,
      25
    );
  }

  function newPage() {
    doc.addPage(
      "a4",
      "portrait"
    );

    startPage();

    y = BODY_TOP;
  }

  function ensureSpace(
    requiredHeight: number
  ) {
    if (
      y + requiredHeight >
      BODY_BOTTOM
    ) {
      newPage();
    }
  }

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(9);

  doc.setTextColor(
    40,
    40,
    40
  );

  doc.text(
    `Date: ${formatDate(letter.date)}`,
    BODY_RIGHT,
    y,
    {
      align: "right",
    }
  );

  y += 5;

  if (
    letter.referenceNumber?.trim()
  ) {
    doc.text(
      `Ref: ${letter.referenceNumber.trim()}`,
      BODY_RIGHT,
      y,
      {
        align: "right",
      }
    );

    y += 5;
  }

  y += 6;

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(10);

  doc.text(
    "To,",
    BODY_LEFT,
    y
  );

  y += 5;

  doc.setFontSize(10.5);

  doc.text(
    letter.recipientName.trim(),
    BODY_LEFT,
    y
  );

  y += 5;

  setBodyFont();

  const organizationLines =
    doc.splitTextToSize(
      letter.organization?.trim() ?? "",
      BODY_WIDTH * 0.7
    ) as string[];

  doc.text(
    organizationLines,
    BODY_LEFT,
    y
  );

  y +=
    organizationLines.length *
    4.5;

  const addressLines =
    doc.splitTextToSize(
      letter.recipientAddress?.trim() ?? "",
      BODY_WIDTH * 0.7
    ) as string[];

  doc.text(
    addressLines,
    BODY_LEFT,
    y
  );

  y +=
    addressLines.length *
    4.5;

  y += 7;

  ensureSpace(18);

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(10);

  const subjectLines =
    doc.splitTextToSize(
      `Subject: ${letter.subject.trim()}`,
      BODY_WIDTH
    ) as string[];

  doc.text(
    subjectLines,
    BODY_LEFT,
    y
  );

  y +=
    subjectLines.length *
      5 +
    7;

  setBodyFont();

  const paragraphs =
    letter.body
      .split(/\n+/)
      .map(
        (paragraph) =>
          paragraph.trim()
      )
      .filter(Boolean);

  for (
    const paragraph
    of paragraphs
  ) {
    const lines =
      doc.splitTextToSize(
        paragraph,
        BODY_WIDTH
      ) as string[];

    for (
      const line
      of lines
    ) {
      if (
        y + 5 >
        BODY_BOTTOM
      ) {
        newPage();
        setBodyFont();
      }

      doc.text(
        line,
        BODY_LEFT,
        y
      );

      y += 5.1;
    }

    y += 3.5;
  }

  return doc;
}

export async function previewOfficialLetterPdf(
  letter: LetterDocument
): Promise<void> {
  const previewWindow =
    window.open(
      "",
      "_blank"
    );

  if (!previewWindow) {
    throw new Error(
      "Unable to open the Official Letter preview. Please allow pop-ups for this site and try again."
    );
  }

  previewWindow.document.write(
    '<!doctype html><html><head><title>Official Letter Preview</title></head><body style="font-family:Arial,sans-serif;padding:24px">Generating Official Letter preview...</body></html>'
  );

  try {
    const doc =
      await buildOfficialLetterPdf(
        letter
      );

    const blob =
      doc.output(
        "blob"
      );

    const url =
      URL.createObjectURL(
        blob
      );

    previewWindow.location.href =
      url;

    window.setTimeout(
      () => {
        URL.revokeObjectURL(
          url
        );
      },
      60_000
    );
  } catch (error) {
    previewWindow.close();
    throw error;
  }
}

export async function downloadOfficialLetterPdf(
  letter: LetterDocument
): Promise<void> {
  const doc =
    await buildOfficialLetterPdf(
      letter
    );

  downloadPdfBlob(
    doc,
    `StudyVisum-Official-Letter-${letter.id}.pdf`
  );
}
