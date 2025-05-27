'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import {MdEmail, MdPhone}from 'react-icons/md';
import Link from 'next/link';


const countries = [
  {
    name: 'Germany',
    image: '/f0.jpg',
    flag: '/ger.png',
    height: '320px',
    link: '/countries/germany',
  },
  {
    name: 'United Kingdom',
    image: '/uk.jpg',
    flag: '/ukk.png',
    height: '320px',
    link: '/countries/uk',
  },
  {
    name: 'Canada',
    image: '/can.jpg',
    flag: '/cana.png',
    height: '320px',
    link: '/countries/canada',
  },
  {
    name: 'Australia',
    image: '/pics2.jpg',
    flag: '/austa.png',
    height: '320px',
    link: '/countries/australia',
  },
  {
    name: 'Ireland',
    image: '/ire.jpg',
    flag: '/irelands.png',
    height: '320px',
    link: 'countries/ireland',
  },
];

export default function CountrySlider() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Popular Destinations</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {countries.map((country, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={country.link}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-all block"
              >
                <div className="relative">
                <img
  src={country.image}
  alt={country.name}
  style={{ height: country.height }}
  className="w-full object-cover clip-diagonal"
/>

                  <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full shadow-lg">
                    <img src={country.flag} alt="flag" className="w-20 h-20 object-contain" />
                  </div>
                </div>
                <div className="text-center pt-10 pb-4">
                  <h3 className="text-lg font-semibold text-gray-700">{country.name}</h3>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    
<footer className="bg-blue-900 text-white px-4 sm:px-6 lg:px-10 py-10 w-full" style={{marginTop:'45px'}}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
        
        {/* Branding */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold"> HAKEEM CONSULTANCY SERVICES PRIVATE LIMITED</h2>
        </div>

        {/* Address */}
        <div className="space-y-1 text-sm">
          <h3 className="font-semibold mb-2 text-base">Address</h3>
          <p>Flat no.301, Okaz Building</p>
          <p>Opp. Pillar Number 5</p>
          <p>Above Habitat Furniture</p>
          <p>Royal Colony, Mehdipatnam</p>
          <p>Hyderabad, Telangana 500028</p>
        </div>

        {/* Navigation */}
        <div className="space-y-1 lg:ml-4 text-sm">
          <h3 className="font-semibold mb-2 text-base">Navigation</h3>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:underline block">About Us</a></li>
            <li><a href="/services" className="hover:underline block">Services</a></li>
            <li><a href="/contact" className="hover:underline block">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p className="flex items-center gap-2"><MdEmail className="text-lg" /><a href="mailto:studyvisa2000@gmail.com" className="hover:underline">studyvisa2000@gmail.com</a></p>
                    <p className="flex items-center gap-2 mt-2"><MdPhone className="text-lg" /><a href="tel:+919000065858" className="hover:underline">+918374779361</a></p>
                    <p className="flex items-center gap-2 mt-2"><MdPhone className="text-lg" /><a href="tel:+919000065858" className="hover:underline">+919704879361</a></p>
                  </div>
        
        
            {/* <a href="tel:+918374779361" className="hover:underline"> +919704879361</a>
          
        </div>

        {/* Follow Us */}
        <div className="space-y-2">
          <h3 className="font-semibold mb-2 text-base">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-300" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-300 text-xs mt-10 pt-4 border-t border-gray-700">
        &copy; 2025 hakeemconsultancy. All rights reserved.
      </div>
    </footer>
    </section>
    
  );
}
