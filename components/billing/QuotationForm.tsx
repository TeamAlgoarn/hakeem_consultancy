import { useMemo, useState } from "react";







import { calculateQuotationTotals } from "@/lib/billing/calculations";







import {



  commitQuotationId,



  getNextQuotationId,



} from "@/lib/billing/numbering";







import {



  downloadQuotationPdf,



  previewQuotationPdf,



} from "@/lib/billing/pdf/quotation";







import {



  listQuotations,



  saveQuotation,



} from "@/lib/billing/storage";







import type {



  Quotation,



  QuotationItem,



} from "@/lib/billing/types";







import { validateQuotation } from "@/lib/billing/validation";







type QuotationFormProps = {



  onSaved?: (quotation: Quotation) => void;



};







const createItem = (): QuotationItem => ({



  id:



    typeof crypto !== "undefined" && crypto.randomUUID



      ? crypto.randomUUID()



      : `${Date.now()}-${Math.random().toString(36).slice(2)}`,



  description: "",



  quantity: 1,



  rate: 0,



  taxPercent: 0,



  discountPercent: 0,



});







function todayAsInputDate(): string {



  const date = new Date();



  const offset = date.getTimezoneOffset();



  const local = new Date(date.getTime() - offset * 60_000);







  return local.toISOString().slice(0, 10);



}







function formatCurrency(value: number): string {



  return value.toLocaleString("en-IN", {



    minimumFractionDigits: 2,



    maximumFractionDigits: 2,



  });



}







export default function QuotationForm({



  onSaved,



}: QuotationFormProps) {



  const [clientName, setClientName] = useState("");



  const [companyName, setCompanyName] = useState("");



  const [contactPerson, setContactPerson] = useState("");



  const [email, setEmail] = useState("");



  const [phone, setPhone] = useState("");



  const [billingAddress, setBillingAddress] = useState("");







  const [quotationDate, setQuotationDate] =



    useState(todayAsInputDate());







  const [validityDate, setValidityDate] = useState("");







  const [items, setItems] = useState<QuotationItem[]>([



    createItem(),



  ]);



  type DecimalField =
    | "quantity"
    | "rate"
    | "taxPercent"
    | "discountPercent";

  const [decimalInputs, setDecimalInputs] = useState<Record<string, string>>({});







  const [notes, setNotes] = useState("");



  const [termsAndConditions, setTermsAndConditions] =



    useState("");







  const [errorMessage, setErrorMessage] = useState("");



  const [successMessage, setSuccessMessage] = useState("");



  const [isProcessing, setIsProcessing] = useState(false);







  const totals = useMemo(



    () => calculateQuotationTotals(items),



    [items]



  );







  function updateItem<K extends keyof QuotationItem>(



    id: string,



    field: K,



    value: QuotationItem[K]



  ) {



    setItems((current) =>



      current.map((item) =>



        item.id === id



          ? {



              ...item,



              [field]: value,



            }



          : item



      )



    );



  }







  function decimalKey(
    itemId: string,
    field: DecimalField
  ): string {
    return `${itemId}:${field}`;
  }

  function getDecimalInputValue(
    item: QuotationItem,
    field: DecimalField
  ): string {
    const key = decimalKey(item.id, field);

    if (Object.prototype.hasOwnProperty.call(decimalInputs, key)) {
      return decimalInputs[key];
    }

    return String(item[field]);
  }

  function handleDecimalInput(
    item: QuotationItem,
    field: DecimalField,
    rawValue: string
  ): void {
    if (!/^\d*\.?\d*$/.test(rawValue)) {
      return;
    }

    const key = decimalKey(item.id, field);

    setDecimalInputs((current) => ({
      ...current,
      [key]: rawValue,
    }));

    if (rawValue === "" || rawValue === ".") {
      updateItem(item.id, field, 0);
      return;
    }

    const numericValue = Number(rawValue);

    if (Number.isFinite(numericValue)) {
      updateItem(item.id, field, Math.max(0, numericValue));
    }
  }

  function handleDecimalBlur(
    item: QuotationItem,
    field: DecimalField
  ): void {
    const key = decimalKey(item.id, field);
    const rawValue = decimalInputs[key];

    if (rawValue === undefined) {
      return;
    }

    const numericValue =
      rawValue === "" || rawValue === "."
        ? 0
        : Number(rawValue);

    const safeValue =
      Number.isFinite(numericValue)
        ? Math.max(0, numericValue)
        : 0;

    updateItem(item.id, field, safeValue);

    setDecimalInputs((current) => ({
      ...current,
      [key]: String(safeValue),
    }));
  }

  function addItem() {



    setItems((current) => [...current, createItem()]);



  }







  function removeItem(id: string) {



    setItems((current) => {



      if (current.length === 1) {



        return current;



      }







      setDecimalInputs((drafts) => {
        const next = { ...drafts };

        delete next[decimalKey(id, "quantity")];
        delete next[decimalKey(id, "rate")];
        delete next[decimalKey(id, "taxPercent")];
        delete next[decimalKey(id, "discountPercent")];

        return next;
      });

      return current.filter((item) => item.id !== id);



    });



  }







  function resetForm() {



    setClientName("");



    setCompanyName("");



    setContactPerson("");



    setEmail("");



    setPhone("");



    setBillingAddress("");



    setQuotationDate(todayAsInputDate());



    setValidityDate("");



    setItems([createItem()]);

    setDecimalInputs({});



    setNotes("");



    setTermsAndConditions("");



    setErrorMessage("");



  }







  function buildQuotation(): Quotation {



    const existing = listQuotations();







    const id = getNextQuotationId(



      existing.map((quotation) => quotation.id)



    );







    const now = new Date().toISOString();







    return {



      id,







      clientName: clientName.trim(),







      companyName:



        companyName.trim() || undefined,







      contactPerson:



        contactPerson.trim() || undefined,







      email:



        email.trim() || undefined,







      phone:



        phone.trim() || undefined,







      billingAddress:



        billingAddress.trim() || undefined,







      quotationDate,



      validityDate,







      items,







      subtotal: totals.subtotal,



      discountTotal: totals.discountTotal,



      taxTotal: totals.taxTotal,



      grandTotal: totals.grandTotal,







      notes:



        notes.trim() || undefined,







      termsAndConditions:



        termsAndConditions.trim() || undefined,







      createdAt: now,



      updatedAt: now,



    };



  }







  function getValidatedQuotation(): Quotation | null {



    setErrorMessage("");



    setSuccessMessage("");







    const quotation = buildQuotation();







    const validation =



      validateQuotation(quotation);







    if (!validation.valid) {



      setErrorMessage(



        validation.errors



          .map((error) => error.message)



          .join(" ")



      );







      return null;



    }







    return quotation;



  }







  function handleSave() {



    if (isProcessing) {



      return;



    }







    const quotation =



      getValidatedQuotation();







    if (!quotation) {



      return;



    }







    try {



      saveQuotation(quotation);







      commitQuotationId(



        quotation.id



      );







      onSaved?.(quotation);







      resetForm();







      setSuccessMessage(



        `Quotation ${quotation.id} saved successfully.`



      );



    } catch (error) {



      console.error(



        "Quotation save failed:",



        error



      );







      setErrorMessage(



        "Unable to save the quotation. Please check browser storage and try again."



      );



    }



  }







  async function handlePreview() {



    if (isProcessing) {



      return;



    }







    const quotation =



      getValidatedQuotation();







    if (!quotation) {



      return;



    }







    setIsProcessing(true);







    try {



      await previewQuotationPdf(



        quotation



      );



    } catch (error) {



      console.error(



        "Quotation preview failed:",



        error



      );







      setErrorMessage(



        "Unable to preview the quotation PDF. Please try again."



      );



    } finally {



      setIsProcessing(false);



    }



  }







  async function handleGeneratePdf() {



    if (isProcessing) {



      return;



    }







    const quotation =



      getValidatedQuotation();







    if (!quotation) {



      return;



    }







    setIsProcessing(true);







    try {



      await downloadQuotationPdf(



        quotation



      );



    } catch (error) {



      console.error(



        "Quotation PDF generation failed:",



        error



      );







      setErrorMessage(



        "Unable to generate the quotation PDF. Please try again."



      );



    } finally {



      setIsProcessing(false);



    }



  }







  const labelClass =



    "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600";







  const fieldClass =



    "input transition duration-150 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";







  return (



    <section className="w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.06)]">



      {/* Header */}



      <div className="border-b border-slate-100 bg-gradient-to-r from-white via-white to-indigo-50/40 px-6 py-6 sm:px-8">



        <div className="flex flex-col gap-1">



          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">



            Quotation Management



          </span>







          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">



            Create Quotation



          </h2>







          <p className="max-w-3xl text-sm leading-6 text-slate-500">



            Enter client details, add one or more quotation



            items, verify totals and generate a professional



            StudyVisum quotation.



          </p>



        </div>



      </div>







      <div className="p-6 sm:p-8">



        {/* Error */}



        {errorMessage && (



          <div



            role="alert"



            className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"



          >



            {errorMessage}



          </div>



        )}







        {/* Success */}



        {successMessage && (



          <div



            role="status"



            className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"



          >



            {successMessage}



          </div>



        )}







        {/* Client Information */}



        <div className="mb-5">



          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-800">



            Client Information



          </h3>







          <p className="mt-1 text-xs text-slate-500">



            Provide the customer and billing details for this quotation.



          </p>



        </div>







        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">



          <div>



            <label className={labelClass}>



              Client Name *



            </label>







            <input



              className={fieldClass}



              placeholder="Enter client name"



              value={clientName}



              onChange={(event) =>



                setClientName(



                  event.target.value



                )



              }



            />



          </div>







          <div>



            <label className={labelClass}>



              Company / Organization



            </label>







            <input



              className={fieldClass}



              placeholder="Enter company or organization"



              value={companyName}



              onChange={(event) =>



                setCompanyName(



                  event.target.value



                )



              }



            />



          </div>







          <div>



            <label className={labelClass}>



              Contact Person



            </label>







            <input



              className={fieldClass}



              placeholder="Enter contact person"



              value={contactPerson}



              onChange={(event) =>



                setContactPerson(



                  event.target.value



                )



              }



            />



          </div>







          <div>



            <label className={labelClass}>



              Email



            </label>







            <input



              className={fieldClass}



              type="email"



              placeholder="name@example.com"



              value={email}



              onChange={(event) =>



                setEmail(



                  event.target.value



                )



              }



            />



          </div>







          <div>



            <label className={labelClass}>



              Phone Number



            </label>







            <input



              className={fieldClass}



              inputMode="numeric"



              maxLength={10}



              placeholder="10-digit phone number"



              value={phone}



              onChange={(event) =>



                setPhone(



                  event.target.value



                    .replace(/\D/g, "")



                    .slice(0, 10)



                )



              }



            />



          </div>







          <div>



            <label className={labelClass}>



              Billing / Address Details



            </label>







            <textarea



              className={`${fieldClass} min-h-[96px] resize-y`}



              placeholder="Enter billing address"



              value={billingAddress}



              onChange={(event) =>



                setBillingAddress(



                  event.target.value



                )



              }



            />



          </div>







          <div>



            <label className={labelClass}>



              Quotation Date *



            </label>







            <input



              className={fieldClass}



              type="date"



              value={quotationDate}



              onChange={(event) => {



                const value =



                  event.target.value;







                setQuotationDate(



                  value



                );







                if (



                  validityDate &&



                  value &&



                  validityDate < value



                ) {



                  setValidityDate("");



                }



              }}



            />



          </div>







          <div>



            <label className={labelClass}>



              Validity Date *



            </label>







            <input



              className={fieldClass}



              type="date"



              min={quotationDate}



              value={validityDate}



              onChange={(event) =>



                setValidityDate(



                  event.target.value



                )



              }



            />



          </div>



        </div>







        {/* Quotation Items */}



        <div className="mt-10 border-t border-slate-100 pt-8">



          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">



            <div>



              <h3 className="text-base font-semibold text-slate-900">



                Quotation Items



              </h3>







              <p className="mt-1 text-xs text-slate-500">



                Add services or products with quantity, rate, tax



                and discount.



              </p>



            </div>







            <button



              type="button"



              onClick={addItem}



              disabled={isProcessing}



              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:cursor-not-allowed disabled:opacity-50"



            >



              + Add Item



            </button>



          </div>







          <div className="space-y-5">



            {items.map(



              (



                item,



                index



              ) => {



                const baseAmount =



                  Math.max(



                    0,



                    item.quantity



                  ) *



                  Math.max(



                    0,



                    item.rate



                  );







                const discountAmount =



                  baseAmount *



                  (Math.max(



                    0,



                    item.discountPercent



                  ) /



                    100);







                const taxableAmount =



                  Math.max(



                    0,



                    baseAmount -



                      discountAmount



                  );







                const taxAmount =



                  taxableAmount *



                  (Math.max(



                    0,



                    item.taxPercent



                  ) /



                    100);







                const itemTotal =



                  taxableAmount +



                  taxAmount;







                return (



                  <div



                    key={item.id}



                    className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 shadow-sm"



                  >



                    {/* Item Header */}



                    <div className="flex flex-col gap-3 border-b border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">



                      <div className="flex items-center gap-3">



                        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-indigo-50 px-2 text-xs font-bold text-indigo-700 ring-1 ring-indigo-100">



                          {index + 1}



                        </span>







                        <div>



                          <p className="text-sm font-semibold text-slate-900">



                            Item {index + 1}



                          </p>







                          <p className="text-xs text-slate-500">



                            Service / product quotation line



                          </p>



                        </div>



                      </div>







                      <div className="flex items-center justify-between gap-5 sm:justify-end">



                        <div className="text-right">



                          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">



                            Item Total



                          </p>







                          <p className="mt-0.5 text-sm font-bold text-slate-900">



                            ₹ {formatCurrency(itemTotal)}



                          </p>



                        </div>







                        <button



                          type="button"



                          disabled={



                            items.length ===



                              1 ||



                            isProcessing



                          }



                          onClick={() =>



                            removeItem(



                              item.id



                            )



                          }



                          className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-40"



                        >



                          Remove



                        </button>



                      </div>



                    </div>







                    {/* Item Fields */}



                    <div className="p-5">



                      <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">



                        <div className="xl:col-span-4">



                          <label className={labelClass}>



                            Service / Item Description *



                          </label>







                          <textarea



                            className={`${fieldClass} min-h-[96px] resize-y`}



                            placeholder="Describe the service or item"



                            value={



                              item.description



                            }



                            onChange={(event) =>



                              updateItem(



                                item.id,



                                "description",



                                event.target



                                  .value



                              )



                            }



                          />



                        </div>







                        <div className="xl:col-span-2">



                          <label className={labelClass}>



                            Quantity *



                          </label>







                          <input

                            className={fieldClass}

                            type="text"

                            inputMode="decimal"

                            placeholder="1"

                            value={getDecimalInputValue(

                              item,

                              "quantity"

                            )}

                            onChange={(event) =>

                              handleDecimalInput(

                                item,

                                "quantity",

                                event.target.value

                              )

                            }

                            onBlur={() =>

                              handleDecimalBlur(

                                item,

                                "quantity"

                              )

                            }

                          />







                          <p className="mt-1 text-[11px] text-slate-400">



                            Number of units



                          </p>



                        </div>







                        <div className="xl:col-span-2">



                          <label className={labelClass}>



                            Rate (₹) *



                          </label>







                          <input

                            className={fieldClass}

                            type="text"

                            inputMode="decimal"

                            placeholder="0.00"

                            value={getDecimalInputValue(

                              item,

                              "rate"

                            )}

                            onChange={(event) =>

                              handleDecimalInput(

                                item,

                                "rate",

                                event.target.value

                              )

                            }

                            onBlur={() =>

                              handleDecimalBlur(

                                item,

                                "rate"

                              )

                            }

                          />







                          <p className="mt-1 text-[11px] text-slate-400">



                            Price per unit



                          </p>



                        </div>







                        <div className="xl:col-span-2">



                          <label className={labelClass}>



                            Tax (%)



                          </label>







                          <input

                            className={fieldClass}

                            type="text"

                            inputMode="decimal"

                            placeholder="0"

                            value={getDecimalInputValue(

                              item,

                              "taxPercent"

                            )}

                            onChange={(event) =>

                              handleDecimalInput(

                                item,

                                "taxPercent",

                                event.target.value

                              )

                            }

                            onBlur={() =>

                              handleDecimalBlur(

                                item,

                                "taxPercent"

                              )

                            }

                          />







                          <p className="mt-1 text-[11px] text-slate-400">



                            Applied after discount



                          </p>



                        </div>







                        <div className="xl:col-span-2">



                          <label className={labelClass}>



                            Discount (%)



                          </label>







                          <input

                            className={fieldClass}

                            type="text"

                            inputMode="decimal"

                            placeholder="0"

                            value={getDecimalInputValue(

                              item,

                              "discountPercent"

                            )}

                            onChange={(event) =>

                              handleDecimalInput(

                                item,

                                "discountPercent",

                                event.target.value

                              )

                            }

                            onBlur={() =>

                              handleDecimalBlur(

                                item,

                                "discountPercent"

                              )

                            }

                          />







                          <p className="mt-1 text-[11px] text-slate-400">



                            Percentage discount



                          </p>



                        </div>



                      </div>







                      {/* Item Calculation Summary */}



                      <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl border border-slate-200 bg-white p-4 text-xs sm:grid-cols-4">



                        <div>



                          <p className="text-slate-400">



                            Base



                          </p>







                          <p className="mt-1 font-semibold text-slate-700">



                            ₹ {formatCurrency(baseAmount)}



                          </p>



                        </div>







                        <div>



                          <p className="text-slate-400">



                            Discount



                          </p>







                          <p className="mt-1 font-semibold text-slate-700">



                            - ₹ {formatCurrency(discountAmount)}



                          </p>



                        </div>







                        <div>



                          <p className="text-slate-400">



                            Tax



                          </p>







                          <p className="mt-1 font-semibold text-slate-700">



                            ₹ {formatCurrency(taxAmount)}



                          </p>



                        </div>







                        <div>



                          <p className="text-slate-400">



                            Total



                          </p>







                          <p className="mt-1 font-bold text-slate-900">



                            ₹ {formatCurrency(itemTotal)}



                          </p>



                        </div>



                      </div>



                    </div>



                  </div>



                );



              }



            )}



          </div>



        </div>







        {/* Totals */}



        <div className="mt-8 flex justify-end">



          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">



            <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">



              <h3 className="text-sm font-semibold text-slate-800">



                Quotation Summary



              </h3>



            </div>







            <div className="p-5 text-sm">



              <div className="flex justify-between py-1.5">



                <span className="text-slate-500">



                  Subtotal



                </span>







                <span className="font-medium text-slate-800">



                  ₹ {formatCurrency(totals.subtotal)}



                </span>



              </div>







              <div className="flex justify-between py-1.5">



                <span className="text-slate-500">



                  Discount



                </span>







                <span className="font-medium text-slate-800">



                  - ₹ {formatCurrency(totals.discountTotal)}



                </span>



              </div>







              <div className="flex justify-between py-1.5">



                <span className="text-slate-500">



                  Tax



                </span>







                <span className="font-medium text-slate-800">



                  ₹ {formatCurrency(totals.taxTotal)}



                </span>



              </div>







              <div className="mt-3 flex justify-between border-t border-slate-200 pt-4 text-base font-bold">



                <span className="text-slate-900">



                  Grand Total



                </span>







                <span className="text-indigo-700">



                  ₹ {formatCurrency(totals.grandTotal)}



                </span>



              </div>



            </div>



          </div>



        </div>







        {/* Additional Info */}



        <div className="mt-10 border-t border-slate-100 pt-8">



          <div className="mb-5">



            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-800">



              Additional Information



            </h3>







            <p className="mt-1 text-xs text-slate-500">



              Add optional notes and terms that should appear on the quotation.



            </p>



          </div>







          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">



            <div>



              <label className={labelClass}>



                Notes



              </label>







              <textarea



                className={`${fieldClass} min-h-[150px] resize-y`}



                placeholder="Enter additional notes"



                value={notes}



                onChange={(event) =>



                  setNotes(



                    event.target.value



                  )



                }



              />



            </div>







            <div>



              <label className={labelClass}>



                Terms & Conditions



              </label>







              <textarea



                className={`${fieldClass} min-h-[150px] resize-y`}



                placeholder="Enter quotation terms and conditions"



                value={



                  termsAndConditions



                }



                onChange={(event) =>



                  setTermsAndConditions(



                    event.target.value



                  )



                }



              />



            </div>



          </div>



        </div>







        {/* Actions */}



        <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">



          <div className="flex flex-wrap gap-3">



            <button



              type="button"



              onClick={handlePreview}



              disabled={isProcessing}



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



              disabled={isProcessing}



              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:cursor-not-allowed disabled:opacity-50"



            >



              {isProcessing



                ? "Processing..."



                : "Generate PDF"}



            </button>







            <button



              type="button"



              onClick={handleSave}



              disabled={isProcessing}



              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"



            >



              Save Quotation



            </button>



          </div>







          <p className="text-xs text-slate-400">



            Auto ID: QT-YYYY-###



          </p>



        </div>



      </div>



    </section>



  );



}







// import { useMemo, useState } from "react";



// import { calculateQuotationTotals } from "@/lib/billing/calculations";

// import {
//   commitQuotationId,
//   getNextQuotationId,
// } from "@/lib/billing/numbering";

// import {

//   downloadQuotationPdf,

//   previewQuotationPdf,

// } from "@/lib/billing/pdf/quotation";

// import {

//   listQuotations,

//   saveQuotation,

// } from "@/lib/billing/storage";

// import type {

//   Quotation,

//   QuotationItem,

// } from "@/lib/billing/types";

// import { validateQuotation } from "@/lib/billing/validation";



// type QuotationFormProps = {

//   onSaved?: (quotation: Quotation) => void;

// };



// const createItem = (): QuotationItem => ({

//   id:

//     typeof crypto !== "undefined" && crypto.randomUUID

//       ? crypto.randomUUID()

//       : `${Date.now()}-${Math.random().toString(36).slice(2)}`,

//   description: "",

//   quantity: 1,

//   rate: 0,

//   taxPercent: 0,

//   discountPercent: 0,

// });



// function todayAsInputDate(): string {

//   const date = new Date();

//   const offset = date.getTimezoneOffset();

//   const local = new Date(date.getTime() - offset * 60_000);



//   return local.toISOString().slice(0, 10);

// }



// export default function QuotationForm({

//   onSaved,

// }: QuotationFormProps) {

//   const [clientName, setClientName] = useState("");

//   const [companyName, setCompanyName] = useState("");

//   const [contactPerson, setContactPerson] = useState("");

//   const [email, setEmail] = useState("");

//   const [phone, setPhone] = useState("");

//   const [billingAddress, setBillingAddress] = useState("");



//   const [quotationDate, setQuotationDate] =

//     useState(todayAsInputDate());

//   const [validityDate, setValidityDate] = useState("");



//   const [items, setItems] = useState<QuotationItem[]>([

//     createItem(),

//   ]);



//   const [notes, setNotes] = useState("");

//   const [termsAndConditions, setTermsAndConditions] =

//     useState("");



//   const [errorMessage, setErrorMessage] = useState("");

//   const [successMessage, setSuccessMessage] = useState("");

//   const [isProcessing, setIsProcessing] = useState(false);



//   const totals = useMemo(

//     () => calculateQuotationTotals(items),

//     [items]

//   );



//   function updateItem<K extends keyof QuotationItem>(

//     id: string,

//     field: K,

//     value: QuotationItem[K]

//   ) {

//     setItems((current) =>

//       current.map((item) =>

//         item.id === id

//           ? {

//               ...item,

//               [field]: value,

//             }

//           : item

//       )

//     );

//   }



//   function addItem() {

//     setItems((current) => [...current, createItem()]);

//   }



//   function removeItem(id: string) {

//     setItems((current) => {

//       if (current.length === 1) {

//         return current;

//       }



//       return current.filter((item) => item.id !== id);

//     });

//   }



//   function resetForm() {

//     setClientName("");

//     setCompanyName("");

//     setContactPerson("");

//     setEmail("");

//     setPhone("");

//     setBillingAddress("");

//     setQuotationDate(todayAsInputDate());

//     setValidityDate("");

//     setItems([createItem()]);

//     setNotes("");

//     setTermsAndConditions("");

//     setErrorMessage("");

//   }



//   function buildQuotation(): Quotation {

//     const existing = listQuotations();



//     const id = getNextQuotationId(

//       existing.map((quotation) => quotation.id)

//     );



//     const now = new Date().toISOString();



//     return {

//       id,



//       clientName: clientName.trim(),

//       companyName: companyName.trim() || undefined,

//       contactPerson: contactPerson.trim() || undefined,

//       email: email.trim() || undefined,

//       phone: phone.trim() || undefined,

//       billingAddress: billingAddress.trim() || undefined,



//       quotationDate,

//       validityDate,



//       items,



//       subtotal: totals.subtotal,

//       discountTotal: totals.discountTotal,

//       taxTotal: totals.taxTotal,

//       grandTotal: totals.grandTotal,



//       notes: notes.trim() || undefined,

//       termsAndConditions:

//         termsAndConditions.trim() || undefined,



//       createdAt: now,

//       updatedAt: now,

//     };

//   }



//   function getValidatedQuotation(): Quotation | null {

//     setErrorMessage("");

//     setSuccessMessage("");



//     const quotation = buildQuotation();

//     const validation = validateQuotation(quotation);



//     if (!validation.valid) {

//       setErrorMessage(

//         validation.errors

//           .map((error) => error.message)

//           .join(" ")

//       );



//       return null;

//     }



//     return quotation;

//   }



//   function handleSave() {

//     if (isProcessing) {

//       return;

//     }



//     const quotation = getValidatedQuotation();



//     if (!quotation) {

//       return;

//     }



//     try {

//       saveQuotation(quotation);
//       commitQuotationId(quotation.id);



//       onSaved?.(quotation);



//       resetForm();



//       setSuccessMessage(

//         `Quotation ${quotation.id} saved successfully.`

//       );

//     } catch (error) {

//       console.error("Quotation save failed:", error);



//       setErrorMessage(

//         "Unable to save the quotation. Please check browser storage and try again."

//       );

//     }

//   }



//   async function handlePreview() {

//     if (isProcessing) {

//       return;

//     }



//     const quotation = getValidatedQuotation();



//     if (!quotation) {

//       return;

//     }



//     setIsProcessing(true);



//     try {

//       await previewQuotationPdf(quotation);

//     } catch (error) {

//       console.error("Quotation preview failed:", error);



//       setErrorMessage(

//         "Unable to preview the quotation PDF. Please try again."

//       );

//     } finally {

//       setIsProcessing(false);

//     }

//   }



//   async function handleGeneratePdf() {

//     if (isProcessing) {

//       return;

//     }



//     const quotation = getValidatedQuotation();



//     if (!quotation) {

//       return;

//     }



//     setIsProcessing(true);



//     try {

//       await downloadQuotationPdf(quotation);

//     } catch (error) {

//       console.error(

//         "Quotation PDF generation failed:",

//         error

//       );



//       setErrorMessage(

//         "Unable to generate the quotation PDF. Please try again."

//       );

//     } finally {

//       setIsProcessing(false);

//     }

//   }



//   return (

//     <section className="w-full rounded-3xl bg-white shadow-lg ring-1 ring-gray-200/80 p-6 sm:p-8">

//       <div className="mb-8 border-b border-gray-100 pb-5">
//         <div className="flex flex-col gap-1">
//           <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
//             Create Quotation
//           </h2>
//           <p className="text-sm text-gray-500">
//             Create, preview, save and generate a professional StudyVisum quotation.
//           </p>
//         </div>
//       </div>



//       {errorMessage && (

//         <div

//           role="alert"

//           className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"

//         >

//           {errorMessage}

//         </div>

//       )}



//       {successMessage && (

//         <div

//           role="status"

//           className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"

//         >

//           {successMessage}

//         </div>

//       )}



//       <div className="mb-4">
//         <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
//           Client Information
//         </h3>
//       </div>

//       <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

//         <input

//           className="input"

//           placeholder="Client Name *"

//           value={clientName}

//           onChange={(event) =>

//             setClientName(event.target.value)

//           }

//         />



//         <input

//           className="input"

//           placeholder="Company / Organization"

//           value={companyName}

//           onChange={(event) =>

//             setCompanyName(event.target.value)

//           }

//         />



//         <input

//           className="input"

//           placeholder="Contact Person"

//           value={contactPerson}

//           onChange={(event) =>

//             setContactPerson(event.target.value)

//           }

//         />



//         <input

//           className="input"

//           type="email"

//           placeholder="Email"

//           value={email}

//           onChange={(event) =>

//             setEmail(event.target.value)

//           }

//         />



//         <input

//           className="input"

//           inputMode="numeric"

//           maxLength={10}

//           placeholder="Phone (10 digits)"

//           value={phone}

//           onChange={(event) =>

//             setPhone(

//               event.target.value

//                 .replace(/\D/g, "")

//                 .slice(0, 10)

//             )

//           }

//         />



//         <textarea

//           className="input min-h-[90px]"

//           placeholder="Billing / Address Details"

//           value={billingAddress}

//           onChange={(event) =>

//             setBillingAddress(event.target.value)

//           }

//         />



//         <div>

//           <label className="mb-1 block text-xs font-medium text-gray-600">

//             Quotation Date *

//           </label>



//           <input

//             className="input"

//             type="date"

//             value={quotationDate}

//             onChange={(event) => {

//               const value = event.target.value;



//               setQuotationDate(value);



//               if (

//                 validityDate &&

//                 value &&

//                 validityDate < value

//               ) {

//                 setValidityDate("");

//               }

//             }}

//           />

//         </div>



//         <div>

//           <label className="mb-1 block text-xs font-medium text-gray-600">

//             Validity Date *

//           </label>



//           <input

//             className="input"

//             type="date"

//             min={quotationDate}

//             value={validityDate}

//             onChange={(event) =>

//               setValidityDate(event.target.value)

//             }

//           />

//         </div>

//       </div>



//       <div className="mt-8">

//         <div className="mb-4 flex items-center justify-between gap-3">

//           <h3 className="font-semibold text-gray-900">

//             Quotation Items

//           </h3>



//           <button

//             type="button"

//             onClick={addItem}

//             disabled={isProcessing}

//             className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"

//           >

//             + Add Item

//           </button>

//         </div>



//         <div className="space-y-4">

//           {items.map((item, index) => {

//             const baseAmount =

//               Math.max(0, item.quantity) *

//               Math.max(0, item.rate);



//             const discountAmount =

//               baseAmount *

//               (Math.max(0, item.discountPercent) / 100);



//             const taxableAmount = Math.max(

//               0,

//               baseAmount - discountAmount

//             );



//             const taxAmount =

//               taxableAmount *

//               (Math.max(0, item.taxPercent) / 100);



//             const itemTotal =

//               taxableAmount + taxAmount;



//             return (

//               <div

//                 key={item.id}

//                 className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5"

//               >

//                 <div className="mb-4 flex items-center justify-between gap-3">

//                   <span className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 ring-1 ring-gray-200">

//                     Item {index + 1}

//                   </span>



//                   <div className="flex items-center gap-4">

//                     <span className="text-sm font-semibold text-gray-800">

//                       ₹{" "}

//                       {itemTotal.toLocaleString("en-IN", {

//                         minimumFractionDigits: 2,

//                         maximumFractionDigits: 2,

//                       })}

//                     </span>



//                     <button

//                       type="button"

//                       disabled={

//                         items.length === 1 ||

//                         isProcessing

//                       }

//                       onClick={() =>

//                         removeItem(item.id)

//                       }

//                       className="text-sm font-medium text-red-600 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-40"

//                     >

//                       Remove

//                     </button>

//                   </div>

//                 </div>



//                 <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">

//                   <textarea

//                     className="input min-h-[90px] xl:col-span-4"

//                     placeholder="Service / Item Description *"

//                     value={item.description}

//                     onChange={(event) =>

//                       updateItem(

//                         item.id,

//                         "description",

//                         event.target.value

//                       )

//                     }

//                   />



//                   <input

//                     className="input xl:col-span-2"

//                     type="number"

//                     min="0.01"

//                     step="0.01"

//                     placeholder="Quantity"

//                     value={item.quantity}

//                     onChange={(event) =>

//                       updateItem(

//                         item.id,

//                         "quantity",

//                         event.target.value === ""

//                           ? 0

//                           : Number(event.target.value)

//                       )

//                     }

//                   />



//                   <input

//                     className="input xl:col-span-2"

//                     type="number"

//                     min="0"

//                     step="0.01"

//                     placeholder="Rate"

//                     value={item.rate}

//                     onChange={(event) =>

//                       updateItem(

//                         item.id,

//                         "rate",

//                         event.target.value === ""

//                           ? 0

//                           : Number(event.target.value)

//                       )

//                     }

//                   />



//                   <input

//                     className="input xl:col-span-2"

//                     type="number"

//                     min="0"

//                     max="100"

//                     step="0.01"

//                     placeholder="Tax %"

//                     value={item.taxPercent}

//                     onChange={(event) =>

//                       updateItem(

//                         item.id,

//                         "taxPercent",

//                         event.target.value === ""

//                           ? 0

//                           : Number(event.target.value)

//                       )

//                     }

//                   />



//                   <input

//                     className="input xl:col-span-2"

//                     type="number"

//                     min="0"

//                     max="100"

//                     step="0.01"

//                     placeholder="Discount %"

//                     value={item.discountPercent}

//                     onChange={(event) =>

//                       updateItem(

//                         item.id,

//                         "discountPercent",

//                         event.target.value === ""

//                           ? 0

//                           : Number(event.target.value)

//                       )

//                     }

//                   />

//                 </div>

//               </div>

//             );

//           })}

//         </div>

//       </div>



//       <div className="mt-8 flex justify-end">
//         <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm">

//         <div className="flex justify-between py-1">

//           <span className="text-gray-600">

//             Subtotal

//           </span>



//           <span className="font-medium">

//             ₹{" "}

//             {totals.subtotal.toLocaleString("en-IN", {

//               minimumFractionDigits: 2,

//               maximumFractionDigits: 2,

//             })}

//           </span>

//         </div>



//         <div className="flex justify-between py-1">

//           <span className="text-gray-600">

//             Discount

//           </span>



//           <span className="font-medium">

//             - ₹{" "}

//             {totals.discountTotal.toLocaleString(

//               "en-IN",

//               {

//                 minimumFractionDigits: 2,

//                 maximumFractionDigits: 2,

//               }

//             )}

//           </span>

//         </div>



//         <div className="flex justify-between py-1">

//           <span className="text-gray-600">

//             Tax

//           </span>



//           <span className="font-medium">

//             ₹{" "}

//             {totals.taxTotal.toLocaleString("en-IN", {

//               minimumFractionDigits: 2,

//               maximumFractionDigits: 2,

//             })}

//           </span>

//         </div>



//         <div className="mt-2 flex justify-between border-t border-gray-300 pt-3 text-base font-semibold">

//           <span>Grand Total</span>



//           <span>

//             ₹{" "}

//             {totals.grandTotal.toLocaleString(

//               "en-IN",

//               {

//                 minimumFractionDigits: 2,

//                 maximumFractionDigits: 2,

//               }

//             )}

//           </span>

//         </div>

//         </div>
//       </div>

//       <div className="mt-8 mb-4">
//         <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
//           Additional Information
//         </h3>
//       </div>

//       <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

//         <textarea

//           className="input min-h-[140px]"

//           placeholder="Notes"

//           value={notes}

//           onChange={(event) =>

//             setNotes(event.target.value)

//           }

//         />



//         <textarea

//           className="input min-h-[140px]"

//           placeholder="Terms & Conditions"

//           value={termsAndConditions}

//           onChange={(event) =>

//             setTermsAndConditions(event.target.value)

//           }

//         />

//       </div>



//       <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-6">

//         <button

//           type="button"

//           onClick={handlePreview}

//           disabled={isProcessing}

//           className="rounded-xl border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-50"

//         >

//           {isProcessing ? "Processing..." : "Preview"}

//         </button>



//         <button

//           type="button"

//           onClick={handleGeneratePdf}

//           disabled={isProcessing}

//           className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"

//         >

//           {isProcessing

//             ? "Processing..."

//             : "Generate PDF"}

//         </button>



//         <button

//           type="button"

//           onClick={handleSave}

//           disabled={isProcessing}

//           className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"

//         >

//           Save Quotation

//         </button>

//       </div>



//       <p className="mt-3 text-xs text-gray-500">

//         Quotation number format: QT-YYYY-### (automatic)

//       </p>

//     </section>

//   );

// }
