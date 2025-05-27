'use client';
import Slider from 'react-slick';
import Image from 'next/image';

const images = [
  '/pics6.jpg',
  '/pics7.jpg',
  '/pics3.jpg',
  '/pics8.jpg',
  '/pics5.jpg',
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        {images.map((src, i) => (
          <div key={i} className="relative h-screen w-full">
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

            {/* Text & CTA */}
            <div className="absolute z-20 top-1/3 w-full text-center text-white px-4">
              <p className="text-sm sm:text-base tracking-wide text-white-300 mb-2">
                HELPING STUDENTS WITH THEIR
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                STUDY ABROAD DREAMS <br />
                <span className="text-2xl sm:text-4xl font-light">HAKEEM CONSULTANCY SERVICES PRIVATE LIMITED</span>
              </h1>
              <a
                href="/counselling"
                className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm sm:text-base transition"
              >
                Book Free Counselling
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
