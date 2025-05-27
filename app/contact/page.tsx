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

import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex flex-wrap justify-between items-center">
        <div className="text-xl font-bold">Hakeem Consultancy Services Private Limited</div>

        <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`w-full md:flex md:items-center md:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="space-y-2 md:space-x-4 md:space-y-0 text-sm font-medium flex flex-col md:flex-row mt-4 md:mt-0" style={{fontWeight:"bold"}}>
             <a href="/" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">HOME</a>
            <a href="/about" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">ABOUT US</a>
            <a href="/services" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">SERVICES</a>
            <a href="/countries" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">COUNTRIES</a>
            <a href="/contact" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">CONTACT US</a>
            <Link href="/counselling" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm font-semibold text-center">
              Book Free Counselling
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Contact us</h2>
            <p className="text-gray-600 mb-4">Our friendly team would love to hear from you!</p>
            <form onSubmit={handleSubmit} className="space-y-4">
  <div className="flex flex-col md:flex-row gap-4">
    <input
      type="text"
      placeholder="First name"
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Last name"
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <input
    type="email"
    placeholder="Email"
    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="tel"
    placeholder="Phone number"
    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <textarea
    placeholder="Message"
    rows={4}
    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
  ></textarea>

  {error && <p className="text-red-600">{error}</p>}

  <button
    type="submit"
    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
  >
    Send message
  </button>
</form>

          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <iframe
              className="w-full h-60 rounded-md border"
              src="https://www.google.com/maps?q=Flat+No.301,+Okaz+Building,+opp.+Pillar+Number+5,+above+Habitat+Furniture,+Royal+Colony,+Mehdipatnam,+Hyderabad,+Telangana+500028&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <div className="flex gap-4 items-start">
                <Mail className="text-blue-600" />
                <div>
                  <p className="font-semibold">Email us</p>
                  <a href="mailto:info@i20fever.com" className="text-blue-600 hover:underline">studyvisa2000@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="text-blue-600" />
                <div>
                  <p className="font-semibold">Visit us</p>
                  <p className="text-gray-600">Flat no.301, Okaz Building, Mehdipatnam, Hyderabad, Telangana 500028</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="text-blue-600" />
                <div>
                  <p className="font-semibold">Call us</p>
                  <a href="tel:+919000065858" className="text-blue-600 hover:underline">+91-8374779361,9704879361</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-4">
          <div>
            <h2 className="text-xl font-bold mb-4">HAKEEM CONSULTANCY SERVICES PRIVATE LIMITED</h2>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p>Flat no.301, Okaz Building</p>
            <p>Opp. Pillar Number 5</p>
            <p>Above Habitat Furniture</p>
            <p>Royal Colony, Mehdipatnam</p>
            <p>Hyderabad, Telangana 500028</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="flex items-center gap-2"><MdEmail className="text-lg" /><a href="mailto:studyvisa2000@gmail.com" className="hover:underline">studyvisa2000@gmail.com</a></p>
            <p className="flex items-center gap-2 mt-2"><MdPhone className="text-lg" /><a href="tel:+919000065858" className="hover:underline">+918374779361</a></p>
            <p className="flex items-center gap-2 mt-2"><MdPhone className="text-lg" /><a href="tel:+919000065858" className="hover:underline">+919704879361</a></p>
          </div>
          <div>
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
