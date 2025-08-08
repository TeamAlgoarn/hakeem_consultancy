'use client';

import Image from "next/image";

export default function CanadaUniversities() {
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
    <div className="my-16 text-center  animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">Our Partner Universities in Canada</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 max-w-7xl mx-auto">
        {canadaLogos.map((logo, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-delay"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="h-24 flex items-center justify-center">
              <Image
                src={`/logos/canada/${(logo)}`}
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