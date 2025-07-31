// 'use client';
// import Image from 'next/image';
// import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

// export default function Header() {
//   return (
//     <div className="w-full z-50">

//       {/* Top Bar */}
//       <div className="bg-[#0c0c2c] text-white text-sm flex justify-between items-center px-6 py-2">
//         <div>
//           📞 +91-9000065858, +91-9000022655
//         </div>
//         <div className="flex gap-3 items-center">
//   📧 info@i20fever.com

//   <a href="#" className="p-2 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
//     <FaLinkedinIn className="text-white w-7 h-7" style={{ color: '#0A66C2' }} />
//   </a>
//   <a href="#" className="p-2 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
//     <FaInstagram className="text-white w-7 h-7" style={{ color: '#C13584' }} />
//   </a>
//   <a href="#" className="p-2 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
//     <FaYoutube className="text-white w-7 h-7"  style={{ color: 'red' }} />
//   </a>
//   <a href="#" className="p-2 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
//     <FaFacebookF className="text-white w-7 h-7" style={{ color: 'blue' }} /> 
//   </a>
// </div>


//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-white shadow-md w-full px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image src="/logo.png" alt="Logo" width={140} height={40} />
//         </div>

//         {/* Menu Items */}
//         <ul className="hidden lg:flex gap-2 text-sm text-[#000] font-medium items-center">
//   <li>
   
//   </li>
//   <li>
//     <a href="#" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//       ABOUT US
//     </a>
//   </li>
//   <li>
//     <a href="#" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//       SERVICES
//     </a>
//   </li>
//   <li>
//     <a href="#" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//       COUNTRY PAGES
//     </a>
//   </li>
//   <li>
//     <a href="#" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
//       CONTACT US
//     </a>
//   </li>
  
  
// </ul>


//         {/* CTA Button */}
//         <a
//           href="#"
//           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold ml-4"
//         >
//           Book Free Counselling
//         </a>
//       </nav>
//     </div>
//   );
// }
'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#0c0c2c] text-white text-sm flex justify-between items-center px-6 py-2 flex-wrap" style={{padding:'14px'}}>
        <div>
          📞 +918374779361 , +919704879361
        </div>
        <div className="flex gap-2 items-center mt-2 sm:mt-0">
          📧 studyvisa2000@gmail.com
          <a href="#" className="p-1 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
            <FaLinkedinIn className="w-5 h-5" style={{ color: '#0A66C2' }} />
          </a>
          <a href="#" className="p-1 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
            <FaInstagram className="w-5 h-5" style={{ color: '#C13584' }} />
          </a>
          <a href="#" className="p-1 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
            <FaYoutube className="w-5 h-5" style={{ color: 'red' }} />
          </a>
          <a href="#" className="p-1 rounded-full hover:bg-blue-100 active:bg-blue-200 transition">
            <FaFacebookF className="w-5 h-5" style={{ color: 'blue' }} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md w-full px-6 py-3 flex justify-between items-center relative">
        {/* Logo */}
        {/* <div className="flex items-center ">
          <Image src="/hakeem-logo.jpg" alt="Logo" width={160} height={50} />
        
        </div>

  <div className="flex flex-col leading-tight" style={{marginTop:'30px', marginLeft:'-180px'}}>
   <h1 className="text-4xl font-bold text-center" style={{fontSize:'45px'}}>
      <span className="usa-text-header">Study</span>{' '}
      <span className="germany-text-header">Visum</span>
      </h1> */}
      {/* <div className="flex flex-col sm:flex-row items-center gap-1">
        <div className="mt-[-24px] sm:mt-0">
  <Image
    src="/hakeem-logo.jpg"
    alt="Logo"
    width={160}
    height={50}
    className="object-contain"
  />
  <h1 className="text-4xl font-bold text-center" style={{fontSize:'47px', marginLeft:'-13px'}}>
      <span className="usa-text-header">Study</span>{' '}
      <span className="germany-text-header">Visum</span>
      </h1> */}
      {/* <div className="flex flex-col sm:flex-row items-center justify-between">
  

   {/* <p className="text-sm md:text-base text-gray-600 italic mt-1" >
        (A unit of HCS – Where your career journey begins)
      </p> */}
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
        </div>
      )}
      
    
    
  