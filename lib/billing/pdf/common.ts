// lib/billing/pdf/common.ts

import { jsPDF } from "jspdf";

export const PDF_PAGE = {
  width: 210,
  height: 297,
  marginLeft: 16,
  marginRight: 16,
  contentTop: 48,
  contentBottom: 272,
  footerTop: 281,
} as const;

export type DocumentBranding = {
  companyName: string;
  logoPath?: string;
  email?: string;
  phone?: string;
  address?: string;
  website?: string;
};

export const CURRENT_STUDYVISUM_BRANDING: DocumentBranding = {
  companyName: "StudyVisum",
  logoPath: "/logo.png",
  email: "info@studyvisum.com",
  phone: "+91 9704879361",
  address:
    "Flat No. 301, A Block, Okaz Complex, Opp. Pillar No. 5, Mehdipatnam, Hyderabad 500028",
  website: "www.studyvisum.com",
};

/**
 * This branding object reflects the values currently used by the live
 * billing implementation. It is intentionally centralized so the final
 * manager-approved values can be replaced in one place.
 */

export async function loadImageAsDataUrl(
  src?: string
): Promise<string | null> {
  if (!src || typeof window === "undefined") {
    return null;
  }

  return new Promise((resolve) => {
    const image = new Image();

    image.crossOrigin = "anonymous";

    image.onload = () => {
      const canvas = document.createElement("canvas");

      canvas.width = image.naturalWidth || image.width;
      canvas.height = image.naturalHeight || image.height;

      const context = canvas.getContext("2d");

      if (!context) {
        resolve(null);
        return;
      }

      context.drawImage(image, 0, 0);

      try {
        resolve(canvas.toDataURL("image/png"));
      } catch {
        resolve(null);
      }
    };

    image.onerror = () => resolve(null);

    image.src = src;
  });
}

export function formatMoney(value: number): string {
  const safeValue = Number.isFinite(value) ? value : 0;

  return safeValue.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatDocumentDate(value: string): string {
  if (!value) {
    return "";
  }

  const parts = value.split("-");

  if (parts.length !== 3) {
    return value;
  }

  const [year, month, day] = parts;

  return `${day}/${month}/${year}`;
}

export function drawFooter(
  doc: jsPDF,
  branding: DocumentBranding
): void {
  const { width, height, marginLeft, marginRight } = PDF_PAGE;

  doc.setDrawColor(210);
  doc.setLineWidth(0.25);

  doc.line(
    marginLeft,
    height - 18,
    width - marginRight,
    height - 18
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(105, 105, 105);

  const contactParts = [
    branding.email,
    branding.phone,
    branding.website,
  ].filter(Boolean);

  if (contactParts.length) {
    doc.text(
      contactParts.join("  |  "),
      width / 2,
      height - 12,
      { align: "center" }
    );
  }

  if (branding.address) {
    const address = doc.splitTextToSize(
      branding.address,
      width - marginLeft - marginRight
    ) as string[];

    doc.text(address, width / 2, height - 8, {
      align: "center",
    });
  }
}

export function hasPageSpace(
  currentY: number,
  requiredHeight: number
): boolean {
  return (
    currentY + requiredHeight <= PDF_PAGE.contentBottom
  );
}