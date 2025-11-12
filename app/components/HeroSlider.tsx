// // // // // // // // // // 'use client';
// // // // // // // // // // import { useState, useEffect, useRef } from 'react';
// // // // // // // // // // import Image from 'next/image';

// // // // // // // // // // const images = [
// // // // // // // // // //   '/std1.jpg',
// // // // // // // // // //   '/std2.jpg', 
// // // // // // // // // //   '/std3.jpg',
// // // // // // // // // //   '/std7.jpg',
// // // // // // // // // //   '/std9.jpeg',
// // // // // // // // // // ];

// // // // // // // // // // export default function HeroSlider() {
// // // // // // // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // // // // // // //   const [isHovered, setIsHovered] = useState(false);
// // // // // // // // // //   const progressRef = useRef<HTMLDivElement>(null);

// // // // // // // // // //   // Auto-slide functionality with pause on hover
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (isHovered) return;
    
// // // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // // //       setCurrentSlide((prev) => (prev + 1) % images.length);
// // // // // // // // // //     }, 5000);

// // // // // // // // // //     return () => clearInterval(timer);
// // // // // // // // // //   }, [isHovered]);

// // // // // // // // // //   // Reset progress bar animation on slide change
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (progressRef.current) {
// // // // // // // // // //       progressRef.current.style.width = '0%';
// // // // // // // // // //       setTimeout(() => {
// // // // // // // // // //         if (progressRef.current) {
// // // // // // // // // //           progressRef.current.style.width = '100%';
// // // // // // // // // //         }
// // // // // // // // // //       }, 50);
// // // // // // // // // //     }
// // // // // // // // // //   }, [currentSlide]);

// // // // // // // // // //   const goToSlide = (index: number) => {
// // // // // // // // // //     setCurrentSlide(index);
// // // // // // // // // //   };

// // // // // // // // // //   const nextSlide = () => {
// // // // // // // // // //     setCurrentSlide((prev) => (prev + 1) % images.length);
// // // // // // // // // //   };

// // // // // // // // // //   const prevSlide = () => {
// // // // // // // // // //     setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div 
// // // // // // // // // //       className="relative w-full h-screen overflow-hidden"
// // // // // // // // // //       onMouseEnter={() => setIsHovered(true)}
// // // // // // // // // //       onMouseLeave={() => setIsHovered(false)}
// // // // // // // // // //     >
// // // // // // // // // //       {/* Background Images with Ken Burns effect */}
// // // // // // // // // //       {images.map((src, index) => (
// // // // // // // // // //         <div
// // // // // // // // // //           key={`slide-${index}`}
// // // // // // // // // //           className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] ${
// // // // // // // // // //             index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
// // // // // // // // // //           }`}
// // // // // // // // // //         >
// // // // // // // // // //           <Image
// // // // // // // // // //             src={src}
// // // // // // // // // //             alt={`Study Abroad Dreams ${index + 1}`}
// // // // // // // // // //             fill
// // // // // // // // // //             className={`object-cover ${
// // // // // // // // // //               index === currentSlide ? 'animate-kenburns' : ''
// // // // // // // // // //             }`}
// // // // // // // // // //             priority={index === 0}
// // // // // // // // // //           />
// // // // // // // // // //           {/* Dynamic gradient overlay */}
// // // // // // // // // //           <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-blue-900/40 to-purple-900/30 z-10" />
// // // // // // // // // //         </div>
// // // // // // // // // //       ))}

// // // // // // // // // //       {/* Content with advanced animations */}
// // // // // // // // // //       <div className="absolute inset-0 z-20 flex items-center justify-center">
// // // // // // // // // //         <div className="text-center text-white px-4 max-w-6xl mx-auto">
// // // // // // // // // //           {/* Subtitle with staggered animation */}
// // // // // // // // // //           <p className="text-sm sm:text-base lg:text-lg tracking-wider text-blue-200 mb-4 font-medium animate-fade-in-up delay-100">
// // // // // // // // // //             HELPING STUDENTS WITH THEIR
// // // // // // // // // //           </p>

// // // // // // // // // //           {/* Main Title with parallax effect */}
// // // // // // // // // //           <div className="group">
// // // // // // // // // //             <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 transform transition-transform duration-700 ease-out group-hover:translate-y-1">
// // // // // // // // // //               <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent block mb-2 animate-text-glow">
// // // // // // // // // //                 STUDY ABROAD DREAMS
// // // // // // // // // //               </span>
// // // // // // // // // //               <span className="text-lg sm:text-2xl lg:text-3xl font-light bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent block mt-4 animate-text-glow delay-200">
// // // // // // // // // //                 Hakeem Consultancy Services
// // // // // // // // // //               </span>
// // // // // // // // // //             </h1>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* CTA Button with 3D effect */}
// // // // // // // // // //           <div className="mt-8 animate-fade-in-up delay-300">
// // // // // // // // // //             <a
// // // // // // // // // //               href="/counselling"
// // // // // // // // // //               className="relative inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-500 hover:scale-105 shadow-[0_10px_30px_-5px_rgba(239,68,68,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(239,68,68,0.5)] transform hover:-translate-y-1 active:translate-y-0 active:scale-95"
// // // // // // // // // //             >
// // // // // // // // // //               <span className="relative z-10">Book Free Counselling</span>
// // // // // // // // // //               <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 hover:opacity-100 rounded-full transition-opacity duration-500"></span>
// // // // // // // // // //             </a>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Animated decorative line */}
// // // // // // // // // //           <div className="mt-8 flex justify-center animate-fade-in-up delay-500">
// // // // // // // // // //             <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-line-expand origin-left"></div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Navigation Arrows with enhanced interaction */}
// // // // // // // // // //       <button
// // // // // // // // // //         onClick={prevSlide}
// // // // // // // // // //         className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
// // // // // // // // // //       >
// // // // // // // // // //         <svg 
// // // // // // // // // //           className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform" 
// // // // // // // // // //           fill="none" 
// // // // // // // // // //           stroke="currentColor" 
// // // // // // // // // //           viewBox="0 0 24 24"
// // // // // // // // // //         >
// // // // // // // // // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// // // // // // // // // //         </svg>
// // // // // // // // // //       </button>
      
// // // // // // // // // //       <button
// // // // // // // // // //         onClick={nextSlide}
// // // // // // // // // //         className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
// // // // // // // // // //       >
// // // // // // // // // //         <svg 
// // // // // // // // // //           className="w-6 h-6 group-hover:translate-x-[2px] transition-transform" 
// // // // // // // // // //           fill="none" 
// // // // // // // // // //           stroke="currentColor" 
// // // // // // // // // //           viewBox="0 0 24 24"
// // // // // // // // // //         >
// // // // // // // // // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // // // // // // // // //         </svg>
// // // // // // // // // //       </button>

// // // // // // // // // //       {/* Dots Navigation with bounce effect */}
// // // // // // // // // //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
// // // // // // // // // //         {images.map((_, index) => (
// // // // // // // // // //           <button
// // // // // // // // // //             key={`dot-${index}`}
// // // // // // // // // //             onClick={() => goToSlide(index)}
// // // // // // // // // //             className={`w-3 h-3 rounded-full transition-all duration-300 ${
// // // // // // // // // //               index === currentSlide 
// // // // // // // // // //                 ? 'bg-white shadow-lg scale-125 animate-bounce' 
// // // // // // // // // //                 : 'bg-white/50 hover:bg-white/80'
// // // // // // // // // //             }`}
// // // // // // // // // //           />
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Progress Bar with smooth animation */}
// // // // // // // // // //       <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30 overflow-hidden">
// // // // // // // // // //         <div 
// // // // // // // // // //           ref={progressRef}
// // // // // // // // // //           className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-[5000ms] ease-linear"
// // // // // // // // // //           style={{ width: '100%' }}
// // // // // // // // // //         />
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Custom animations in Tailwind config */}
// // // // // // // // // //       <style jsx global>{`
// // // // // // // // // //         @keyframes kenburns {
// // // // // // // // // //           0% { transform: scale(1); }
// // // // // // // // // //           100% { transform: scale(1.1); }
// // // // // // // // // //         }
        
// // // // // // // // // //         @keyframes fadeInUp {
// // // // // // // // // //           from { 
// // // // // // // // // //             opacity: 0;
// // // // // // // // // //             transform: translateY(20px);
// // // // // // // // // //           }
// // // // // // // // // //           to { 
// // // // // // // // // //             opacity: 1;
// // // // // // // // // //             transform: translateY(0);
// // // // // // // // // //           }
// // // // // // // // // //         }
        
// // // // // // // // // //         @keyframes textGlow {
// // // // // // // // // //           0% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
// // // // // // // // // //           50% { text-shadow: 0 0 20px rgba(255,255,255,0.6); }
// // // // // // // // // //           100% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
// // // // // // // // // //         }
        
// // // // // // // // // //         @keyframes lineExpand {
// // // // // // // // // //           from { transform: scaleX(0); }
// // // // // // // // // //           to { transform: scaleX(1); }
// // // // // // // // // //         }
        
// // // // // // // // // //         .animate-kenburns {
// // // // // // // // // //           animation: kenburns 20s ease-in-out infinite alternate;
// // // // // // // // // //         }
        
// // // // // // // // // //         .animate-fade-in-up {
// // // // // // // // // //           animation: fadeInUp 1s ease-out both;
// // // // // // // // // //         }
        
// // // // // // // // // //         .animate-text-glow {
// // // // // // // // // //           animation: textGlow 3s ease-in-out infinite;
// // // // // // // // // //         }
        
// // // // // // // // // //         .animate-line-expand {
// // // // // // // // // //           animation: lineExpand 1s ease-out both;
// // // // // // // // // //         }
        
// // // // // // // // // //         .delay-100 {
// // // // // // // // // //           animation-delay: 100ms;
// // // // // // // // // //         }
        
// // // // // // // // // //         .delay-200 {
// // // // // // // // // //           animation-delay: 200ms;
// // // // // // // // // //         }
        
// // // // // // // // // //         .delay-300 {
// // // // // // // // // //           animation-delay: 300ms;
// // // // // // // // // //         }
        
// // // // // // // // // //         .delay-500 {
// // // // // // // // // //           animation-delay: 500ms;
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // 'use client';
// // // // // // // // // import { useEffect, useRef, useState } from 'react';
// // // // // // // // // import Image from 'next/image';

// // // // // // // // // // ➊ add/rename to your images in /public
// // // // // // // // // const images = ['/passports_image_studyvisum.png', '/star_design_studyvisum.png'];

// // // // // // // // // // small reader for the right column "Latest News"
// // // // // // // // // type News = { id: string; title: string; body: string; updatedAt: string };
// // // // // // // // // const readNews = (): News[] => {
// // // // // // // // //   try { return JSON.parse(localStorage.getItem('sv_news') || '[]'); } catch { return []; }
// // // // // // // // // };

// // // // // // // // // export default function HeroSlider() {
// // // // // // // // //   const [idx, setIdx] = useState(0);          // points at LEFT image
// // // // // // // // //   const [hover, setHover] = useState(false);
// // // // // // // // //   const [news, setNews] = useState<News[]>([]);
// // // // // // // // //   const pairsCount = Math.ceil(images.length / 2);
// // // // // // // // //   const currentPair = Math.floor(idx / 2);

// // // // // // // // //   // auto-rotate
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (hover) return;
// // // // // // // // //     const t = setInterval(() => next(), 5000);
// // // // // // // // //     return () => clearInterval(t);
// // // // // // // // //   }, [hover]);

// // // // // // // // //   // load news once (for the right sidebar)
// // // // // // // // //   useEffect(() => setNews(readNews()), []);

// // // // // // // // //   const next = () => setIdx((v) => (v + 2) % images.length);
// // // // // // // // //   const prev = () => setIdx((v) => (v - 2 + images.length) % images.length);
// // // // // // // // //   const goToPair = (p: number) => setIdx((p * 2) % images.length);

// // // // // // // // //   // visible two images
// // // // // // // // //   const leftSrc = images[idx % images.length];
// // // // // // // // //   const rightSrc = images[(idx + 1) % images.length];

// // // // // // // // //   return (
// // // // // // // // //     <section
// // // // // // // // //       className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"
// // // // // // // // //       onMouseEnter={() => setHover(true)}
// // // // // // // // //       onMouseLeave={() => setHover(false)}
// // // // // // // // //     >
// // // // // // // // //       <div className="grid gap-6 lg:grid-cols-3">
// // // // // // // // //         {/* LEFT: 2-up slider area */}
// // // // // // // // //         <div className="lg:col-span-2 relative">
// // // // // // // // //           <div className="grid md:grid-cols-2 gap-6">
// // // // // // // // //             {/* left card */}
// // // // // // // // //             <figure className="relative h-[300px]  rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white" >
// // // // // // // // //               <Image
// // // // // // // // //                 src={leftSrc}
// // // // // // // // //                 alt="slide"
// // // // // // // // //                 fill
// // // // // // // // //                 className="object-cover transition-transform duration-[1200ms] ease-out will-change-transform hover:scale-[1.03]"
// // // // // // // // //                 priority
// // // // // // // // //               />
// // // // // // // // //             </figure>

// // // // // // // // //             {/* right card */}
// // // // // // // // //             <figure className="relative h-[300px]  rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white" >
// // // // // // // // //               <Image
// // // // // // // // //                 src={rightSrc}
// // // // // // // // //                 alt="slide"
// // // // // // // // //                 fill
// // // // // // // // //                 className="object-cover transition-transform duration-[1200ms] ease-out will-change-transform hover:scale-[1.03]"
// // // // // // // // //               />
// // // // // // // // //             </figure>
// // // // // // // // //           </div>

// // // // // // // // //           {/* arrows */}
// // // // // // // // //           <button
// // // // // // // // //             onClick={prev}
// // // // // // // // //             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // // // // // // //             aria-label="Previous"
// // // // // // // // //           >
// // // // // // // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
// // // // // // // // //           </button>
// // // // // // // // //           <button
// // // // // // // // //             onClick={next}
// // // // // // // // //             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // // // // // // //             aria-label="Next"
// // // // // // // // //           >
// // // // // // // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
// // // // // // // // //           </button>

// // // // // // // // //           {/* dots */}
// // // // // // // // //           <div className="mt-4 flex items-center justify-center gap-2">
// // // // // // // // //             {Array.from({ length: pairsCount }).map((_, p) => (
// // // // // // // // //               <button
// // // // // // // // //                 key={p}
// // // // // // // // //                 onClick={() => goToPair(p)}
// // // // // // // // //                 className={`h-2.5 rounded-full transition-all ${
// // // // // // // // //                   p === currentPair ? 'w-6 bg-black' : 'w-2.5 bg-black/40 hover:bg-black/70'
// // // // // // // // //                 }`}
// // // // // // // // //                 aria-label={`Go to slide ${p + 1}`}
// // // // // // // // //               />
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* RIGHT: Latest News box */}
// // // // // // // // //         <aside className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6">
// // // // // // // // //           <h3 className="text-2xl font-semibold mb-4">Latest News</h3>
// // // // // // // // //           <hr className="border-gray-200 mb-4" />
// // // // // // // // //           <div className="space-y-6">
// // // // // // // // //             {(news.length ? news : demoNews).slice(0, 3).map((n) => (
// // // // // // // // //               <div key={n.id} className="group">
// // // // // // // // //                 <h4 className="font-semibold text-gray-900 group-hover:text-gray-700">
// // // // // // // // //                   {n.title}
// // // // // // // // //                 </h4>
// // // // // // // // //                 <p className="text-sm text-gray-600 mt-1 leading-relaxed">
// // // // // // // // //                   {n.body}
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </aside>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // // fallback demo items if localStorage empty (optional)
// // // // // // // // // const demoNews: News[] = [
// // // // // // // // //   { id: '1', title: 'New Study Programs Available', body: 'Explore our latest study abroad programs in top universities.', updatedAt: '' },
// // // // // // // // //   { id: '2', title: 'Upcoming Counselling Sessions', body: 'Join our expert counsellors for guidance on your study abroad journey.', updatedAt: '' },
// // // // // // // // //   { id: '3', title: 'Visa Success Stories', body: 'Read about our recent successful visa applications.', updatedAt: '' },
// // // // // // // // // ];



// // // // // // // // "use client";

// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import Image from "next/image";

// // // // // // // // // Add/rename your images in /public
// // // // // // // // const images = ["/passports_image_studyvisum.png", "/star_design_studyvisum.png"];

// // // // // // // // // Small reader for the right column "Latest News"
// // // // // // // // type News = { id: string; title: string; body: string; updatedAt: string };
// // // // // // // // const readNews = (): News[] => {
// // // // // // // //   try {
// // // // // // // //     return JSON.parse(localStorage.getItem("sv_news") || "[]");
// // // // // // // //   } catch {
// // // // // // // //     return [];
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // export default function HeroSlider() {
// // // // // // // //   const [idx, setIdx] = useState(0);
// // // // // // // //   const [hover, setHover] = useState(false);
// // // // // // // //   const [news, setNews] = useState<News[]>([]);

// // // // // // // //   const pairsCount = Math.ceil(images.length / 2);
// // // // // // // //   const currentPair = Math.floor(idx / 2);

// // // // // // // //   // Auto-rotate (fixed deps)
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (hover) return; // pause when hovering
// // // // // // // //     const t = setInterval(() => next(), 5000);
// // // // // // // //     return () => clearInterval(t);
// // // // // // // //   }, [hover]);

// // // // // // // //   // Load news once
// // // // // // // //   useEffect(() => {
// // // // // // // //     setNews(readNews());
// // // // // // // //   }, []);

// // // // // // // //   const next = () => setIdx((v) => (v + 2) % images.length);
// // // // // // // //   const prev = () => setIdx((v) => (v - 2 + images.length) % images.length);
// // // // // // // //   const goToPair = (p: number) => setIdx((p * 2) % images.length);

// // // // // // // //   // Visible images
// // // // // // // //   const leftSrc = images[idx % images.length];
// // // // // // // //   const rightSrc = images[(idx + 1) % images.length];

// // // // // // // //   return (
// // // // // // // //     <section
// // // // // // // //       className="w-full mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 mt-6"
// // // // // // // //       onMouseEnter={() => setHover(true)}
// // // // // // // //       onMouseLeave={() => setHover(false)}
// // // // // // // //     >
// // // // // // // //       {/* Match reference: equal-height grid with tight gaps */}
// // // // // // // //       <div className="grid gap-5 lg:grid-cols-[2fr_1fr] items-stretch">
// // // // // // // //         {/* LEFT: 2-up slider */}
// // // // // // // //         <div className="relative">
// // // // // // // //           <div className="grid grid-cols-2 gap-5">
// // // // // // // //             {/* Left card (increased height to fill white space) */}
// // // // // // // //             <figure className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white">
// // // // // // // //               <Image
// // // // // // // //                 src={leftSrc}
// // // // // // // //                 alt="slide"
// // // // // // // //                 fill
// // // // // // // //                 priority
// // // // // // // //                 className="object-cover object-center"
// // // // // // // //               />
// // // // // // // //             </figure>

// // // // // // // //             {/* Right card (same aspect for uniform height) */}
// // // // // // // //             <figure className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white">
// // // // // // // //               <Image
// // // // // // // //                 src={rightSrc}
// // // // // // // //                 alt="slide"
// // // // // // // //                 fill
// // // // // // // //                 className="object-cover object-center"
// // // // // // // //               />
// // // // // // // //             </figure>
// // // // // // // //           </div>

// // // // // // // //           {/* Arrows */}
// // // // // // // //           <button
// // // // // // // //             onClick={prev}
// // // // // // // //             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // // // // // //             aria-label="Previous"
// // // // // // // //           >
// // // // // // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
// // // // // // // //             </svg>
// // // // // // // //           </button>

// // // // // // // //           <button
// // // // // // // //             onClick={next}
// // // // // // // //             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // // // // // //             aria-label="Next"
// // // // // // // //           >
// // // // // // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
// // // // // // // //             </svg>
// // // // // // // //           </button>

// // // // // // // //           {/* Dots */}
// // // // // // // //           <div className="mt-4 flex items-center justify-center gap-2">
// // // // // // // //             {Array.from({ length: pairsCount }).map((_, p) => (
// // // // // // // //               <button
// // // // // // // //                 key={p}
// // // // // // // //                 onClick={() => goToPair(p)}
// // // // // // // //                 className={`h-2.5 rounded-full transition-all ${
// // // // // // // //                   p === currentPair ? "w-6 bg-black" : "w-2.5 bg-black/40 hover:bg-black/70"
// // // // // // // //                 }`}
// // // // // // // //                 aria-label={`Go to slide ${p + 1}`}
// // // // // // // //               />
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* RIGHT: Latest News box (auto height match) */}
// // // // // // // //         <aside className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 flex flex-col justify-between">
// // // // // // // //           <div>
// // // // // // // //             <h3 className="text-2xl font-semibold mb-4">Latest News</h3>
// // // // // // // //             <hr className="border-gray-200 mb-4" />
// // // // // // // //             <div className="space-y-6">
// // // // // // // //               {(news.length ? news : demoNews).slice(0, 3).map((n) => (
// // // // // // // //                 <div key={n.id} className="group">
// // // // // // // //                   <h4 className="font-semibold text-gray-900 group-hover:text-gray-700">
// // // // // // // //                     {n.title}
// // // // // // // //                   </h4>
// // // // // // // //                   <p className="text-sm text-gray-600 mt-1 leading-relaxed">{n.body}</p>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </aside>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // // Fallback demo items if localStorage is empty
// // // // // // // // const demoNews: News[] = [
// // // // // // // //   {
// // // // // // // //     id: "1",
// // // // // // // //     title: "New Study Programs Available",
// // // // // // // //     body: "Explore our latest study abroad programs in top universities.",
// // // // // // // //     updatedAt: "",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: "2",
// // // // // // // //     title: "Upcoming Counselling Sessions",
// // // // // // // //     body: "Join our expert counsellors for guidance on your study abroad journey.",
// // // // // // // //     updatedAt: "",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: "3",
// // // // // // // //     title: "Visa Success Stories",
// // // // // // // //     body: "Read about our recent successful visa applications.",
// // // // // // // //     updatedAt: "",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // "use client";

// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import Image from "next/image";

// // // // // // // // Add/rename your images in /public
// // // // // // // const images = ["/passports_image_studyvisum.png", "/star_design_studyvisum.png"];

// // // // // // // // Small reader for the right column "Latest News"
// // // // // // // type News = { id: string; title: string; body: string; updatedAt: string };
// // // // // // // const readNews = (): News[] => {
// // // // // // //   try {
// // // // // // //     return JSON.parse(localStorage.getItem("sv_news") || "[]");
// // // // // // //   } catch {
// // // // // // //     return [];
// // // // // // //   }
// // // // // // // };

// // // // // // // export default function HeroSlider() {
// // // // // // //   const [idx, setIdx] = useState(0);
// // // // // // //   const [hover, setHover] = useState(false);
// // // // // // //   const [news, setNews] = useState<News[]>([]);

// // // // // // //   const pairsCount = Math.ceil(images.length / 2);
// // // // // // //   const currentPair = Math.floor(idx / 2);

// // // // // // //   // Auto-rotate (fixed deps)
// // // // // // //   useEffect(() => {
// // // // // // //     if (hover) return; // pause when hovering
// // // // // // //     const t = setInterval(() => next(), 5000);
// // // // // // //     return () => clearInterval(t);
// // // // // // //   }, [hover]);

// // // // // // //   // Load news once
// // // // // // //   useEffect(() => {
// // // // // // //     setNews(readNews());
// // // // // // //   }, []);

// // // // // // //   const next = () => setIdx((v) => (v + 2) % images.length);
// // // // // // //   const prev = () => setIdx((v) => (v - 2 + images.length) % images.length);
// // // // // // //   const goToPair = (p: number) => setIdx((p * 2) % images.length);

// // // // // // //   // Visible images
// // // // // // //   const leftSrc = images[idx % images.length];
// // // // // // //   const rightSrc = images[(idx + 1) % images.length];

// // // // // // //   return (
// // // // // // //     <section
// // // // // // //       className="w-full mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 mt-6"
// // // // // // //       onMouseEnter={() => setHover(true)}
// // // // // // //       onMouseLeave={() => setHover(false)}
// // // // // // //     >
// // // // // // //       <div className="grid gap-6 lg:grid-cols-[2fr_1fr] items-start">
// // // // // // //         {/* LEFT: 2-up slider */}
// // // // // // //         <div className="relative">
// // // // // // //           <div className="grid grid-cols-2 gap-6">
// // // // // // //             {/* Left card (a bit taller) */}
// // // // // // //            <figure className="relative w-full aspect-[16/11] md:aspect-[16/13] lg:aspect-[16/12] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white">

// // // // // // //               <Image
// // // // // // //                 src={leftSrc}
// // // // // // //                 alt="slide"
// // // // // // //                 fill
// // // // // // //                 priority
// // // // // // //                 className="object-cover object-center"
// // // // // // //               />
// // // // // // //             </figure>

// // // // // // //             {/* Right card (a bit taller) */}
// // // // // // //             <figure className="relative w-full aspect-[16/11] md:aspect-[16/13] lg:aspect-[16/12] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white">

// // // // // // //               <Image
// // // // // // //                 src={rightSrc}
// // // // // // //                 alt="slide"
// // // // // // //                 fill
// // // // // // //                 className="object-cover object-center"
// // // // // // //               />
// // // // // // //             </figure>
// // // // // // //           </div>

// // // // // // //           {/* Arrows */}
// // // // // // //           <button
// // // // // // //             onClick={prev}
// // // // // // //             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // // // // //             aria-label="Previous"
// // // // // // //           >
// // // // // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
// // // // // // //             </svg>
// // // // // // //           </button>

// // // // // // //           <button
// // // // // // //             onClick={next}
// // // // // // //             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // // // // //             aria-label="Next"
// // // // // // //           >
// // // // // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
// // // // // // //             </svg>
// // // // // // //           </button>

// // // // // // //           {/* Dots */}
// // // // // // //           <div className="mt-4 flex items-center justify-center gap-2">
// // // // // // //             {Array.from({ length: pairsCount }).map((_, p) => (
// // // // // // //               <button
// // // // // // //                 key={p}
// // // // // // //                 onClick={() => goToPair(p)}
// // // // // // //                 className={`h-2.5 rounded-full transition-all ${
// // // // // // //                   p === currentPair ? "w-6 bg-black" : "w-2.5 bg-black/40 hover:bg-black/70"
// // // // // // //                 }`}
// // // // // // //                 aria-label={`Go to slide ${p + 1}`}
// // // // // // //               />
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* RIGHT: Latest News box */}
// // // // // // //         <aside className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6">
// // // // // // //           <h3 className="text-2xl font-semibold mb-4">Latest News</h3>
// // // // // // //           <hr className="border-gray-200 mb-4" />
// // // // // // //           <div className="space-y-6">
// // // // // // //             {(news.length ? news : demoNews).slice(0, 3).map((n) => (
// // // // // // //               <div key={n.id} className="group">
// // // // // // //                 <h4 className="font-semibold text-gray-900 group-hover:text-gray-700">{n.title}</h4>
// // // // // // //                 <p className="text-sm text-gray-600 mt-1 leading-relaxed">{n.body}</p>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </aside>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // // // Fallback demo items if localStorage is empty
// // // // // // // const demoNews: News[] = [
// // // // // // //   {
// // // // // // //     id: "1",
// // // // // // //     title: "New Study Programs Available",
// // // // // // //     body: "Explore our latest study abroad programs in top universities.",
// // // // // // //     updatedAt: "",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "2",
// // // // // // //     title: "Upcoming Counselling Sessions",
// // // // // // //     body: "Join our expert counsellors for guidance on your study abroad journey.",
// // // // // // //     updatedAt: "",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: "3",
// // // // // // //     title: "Visa Success Stories",
// // // // // // //     body: "Read about our recent successful visa applications.",
// // // // // // //     updatedAt: "",
// // // // // // //   },
// // // // // // // ];



// // // // // // "use client";

// // // // // // import { useEffect, useState } from "react";
// // // // // // import Image from "next/image";

// // // // // // // Add/rename your images in /public
// // // // // // const images = ["/passports_image_studyvisum.png", "/star_design_studyvisum.png"];

// // // // // // // Small reader for the right column "Latest News"
// // // // // // type News = { id: string; title: string; body: string; updatedAt: string };
// // // // // // const readNews = (): News[] => {
// // // // // //   try {
// // // // // //     return JSON.parse(localStorage.getItem("sv_news") || "[]");
// // // // // //   } catch {
// // // // // //     return [];
// // // // // //   }
// // // // // // };

// // // // // // export default function HeroSlider() {
// // // // // //   const [idx, setIdx] = useState(0);
// // // // // //   const [hover, setHover] = useState(false);
// // // // // //   const [news, setNews] = useState<News[]>([]);

// // // // // //   const pairsCount = Math.ceil(images.length / 2);
// // // // // //   const currentPair = Math.floor(idx / 2);

// // // // // //   // Auto-rotate
// // // // // //   useEffect(() => {
// // // // // //     if (hover) return;
// // // // // //     const t = setInterval(() => next(), 5000);
// // // // // //     return () => clearInterval(t);
// // // // // //   }, [hover]);

// // // // // //   useEffect(() => setNews(readNews()), []);

// // // // // //   const next = () => setIdx((v) => (v + 2) % images.length);
// // // // // //   const prev = () => setIdx((v) => (v - 2 + images.length) % images.length);
// // // // // //   const goToPair = (p: number) => setIdx((p * 2) % images.length);

// // // // // //   // visible two images
// // // // // //   const leftSrc = images[idx % images.length];
// // // // // //   const rightSrc = images[(idx + 1) % images.length];

// // // // // //   // Shared height across BOTH image cards and the news card (tuned to your reference)
// // // // // //   const CARD_H = "h-[300px] md:h-[340px] lg:h-[380px] xl:h-[420px]";

// // // // // //   return (
// // // // // //     <section
// // // // // //       className="w-full mx-auto max-w-[1560px] px-3 sm:px-6 lg:px-8 mt-6"
// // // // // //       onMouseEnter={() => setHover(true)}
// // // // // //       onMouseLeave={() => setHover(false)}
// // // // // //     >
// // // // // //       {/* left: two cards | right: news */}
// // // // // //       <div className="grid gap-5 lg:grid-cols-[2fr_1fr] items-stretch">
// // // // // //         {/* LEFT: 2-up slider */}
// // // // // //         <div className="relative">
// // // // // //           {/* slight nudge left on large screens to eat extra whitespace */}
// // // // // //           <div className="grid grid-cols-2 gap-5 lg:-ml-2">
// // // // // //             {/* Left card */}
// // // // // //             <figure className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}>
// // // // // //               <Image
// // // // // //                 src={leftSrc}
// // // // // //                 alt="Passport slide"
// // // // // //                 fill
// // // // // //                 priority
// // // // // //                 className="object-cover object-center"
// // // // // //               />
// // // // // //             </figure>

// // // // // //             {/* Right card */}
// // // // // //             <figure className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}>
// // // // // //               <Image
// // // // // //                 src={rightSrc}
// // // // // //                 alt="Star slide"
// // // // // //                 fill
// // // // // //                 className="object-cover object-center"
// // // // // //               />
// // // // // //             </figure>
// // // // // //           </div>

// // // // // //           {/* arrows (overlay) */}
// // // // // //           <button
// // // // // //             onClick={prev}
// // // // // //             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // // // //             aria-label="Previous"
// // // // // //           >
// // // // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
// // // // // //             </svg>
// // // // // //           </button>
// // // // // //           <button
// // // // // //             onClick={next}
// // // // // //             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // // // //             aria-label="Next"
// // // // // //           >
// // // // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
// // // // // //             </svg>
// // // // // //           </button>

// // // // // //           {/* dots */}
// // // // // //           <div className="mt-4 flex items-center justify-center gap-2">
// // // // // //             {Array.from({ length: pairsCount }).map((_, p) => (
// // // // // //               <button
// // // // // //                 key={p}
// // // // // //                 onClick={() => goToPair(p)}
// // // // // //                 className={`h-2.5 rounded-full transition-all ${
// // // // // //                   p === currentPair ? "w-6 bg-black" : "w-2.5 bg-black/40 hover:bg-black/70"
// // // // // //                 }`}
// // // // // //                 aria-label={`Go to slide ${p + 1}`}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* RIGHT: Latest News box — EXACT same height as the image cards */}
// // // // // //         <aside className={`rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 ${CARD_H} flex flex-col`}>
// // // // // //           <h3 className="text-2xl font-semibold mb-4">Latest News</h3>
// // // // // //           <hr className="border-gray-200 mb-4" />
// // // // // //           <div className="space-y-6 overflow-auto">
// // // // // //             {(news.length ? news : demoNews).slice(0, 3).map((n) => (
// // // // // //               <div key={n.id} className="group">
// // // // // //                 <h4 className="font-semibold text-gray-900 group-hover:text-gray-700">{n.title}</h4>
// // // // // //                 <p className="text-sm text-gray-600 mt-1 leading-relaxed">{n.body}</p>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </aside>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // // Fallback demo items if localStorage empty
// // // // // // const demoNews: News[] = [
// // // // // //   { id: "1", title: "New Study Programs Available", body: "Explore our latest study abroad programs in top universities.", updatedAt: "" },
// // // // // //   { id: "2", title: "Upcoming Counselling Sessions", body: "Join our expert counsellors for guidance on your study abroad journey.", updatedAt: "" },
// // // // // //   { id: "3", title: "Visa Success Stories", body: "Read about our recent successful visa applications.", updatedAt: "" },
// // // // // // ];
// // // // // "use client";

// // // // // import { useEffect, useState } from "react";
// // // // // import Image from "next/image";

// // // // // // Add/rename your images in /public
// // // // // const images = ["/passports_image_studyvisum.png", "/star_design_studyvisum.png"];

// // // // // // Small reader for the right column "Latest News"
// // // // // type News = { id: string; title: string; body: string; updatedAt: string };
// // // // // const readNews = (): News[] => {
// // // // //   try {
// // // // //     return JSON.parse(localStorage.getItem("sv_news") || "[]");
// // // // //   } catch {
// // // // //     return [];
// // // // //   }
// // // // // };

// // // // // export default function HeroSlider() {
// // // // //   const [idx, setIdx] = useState(0);
// // // // //   const [hover, setHover] = useState(false);
// // // // //   const [news, setNews] = useState<News[]>([]);

// // // // //   const pairsCount = Math.ceil(images.length / 2);
// // // // //   const currentPair = Math.floor(idx / 2);

// // // // //   // Auto-rotate
// // // // //   useEffect(() => {
// // // // //     if (hover) return;
// // // // //     const t = setInterval(() => next(), 5000);
// // // // //     return () => clearInterval(t);
// // // // //   }, [hover]);

// // // // //   useEffect(() => setNews(readNews()), []);

// // // // //   const next = () => setIdx((v) => (v + 2) % images.length);
// // // // //   const prev = () => setIdx((v) => (v - 2 + images.length) % images.length);
// // // // //   const goToPair = (p: number) => setIdx((p * 2) % images.length);

// // // // //   // visible two images
// // // // //   const leftSrc = images[idx % images.length];
// // // // //   const rightSrc = images[(idx + 1) % images.length];

// // // // //   // Shared height across BOTH image cards and the news card (tuned to your reference)
// // // // //   const CARD_H = "h-[300px] md:h-[340px] lg:h-[380px] xl:h-[420px]";

// // // // //   return (
// // // // //     <section
// // // // //       className="w-full mx-auto max-w-[1560px] px-3 sm:px-6 lg:px-8 mt-6"
// // // // //       onMouseEnter={() => setHover(true)}
// // // // //       onMouseLeave={() => setHover(false)}
// // // // //     >
// // // // //       {/* left: two cards | right: news */}
// // // // //       <div className="grid gap-5 lg:grid-cols-[2fr_1fr] items-stretch">
// // // // //         {/* LEFT: 2-up slider */}
// // // // //         <div className="relative">
// // // // //           {/* slight nudge left on large screens to eat extra whitespace */}
// // // // //           <div className="grid grid-cols-2 gap-5 lg:-ml-2">
// // // // //             {/* Left card — FULL image (no crop) */}
// // // // //             <figure
// // // // //               className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}
// // // // //             >
// // // // //               <Image
// // // // //                 src={leftSrc}
// // // // //                 alt="Passport slide"
// // // // //                 fill
// // // // //                 priority
// // // // //                 className="object-contain object-center"
// // // // //               />
// // // // //             </figure>

// // // // //             {/* Right card — cover (fills and crops nicely) */}
// // // // //             <figure
// // // // //               className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}
// // // // //             >
// // // // //               <Image
// // // // //                 src={rightSrc}
// // // // //                 alt="Star slide"
// // // // //                 fill
// // // // //                 className="object-cover object-center"
// // // // //               />
// // // // //             </figure>
// // // // //           </div>

// // // // //           {/* arrows (overlay) */}
// // // // //           <button
// // // // //             onClick={prev}
// // // // //             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // // //             aria-label="Previous"
// // // // //           >
// // // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
// // // // //             </svg>
// // // // //           </button>
// // // // //           <button
// // // // //             onClick={next}
// // // // //             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // // //             aria-label="Next"
// // // // //           >
// // // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
// // // // //             </svg>
// // // // //           </button>

// // // // //           {/* dots */}
// // // // //           <div className="mt-4 flex items-center justify-center gap-2">
// // // // //             {Array.from({ length: pairsCount }).map((_, p) => (
// // // // //               <button
// // // // //                 key={p}
// // // // //                 onClick={() => goToPair(p)}
// // // // //                 className={`h-2.5 rounded-full transition-all ${
// // // // //                   p === currentPair ? "w-6 bg-black" : "w-2.5 bg-black/40 hover:bg-black/70"
// // // // //                 }`}
// // // // //                 aria-label={`Go to slide ${p + 1}`}
// // // // //               />
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* RIGHT: Latest News box — EXACT same height as the image cards */}
// // // // //         <aside
// // // // //           className={`rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 ${CARD_H} flex flex-col`}
// // // // //         >
// // // // //           <h3 className="text-2xl font-semibold mb-4">Latest News</h3>
// // // // //           <hr className="border-gray-200 mb-4" />
// // // // //           <div className="space-y-6 overflow-auto">
// // // // //             {(news.length ? news : demoNews).slice(0, 3).map((n) => (
// // // // //               <div key={n.id} className="group">
// // // // //                 <h4 className="font-semibold text-gray-900 group-hover:text-gray-700">{n.title}</h4>
// // // // //                 <p className="text-sm text-gray-600 mt-1 leading-relaxed">{n.body}</p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </aside>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // // Fallback demo items if localStorage empty
// // // // // const demoNews: News[] = [
// // // // //   { id: "1", title: "New Study Programs Available", body: "Explore our latest study abroad programs in top universities.", updatedAt: "" },
// // // // //   { id: "2", title: "Upcoming Counselling Sessions", body: "Join our expert counsellors for guidance on your study abroad journey.", updatedAt: "" },
// // // // //   { id: "3", title: "Visa Success Stories", body: "Read about our recent successful visa applications.", updatedAt: "" },
// // // // // ];
// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import Image from "next/image";

// // // // // Add/rename your images in /public
// // // // const images = ["/passports_image_studyvisum.png", "/star_design_studyvisum.png"];

// // // // type News = { id: string; title: string; body: string; updatedAt: string };
// // // // const readNews = (): News[] => {
// // // //   try {
// // // //     return JSON.parse(localStorage.getItem("sv_news") || "[]");
// // // //   } catch {
// // // //     return [];
// // // //   }
// // // // };

// // // // export default function HeroSlider() {
// // // //   const [idx, setIdx] = useState(0);
// // // //   const [hover, setHover] = useState(false);
// // // //   const [news, setNews] = useState<News[]>([]);

// // // //   const pairsCount = Math.ceil(images.length / 2);
// // // //   const currentPair = Math.floor(idx / 2);

// // // //   useEffect(() => {
// // // //     if (hover) return;
// // // //     const t = setInterval(() => next(), 5000);
// // // //     return () => clearInterval(t);
// // // //   }, [hover]);

// // // //   useEffect(() => setNews(readNews()), []);

// // // //   const next = () => setIdx((v) => (v + 2) % images.length);
// // // //   const prev = () => setIdx((v) => (v - 2 + images.length) % images.length);
// // // //   const goToPair = (p: number) => setIdx((p * 2) % images.length);

// // // //   const leftSrc = images[idx % images.length];
// // // //   const rightSrc = images[(idx + 1) % images.length];

// // // //   // Single source of truth for height across BOTH image cards and the news card
// // // //   const CARD_H = "h-[300px] md:h-[340px] lg:h-[380px] xl:h-[420px]";

// // // //   return (
// // // //     <section
// // // //       className="w-full mx-auto max-w-[1560px] px-3 sm:px-6 lg:px-8 mt-6"
// // // //       onMouseEnter={() => setHover(true)}
// // // //       onMouseLeave={() => setHover(false)}
// // // //     >
// // // //       <div className="grid gap-5 lg:grid-cols-[2fr_1fr] items-stretch content-stretch">
// // // //         {/* LEFT: 2-up slider (cards are forced to same height) */}
// // // //         <div className="relative">
// // // //           <div className="grid grid-cols-2 gap-5 lg:-ml-2 items-stretch content-stretch">
// // // //             {/* Left card — FULL image (no crop) but SAME card height */}
          
// // // // <figure
// // // //               className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}
// // // //             >
// // // //                 <Image
// // // //                   src={leftSrc}
// // // //                   alt="Passport slide"
// // // //                   fill
// // // //                   priority
// // // //                   // IMPORTANT: show full image, no crop, still fill card area
// // // //                   className="object-contain object-center"
// // // //                 />
// // // //             </figure>

// // // //             {/* Right card — cover (fills card, can crop edges) */}
// // // //             <figure
// // // //               className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}
// // // //             >
// // // //               <Image
// // // //                 src={rightSrc}
// // // //                 alt="Star slide"
// // // //                 fill
// // // //                 className="object-cover object-center"
// // // //               />
// // // //             </figure>
// // // //           </div>

// // // //           {/* arrows */}
// // // //           <button
// // // //             onClick={prev}
// // // //             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // //             aria-label="Previous"
// // // //           >
// // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
// // // //             </svg>
// // // //           </button>
// // // //           <button
// // // //             onClick={next}
// // // //             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // // //             aria-label="Next"
// // // //           >
// // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
// // // //             </svg>
// // // //           </button>

// // // //           {/* dots */}
// // // //           <div className="mt-4 flex items-center justify-center gap-2">
// // // //             {Array.from({ length: pairsCount }).map((_, p) => (
// // // //               <button
// // // //                 key={p}
// // // //                 onClick={() => goToPair(p)}
// // // //                 className={`h-2.5 rounded-full transition-all ${
// // // //                   p === currentPair ? "w-6 bg-black" : "w-2.5 bg-black/40 hover:bg-black/70"
// // // //                 }`}
// // // //                 aria-label={`Go to slide ${p + 1}`}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* RIGHT: Latest News — same height as cards */}
// // // //         <aside
// // // //           className={`rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 ${CARD_H} flex flex-col`}
// // // //         >
// // // //           <h3 className="text-2xl font-semibold mb-4">Latest News</h3>
// // // //           <hr className="border-gray-200 mb-4" />
// // // //           <div className="space-y-6 overflow-auto">
// // // //             {(news.length ? news : demoNews).slice(0, 3).map((n) => (
// // // //               <div key={n.id} className="group">
// // // //                 <h4 className="font-semibold text-gray-900 group-hover:text-gray-700">{n.title}</h4>
// // // //                 <p className="text-sm text-gray-600 mt-1 leading-relaxed">{n.body}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </aside>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // // Fallback demo items if localStorage empty
// // // // const demoNews: News[] = [
// // // //   { id: "1", title: "New Study Programs Available", body: "Explore our latest study abroad programs in top universities.", updatedAt: "" },
// // // //   { id: "2", title: "Upcoming Counselling Sessions", body: "Join our expert counsellors for guidance on your study abroad journey.", updatedAt: "" },
// // // //   { id: "3", title: "Visa Success Stories", body: "Read about our recent successful visa applications.", updatedAt: "" },
// // // // ];
// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import Image from "next/image";

// // // // Add/rename your images in /public
// // // const images = ["/passports_image_studyvisum.png", "/star_design_studyvisum.png"];

// // // type News = { id: string; title: string; body: string; updatedAt: string };
// // // const readNews = (): News[] => {
// // //   try {
// // //     return JSON.parse(localStorage.getItem("sv_news") || "[]");
// // //   } catch {
// // //     return [];
// // //   }
// // // };

// // // export default function HeroSlider() {
// // //   const [idx, setIdx] = useState(0);
// // //   const [hover, setHover] = useState(false);
// // //   const [news, setNews] = useState<News[]>([]);

// // //   const pairsCount = Math.ceil(images.length / 2);
// // //   const currentPair = Math.floor(idx / 2);

// // //   useEffect(() => {
// // //     if (hover) return;
// // //     const t = setInterval(() => next(), 5000);
// // //     return () => clearInterval(t);
// // //   }, [hover]);

// // //   useEffect(() => setNews(readNews()), []);

// // //   const next = () => setIdx((v) => (v + 2) % images.length);
// // //   const prev = () => setIdx((v) => (v - 2 + images.length) % images.length);
// // //   const goToPair = (p: number) => setIdx((p * 2) % images.length);

// // //   const leftSrc = images[idx % images.length];
// // //   const rightSrc = images[(idx + 1) % images.length];

// // //   // Exact same height for both image cards AND the news card
// // //   const CARD_H = "h-[320px] md:h-[360px] lg:h-[410px] xl:h-[460px]";

// // //   return (
// // //     <section
// // //       className="w-full mx-auto max-w-[1560px] px-3 sm:px-6 lg:px-8 mt-6"
// // //       onMouseEnter={() => setHover(true)}
// // //       onMouseLeave={() => setHover(false)}
// // //     >
// // //       <div className="grid gap-5 lg:grid-cols-[2fr_1fr] items-stretch">
// // //         {/* LEFT: two cards */}
// // //         <div className="relative">
// // //           {/* slight negative margin to reduce left white space like the reference */}
// // //           <div className="grid grid-cols-2 gap-5 lg:-ml-2 items-stretch">
// // //             {/* Passport card — fill card, no white borders */}
// // //             <figure className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}>
// // //               <Image
// // //                 src={leftSrc}
// // //                 alt="Passport slide"
// // //                 fill
// // //                 priority
// // //                 className="object-cover object-center"
// // //               />
// // //             </figure>

// // //             {/* Star card — same size */}
// // //             <figure className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}>
// // //               <Image
// // //                 src={rightSrc}
// // //                 alt="Star slide"
// // //                 fill
// // //                 className="object-cover object-center"
// // //               />
// // //             </figure>
// // //           </div>

// // //           {/* arrows */}
// // //           <button
// // //             onClick={prev}
// // //             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // //             aria-label="Previous"
// // //           >
// // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
// // //             </svg>
// // //           </button>
// // //           <button
// // //             onClick={next}
// // //             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// // //             aria-label="Next"
// // //           >
// // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
// // //             </svg>
// // //           </button>

// // //           {/* dots */}
// // //           <div className="mt-4 flex items-center justify-center gap-2">
// // //             {Array.from({ length: pairsCount }).map((_, p) => (
// // //               <button
// // //                 key={p}
// // //                 onClick={() => goToPair(p)}
// // //                 className={`h-2.5 rounded-full transition-all ${
// // //                   p === currentPair ? "w-6 bg-black" : "w-2.5 bg-black/40 hover:bg-black/70"
// // //                 }`}
// // //                 aria-label={`Go to slide ${p + 1}`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* RIGHT: Latest News — same height and centered title, justified text */}
// // //         <aside className={`rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 ${CARD_H} flex flex-col`}>
// // //           <h3 className="text-2xl font-semibold mb-4 text-center">Latest News</h3>
// // //           <hr className="border-gray-200 mb-4" />
// // //           <div className="space-y-6 overflow-auto">
// // //             {(news.length ? news : demoNews).slice(0, 3).map((n) => (
// // //               <div key={n.id} className="group">
// // //                 <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 text-justify">
// // //                   {n.title}
// // //                 </h4>
// // //                 <p className="text-sm text-gray-600 mt-1 leading-relaxed" style={{ textAlign: "justify" }}>
// // //                   {n.body}
// // //                 </p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </aside>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // // Fallback demo items if localStorage empty
// // // const demoNews: News[] = [
// // //   { id: "1", title: "New Study Programs Available", body: "Explore our latest study abroad programs in top universities.", updatedAt: "" },
// // //   { id: "2", title: "Upcoming Counselling Sessions", body: "Join our expert counsellors for guidance on your study abroad journey.", updatedAt: "" },
// // //   { id: "3", title: "Visa Success Stories", body: "Read about our recent successful visa applications.", updatedAt: "" },
// // // ];

// // "use client";

// // import { useEffect, useState } from "react";
// // import Image from "next/image";

// // // Add/rename your images in /public
// // const images = ["/passports_image_studyvisum.png", "/star_design_studyvisum.png"];

// // type News = { id: string; title: string; body: string; updatedAt: string };
// // const readNews = (): News[] => {
// //   try {
// //     return JSON.parse(localStorage.getItem("sv_news") || "[]");
// //   } catch {
// //     return [];
// //   }
// // };

// // export default function HeroSlider() {
// //   const [idx, setIdx] = useState(0);
// //   const [hover, setHover] = useState(false);
// //   const [news, setNews] = useState<News[]>([]);

// //   const pairsCount = Math.ceil(images.length / 2);
// //   const currentPair = Math.floor(idx / 2);

// //   useEffect(() => {
// //     if (hover) return;
// //     const t = setInterval(() => next(), 5000);
// //     return () => clearInterval(t);
// //   }, [hover]);

// //   useEffect(() => setNews(readNews()), []);

// //   const next = () => setIdx((v) => (v + 2) % images.length);
// //   const prev = () => setIdx((v) => (v - 2 + images.length) % images.length);
// //   const goToPair = (p: number) => setIdx((p * 2) % images.length);

// //   const leftSrc = images[idx % images.length];
// //   const rightSrc = images[(idx + 1) % images.length];

// //   // ↓ Shorter, uniform height for BOTH image cards and the news box
// //   const CARD_H = "h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px]";
// //   // Slimmer sidebar; keep left area wide
// //   const GRID_COLS = "lg:grid-cols-[1fr_1fr_360px]";

// //   return (
// //     <section
// //       className="w-full mx-auto max-w-[1560px] px-3 sm:px-6 lg:px-8 mt-6"
// //       onMouseEnter={() => setHover(true)}
// //       onMouseLeave={() => setHover(false)}
// //     >
// //       <div className={`grid gap-5 ${GRID_COLS} items-stretch`}>
// //         {/* LEFT: two equal cards */}
// //         <div className="relative lg:col-span-2">
// //           <div className="grid grid-cols-2 gap-5 lg:-ml-2 items-stretch">
// //             {/* Passport card — show FULL image (no crop) */}
// //             <figure className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}>
// //               <Image
// //                 src={leftSrc}
// //                 alt="Passport slide"
// //                 fill
// //                 priority
// //                 className="object-contain object-center"
// //               />
// //             </figure>

// //             {/* Star card — can fill/crop to look bold */}
// //             <figure className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}>
// //               <Image
// //                 src={rightSrc}
// //                 alt="Star slide"
// //                 fill
// //                 className="object-cover object-center"
// //               />
// //             </figure>
// //           </div>

// //           {/* arrows */}
// //           <button
// //             onClick={prev}
// //             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// //             aria-label="Previous"
// //           >
// //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
// //             </svg>
// //           </button>
// //           <button
// //             onClick={next}
// //             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
// //             aria-label="Next"
// //           >
// //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
// //             </svg>
// //           </button>

// //           {/* dots */}
// //           <div className="mt-3 flex items-center justify-center gap-2">
// //             {Array.from({ length: pairsCount }).map((_, p) => (
// //               <button
// //                 key={p}
// //                 onClick={() => goToPair(p)}
// //                 className={`h-2.5 rounded-full transition-all ${
// //                   p === currentPair ? "w-6 bg-black" : "w-2.5 bg-black/40 hover:bg-black/70"
// //                 }`}
// //                 aria-label={`Go to slide ${p + 1}`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* RIGHT: Latest News — same (shorter) height */}
// //         <aside className={`rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 ${CARD_H} flex flex-col`}>
// //           <h3 className="text-2xl font-semibold mb-3 text-center">Latest News</h3>
// //           <hr className="border-gray-200 mb-3" />
// //           <div className="space-y-4 overflow-auto">
// //             {(news.length ? news : demoNews).slice(0, 3).map((n) => (
// //               <div key={n.id} className="group">
// //                 <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 text-justify">
// //                   {n.title}
// //                 </h4>
// //                 <p className="text-sm text-gray-600 mt-1 leading-relaxed" style={{ textAlign: "justify" }}>
// //                   {n.body}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </aside>
// //       </div>
// //     </section>
// //   );
// // }

// // // Fallback demo items if localStorage empty
// // const demoNews: News[] = [
// //   { id: "1", title: "New Study Programs Available", body: "Explore our latest study abroad programs in top universities.", updatedAt: "" },
// //   { id: "2", title: "Upcoming Counselling Sessions", body: "Join our expert counsellors for guidance on your study abroad journey.", updatedAt: "" },
// //   { id: "3", title: "Visa Success Stories", body: "Read about our recent successful visa applications.", updatedAt: "" },
// // ];




// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// // Images in /public
// const images = ["/passports_image_studyvisum.png", "/star_design_studyvisum.png"];

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

//   // Uniform, shorter height for both cards and the news box
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
//             {/* Passport card — fill card, NO white border */}
//             <figure className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}>
//               <Image
//                 src={leftSrc}
//                 alt="Passport slide"
//                 fill
//                 priority
//                 className="object-cover object-center"  // ← was object-contain
//               />
//             </figure>

//             {/* Star card — same size */}
//             <figure className={`relative w-full ${CARD_H} rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white`}>
//               <Image
//                 src={rightSrc}
//                 alt="Star slide"
//                 fill
//                 className="object-cover object-center"
//               />
//             </figure>
//           </div>

//           {/* arrows */}
//           {/* <button
//             onClick={prev}
//             className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
//             aria-label="Previous"
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button> */}
//           {/* <button
//             onClick={next}
//             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm"
//             aria-label="Next"
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//             </svg>
//           </button> */}

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

//         {/* RIGHT: Latest News — same height */}
//         <aside className={`rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 ${CARD_H} flex flex-col`}>
//           <h3 className="text-2xl font-semibold mb-3 text-center">Latest News</h3>
//           <hr className="border-gray-200 mb-3" />
//           <div className="space-y-4 overflow-auto">
//             {(news.length ? news : demoNews).slice(0, 3).map((n) => (
//               <div key={n.id} className="group">
//                 <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 text-justify">
//                   {n.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 mt-1 leading-relaxed" style={{ textAlign: "justify" }}>
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
//   { id: "1", title: "New Study Programs Available", body: "Explore our latest study abroad programs in top universities.", updatedAt: "" },
//   { id: "2", title: "Upcoming Counselling Sessions", body: "Join our expert counsellors for guidance on your study abroad journey.", updatedAt: "" },
//   { id: "3", title: "Visa Success Stories", body: "Read about our recent successful visa applications.", updatedAt: "" },
// ];


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Images in /public
const images = ["/passports_image_studyvisum.png", "/star_design_studyvisum.png"];

type News = { id: string; title: string; body: string; updatedAt: string };
const readNews = (): News[] => {
  try {
    return JSON.parse(localStorage.getItem("sv_news") || "[]");
  } catch {
    return [];
  }
};

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const [news, setNews] = useState<News[]>([]);

  const pairsCount = Math.ceil(images.length / 2);
  const currentPair = Math.floor(idx / 2);

  useEffect(() => {
    if (hover) return;
    const t = setInterval(() => next(), 5000);
    return () => clearInterval(t);
  }, [hover]);

  useEffect(() => setNews(readNews()), []);

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

            {/* Star card */}
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
                {/* Optional clickable overlay for better hit area, keeps semantics */}
                <span className="sr-only">Open Contact Us</span>
              </figure>
            </Link>
          </div>
          

          {/* arrows */}
          {/* <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm transition-all duration-200 hover:scale-110"
            aria-label="Previous"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/55 text-white w-10 h-10 rounded-full grid place-items-center backdrop-blur-sm transition-all duration-200 hover:scale-110"
            aria-label="Next"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* dots */}
          {/* <div className="mt-3 flex items-center justify-center gap-2">
            {Array.from({ length: pairsCount }).map((_, p) => (
              <button
                key={p}
                onClick={() => goToPair(p)}
                className={`h-2.5 rounded-full transition-all ${
                  p === currentPair ? "w-6 bg-black" : "w-2.5 bg-black/40 hover:bg-black/70"
                }`}
                aria-label={`Go to slide ${p + 1}`}
              />
            ))}
          </div> */} 
        </div>

        {/* RIGHT: Latest News */}
        <aside
          className={`rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 ${CARD_H} flex flex-col transition-all duration-300 hover:shadow-2xl`}
        >
          {/* <h3 className="text-2xl font-semibold mb-3 text-center">Latest News</h3> */}
          <h3 className="px-3 py-1.5 text-base font-semibold mb-3 text-center">
  Latest News
</h3>


          <hr className="border-gray-200 mb-3" />
          <div className="space-y-4 overflow-auto">
            {(news.length ? news : demoNews).slice(0, 3).map((n) => (
              <div
                key={n.id}
                className="group transition-all duration-300 hover:translate-x-1"
              >
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
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

// Fallback demo items if localStorage empty
const demoNews: News[] = [
  {
    id: "1",
    title: "New Study Programs Available",
    body: "Explore our latest study abroad programs in top universities.",
    updatedAt: "",
  },
  {
    id: "2",
    title: "Upcoming Counselling Sessions",
    body: "Join our expert counsellors for guidance on your study abroad journey.",
    updatedAt: "",
  },
  {
    id: "3",
    title: "Visa Success Stories",
    body: "Read about our recent successful visa applications.",
    updatedAt: "",
  },
];
