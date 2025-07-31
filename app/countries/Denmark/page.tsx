'use client';

import Image from 'next/image';
import Link from 'next/link';
import CounsellingForm from '@/app/components/CounsellingForm';
export default function DenmarkPage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: "url('/den.jpg')" }}
      >
        <div className=" bg-opacity-80 p-6 sm:p-10 text-white max-w-xl rounded mx-4 sm:mx-10 md:ml-20" style={{marginInline:'500px'}}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" >
            Study abroad in <span className="text-red-600">Denmark</span>
          </h1>
          <p className="mb-4 text-base sm:text-lg" style={{color:'white'}}>
            Here's a comprehensive guide for all students who want to study abroad.
          </p>
          {/* <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold">
            Book Free Consultation
          </button> */}
        </div>
      </div>

      {/* Content + Form Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 py-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Study in Denmark?</h2>
          <p className="mb-4">
            Denmark is recognized as a land of ideas, known for its world-class education and technological prowess. Denmark is the ideal destination drawing international students for excellent academics.
          </p>
          <p className="mb-4">
            When you choose to study abroad in Denmark, you will study in universities that boast highly acclaimed international degrees.
          </p>
          <p className="mb-4">
            Thousands of students travel to Denmark annually to seek education in some of the world’s best academies of higher learning.
          </p>
          <p className="mb-4">
            Education in Denmark for Indian students has proven to be highly beneficial. Indian students who study in Denmark join an international community of high achievers.
          </p>
          <p className="mb-4">
            Denmark offers numerous benefits for students:
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Global network</li>
            <li>Forefront in cutting-edge technology</li>
            <li>A world-class education at affordable costs</li>
            <li>Low to no tuition in some universities</li>
            <li>Strong job market</li>
            <li>English-taught courses</li>
            <li>Denmark Alumni Programme</li>
            <li>Scholarship opportunities</li>
          </ul>
        </div>

        {/* Right Form */}
        {/* <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full" style={{marginBottom:'120px'}} >
          <h3 className="text-xl font-semibold mb-4">
            Book Free Consultation to Study in Denmark
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 rounded text-black"
              required
            />
            <input
              type="text"
              placeholder="Your Mobile No."
              className="w-full px-4 py-2 rounded text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded text-black"
              required
            />
            <select className="w-full px-4 py-2 rounded text-black" required>
              <option value="">--Please choose a branch--</option>
             
              <option>Hyderabad</option>
              
            </select>
            <select className="w-full px-4 py-2 rounded text-black" required>
              <option value="">--Please choose a country--</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>Germany</option>
              <option>USA</option>
              <option>UK</option>
              <option>Ireland</option>
            </select>
            <input
              type="text"
              placeholder="Preferred Time"
              className="w-full px-4 py-2 rounded text-black"
            />
            <button
              type="submit"
              className="bg-black text-white font-semibold w-full py-2 rounded hover:bg-gray-800"
            >
              Request Free Consultation
            </button>
          </form>
        </div> */}
        <CounsellingForm/>
      </div>

      {/* How We Help Section */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/flag-denmark.jpg"
              alt="Study Abroad"
              className="w-full max-w-xs sm:max-w-md rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl font-bold mb-4">How We Help You?</h2>
            <p className="text-gray-700 mb-4">
              We offer end-to-end expert guidance and services to help you achieve your study abroad goals with ease.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Training for Standardized Global tests</li>
              <li>Personalized Counseling Sessions</li>
              <li>Guidance on University Selection</li>
              <li>Application & Financial Aid Support</li>
              <li>Visa Counseling & Interview Training</li>
              <li>Pre-departure Orientation</li>
            </ul>

<Link href="/counselling">
  <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
    Book Free Consultation
  </button>
</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
