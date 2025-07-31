// 'use client';

// import Image from 'next/image';

// export default function USAPage() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-start"
//         style={{ backgroundImage: "url('/usa.jpg')", height: '800px' }}
//       >
//         <div className="p-10 text-white max-w-xl ml-10 rounded" style={{ marginInline: '500px', color: 'black' }}>
//           <h1 className="text-4xl font-bold mb-3">Study abroad in <span className="text-black">United States</span></h1>
//           <p className="mb-4 text-lg">
//             Here's a comprehensive guide for all students who want to study abroad.
//           </p>
//           <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold">
//             Book Free Consultation
//           </button>
//         </div>
//       </div>

//       {/* Content + Form Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
//         {/* Left Content */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Why Study in USA</h2>
//           <p className="mb-4">
//             The United States of America (USA) is one of the top study destinations with the world’s largest number of international students. The USA is known for its majestic mountains, beautiful beaches, mouth-watering fast food, and most reputed universities and colleges offering higher education in the USA.
//           </p>
//           <p className="mb-4">
//             Every year hundreds of thousands of international students worldwide, including India, flock to study abroad in America.
//           </p>
//           <p className="mb-4">
//             Our study abroad consultants help students in India to find the right university to match their academic goals.
//           </p>
//           <p className="mb-4">
//             There are many benefits of studying in the USA, right from excellent academic education to securing the best-paying job for yourself.
//           </p>
//           <p className="mb-4">
//             Here are some reasons why studying in the USA is so prevalent in the world:
//           </p>
//           <ul className="list-disc pl-5 mb-6">
//             <li>Academic excellence with world-class learning institutions and universities</li>
//             <li>Premier destination for international students</li>
//             <li>Pioneers in cutting-edge technology</li>
//             <li>Flexible education system</li>
//             <li>Opportunities for Graduate, Teaching, and Research Assistantships</li>
//             <li>Availability of Fellowship/Assistantship and Scholarships</li>
//             <li>Global education system</li>
//             <li>Prospects of internships & career enhancement</li>
//           </ul>

//           <h2 className="text-xl font-semibold mt-8 mb-2">Overseas Education Consultants to Study in the USA</h2>
//           <p className="mb-4">
//             Every year hundreds of thousands of international students worldwide, including India, flock to study abroad in the United States of America.
//           </p>
//           <p className="mb-4">
//             At Maven Consulting Services, Indian students get assistance with the admission process when they are willing to study abroad in the USA.
//           </p>
//           <p className="mb-4">
//             Our Overseas Education Consultant in Bangalore guides students to find the right university and after selection ensures that they meet the visa requirements to match their academic goals.
//           </p>
//         </div>

//         {/* Right Form */}
//         <div className="bg-red-600 text-white p-6 rounded shadow" style={{ width: "500px", marginBottom: "200px", marginTop: "77px" }}>
//           <h3 className="text-xl font-semibold mb-4">
//             Book Free Consultation to Study in USA
//           </h3>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Full Name"
//               className="w-full px-4 py-2 rounded text-black"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Your Mobile No."
//               className="w-full px-4 py-2 rounded text-black"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-2 rounded text-black"
//               required
//             />
//             <select className="w-full px-4 py-2 rounded text-black" required>
//               <option value="">--Please choose a branch--</option>
//               <option>Delhi</option>
//               <option>Bangalore</option>
//               <option>Hyderabad</option>
//               <option>Chennai</option>
//               <option>Goa</option>
//               <option>Other City</option>
//             </select>
//             <select className="w-full px-4 py-2 rounded text-black" required>
//               <option value="">--Please choose a country--</option>
//               <option>Australia</option>
//               <option>Canada</option>
//               <option>Germany</option>
//               <option>UK</option>
//               <option>USA</option>
//               <option>Ireland</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Preferred Time"
//               className="w-full px-4 py-2 rounded text-black"
//             />
//             <button
//               type="submit"
//               className="bg-black text-white font-semibold w-full py-2 rounded hover:bg-gray-800"
//             >
//               Request Free Consultation
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* How We Help Section */}
//       <section className="bg-gray-100 py-12 px-6" style={{ marginTop: '-78px' }}>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Image */}
//           <div className="flex justify-center">
//             <img
//               src="/pics4.jpg"
//               alt="Study Abroad"
//               className="w-full max-w-md"
//             />
//           </div>

//           {/* Right Content */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">How We Help You?</h2>
//             <p className="text-gray-700 mb-4">
//               We offer end-to-end expert guidance and services to help you achieve your study abroad goals with ease.
//             </p>
//             <ul className="list-disc pl-5 text-gray-700 space-y-2">
//               <li>Training for Standardized Global tests</li>
//               <li>Personalized Counseling Sessions</li>
//               <li>Guidance on Selection of the best-fit University</li>
//               <li>Application Preparation & Financial Aid Guidance</li>
//               <li>Visa Counseling & Intensive Interview Training</li>
//               <li>Pre-departure Preparation and Orientation</li>
//             </ul>

//             <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
//               Book Free Consultation
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
'use client';
import USAUniversities from '../../components/universities/USAUniversities';
import CounsellingForm from '@/app/components/CounsellingForm';
import Image from 'next/image';
import Link from 'next/link';
export default function USAPage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/usa.jpg')" }}
      >
        <div className="p-6 text-white text-center max-w-2xl mx-4bg-opacity-70 rounded">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Study abroad in <span className="text-red-600">United States</span>
          </h1>
          <p className="mb-4 text-lg text-white">
            Here's a comprehensive guide for all students who want to study abroad.
          </p>
          
        </div>
      </div>

      {/* Content + Form Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Study in USA</h2>
          <p className="mb-4">
            The United States of America (USA) is one of the top study destinations with the world’s largest number of international students. The USA is known for its majestic mountains, beautiful beaches, mouth-watering fast food, and most reputed universities and colleges offering higher education in the USA.
          </p>
          <p className="mb-4">
            Every year hundreds of thousands of international students worldwide, including India, flock to study abroad in America.
          </p>
          <p className="mb-4">
            Our study abroad consultants help students in India to find the right university to match their academic goals.
          </p>
          <p className="mb-4">
            There are many benefits of studying in the USA, right from excellent academic education to securing the best-paying job for yourself.
          </p>
          <p className="mb-4">
            Here are some reasons why studying in the USA is so prevalent in the world:
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Academic excellence with world-class learning institutions and universities</li>
            <li>Premier destination for international students</li>
            <li>Pioneers in cutting-edge technology</li>
            <li>Flexible education system</li>
            <li>Opportunities for Graduate, Teaching, and Research Assistantships</li>
            <li>Availability of Fellowship/Assistantship and Scholarships</li>
            <li>Global education system</li>
            <li>Prospects of internships & career enhancement</li>
          </ul>
       


          {/* <h2 className="text-xl font-semibold mt-8 mb-2">Overseas Education Consultants to Study in the USA</h2>
          <p className="mb-4">
            Every year hundreds of thousands of international students worldwide, including India, flock to study abroad in the United States of America.
          </p>
          <p className="mb-4">
            At Maven Consulting Services, Indian students get assistance with the admission process when they are willing to study abroad in the USA.
          </p>
          <p className="mb-4">
            Our Overseas Education Consultant in Bangalore guides students to find the right university and after selection ensures that they meet the visa requirements to match their academic goals.
          </p> */}
        </div>

        {/* Right Form */}
       {/* <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full" style={{marginBottom:'400px'}}>
          <h3 className="text-xl font-semibold mb-4">
            Book Free Consultation to Study in USA
          </h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Full Name" className="w-full px-4 py-2 rounded text-black" required />
            <input type="text" placeholder="Your Mobile No." className="w-full px-4 py-2 rounded text-black" required />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded text-black" required />
            <select className="w-full px-4 py-2 rounded text-black" required>
              <option value="">--Please choose a branch--</option>
             
              <option>Hyderabad</option>
          
            </select>
            <select className="w-full px-4 py-2 rounded text-black" required>
              <option value="">--Please choose a country--</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>Germany</option>
              <option>UK</option>
              <option>USA</option>
              <option>Ireland</option>
            </select>
            <input type="text" placeholder="Preferred Time" className="w-full px-4 py-2 rounded text-black" />
            <button type="submit" className="bg-black text-white font-semibold w-full py-2 rounded hover:bg-gray-800">
              Request Free Consultation
            </button>
          </form>
        </div> */}
        <CounsellingForm/>
      </div>
      

      {/* How We Help Section */}
      <section className="bg-gray-100 py-12 px-6" style={{marginTop:'-205px'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src="/pics4.jpg" alt="Study Abroad" className="w-full max-w-md" />
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
              <li>Guidance on Selection of the best-fit University</li>
              <li>Application Preparation & Financial Aid Guidance</li>
              <li>Visa Counseling & Intensive Interview Training</li>
              <li>Pre-departure Preparation and Orientation</li>
            </ul>
            <Link href="/counselling">
  <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
    Book Free Consultation
  </button>
</Link>
          </div>
        </div>
      </section>
      {/* Universities Section */}
<USAUniversities />

    </div>
  );
}
