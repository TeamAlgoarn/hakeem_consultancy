'use client';

import Image from 'next/image';

export default function IrelandUniversities() {
  const irelandLogos = ["University_College _Dublin.png"];

  return (
    <div className="my-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Universities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {irelandLogos.map((logo, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <Image
              src={`/logos/ireand/${encodeURIComponent(logo)}`} // ✅ Encode spaces
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