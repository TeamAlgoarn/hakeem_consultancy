'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const images = [
  '/std1.jpg',
  '/std2.jpg', 
  '/std3.jpg',
  '/std7.jpg',
  '/std9.jpeg',
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Reset progress bar animation on slide change
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = '0%';
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.width = '100%';
        }
      }, 50);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images with Ken Burns effect */}
      {images.map((src, index) => (
        <div
          key={`slide-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={src}
            alt={`Study Abroad Dreams ${index + 1}`}
            fill
            className={`object-cover ${
              index === currentSlide ? 'animate-kenburns' : ''
            }`}
            priority={index === 0}
          />
          {/* Dynamic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-blue-900/40 to-purple-900/30 z-10" />
        </div>
      ))}

      {/* Content with advanced animations */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-6xl mx-auto">
          {/* Subtitle with staggered animation */}
          <p className="text-sm sm:text-base lg:text-lg tracking-wider text-blue-200 mb-4 font-medium animate-fade-in-up delay-100">
            HELPING STUDENTS WITH THEIR
          </p>

          {/* Main Title with parallax effect */}
          <div className="group">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 transform transition-transform duration-700 ease-out group-hover:translate-y-1">
              <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent block mb-2 animate-text-glow">
                STUDY ABROAD DREAMS
              </span>
              <span className="text-lg sm:text-2xl lg:text-3xl font-light bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent block mt-4 animate-text-glow delay-200">
                HAKEEM CONSULTANCY SERVICES PRIVATE LIMITED
              </span>
            </h1>
          </div>

          {/* CTA Button with 3D effect */}
          <div className="mt-8 animate-fade-in-up delay-300">
            <a
              href="/counselling"
              className="relative inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-500 hover:scale-105 shadow-[0_10px_30px_-5px_rgba(239,68,68,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(239,68,68,0.5)] transform hover:-translate-y-1 active:translate-y-0 active:scale-95"
            >
              <span className="relative z-10">Book Free Counselling</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 hover:opacity-100 rounded-full transition-opacity duration-500"></span>
            </a>
          </div>

          {/* Animated decorative line */}
          <div className="mt-8 flex justify-center animate-fade-in-up delay-500">
            <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-line-expand origin-left"></div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows with enhanced interaction */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
      >
        <svg 
          className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
      >
        <svg 
          className="w-6 h-6 group-hover:translate-x-[2px] transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation with bounce effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg scale-125 animate-bounce' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar with smooth animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30 overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-[5000ms] ease-linear"
          style={{ width: '100%' }}
        />
      </div>

      {/* Custom animations in Tailwind config */}
      <style jsx global>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes textGlow {
          0% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.6); }
          100% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
        }
        
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-kenburns {
          animation: kenburns 20s ease-in-out infinite alternate;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out both;
        }
        
        .animate-text-glow {
          animation: textGlow 3s ease-in-out infinite;
        }
        
        .animate-line-expand {
          animation: lineExpand 1s ease-out both;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
}