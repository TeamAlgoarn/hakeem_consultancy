'use client';
import Image from 'next/image';

export default function VisaTipsItaly() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="/ita-visa.jpg"
          alt="Canada Student Visa"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
           Italy Student Visa
          </h1>
          <p className="text-white text-base sm:text-lg">
            Everything you need to know before applying
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 sm:px-6 py-12">
        {/* Content */}
        <div className="md:col-span-2 text-gray-800 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4"> Italy Student Visa Tips</h2>
            <p className="mb-4">
             Italy offers world-class education, diverse culture, and a welcoming environment for international students. Here are some visa-related tips and benefits to keep in mind.
            </p>

            <h2 className="text-3xl font-bold mb-4">Why Apply for a Italy Tourist Visa?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>University Visits & Campus Tours</li>
              <li>See Niagara Falls and Northern Lights</li>
              <li>Drive 4,860 miles on the Trans-ItalyHighway</li>
              <li>Attend Education Fairs or Conferences</li>
              <li>Attend 5,000+ events yearly</li>
              <li>Attend Short-Term Courses or Workshops</li>
              <li>Enjoy the views of 31,700+ lakes like Lake Louise</li>
            </ul>

            <p className="text-gray-700 mt-4">
              Always keep your documents organized and answer visa officer questions confidently. Expert guidance makes the journey smoother.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">Types of Italy Tourist Visa</h2>
              <p className="mb-2">
                <strong>Single Entry Visa:</strong> Allows one entry for up to 6 months.
              </p>
              <p>
                <strong>Multiple Entry Visa:</strong> Allows multiple entries, each up to 6 months.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">Benefits of Visit Visa</h2>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>Stay up to 6 months</li>
              
                <li>Bring dependents or children</li>
                <li>Attend short-term programs</li>
                <li>Understand Italy’s education and job system</li>
                <li>Qualify for in-Italy study permits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form */}
        {/* <div className="bg-red-600 text-white p-6 rounded-lg space-y-4 w-full">
          <h3 className="text-xl font-bold mb-2">Free Expert Consultation</h3>
          <input className="w-full p-2 text-black rounded" placeholder="Your Name" />
          <input className="w-full p-2 text-black rounded" placeholder="Phone Number" />
          <input className="w-full p-2 text-black rounded" placeholder="Email" />
          <select className="w-full p-2 text-black rounded">
            <option>Looking for</option>
            <option>Study Visa</option>
            <option>Work Visa</option>
            <option>PR Visa</option>
          </select>
          <textarea
            className="w-full p-2 text-black rounded"
            placeholder="Tell us more about your goals"
            rows={3}
          />
          <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800">
            Submit
          </button>
          <p className="text-sm mt-4">
            We’ll contact you within 24 hours to guide you step-by-step.
          </p>
          <img
            src="/can-stu.jpg"
            alt="Happy Student"
            className="mt-4 rounded-md w-full h-40 sm:h-52 object-cover"
          />
        </div> */}
         <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full">
          <h3 className="text-xl font-semibold mb-4">
            Book Free Consultation to Study in Italy
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
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Goa</option>
              <option>Other City</option>
            </select>
            <select className="w-full px-4 py-2 rounded text-black" required>
              <option value="">--Please choose a country--</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>UK</option>
              <option>Germany</option>
              <option>USA</option>
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
            <img
            src="/ita-stu.jpg"
            alt="Happy Student"
            className="mt-4 rounded-md w-full h-40 sm:h-52 object-cover"
          />
          </form>
          </div>
      </section>

      {/* Final Info Section */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-6 sm:p-10 rounded-lg shadow-md w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
              Overseas Education Consultants for Italy
            </h2>
            <p className="text-gray-700 mb-4">
              With years of experience, our consultants help students pick the right courses, prepare strong SOPs, and apply with confidence.
            </p>
            <p className="text-gray-700 mb-4">
              From shortlisting universities to visa interview prep—we guide your entire study abroad journey.
            </p>
            <p className="text-gray-700">
              Hakeem Consulting Services is a trusted <span className="text-red-600 font-medium">Italy study visa consultant in Bangalore</span> and Chennai. Book a consultation today.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/university.jpg"
              alt="Student"
              className="rounded-lg shadow-md w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
