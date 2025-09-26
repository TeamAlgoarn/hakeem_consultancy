// 'use client';
// import Image from 'next/image';
// import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

// export default function Header() {
//   return (
//     <div className="w-full z-50">

//       {/* Top Bar */}
//       <div className="bg-[#0c0c2c] text-white text-sm flex justify-between items-center px-6 py-2">
//         <div>
//           📞 +91-9000065858, +91-9000022655
//         </div>
//         <div className="flex gap-3 items-center">
//   📧 info@i20fever.com

//   <a href="#" className="p-2 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
//     <FaLinkedinIn className="text-white w-7 h-7" style={{ color: '#0A66C2' }} />
//   </a>
//   <a href="#" className="p-2 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
//     <FaInstagram className="text-white w-7 h-7" style={{ color: '#C13584' }} />
//   </a>
//   <a href="#" className="p-2 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
//     <FaYoutube className="text-white w-7 h-7"  style={{ color: 'red' }} />
//   </a>
//   <a href="#" className="p-2 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
//     <FaFacebookF className="text-white w-7 h-7" style={{ color: 'blue' }} /> 
//   </a>
// </div>


//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-white shadow-md w-full px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image src="/logo.png" alt="Logo" width={140} height={40} />
//         </div>

//         {/* Menu Items */}
//         <ul className="hidden lg:flex gap-2 text-sm text-[#000] font-medium items-center">
//   <li>
   
//   </li>
//   <li>
//     <a href="#" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//       ABOUT US
//     </a>
//   </li>
//   <li>
//     <a href="#" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//       SERVICES
//     </a>
//   </li>
//   <li>
//     <a href="#" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//       COUNTRY PAGES
//     </a>
//   </li>
//   <li>
//     <a href="#" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//       CONTACT US
//     </a>
//   </li>
  
  
// </ul>


//         {/* CTA Button */}
//         <a
//           href="#"
//           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold ml-4"
//         >
//           Book Free Counselling
//         </a>
//       </nav>
//     </div>
//   );
// }

'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import React from 'react';

// Google Rating Component
const GoogleRatingComponent: React.FC = () => {
  const router = useRouter();

  const handleGoogleClick = (): void => {
    // Open the Google review link in a new tab
    window.open('https://share.google/sgZIfNjCMD2PZyENv', '_blank');
  };

  return (
    <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-gray-800 text-sm">Rated 4.9</span>
        <div className="flex items-center space-x-1">
          {/* Google Logo SVG */}
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <button 
            onClick={handleGoogleClick}
            className="text-gray-600 font-medium hover:text-blue-600 transition-colors cursor-pointer bg-transparent border-none outline-none text-sm"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white text-sm flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2">
        <div className="flex items-center gap-4">
          <span className="text-blue-200">📞 +91 8374779361, +91 9704879361</span>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-blue-200">📧 studyvisa2000@gmail.com</span>
          <div className="flex gap-2">
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <FaLinkedinIn className="w-3 h-3 text-blue-400" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <FaInstagram className="w-3 h-3 text-pink-400" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <FaYoutube className="w-3 h-3 text-red-400" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <FaFacebookF className="w-3 h-3 text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black backdrop-blur-sm shadow-lg px-4 py-2 lg:px-6 flex justify-between items-center sticky top-0 z-50 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="transform hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/Studyvisummp4logo (1) (1).gif"
                        alt="StudyVisum Logo"
                        width={300}
                        height={35}
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
          {/* StudyVisum Text */}
          {/* <div className="flex items-center">
            <h1 className="text-2xl lg:text-3xl font-extrabold">
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Study</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">Visum</span>
            </h1>
          </div> */}
        </div>

        {/* Center - Google Rating Component (Desktop) */}
        <div className="hidden lg:flex">
          <GoogleRatingComponent />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 text-sm font-medium">
          <Link href="/" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
            HOME
          </Link>
          <Link href="/about" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
            ABOUT US
          </Link>
          <Link href="/services" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
            SERVICES
          </Link>
          <Link href="/countries" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
            COUNTRIES
          </Link>
          <Link href="/contact" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
            CONTACT US
          </Link>
          <Link href="/counselling" className="ml-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-1.5 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-md animate-pulse">
            Book Free Counselling
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white text-2xl hover:text-blue-400 transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm px-4 py-4 space-y-2 border-b border-slate-700 shadow-xl">
          {/* Google Rating Component (Mobile) */}
          <div className="flex justify-center mb-4">
            <GoogleRatingComponent />
          </div>
          
          <Link href="/" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">
            HOME
          </Link>
          <Link href="/about" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">
            ABOUT US
          </Link>
          <Link href="/services" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">
            SERVICES
          </Link>
          <Link href="/countries" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">
            COUNTRIES
          </Link>
          <Link href="/contact" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">
            CONTACT US
          </Link>
          <Link href="/counselling" className="block text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 mt-2">
            Book Free Counselling
          </Link>
        </div>
      )}
    </div>
  );
}