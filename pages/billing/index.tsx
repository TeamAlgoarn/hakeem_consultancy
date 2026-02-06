
import { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import { useRouter } from "next/navigation";

/* ---------------- Types ---------------- */
type Invoice = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  course?: string;
  amount: number;
  dueDate?: string;
  remarks?: string;
  status: "PAID" | "UNPAID";
  createdAt: string;
  updatedAt: string;
};

type LetterHead = {
  id: string;
  name: string;
  phone?: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

/* ---------------- LocalStorage helpers ---------------- */
const KEY = "sv_invoices";
const LETTERHEAD_KEY = "sv_letterheads";
const COUNTER_KEY = "sv_invoice_counter";
const LETTERHEAD_COUNTER_KEY = "sv_letterhead_counter";

const lsGet = <T,>(k: string, def: T): T => {
  try { return JSON.parse(localStorage.getItem(k) || JSON.stringify(def)); } catch { return def; }
};
const listInvoices = (): Invoice[] => lsGet<Invoice[]>(KEY, []);
const listLetterHeads = (): LetterHead[] => lsGet<LetterHead[]>(LETTERHEAD_KEY, []);
const saveInvoices = (x: Invoice[]) => localStorage.setItem(KEY, JSON.stringify(x));
const saveLetterHeads = (x: LetterHead[]) => localStorage.setItem(LETTERHEAD_KEY, JSON.stringify(x));

const nextInvoiceId = (d = new Date()) =>
  `SV-${d.getFullYear()}-${String((parseInt(localStorage.getItem(COUNTER_KEY) || "0") + 1)).padStart(3, "0")}`;

const nextLetterHeadId = (d = new Date()) =>
  `LH-${d.getFullYear()}-${String((parseInt(localStorage.getItem(LETTERHEAD_COUNTER_KEY) || "0") + 1)).padStart(3, "0")}`;

const bumpCounter = () =>
  localStorage.setItem(COUNTER_KEY, String((parseInt(localStorage.getItem(COUNTER_KEY) || "0") + 1)));
const bumpLetterHeadCounter = () =>
  localStorage.setItem(LETTERHEAD_COUNTER_KEY, String((parseInt(localStorage.getItem(LETTERHEAD_COUNTER_KEY) || "0") + 1)));

const upsertInvoice = (inv: Invoice) => {
  const all = listInvoices();
  const idx = all.findIndex(a => a.id === inv.id);
  idx >= 0 ? (all[idx] = inv) : all.unshift(inv);
  saveInvoices(all);
};

const upsertLetterHead = (lh: LetterHead) => {
  const all = listLetterHeads();
  const idx = all.findIndex(a => a.id === lh.id);
  idx >= 0 ? (all[idx] = lh) : all.unshift(lh);
  saveLetterHeads(all);
};

const setStatus = (id: string, status: "PAID" | "UNPAID") => {
  const all = listInvoices();
  const item = all.find(a => a.id === id);
  if (!item) return;
  item.status = status;
  item.updatedAt = new Date().toISOString();
  saveInvoices(all);
};

/* ---------------- Share links ---------------- */

const whatsappUrl = (phone: string, name: string, id: string, amount: number) => {
  const msg = `✅ Invoice #${id} for ₹${amount.toLocaleString("en-IN")} has been successfully generated.`;
  const to = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/91${to}?text=${encodeURIComponent(msg)}`;
};

const whatsappUrlLetterHead = (phone: string, name: string) => {
  const msg = `Dear ${name}, your letter head document is ready.`;
  const to = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/91${to}?text=${encodeURIComponent(msg)}`;
};
const gmailUrl = (email: string, name: string, id: string, amount: number) => {
  const subject = `Invoice #${id} from StudyVisum`;
  const body = `Dear ${name},

Your invoice #${id} for Rs. ${amount.toLocaleString("en-IN")} is ready.

Please find the attached invoice PDF for your reference.

Best regards,
StudyVisum Team
info@studyvisum.com
+91 8374779361, +91 9704879361`;
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
const gmailUrlLetterHead = (name: string) => {
  const subject = `Letter Head from StudyVisum`;
  const body = `Dear ${name},

Your letter head document is ready.

Please find the attached document for your reference.

Best regards,
StudyVisum Team
info@studyvisum.com
+91 8374779361, +91 9704879361`;
  return `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/* ---------------- Asset helpers ---------------- */
async function loadAsPngDataUrl(src: string): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = img.naturalWidth || img.width;
      c.height = img.naturalHeight || img.height;
      const ctx = c.getContext("2d");
      if (!ctx) return resolve(null);
      ctx.drawImage(img, 0, 0);
      try { resolve(c.toDataURL("image/png")); } catch { resolve(null); }
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function svgIconDataUrl(
  type: "email" | "phone" | "location" | "globe",
  color = "#B88A55"       // warm gold, like your reference
) {
  let body = "";

  switch (type) {
    case "email":
      // Envelope outline
      body = `
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
        <polyline points="4,6 12,12 20,6" />
      `;
      break;

    case "phone":
      // Simple handset
      body = `
        <path d="M7 3h3l2 5-2.5 2a11 11 0 006 6L18 14l5 2v3.5c0 1-0.8 1.8-1.8 1.8A16 16 0 0 1 4.7 7.3C4.7 6.3 5.5 5.5 6.5 5.5z" />
      `;
      break;

    case "location":
      // Pin + inner dot
      body = `
        <path d="M12 3a6 6 0 0 0-6 6c0 4.5 6 11 6 11s6-6.5 6-11a6 6 0 0 0-6-6z" />
        <circle cx="12" cy="9" r="2.2" />
      `;
      break;

    case "globe":
      // Circle + latitude / longitude lines
      body = `
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="5.5" ry="9" />
        <path d="M3 12h18M12 3v18" />
      `;
      break;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="64" height="64" viewBox="0 0 24 24"
         fill="none" stroke="${color}" stroke-width="1.8"
         stroke-linecap="round" stroke-linejoin="round">
      ${body}
    </svg>
  `;

  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

/* ===== Helpers for minimalist invoice ===== */
type RGB = [number, number, number];
const formatDateDDMMYYYY = (iso: string) => {
  const d = iso ? new Date(iso) : new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
};
// IMPORTANT: plain numbers, no ₹ glyph (avoids superscript artifact)
const money = (n: number) => n.toLocaleString("en-IN");

/* ======================= INVOICE PDF ======================= */
/** EXACT match to your reference screenshot (Image-1) */
/* ======================= INVOICE PDF ======================= */
/** EXACT match + centered LOGO image underlined */
async function generateInvoicePDF(i: Invoice) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = 210, H = 297;
  const L = 18, R = W - 18; // page margins

  type RGB = [number, number, number];
  const BLACK: RGB = [20, 20, 20];
  const GREY:  RGB = [145, 145, 145]; // faint label grey
  const setRGB = (c: RGB) => doc.setTextColor(c[0], c[1], c[2]);


const logoPng = await loadAsPngDataUrl("/logo.png");
const logoGif = await loadAsPngDataUrl("/Studyvisummp4logo%20(1)%20(1).gif");

// Right alignment
const logoY = 27;
const logoW = 82;          // adjust ±2 if you want it a bit bigger/smaller
const logoH = 18;
const logoX = R - logoW;   // <— right aligned to the margin

if (logoPng) {
  doc.addImage(logoPng, "PNG", logoX, logoY, logoW, logoH);
} else if (logoGif) {
  doc.addImage(logoGif, "PNG", logoX, logoY, logoW, logoH);
} else {
  // fallback text placed at the right
  doc.setFont("times", "bold");
  doc.setFontSize(24);
  doc.setTextColor(20,20,20);
  doc.text("STUDYVISUM", R, logoY + 12, { align: "right" });
}

// Hairline UNDER the logo (spans across the page like your screenshot)
const underlineY = logoY + logoH + 4.5;
doc.setDrawColor(35);
doc.setLineWidth(0.8);
doc.line(L, underlineY, R, underlineY);

  /* ── INVOICE heading (left) ── */
  const invTop = underlineY + 12.5; // generous whitespace
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);              // larger like the screenshot
  setRGB([70, 70, 70]);
  doc.text("INVOICE", L, invTop);

  /* ── Meta (right): INVOICE NO / DATE ── */
  const metaY = invTop + 22;        // breathing room like the reference
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.3);
  setRGB(GREY);
  doc.text("INVOICE NO:", R - 54, metaY);
  doc.text("DATE:",       R - 54, metaY + 6);
  setRGB(BLACK);
  doc.text(i.id,                            R, metaY,     { align: "right" });
  doc.text(formatDateDDMMYYYY(i.createdAt), R, metaY + 6, { align: "right" });

  /* ── ISSUED TO (left) ── */
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.3);
  setRGB(GREY);
  doc.text("ISSUED TO:", L, metaY);
  setRGB(BLACK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text(i.name || "—", L, metaY + 7);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.3);
  if (i.phone) { setRGB(GREY); doc.text(i.phone, L, metaY + 13); }
  if (i.email) { setRGB(GREY); doc.text(i.email, L, metaY + 19); }
  setRGB(BLACK);

  /* ── Table header: DESCRIPTION · RATE · QTY · TOTAL ── */
  const tY = metaY + 29;
  doc.setDrawColor(65); doc.setLineWidth(0.25);
  doc.line(L, tY - 9, R, tY - 9);   // hairline above header

  const col = {
    desc: L,
    rate: R - 58,
    qty:  R - 32,
    total:R
  } as const;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.3);
  setRGB([60,60,60]);
  doc.text("DESCRIPTION", col.desc, tY - 3);
  doc.text("RATE",        col.rate, tY - 3, { align: "right" });
  doc.text("QTY",         col.qty,  tY - 3, { align: "right" });
  doc.text("TOTAL",       col.total,tY - 3, { align: "right" });

  doc.line(L, tY - 1.6, R, tY - 1.6); // hairline under header

  /* ── Row ── */
  const rowY = tY + 7.2;
  const qty = 1;
  const rate = i.amount;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.8);
  setRGB(BLACK);
  doc.text(i.course?.trim() || "Course Fee", col.desc, rowY);
  doc.text(money(rate),                      col.rate, rowY, { align: "right" });
  doc.text(String(qty),                      col.qty,  rowY, { align: "right" });
  doc.setFont("helvetica", "bold");
  doc.text(money(qty * rate),                col.total,rowY, { align: "right" });

  /* ── Totals (right) ── */
  const boxTop = rowY + 26;
  const labelX = R - 38;
  const valueX = R;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.6);
  setRGB(GREY);
  doc.text("SUBTOTAL", labelX, boxTop);
  doc.text("Tax",      labelX, boxTop + 6);
  setRGB(BLACK);

  const sub = rate;
  const tax = 0;
  const grand = sub + tax;

  doc.text(money(sub), valueX, boxTop,     { align: "right" });
  doc.text(money(tax), valueX, boxTop + 6, { align: "right" });

  // short bold rule before TOTAL (short & subtle)
  const barY = boxTop + 14.2;
  doc.setDrawColor(25); doc.setLineWidth(0.7);
  doc.line(R - 64, barY, R, barY);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11.5);
  doc.text("TOTAL", labelX, barY + 7);
  doc.text(money(grand), valueX, barY + 7, { align: "right" });

  /* ── Payment info (left) ── */
  const payY = H - 56;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.6);
  doc.text("PAYMENT INFO:", L, payY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.3);
  const paymentLines = [
    "UPI: studyvisum@upi  ·  Ref: " + i.id,
    "Email: info@studyvisum.com  ·  Phone: +91 9704879361",
    "Address: Flat No. 301 A Block, Okaz Complex Opp. Pillar No. 5, Mehdipatnam Hyderabad, India 500028"
  ];
  let yy = payY + 6;
  paymentLines.forEach(line => { doc.text(line, L, yy); yy += 5.1; });

  // bottom hairline
  doc.setDrawColor(210); doc.setLineWidth(0.3);
  doc.line(L, H - 18, R, H - 18);
  /* ── Payment info (left) ── */


  /* ── Status tag (show only when PAID) ── */
  if (i.status === "PAID") {
    const pillY = metaY + 11.2;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.3);

    const statusColor: RGB = [0, 130, 60]; // green for PAID
    setRGB(statusColor);
    doc.text("PAID", R, pillY, { align: "right" });

    setRGB(BLACK); // reset text color
  }

  doc.save(`Invoice-${i.id}.pdf`);
}


export async function generateLetterHeadPDF(
  name: string,
  phone: string,
  content: string
) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = 210, H = 297;

  const MARGIN = 2;
  const L = MARGIN, R = W - MARGIN;
  const LEFT_RAIL = L + 9.0;

  const BLACK: [number, number, number] = [20, 20, 20];
  const HAIR:  [number, number, number] = [112, 112, 112];
  const GOLD:  [number, number, number] = [184, 138, 85];
  const ICONHEX = "#B88A55";

  const EPS = 0.35;
  // @ts-ignore
  doc.setLineCap?.("butt");
  // @ts-ignore
  doc.setLineJoin?.("miter");

  /* ── Wordmark ── */
  // const logoPng = await loadAsPngDataUrl("/logos/studyvisum-wordmark.png");
  const logoPng = await loadAsPngDataUrl("/logo.png");
  const logoGif = await loadAsPngDataUrl(
    "/Studyvisummp4logo%20(1)%20(1).gif"
  );

  const LOGO_GAP = 3.0; // gap between gold rail and logo
  const logoX = LEFT_RAIL + LOGO_GAP,
        logoY = 24.0,
        logoW = 63.0,
        logoH = 15.0;

  if (logoPng)      doc.addImage(logoPng, "PNG", logoX, logoY, logoW, logoH);
  else if (logoGif) doc.addImage(logoGif, "PNG", logoX, logoY, logoW, logoH);
  else {
    doc.setFont("times", "bold");
    doc.setFontSize(18);
    doc.setTextColor(...BLACK);
    doc.text("STUDYVISUM", logoX + 1, logoY + 11);
  }

  /* ── Hairline under logo (remove if you don't want it) ── */
  const hairY = logoY + logoH + 3.4;
  doc.setDrawColor(...HAIR);
  doc.setLineWidth(0.3);
  doc.line(0 - EPS, hairY, W + EPS, hairY);
const iPhone = await loadAsPngDataUrl(svgIconDataUrl("phone", ICONHEX));
const iEmail = await loadAsPngDataUrl(svgIconDataUrl("email", ICONHEX));
const iLoc   = await loadAsPngDataUrl(svgIconDataUrl("location", ICONHEX));
const iWeb   = await loadAsPngDataUrl(svgIconDataUrl("globe", ICONHEX));

const phoneTxt = phone?.trim() || "+91 9704879361";

// We want the block on the RIGHT:
const ICON_S   = 5.0;   // bigger icons
const ICON_PAD = 3.0;   // more breathing room



// width of the text column
const TEXT_WIDTH = 60;                 // tweak this if you want it narrower/wider
// leave a small 3mm gap from the right page margin
const TEXT_X = R - 3 - TEXT_WIDTH;     // left edge of the text column
// icon column to the left of the text
const BLOCK_LEFT_X = TEXT_X - ICON_PAD - ICON_S;

// vertical position – "at the top"
const ROW_GAP     = 6.5;
const CONTACT_TOP = logoY - 14;         // move up/down by changing this

doc.setFont("helvetica", "normal");
doc.setFontSize(8.3);
doc.setTextColor(...BLACK);

type Row = { icon: string | null; text: string };

const rows: Row[] = [
  // ONLY your official numbers now, no form input
  { icon: iPhone, text: " +91 9704879361" },
  { icon: iEmail, text: "info@studyvisum.com" },
  {
    icon: iLoc,
    text: "Flat No. 301, A Block, Okaz Complex, Opp. Pillar No. 5, Mehdipatnam, Hyderabad 500028",
  },
  { icon: iWeb, text: "www.studyvisum.com" },
];

function drawRightSideRow(yBase: number, r: Row) {
  const lines = doc.splitTextToSize(r.text, TEXT_WIDTH) as string[];

  // icon column
  if (r.icon) {
    // const iconY = yBase - ICON_S + 0.9;
    const iconY = yBase - ICON_S + 1.6;

    doc.addImage(r.icon, "PNG", BLOCK_LEFT_X, iconY, ICON_S, ICON_S);
  }

  // left-aligned text column (but placed on the right side of the page)
  lines.forEach((ln, i) => {
    const y = yBase + i * (ROW_GAP - 0.2);
    doc.text(ln, TEXT_X, y);
  });

  return ROW_GAP * Math.max(1, lines.length);
}

// draw all rows
let y = CONTACT_TOP;
rows.forEach(r => { y += drawRightSideRow(y, r); });


  /* ── Footer bar (touching bottom) ── */
  const barH = 6.0;
  const barY = H - barH;      // makes the bar touch the bottom edge
  doc.setFillColor(...GOLD);
  doc.rect(0, barY, W, barH, "F");

  /* ── Vertical gold rule ── */
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(1.0);
  doc.line(LEFT_RAIL, 0 - EPS, LEFT_RAIL, barY);

  /* ── Body text ── */
  const bodyX   = LEFT_RAIL + 6.3;
  const bodyTop = hairY + 24;
  if (content?.trim()) {
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...BLACK);
    doc.setFontSize(11.2);
    const lines = doc.splitTextToSize(content.trim(), R - bodyX);
    doc.text(lines, bodyX, bodyTop);
  }

  doc.save("studyvisumLetterhead.pdf");
}


/* ======================= Component ======================= */
export default function Billing() {
  const [items, setItems] = useState<Invoice[]>([]);
  const [letterHeads, setLetterHeads] = useState<LetterHead[]>([]);
  const [filter, setFilter] = useState("");

  // Invoice form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [dueDate, setDueDate] = useState("");
  const [remarks, setRemarks] = useState("");

  // LetterHead form
  const [lhName, setLhName] = useState("");
  const [lhPhone, setLhPhone] = useState("");
  const [lhContent, setLhContent] = useState("");

  // Pill styles
  const pillStyle: React.CSSProperties = {
    border: "none",
    borderRadius: 9999,
    padding: "10px 18px",
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "0.02em",
    color: "#fff",
    cursor: "pointer",
    backgroundImage: "linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #c026d3 100%)",
    boxShadow: "0 10px 24px rgba(124,58,237,0.35)",
    transition: "filter .2s ease, transform .2s ease, box-shadow .2s ease",
  };
  const pillSmStyle: React.CSSProperties = {
    ...pillStyle,
    padding: "6px 12px",
    fontSize: "12px",
    boxShadow: "0 6px 18px rgba(124,58,237,0.30)",
  };
  const pillHoverIn  = (el: HTMLButtonElement) => (el.style.filter = "brightness(1.10)");
  const pillHoverOut = (el: HTMLButtonElement) => (el.style.filter = "brightness(1)");
  const pillActiveIn = (el: HTMLButtonElement) => (el.style.filter = "brightness(0.95)");
  const pillActiveOut= (el: HTMLButtonElement) => (el.style.filter = "brightness(1.10)");

 
useEffect(() => {
  async function init() {
    if (navigator.storage?.persist) {
      const granted = await navigator.storage.persist();
      console.log("Persistent granted:", granted);
    }

    setItems(listInvoices());
    setLetterHeads(listLetterHeads());
  }

  init();
}, []);


  const filtered = useMemo(() => {
    const f = filter.trim().toLowerCase();
    if (!f) return items;
    return items.filter(i =>
      i.name.toLowerCase().includes(f) ||
      i.id.toLowerCase().includes(f) ||
      i.status.toLowerCase().includes(f)
    );
  }, [items, filter]);

  function resetForm() {
    setName(""); setEmail(""); setPhone("");
    setCourse(""); setAmount(""); setDueDate(""); setRemarks("");
  }
  function resetLetterHeadForm() {
    setLhName(""); setLhPhone(""); setLhContent("");
  }

  function createInvoice(): Invoice | null {
    if (!name || !amount) { alert("Name and Amount are required"); return null; }
    if (phone && !/^\d{10}$/.test(phone)) { alert("Phone must be 10 digits"); return null; }

    const id = nextInvoiceId(); bumpCounter();
    const now = new Date().toISOString();
     const inv: Invoice = {
      id, name,
      email: email || undefined,
      phone: phone || undefined,
      course: course || undefined,
      amount: Number(amount),
      dueDate: dueDate || undefined,
      remarks: remarks || undefined,
      status: "UNPAID",
      createdAt: now, updatedAt: now
    };
    upsertInvoice(inv);
    setItems(listInvoices());
    return inv;
  }

  function createLetterHead(): LetterHead | null {
    if (!lhName || !lhContent) { alert("Name and Content are required"); return null; }
    if (lhPhone && !/^\d{10}$/.test(lhPhone)) { alert("Phone must be 10 digits"); return null; }

    const id = nextLetterHeadId(); bumpLetterHeadCounter();
    const now = new Date().toISOString();
    const lh: LetterHead = {
      id,
      name: lhName,
      phone: lhPhone || undefined,
      content: lhContent,
      createdAt: now,
      updatedAt: now
    };
    upsertLetterHead(lh);
    setLetterHeads(listLetterHeads());
    return lh;
  }

  async function handleSave() {
    const inv = createInvoice();
    if (inv) resetForm();
  }
  async function handleSaveLetterHead() {
    const lh = createLetterHead();
    if (lh) resetLetterHeadForm();
  }

  async function handlePdf() {
    const inv = createInvoice();
    if (!inv) return;
    await generateInvoicePDF(inv);
    resetForm();
  }
  async function handlePdfLetterHead() {
    const lh = createLetterHead();
    if (!lh) return;
    await generateLetterHeadPDF(lh.name, lh.phone || "", lh.content);
    resetLetterHeadForm();
  }

  function handleWhatsApp() {
    const inv = createInvoice();
    if (!inv) return;
    if (!inv.phone) { alert("Add a 10-digit phone number"); return; }
    window.open(whatsappUrl(inv.phone, inv.name, inv.id, inv.amount), "_blank");
    resetForm();
  }
  function handleWhatsAppLetterHead() {
    const lh = createLetterHead();
    if (!lh) return;
    if (!lh.phone) { alert("Add a 10-digit phone number"); return; }
    window.open(whatsappUrlLetterHead(lh.phone, lh.name), "_blank");
    resetLetterHeadForm();
  }

  function handleEmail() {
    const inv = createInvoice();
    if (!inv) return;
    if (!inv.email) return alert("Please add an email address to share via email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inv.email)) return alert("Please enter a valid email address");
    window.open(gmailUrl(inv.email, inv.name, inv.id, inv.amount), "_blank");
    resetForm();
  }
  function handleEmailLetterHead() {
    const lh = createLetterHead();
    if (!lh) return;
    window.open(gmailUrlLetterHead(lh.name), "_blank");
    resetLetterHeadForm();
  }
  function handleEmailExisting(invoice: Invoice) {
    if (!invoice.email) return alert("No email address found for this invoice");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(invoice.email)) return alert("Invalid email format for this invoice");
    window.open(gmailUrl(invoice.email, invoice.name, invoice.id, invoice.amount), "_blank");
  }

  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7f3] via-[#faf7ff] to-[#f8faff] px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
          <h1 className="text-3xl font-semibold text-gray-900">Billing Dashboard</h1>

          <div className="flex items-center gap-2">
            <input
              placeholder="Search by name/id/status…"
              className="w-72 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />

            <div className="flex items-center gap-2 mt-3 sm:mt-0">
              <button
                className="rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => router.push("/billing/news")}
              >
                Latest News
              </button>
            </div>

            <button
              className="rounded-xl px-4 py-2 text-gray-700 border border-gray-300 bg-white hover:bg-gray-50"
              onClick={async () => {
                await fetch("/api/billing/logout", { method: "POST" });
                window.location.href = "/billing/login";
              }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {/* Create Invoice */}
          <div className="rounded-3xl bg-white shadow-md ring-1 ring-gray-200 p-6 flex flex-col min-h-[440px]">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Create Invoice</h2>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <input className="input sm:col-span-6 h-[44px]" placeholder="Name *" value={name} onChange={e => setName(e.target.value)} />
              <input className="input sm:col-span-6 h-[44px]" type="email" placeholder="Email * for email sharing" value={email} onChange={e => setEmail(e.target.value)} />
              <input className="input sm:col-span-6 h-[44px]" placeholder="Phone (10 digits)" value={phone} onChange={e => setPhone(e.target.value)} />
              <input className="input sm:col-span-6 h-[44px]" placeholder="Course" value={course} onChange={e => setCourse(e.target.value)} />
              <input className="input sm:col-span-6 h-[44px]" type="number" min="0" placeholder="Amount (₹) *" value={amount} onChange={e => setAmount(e.target.value ? Number(e.target.value) : "")} />
              <input className="input input-date sm:col-span-6 h-[44px]" type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
              <textarea className="input sm:col-span-12 min-h-[92px]" placeholder="Remarks" value={remarks} onChange={e => setRemarks(e.target.value)} />
            </div>

            <div className="flex gap-3 pt-4 flex-wrap mt-auto">
              <button onClick={handleSave}            style={pillStyle} onMouseEnter={(e)=>pillHoverIn(e.currentTarget)}  onMouseLeave={(e)=>pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)}>Save</button>
              <button onClick={handlePdf}             style={pillStyle} onMouseEnter={(e)=>pillHoverIn(e.currentTarget)}  onMouseLeave={(e)=>pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)}>Generate PDF</button>
              <button onClick={handleWhatsApp}        style={pillStyle} onMouseEnter={(e)=>pillHoverIn(e.currentTarget)}  onMouseLeave={(e)=>pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)}>Share WhatsApp</button>
              <button onClick={handleEmail}           style={pillStyle} onMouseEnter={(e)=>pillHoverIn(e.currentTarget)}  onMouseLeave={(e)=>pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)}>Share Email</button>
            </div>

            <p className="text-xs text-gray-500 mt-3">Invoice ID format: SV-YYYY-### (auto)</p>
            <p className="text-xs text-blue-500 mt-1">Note: Email will open Gmail web with pre-filled content</p>
          </div>

          {/* Create Letter Head */}
          <div className="rounded-3xl bg-white shadow-md ring-1 ring-gray-200 p-6 flex flex-col min-h-[440px]">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Create Letter Head</h2>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <input   className="input sm:col-span-6 h-[44px]" placeholder="Name *" value={lhName}  onChange={e=>setLhName(e.target.value)} />
              <input   className="input sm:col-span-6 h-[44px]" placeholder="Phone (10 digits)" value={lhPhone} onChange={e=>setLhPhone(e.target.value)} />
              <textarea className="input sm:col-span-12" placeholder="Content *" value={lhContent} onChange={(e) => setLhContent(e.target.value)} style={{ minHeight: 260, resize: "vertical", display: "block" }} />
            </div>

            <div className="flex gap-3 pt-4 flex-wrap mt-auto">
              <button onClick={handleSaveLetterHead}     style={pillStyle} onMouseEnter={(e)=>pillHoverIn(e.currentTarget)}  onMouseLeave={(e)=>pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)}>Save</button>
              <button onClick={handlePdfLetterHead}      style={pillStyle} onMouseEnter={(e)=>pillHoverIn(e.currentTarget)}  onMouseLeave={(e)=>pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)}>Generate PDF</button>
              <button onClick={handleWhatsAppLetterHead} style={pillStyle} onMouseEnter={(e)=>pillHoverIn(e.currentTarget)}  onMouseLeave={(e)=>pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)}>Share WhatsApp</button>
              <button onClick={handleEmailLetterHead}    style={pillStyle} onMouseEnter={(e)=>pillHoverIn(e.currentTarget)}  onMouseLeave={(e)=>pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)}>Share Email</button>
            </div>

            <p className="text-xs text-gray-500 mt-3">LetterHead ID format: LH-YYYY-### (auto)</p>
            <p className="text-xs text-blue-500 mt-1">Note: Email will open Gmail web with pre-filled content</p>
          </div>
        </div>

        {/* Invoices Table */}
        <section className="mt-10">
          <div className="rounded-3xl bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <colgroup>
                  <col style={{ width: 130 }} />
                  <col />
                  <col style={{ width: 140 }} />
                  <col style={{ width: 120 }} />
                  <col style={{ width: 120 }} />
                  <col style={{ width: 120 }} />
                  <col style={{ width: 520 }} />
                </colgroup>

                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr className="text-left">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">ID</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">Name</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600 text-right">Amount</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">Created</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">Due</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">Status</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600 text-right w-[520px]">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((i, idx) => (
                    <tr key={i.id} className={`${idx % 2 ? "bg-white" : "bg-gray-50"} border-b border-gray-100 hover:bg-gray-100/50 transition`}>
                      <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">{i.id}</td>
                      <td className="px-6 py-4 text-gray-800">{i.name}</td>
                      <td className="px-6 py-4 font-medium text-gray-900 text-right whitespace-nowrap tnum">₹ {i.amount.toLocaleString("en-IN")}</td>
                      <td className="px-6 py-4 text-gray-700 whitespace-nowrap tnum">{i.createdAt.slice(0, 10)}</td>
                      <td className="px-6 py-4 text-gray-700 whitespace-nowrap tnum">{i.dueDate || "-"}</td>
                      <td className="px-6 py-4">
                        <span className={`status-pill ${i.status === "PAID" ? "status-paid" : "status-unpaid"}`}>{i.status}</span>
                      </td>
                      <td className="px-6 py-4 w-[520px]">
                        <div className="actions-grid">
                          <button style={{ ...pillSmStyle, width: "72px"  }} onMouseEnter={(e) => pillHoverIn(e.currentTarget)} onMouseLeave={(e) => pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)} onClick={() => generateInvoicePDF(i)}>PDF</button>
                          <button style={{ ...pillSmStyle, width: "120px" }} onMouseEnter={(e) => pillHoverIn(e.currentTarget)} onMouseLeave={(e) => pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)} onClick={() => { setStatus(i.id, i.status === "PAID" ? "UNPAID" : "PAID"); setItems(listInvoices()); }}>{i.status === "PAID" ? "Mark Unpaid" : "Mark Paid"}</button>
                          <button style={{ ...pillSmStyle, width: "120px" }} onMouseEnter={(e) => pillHoverIn(e.currentTarget)} onMouseLeave={(e) => pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)} onClick={() => { if (!i.phone) return alert("No phone number"); window.open(whatsappUrl(i.phone!, i.name, i.id, i.amount), "_blank"); }}>WhatsApp</button>
                          <button style={{ ...pillSmStyle, width: "88px"  }} onMouseEnter={(e) => pillHoverIn(e.currentTarget)} onMouseLeave={(e) => pillHoverOut(e.currentTarget)} onMouseDown={(e)=>pillActiveIn(e.currentTarget)} onMouseUp={(e)=>pillActiveOut(e.currentTarget)} onClick={() => handleEmailExisting(i)}>Email</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr><td colSpan={7} className="px-6 py-10 text-center text-gray-500">No invoices yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Letter Heads Table */}
        <section className="mt-10">
          <div className="rounded-3xl bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <colgroup>
                  <col style={{ width: 130 }} />  {/* ID */}
                  <col />                         {/* Name */}
                  <col style={{ width: 160 }} />  {/* Created */}
                  <col style={{ width: 520 }} />  {/* Actions */}
                </colgroup>

                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr className="text-left">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">ID</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">Name</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">Created</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {letterHeads.map((lh, idx) => (
                    <tr key={lh.id} className={`${idx % 2 ? "bg-white" : "bg-gray-50"} border-b border-gray-100 hover:bg-gray-100/50 transition`}>
                      <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">{lh.id}</td>
                      <td className="px-6 py-4 text-gray-800">{lh.name}</td>
                      <td className="px-6 py-4 text-gray-700 whitespace-nowrap tnum">{lh.createdAt.slice(0, 10)}</td>
                      <td className="px-6 py-4 w-[520px]">
                        <div className="actions-grid">
                          <button
                            style={{ ...pillSmStyle, width: "72px" }}
                            onMouseEnter={(e) => pillHoverIn(e.currentTarget)}
                            onMouseLeave={(e) => pillHoverOut(e.currentTarget)}
                            onMouseDown={(e)=>pillActiveIn(e.currentTarget)}
                            onMouseUp={(e)=>pillActiveOut(e.currentTarget)}
                            onClick={() => generateLetterHeadPDF(lh.name, lh.phone || "", lh.content)}
                          >PDF</button>

                          <button
                            style={{ ...pillSmStyle, width: "120px" }}
                            onMouseEnter={(e) => pillHoverIn(e.currentTarget)}
                            onMouseLeave={(e) => pillHoverOut(e.currentTarget)}
                            onMouseDown={(e)=>pillActiveIn(e.currentTarget)}
                            onMouseUp={(e)=>pillActiveOut(e.currentTarget)}
                            onClick={() => {
                              if (!lh.phone) return alert("No phone number");
                              window.open(whatsappUrlLetterHead(lh.phone, lh.name), "_blank");
                            }}
                          >WhatsApp</button>

                          <button
                            style={{ ...pillSmStyle, width: "88px" }}
                            onMouseEnter={(e) => pillHoverIn(e.currentTarget)}
                            onMouseLeave={(e) => pillHoverOut(e.currentTarget)}
                            onMouseDown={(e)=>pillActiveIn(e.currentTarget)}
                            onMouseUp={(e)=>pillActiveOut(e.currentTarget)}
                            onClick={() => window.open(gmailUrlLetterHead(lh.name), "_blank")}
                          >Email</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {letterHeads.length === 0 && (
                    <tr><td colSpan={4} className="px-6 py-10 text-center text-gray-500">No letter heads yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Utility styles */}
      <style jsx global>{`
        .input{
          width:100%; border-radius:12px; border:1px solid #e5e7eb; background:#fff;
          padding-left:12px; padding-right:12px; font-size:14px; outline:none; height:44px; line-height:1.2;
          padding-top:10px; padding-bottom:10px; color:#111827;
        }
        .input::placeholder{ color:#9ca3af; }
        .input:focus{ box-shadow:0 0 0 2px rgba(99,102,241,.5); }
        textarea.input{ height:auto !important; padding-top:12px; padding-bottom:12px; }
        .input-date{ appearance:none; -webkit-appearance:none; padding-right:12px; }
        .input-date::-webkit-calendar-picker-indicator{ opacity:.7; cursor:pointer; margin-right:-4px; }

        .shadow-md{ box-shadow:0 6px 20px rgba(0,0,0,.05) !important; }
        .shadow-lg{ box-shadow:0 8px 26px rgba(0,0,0,.06) !important; }

        thead{ background:#fafafa; }
        tbody tr{ transition:background .2s ease; }
        tbody tr:hover{ background:#f9f9ff; }

        .tnum{ font-variant-numeric: tabular-nums; }

        .status-pill{
          display:inline-flex; align-items:center; justify-content:center;
          height:28px; min-width:88px; padding:0 10px; border-radius:9999px;
          font-size:12px; font-weight:600; white-space:nowrap;
        }
        .status-paid{  background:#e8f8ee; color:#16a34a; }
        .status-unpaid{background:#fff7e6; color:#a16207; }

        .actions-grid{
          display:grid; grid-template-columns:72px 120px 120px 88px; justify-content:end; gap:12px;
        }
        @media (max-width:1024px){
          .actions-grid{ grid-template-columns:repeat(2, minmax(0, 1fr)); justify-content:stretch; }
        }
      `}</style>
    </div>
  );
}
