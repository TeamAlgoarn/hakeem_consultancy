import React from "react";

const MBBSSection = () => {
  const countries = [
    {
      name: "Hungary",
      image: "/reviews/hungary.jpg",
      description: "Study MBBS in Hungary with affordable fees and top-tier universities recognized globally.",
    },
    {
      name: "Greece",
      image: "/reviews/greece.jpg",
      description: "Quality education and cultural richness make Greece a great destination for MBBS aspirants.",
    },
    {
      name: "Dubai",
      image: "/reviews/dubai.jpg",
      description: "Modern infrastructure and globally accepted MBBS degrees await you in Dubai.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
        We Offer MBBS Education In
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {countries.map((country) => (
          <div
            key={country.name}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
          >
            <img
              src={country.image}
              alt={country.name}
              className="h-32 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{country.name}</h3>
            <p className="text-sm text-gray-600">{country.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MBBSSection;
