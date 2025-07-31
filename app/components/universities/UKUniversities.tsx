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
    <div className="my-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Universities</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
        {ukLogos.map((logo, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <Image
              src={`/logos/uk/${logo}`}
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
