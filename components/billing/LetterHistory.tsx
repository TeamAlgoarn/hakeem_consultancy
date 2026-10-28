import type {
  LetterDocument,
} from "@/lib/billing/types";

type LetterHistoryProps = {
  letters: LetterDocument[];

  onDownload?: (
    letter: LetterDocument
  ) => void;

  onDelete?: (
    letter: LetterDocument
  ) => void;
};

function formatDate(
  value: string
): string {
  if (!value) {
    return "—";
  }

  const parts =
    value.split("-");

  if (
    parts.length !== 3
  ) {
    return value;
  }

  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function formatReferenceNumber(
  value?: string
): string {
  const reference =
    value?.trim();

  return reference ||
    "—";
}

export default function LetterHistory({
  letters,
  onDownload,
  onDelete,
}: LetterHistoryProps) {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
        {/* Header */}
        <div className="border-b border-slate-100 bg-gradient-to-r from-white via-white to-amber-50/40 px-6 py-5 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
            Saved Letters
          </span>

          <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
            Letter History
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            View, download and manage saved official and unofficial
            StudyVisum letters.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200 text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Internal ID
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Reference #
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Type
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Recipient
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Date
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {letters.map(
                (
                  letter,
                  index
                ) => (
                  <tr
                    key={
                      letter.id
                    }
                    className={`border-b border-slate-100 transition-colors hover:bg-slate-50 ${
                      index %
                        2 ===
                      0
                        ? "bg-white"
                        : "bg-slate-50/40"
                    }`}
                  >
                    {/* Internal ID */}
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                        {
                          letter.id
                        }
                      </span>
                    </td>

                    {/* Optional business reference */}
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={
                          letter.referenceNumber?.trim()
                            ? "font-medium text-slate-900"
                            : "text-slate-400"
                        }
                      >
                        {formatReferenceNumber(
                          letter.referenceNumber
                        )}
                      </span>
                    </td>

                    {/* Type */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                          letter.type ===
                          "official"
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                            : "bg-amber-50 text-amber-700 ring-amber-200"
                        }`}
                      >
                        {letter.type ===
                        "official"
                          ? "Official"
                          : "Unofficial"}
                      </span>
                    </td>

                    {/* Recipient */}
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">
                        {
                          letter.recipientName
                        }
                      </div>

                      {letter.organization?.trim() && (
                        <div className="mt-0.5 text-xs text-slate-500">
                          {
                            letter.organization
                          }
                        </div>
                      )}
                    </td>

                    {/* Date */}
                    <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                      {formatDate(
                        letter.date
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            onDownload?.(
                              letter
                            )
                          }
                          className="rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        >
                          Download PDF
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            onDelete?.(
                              letter
                            )
                          }
                          className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}

              {letters.length ===
                0 && (
                <tr>
                  <td
                    colSpan={
                      6
                    }
                    className="px-6 py-16 text-center"
                  >
                    <div className="mx-auto max-w-sm">
                      <div className="text-sm font-semibold text-slate-700">
                        No letters yet
                      </div>

                      <div className="mt-1 text-xs leading-5 text-slate-400">
                        Saved official and unofficial letters will appear
                        here after you create and save them.
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-3 text-xs text-slate-400">
          Letter records are stored in browser localStorage for the
          current implementation.
        </div>
      </div>
    </section>
  );
}
