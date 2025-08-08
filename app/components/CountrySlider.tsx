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
  {
    name: 'France',
    image: '/france.jpg',
    flag: '/france-round.png',
    height: '320px',
    link: 'countries/france',
  },
  {
    name: 'Austria',
    image: '/aus-stu.jpg',
    flag: '/aus-ro.png',
    height: '320px',
    link: 'countries/Austria',
  },
  {
    name: 'Luxembourg',
    image: '/lux-image.jpg',
    flag: '/lux-ro.png',
    height: '320px',
    link: 'countries/luxembourg',
  },
  {
    name: 'Netherlands',
    image: '/neaa-image.jpg',
    flag: '/nea-ro.png',
    height: '320px',
    link: 'countries/Netherlands',
  },
  {
    name: 'Switzerland',
    image: '/swiz-image.jpg',
    flag: '/swi-ro.png',
    height: '320px',
    link: 'countries/switzerland',
  },
  {
    name: 'Denmark',
    image: '/den-stu.jpg',
    flag: '/den-ro.png',
    height: '320px',
    link: 'countries/Denmark',
  },
  {
    name: 'Italy',
    image: '/ita-stu.jpg',
    flag: '/ita-ro.png',
    height: '320px',
    link: 'countries/italy',
  },
  {
    name: 'Belgium',
    image: '/bela-stu.jpg',
    flag: '/bel-ro.png',
    height: '320px',
    link: 'countries/Belgium',
  },
  {
    name: 'Norway',
    image: '/nor-stu.jpg',
    flag: '/nor-ro.png',
    height: '320px',
    link: 'countries/norway',
  },
];


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CountrySlider() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
            Popular Destinations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.country-swiper-button-next',
              prevEl: '.country-swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              el: '.country-swiper-pagination',
              type: 'bullets',
            }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="px-2" // Added padding to prevent cards from touching edges
          >
            {countries.map((country, idx) => (
              <SwiperSlide key={idx}>
                <Link
                  href={country.link}
                  className="group block"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100 hover:border-blue-100 transform hover:-translate-y-2 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-1 rounded-full shadow-lg border-2 border-white z-10">
                        <img 
                          src={country.image} 
                          alt={`${country.name} flag`} 
                          className="w-16 h-16 object-contain rounded-full"
                        />
                      </div> */}
                    </div>
                    <div className="p-6 pt-10 text-center flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {country.name.charAt(0).toUpperCase() + country.name.slice(1)}
                      </h3>
                      
                      <div className="mt-auto">
                        <span className="inline-block px-4 py-1.5 text-xs font-medium bg-blue-100 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          Explore {country.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="country-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="country-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Custom Pagination */}
          <div className="country-swiper-pagination flex justify-center mt-8 space-x-2"></div>
        </div>
      </div>

      
    </section>
  );
}

