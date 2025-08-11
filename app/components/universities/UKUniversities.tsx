// 'use client';

// import Image from "next/image";

// export default function UKUniversities() {
//   const ukLogos = [
//     "Bangor University.png",
//     "Birkbeck, University of London.png",
//     "Birmingham city university.png",
//     "Bradford university.png",
//     "Brunel University London.png",
//     "Cardiff metropolitan university.png",
//     "CATS College.png",
//     "Coventry University.png",
//     "De Montfort University.png",
//     "Edinburgh Napier university.png",
//     "Glasgow Caledonian University.png",
//     "Goldsmiths, University of London.png",
//     "Heythrop College.png",
//     "Kingston University.png",
//     "Leeds University.png",
//     "London south bank university.png",
//     "Manchester Metropolitan University.png",
//     "Northumbria University.png",
//     "Nottingham Trent university.png",
//     "Plymouth university.png",
//     "Robert Gordon university.png",
//     "Sheffield Hallam University.png",
//     "Southampton Solent university.png",
//     "Swansea university.png",
//     "University of Gloucestershire.png",
//     "University of Roehampton.png",
//     "University of South Wales.png",
//     "University of Stirling.png",
//     "University of Strathclyde.png",
//     "University of the West of Scotland.png",
//     "Queen Mary University of London.png"
//   ];

//   return (
//     <div className="my-10 text-center">
//       <h2 className="text-2xl font-bold mb-6">Universities</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
//         {ukLogos.map((logo, index) => (
//           <div key={index} className="bg-white p-4 rounded shadow">
//             <Image
//               src={`/logos/uk/${logo}`}
//               alt={logo}
//               width={100}
//               height={60}
//               className="object-contain mx-auto"
//             />
//             <p className="text-sm mt-2">{logo.replace(".png", "")}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


'use client';
import Image from "next/image";

export default function UKUniversities() {
  const ukLogos = [
    "Bangor University.png",
    "Birkbeck, University of London.png",
    "Birmingham city university.png",
    "Bradford university.png",
    "Brunel University London.png",
    "Cardiff metropolitan university.png",
    "CATS College.png",
    "Coventry University.png",
    "De Montfort University.png",
    "Edinburgh Napier university.png",
    "Glasgow Caledonian University.png",
    "Goldsmiths, University of London.png",
    "Heythrop College.png",
    "Kingston University.png",
    "Leeds University.png",
    "London south bank university.png",
    "Manchester Metropolitan University.png",
    "Northumbria University.png",
    "Nottingham Trent university.png",
    "Plymouth university.png",
    "Robert Gordon university.png",
    "Sheffield Hallam University.png",
    "Southampton Solent university.png",
    "Swansea university.png",
    "University of Gloucestershire.png",
    "University of Roehampton.png",
    "University of South Wales.png",
    "University of Stirling.png",
    "University of Strathclyde.png",
    "University of the West of Scotland.png",
    "Queen Mary University of London.png"
  ];


  return (
    <div className="my-16 text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">Our Partner Universities in United Kingdom</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 max-w-7xl mx-auto">
        {ukLogos.map((logo, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-delay"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="h-24 flex items-center justify-center">
              <Image
                src={`/logos/uk/${logo}`}
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