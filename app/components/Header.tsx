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
import { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#0c0c2c] text-white text-sm flex justify-between items-center px-6 py-2 flex-wrap">
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
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={140} height={40} />
        </div>

        {/* Hamburger menu (mobile only) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-2 text-sm text-[#000] font-larger items-center" style={{fontSize:'medium',fontWeight:'bold'}}>
          {/* <li><a href="#" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">ABOUT US</a></li> */}
          <li>
            <a href="/" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
              HOME
            </a>
          </li>
          <a href="/about" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
  ABOUT US
</a>
          <li><a href="/services" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">SERVICES</a></li>
          <li><a href="/countries" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">COUNTRIES</a></li>
          <li><a href="/contact" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">CONTACT US</a></li>
        </ul>

        {/* CTA Button */}
        <a href="/counselling"  className="block bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded-full mt-2" style={{padding:'10px'}}>
  Book Free Counselling
</a>

      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-6 py-4 shadow-md space-y-2 text-sm font-medium">
          <a href="/" className="block px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200">HOME</a>


          
          <a href="/about" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
  ABOUT US
</a>

          <a href="/services" className="block px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200">SERVICES</a>
          <a href="/countries" className="block px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200">COUNTES</a>
          <a href="/contact" className="block px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200">CONTACT US</a>
          <a
            href="/counselling"
            className="block bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded-full mt-2"
          >
            Book Free Counselling
          </a>
        </div>
      )}
      
    </div>
    
  );
}
