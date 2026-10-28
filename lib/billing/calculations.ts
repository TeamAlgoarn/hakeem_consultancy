import type {
  QuotationItem,
  QuotationTotals,
} from "@/lib/billing/types";

const roundMoney = (value: number): number =>
  Math.round((value + Number.EPSILON) * 100) / 100;

const safeNumber = (value: number): number =>
  Number.isFinite(value) ? value : 0;

export function calculateQuotationTotals(
  items: QuotationItem[]
): QuotationTotals {
  let subtotal = 0;
  let discountTotal = 0;
  let taxTotal = 0;

  for (const item of items) {
    const quantity = Math.max(0, safeNumber(item.quantity));
    const rate = Math.max(0, safeNumber(item.rate));
    const discountPercent = Math.max(
      0,
      safeNumber(item.discountPercent)
    );
    const taxPercent = Math.max(0, safeNumber(item.taxPercent));

    const baseAmount = roundMoney(quantity * rate);

    const discountAmount = roundMoney(
      baseAmount * (discountPercent / 100)
    );

    const taxableAmount = roundMoney(
      Math.max(0, baseAmount - discountAmount)
    );

    const taxAmount = roundMoney(
      taxableAmount * (taxPercent / 100)
    );

    subtotal = roundMoney(subtotal + baseAmount);
    discountTotal = roundMoney(
      discountTotal + discountAmount
    );
    taxTotal = roundMoney(taxTotal + taxAmount);
  }

  const taxableAmount = roundMoney(
    Math.max(0, subtotal - discountTotal)
  );

  const grandTotal = roundMoney(
    taxableAmount + taxTotal
  );

  return {
    subtotal,
    discountTotal,
    taxableAmount,
    taxTotal,
    grandTotal,
  };
}