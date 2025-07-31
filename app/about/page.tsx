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
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Responsive Navbar */}
      <nav className="bg-white shadow-md px-4 py-4 sm:px-6 lg:px-10 flex justify-between items-center">
        {/* <div className="text-xl font-bold">Hakeem Consultancy Services Private Limited</div> */}
           {/* <h2 className="text-4xl md:text-5xl font-bold text-center">
  <span className="bg-[linear-gradient(to_right,#b22234,#ffffff_20%,#3c3b6e_60%)] bg-clip-text text-transparent">
    Study
  </span>
  <span className="ml-2 bg-[linear-gradient(to_right,#000000,#dd0000,#ffce00)] bg-clip-text text-transparent">
    Visum
  </span>
</h2> */}
<div className="flex items-center gap-1 sm:gap-3">
  {/* Logo */}
   <Image
    src="/hakeem-logo.jpg"
    alt="Logo"
    width={160}
    height={50}
    className="object-contain"
  />

  {/* Study Visum */}
  <h1 className="text-4xl sm:text-4xl font-bold text-center" style={{fontSize:'47px', marginLeft:'-13px'}}>
      <span className="usa-text-header">Study</span>{' '}
      <span className="germany-text-header">Visum</span>
      </h1> 
</div>


        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center" style={{fontSize:'large',fontWeight:'bold'}}>
          
            <a href="/" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
              HOME
            </a>
          
          <a href="/about" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">ABOUT US</a>
          <a href="/services" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">SERVICES</a>
          <a href="/countries" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">COUNTRIES</a>
          <a href="/contact" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">CONTACT US</a>
            <a href="/counselling"  className="block bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded-full mt-2" style={{padding:'10px',width:'200px', marginTop:'-4px'}}>
  Book Free Counselling
</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-5xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-3 text-sm font-medium shadow">
          
            <a href="/" className="block">
              HOME
            </a>
          
          <a href="/about" className="block">ABOUT US</a>
          <a href="/services" className="block">SERVICES</a>
          <a href="/countries" className="block">COUNTRIES</a>
          <a href="/contact" className="block">CONTACT US</a>
          <Link href="/counselling" className="block text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Book Free Counselling</Link>
        </div>
      )}

      {/* Page Content */}
      <div className="min-h-screen bg-white px-4 sm:px-10 py-10 text-gray-800">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 text-center rounded-lg shadow-lg mb-12 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">About Hakeem Consultancy</h1>
          <p className="mt-4 text-lg">Empowering your global education journey since day one</p>
        </div>

        {/* Our Story */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold mb-4  inline-block">Our Story and Values</h2>
          <p className="mt-4 text-lg leading-relaxed">
            HCS, based in Hyderabad,Study Visum - a unit where your journey begins.We specializes in overseas education and study visa consultation. Since our inception, we have remained committed to helping students fulfill their academic dreams abroad.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {['Integrity', 'Commitment', 'Excellence', 'Innovation'].map((value, i) => (
              <div key={i} className="bg-blue-50 p-4 rounded-lg shadow">
                <p className="font-bold">{value}</p>
                <p className="text-sm mt-1">
                  {{
                    Integrity: 'We uphold the highest standards of honesty and transparency.',
                    Commitment: 'We are dedicated to the success of each student.',
                    Excellence: 'We offer high-quality, reliable, and efficient services.',
                    Innovation: 'We continuously adapt to meet evolving student needs.'
                  }[value]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 border-l-4 border-blue-600 shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">Mission</h3>
              <p className="text-gray-700">To provide comprehensive and personalized consultancy services that empower students to achieve their educational aspirations abroad.</p>
            </div>
            <div className="bg-white p-6 border-l-4 border-blue-600 shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-700">To be a leading educational consultancy recognized for excellence, integrity, and commitment to student success on a global scale.</p>
            </div>
          </div>
        </section>

        {/* Animated Counters */}
        <section className="bg-blue-50 py-12 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-blue-800">Our Impact</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-4xl font-bold text-blue-900">
              <CountUp end={15} duration={2} />+
              <p className="text-sm text-gray-700 mt-1">Years of Service</p>
            </div>
            <div className="text-4xl font-bold text-blue-900">
              <CountUp end={5000} duration={2.5} />+
              <p className="text-sm text-gray-700 mt-1">Students Guided</p>
            </div>
            <div className="text-4xl font-bold text-blue-900">
              <CountUp end={10} duration={2} />+
              <p className="text-sm text-gray-700 mt-1">Countries Covered</p>
            </div>
          </div>
        </section>
      </div>

    {/* Footer */}
          <footer className="bg-blue-900 text-white py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-4">
              <div>
                {/* <h2 className="text-xl font-bold mb-4">HAKEEM CONSULTANCY SERVICES PRIVATE LIMITED</h2> */}
                    {/* <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-2">
      <span className="usa-text">Study</span>{' '}
      <span className="germany-text">Visum</span>
    </h2> */}
    <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-2">
  <span className="usa-text-footer">Study</span>{' '}
  <span className="germany-text-footer">Visum</span>
</h2>
              </div>
              <div style={{marginInline:'28px'}}>
                <h3 className="font-semibold mb-2">Address</h3>
                <p>Flat no.301, Okaz Complex</p>
                <p>Opp. Pillar Number 5,Mehdipatnam</p>
                {/* <p>Above Habitat Furniture</p>
                <p>Royal Colony, Mehdipatnam</p> */}
                <p>Hyderabad, Telangana 500028</p>
              </div>
                    <div style={{marginInline:'28px'}}>
                <h3 className="font-semibold mb-2">Navigation</h3>
                <ul className="space-y-1">
                  <li><a href="/about" className="hover:underline">About Us</a></li>
                  <li><a href="/services" className="hover:underline">Services</a></li>
                  <li><a href="/contact" className="hover:underline">Contact</a></li>
                   <li><a href="/countries" className="hover:underline block">Countries</a></li>
                </ul>
              </div>
                   <div style={{marginInline:'28px'}}>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="flex items-center gap-2"><MdEmail className="text-lg" /><a href="mailto:studyvisa2000@gmail.com" className="hover:underline">studyvisa2000@gmail.com</a></p>
                <p className="flex items-center gap-2 mt-2"><MdPhone className="text-lg" /><a href="tel:+919000065858" className="hover:underline">+918374779361</a></p>
                <p className="flex items-center gap-2 mt-2"><MdPhone className="text-lg" /><a href="tel:+919000065858" className="hover:underline">+919704879361</a></p>
              </div>
                     <div style={{marginInline:'28px'}}>
                <h3 className="font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4 mt-2 text-xl">
                  <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
                  <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
                  <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-300 text-xs mt-10 pt-4 border-t border-gray-700">
              &copy; 2025 hakeemconsultancy. All rights reserved.
            </div>
          </footer>
        </div>
      );
    }
    