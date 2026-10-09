import { jsPDF } from "jspdf";



import type {

  LetterDocument,

} from "@/lib/billing/types";



import {

  formatDocumentDate,

} from "@/lib/billing/pdf/common";



/*

 * Client-approved Unofficial StudyVisum template.

 *

 * IMPORTANT:

 * This endpoint must return the approved

 * unofficial-letter-template.jpg from the

 * server-side protected assets directory.

 */

const TEMPLATE_ENDPOINT =

  "/api/billing/unofficial-assets/template";



/*

 * A4 dimensions in millimetres.

 */

const PAGE_WIDTH = 210;

const PAGE_HEIGHT = 297;



/*

 * Safe content area.

 *

 * The client-approved template already contains:

 * - StudyVisum branding

 * - decorative header

 * - watermark

 * - footer/address/contact information

 *

 * Therefore dynamic content must remain inside

 * this safe body area so it never overlaps the

 * header or footer.

 */

const CONTENT_LEFT = 20;

const CONTENT_RIGHT = 190;



const CONTENT_TOP = 55;

const CONTENT_BOTTOM = 245;



const CONTENT_WIDTH =

  CONTENT_RIGHT -

  CONTENT_LEFT;



/*

 * Convert the protected template response

 * into a data URL that jsPDF can render.

 */

async function fetchTemplateAsDataUrl():

  Promise<string> {

  const response =

    await fetch(

      TEMPLATE_ENDPOINT,

      {

        method: "GET",

        credentials: "same-origin",

        cache: "no-store",

      }

    );



  if (!response.ok) {

    if (

      response.status ===

      401

    ) {

      throw new Error(

        "Your billing session has expired. Please log in again."

      );

    }



    if (

      response.status ===

      404

    ) {

      throw new Error(

        "Unofficial StudyVisum letter template is not configured."

      );

    }



    throw new Error(

      "Unable to load the approved Unofficial Letter template."

    );

  }



  const blob =

    await response.blob();



  return await new Promise<

    string

  >(

    (

      resolve,

      reject

    ) => {

      const reader =

        new FileReader();



      reader.onloadend =

        () => {

          if (

            typeof reader.result ===

            "string"

          ) {

            resolve(

              reader.result

            );



            return;

          }



          reject(

            new Error(

              "Unable to read the Unofficial Letter template."

            )

          );

        };



      reader.onerror =

        () => {

          reject(

            new Error(

              "Unable to read the Unofficial Letter template."

            )

          );

        };



      reader.readAsDataURL(

        blob

      );

    }

  );

}



/*

 * Draw the complete client-approved template

 * as an A4 page background.

 */

function drawTemplate(

  doc: jsPDF,

  templateDataUrl: string

) {

  doc.addImage(

    templateDataUrl,

    "JPEG",

    0,

    0,

    PAGE_WIDTH,

    PAGE_HEIGHT,

    undefined,

    "FAST"

  );

}



/*

 * Restore the normal body-text appearance

 * after a page break.

 */

function setBodyFont(

  doc: jsPDF

) {

  doc.setFont(

    "helvetica",

    "normal"

  );



  doc.setFontSize(

    10.5

  );



  doc.setTextColor(

    30,

    30,

    30

  );

}



function downloadPdfBlob(
  doc: jsPDF,
  filename: string
): void {
  const blob =
    doc.output("blob");

  const url =
    URL.createObjectURL(
      blob
    );

  const anchor =
    document.createElement(
      "a"
    );

  anchor.href =
    url;

  anchor.download =
    filename;

  document.body.appendChild(
    anchor
  );

  anchor.click();
  anchor.remove();

  window.setTimeout(
    () => {
      URL.revokeObjectURL(
        url
      );
    },
    60_000
  );
}

export async function buildUnofficialLetterPdf(

  letter: LetterDocument

): Promise<jsPDF> {

  /*

   * Safety guard:

   * Official documents must never pass through

   * the Unofficial generator.

   */

  if (

    letter.type !==

    "unofficial"

  ) {

    throw new Error(

      "Official letters cannot be generated using the Unofficial Letter PDF generator."

    );

  }



  /*

   * Required content guard.

   *

   * Validation also exists in the form layer,

   * but the PDF layer independently protects

   * itself so direct function usage cannot

   * generate an empty document.

   */

  if (
    !letter.recipientName?.trim() ||
    !letter.organization?.trim() ||
    !letter.recipientAddress?.trim() ||
    !letter.date?.trim() ||
    !letter.subject?.trim() ||
    !letter.body?.trim()
  ) {
    throw new Error(
      "Recipient name, organization / company, recipient address, date, subject and letter body are required."
    );
  }



  const templateDataUrl =

    await fetchTemplateAsDataUrl();



  const doc =

    new jsPDF({

      unit: "mm",

      format: "a4",

      orientation:

        "portrait",

    });



  /*

   * Render the approved client template

   * on page 1.

   */

  drawTemplate(

    doc,

    templateDataUrl

  );



  let y =

    CONTENT_TOP;



  /*

   * Add a new continuation page.

   *

   * Because the approved Unofficial template

   * contains no signature or company stamp,

   * it is safe to use the same template on

   * every continuation page.

   */

  function addFreshPage() {

    doc.addPage(

      "a4",

      "portrait"

    );



    drawTemplate(

      doc,

      templateDataUrl

    );



    y =

      CONTENT_TOP;

  }



  function remainingSpace():

    number {

    return (

      CONTENT_BOTTOM -

      y

    );

  }



  function ensureSpace(

    requiredHeight: number

  ) {

    if (

      remainingSpace() <

      requiredHeight

    ) {

      addFreshPage();

    }

  }



  /*

   * --------------------------------

   * DATE + REFERENCE

   * --------------------------------

   */



  doc.setFont(

    "helvetica",

    "normal"

  );



  doc.setFontSize(

    9.5

  );



  doc.setTextColor(

    65,

    65,

    65

  );



  doc.text(

    `Date: ${formatDocumentDate(

      letter.date

    )}`,

    CONTENT_RIGHT,

    y,

    {

      align: "right",

    }

  );



  y += 6;

  if (
    letter.referenceNumber?.trim()
  ) {
    doc.text(
      `Ref: ${letter.referenceNumber.trim()}`,
      CONTENT_RIGHT,
      y,
      {
        align: "right",
      }
    );

    y += 6;
  }

  /*

   * Small visual indicator.

   *

   * This helps prevent accidental confusion

   * between Official and Unofficial PDFs while

   * remaining unobtrusive.

   */

  doc.setFont(

    "helvetica",

    "bold"

  );



  doc.setFontSize(

    7.5

  );



  doc.setTextColor(

    145,

    105,

    50

  );







  y += 14;



  /*

   * --------------------------------

   * RECIPIENT

   * --------------------------------

   */



  ensureSpace(

    35

  );



  doc.setFont(

    "helvetica",

    "bold"

  );



  doc.setFontSize(

    10

  );



  doc.setTextColor(

    25,

    25,

    25

  );



  doc.text(

    "To,",

    CONTENT_LEFT,

    y

  );



  y += 6;



  doc.setFontSize(

    11

  );



  doc.text(

    letter.recipientName

      .trim(),

    CONTENT_LEFT,

    y

  );



  y += 5.5;



  doc.setFont(

    "helvetica",

    "normal"

  );



  doc.setFontSize(

    9.5

  );



  /*

   * Organization

   */

  if (

    letter.organization

      ?.trim()

  ) {

    const organizationLines =

      doc.splitTextToSize(

        letter.organization

          .trim(),

        95

      ) as string[];



    doc.text(

      organizationLines,

      CONTENT_LEFT,

      y

    );



    y +=

      organizationLines.length *

      4.8;

  }



  /*

   * Recipient address

   */

  if (

    letter.recipientAddress

      ?.trim()

  ) {

    const addressLines =

      doc.splitTextToSize(

        letter.recipientAddress

          .trim(),

        100

      ) as string[];



    doc.text(

      addressLines,

      CONTENT_LEFT,

      y

    );



    y +=

      addressLines.length *

      4.7;

  }



  y += 9;



  /*

   * --------------------------------

   * SUBJECT

   * --------------------------------

   */



  ensureSpace(

    22

  );



  doc.setFont(

    "helvetica",

    "bold"

  );



  doc.setFontSize(

    10

  );



  doc.setTextColor(

    25,

    25,

    25

  );



  const subjectLines =

    doc.splitTextToSize(

      `Subject: ${letter.subject.trim()}`,

      CONTENT_WIDTH

    ) as string[];



  doc.text(

    subjectLines,

    CONTENT_LEFT,

    y

  );



  y +=

    subjectLines.length *

      5 +

    9;



  /*

   * --------------------------------

   * LETTER BODY

   * --------------------------------

   */



  setBodyFont(

    doc

  );



  /*

   * Keep blank-line paragraph intent while

   * still preventing excessive empty pages.

   */

  const bodyParagraphs =

    letter.body

      .trim()

      .split(/\n\s*\n/)

      .map(

        (

          paragraph

        ) =>

          paragraph.trim()

      )

      .filter(Boolean);



  for (

    const paragraph

    of bodyParagraphs

  ) {

    const lines =

      doc.splitTextToSize(

        paragraph,

        CONTENT_WIDTH

      ) as string[];



    for (

      const line

      of lines

    ) {

      /*

       * Never write into the footer.

       */

      if (

        y + 5.5 >

        CONTENT_BOTTOM

      ) {

        addFreshPage();



        setBodyFont(

          doc

        );

      }



      doc.text(

        line,

        CONTENT_LEFT,

        y

      );



      y += 5.4;

    }



    /*

     * Paragraph gap.

     */

    y += 4;

  }



  /*

   * --------------------------------

   * UNOFFICIAL DOCUMENT NOTICE

   * --------------------------------

   *

   * This intentionally contains NO:

   * - authorized signature

   * - company stamp

   * - seal

   */



  ensureSpace(

    24

  );



  y += 5;



  doc.setDrawColor(

    210,

    210,

    210

  );



  doc.setLineWidth(

    0.25

  );



  doc.line(

    CONTENT_LEFT,

    y,

    CONTENT_RIGHT,

    y

  );



  y += 7;



  doc.setFont(

    "helvetica",

    "italic"

  );



  doc.setFontSize(

    8

  );



  doc.setTextColor(

    110,

    110,

    110

  );



  const notice =

    doc.splitTextToSize(

      "This is an unofficial StudyVisum document and does not contain an authorized signature or company stamp.",

      CONTENT_WIDTH

    ) as string[];



  doc.text(

    notice,

    CONTENT_LEFT,

    y

  );



  return doc;

}



export async function downloadUnofficialLetterPdf(
  letter: LetterDocument
): Promise<void> {
  const doc =
    await buildUnofficialLetterPdf(
      letter
    );

  downloadPdfBlob(
    doc,
    `StudyVisum-Unofficial-Letter-${letter.id}.pdf`
  );
}

export async function previewUnofficialLetterPdf(
  letter: LetterDocument
): Promise<void> {
  /*
   * Open the preview tab immediately so browsers
   * do not block it after asynchronous template loading.
   */
  const previewWindow =
    window.open(
      "",
      "_blank"
    );

  if (
    !previewWindow
  ) {
    throw new Error(
      "The PDF preview was blocked by the browser. Please allow pop-ups for this site and try again."
    );
  }

  previewWindow.document.write(
    '<!doctype html><html><head><title>Unofficial Letter Preview</title></head><body style="font-family:Arial,sans-serif;padding:24px">Generating Unofficial Letter preview...</body></html>'
  );

  try {
    const doc =
      await buildUnofficialLetterPdf(
        letter
      );

    const blob =
      doc.output(
        "blob"
      );

    const url =
      URL.createObjectURL(
        blob
      );

    previewWindow.location.href =
      url;

    window.setTimeout(
      () => {
        URL.revokeObjectURL(
          url
        );
      },
      60_000
    );
  } catch (error) {
    previewWindow.close();
    throw error;
  }
}
