import type { Quotation } from "@/lib/billing/types";

type QuotationHistoryProps = {
  quotations: Quotation[];
  onDownload?: (quotation: Quotation) => void;
  onDelete?: (quotation: Quotation) => void;
};

function formatCurrency(value: number): string {
  return value.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatDate(value: string): string {
  if (!value) return "-";

  const parts = value.split("-");

  if (parts.length !== 3) {
    return value;
  }

  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export default function QuotationHistory({
  quotations,
  onDownload,
  onDelete,
}: QuotationHistoryProps) {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
        {/* Section Header */}
        <div className="border-b border-slate-100 bg-gradient-to-r from-white via-white to-indigo-50/40 px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
              Saved Quotations
            </span>

            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Quotation History
            </h2>

            <p className="text-sm text-slate-500">
              View saved quotations, regenerate PDFs and manage
              quotation records stored in this browser.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[850px] w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200 text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Quotation #
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Client
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Quotation Date
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Grand Total
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {quotations.map((quotation, index) => (
                <tr
                  key={quotation.id}
                  className={`border-b border-slate-100 transition-colors hover:bg-indigo-50/30 ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  }`}
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
                      {quotation.id}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">
                      {quotation.clientName}
                    </div>

                    {quotation.companyName && (
                      <div className="mt-0.5 text-xs text-slate-500">
                        {quotation.companyName}
                      </div>
                    )}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                    {formatDate(quotation.quotationDate)}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <span className="font-semibold tabular-nums text-slate-900">
                      ₹ {formatCurrency(quotation.grandTotal)}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => onDownload?.(quotation)}
                        className="rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                      >
                        Download PDF
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete?.(quotation)}
                        className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {quotations.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center">
                    <div className="mx-auto max-w-sm">
                      <div className="text-sm font-semibold text-slate-700">
                        No quotations yet
                      </div>

                      <div className="mt-1 text-xs leading-5 text-slate-400">
                        Saved quotations will appear here after you create and
                        save your first quotation.
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-3 text-xs text-slate-400">
          Records are stored in browser localStorage for the current implementation.
        </div>
      </div>
    </section>
  );
}