'use client';
import Image from "next/image";

export default function AustraliaUniversities() {
  const australiaLogos = [
  
   
 
    "Australian College of Physical Education.png",
    "Australian National University College.png",
    
    "Charles Sturt University.png",
    "Curtain College.png",
    "Curtain University.png",
    "Deakin University.png",
    "Edith Cowan University.png",
    "Endeavour College of N Health.png",
    "Flinders International Study Centre.png",
    "Griffith University.png",
    "La Trobe University.png",
    "Macquarie University.png",
    "Martin College.png",
    "Murdoch University.png",
  
    "RMIT University.png",
  
    "Swinburne University of Technology.png",
    "Taylors College.png",
    "The University of Adelaide.png",
   
  
    "University of Sydney.png",
    "University of Western Australia.png",
   
    "University of Canberra.png",
    "University of South Australia.png",
  ];

  return (
    <div className="my-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Universities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
        {australiaLogos.map((logo, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <Image
              src={`/logos/australia/${(logo)}`}
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