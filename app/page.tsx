// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
// //       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
// //         <Image
// //           className="dark:invert"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={180}
// //           height={38}
// //           priority
// //         />
// //         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
// //           <li className="mb-2 tracking-[-.01em]">
// //             Get started by editing{" "}
// //             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
// //               app/page.tsx
// //             </code>
// //             .
// //           </li>
// //           <li className="tracking-[-.01em]">
// //             Save and see your changes instantly.
// //           </li>
// //         </ol>

// //         <div className="flex gap-4 items-center flex-col sm:flex-row">
// //           <a
// //             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className="dark:invert"
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={20}
// //               height={20}
// //             />
// //             Deploy now
// //           </a>
// //           <a
// //             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Read our docs
// //           </a>
// //         </div>
// //       </main>
// //       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/file.svg"
// //             alt="File icon"
// //             width={16}
// //             height={16}
// //           />
// //           Learn
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/window.svg"
// //             alt="Window icon"
// //             width={16}
// //             height={16}
// //           />
// //           Examples
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/globe.svg"
// //             alt="Globe icon"
// //             width={16}
// //             height={16}
// //           />
// //           Go to nextjs.org →
// //         </a>
// //       </footer>
// //     </div>
// //   );
// // }
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       {/* Navbar */}
//       <header className="relative z-10 flex items-center justify-between px-6 py-4 text-white">
//         <div className="text-lg font-bold">Hakeem Consultancy</div>
//         <nav className="space-x-4 hidden sm:block">
//           <a href="#" className="hover:text-yellow-300">Home</a>
//           <a href="#" className="hover:text-yellow-300">Services</a>
//           <a href="#" className="hover:text-yellow-300">Contact</a>
//         </nav>
//       </header>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-24 sm:py-32">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//           Study Abroad with Expert Guidance
//         </h1>
//         <p className="mt-4 text-lg sm:text-xl max-w-2xl">
//           Helping thousands of students realize their international dreams.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row gap-4">
//           <a href="#" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition">
//             Book Free Consultation
//           </a>
//           <a href="#" className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
//             Chat with Us
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
// import Header from './components/Header'
// import HeroSlider from './components/HeroSlider';


// export default function Home() {
//   return (
//     <>
//       {/* Top Bar + Main Navbar */}
//       <Header />

//       {/* Hero Section Placeholder */}
//       <section className="relative w-full h-screen overflow-hidden">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('/hero-bg.jpg')" }} // ← replace with your image in /public
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

//         {/* Hero Content */}
//         <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4 sm:px-10">
//           <p className="text-sm sm:text-base tracking-wide text-blue-300 mb-2">
//             HELPING STUDENTS WITH THEIR
//           </p>
//           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//             STUDY ABROAD DREAMS <br />
//             <span className="text-2xl sm:text-4xl font-light">Since 2006</span>
//           </h1>
//           <a
//             href="#contact"
//             className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm sm:text-base transition"
//           >
//             Book Free Counselling
//           </a>
//         </div>

//         {/* Arrows */}
//         <button className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/60 p-2 rounded-full hover:bg-black/80">
//           <span className="text-white text-xl">&lt;</span>
//         </button>
//         <button className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/60 p-2 rounded-full hover:bg-black/80">
//           <span className="text-white text-xl">&gt;</span>
//         </button>

//         {/* WhatsApp + Chat */}
//         <div className="absolute bottom-6 right-6 z-30 flex flex-col items-end gap-2">
//           <a href="https://wa.me/919000065858" target="_blank" rel="noopener noreferrer">
//             <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-12 h-12" />
//           </a>
//           <div className="bg-white text-black rounded-full px-4 py-2 shadow-md text-sm">
//             Chat with us 👋
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CountrySlider from './components/CountrySlider';
import ReviewsSection from './components/ReviewsSection';
import PopupForm from './components/PopupForm';

export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <Header />
<PopupForm/>
      {/* Hero Image Slider with Text and CTA */}
      <HeroSlider />
      <ReviewsSection /> 
      <CountrySlider />
    </>
  );
}
