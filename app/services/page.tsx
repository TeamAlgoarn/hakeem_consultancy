
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// ⬇️ Import your new header component (update path if needed)
import Header from '../components/Header';
import { SITE_CONFIG } from "@/lib/siteConfig";

export default function ServicesPage() {
  return (
    <div>
      {/* New global header */}
      <Header />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
      `}</style>

      {/* Main Content */}
      <div className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-800">
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://cdn.dal.ca/content/dam/dalhousie/images/spanish/Study%20Abroad/Study%20abroad%20background%20image.jpeg.lt_77ffc1bbc882fe67f1311a270f93ebca.res/Study%20abroad%20background%20image.jpeg')] bg-cover bg-center opacity-20"></div>

          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 left-8 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-16 right-8 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-400/20 rounded-full animate-ping"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Services at HCS
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Empowering your global education journey since day one
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Services Description */}
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-6 animate-fade-in-up">
          <p className="text-lg text-justify opacity-0 animate-slide-in-left animation-delay-200 hover:text-blue-700 transition-colors duration-300">
            At <strong className="text-blue-800 hover:text-blue-600 transition-colors duration-300">HCS</strong>, our overseas education consultants provide expert assistance to Indian students, who are seeking admission to the top universities across the world.
          </p>
          <p className="text-lg text-justify opacity-0 animate-slide-in-right animation-delay-400 hover:text-blue-700 transition-colors duration-300">
            Our team understands the challenges that you might face, including test preparation, visa approval, scholarships, accommodation abroad, and so on.
          </p>

          {/* Services List */}
          <div className="mt-8 opacity-0 animate-slide-in-up animation-delay-600">
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">
              Our Services Include
            </h2>
            <ul className="list-none pl-0 space-y-3 text-gray-800 text-[17px]">
              {[
                { title: 'University Selection:', desc: 'Helping students find the right match.', icon: '🎯' },
                { title: 'Application Assistance:', desc: 'Guidance on paperwork & submission.', icon: '📋' },
                { title: 'Visa Guidance:', desc: 'Full support with the visa process.', icon: '🛂' },
                { title: 'Pre-Departure Briefing:', desc: 'Orientation for smoother transition.', icon: '✈️' },
                { title: 'Post-Arrival Support:', desc: 'Ongoing help after you land abroad.', icon: '🏠' },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500 hover:border-purple-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 opacity-0 animate-slide-in-left`}
                  style={{ animationDelay: `${800 + index * 150}ms` }}
                >
                  <span className="text-2xl animate-bounce">{item.icon}</span>
                  <div>
                    <strong className="text-blue-800 hover:text-purple-700 transition-colors duration-300">{item.title}</strong>
                    <span className="ml-2">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Strip */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16 px-4 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-300 rounded-full animate-bounce"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500 rounded-full animate-bounce animation-delay-1000"></div>
          </div>

          <div className="relative flex flex-col md:flex-row justify-center gap-12 text-center">
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300 opacity-0 animate-slide-in-left animation-delay-200">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-red-300 transition-all duration-300">
                <span className="block text-red-700 text-4xl mb-3 animate-bounce">📘</span>
                <span className="block text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">Assistance</span>
                <span className="block text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Standardized test prep</span>
              </div>
            </div>

            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300 opacity-0 animate-slide-in-right animation-delay-400">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-red-300 transition-all duration-300">
                <span className="block text-red-700 text-4xl mb-3 animate-bounce animation-delay-500">✈️</span>
                <span className="block text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">Flying</span>
                <span className="block text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Fly to your dream destination</span>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Services */}
        <div className="max-w-7xl mx-auto px-4 mt-20 mb-0 pb-10">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent opacity-0 animate-slide-in-up animation-delay-200 hover:scale-105 transition-transform duration-300">
            Our Premium Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Study Abroad Consulting',
                icon: '🌍',
                desc: 'End-to-end support in choosing country, course, and university.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Visa Guidance',
                icon: '🛂',
                desc: 'Expert help with all stages of visa application.',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Admission & SOP/LOR Support',
                icon: '📝',
                desc: 'Strategic assistance with application, SOPs and LORs.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Scholarship Assistance',
                icon: '🎓',
                desc: 'Help with finding and applying for scholarships.',
                gradient: 'from-orange-500 to-red-500',
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:rotate-1 opacity-0 animate-slide-in-up relative overflow-hidden`}
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>

                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-0.5`}>
                  <div className="bg-white rounded-2xl h-full w-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-6xl mb-6 transition-all duration-500 group-hover:scale-125 group-hover:animate-bounce">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Updated */}
      <footer className="bg-black text-white py-8 lg:py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
          {/* Brand - Logo Only */}
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
              <p>Flat No. 301 A Block,Okaz Complex</p>
              <p>Opp. Pillar Number 5, Mehdipatnam</p>
              <p>Hyderabad, India-500028.</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-blue-300">Navigation</h3>
            <ul className="space-y-1">
              {[
                { href: '/about', text: 'About Us' },
                { href: '/services', text: 'Services' },
                { href: '/contact', text: 'Contact' },
                { href: '/countries', text: 'Countries' },
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
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:underline text-sm">{SITE_CONFIG.email}</a>
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
