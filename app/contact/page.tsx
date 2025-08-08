// 'use client';

// // import React from 'react';
// // import { MapPin, Mail, Phone } from 'lucide-react';
// // import { FaWhatsapp } from 'react-icons/fa';
// // import Link from 'next/link';

// 'use client';

// import React, { useState } from 'react';
// import { Mail, MapPin, Phone } from 'lucide-react';
// import { FaWhatsapp } from 'react-icons/fa';
// import Link from 'next/link';
// import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
// import {MdEmail, MdPhone}from 'react-icons/md';
// export default function ContactPage() {
//   const [error, setError] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const inputs = form.querySelectorAll('input, textarea');
//     let isValid = true;

//     inputs.forEach((input: any) => {
//       if (!input.value.trim()) {
//         isValid = false;
//         input.classList.add('border-red-500');
//       } else {
//         input.classList.remove('border-red-500');
//       }
//     });

//     if (!isValid) {
//       setError('Please fill all fields before submitting.');
//     } else {
//       setError('');
//       alert('Message sent successfully!');
//       form.reset();
//     }
//   };

//   return (
//     <div >
//     <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//             <div className="text-xl font-bold">Hakeem Consultancy</div>
//             <div className="space-x-6 text-sm font-medium">
//               <a href="/about" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//       ABOUT US
//     </a>
//               <a href="/services" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">SERVICES</a>
//               <a href="/countries" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">COUNTRIES</a>
//               <a href="/contact" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">CONTACT US</a>
//             </div>
//             <Link
//               href="/counselling"
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm font-semibold"
//             >
//               Book Free Counselling
//             </Link>
//           </nav>
//     <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Contact Form */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-6">Contact us</h2>
//           <p className="text-gray-600 mb-4">Our friendly team would love to hear from you!</p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex gap-4">
//               <input type="text" placeholder="First name" className="w-full input-style" />
//               <input type="text" placeholder="Last name" className="w-full input-style" />
//             </div>
//             <input type="email" placeholder="Email" className="w-full input-style" />
//             <input type="tel" placeholder="Phone number" className="w-full input-style" />
//             <textarea placeholder="Message" className="w-full input-style" rows={4}></textarea>

//             {error && <p className="text-red-600">{error}</p>}

//             <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
//               Send message
//             </button>
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div className="space-y-6">
//           <iframe
//             className="w-full h-60 rounded-md border"
//             src="https://www.google.com/maps?q=Flat+No.301,+Okaz+Building,+opp.+Pillar+Number+5,+above+Habitat+Furniture,+Royal+Colony,+Mehdipatnam,+Hyderabad,+Telangana+500028&output=embed"
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//           <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
//             <div className="flex gap-4 items-start">
//               <Mail className="text-blue-600" />
//               <div>
//                 <p className="font-semibold">Email us</p>
//                 <a href="mailto:info@i20fever.com" className="text-blue-600 hover:underline">info@i20fever.com</a>
//               </div>
//             </div>
//             <div className="flex gap-4 items-start">
//               <MapPin className="text-blue-600" />
//               <div>
//                 <p className="font-semibold">Visit us</p>
//                 <p className="text-gray-600">
//                   Flat no.301, Okaz Building, Mehdipatnam, Hyderabad, Telangana 500028
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-4 items-start">
//               <Phone className="text-blue-600" />
//               <div>
//                 <p className="font-semibold">Call us</p>
//                 <a href="tel:+919000065858" className="text-blue-600 hover:underline">
//                   +91-097048 79361
//                 </a>
//               </div>
//             </div>
//             <div className="flex gap-4 items-start">
//               {/* <FaWhatsapp className="text-green-600 w-5 h-5 mt-1" /> */}
//               <div>
//                 {/* <p className="font-semibold">WhatsApp</p>
//                 <a href="https://wa.me/919000065858" target="_blank" className="text-blue-600 hover:underline">
//                   Chat on WhatsApp
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <footer className="bg-blue-900 text-white py-10 mt-10" style={{marginTop:'-31px'}}>
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
              
//                       {/* Column 1: Branding */}
//                       <div>
//                         <h2 className="text-xl font-bold mb-4">HAKEEM CONSULTANCY</h2>
//                       </div>
              
//                       {/* Column 2: Address */}
//                       <div>
//                         <h3 className="font-semibold mb-2">Address</h3>
//                         <p>Flat no.301, Okaz Building</p>
//                         <p>Opp. Pillar Number 5</p>
//                         <p>Above Habitat Furniture</p>
//                         <p>Royal Colony, Mehdipatnam</p>
//                         <p>Hyderabad, Telangana 500028</p>
//                       </div>
              
//                       {/* Column 3: Navigation */}
//                       <div>
//                         <h3 className="font-semibold mb-2">Navigation</h3>
//                         <ul className="space-y-1">
//                           <li><a href="/about" className="hover:underline">About Us</a></li>
//                           <li><a href="/services" className="hover:underline">Services</a></li>
//                           <li><a href="/contact" className="hover:underline">Contact</a></li>
//                         </ul>
//                       </div>
              
//                       {/* Column 4: Contact with icons */}
//                       <div>
//                         <h3 className="font-semibold mb-2">Contact</h3>
//                         <p className="flex items-center gap-2">
//                           <MdEmail className="text-lg" />
//                           <a href="mailto:info@i20fever.com" className="hover:underline">info@i20fever.com</a>
//                         </p>
//                         <p className="flex items-center gap-2 mt-2">
//                           <MdPhone className="text-lg" />
//                           <a href="tel:+919000065858" className="hover:underline">+91- 097048 79361</a>
//                         </p>
//                       </div>
              
//                       {/* Column 5: Social Media */}
//                       <div>
//                         <h3 className="font-semibold mb-2">Follow Us</h3>
//                         <div className="flex space-x-4 mt-2 text-xl">
//                           <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
//                           <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
//                           <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
//                         </div>
//                       </div>
//                     </div>
              
//                     {/* Bottom Note */}
//                     <div className="text-center text-gray-300 text-xs mt-10 pt-4 border-t border-gray-700">
//                       &copy; 2025 hakeemconsultancy. All rights reserved.
//                     </div>
//                   </footer>
//     </div>
    
//   );
// }
//       {/* Footer */}
      
    
  
'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function ContactPage() {
  const [error, setError] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach((input: any) => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('border-red-500');
      } else {
        input.classList.remove('border-red-500');
      }
    });

    if (!isValid) {
      setError('Please fill all fields before submitting.');
    } else {
      setError('');
      alert('Message sent successfully!');
      form.reset();
    }
  };

  return (
    <div>
      {/* Navbar - Matching the previous page */}
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
          <Link href="/services" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">SERVICES</Link>
          <Link href="/countries" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">COUNTRIES</Link>
          <Link href="/contact" className="block text-white bg-gradient-to-r from-blue-600 to-purple-600 py-1.5 px-3 rounded-lg">CONTACT US</Link>
          <Link href="/counselling" className="block text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300">Book Free Counselling</Link>
        </div>
      )}

      {/* Main Contact Section */}
      <section className="py-12 bg-gradient-to-br from-white via-blue-50 to-purple-50 px-4 relative overflow-hidden min-h-screen">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-bounce animation-delay-500"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-red-500 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-yellow-500 rounded-full animate-bounce animation-delay-1500"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">Our friendly team would love to hear from you!</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <iframe
                className="w-full h-60 md:h-80 rounded-t-xl"
                src="https://www.google.com/maps?q=Flat+No.+301,+Okaz+Complex,+Opposite+to+Pillar+No.+5,+Mehdipatnam,+Hyderabad-500028&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">Email us</p>
                  <a href="mailto:studyvisa2000@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300">studyvisa2000@gmail.com</a>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">Visit us</p>
                  <p className="text-gray-600">Flat no.301, Okaz Complex, Opposite to Pillar No.5, Mehdipatnam, Hyderabad, Telangana 500028</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">Call us</p>
                  <a href="tel:+918374779361" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300">+91 8374779361</a>
                  <br />
                  <a href="tel:+919704879361" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300">+91 9704879361</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Matching the previous page */}
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