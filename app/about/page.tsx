
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF,FaPhone,FaEnvelope } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';
import Header from '../components/Header';
import { SITE_CONFIG } from "@/lib/siteConfig";

// Google Rating Component
const GoogleRatingComponent: React.FC = () => {
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
export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Simple counter animation
  useEffect(() => {
    const timer1 = setInterval(() => {
      setCount1(prev => prev < 15 ? prev + 1 : prev);
    }, 100);
    const timer2 = setInterval(() => {
      setCount2(prev => prev < 5000 ? prev + 100 : prev);
    }, 20);
    const timer3 = setInterval(() => {
      setCount3(prev => prev < 10 ? prev + 1 : prev);
    }, 150);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
             <Header/>

      {/* Main Content */}
      <main className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://studyinthestates.dhs.gov/sites/default/files/assets/images/content/photodune-2721464-group-of-college-students-m.jpg')] bg-cover bg-center opacity-20"></div>

          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 left-8 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-16 right-8 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-400/20 rounded-full animate-ping"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent tracking-wide pb-2">
              StudyVisum
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
              Hakeem Consultancy Services
            </p>
            <p className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gray-100 to-blue-300 bg-clip-text text-transparent max-w-4xl mx-auto leading-relaxed tracking-wide">
              Empowering Careers Through Training & Guidance
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Story and Values
            </h2>
            <div className="text-md text-gray-700 leading-relaxed mb-12 space-y-6">
              <p className="text-justify">
                Headquartered in Hyderabad, with trusted partners across India, Germany, UK and the Middle East, <strong>Hakeem Consultancy Services Private Limited (HCS)</strong> is a trusted name in overseas education, skill development, and visa consulting, where your career journey begins.
              </p>
              <p className="text-justify">
                Through our dedicated division, <strong>Study Visum</strong>, we have helped countless students and professionals shape their future by offering expert guidance, world-class training, and hassle-free visa support. Whether you're aiming for higher education or work opportunities abroad, we walk with you at every step from personalized university or job placement advice to complete documentation and interview preparation.
              </p>
              <p className="text-justify">
                We are committed to <strong>shaping professionals and building futures</strong> through integrity, excellence, and innovation.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Integrity', desc: 'We uphold the highest standards of honesty and transparency.', color: 'from-blue-500 to-blue-600' },
                { title: 'Commitment', desc: 'We are dedicated to the success of each student.', color: 'from-purple-500 to-purple-600' },
                { title: 'Excellence', desc: 'We offer high-quality, reliable, and efficient services.', color: 'from-green-500 to-green-600' },
                { title: 'Innovation', desc: 'We continuously adapt to meet evolving student needs.', color: 'from-orange-500 to-orange-600' }
              ].map((value, i) => (
                <div key={i} className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">{value.title[0]}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-6xl mx-auto px-4 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive and personalized consultancy services that empower students to achieve their educational aspirations abroad.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-purple-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational consultancy recognized for excellence, integrity, and commitment to student success on a global scale.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-white">Our Impact</h2>
            <div className="grid sm:grid-cols-3 gap-8 lg:gap-16">
              <div className="group">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {count1}+
                </div>
                <p className="text-blue-100 font-medium text-lg">Years of Service</p>
                <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
              </div>

              <div className="group">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {count2}+
                </div>
                <p className="text-blue-100 font-medium text-lg">Applications done</p>
                <div className="w-16 h-1 bg-green-400 mx-auto mt-2 rounded-full"></div>
              </div>

              <div className="group">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {count3}+
                </div>
                <p className="text-blue-100 font-medium text-lg">Countries Covered</p>
                <div className="w-16 h-1 bg-red-400 mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 lg:py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
          {/* Brand - Updated path */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/Studyvisummp4logo (1) (1).gif"
              alt="StudyVisum Logo"
              width={300}
              height={35}
              className="object-contain drop-shadow-lg"
            />
          </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-blue-300">Address</h3>
            <div className="space-y-1 text-gray-300 text-sm">
              <p>{SITE_CONFIG.address}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-blue-300">Navigation</h3>
            <ul className="space-y-1">
              {[
                { href: "/about", text: "About Us" },
                { href: "/services", text: "Services" },
                { href: "/contact", text: "Contact" },
                { href: "/countries", text: "Countries" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-blue-300">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <MdEmail className="text-base text-blue-400 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:underline text-sm">{SITE_CONFIG.email} </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <MdPhone className="text-base text-green-400 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone1}`} className="hover:underline text-sm">{SITE_CONFIG.phone1}</a>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <MdPhone className="text-base text-green-400 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone2}`} className="hover:underline text-sm">{SITE_CONFIG.phone2}</a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-blue-300">Follow Us</h3>
            <div className="flex space-x-3 text-xl">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative text-center text-gray-400 text-sm mt-8 pt-6 border-t border-gray-700">
          <p>&copy; 2025 hakeemconsultancy. All rights reserved.</p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2"></div>
        </div>
      </footer>
    </div>
  );
}