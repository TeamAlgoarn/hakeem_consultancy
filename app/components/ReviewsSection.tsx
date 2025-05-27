'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

/** 15 reviews with rating 1‑5 */
const reviews = [
  {
    name: '007 Arun Kumar',
    feedback:
      ' I highly recommend Hakeem Consultancy Services to any student aspiring to study abroad .',
    rating: 4,
  },
  {
    name: 'Md Azhar Khan',
    feedback:
      'Exceptional guidance for my Germany study process. Everything was well‑organised and on time.',
    rating: 5,
  },
  {
    name: 'Haseeb Sohail',
    feedback:
      'I had a very good experience with Hakeem Consultancy. Hakeem guided me very well and helped me at every step',
    rating: 5,
  },
  {
    name: 'Sindoora Dhoolipala',
    feedback:
      'truly grateful to have been guided by Hakeem Consultancy for my Germany process.Thank you for being so helpful.',
    rating: 5,
  },
  {
    name: 'Mohammed Parvez Khan',
    feedback:
      'I had a fantastic experience with Hakeem Consultancy for my admission process to public universities in Germany. ',
    rating: 5,
  },
  {
    name: 'Varshitha Reddy',
    feedback:
      'My experience with this consultancy was amazing! They provided me with step-by-step guidance and made the entire procedure easy.',
    rating: 4,
  },
  {
    name: 'Tharun Kankanala',
    feedback:
      'Hakeem Consultancy was a huge help in getting me into a German public university.They guided me through the whole process .',
    rating: 5,
  },
  {
    name: 'Yaseen Noorbasha',
    feedback:
      'Thorough visa support; received approval on time. Highly recommend their services.Thanks to Hakeem consultancy services for support',
    rating: 4,
  },
  {
    name: 'Vaibhav M',
    feedback:
      'Helped me get into a great university. Communication could improve, but overall very good.',
    rating: 4,
  },
  {
    name: 'Shashikanth Revelly',
    feedback:
      'Perfect person to go with,if your academics are not up to the mark and you want to get admit in public university of Germany.',
    rating: 5,
  },
  {
    name: 'Narendra Pampana',
    feedback:
      'Clear information and guidance;landed admission in a better college.I would genuinely recommend you to go with Hakeem',
    rating: 4,
  },
  {
    name: 'Bhanu Tej Mutta',
    feedback:
      'Transparent,efficient and minimal calls needed.Recommended.I appreciated the transparency in the processing',
    rating: 5,
  },
  {
    name: 'Ashirwad Selam',
    feedback:
      'my sincere gratitude to the team at Hakeem consultancy for their invaluable help in getting me admission to a German university. ',
    rating: 5,
  },
  {
    name: 'Nithish Mithra J',
    feedback:
      'Its a very good consultancy. I am going to germany and he has made the process easy and efficient,can be recommended',
    rating: 5,
  },
  {
    name: 'Vinit Kumar Chalak',
    feedback:
      'Hakeem Sir provided outstanding consultancy service, managing the entire process smoothly from start to finish,made everything stress-free.',
    rating: 5,
  },
];

/** Helper to render filled & empty stars */
function Stars({ value }: { value: number }) {
  const total = 5;
  return (
    <div className="flex">
      {Array.from({ length: total }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < value ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.64 12.18.763 7.91l6.28-.91L10 1l2.957 6 6.28.91-4.877 4.27 1.518 5.91z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Hakeem consultancy</h1> */}
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
          What&nbsp;Our&nbsp;Students&nbsp;Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-2"
        >
          {reviews.map((r, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <article className="bg-white w-full max-w-sm rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-1">{r.name}</h3>
                <Stars value={r.rating} />
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {r.feedback}
                </p>
              </article>
            </SwiperSlide>


          ))}
        </Swiper>
      </div>
    </section>
    
  );
}