'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { SITE_CONFIG } from "@/lib/siteConfig";
// import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const GoogleRatingComponent: React.FC = () => {
  const handleGoogleClick = () => {
    window.open('https://share.google/sgZIfNjCMD2PZyENv', '_blank');
  };

  return (
    <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
      <span className="font-bold text-gray-800 text-sm mr-2">Rated 4.9</span>
      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      <button onClick={handleGoogleClick} className="text-gray-600 font-medium hover:text-blue-600 transition-colors text-sm">
        Google
      </button>
    </div>
  );
};

const AppNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-black text-white text-sm flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2">
        <div className="flex items-center gap-4">
          <span className="text-blue-200">📞 {SITE_CONFIG.phone1}, {SITE_CONFIG.phone2}</span>
        </div>

        <div className="flex gap-3 items-center">
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-200 hover:text-white">📧 {SITE_CONFIG.email}</a>
          <span className="h-4 w-px bg-white/20" />
          <Link href="/billing/login" className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 transition">
            <span>🔒</span> Admin Login
          </Link>
          {/* <div className="flex gap-2">
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition hover:scale-110">
              <FaLinkedinIn className="w-3 h-3 text-blue-400" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition hover:scale-110">
              <FaInstagram className="w-3 h-3 text-pink-400" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition hover:scale-110">
              <FaYoutube className="w-3 h-3 text-red-400" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition hover:scale-110">
              <FaFacebookF className="w-3 h-3 text-blue-400" />
            </a>
          </div> */}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black backdrop-blur-sm shadow-lg px-4 py-2 lg:px-6 flex justify-between items-center sticky top-0 z-50 border-b border-slate-700">
        <div className="flex items-center">
          <Image
            src="/Studyvisummp4logo (1) (1).gif"
            alt="StudyVisum Logo"
            width={300}
            height={35}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        <div className="hidden lg:flex">
          <GoogleRatingComponent />
        </div>

        <div className="hidden lg:flex items-center space-x-1 text-sm font-medium">
          <Link href="/" className="px-3 py-1.5 text-white hover:bg-white/10 rounded-full transition hover:scale-105">HOME</Link>
          <Link href="/about" className="px-3 py-1.5 text-white hover:bg-white/10 rounded-full transition hover:scale-105">ABOUT US</Link>
          <Link href="/services" className="px-3 py-1.5 text-white hover:bg-white/10 rounded-full transition hover:scale-105">SERVICES</Link>
          <Link href="/countries" className="px-3 py-1.5 text-white hover:bg-white/10 rounded-full transition hover:scale-105">COUNTRIES</Link>
          <Link href="/contact" className="px-3 py-1.5 text-white hover:bg-white/10 rounded-full transition hover:scale-105">CONTACT US</Link>
          <Link href="/counselling" className="ml-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 rounded-full font-medium hover:scale-105 transition">
            Book Free Counselling
          </Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-2xl hover:text-blue-400 transition" aria-label="Toggle Menu">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm px-4 py-4 space-y-2 border-b border-slate-700">
          <div className="flex justify-center mb-4">
            <GoogleRatingComponent />
          </div>

          {[
            { href: '/', label: 'HOME' },
            { href: '/about', label: 'ABOUT US' },
            { href: '/services', label: 'SERVICES' },
            { href: '/countries', label: 'COUNTRIES' },
            { href: '/contact', label: 'CONTACT US' },
            { href: '/billing/login', label: '🔒 Admin Login' },
          ].map((i) => (
            <Link key={i.href} href={i.href} className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition">
              {i.label}
            </Link>
          ))}

          <Link href="/counselling" className="block text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition mt-2">
            Book Free Counselling
          </Link>
        </div>
      )}
    </header>
  );
};

export default AppNavbar;
