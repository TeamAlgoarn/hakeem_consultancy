import { jsPDF } from "jspdf";

import type {
  Quotation,
} from "@/lib/billing/types";

import {
  formatDocumentDate,
  formatMoney,
  loadImageAsDataUrl,
  type DocumentBranding,
} from "@/lib/billing/pdf/common";

import type {
  WatermarkRenderer,
} from "@/lib/billing/pdf/watermark";

/* ============================================================
   QUOTATION PDF OPTIONS
   ============================================================ */

export type QuotationPdfOptions = {
  branding?: DocumentBranding;
  watermark?: WatermarkRenderer;
};

/* ============================================================
   PAGE CONSTANTS
   ============================================================ */

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;

const LEFT = 8;
const RIGHT = 202;

const BLACK = [20, 20, 20] as const;
const DARK_GREY = [70, 70, 70] as const;
const LIGHT_GREY = [205, 205, 205] as const;
const GOLD = [184, 138, 85] as const;

/* ============================================================
   QUOTATION LOGO
   ============================================================ */

/*
 * Actual StudyVisum logo.
 *
 * File location:
 * public/studyvisum-logo.gif
 */
const STUDYVISUM_LOGO_PATH =
  "/Studyvisummp4logo (1) (1).gif";

/* ============================================================
   LEGAL ENTITY
   ============================================================ */

const LEGAL_ENTITY_NAME =
  "Hakeem Consultancy Services Private Limited";

const BRAND_OPERATING_LINE =
  'Operating under the brand "StudyVisum"';

const LEGAL_ENTITY_ADDRESS =
  "#301 A Block, Okaz Complex, Mehdipatnam, Hyderabad, India – 500028";

const CONTACT_EMAIL =
  "info@studyvisum.com";

const CONTACT_PHONE =
  "Phone: +91 9704879361";

/* ============================================================
   DECIMAL FORMATTER
   ============================================================ */

function formatDecimal(
  value: number
): string {
  const safeValue =
    Number.isFinite(value)
      ? value
      : 0;

  if (
    Number.isInteger(
      safeValue
    )
  ) {
    return String(
      safeValue
    );
  }

  return safeValue
    .toFixed(4)
    .replace(
      /0+$/,
      ""
    )
    .replace(
      /\.$/,
      ""
    );
}

/* ============================================================
   FOOTER ICONS
   ============================================================ */

const EMAIL_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="64"
     height="64"
     viewBox="0 0 24 24">
  <rect
    x="2"
    y="4"
    width="20"
    height="16"
    rx="1.5"
    fill="#000000"
  />
  <path
    d="M3.3 6L12 12.4L20.7 6"
    fill="none"
    stroke="#ffffff"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;

const PHONE_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="64"
     height="64"
     viewBox="0 0 24 24">
  <path
    fill="#000000"
    d="M6.6 2.5c.6-.2 1.2.1 1.5.7l2.1 4.7c.2.5.1 1-.3 1.4l-1.7 1.6c1.2 2.5 3.3 4.6 5.8 5.8l1.6-1.7c.4-.4.9-.5 1.4-.3l4.7 2.1c.6.3.9.9.7 1.5l-.8 3c-.2.7-.8 1.2-1.6 1.2C10.2 22.5 1.5 13.8 1.5 4c0-.8.5-1.4 1.2-1.6l3.9-.9z"
  />
</svg>
`;

/* ============================================================
   PAGE FRAME
   ============================================================ */

async function drawPageFrame(
  doc: jsPDF,
  logoDataUrl: string | null,
  emailIcon: string | null,
  phoneIcon: string | null,
  watermark?: WatermarkRenderer
): Promise<void> {
  if (watermark) {
    watermark(doc);
  }

  /* ==========================================================
     ACTUAL STUDYVISUM LOGO — TOP LEFT
     ========================================================== */

  /*
   * There is intentionally NO text fallback here.
   *
   * We want only the real StudyVisum logo in the
   * quotation header.
   */
  if (logoDataUrl) {
    try {
      doc.addImage(
        logoDataUrl,
        "PNG",
        LEFT,
        7,
        71,
        14
      );
    } catch (error) {
      console.error(
        "Unable to render StudyVisum quotation logo:",
        error
      );
    }
  }

  /* ==========================================================
     LEGAL ENTITY — TOP RIGHT
     ========================================================== */

  doc.setTextColor(
    ...BLACK
  );

  doc.setFont(
    "times",
    "bold"
  );

  doc.setFontSize(
    12.5
  );

  doc.text(
    LEGAL_ENTITY_NAME,
    RIGHT,
    11.5,
    {
      align: "right",
    }
  );

  doc.setFont(
    "times",
    "normal"
  );

  doc.setFontSize(
    9.5
  );

  doc.text(
    BRAND_OPERATING_LINE,
    RIGHT,
    17.5,
    {
      align: "right",
    }
  );

  /* ==========================================================
     GOLD HEADER LINE
     ========================================================== */

  doc.setDrawColor(
    ...GOLD
  );

  doc.setLineWidth(
    0.8
  );

  doc.line(
    LEFT,
    25,
    RIGHT,
    25
  );

  /* ==========================================================
     FOOTER LINE
     ========================================================== */

  doc.setDrawColor(
    ...LIGHT_GREY
  );

  doc.setLineWidth(
    0.25
  );

  doc.line(
    LEFT,
    277,
    RIGHT,
    277
  );

  /* ==========================================================
     FOOTER ADDRESS
     ========================================================== */

  doc.setFont(
    "times",
    "normal"
  );

  doc.setFontSize(
    8.5
  );

  doc.setTextColor(
    ...BLACK
  );

  doc.text(
    LEGAL_ENTITY_ADDRESS,
    PAGE_WIDTH / 2,
    283,
    {
      align: "center",
    }
  );

  /* ==========================================================
     FOOTER CONTACT
     ========================================================== */

  const contactY =
    289;

  doc.setFont(
    "times",
    "normal"
  );

  doc.setFontSize(
    8.5
  );

  const emailTextWidth =
    doc.getTextWidth(
      CONTACT_EMAIL
    );

  const phoneTextWidth =
    doc.getTextWidth(
      CONTACT_PHONE
    );

  const emailIconSize =
    4.8;

  const phoneIconSize =
    5;

  const iconTextGap =
    1.3;

  const groupGap =
    4;

  const totalContactWidth =
    emailIconSize +
    iconTextGap +
    emailTextWidth +
    groupGap +
    phoneIconSize +
    iconTextGap +
    phoneTextWidth;

  let contactX =
    (
      PAGE_WIDTH -
      totalContactWidth
    ) / 2;

  if (emailIcon) {
    try {
      doc.addImage(
        emailIcon,
        "PNG",
        contactX,
        contactY - 4,
        emailIconSize,
        emailIconSize
      );
    } catch {
      // Non-critical.
    }
  }

  contactX +=
    emailIconSize +
    iconTextGap;

  doc.text(
    CONTACT_EMAIL,
    contactX,
    contactY
  );

  contactX +=
    emailTextWidth +
    groupGap;

  if (phoneIcon) {
    try {
      doc.addImage(
        phoneIcon,
        "PNG",
        contactX,
        contactY - 4.1,
        phoneIconSize,
        phoneIconSize
      );
    } catch {
      // Non-critical.
    }
  }

  contactX +=
    phoneIconSize +
    iconTextGap;

  doc.text(
    CONTACT_PHONE,
    contactX,
    contactY
  );
}

/* ============================================================
   TABLE HEADER
   ============================================================ */

function drawTableHeader(
  doc: jsPDF,
  y: number
): void {
  doc.setDrawColor(
    80,
    80,
    80
  );

  doc.setLineWidth(
    0.22
  );

  doc.line(
    LEFT,
    y - 5,
    RIGHT,
    y - 5
  );

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(
    8
  );

  doc.setTextColor(
    ...DARK_GREY
  );

  doc.text(
    "DESCRIPTION",
    LEFT,
    y
  );

  doc.text(
    "QTY",
    116,
    y,
    {
      align: "right",
    }
  );

  doc.text(
    "RATE",
    140,
    y,
    {
      align: "right",
    }
  );

  doc.text(
    "TAX %",
    162,
    y,
    {
      align: "right",
    }
  );

  doc.text(
    "DISC %",
    181,
    y,
    {
      align: "right",
    }
  );

  doc.text(
    "TOTAL",
    RIGHT,
    y,
    {
      align: "right",
    }
  );

  doc.line(
    LEFT,
    y + 4,
    RIGHT,
    y + 4
  );
}

/* ============================================================
   BUILD QUOTATION PDF
   ============================================================ */

export async function buildQuotationPdf(
  quotation: Quotation,
  options: QuotationPdfOptions = {}
): Promise<jsPDF> {
  /* ==========================================================
     VALIDATION
     ========================================================== */

  if (
    !quotation.clientName?.trim()
  ) {
    throw new Error(
      "Client name is required."
    );
  }

  if (
    !quotation.quotationDate
  ) {
    throw new Error(
      "Quotation date is required."
    );
  }

  if (
    !quotation.validityDate
  ) {
    throw new Error(
      "Validity date is required."
    );
  }

  if (
    !quotation.items?.length
  ) {
    throw new Error(
      "At least one quotation item is required."
    );
  }

  for (
    const item of quotation.items
  ) {
    if (
      !item.description?.trim()
    ) {
      throw new Error(
        "Every quotation item requires a description."
      );
    }
  }

  /* ==========================================================
     LOAD ACTUAL STUDYVISUM LOGO
     ========================================================== */

  /*
   * If a caller explicitly supplies another logo,
   * allow it. Otherwise always use our quotation logo.
   */
  const logoPath =
    options.branding?.logoPath ||
    STUDYVISUM_LOGO_PATH;

  const logoDataUrl =
    await loadImageAsDataUrl(
      logoPath
    );

  if (!logoDataUrl) {
    console.error(
      `StudyVisum logo could not be loaded: ${logoPath}`
    );
  }

  /* ==========================================================
     LOAD FOOTER ICONS
     ========================================================== */

  const emailIcon =
    await loadImageAsDataUrl(
      "data:image/svg+xml;utf8," +
        encodeURIComponent(
          EMAIL_ICON_SVG
        )
    );

  const phoneIcon =
    await loadImageAsDataUrl(
      "data:image/svg+xml;utf8," +
        encodeURIComponent(
          PHONE_ICON_SVG
        )
    );

  /* ==========================================================
     CREATE PDF
     ========================================================== */

  const doc =
    new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    });

  await drawPageFrame(
    doc,
    logoDataUrl,
    emailIcon,
    phoneIcon,
    options.watermark
  );

  /* ==========================================================
     QUOTATION TITLE
     ========================================================== */

  doc.setTextColor(
    ...BLACK
  );

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(
    19
  );

  doc.text(
    "QUOTATION",
    LEFT,
    40
  );

  /* ==========================================================
     QUOTATION META
     ========================================================== */

  const metaLabelX =
    156;

  const metaValueX =
    RIGHT;

  const metaY =
    39;

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(
    9
  );

  doc.setTextColor(
    ...DARK_GREY
  );

  doc.text(
    "Quotation No:",
    metaLabelX,
    metaY
  );

  doc.text(
    "Date:",
    metaLabelX,
    metaY + 6
  );

  doc.text(
    "Valid Until:",
    metaLabelX,
    metaY + 12
  );

  doc.setTextColor(
    ...BLACK
  );

  doc.text(
    quotation.id,
    metaValueX,
    metaY,
    {
      align: "right",
    }
  );

  doc.text(
    formatDocumentDate(
      quotation.quotationDate
    ),
    metaValueX,
    metaY + 6,
    {
      align: "right",
    }
  );

  doc.text(
    formatDocumentDate(
      quotation.validityDate
    ),
    metaValueX,
    metaY + 12,
    {
      align: "right",
    }
  );

  /* ==========================================================
     QUOTATION FOR
     ========================================================== */

  let y: number =
    62;

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(
    9
  );

  doc.setTextColor(
    ...DARK_GREY
  );

  doc.text(
    "QUOTATION FOR",
    LEFT,
    y
  );

  y += 7;

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(
    10.5
  );

  doc.setTextColor(
    ...BLACK
  );

  doc.text(
    quotation.clientName,
    LEFT,
    y
  );

  y += 5.5;

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(
    8.8
  );

  const clientLines = [
    quotation.companyName,

    quotation.contactPerson
      ? `Contact: ${quotation.contactPerson}`
      : undefined,

    quotation.email,

    quotation.phone,
  ].filter(
    Boolean
  ) as string[];

  for (
    const line of clientLines
  ) {
    doc.text(
      line,
      LEFT,
      y
    );

    y += 4.5;
  }

  if (
    quotation.billingAddress
  ) {
    const addressLines =
      doc.splitTextToSize(
        quotation.billingAddress,
        92
      ) as string[];

    doc.text(
      addressLines,
      LEFT,
      y
    );

    y +=
      addressLines.length *
      4.3;
  }

  /* ==========================================================
     TABLE
     ========================================================== */

  y = Math.max(
    y + 10,
    104
  );

  drawTableHeader(
    doc,
    y
  );

  y += 12;

  /* ==========================================================
     CONTINUATION PAGE
     ========================================================== */

  const addContinuationPage =
    async (): Promise<void> => {
      doc.addPage(
        "a4",
        "portrait"
      );

      await drawPageFrame(
        doc,
        logoDataUrl,
        emailIcon,
        phoneIcon,
        options.watermark
      );

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(
        13
      );

      doc.setTextColor(
        ...BLACK
      );

      doc.text(
        `QUOTATION - ${quotation.id}`,
        LEFT,
        40
      );

      y =
        55;

      drawTableHeader(
        doc,
        y
      );

      y +=
        12;
    };

  /* ==========================================================
     ITEMS
     ========================================================== */

  for (
    const item of quotation.items
  ) {
    const descriptionLines =
      doc.splitTextToSize(
        item.description.trim(),
        72
      ) as string[];

    const lineHeight =
      4.2;

    const rowHeight =
      Math.max(
        descriptionLines.length *
          lineHeight,
        6
      ) + 3;

    if (
      y + rowHeight >
      245
    ) {
      await addContinuationPage();
    }

    const quantity =
      Math.max(
        0,
        Number(
          item.quantity
        ) || 0
      );

    const rate =
      Math.max(
        0,
        Number(
          item.rate
        ) || 0
      );

    const taxPercent =
      Math.max(
        0,
        Number(
          item.taxPercent
        ) || 0
      );

    const discountPercent =
      Math.max(
        0,
        Number(
          item.discountPercent
        ) || 0
      );

    const baseAmount =
      quantity *
      rate;

    const discountAmount =
      baseAmount *
      (
        discountPercent /
        100
      );

    const taxableAmount =
      Math.max(
        0,
        baseAmount -
          discountAmount
      );

    const taxAmount =
      taxableAmount *
      (
        taxPercent /
        100
      );

    const lineTotal =
      taxableAmount +
      taxAmount;

    /* DESCRIPTION */

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(
      8.4
    );

    doc.setTextColor(
      ...BLACK
    );

    doc.text(
      descriptionLines,
      LEFT,
      y
    );

    /* QTY */

    doc.text(
      formatDecimal(
        quantity
      ),
      116,
      y,
      {
        align: "right",
      }
    );

    /* RATE */

    doc.text(
      formatMoney(
        rate
      ),
      140,
      y,
      {
        align: "right",
      }
    );

    /* TAX */

    doc.text(
      formatDecimal(
        taxPercent
      ),
      162,
      y,
      {
        align: "right",
      }
    );

    /* DISCOUNT */

    doc.text(
      formatDecimal(
        discountPercent
      ),
      181,
      y,
      {
        align: "right",
      }
    );

    /* TOTAL */

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.text(
      formatMoney(
        lineTotal
      ),
      RIGHT,
      y,
      {
        align: "right",
      }
    );

    y +=
      rowHeight;

    doc.setDrawColor(
      225,
      225,
      225
    );

    doc.setLineWidth(
      0.2
    );

    doc.line(
      LEFT,
      y - 1.5,
      RIGHT,
      y - 1.5
    );
  }

  /* ==========================================================
     TOTALS
     ========================================================== */

  y += 8;

  if (
    y + 45 >
    245
  ) {
    await addContinuationPage();
  }

  const totalsLabelX =
    149;

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(
    9
  );

  doc.setTextColor(
    ...BLACK
  );

  /* SUBTOTAL */

  doc.text(
    "Subtotal",
    totalsLabelX,
    y
  );

  doc.text(
    formatMoney(
      quotation.subtotal
    ),
    RIGHT,
    y,
    {
      align: "right",
    }
  );

  y += 6;

  /* DISCOUNT */

  doc.text(
    "Discount",
    totalsLabelX,
    y
  );

  doc.text(
    formatMoney(
      quotation.discountTotal
    ),
    RIGHT,
    y,
    {
      align: "right",
    }
  );

  y += 6;

  /* TAX */

  doc.text(
    "Tax",
    totalsLabelX,
    y
  );

  doc.text(
    formatMoney(
      quotation.taxTotal
    ),
    RIGHT,
    y,
    {
      align: "right",
    }
  );

  y += 8;

  /* GRAND TOTAL */

  doc.setDrawColor(
    65,
    65,
    65
  );

  doc.setLineWidth(
    0.45
  );

  doc.line(
    totalsLabelX - 7,
    y - 4,
    RIGHT,
    y - 4
  );

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(
    11
  );

  doc.text(
    "Grand Total",
    totalsLabelX,
    y + 2
  );

  doc.text(
    formatMoney(
      quotation.grandTotal
    ),
    RIGHT,
    y + 2,
    {
      align: "right",
    }
  );

  y += 16;

  /* ==========================================================
     NOTES / TERMS
     ========================================================== */

  const drawTextSection =
    async (
      title: string,
      content?: string
    ): Promise<void> => {
      if (
        !content?.trim()
      ) {
        return;
      }

      const lines =
        doc.splitTextToSize(
          content.trim(),
          RIGHT - LEFT
        ) as string[];

      if (
        y + 15 >
        260
      ) {
        doc.addPage(
          "a4",
          "portrait"
        );

        await drawPageFrame(
          doc,
          logoDataUrl,
          emailIcon,
          phoneIcon,
          options.watermark
        );

        y =
          45;
      }

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(
        9
      );

      doc.setTextColor(
        ...BLACK
      );

      doc.text(
        title,
        LEFT,
        y
      );

      y +=
        6;

      doc.setFont(
        "helvetica",
        "normal"
      );

      doc.setFontSize(
        8.5
      );

      for (
        const line of lines
      ) {
        if (
          y + 5 >
          263
        ) {
          doc.addPage(
            "a4",
            "portrait"
          );

          await drawPageFrame(
            doc,
            logoDataUrl,
            emailIcon,
            phoneIcon,
            options.watermark
          );

          y =
            45;

          doc.setFont(
            "helvetica",
            "normal"
          );

          doc.setFontSize(
            8.5
          );

          doc.setTextColor(
            ...BLACK
          );
        }

        doc.text(
          line,
          LEFT,
          y
        );

        y +=
          4.5;
      }

      y +=
        5;
    };

  await drawTextSection(
    "Notes",
    quotation.notes
  );

  await drawTextSection(
    "Terms & Conditions",
    quotation.termsAndConditions
  );

  return doc;
}

/* ============================================================
   DOWNLOAD HELPER
   ============================================================ */

function downloadPdfBlob(
  doc: jsPDF,
  fileName: string
): void {
  const blob =
    doc.output(
      "blob"
    );

  const url =
    URL.createObjectURL(
      blob
    );

  const anchor =
    document.createElement(
      "a"
    );

  anchor.href =
    url;

  anchor.download =
    fileName;

  anchor.style.display =
    "none";

  document.body.appendChild(
    anchor
  );

  anchor.click();

  anchor.remove();

  window.setTimeout(
    () => {
      URL.revokeObjectURL(
        url
      );
    },
    60_000
  );
}

/* ============================================================
   DOWNLOAD QUOTATION
   ============================================================ */

export async function downloadQuotationPdf(
  quotation: Quotation,
  options?: QuotationPdfOptions
): Promise<void> {
  const doc =
    await buildQuotationPdf(
      quotation,
      options
    );

  downloadPdfBlob(
    doc,
    `StudyVisum-Quotation-${quotation.id}.pdf`
  );
}

/* ============================================================
   PREVIEW QUOTATION
   ============================================================ */

export async function previewQuotationPdf(
  quotation: Quotation,
  options?: QuotationPdfOptions
): Promise<void> {
  const previewWindow =
    window.open(
      "",
      "_blank"
    );

  if (
    !previewWindow
  ) {
    throw new Error(
      "The PDF preview was blocked by the browser. Please allow pop-ups for localhost and try again."
    );
  }

  try {
    previewWindow.document.title =
      "Generating Quotation...";

    previewWindow.document.body.innerHTML =
      `
        <div style="
          font-family: Arial, sans-serif;
          display:flex;
          align-items:center;
          justify-content:center;
          min-height:90vh;
          color:#475569;
        ">
          Generating quotation preview...
        </div>
      `;
  } catch {
    // Non-critical.
  }

  try {
    const doc =
      await buildQuotationPdf(
        quotation,
        options
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
  } catch (
    error
  ) {
    previewWindow.close();

    throw error;
  }
}