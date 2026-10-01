import type {
  LetterDocument,
  Quotation,
} from "@/lib/billing/types";

const QUOTATIONS_KEY = "sv_quotations";
const LETTER_DOCUMENTS_KEY = "sv_letter_documents";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function safeRead<T>(key: string, fallback: T): T {
  if (!isBrowser()) {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);

    if (!raw) {
      return fallback;
    }

    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function safeWrite<T>(key: string, value: T): void {
  if (!isBrowser()) {
    return;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Unable to write localStorage key "${key}"`, error);
    throw new Error("Unable to save document data in this browser.");
  }
}

export function listQuotations(): Quotation[] {
  const data = safeRead<Quotation[]>(QUOTATIONS_KEY, []);

  return Array.isArray(data) ? data : [];
}

export function getQuotationById(id: string): Quotation | null {
  return listQuotations().find((quotation) => quotation.id === id) ?? null;
}

export function saveQuotation(quotation: Quotation): void {
  const quotations = listQuotations();

  const index = quotations.findIndex(
    (existing) => existing.id === quotation.id
  );

  if (index >= 0) {
    quotations[index] = quotation;
  } else {
    quotations.unshift(quotation);
  }

  safeWrite(QUOTATIONS_KEY, quotations);
}

export function deleteQuotation(id: string): void {
  const quotations = listQuotations().filter(
    (quotation) => quotation.id !== id
  );

  safeWrite(QUOTATIONS_KEY, quotations);
}

export function listLetterDocuments(): LetterDocument[] {
  const data = safeRead<LetterDocument[]>(
    LETTER_DOCUMENTS_KEY,
    []
  );

  return Array.isArray(data) ? data : [];
}

export function getLetterDocumentById(
  id: string
): LetterDocument | null {
  return (
    listLetterDocuments().find(
      (letter) => letter.id === id
    ) ?? null
  );
}

export function saveLetterDocument(
  letter: LetterDocument
): void {
  const letters = listLetterDocuments();

  const index = letters.findIndex(
    (existing) => existing.id === letter.id
  );

  if (index >= 0) {
    letters[index] = letter;
  } else {
    letters.unshift(letter);
  }

  safeWrite(LETTER_DOCUMENTS_KEY, letters);
}

export function deleteLetterDocument(id: string): void {
  const letters = listLetterDocuments().filter(
    (letter) => letter.id !== id
  );

  safeWrite(LETTER_DOCUMENTS_KEY, letters);
}