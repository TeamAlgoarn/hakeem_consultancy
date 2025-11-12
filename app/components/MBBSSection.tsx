import React from "react";

const MBBSSection = () => {
  const countries = [
    {
      name: "Hungary",
      image: "/reviews/hungary.jpg",
      description:  "Study MBBS in Hungary with affordable fees and top-tier universities recognized globally.",
    },
    {
      name: "Greece",
      image: "/reviews/greece.jpg",
      description:  "Quality education and cultural richness make Greece a great destination for MBBS aspirants.",
    },
    {
      name: "Dubai",
      image: "/reviews/dubai.jpg",
      description:  "Modern infrastructure and globally accepted MBBS degrees await you in Dubai.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
          We Offer MBBS Education In
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {countries.map((country) => (
          <div
            key={country.name}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{country.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{country.description}</p>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MBBSSection;