// 'use client';
// import Image from 'next/image';

// const usaLogos = [
//   "Colorado State University.png",
//   "DePaul University.png",
//   "Drew University.png",
//   "Florida Atlantic University.png",
//   "George Mason University.png",
//   "Husson University.png",
//   "Manhattanville College.png",
//   "University of North Alabama.png",
//   "Marshall University.png",
//   "Oregon State University.png",
//   "Auburn University.png",
//   "Philadelphia University.png",
//   "Saint Louis University.png",
//   "Simon Fraser University.png",
//   "Suffolk University.png",
//   "The University of Tulsa.png",
//   "The University of Vermont.png",
//   "Trine University.png",
//   "University of Alabama at Birmingham.png",
//   "University of Manitoba.png",
//   "University of Massachusetts.png",
//   "University of New Hampshire.png",
//   "University of South Florida.png",
//   "Virginia Tech.png",
//   "University of South Carolina.png",
//   "Valencia College.png",
//   "Washington State University.png",
//   "Texas Wesleyan University.png",
// ];

// export default function USAUniversities() {
//   return (
//     <section className="my-16 text-center">
//       <h2 className="text-2xl font-bold mb-6">Universities</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-6">
//         {usaLogos.map((logo, index) => (
//           <div key={index} className="bg-white p-4 rounded shadow">
//             <Image
//               src={`/logos/usa/${logo}`}
//               alt={logo}
//               width={100}
//               height={60}
//               className="object-contain mx-auto"
//             />
//             <p className="text-sm mt-2">{logo.replace(".png", "")}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



'use client';
import Image from "next/image";

export default function USAUniversities() {
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
  "Texas Wesleyan University.png",
  "Saint Norbert College.png",
  "San Barbara Business College.png",
  "San Jose State University.png",
  "Seattle Central College.png",
  "St. Marys University Minneapolis.png",
  "Texas A&M University-Corpus Christi.png",
  "Texas Wesleyan University.png",
  "The Art Institute of Ft. Lauderdale.png",
  "The University of Kansas.png",
  "University of Bridgeport.png",
  "University of Colorado Denver.png",
  "University of Dayton.png",
  "University of Findlay.png",
  "University of Illinois-Chicago.png",
  "University of New Mexico.png",
  "University of South Carolina.png",
  "University of St. Francis.png",
  "University of The Pacific.png",
  "University of Utah.png",
  "University of Wisconsin Stevens Point.png",
  "Valencia College.png",
  "Washington State University.png",
  "Wayman American Flight Training.png",
  "West Texas A&M.png",
  "Westcliff University.png",
  "Western New England.png",
  "Woodbury University.png"



];


  return (
    <div className="my-16 text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">Our Partner Universities in USA</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 max-w-7xl mx-auto">
        {usaLogos.map((logo, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-delay"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="h-24 flex items-center justify-center">
              <Image
                src={`/logos/usa/${logo}`}
                alt={logo.replace(".png", "")}
                width={160}
                height={80}
                className="object-contain h-full w-full mx-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-sm mt-4  font-bold text-gray-700">
              {logo.replace(".png", "").replace("University", "Uni")}
            </p>
          </div>
        ))}
      </div>

      {/* Add these CSS animations to your globals.css if not already present */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
