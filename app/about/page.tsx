// 'use client';
// import Link from 'next/link';
// import CountUp from 'react-countup';
// import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
// import {MdEmail, MdPhone}from 'react-icons/md';
// export default function AboutPage() {
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

    
//     <div className="min-h-screen bg-white px-4 sm:px-10 py-10 text-gray-800">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 text-center rounded-lg shadow-lg mb-12">
//         <h1 className="text-4xl sm:text-5xl font-bold">About Hakeem Consultancy</h1>
//         <p className="mt-4 text-lg">Empowering your global education journey since day one</p>
//       </div>

//       {/* Company Story & Values */}
//       <section className="max-w-6xl mx-auto mb-16">
//         <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-500 inline-block">Our Story & Values</h2>
//         <p className="mt-4 text-lg leading-relaxed">
//           Hakeem Consultancy Services, based in Hyderabad, specializes in overseas education and study visa consultation. Since our inception, we have remained committed to helping students fulfill their academic dreams abroad.
//         </p>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//           <div className="bg-blue-50 p-4 rounded-lg shadow">
//             <p className="font-bold">Integrity</p>
//             <p className="text-sm mt-1">We uphold the highest standards of honesty and transparency.</p>
//           </div>
//           <div className="bg-blue-50 p-4 rounded-lg shadow">
//             <p className="font-bold">Commitment</p>
//             <p className="text-sm mt-1">We are dedicated to the success of each student.</p>
//           </div>
//           <div className="bg-blue-50 p-4 rounded-lg shadow">
//             <p className="font-bold">Excellence</p>
//             <p className="text-sm mt-1">We offer high-quality, reliable, and efficient services.</p>
//           </div>
//           <div className="bg-blue-50 p-4 rounded-lg shadow">
//             <p className="font-bold">Innovation</p>
//             <p className="text-sm mt-1">We continuously adapt to meet evolving student needs.</p>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="max-w-6xl mx-auto mb-16">
//         <div className="grid md:grid-cols-2 gap-10">
//           <div className="bg-white p-6 border-l-4 border-blue-600 shadow-sm">
//             <h3 className="text-2xl font-semibold mb-2">Mission</h3>
//             <p className="text-gray-700">To provide comprehensive and personalized consultancy services that empower students to achieve their educational aspirations abroad.</p>
//           </div>
//           <div className="bg-white p-6 border-l-4 border-blue-600 shadow-sm">
//             <h3 className="text-2xl font-semibold mb-2">Vision</h3>
//             <p className="text-gray-700">To be a leading educational consultancy recognized for excellence, integrity, and commitment to student success on a global scale.</p>
//           </div>
//         </div>
//       </section>

//       {/* Animated Counters */}
//       <section className="bg-blue-50 py-12 text-center">
//         <h2 className="text-3xl font-semibold mb-10 text-blue-800">Our Impact</h2>
//         <div className="flex flex-wrap justify-center gap-12">
//           <div className="text-4xl font-bold text-blue-900">
//             <CountUp end={13} duration={2} />+
//             <p className="text-sm text-gray-700 mt-1">Years of Service</p>
//           </div>
//           <div className="text-4xl font-bold text-blue-900">
//             <CountUp end={5000} duration={2.5} />+
//             <p className="text-sm text-gray-700 mt-1">Students Guided</p>
//           </div>
//           <div className="text-4xl font-bold text-blue-900">
//             <CountUp end={10} duration={2} />+
//             <p className="text-sm text-gray-700 mt-1">Countries Covered</p>
//           </div>
//         </div>
//       </section>

 
//       {/* <section className="max-w-6xl mx-auto py-16">
//         <h2 className="text-3xl font-semibold text-center mb-10">Meet Our Team</h2>
//         <div className="grid sm:grid-cols-2 gap-10">
//           <div className="bg-white border-l-4 border-blue-600 p-6 shadow-lg hover:scale-105 transition-transform">
//             <h3 className="text-xl font-bold">Ayesha Rahman</h3>
//             <p className="text-blue-700 text-sm">Senior Visa Consultant</p>
//             <p className="mt-3 text-sm text-gray-700">
//               With 10+ years of experience, Ayesha has assisted thousands of students in successfully securing study visas worldwide.
//             </p>
//           </div>
//           <div className="bg-white border-l-4 border-blue-600 p-6 shadow-lg hover:scale-105 transition-transform">
//             <h3 className="text-xl font-bold">Imran Shaik</h3>
//             <p className="text-blue-700 text-sm">Academic Advisor</p>
//             <p className="mt-3 text-sm text-gray-700">
//               Expert in course selection and academic counseling, Imran specializes in placing students in top universities in the USA, UK, and Canada.
//             </p>
//           </div>
//         </div>
//       </section> */}
//       </div>
//       <footer className="bg-blue-900 text-white px-6 py-10 text-sm w-full">
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
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';

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
      {/* Navigation */}
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
          <Link href="/about" className="block text-white bg-gradient-to-r from-blue-600 to-purple-600 py-1.5 px-3 rounded-lg">ABOUT US</Link>
          <Link href="/services" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">SERVICES</Link>
          <Link href="/countries" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">COUNTRIES</Link>
          <Link href="/contact" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">CONTACT US</Link>
          <Link href="/counselling" className="block text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300">Book Free Counselling</Link>
        </div>
      )}

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About Hakeem Consultancy
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Empowering your global education journey since day one
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
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Based in Hyderabad, HCS is a trusted name in overseas education and study visa consulting where your journey begins. Through our dedicated division, Study Visum, we have helped countless students achieve their academic aspirations abroad.
              From personalized university selection to hassle-free visa processing, we provide end-to-end guidance and support to make your global education dream a reality.
            </p>

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
                <p className="text-blue-100 font-medium text-lg">Students Guided</p>
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