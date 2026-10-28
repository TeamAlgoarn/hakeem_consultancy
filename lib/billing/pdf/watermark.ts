// lib/billing/pdf/watermark.ts

import type { jsPDF } from "jspdf";

export type WatermarkRenderer = (
  doc: jsPDF
) => void;

export type TextWatermarkOptions = {
  text: string;
  fontSize?: number;
  angle?: number;
};

export function createTextWatermark(
  options: TextWatermarkOptions
): WatermarkRenderer {
  return (doc) => {
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    doc.saveGraphicsState();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(options.fontSize ?? 42);

    // Intentionally very light for readability.
    doc.setTextColor(235, 235, 235);

    doc.text(
      options.text,
      width / 2,
      height / 2,
      {
        align: "center",
        angle: options.angle ?? 35,
      }
    );

    doc.restoreGraphicsState();
  };
}