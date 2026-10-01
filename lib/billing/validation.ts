import type {
  LetterDocument,
  Quotation,
  ValidationError,
  ValidationResult,
} from "@/lib/billing/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;

function toResult(
  errors: ValidationError[]
): ValidationResult {
  return {
    valid: errors.length === 0,
    errors,
  };
}

/* =========================================================
   QUOTATION VALIDATION
========================================================= */

export function validateQuotation(
  quotation: Quotation
): ValidationResult {
  const errors: ValidationError[] = [];

  if (!quotation.clientName.trim()) {
    errors.push({
      field: "clientName",
      message: "Client name is required.",
    });
  }

  if (!quotation.quotationDate) {
    errors.push({
      field: "quotationDate",
      message: "Quotation date is required.",
    });
  }

  if (!quotation.validityDate) {
    errors.push({
      field: "validityDate",
      message: "Validity date is required.",
    });
  }

  if (
    quotation.quotationDate &&
    quotation.validityDate &&
    quotation.validityDate <
      quotation.quotationDate
  ) {
    errors.push({
      field: "validityDate",
      message:
        "Validity date cannot be before quotation date.",
    });
  }

  if (
    quotation.email &&
    !EMAIL_REGEX.test(
      quotation.email.trim()
    )
  ) {
    errors.push({
      field: "email",
      message:
        "Please enter a valid email address.",
    });
  }

  if (
    quotation.phone &&
    !PHONE_REGEX.test(
      quotation.phone.trim()
    )
  ) {
    errors.push({
      field: "phone",
      message:
        "Phone number must contain exactly 10 digits.",
    });
  }

  if (
    quotation.items.length === 0
  ) {
    errors.push({
      field: "items",
      message:
        "At least one quotation item is required.",
    });
  }

  quotation.items.forEach(
    (item, index) => {
      const prefix =
        `items.${index}`;

      if (
        !item.description.trim()
      ) {
        errors.push({
          field:
            `${prefix}.description`,
          message:
            `Item ${index + 1}: description is required.`,
        });
      }

      if (
        !Number.isFinite(
          item.quantity
        ) ||
        item.quantity <= 0
      ) {
        errors.push({
          field:
            `${prefix}.quantity`,
          message:
            `Item ${index + 1}: quantity must be greater than zero.`,
        });
      }

      if (
        !Number.isFinite(
          item.rate
        ) ||
        item.rate < 0
      ) {
        errors.push({
          field:
            `${prefix}.rate`,
          message:
            `Item ${index + 1}: rate must be zero or greater.`,
        });
      }

      if (
        !Number.isFinite(
          item.taxPercent
        ) ||
        item.taxPercent < 0 ||
        item.taxPercent > 100
      ) {
        errors.push({
          field:
            `${prefix}.taxPercent`,
          message:
            `Item ${index + 1}: tax percentage must be between 0 and 100.`,
        });
      }

      if (
        !Number.isFinite(
          item.discountPercent
        ) ||
        item.discountPercent < 0 ||
        item.discountPercent > 100
      ) {
        errors.push({
          field:
            `${prefix}.discountPercent`,
          message:
            `Item ${index + 1}: discount percentage must be between 0 and 100.`,
        });
      }
    }
  );

  return toResult(errors);
}

/* =========================================================
   LETTER VALIDATION
========================================================= */

export function validateLetterDocument(
  letter: LetterDocument
): ValidationResult {
  const errors: ValidationError[] = [];

  if (
    !letter.recipientName.trim()
  ) {
    errors.push({
      field: "recipientName",
      message:
        "Recipient name is required.",
    });
  }

  if (
    !letter.organization?.trim()
  ) {
    errors.push({
      field: "organization",
      message:
        "Organization / company is required.",
    });
  }

  if (
    !letter.recipientAddress?.trim()
  ) {
    errors.push({
      field: "recipientAddress",
      message:
        "Recipient address is required.",
    });
  }

  if (!letter.date) {
    errors.push({
      field: "date",
      message:
        "Letter date is required.",
    });
  }

  if (
    !letter.subject.trim()
  ) {
    errors.push({
      field: "subject",
      message:
        "Subject is required.",
    });
  }

  /*
   * Reference number is optional.
   * No validation error is added if it is blank.
   */

  if (
    !letter.body.trim()
  ) {
    errors.push({
      field: "body",
      message:
        "Letter body is required.",
    });
  }

  return toResult(errors);
}