
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// // Images in /public
// const images = ["/passports_image_canada_studyvisum.png", "/star_design_studyvisum.png"];

// type News = { id: string; title: string; body: string; updatedAt: string };
// const readNews = (): News[] => {
//   try {
//     return JSON.parse(localStorage.getItem("sv_news") || "[]");
//   } catch {
//     return [];
//   }
// };

// export default function HeroSlider() {
//   const [idx, setIdx] = useState(0);
//   const [hover, setHover] = useState(false);
//   const [news, setNews] = useState<News[]>([]);

//   const pairsCount = Math.ceil(images.length / 2);
//   const currentPair = Math.floor(idx / 2);

//   useEffect(() => {
//     if (hover) return;
//     const t = setInterval(() => next(), 5000);
//     return () => clearInterval(t);
//   }, [hover]);

//   useEffect(() => setNews(readNews()), []);

//   const next = () => setIdx((v) => (v + 2) % images.length);
//   const prev = () => setIdx((v) => (v - 2 + images.length) % images.length);
//   const goToPair = (p: number) => setIdx((p * 2) % images.length);

//   const leftSrc = images[idx % images.length];
//   const rightSrc = images[(idx + 1) % images.length];

//   const CARD_H = "h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px]";
//   const GRID_COLS = "lg:grid-cols-[1fr_1fr_360px]";

//   return (
//     <section
//       className="w-full mx-auto max-w-[1560px] px-3 sm:px-6 lg:px-8 mt-6"
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <div className={`grid gap-5 ${GRID_COLS} items-stretch`}>
//         {/* LEFT: two equal cards */}
//         <div className="relative lg:col-span-2">
//           <div className="grid grid-cols-2 gap-5 lg:-ml-2 items-stretch">
//             {/* Passport card */}
//             <figure
//               className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
//             >
//               <Image
//                 src={leftSrc}
//                 alt="Passport slide"
//                 fill
//                 priority
//                 className="object-cover object-center transition-transform duration-500 hover:scale-105"
//               />
//             </figure>

//             {/* Star card */}
//             {/* Star card — clickable -> /contact */}
//             <Link
//               href="/contact"
//               className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
//               aria-label="Go to Contact Us"
//               title="Contact Us"
//               prefetch
//             >
//               <figure
//                 className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer`}
//               >
//                 <Image
//                   src={rightSrc}
//                   alt="Contact star – click to open Contact Us"
//                   fill
//                   className="object-cover object-center transition-transform duration-500 hover:scale-105"
//                 />
//                 {/* Optional clickable overlay for better hit area, keeps semantics */}
//                 <span className="sr-only">Open Contact Us</span>
//               </figure>
//             </Link>
//           </div>
          

//           {/* arrows */}
//           {/* <button
//             onClick={prev}
//             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm transition-all duration-200 hover:scale-110"
//             aria-label="Previous"
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button
//             onClick={next}
//             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm transition-all duration-200 hover:scale-110"
//             aria-label="Next"
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>

//           {/* dots */}
//           {/* <div className="mt-3 flex items-center justify-center gap-2">
//             {Array.from({ length: pairsCount }).map((_, p) => (
//               <button
//                 key={p}
//                 onClick={() => goToPair(p)}
//                 className={`h-2.5 rounded-full transition-all ${
//                   p === currentPair ? "w-6 bg-black" : "w-2.5 bg-black/40 hover:bg-black/70"
//                 }`}
//                 aria-label={`Go to slide ${p + 1}`}
//               />
//             ))}
//           </div> */} 
//         </div>

//         {/* RIGHT: Latest News */}
//         <aside
//           className={`rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 ${CARD_H} flex flex-col transition-all duration-300 hover:shadow-2xl`}
//         >
//           {/* <h3 className="text-2xl font-semibold mb-3 text-center">Latest News</h3> */}
//           <h3 className="px-3 py-1.5 text-base font-semibold mb-3 text-center text-gray-900">
//   Latest News
// </h3>


//           <hr className="border-gray-200 mb-3" />
//           <div className="space-y-4 overflow-auto">
//             {(news.length ? news : demoNews).slice(0, 3).map((n) => (
//               <div
//                 key={n.id}
//                 className="group transition-all duration-300 hover:translate-x-1"
//               >
//                 <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-all duration-300 text-justify underline-offset-4 group-hover:underline">
//                   {n.title}
//                 </h4>
//                 <p
//                   className="text-sm text-gray-600 mt-1 leading-relaxed transition-all duration-300"
//                   style={{ textAlign: "justify" }}
//                 >
//                   {n.body}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }

// // Fallback demo items if localStorage empty
// const demoNews: News[] = [
//   {
//     id: "1",
//     title: "New Study Programs Available",
//     body: "Explore our latest study abroad programs in top universities.",
//     updatedAt: "",
//   },
//   {
//     id: "2",
//     title: "Upcoming Counselling Sessions",
//     body: "Join our expert counsellors for guidance on your study abroad journey.",
//     updatedAt: "",
//   },
//   {
//     id: "3",
//     title: "Visa Success Stories",
//     body: "Read about our recent successful visa applications.",
//     updatedAt: "",
//   },
// ];

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Images in /public
const images = ["/passports_image_canada_studyvisum.png", "/star_design_studyvisum.png"];

type News = {
  id: string;
  title: string;
  body: string;
  created_at?: string;
  updated_at?: string;
};

async function fetchNews(): Promise<News[]> {
  try {
    const r = await fetch("/api/news", { cache: "no-store" });
    const data = await r.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const [news, setNews] = useState<News[]>([]);
const [loadingNews, setLoadingNews] = useState(true);


  const pairsCount = Math.ceil(images.length / 2);
  const currentPair = Math.floor(idx / 2);

  useEffect(() => {
    if (hover) return;
    const t = setInterval(() => next(), 5000);
    return () => clearInterval(t);
  }, [hover]);

  useEffect(() => {
  (async () => {
    setLoadingNews(true);
    const items = await fetchNews();
    setNews(items);
    setLoadingNews(false);
  })();
}, []);


  const next = () => setIdx((v) => (v + 2) % images.length);
  const prev = () => setIdx((v) => (v - 2 + images.length) % images.length);
  const goToPair = (p: number) => setIdx((p * 2) % images.length);

  const leftSrc = images[idx % images.length];
  const rightSrc = images[(idx + 1) % images.length];

  const CARD_H = "h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px]";
  const GRID_COLS = "lg:grid-cols-[1fr_1fr_360px]";

  return (
    <section
      className="w-full mx-auto max-w-[1560px] px-3 sm:px-6 lg:px-8 mt-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`grid gap-5 ${GRID_COLS} items-stretch`}>
        {/* LEFT: two equal cards */}
        <div className="relative lg:col-span-2">
          <div className="grid grid-cols-2 gap-5 lg:-ml-2 items-stretch">
            {/* Passport card */}
            <figure
              className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
            >
              <Image
                src={leftSrc}
                alt="Passport slide"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </figure>

            {/* Star card — clickable -> /contact */}
            <Link
              href="/contact"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
              aria-label="Go to Contact Us"
              title="Contact Us"
              prefetch
            >
              <figure
                className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer`}
              >
                <Image
                  src={rightSrc}
                  alt="Contact star – click to open Contact Us"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <span className="sr-only">Open Contact Us</span>
              </figure>
            </Link>
          </div>

          {/* arrows / dots are commented in your code - kept same */}
        </div>

        {/* RIGHT: Latest News */}
        <aside
          className={`rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 ${CARD_H} flex flex-col transition-all duration-300 hover:shadow-2xl`}
        >
          <h3 className="px-3 py-1.5 text-base font-semibold mb-3 text-center text-gray-900">
            Latest News
          </h3>

          <hr className="border-gray-200 mb-3" />

          <div className="space-y-4 overflow-auto">
           {loadingNews ? (
  <p className="text-gray-500 text-center py-6">Loading...</p>
) : (
  (news.length ? news : demoNews).slice(0, 3).map((n) => (
    <div key={n.id} className="group transition-all duration-300 hover:translate-x-1">
      <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-all duration-300 text-justify underline-offset-4 group-hover:underline">
        {n.title}
      </h4>
      <p
        className="text-sm text-gray-600 mt-1 leading-relaxed transition-all duration-300"
        style={{ textAlign: "justify" }}
      >
        {n.body}
      </p>
    </div>
  ))
)}

          </div>
        </aside>
      </div>
    </section>
  );
}

// Fallback demo items if Supabase empty
const demoNews: News[] = [
  {
    id: "1",
    title: "New Study Programs Available",
    body: "Explore our latest study abroad programs in top universities.",
  },
  {
    id: "2",
    title: "Upcoming Counselling Sessions",
    body: "Join our expert counsellors for guidance on your study abroad journey.",
  },
  {
    id: "3",
    title: "Visa Success Stories",
    body: "Read about our recent successful visa applications.",
  },
];
