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
    <div className="my-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Universities</h2>

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
  );
}
