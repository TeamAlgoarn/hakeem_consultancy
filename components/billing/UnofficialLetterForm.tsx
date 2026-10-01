import { useState } from "react";

import {
  commitLetterId,

  getNextLetterId,
} from "@/lib/billing/numbering";

import {
  downloadUnofficialLetterPdf,

  previewUnofficialLetterPdf,
} from "@/lib/billing/pdf/unofficialLetter";

import {
  downloadOfficialLetterPdf,

  previewOfficialLetterPdf,
} from "@/lib/billing/pdf/officialLetter";

import {
  listLetterDocuments,

  saveLetterDocument,
} from "@/lib/billing/storage";

import type {
  LetterDocument,
} from "@/lib/billing/types";

import {
  validateLetterDocument,
} from "@/lib/billing/validation";

type LetterFormProps = {
  onSaved?: (

    letter: LetterDocument

  ) => void;
};

function todayAsInputDate(): string {
  const date = new Date();

  const offset =

    date.getTimezoneOffset();

  const local =

    new Date(

      date.getTime() -

        offset * 60_000

    );

  return local

    .toISOString()

    .slice(0, 10);
}

export default function UnofficialLetterForm({
  onSaved,
}: LetterFormProps) {
  const [

    recipientName,

    setRecipientName,

  ] = useState("");

  const [

    organization,

    setOrganization,

  ] = useState("");

  const [

    recipientAddress,

    setRecipientAddress,

  ] = useState("");

  const [

    date,

    setDate,

  ] = useState(

    todayAsInputDate()

  );

  const [

    subject,

    setSubject,

  ] = useState("");

  const [

    referenceNumber,

    setReferenceNumber,

  ] = useState("");

  const [

    body,

    setBody,

  ] = useState("");

  const [

    official,

    setOfficial,

  ] = useState(false);

  const [

    includeSignature,

    setIncludeSignature,

  ] = useState(false);

  const [

    includeStamp,

    setIncludeStamp,

  ] = useState(false);

  const [

    errorMessage,

    setErrorMessage,

  ] = useState("");

  const [

    successMessage,

    setSuccessMessage,

  ] = useState("");

  const [

    isProcessing,

    setIsProcessing,

  ] = useState(false);

  const letterType:

    LetterDocument["type"] =

    official

      ? "official"

      : "unofficial";

  const labelClass =

    "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600";

  const fieldClass =

    "input transition duration-150 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

  function resetForm() {
    setRecipientName("");

    setOrganization("");

    setRecipientAddress("");

    setDate(

      todayAsInputDate()

    );

    setSubject("");

    setReferenceNumber("");

    setBody("");

    // Always return to the safer default.

    setOfficial(false);

    setIncludeSignature(false);

    setIncludeStamp(false);

    setErrorMessage("");

  }

  function buildLetter():

    LetterDocument {
    const existing =

      listLetterDocuments();

    const id =

      getNextLetterId(

        existing.map(

          (item) =>

            item.id

        )

      );

    const now =

      new Date()

        .toISOString();

    return {
      id,

      type:

        letterType,

      recipientName:

        recipientName.trim(),

      organization:

        organization.trim() ||

        undefined,

      recipientAddress:

        recipientAddress.trim() ||

        undefined,

      date,

      subject:

        subject.trim(),

      referenceNumber:

        referenceNumber.trim() || undefined,

      body:

        body.trim(),

      includeSignature:

        letterType === "official"

          ? includeSignature

          : false,

      includeStamp:

        letterType === "official"

          ? includeStamp

          : false,

      createdAt: now,

      updatedAt: now,

    };

  }

  function validatedLetter():

    | LetterDocument

    | null {
    setErrorMessage("");

    setSuccessMessage("");

    if (
      official &&
      !includeSignature &&
      !includeStamp
    ) {
      setErrorMessage(
        "Please select at least one Official Letter option: Authorized Signature or Company Stamp."
      );

      return null;
    }

    const letter =

      buildLetter();

    const validation =

      validateLetterDocument(

        letter

      );

    if (

      !validation.valid

    ) {
      setErrorMessage(

        validation.errors

          .map(

            (error) =>

              error.message

          )

          .join(" ")

      );

      return null;

    }

    return letter;

  }

  function confirmOfficial(): boolean {
  if (!official) {
    return true;
  }

  let optionSummary = "";

  if (
    includeSignature &&
    includeStamp
  ) {
    optionSummary =
      "Authorized Signature + Company Stamp";
  } else if (
    includeSignature
  ) {
    optionSummary =
      "Authorized Signature";
  } else if (
    includeStamp
  ) {
    optionSummary =
      "Company Stamp";
  } else {
    setErrorMessage(
      "Please select at least one Official Letter option: Authorized Signature or Company Stamp."
    );

    return false;
  }

  return window.confirm(
    "Generate Official Letter?\n\n" +
      `Selected option: ${optionSummary}.\n\n` +
      "Continue?"
  );
}

  async function handlePreview() {
    if (

      isProcessing

    ) {
      return;

    }

    const letter =

      validatedLetter();

    if (!letter) {
      return;

    }

    if (

      letter.type ===

        "official" &&

      !confirmOfficial()

    ) {
      return;

    }

    setIsProcessing(true);

    try {
      if (

        letter.type ===

        "official"

      ) {
        await previewOfficialLetterPdf(

          letter

        );

      } else {
        await previewUnofficialLetterPdf(

          letter

        );

      }

    } catch (error) {
      setErrorMessage(

        error instanceof Error

          ? error.message

          : "Unable to preview the letter."

      );

    } finally {
      setIsProcessing(false);

    }

  }

  async function handleGeneratePdf() {
    if (

      isProcessing

    ) {
      return;

    }

    const letter =

      validatedLetter();

    if (!letter) {
      return;

    }

    if (

      letter.type ===

        "official" &&

      !confirmOfficial()

    ) {
      return;

    }

    setIsProcessing(true);

    try {
      if (

        letter.type ===

        "official"

      ) {
        await downloadOfficialLetterPdf(

          letter

        );

      } else {
        await downloadUnofficialLetterPdf(

          letter

        );

      }

    } catch (error) {
      setErrorMessage(

        error instanceof Error

          ? error.message

          : "Unable to generate the letter PDF."

      );

    } finally {
      setIsProcessing(false);

    }

  }

  function handleSave() {
    if (

      isProcessing

    ) {
      return;

    }

    const letter =

      validatedLetter();

    if (!letter) {
      return;

    }

    if (

      letter.type ===

        "official" &&

      !window.confirm(

        "Save this as an Official Letter?\n\nThe saved record will be identified as an official StudyVisum document."

      )

    ) {
      return;

    }

    try {
      saveLetterDocument(

        letter

      );

      commitLetterId(

        letter.id

      );

      onSaved?.(letter);

      resetForm();

      setSuccessMessage(

        `${
          letter.type ===

          "official"

            ? "Official"

            : "Unofficial"

        } letter ${letter.id} saved successfully.`

      );

    } catch {
      setErrorMessage(

        "Unable to save the letter. Please try again."

      );

    }

  }

  return (

    <section className="w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.06)]">

      {/* Header */}

      <div className="border-b border-slate-100 bg-gradient-to-r from-white via-white to-amber-50/40 px-6 py-6 sm:px-8">

        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">

          Letter Management

        </span>

        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">

          Create Letter

        </h2>

        <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">

          Create either an unofficial communication or an authorized

          official StudyVisum letter using the approved client templates.

        </p>

      </div>

      <div className="p-6 sm:p-8">

        {/* Messages */}

        {errorMessage && (

          <div

            role="alert"

            className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"

          >

            {errorMessage}

          </div>

        )}

        {successMessage && (

          <div

            role="status"

            className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"

          >

            {successMessage}

          </div>

        )}

        {/* Document Type */}

        <div>

          <div className="mb-4">

            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-800">

              Document Type

            </h3>

            <p className="mt-1 text-xs text-slate-500">

              Unofficial is the default and safest option.

              Enable Official only when formal authorization is required.

            </p>

          </div>

          <div

            className={`rounded-2xl border p-5 transition ${
              official

                ? "border-emerald-200 bg-emerald-50/60"

                : "border-slate-200 bg-slate-50"

            }`}

          >

            <label className="flex cursor-pointer items-start gap-4">

              <input

                type="checkbox"

                checked={
                  official

                }

                onChange={(event) => {
                  const checked = event.target.checked;

                  setOfficial(checked);

                  if (!checked) {
                    setIncludeSignature(false);

                    setIncludeStamp(false);

                  }

                  setErrorMessage("");

                  setSuccessMessage("");

                }}

                className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-emerald-600"

              />

              <div className="min-w-0">

                <span className="block text-sm font-semibold text-slate-900">

                  Generate as Official Letter

                </span>

                <span className="mt-1 block text-xs leading-5 text-slate-500">

                  When enabled, the client-approved Official template is used.

                    Signature and stamp can be selected separately below.

                </span>

              </div>

            </label>

          </div>

          {official ? (

            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-5">

              <div>

                <span className="text-xs font-bold uppercase tracking-[0.1em] text-emerald-700">

                  Official Letter Options

                </span>

                <p className="mt-1 text-sm font-medium text-emerald-900">

                  Select the authorization required for this official letter.

                  Choose a signature, company stamp, or both.

                </p>

                <p className="mt-1 text-xs leading-5 text-emerald-700">

                  At least one option must be selected before an Official Letter

                  can be previewed, generated, or saved.

                </p>

              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-emerald-200 bg-white px-4 py-4 transition hover:border-emerald-300">

                  <input

                    type="checkbox"

                    checked={includeSignature}

                    onChange={(event) => {
                      setIncludeSignature(event.target.checked);

                      setErrorMessage("");

                      setSuccessMessage("");

                    }}

                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-emerald-600"

                  />

                  <span>

                    <span className="block text-sm font-semibold text-slate-900">

                      Include Authorized Signature

                    </span>

                    <span className="mt-1 block text-xs leading-5 text-slate-500">

                      Add the approved authorized signature to the official letter.

                    </span>

                  </span>

                </label>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-emerald-200 bg-white px-4 py-4 transition hover:border-emerald-300">

                  <input

                    type="checkbox"

                    checked={includeStamp}

                    onChange={(event) => {
                      setIncludeStamp(event.target.checked);

                      setErrorMessage("");

                      setSuccessMessage("");

                    }}

                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-emerald-600"

                  />

                  <span>

                    <span className="block text-sm font-semibold text-slate-900">

                      Include Company Stamp

                    </span>

                    <span className="mt-1 block text-xs leading-5 text-slate-500">

                      Add the approved company stamp to the official letter.

                    </span>

                  </span>

                </label>

              </div>

              <div className="mt-4 rounded-xl border border-emerald-200/80 bg-emerald-100/50 px-4 py-3 text-xs leading-5 text-emerald-800">

                Current selection:{" "}

                {includeSignature && includeStamp

                  ? "Authorized Signature + Company Stamp"

                  : includeSignature

                  ? "Authorized Signature only"

                  : includeStamp

                  ? "Company Stamp only"

                  : "Select Authorized Signature or Company Stamp"}

              </div>

            </div>

          ) : (

            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">

              <div className="flex flex-col gap-1">

                <span className="text-xs font-bold uppercase tracking-[0.1em] text-amber-700">

                  Unofficial Letter

                </span>

                <p className="text-sm font-medium text-amber-900">

                  Client-approved unofficial design selected

                </p>

                <p className="text-xs leading-5 text-amber-700">

                  No authorized signature or company stamp will be included

                  in the unofficial letter.

                </p>

              </div>

            </div>

          )}

        </div>

        {/* Recipient */}

        <div className="mt-10 border-t border-slate-100 pt-8">

          <div className="mb-5">

            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-800">

              Recipient Information

            </h3>

            <p className="mt-1 text-xs text-slate-500">

              Enter the person or organization receiving this letter.

            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            <div>

              <label className={labelClass}>

                Recipient Name *

              </label>

              <input

                className={fieldClass}

                placeholder="Enter recipient name"

                value={
                  recipientName

                }

                onChange={(event) =>

                  setRecipientName(

                    event.target

                      .value

                  )

                }

              />

            </div>

            <div>

              <label className={labelClass}>

                Organization / Company *

              </label>

              <input

                className={fieldClass}

                placeholder="Enter organization name"

                value={
                  organization

                }

                onChange={(event) =>

                  setOrganization(

                    event.target

                      .value

                  )

                }

              />

            </div>

            <div className="lg:col-span-2">

              <label className={labelClass}>

                Recipient Address *

              </label>

              <textarea

                className={`${fieldClass} min-h-[110px] resize-y`}

                placeholder="Enter complete recipient address"

                value={
                  recipientAddress

                }

                onChange={(event) =>

                  setRecipientAddress(

                    event.target

                      .value

                  )

                }

              />

            </div>

            <div>

              <label className={labelClass}>

                Letter Date *

              </label>

              <input

                type="date"

                className={fieldClass}

                value={date}

                onChange={(event) =>

                  setDate(

                    event.target

                      .value

                  )

                }

              />

            </div>

            <div>

              <label className={labelClass}>

                  Reference Number

                  <span className="ml-1 normal-case font-normal text-slate-400">

                    (Optional)

                  </span>

                </label>

              <input

                className={fieldClass}

                placeholder="Example: SV/LET/2026/001"

                value={
                  referenceNumber

                }

                onChange={(event) =>

                  setReferenceNumber(

                    event.target

                      .value

                  )

                }

              />

              <p className="mt-1 text-[11px] leading-4 text-slate-400">

                Optional editable business reference. The internal

                  LH-YYYY-### ID is generated automatically.

              </p>

            </div>

          </div>

        </div>

        {/* Letter Content */}

        <div className="mt-10 border-t border-slate-100 pt-8">

          <div className="mb-5">

            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-800">

              Letter Content

            </h3>

            <p className="mt-1 text-xs text-slate-500">

              Enter the subject and complete body of the letter.

            </p>

          </div>

          <div>

            <label className={labelClass}>

              Subject *

            </label>

            <input

              className={fieldClass}

              placeholder="Enter letter subject"

              value={subject}

              onChange={(event) =>

                setSubject(

                  event.target

                    .value

                )

              }

            />

          </div>

          <div className="mt-5">

            <label className={labelClass}>

              Letter Body *

            </label>

            <textarea

              className={`${fieldClass} min-h-[300px] resize-y leading-6`}

              placeholder="Enter the complete letter content..."

              value={body}

              onChange={(event) =>

                setBody(

                  event.target

                    .value

                )

              }

            />

            <p className="mt-1 text-[11px] text-slate-400">

              Long content will be handled by the PDF generator across

              multiple pages.

            </p>

          </div>

        </div>

        {/* Action Area */}

        <div className="mt-10 border-t border-slate-100 pt-6">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex flex-wrap gap-3">

              <button

                type="button"

                onClick={
                  handlePreview

                }

                disabled={
                  isProcessing

                }

                className="rounded-xl border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-50"

              >

                {isProcessing

                  ? "Processing..."

                  : "Preview"}

              </button>

              <button

                type="button"

                onClick={
                  handleGeneratePdf

                }

                disabled={
                  isProcessing

                }

                className={`rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                  official

                    ? "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-300"

                    : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300"

                }`}

              >

                {isProcessing

                  ? "Processing..."

                  : official

                  ? "Generate Official PDF"

                  : "Generate Unofficial PDF"}

              </button>

              <button

                type="button"

                onClick={
                  handleSave

                }

                disabled={
                  isProcessing

                }

                className="rounded-xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-50"

              >

                Save Letter

              </button>

            </div>

            <div className="text-xs text-slate-400">

              Internal ID: LH-YYYY-###

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}
