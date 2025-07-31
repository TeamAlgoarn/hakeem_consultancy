// 'use client';

// import Image from 'next/image';

// export default function GermanyPage() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-start"
//         style={{ backgroundImage: "url('/pics8.jpg')" }}
//       >
//         <div className=" p-10 text-white max-w-xl ml-10 rounded"  style={{ marginInline: '500px' }}>
//           <h1 className="text-4xl font-bold mb-3">Study abroad in <span className="text-white">Germany</span></h1>
//           <p className="mb-4 text-lg">
//             Here's a comprehensive guide for all  students who want to study abroad.
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
//           <h2 className="text-2xl font-bold mb-4">Why Study in Germany?</h2>
//           <p className="mb-4">
//             Germany is recognized as a land of ideas, known for its world-class education and technological prowess. Germany is the ideal destination drawing international students for excellent academics.
//           </p>
//           <p className="mb-4">
//             When you choose to study abroad in Germany, you will study in universities that boast highly acclaimed international degrees.
//           </p>
//           <p className="mb-4">
//             Thousands of students travel to Germany annually to seek education in some of the world’s best academies of higher learning.
//           </p>
//           <p className="mb-4">
//             Education in Germany for Indian students has proven to be highly beneficial. Indian students who study in Germany join an international community of high achievers.
//           </p>
//           <p className="mb-4">
//             It is the most populous member state and the largest economy in the European Union. Despite world-class universities, there are several more benefits of studying in Germany as follow:
//           </p>
//           <ul className="list-disc pl-5 mb-6">
//             <li>Globally recognized programs</li>
//             <li>Forefront in cutting edge technology</li>
//             <li>A world-class education at affordable costs</li>
//             <li>Free-tuition academics in most universities (very low fees at some)</li>
//             <li>Opportunities to live and explore</li>
//             <li>The powerhouse of Schengen countries</li>
//             <li>English-taught courses</li>
//             <li>Opportunity to explore Europe</li>
//             <li>Scholarship Opportunities:</li>
//           </ul>
//         </div>

//         {/* Right Form */}
//         <div className="bg-red-600 text-white p-6 rounded shadow" style={{width:"500px", marginBottom:"200px" ,marginTop:"77px"}}>
//           <h3 className="text-xl font-semibold mb-4">
//             Book Free Consultation to Study in Germany
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
//               <option>Chennai </option>
//               <option>Goa</option>
//               <option>Other City</option>
              
//             </select>
//             <select className="w-full px-4 py-2 rounded text-black" required>
//               <option value="">--Please choose a country--</option>
//               <option>Australia</option>
//               <option>Canada</option>
//               <option>Germany</option>
//               <option>UK</option>
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
//       <section className="bg-gray-100 py-12 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Image */}
//           <div className="flex justify-center">
//             <img
//               src="/f1.jpg"
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
import CounsellingForm from "@/app/components/CounsellingForm";
import GermanyUniversities from "../../components/universities/GermanyUniversities";
import Image from 'next/image';
import Link from 'next/link';
export default function GermanyPage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] bg-cover bg-center  bg-black bg-opacity-40 flex items-center justify-center px-4"
        // className='relative w-full h-[600px] bg-cover bg-center flex items-center justify-center text-center px-4'
        
        style={{ backgroundImage: "url('/gerss.jpg')" }}
      >
        {/* <div className=" bg-opacity-60 text-white p-6 sm:p-10 rounded-lg max-w-2xl w-full text-center"> */}
        <div className=" bg-opacity-80 p-6 rounded max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{color:'white'}}>
            Study abroad in <span className="text-red-500">Germany</span>
          </h1>
          <p className="mb-4 text-base sm:text-lg" style={{color:'white'}} >
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
          <h2 className="text-2xl font-bold mb-4">Why Study in Germany?</h2>
          <p className="mb-4">
            Germany is recognized as a land of ideas, known for its world-class education and technological prowess. Germany is the ideal destination drawing international students for excellent academics.
          </p>
          <p className="mb-4">
            When you choose to study abroad in Germany, you will study in universities that boast highly acclaimed international degrees.
          </p>
          <p className="mb-4">
            Thousands of students travel to Germany annually to seek education in some of the world’s best academies of higher learning.
          </p>
          <p className="mb-4">
            Education in Germany for Indian students has proven to be highly beneficial. Indian students who study in Germany join an international community of high achievers.
          </p>
          <p className="mb-4">
            It is the most populous member state and the largest economy in the European Union. Despite world-class universities, there are several more benefits of studying in Germany:
          </p>
          <ul className="list-disc pl-5 mb-6 text-sm space-y-1">
            <li>Globally recognized programs</li>
            <li>Forefront in cutting edge technology</li>
            <li>World-class education at affordable costs</li>
            <li>Free-tuition in most universities</li>
            <li>Opportunities to live and explore</li>
            <li>Part of Schengen countries</li>
            <li>English-taught courses</li>
            <li>Access to explore Europe</li>
            <li>Scholarship Opportunities</li>
          </ul>
        </div>

        {/* Right Form */}
        <CounsellingForm/>
        {/* <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full" style={{marginBottom:'150px'}}>
          <h3 className="text-xl font-semibold mb-4">
            Book Free Consultation to Study in Germany
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
          </form>
        </div> */}
      </div>

      {/* How We Help Section */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/f1.jpg"
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
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
              <li>Training for Standardized Global tests</li>
              <li>Personalized Counseling Sessions</li>
              <li>Guidance on selection of the best-fit university</li>
              <li>Application preparation & financial aid guidance</li>
              <li>Visa counseling & interview training</li>
              <li>Pre-departure preparation and orientation</li>
            </ul>
            <Link href="/counselling">
  <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
    Book Free Consultation
  </button>
</Link>
          </div>
        </div>
      </section>
      <GermanyUniversities />
    </div>
  );
}
