'use client';
import Image from "next/image";

export default function GermanyUniversities() {
  const germanyLogos = [
    "Brandenburg University of Applied Sciences.png",
    "Cologne Business School.png",
    "Ernst Abbe Hochschule Jena.png",
    "Fachhochschule Erfurt University of Applied Sciences.png",

    "Hochschule Zittau_Görlitz University of Applied Sciences.png",
   
    
    "Praxis Hochschule University of Applied Sciences.png",
    "Technical University of Applied Sciences.png",
    "Universitätsmedizin Berlin.png"
  ];

  return (
    <div className="my-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Universities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
        {germanyLogos.map((logo, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <Image
              src={`/logos/germany/${(logo)}`}
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
