// 'use client';

// import { useState } from "react";
// import Image from "next/image";

// export default function UniversityPartners() {
//   const [showUniversities, setShowUniversities] = useState(false);

//   const usaLogos = [
//     "Colorado State University.png",
//     "DePaul University.png",
//     "Drew University.png",
//     "Florida Atlantic University.png",
//     "George Mason University.png",
//     "Husson University.png",
//     "Manhattanville College.png",
//     "University of North Alabama.png",
//     "Marshall University.png",
//     "Oregon State University.png",
//      "Auburn University.png",
//     "Philadelphia University.png",
//     "Saint Louis University.png",
//     "Simon Fraser University.png",
//     "Suffolk University.png",
//     "The University of Tulsa.png",
//     "The University of Vermont.png",
//     "Trine University.png",
//     "University of Alabama at Birmingham.png",
//     "University of Manitoba.png",
//     "University of Massachusetts.png",
//     "University of New Hampshire.png",
//     "University of South Florida.png",
//     "Virginia Tech.png",
//     "University of South Carolina.png",
//     "Valencia College.png",
//     "Washington State University.png",
//     "Texas Wesleyan University.png"
   
//   ];

//     const canadaLogos = [
//     "Canadore College.png",
//     "Centennial College.png",
//     "Durham College.png",
//     "Georgian College of Applied Arts Technology.png",
//     "Humber Institute of Technology Advanced.png",
//     "Kwantlen Polytechnic University.png",
//     "Niagara College Canada.png",
//     "North Island College.png",
//     "Sault College.png",
//     "Seneca College.png",
   
//     "Thompson Rivers University.png",
//     "Royal Roads University.png"
//   ];

//   return (
//     <div className="my-10 text-center">
//       <h2 className="text-2xl font-bold mb-4">Our Partner Universities</h2>

//       <button
//         onClick={() => setShowUniversities(!showUniversities)}
//         className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//       >
//         {showUniversities ? "Hide Universities" : "Universities"}
//       </button>

//       {showUniversities && (
//         <div className="mt-8">
//           {/* USA Section */}
//           <h3 className="text-xl font-semibold mb-4">USA</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
//             {usaLogos.map((logo, index) => (
//               <div key={index} className="bg-white p-4 rounded shadow">
//                 <Image
//                   src={`/logos/usa/${logo}`}
//                   alt={logo}
//                   width={100}
//                   height={60}
//                   className="object-contain mx-auto"
//                 />
//                 <p className="text-sm mt-2">{logo.replace(".png", "")}</p>
//               </div>
//             ))}
//           </div>

//           {/* Canada Section */}
//           <h3 className="text-xl font-semibold mt-10 mb-4">Canada</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
//             {canadaLogos.map((logo, index) => (
//               <div key={index} className="bg-white p-4 rounded shadow">
//                 <Image
//                   src={`/logos/canada/${logo}`}
//                   alt={logo}
//                   width={100}
//                   height={60}
//                   className="object-contain mx-auto"
//                 />
//                 <p className="text-sm mt-2">{logo.replace(".png", "")}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import { useState } from "react";
import Image from "next/image";

export default function UniversityPartners() {
  const [showUniversities, setShowUniversities] = useState(false);

  const usaLogos = [
    "Colorado State University.png",
    "DePaul University.png",
    "Drew University.png",
    "Florida Atlantic University.png",
    "George Mason University.png",
    "Husson University.png",
    "Manhattanville College.png",
    "University of North Alabama.png",
    "Marshall University.png",
    "Oregon State University.png",
     "Auburn University.png",
    "Philadelphia University.png",
    "Saint Louis University.png",
    "Simon Fraser University.png",
    "Suffolk University.png",
    "The University of Tulsa.png",
    "The University of Vermont.png",
    "Trine University.png",
    "University of Alabama at Birmingham.png",
    "University of Manitoba.png",
    "University of Massachusetts.png",
    "University of New Hampshire.png",
    "University of South Florida.png",
    "Virginia Tech.png",
    "University of South Carolina.png",
    "Valencia College.png",
    "Washington State University.png",
    "Texas Wesleyan University.png"
   
  ];

    const canadaLogos = [
    "Canadore College.png",
    "Centennial College.png",
    "Durham College.png",
    "Georgian College of Applied Arts Technology.png",
   
    "Kwantlen Polytechnic University.png",
    "Niagara College Canada.png",
    "North Island College.png",
    "Sault College.png",
    "Seneca College.png",
   
    "Thompson Rivers University.png",
    "Royal Roads University.png"
  ];

  return (
    <div className="my-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Our Partner Universities</h2>

      <button
        onClick={() => setShowUniversities(!showUniversities)}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {showUniversities ? "Hide Universities" : "Universities"}
      </button>

      {showUniversities && (
        <div className="mt-8">
          {/* USA Section */}
          <h3 className="text-xl font-semibold mb-4">USA</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
            {usaLogos.map((logo, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <Image
                  src={`/logos/usa/${logo}`}
                  alt={logo}
                  width={100}
                  height={60}
                  className="object-contain mx-auto"
                />
                <p className="text-sm mt-2">{logo.replace(".png", "")}</p>
              </div>
            ))}
          </div>

          {/* Canada Section */}
          <h3 className="text-xl font-semibold mt-10 mb-4">Canada</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
            {canadaLogos.map((logo, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <Image
                  src={`/logos/canada/${logo}`}
                  alt={logo}
                  width={100}
                  height={60}
                  className="object-contain mx-auto"
                />
                <p className="text-sm mt-2">{logo.replace(".png", "")}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}