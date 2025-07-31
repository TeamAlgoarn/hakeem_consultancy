'use client';
import Image from 'next/image';

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
];

export default function USAUniversities() {
  return (
    <section className="my-16 text-center">
      <h2 className="text-2xl font-bold mb-6">Universities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-6">
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
    </section>
  );
}
