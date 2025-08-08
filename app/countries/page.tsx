'use client';

import './flip.css';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';

const countries = [
  {
    name: 'Canada',
    image: '/flag-canada.jpg',
    description: 'Explore study opportunities in Canada with world-class universities and post-study work options.',
    link: '/countries/canada',
  },
  {
    name: 'Australia',
    image: '/aust.jpg',
    description: 'Discover Australian education with its innovative teaching methods and vibrant student life.',
    link: '/countries/australia',
  },
  {
    name: 'Germany',
    image: '/flag-germany.jpg',
    description: 'Study in Germany with tuition-free or low-cost education at top-ranked universities.',
    link: '/countries/germany',
  },
  {
    name: 'UK',
    image: '/london.jpg',
    description: 'Pursue your education in the UK with its rich academic heritage and global recognition.',
    link: '/countries/uk',
  },
  {
    name: 'USA',
    image: '/usa flag.jpg',
    description: 'Access world-leading institutions and diverse academic programs in the United States.',
    link: '/countries/usa',
  },
  {
    name: 'Ireland',
    image: '/flags-ireland.jpg',
    description: 'Study in Ireland with its excellent education system and welcoming international community.',
    link: '/countries/ireland',
  },
  {
    name: 'France',
    image: '/flag-france.jpg',
    description: 'Experience French higher education with affordable tuition and cultural richness.',
    link: '/countries/france',
  },
  {
    name: 'Austria',
    image: '/flag-austria.jpg',
    description: 'Quality education in Austria with low tuition fees and high living standards.',
    link: '/countries/Austria',
  },
  {
    name: 'Luxembourg',
    image: '/flag-luxembourg.jpg',
    description: 'Study in Luxembourg with its multilingual environment and international institutions.',
    link: '/countries/luxembourg',
  },
  {
    name: 'Netherlands',
    image: '/flag-netherlands.jpg',
    description: 'English-taught programs in the Netherlands with innovative teaching approaches.',
    link: '/countries/Netherlands',
  },
  {
    name: 'Switzerland',
    image: '/flag-switzerland.jpg',
    description: 'World-class education in Switzerland with stunning landscapes and multicultural environment.',
    link: '/countries/switzerland',
  },
  {
    name: 'Denmark',
    image: '/flag-denmark.jpg',
    description: 'Study in Denmark with its focus on innovation and student-centered learning.',
    link: '/countries/Denmark',
  },
  {
    name: 'Italy',
    image: '/flag-italy.jpg',
    description: 'Rich cultural heritage meets affordable quality education in Italy.',
    link: '/countries/Italy',
  },
  {
    name: 'Belgium',
    image: '/flag-belgium.jpg',
    description: 'Multilingual education in Belgium with central European location.',
    link: '/countries/Belgium',
  },
  {
    name: 'Norway',
    image: '/flag-norway.jpg',
    description: 'Tuition-free education in Norway with exceptional quality of life.',
    link: '/countries/norway',
  },
];

export default function CountriesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-900 { animation-delay: 900ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1100 { animation-delay: 1100ms; }
        .animation-delay-1200 { animation-delay: 1200ms; }
        .animation-delay-1300 { animation-delay: 1300ms; }
        .animation-delay-1400 { animation-delay: 1400ms; }
        .animation-delay-1500 { animation-delay: 1500ms; }
        
        .country-card {
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 0.75rem;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: white;
        }
        
        .country-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        
        .country-image-container {
          height: 180px;
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .country-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .country-card:hover .country-image {
          transform: scale(1.1);
        }
        
        .country-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .country-name {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
        }
        
        .country-description {
          color: #4b5563;
          font-size: 0.9375rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
          flex-grow: 1;
        }
        
        .button-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .country-button {
          display: inline-block;
          padding: 0.75rem 1rem;
          text-align: center;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
          cursor: pointer;
          border: none;
          font-size: 0.875rem;
          width: 100%;
        }
        
        .info-button {
          background-color: #2563eb;
          color: white;
        }
        
        .info-button:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
        }
        
        .visa-button {
          background-color: #10b981;
          color: white;
        }
        
        .visa-button:hover {
          background-color: #059669;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
        }
      `}</style>

      {/* Navbar (unchanged) */}
      <nav className="bg-slate-900/95 backdrop-blur-sm shadow-lg px-4 py-2 lg:px-6 flex justify-between items-center sticky top-0 z-50 border-b border-slate-700 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/hakeem-logo.jpg"
              alt="Logo"
              width={80}
              height={35}
              className="object-contain drop-shadow-lg"
            />
          </div>
          
          <div className="flex items-center">
            <h1 className="text-2xl lg:text-3xl font-extrabold">
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Study</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">Visum</span>
            </h1>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-1 text-sm font-medium">
          <Link href="/" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">HOME</Link>
          <Link href="/about" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">ABOUT US</Link>
          <Link href="/services" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">SERVICES</Link>
          <Link href="/countries" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">COUNTRIES</Link>
          <Link href="/contact" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">CONTACT US</Link>
          <Link href="/counselling" className="ml-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-1.5 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-md animate-pulse">
            Book Free Counselling
          </Link>
        </div>

        <button 
          className="lg:hidden text-white text-2xl hover:text-blue-400 transition-colors duration-300" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm px-4 py-4 space-y-2 border-b border-slate-700">
          <Link href="/" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">HOME</Link>
          <Link href="/about" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">ABOUT US</Link>
          <Link href="/services" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">SERVICES</Link>
          <Link href="/countries" className="block text-white bg-gradient-to-r from-blue-600 to-purple-600 py-1.5 px-3 rounded-lg">COUNTRIES</Link>
          <Link href="/contact" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">CONTACT US</Link>
          <Link href="/counselling" className="block text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300">Book Free Counselling</Link>
        </div>
      )}

     <main className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 pb-10"> 
        {/* Animated Background Elements */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/pin-marking-destination-colorful-travel-map_95891-21181.jpg')] bg-cover bg-center opacity-20"></div>
          
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 left-8 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-16 right-8 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-400/20 rounded-full animate-ping"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
               Popular Destinations
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Explore our curated list of top study destinations with comprehensive information and visa guidance
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Countries Grid - Updated Professional Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mt-10 mx-auto relative z-10">
          {countries.map((country, index) => (
            <div 
              key={index} 
              className={`country-card opacity-0  animate-scale-in animation-delay-${Math.min(100 + index * 100, 1500)}`}
            >
              <div className="country-image-container">
                <img
                  src={country.image}
                  alt={country.name}
                  className="country-image"
                />
                <h3 className="country-name">{country.name}</h3>
              </div>
              
              <div className="country-content">
                <p className="country-description">
                  {country.description}
                </p>
                
                <div className="button-group">
                  <button 
                    onClick={() => window.location.href = country.link}
                    className="country-button info-button"
                  >
                    Country Information
                  </button>
                  <button 
                    onClick={() => window.location.href = `${country.link}/visa-tips`}
                    className="country-button visa-button"
                  >
                    Visa Guidance
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center opacity-0 animate-fade-in-up animation-delay-1000">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help Choosing a Destination?</h3>
            <p className="text-white mb-6">Our expert counselors can guide you to the perfect country based on your academic goals and preferences.</p>
            <button 
              onClick={() => window.location.href = "/counselling"}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-md"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </main>

      {/* Footer (unchanged) */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-8 lg:py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
          <div className="lg:col-span-1 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Study</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">Visum</span>
            </h2>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-blue-300">Address</h3>
            <div className="space-y-1 text-gray-300 text-sm">
              <p>Flat no.301, Okaz Complex</p>
              <p>Opp. Pillar Number 5, Mehdipatnam</p>
              <p>Hyderabad, Telangana 500028</p>
            </div>
          </div>

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

          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-blue-300">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <MdEmail className="text-base text-blue-400 flex-shrink-0" />
                <a href="mailto:studyvisa2000@gmail.com" className="hover:underline text-sm">studyvisa2000@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <MdPhone className="text-base text-green-400 flex-shrink-0" />
                <a href="tel:+918374779361" className="hover:underline text-sm">+91 8374779361</a>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <MdPhone className="text-base text-green-400 flex-shrink-0" />
                <a href="tel:+919704879361" className="hover:underline text-sm">+91 9704879361</a>
              </div>
            </div>
          </div>

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

        <div className="relative text-center text-gray-400 text-sm mt-8 pt-6 border-t border-gray-700">
          <p>&copy; 2025 hakeemconsultancy. All rights reserved.</p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2"></div>
        </div>
      </footer>
    </div>
  );
}