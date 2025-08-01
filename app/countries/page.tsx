// 'use client';

// import './flip.css';
// import Image from 'next/image';
// import { useState } from 'react';
// import Link from 'next/link';
// import CountUp from 'react-countup';
// import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
// import { MdEmail, MdPhone } from 'react-icons/md';
// import { HiMenu, HiX } from 'react-icons/hi';
// const countries = [
//   {
//     name: 'Canada',
//     image: '/flag-canada.jpg' ,
//     description: ['Country Info', 'Visa Tips'],
//     link: '/countries/canada',
//   },
//   {
//     name: 'Australia',
//     image: '/aust.jpg',
//     description: ['Country Info', 'Visa Tips'],
//     link: '/countries/australia',
//   },
//   {
//     name: 'Germany',
//     image: '/flag-germany.jpg',
//     description: ['Country Info', 'Visa Tips'],
//     link: '/countries/germany',
//   },
//   {
//     name: 'UK',
//     image: '/london.jpg',
//     description: ['Country Info', 'Visa Tips'],
//     link: '/countries/uk',
//   },
//   {
//     name: 'USA',
//     image: '/usa flag.jpg',
//     description: ['Country Info', 'Visa Tips' ],
//     link: '/countries/usa',
//   },
//   {
//     name: 'Ireland',
//     image: '/flags-ireland.jpg',
//     description: ['Country Info', 'Visa Tips'],
//     link: '/countries/ireland',
//   },
// ];

// export default function CountriesPage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <div>
//     {/* Responsive Navbar */}
//           <nav className="bg-white shadow-md px-4 py-4 sm:px-6 lg:px-10 flex justify-between items-center">
//             <div className="text-xl font-bold">Hakeem Consultancy</div>
    
//             {/* Desktop Nav */}
//             <div className="hidden md:flex space-x-6 text-sm font-medium items-center" style={{fontWeight:'bold'}}>
              
//                 <a href="/" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//                   HOME
//                 </a>
              
//               <a href="/about" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">ABOUT US</a>
//               <a href="/services" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">SERVICES</a>
//               <a href="/countries" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">COUNTRIES</a>
//               <a href="/contact" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">CONTACT US</a>
//               <Link href="/counselling" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm font-semibold">Book Free Counselling</Link>
//             </div>
    
//             {/* Mobile Hamburger Button */}
//             <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
//               {menuOpen ? <HiX /> : <HiMenu />}
//             </button>
//           </nav>
    
//           {/* Mobile Menu */}
//           {menuOpen && (
//             <div className="md:hidden bg-white px-4 py-4 space-y-3 text-sm font-medium shadow">
              
//                 <a href="/" className="block">
//                   HOME
//                 </a>
              
//               <a href="/about" className="block">ABOUT US</a>
//               <a href="/services" className="block">SERVICES</a>
//               <a href="/countries" className="block">COUNTRIES</a>
//               <a href="/contact" className="block">CONTACT US</a>
//               <Link href="/counselling" className="block text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Book Free Counselling</Link>
//             </div>
//           )}
    
//     <section className="py-12 bg-white px-4">
//       <h2 className="text-3xl font-bold text-center text-blue-900 mb-10" >Popular Destinations</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {countries.map((country, index) => (
//           <div key={index} className="flip-card">
//             <div className="flip-inner">
//               {/* Front Side */}
//              <div className="flip-front flex flex-col items-center justify-center h-[260px] bg-sky-200 p-6 rounded shadow-md">

//                 <Image
//                   src={country.image}
//                   alt={country.name}
//                   width={260}
//                   height={160}
//                   className="mb-4"
//                 />
//                 <h3 className="text-lg font-semibold">{country.name}</h3>
//               </div>

//               {/* Back Side */}
//               <div className="flip-back flex flex-col items-center justify-center bg-blue-900 text-white p-6 rounded shadow-md">
//                 <h3 className="text-lg font-semibold mb-2">{country.name}</h3>
//                 <ul className="list-disc list-inside text-sm text-center space-y-1">
//                   {country.description.map((tip, i) => {
//   let href = '#';

//   if (tip === 'Country Info') {
//     href = `${country.link}`;
//   } else if (tip === 'Visa Tips') {
//     href = `${country.link}/visa-tips`;
//   } else if (tip === 'Top Universities') {
//     href = `${country.link}/top-universities`;
//   }

//   return (
//     <li key={i}>
//       <Link href={href} className="underline text-blue-200 hover:text-white transition">
//         {tip}
//       </Link>
//     </li>
//   );
// })}

//                 </ul>
//               </div>
//             </div>
//           </div>
          
//         ))}
      
//       </div>
//       <footer className="bg-blue-900 text-white px-6 py-10 text-sm w-full mt-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
//           <div>
//             <h2 className="text-xl font-bold mb-4">HAKEEM CONSULTANCY</h2>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Address</h3>
//             <p>Flat no.301, Okaz Building</p>
//             <p>Opp. Pillar Number 5</p>
//             <p>Above Habitat Furniture</p>
//             <p>Royal Colony, Mehdipatnam</p>
//             <p>Hyderabad, Telangana 500028</p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Navigation</h3>
//             <ul className="space-y-1">
//               <li><a href="/about" className="hover:underline">About Us</a></li>
//               <li><a href="/services" className="hover:underline">Services</a></li>
//               <li><a href="/contact" className="hover:underline">Contact</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Contact</h3>
//             <p className="flex items-center gap-2">
//               <MdEmail className="text-lg" />
//               <a href="mailto:info@i20fever.com" className="hover:underline">info@i20fever.com</a>
//             </p>
//             <p className="flex items-center gap-2 mt-2">
//               <MdPhone className="text-lg" />
//               <a href="tel:+919000065858" className="hover:underline">+91-9000065858</a>
//             </p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Follow Us</h3>
//             <div className="flex space-x-4 mt-2 text-xl">
//               <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
//               <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
//               <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center text-gray-300 text-xs mt-10 pt-4 border-t border-gray-700">
//           &copy; 2025 hakeemconsultancy. All rights reserved.
//         </div>
//       </footer>
//     </section>
//     </div>
//   );
// }
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
    image: '/flag-canada.jpg' ,
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/canada',
  },
  {
    name: 'Australia',
    image: '/aust.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/australia',
  },
  {
    name: 'Germany',
    image: '/flag-germany.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/germany',
  },
  {
    name: 'UK',
    image: '/london.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/uk',
  },
  {
    name: 'USA',
    image: '/usa flag.jpg',
    description: ['Country Info', 'Visa Tips' ],
    link: '/countries/usa',
  },
  {
    name: 'Ireland',
    image: '/flags-ireland.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/ireland',
  },
  {
    name: 'France',
    image: '/flag-france.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/france',
  },
  {
    name: 'Austria',
    image: '/flag-austria.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/Austria',
  },
  {
    name: 'Luxembourg',
    image: '/flag-luxembourg.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/luxembourg',
  },
  {
    name: 'Netherlands',
    image: '/flag-netherlands.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/Netherlands',
  },
  {
    name: 'Switzerland',
    image: '/flag-switzerland.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/switzerland',
  },
  {
    name: 'Denmark',
    image: '/flag-denmark.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/Denmark',
  },
  {
    name: 'Italy',
    image: '/flag-italy.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/Italy',
  },
  {
    name: 'Belgium',
    image: '/flag-belgium.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/Belgium',
  },
  {
    name: 'Norway',
    image: '/flag-norway.jpg',
    description: ['Country Info', 'Visa Tips'],
    link: '/countries/norway',
  },
];

export default function CountriesPage() {
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


            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 text-sm font-medium items-center" style={{fontWeight:'bold',fontSize:'large'}}>
              
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
    
    
<section className="py-12 bg-white px-4"> 
{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {countries.map((country, index) => (
    <div
      key={index}
      className="rounded overflow-hidden shadow-lg w-[350px] mx-auto"
    >
      <img
        src={country.image}
        alt={country.name}
        className="w-full h-56 object-cover" // Taller image for proportion
      />
      <div className="bg-sky-400 text-white text-center py-2">
        <h3 className="text-base font-semibold">{country.name}</h3>
      </div>
    </div>
  ))}
</div> */}
<h2 className="text-3xl font-bold text-center text-blue-900 mb-8" style={{marginBottom:'70px'}}>Popular Destinations</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
  
  {countries.map((country, index) => (
    <div key={index} className="flip-card w-[350px] mx-auto">
      <div className="flip-inner">
        {/* Front Side */}
        <div className="flip-front rounded overflow-hidden shadow-lg">
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-56 object-cover"
          />
          <div className="bg-sky-400 text-black text-center py-2">
            <h3 className="text-base font-semibold">{country.name}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-back rounded shadow-lg bg-sky-400 text-white flex flex-col items-center gap-5 mt-6 justify-center h-full">
        
          <a
    href={country.link}
    className="block bg-white text-blue-900 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
  >
    country-info
  </a>
  <a
    href={`${country.link}/visa-tips`}
    className="block bg-white text-blue-900 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
  >
    Visa Tips
  </a>
        </div>
      </div>
    </div>
  ))}
</div>

     {/* Footer */}
           <footer className="bg-blue-900 text-white py-10" style={{marginTop:'70px'}}>
             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-4">
               <div>
                 {/* <h2 className="text-xl font-bold mb-4">HAKEEM CONSULTANCY SERVICES PRIVATE LIMITED</h2> */}
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
           </section>
         </div>
       );
     }
     