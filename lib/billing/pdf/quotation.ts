import { jsPDF } from "jspdf";

import type {
  Quotation,
} from "@/lib/billing/types";

import {
  CURRENT_STUDYVISUM_BRANDING,
  PDF_PAGE,
  drawFooter,
  formatDocumentDate,
  formatMoney,
  hasPageSpace,
  loadImageAsDataUrl,
  type DocumentBranding,
} from "@/lib/billing/pdf/common";

import type {
  WatermarkRenderer,
} from "@/lib/billing/pdf/watermark";

export type QuotationPdfOptions = {
  branding?: DocumentBranding;
  watermark?: WatermarkRenderer;
};

async function drawPageFrame(
  doc: jsPDF,
  branding: DocumentBranding,
  logoDataUrl: string | null,
  watermark?: WatermarkRenderer
): Promise<void> {
  const {
    width,
    marginLeft,
    marginRight,
  } = PDF_PAGE;

  if (watermark) {
    watermark(doc);
  }

  if (logoDataUrl) {
    try {
      doc.addImage(
        logoDataUrl,
        "PNG",
        marginLeft,
        14,
        48,
        14
      );
    } catch {
      /*
       * Fall through to the text company name.
       */
    }
  }

  if (!logoDataUrl) {
    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(18);

    doc.setTextColor(
      25,
      25,
      25
    );

    doc.text(
      branding.companyName,
      marginLeft,
      24
    );
  }

  doc.setDrawColor(
    184,
    138,
    85
  );

  doc.setLineWidth(
    0.7
  );

  doc.line(
    marginLeft,
    34,
    width -
      marginRight,
    34
  );

  drawFooter(
    doc,
    branding
  );
}

export async function buildQuotationPdf(
  quotation: Quotation,
  options: QuotationPdfOptions = {}
): Promise<jsPDF> {
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

  const branding =
    options.branding ??
    CURRENT_STUDYVISUM_BRANDING;

  const doc =
    new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    });

  const {
    width,
    marginLeft,
    marginRight,
    contentTop,
  } = PDF_PAGE;

  const right =
    width -
    marginRight;

  const logoDataUrl =
    await loadImageAsDataUrl(
      branding.logoPath
    );

  const addFreshPage =
    async () => {
      doc.addPage(
        "a4",
        "portrait"
      );

      await drawPageFrame(
        doc,
        branding,
        logoDataUrl,
        options.watermark
      );

      return contentTop;
    };

  await drawPageFrame(
    doc,
    branding,
    logoDataUrl,
    options.watermark
  );

  let y =
    contentTop;

  /* ----------------------------------------
     QUOTATION TITLE / META
  ----------------------------------------- */

  doc.setTextColor(
    25,
    25,
    25
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
    marginLeft,
    y
  );

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(
    9.5
  );

  doc.text(
    `Quotation No: ${quotation.id}`,
    right,
    y,
    {
      align: "right",
    }
  );

  y += 6;

  doc.text(
    `Date: ${formatDocumentDate(
      quotation.quotationDate
    )}`,
    right,
    y,
    {
      align: "right",
    }
  );

  y += 5;

  doc.text(
    `Valid Until: ${formatDocumentDate(
      quotation.validityDate
    )}`,
    right,
    y,
    {
      align: "right",
    }
  );

  y += 12;

  /* ----------------------------------------
     CLIENT INFORMATION
  ----------------------------------------- */

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(
    9
  );

  doc.setTextColor(
    120,
    120,
    120
  );

  doc.text(
    "QUOTATION FOR",
    marginLeft,
    y
  );

  y += 6;

  doc.setTextColor(
    25,
    25,
    25
  );

  doc.setFontSize(
    11
  );

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.text(
    quotation.clientName,
    marginLeft,
    y
  );

  y += 5;

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(
    9.5
  );

  const clientLines =
    [
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
    const line
    of clientLines
  ) {
    doc.text(
      line,
      marginLeft,
      y
    );

    y += 5;
  }

  if (
    quotation.billingAddress
  ) {
    const addressLines =
      doc.splitTextToSize(
        quotation.billingAddress,
        90
      ) as string[];

    doc.text(
      addressLines,
      marginLeft,
      y
    );

    y +=
      addressLines.length *
      4.5;
  }

  y += 8;

  /* ----------------------------------------
     ITEMS TABLE
  ----------------------------------------- */

  const columns = {
    description:
      marginLeft,

    quantity:
      right - 76,

    rate:
      right - 54,

    tax:
      right - 33,

    discount:
      right - 16,

    total:
      right,
  };

  const drawTableHeader =
    () => {
      doc.setDrawColor(
        175
      );

      doc.setLineWidth(
        0.25
      );

      doc.line(
        marginLeft,
        y - 4,
        right,
        y - 4
      );

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(
        8
      );

      doc.setTextColor(
        70,
        70,
        70
      );

      doc.text(
        "DESCRIPTION",
        columns.description,
        y
      );

      doc.text(
        "QTY",
        columns.quantity,
        y,
        {
          align: "right",
        }
      );

      doc.text(
        "RATE",
        columns.rate,
        y,
        {
          align: "right",
        }
      );

      doc.text(
        "TAX %",
        columns.tax,
        y,
        {
          align: "right",
        }
      );

      doc.text(
        "DISC %",
        columns.discount,
        y,
        {
          align: "right",
        }
      );

      doc.text(
        "TOTAL",
        columns.total,
        y,
        {
          align: "right",
        }
      );

      y += 4;

      doc.line(
        marginLeft,
        y,
        right,
        y
      );

      y += 6;
    };

  drawTableHeader();

  for (
    const item
    of quotation.items
  ) {
    if (
      !item.description
        ?.trim()
    ) {
      throw new Error(
        "Every quotation item requires a description."
      );
    }

    const descriptionLines =
      doc.splitTextToSize(
        item.description,
        68
      ) as string[];

    const lineHeight =
      4.5;

    const rowHeight =
      Math.max(
        descriptionLines.length *
          lineHeight,
        8
      ) +
      3;

    if (
      !hasPageSpace(
        y,
        rowHeight
      )
    ) {
      y =
        await addFreshPage();

      drawTableHeader();
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

    const discountPercent =
      Math.max(
        0,
        Number(
          item.discountPercent
        ) || 0
      );

    const taxPercent =
      Math.max(
        0,
        Number(
          item.taxPercent
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

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(
      8.8
    );

    doc.setTextColor(
      25,
      25,
      25
    );

    doc.text(
      descriptionLines,
      columns.description,
      y
    );

    doc.text(
      String(
        quantity
      ),
      columns.quantity,
      y,
      {
        align: "right",
      }
    );

    doc.text(
      formatMoney(
        rate
      ),
      columns.rate,
      y,
      {
        align: "right",
      }
    );

    doc.text(
      String(
        taxPercent
      ),
      columns.tax,
      y,
      {
        align: "right",
      }
    );

    doc.text(
      String(
        discountPercent
      ),
      columns.discount,
      y,
      {
        align: "right",
      }
    );

    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.text(
      formatMoney(
        lineTotal
      ),
      columns.total,
      y,
      {
        align: "right",
      }
    );

    y += rowHeight;

    doc.setDrawColor(
      225
    );

    doc.setLineWidth(
      0.2
    );

    doc.line(
      marginLeft,
      y - 2,
      right,
      y - 2
    );
  }

  y += 7;

  /* ----------------------------------------
     TOTALS
  ----------------------------------------- */

  if (
    !hasPageSpace(
      y,
      34
    )
  ) {
    y =
      await addFreshPage();
  }

  const labelX =
    right - 48;

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(
    9
  );

  doc.setTextColor(
    25,
    25,
    25
  );

  doc.text(
    "Subtotal",
    labelX,
    y
  );

  doc.text(
    formatMoney(
      quotation.subtotal
    ),
    right,
    y,
    {
      align: "right",
    }
  );

  y += 6;

  doc.text(
    "Discount",
    labelX,
    y
  );

  doc.text(
    formatMoney(
      quotation.discountTotal
    ),
    right,
    y,
    {
      align: "right",
    }
  );

  y += 6;

  doc.text(
    "Tax",
    labelX,
    y
  );

  doc.text(
    formatMoney(
      quotation.taxTotal
    ),
    right,
    y,
    {
      align: "right",
    }
  );

  y += 7;

  doc.setDrawColor(
    60
  );

  doc.setLineWidth(
    0.5
  );

  doc.line(
    labelX - 6,
    y - 3,
    right,
    y - 3
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
    labelX,
    y + 3
  );

  doc.text(
    formatMoney(
      quotation.grandTotal
    ),
    right,
    y + 3,
    {
      align: "right",
    }
  );

  y += 16;

  /* ----------------------------------------
     NOTES / TERMS
  ----------------------------------------- */

  const drawTextSection =
    async (
      title: string,
      content?: string
    ) => {
      if (
        !content?.trim()
      ) {
        return;
      }

      const lines =
        doc.splitTextToSize(
          content.trim(),
          right -
            marginLeft
        ) as string[];

      const lineHeight =
        4.5;

      if (
        !hasPageSpace(
          y,
          12
        )
      ) {
        y =
          await addFreshPage();
      }

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(
        9.5
      );

      doc.setTextColor(
        25,
        25,
        25
      );

      doc.text(
        title,
        marginLeft,
        y
      );

      y += 6;

      doc.setFont(
        "helvetica",
        "normal"
      );

      doc.setFontSize(
        9
      );

      for (
        const line
        of lines
      ) {
        if (
          !hasPageSpace(
            y,
            lineHeight
          )
        ) {
          y =
            await addFreshPage();

          doc.setFont(
            "helvetica",
            "normal"
          );

          doc.setFontSize(
            9
          );

          doc.setTextColor(
            25,
            25,
            25
          );
        }

        doc.text(
          line,
          marginLeft,
          y
        );

        y +=
          lineHeight;
      }

      y += 5;
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

/*
 * Reliable browser download helper.
 *
 * We deliberately use a Blob + temporary anchor
 * instead of relying only on jsPDF.save() after
 * asynchronous image/PDF generation.
 */
function downloadPdfBlob(
  doc: jsPDF,
  fileName: string
) {
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

/*
 * IMPORTANT:
 *
 * Opening the blank tab happens BEFORE any await.
 *
 * This preserves the original browser user gesture
 * and prevents Chrome from treating the completed
 * PDF preview as an unsolicited popup.
 */
export async function previewQuotationPdf(
  quotation: Quotation,
  options?: QuotationPdfOptions
): Promise<void> {
  const previewWindow =
    window.open(
      "",
      "_blank"
    );

  if (!previewWindow) {
    throw new Error(
      "The PDF preview was blocked by the browser. Please allow pop-ups for localhost and try again."
    );
  }

  /*
   * Give immediate feedback while the PDF builds.
   */
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

    /*
     * Navigate the already-authorized browser tab
     * to the generated PDF.
     */
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