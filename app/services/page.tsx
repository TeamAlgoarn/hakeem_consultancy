// 'use client';
// import Image from 'next/image';
// import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
// import {MdEmail, MdPhone}from 'react-icons/md';
// import Link from 'next/link';
// export default function ServicesPage() {
//   return (
//     <div >
// <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//         <div className="text-xl font-bold">Hakeem Consultancy</div>
//         <div className="space-x-6 text-sm font-medium">
//           <a href="/about" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//   ABOUT US
// </a>
//           <a href="/services" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">SERVICES</a>
//           <a href="/countries" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">COUNTRIES</a>
//           <a href="/contact" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">CONTACT US</a>
//         </div>
//         <Link
//           href="/counselling"
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm font-semibold"
//         >
//           Book Free Counselling
//         </Link>
//       </nav>
//     <div className="bg-white">
//       {/* Banner Section */}
//       {/* <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-blue-900 to-red-800 flex items-center justify-center text-white">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/images/maven-logo-banner.jpg" // Use your own image
//             alt="Maven Logo Banner"
//             layout="fill"
//             objectFit="cover"
//             className="opacity-20"
//           />
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold relative z-10">Services</h1>
//       </div> */}
// <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 text-center rounded-lg shadow-lg mb-12">
//         <h1 className="text-4xl sm:text-5xl font-bold">Services Hakeem Consultancy</h1>
//         <p className="mt-4 text-lg">Empowering your global education journey since day one</p>
//       </div>
//       {/* Description Section */}
//       <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
//         <p className="text-lg text-justify">
//           At <strong>Hakeem Consulting Services</strong>, our overseas education consultants in  provide expert assistance to Indian students, who are seeking admission to the top universities across the world.
//         </p>

//         <p className="text-lg text-justify">
//           Our team understands the challenges that you might face, including test preparation, visa approval, scholarships, accommodation abroad, and so on. With us, you can sit relaxed through these processes as our expert team will assist you to complete all the formalities during the admission process.
//         </p>

//         {/* New Section: Service List */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Our Services Include</h2>
//           <ul className="list-disc pl-6 space-y-2 text-gray-800 text-[17px]">
//             <li><strong>University Selection:</strong> Assisting students in choosing the right university and course that align with their career goals.</li>
//             <li><strong>Application Assistance:</strong> Guiding through the application process, including documentation and submission.</li>
//             <li><strong>Visa Guidance:</strong> Providing support for visa applications, ensuring all requirements are met.</li>
//             <li><strong>Pre-Departure Briefing:</strong> Offering information sessions to prepare students for their journey and life abroad.</li>
//             <li><strong>Post-Arrival Support:</strong> Continued assistance after arrival in the host country to help students settle in.</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Feature Strip */}
//       <div className="bg-gray-100 py-10">
//         <div className="flex flex-col md:flex-row justify-center gap-10 text-center text-sm font-semibold uppercase tracking-wider">
//           <div>
//             <span className="block text-red-700">📘 Assistance </span>
//             <span className="block mt-2 text-gray-600">Assistance on standardized tests</span>
//           </div>
//           <div>
//             <span className="block text-red-700">✈️ Flying</span>
//             <span className="block mt-2 text-gray-600">Fly to your study abroad dream</span>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 mt-20">
//   <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Premium Services</h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//     {[
//       {
//         title: "Study Abroad Consulting",
//         icon: "🌍",
//         desc: "Get end-to-end personalized support for choosing the best-fit country, university, and course that aligns with your career goals.",
//       },
//       {
//         title: "Visa Guidance",
//         icon: "🛂",
//         desc: "From documents to interviews, we help you navigate the visa application process efficiently and stress-free.",
//       },
//       {
//         title: "Admission & SOP/LOR Support",
//         icon: "📝",
//         desc: "Craft compelling SOPs and LORs that stand out. We guide you through university applications with a strategic approach.",
//       },
//       {
//         title: "Scholarship Assistance",
//         icon: "🎓",
//         desc: "Find and apply for scholarships you qualify for. We help improve your chances with expert insights and documentation support.",
//       },
//     ].map((service, index) => (
//       <div
//         key={index}
//         className="group cursor-pointer bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-blue-300 hover:border-blue-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
//       >
//         <div className="text-5xl mb-4 transition-transform group-hover:scale-110">{service.icon}</div>
//         <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700">
//           {service.title}
//         </h3>
//         <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
//       </div>
//     ))}
//   </div>
// </div>
// </div>
// <footer className="bg-blue-900 text-white px-6 py-10 text-sm w-full" style={{marginTop:'40px'}}>
//             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

//               {/* Column 1: Branding */}
//               <div>
//                 <h2 className="text-xl font-bold mb-4">HAKEEM CONSULTANCY</h2>
//               </div>

//               {/* Column 2: Address */}
//               <div>
//                 <h3 className="font-semibold mb-2">Address</h3>
//                 <p>Flat no.301, Okaz Building</p>
//                 <p>Opp. Pillar Number 5</p>
//                 <p>Above Habitat Furniture</p>
//                 <p>Royal Colony, Mehdipatnam</p>
//                 <p>Hyderabad, Telangana 500028</p>
//               </div>

//               {/* Column 3: Navigation */}
//               <div>
//                 <h3 className="font-semibold mb-2">Navigation</h3>
//                 <ul className="space-y-1">
//                   <li><a href="/about" className="hover:underline">About Us</a></li>
//                   <li><a href="/services" className="hover:underline">Services</a></li>
//                   <li><a href="/contact" className="hover:underline">Contact</a></li>
//                 </ul>
//               </div>

//               {/* Column 4: Contact with icons */}
//               <div>
//                 <h3 className="font-semibold mb-2">Contact</h3>
//                 <p className="flex items-center gap-2">
//                   <MdEmail className="text-lg" />
//                   <a href="mailto:info@i20fever.com" className="hover:underline">info@i20fever.com</a>
//                 </p>
//                 <p className="flex items-center gap-2 mt-2">
//                   <MdPhone className="text-lg" />
//                   <a href="tel:+919000065858" className="hover:underline">+91- 097048 79361</a>
//                 </p>
//               </div>

//               {/* Column 5: Social Media */}
//               <div>
//                 <h3 className="font-semibold mb-2">Follow Us</h3>
//                 <div className="flex space-x-4 mt-2 text-xl">
//                   <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
//                   <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
//                   <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Note */}
//             <div className="text-center text-gray-300 text-xs mt-10 pt-4 border-t border-gray-700">
//               &copy; 2025 hakeemconsultancy. All rights reserved.
//             </div>
//           </footer>
//     </div>
//   );
// }
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';

export default function ServicesPage() {
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
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
     <nav className="bg-slate-900/95 backdrop-blur-sm shadow-lg px-4 py-2 lg:px-6 flex justify-between items-center sticky top-0 z-50 border-b border-slate-700 shadow-lg">
             <div className="flex items-center space-x-2">
               {/* Logo */}
               <div className="transform hover:scale-105 transition-transform duration-300">
                 <Image
                   src="/hakeem-logo.jpg"
                   alt="Logo"
                   width={80}
                   height={35}
                   className="object-contain drop-shadow-lg"
                 />
               </div>
               
               {/* Brand Text */}
               <div className="flex items-center">
                 <h1 className="text-2xl lg:text-3xl font-extrabold">
                   <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Study</span>{' '}
                   <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">Visum</span>
                 </h1>
               </div>
             </div>
     
             {/* Desktop Navigation */}
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
             <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm px-4 py-4 space-y-2 border-b border-slate-700">
               <Link href="/" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">HOME</Link>
               <Link href="/about" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">ABOUT US</Link>
               <Link href="/services" className="block text-white bg-gradient-to-r from-blue-600 to-purple-600 py-1.5 px-3 rounded-lg">SERVICES</Link>
               <Link href="/countries" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">COUNTRIES</Link>
               <Link href="/contact" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">CONTACT US</Link>
               <Link href="/counselling" className="block text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300">Book Free Counselling</Link>
             </div>
           )}

      {/* Main Content */}
      <div className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-800">
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 left-8 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-16 right-8 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-yellow-400/20 rounded-full animate-ping"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Services in Hakeem Consultancy
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
            At <strong className="text-blue-800 hover:text-blue-600 transition-colors duration-300">HCS</strong>, our overseas education consultants in provide expert assistance to Indian students, who are seeking admission to the top universities across the world.
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
                { title: "University Selection:", desc: "Helping students find the right match.", icon: "🎯" },
                { title: "Application Assistance:", desc: "Guidance on paperwork & submission.", icon: "📋" },
                { title: "Visa Guidance:", desc: "Full support with the visa process.", icon: "🛂" },
                { title: "Pre-Departure Briefing:", desc: "Orientation for smoother transition.", icon: "✈️" },
                { title: "Post-Arrival Support:", desc: "Ongoing help after you land abroad.", icon: "🏠" }
              ].map((item, index) => (
                <li 
                  key={index}
                  className={`flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500 hover:border-purple-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 opacity-0 animate-slide-in-left`}
                  style={{animationDelay: `${800 + index * 150}ms`}}
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
                title: "Study Abroad Consulting",
                icon: "🌍",
                desc: "End-to-end support in choosing country, course, and university.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Visa Guidance",
                icon: "🛂",
                desc: "Expert help with all stages of visa application.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Admission & SOP/LOR Support",
                icon: "📝",
                desc: "Strategic assistance with application, SOPs and LORs.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Scholarship Assistance",
                icon: "🎓",
                desc: "Help with finding and applying for scholarships.",
                gradient: "from-orange-500 to-red-500"
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:rotate-1 opacity-0 animate-slide-in-up relative overflow-hidden`}
                style={{animationDelay: `${400 + index * 200}ms`}}
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
                  
                  {/* Hover Effect Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-blue-600 text-sm font-medium">Learn More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* Footer */}
           <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-8 lg:py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
          {/* Brand */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Study</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">Visum</span>
            </h2>
          </div>

          {/* Address */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-blue-300">Address</h3>
            <div className="space-y-1 text-gray-300 text-sm">
              <p>Flat no.301, Okaz Complex</p>
              <p>Opp. Pillar Number 5, Mehdipatnam</p>
              <p>Hyderabad, Telangana 500028</p>
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