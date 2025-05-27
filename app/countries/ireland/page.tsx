// 'use client';

// import Image from 'next/image';

// export default function IrelandPage() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-start"
//         style={{ backgroundImage: "url('/ireland.jpg')", height: '600px' }} // Update image path accordingly
//       >
//         <div className="p-10 text-white max-w-xl ml-10 rounded" style={{ marginInline: '500px', color: 'black' }}>
//           <h1 className="text-4xl font-bold mb-3">Study abroad in <span className="text-black">Ireland</span></h1>
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
//           <h2 className="text-2xl font-bold mb-4">Why Study in Ireland</h2>
//           <p className="mb-4">
//             With a large and growing community of international students, Ireland is a great place to study abroad. Indian students can choose to study in Ireland from over 5,000 internationally recognized degrees.
//           </p>
//           <p className="mb-4">
//             Studying abroad in Ireland lets you meet students from all over the world. Dublin, the capital, is known as one of the friendliest cities. Ireland also offers peaceful countryside where you can study and relax in nature.
//           </p>
//           <p className="mb-4">
//             Ireland is full of energy, giving students plenty of chances to join in activities outside of class. It’s also home to big companies like Google, Facebook, Microsoft, LinkedIn, and Yahoo, where students can find internships. Ireland truly brings together people from all over the world.
//           </p>
//         </div>

//         {/* Right Form */}
//         <div className="bg-red-600 text-white p-6 rounded shadow" style={{ width: "500px", marginBottom: "200px", marginTop: "77px" }}>
//           <h3 className="text-xl font-semibold mb-4">
//             Book Free Consultation to Study in Ireland
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
// <div className="space-y-6 text-gray-800 mt-10" style={{marginTop:'-468px', marginInline:'164px'}}>
//   {/* <h2 className="text-3xl font-bold">Why Study in Ireland?</h2>

//   <p>
//     Ireland has rapidly become one of the top destinations for international students due to its high-quality education,
//     global recognition, and excellent work opportunities. Known for its warm hospitality and vibrant culture, Ireland offers a
//     supportive and safe environment for students from all over the world.
//   </p>

//   <h3 className="text-2xl font-semibold mt-6">Top Reasons to Study in Ireland:</h3>
//   <ul className="list-disc pl-6 space-y-2">
//     <li>
//       <strong>World-Class Education:</strong> Irish universities rank among the top globally, with a focus on research and innovation.
//     </li>
//     <li>
//       <strong>Post-Study Work Rights:</strong> Students can stay for up to 2 years after graduation under the Third Level Graduate Scheme.
//     </li>
//     <li>
//       <strong>Tech & Pharma Hub:</strong> Ireland is the European headquarters for companies like Google, Apple, Pfizer, Facebook, and Microsoft.
//     </li>
//     <li>
//       <strong>English-Speaking Country:</strong> A major benefit for Indian and international students for both academics and daily life.
//     </li>
//     <li>
//       <strong>Affordable Compared to UK/USA:</strong> Tuition and cost of living in Ireland are lower than in the US and UK.
//     </li>
//     <li>
//       <strong>Scholarships for Indian Students:</strong> Government and institutional funding available for undergraduate and postgraduate studies.
//     </li>
//     <li>
//       <strong>Global Career Opportunities:</strong> Ireland is part of the EU, offering students access to job markets across Europe.
//     </li>
//   </ul> */}

//   <h3 className="text-2xl font-semibold mt-6">Popular Courses in Ireland:</h3>
//   <ul className="list-disc pl-6 space-y-2">
//     <li>Computer Science and Data Analytics</li>
//     <li>Engineering and Renewable Energy</li>
//     <li>Life Sciences, Biotechnology, and Pharmaceuticals</li>
//     <li>Finance, Business, and Management</li>
//     <li>Media, Communication & Digital Marketing</li>
//   </ul>

//   <h3 className="text-2xl font-semibold mt-6">Student Life in Ireland:</h3>
//   <p>
//     Irish campuses are dynamic and diverse, offering modern facilities, international student clubs, and career support services.
//     Cities like Dublin, Cork, and Galway are known for their friendly communities, music, festivals, and historic charm.
//   </p>

  
// </div>

//       {/* How We Help Section */}
//       <section className="bg-gray-100 py-12 px-6" style={{ marginTop: '49px' }}>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Image */}
//           <div className="flex justify-center">
//             <img
//               src="/ire stu.jpg"
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

import Image from 'next/image';
import Link from 'next/link';
export default function IrelandPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center text-center px-4" style={{ backgroundImage: "url('/ire-flag.jpg')" }}>
        <div className=" bg-opacity-80 p-6 rounded max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white-900" style={{color:'white'}}>Study abroad in <span className="text-red-600">Ireland</span></h1>
          <p className="mb-4 text-lg text-white-800" style={{color:'white'}}>
            Here's a comprehensive guide for all students who want to study abroad.
          </p>
          {/* <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold">
            Book Free Consultation
          </button> */}
        </div>
      </div>

      {/* Content + Form Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Study in Ireland</h2>
          <p className="mb-4">
            With a large and growing community of international students, Ireland is a great place to study abroad. Indian students can choose to study in Ireland from over 5,000 internationally recognized degrees.
          </p>
          <p className="mb-4">
            Studying abroad in Ireland lets you meet students from all over the world. Dublin, the capital, is known as one of the friendliest cities. Ireland also offers peaceful countryside where you can study and relax in nature.
          </p>
          <p className="mb-4">
            Ireland is full of energy, giving students plenty of chances to join in activities outside of class. It’s also home to big companies like Google, Facebook, Microsoft, LinkedIn, and Yahoo, where students can find internships. Ireland truly brings together people from all over the world.
          </p>

          <h3 className="text-xl font-semibold mt-6">Popular Courses in Ireland:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Computer Science and Data Analytics</li>
            <li>Engineering and Renewable Energy</li>
            <li>Life Sciences, Biotechnology, and Pharmaceuticals</li>
            <li>Finance, Business, and Management</li>
            <li>Media, Communication & Digital Marketing</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Student Life in Ireland:</h3>
          <p>
            Irish campuses are dynamic and diverse, offering modern facilities, international student clubs, and career support services. Cities like Dublin, Cork, and Galway are known for their friendly communities, music, festivals, and historic charm.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full" style={{marginBottom:'150px'}}>
          <h3 className="text-xl font-semibold mb-4">
            Book Free Consultation to Study in Ireland
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
              <option>Germany</option>
              <option>UK</option>
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
        </div>
      </div>

      {/* How We Help Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/ire stu.jpg"
              alt="Study Abroad"
              className="w-full max-w-md rounded shadow"
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
    </div>
  );
}
