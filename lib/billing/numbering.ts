const QUOTATION_COUNTER_KEY = "sv_quotation_counter";
const LETTER_COUNTER_KEY = "sv_letter_counter";
function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function getYear(date = new Date()): number {
  return date.getFullYear();
}

function parseSequence(
  id: string,
  prefix: string,
  year: number
): number | null {
  const pattern = new RegExp(`^${prefix}-${year}-(\\d+)$`);
  const match = id.match(pattern);

  if (!match) {
    return null;
  }

  const value = Number(match[1]);

  return Number.isFinite(value) ? value : null;
}

function getHighestExistingSequence(
  existingIds: string[],
  prefix: string,
  date = new Date()
): number {
  const year = getYear(date);

  let highest = 0;

  for (const id of existingIds) {
    const sequence = parseSequence(id, prefix, year);

    if (sequence !== null && sequence > highest) {
      highest = sequence;
    }
  }

  return highest;
}

function readCounter(key: string): number {
  if (!isBrowser()) {
    return 0;
  }

  const raw = window.localStorage.getItem(key);
  const value = Number(raw);

  return Number.isFinite(value) && value >= 0
    ? value
    : 0;
}

function writeCounter(
  key: string,
  value: number
): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(
    key,
    String(value)
  );
}

function formatDocumentId(
  prefix: string,
  sequence: number,
  date = new Date()
): string {
  return `${prefix}-${getYear(date)}-${String(
    sequence
  ).padStart(3, "0")}`;
}

export function getNextQuotationId(
  existingIds: string[],
  date = new Date()
): string {
  const existingHighest =
    getHighestExistingSequence(
      existingIds,
      "QT",
      date
    );

  const storedCounter =
    readCounter(QUOTATION_COUNTER_KEY);

  const next =
    Math.max(
      existingHighest,
      storedCounter
    ) + 1;

  return formatDocumentId(
    "QT",
    next,
    date
  );
}

export function commitQuotationId(
  quotationId: string
): void {
  if (!isBrowser()) {
    return;
  }

  const year = getYear();
  const sequence = parseSequence(
    quotationId,
    "QT",
    year
  );

  if (sequence === null) {
    return;
  }

  const current =
    readCounter(QUOTATION_COUNTER_KEY);

  if (sequence > current) {
    writeCounter(
      QUOTATION_COUNTER_KEY,
      sequence
    );
  }
}

export function getNextLetterId(
  existingIds: string[],
  date = new Date()
): string {
  const existingHighest =
    getHighestExistingSequence(
      existingIds,
      "LH",
      date
    );

  const storedCounter =
    readCounter(LETTER_COUNTER_KEY);

  const next =
    Math.max(existingHighest, storedCounter) + 1;

  return formatDocumentId(
    "LH",
    next,
    date
  );
}

export function commitLetterId(
  letterId: string
): void {
  if (!isBrowser()) {
    return;
  }

  const year = getYear();

  const sequence = parseSequence(
    letterId,
    "LH",
    year
  );

  if (sequence === null) {
    return;
  }

  const current =
    readCounter(LETTER_COUNTER_KEY);

  if (sequence > current) {
    writeCounter(
      LETTER_COUNTER_KEY,
      sequence
    );
  }
}