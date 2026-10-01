export type LetterType =
  | "unofficial"
  | "official";

export type QuotationItem = {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  taxPercent: number;
  discountPercent: number;
};

export type QuotationTotals = {
  subtotal: number;
  discountTotal: number;
  taxableAmount: number;
  taxTotal: number;
  grandTotal: number;
};

export type Quotation = {
  id: string;

  clientName: string;
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
  billingAddress?: string;

  quotationDate: string;
  validityDate: string;

  items: QuotationItem[];

  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  grandTotal: number;

  notes?: string;
  termsAndConditions?: string;

  createdAt: string;
  updatedAt: string;
};

export type LetterDocument = {
  id: string;
  type: LetterType;

  recipientName: string;

  /*
   * Required by the current form/validation.
   * Kept optional at type level for backward compatibility
   * with any older saved localStorage records.
   */
  organization?: string;
  recipientAddress?: string;

  date: string;
  subject: string;

  /*
   * Business reference is optional.
   * Internal LH-YYYY-### ID remains mandatory.
   */
  referenceNumber?: string;

  body: string;

  /*
   * Official-letter authorization options.
   *
   * Optional here so older saved records continue
   * to load safely.
   *
   * Missing values are treated as false.
   */
  includeSignature?: boolean;
  includeStamp?: boolean;

  createdAt: string;
  updatedAt: string;
};

export type ValidationError = {
  field: string;
  message: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: ValidationError[];
};