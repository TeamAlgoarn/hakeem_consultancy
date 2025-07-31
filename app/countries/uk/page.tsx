// 'use client';

// import Image from 'next/image';

// export default function UKPage() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-start"
//         style={{ backgroundImage: "url('/uk.jpg')",height:'800px'}}
//       >
//         <div className="p-10 text-white max-w-xl ml-10 rounded" style={{ marginInline: '500px',color:'black' }}>
//           <h1 className="text-4xl font-bold mb-3">Study abroad in <span className="text-black">United Kingdom</span></h1>
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
//           <h2 className="text-2xl font-bold mb-4">Why Study in United Kingdom?</h2>
//           <p className="mb-4">
//             The UK has a rich royal heritage of education dating back centuries ago. Ranking among the best universities in the world, students who want to study in the UK will choose universities of international standards.
//           </p>
//           <p className="mb-4">
//             When you choose to study in the UK you will be placed in universities that boast high levels of academic excellence. Higher studies in the UK come with several positive gains for Indian students. The UK has been the preferred choice for some of the greatest minds in history.
//           </p>
//           <p className="mb-4">
//             UK has an undisputed reputation for academic excellence and offers a range of outstanding programs to study for Bachelor, Master, and Ph.D.
//           </p>
//           <p className="mb-4">
//             UK’s education system is one of the best in the World for its quality and standards, which is why you should study in the UK.
//           </p>
//           <p className="mb-4">
//             So, if you are planning to study abroad in England, there are many things the UK can offer. Here are some of the advantages of studying in the UK:
//           </p>
//           <ul className="list-disc pl-5 mb-6">
//             <li>Higher Standard of Education</li>
//             <li>World’s Top Universities</li>
//             <li>Requires no GRE/GMAT</li>
//             <li>Access world-leading research</li>
//             <li>Affordable Education at a Global Level</li>
//             <li>Post-study Visa now available for international students</li>
//           </ul>
//         </div>

//         {/* Right Form */}
//         <div className="bg-red-600 text-white p-6 rounded shadow" style={{ width: "500px", marginBottom: "200px", marginTop: "77px" }}>
//           <h3 className="text-xl font-semibold mb-4">
//             Book Free Consultation to Study in UK
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
//       <section className="bg-gray-100 py-12 px-6" style={{marginTop:'-78px'}}>
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
import UKUniversities from "../../components/universities/UKUniversities";
import CounsellingForm from "@/app/components/CounsellingForm";
import Image from 'next/image';
import Link from 'next/link';
export default function UKPage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
        style={{ backgroundImage: "url('/UK BG.jpg')" }}
      >
        <div className=" bg-opacity-70 p-6 md:p-10 rounded max-w-xl w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{color:'white'}}>Study abroad in <span className="text-red-700">United Kingdom</span></h1>
          <p className="mb-4 text-base md:text-lg text-white">
            Here's a comprehensive guide for all students who want to study abroad.
          </p>
          {/* <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold">
            Book Free Consultation
          </button> */}
        </div>
      </div>

      {/* Content + Form Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6 py-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Study in United Kingdom?</h2>
          <p className="mb-4">The UK has a rich royal heritage of education dating back centuries ago...</p>
          <p className="mb-4">When you choose to study in the UK you will be placed in universities that boast high levels of academic excellence...</p>
          <ul className="list-disc pl-5 mb-6">
            <li>Higher Standard of Education</li>
            <li>World’s Top Universities</li>
            <li>Requires no GRE/GMAT</li>
            <li>Access world-leading research</li>
            <li>Affordable Education at a Global Level</li>
            <li>Post-study Visa now available for international students</li>
          </ul>
        </div>

        {/* Right Form */}
       {/* <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full">
          <h3 className="text-xl font-semibold mb-4">Book Free Consultation to Study in UK</h3>
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
              <option>USA</option>
              <option>UK</option>
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
      <section className="bg-gray-100 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src="/VISA UK.jpg" alt="Study Abroad" className="w-full max-w-md rounded shadow-md" />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl font-bold mb-4">How We Help You?</h2>
            <p className="text-gray-700 mb-4">We offer end-to-end expert guidance and services to help you achieve your study abroad goals with ease.</p>
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
      {/* UK Universities Section */}
<UKUniversities />

    </div>
  );
}
