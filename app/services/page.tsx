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
   {/* <p className="text-sm md:text-base text-gray-600 italic mt-1" >
        (A unit of HCS – Where your career journey begins)
      </p> */}
 





        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center" style={{ fontWeight: 'bold',fontSize:'large' }}>
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

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-5xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-3 text-sm font-medium shadow">
          <a href="/" className="block">HOME</a>
          <a href="/about" className="block">ABOUT US</a>
          <a href="/services" className="block">SERVICES</a>
          <a href="/countries" className="block">COUNTRIES</a>
          <a href="/contact" className="block">CONTACT US</a>
          <Link href="/counselling" className="block text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Book Free Counselling</Link>
        </div>
      )}

      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 text-center rounded-lg shadow-lg mb-12 px-4"> */}
       {/* <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 text-center rounded-lg shadow-lg mb-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Services in Hakeem Consultancy</h1>
        <p className="mt-4 text-lg">Empowering your global education journey since day one</p>
      </div> */}
    <div className="min-h-screen bg-white px-4 sm:px-10 py-10 text-gray-800">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 text-center rounded-lg shadow-lg mb-12 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Services in Hakeem Consultancy</h1>
          <p className="mt-4 text-lg">Empowering your global education journey since day one</p>
        </div>
        
      {/* Services Description */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <p className="text-lg text-justify">
          At <strong>HCS</strong>, our overseas education consultants in provide expert assistance to Indian students, who are seeking admission to the top universities across the world.
        </p>
        <p className="text-lg text-justify">
          Our team understands the challenges that you might face, including test preparation, visa approval, scholarships, accommodation abroad, and so on.
        </p>

        {/* Services List */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Services Include</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-[17px]">
            <li><strong>University Selection:</strong> Helping students find the right match.</li>
            <li><strong>Application Assistance:</strong> Guidance on paperwork & submission.</li>
            <li><strong>Visa Guidance:</strong> Full support with the visa process.</li>
            <li><strong>Pre-Departure Briefing:</strong> Orientation for smoother transition.</li>
            <li><strong>Post-Arrival Support:</strong> Ongoing help after you land abroad.</li>
          </ul>
        </div>
      </div>

      {/* Feature Strip */}
      <div className="bg-gray-100 py-10 px-4">
        <div className="flex flex-col md:flex-row justify-center gap-10 text-center text-sm font-semibold uppercase tracking-wider">
          <div>
            <span className="block text-red-700">📘 Assistance</span>
            <span className="block mt-2 text-gray-600">Standardized test prep</span>
          </div>
          <div>
            <span className="block text-red-700">✈️ Flying</span>
            <span className="block mt-2 text-gray-600">Fly to your dream destination</span>
          </div>
        </div>
      </div>

      {/* Premium Services */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Premium Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Study Abroad Consulting",
              icon: "🌍",
              desc: "End-to-end support in choosing country, course, and university.",
            },
            {
              title: "Visa Guidance",
              icon: "🛂",
              desc: "Expert help with all stages of visa application.",
            },
            {
              title: "Admission & SOP/LOR Support",
              icon: "📝",
              desc: "Strategic assistance with application, SOPs and LORs.",
            },
            {
              title: "Scholarship Assistance",
              icon: "🎓",
              desc: "Help with finding and applying for scholarships.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-blue-300 hover:border-blue-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 transition-transform group-hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
</div>

     {/* Footer */}
           <footer className="bg-blue-900 text-white py-10" style={{marginTop:'70px'}}>
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
     