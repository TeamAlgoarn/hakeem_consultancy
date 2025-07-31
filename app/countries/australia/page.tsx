// 'use client';

// import Image from 'next/image';

// export default function AustraliaPage() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-start"
//         style={{ backgroundImage: "url('/australia.jpg')" }}
//       >
//         <div className=" p-10 text-white max-w-xl ml-10 rounded"  style={{ marginInline: '500px' }}>
//           <h1 className="text-4xl font-bold mb-3">Study abroad in <span className="text-white">Australia</span></h1>
//           <p className="mb-4 text-lg">
//             Here's a comprehensive guide for all  students who want to study abroad.
//           </p>
//           <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold">
//             Book Free Consultation
//           </button>
//         </div>
//       </div>

//       {/* Content + Form Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
//         {/* Left Content */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Why Study in Australia ?</h2>
//           <p className="mb-4">
//             Australia is consistently voted one of the best places to live, because of its vibrant and
//             melting pot of cultures that welcomes its visitors wholeheartedly.
//           </p>
//           <p className="mb-4">
//             Australia is the third most popular destination for overseas education in the world,
//             known for its safe, inclusive, and supportive study environment.
//           </p>
          
//           <p className="mb-4">
//             With over 1000 academic institutions, Australia's education system offers excellent
//             value, world-class research opportunities, and post-study work rights.
//           </p>
//           <p className="mb-4">
//             It also offers work opportunities during studies, affordable tuition, multicultural
//             campuses, and a student-friendly visa process.
//           </p>
//           <ul className="list-disc pl-5 mb-6">
//             <li>Globally ranked universities</li>
//             <li>Excellent value for money</li>
//             <li>Supportive visa policies</li>
//             <li>PR prospects and quality of life</li>
//             <li>Globally ranked (G08) group of 8, elite institutions</li>
//             <li>Affordability</li>
//             <li>Work while you study</li>
//             <li>Extensive student support services</li>
//             <li>Quality assurance</li>
//             <li>Diverse society</li>
//             <li>Standard of Living</li>
//             <li>Stress-free student visa process</li>
//             <li>No GRE/GMAT</li>
//           </ul>
//         </div>

//         {/* Right Form */}
//         <div className="bg-red-600 text-white p-6 rounded shadow" style={{width:"500px", marginBottom:"200px"}}>
//           <h3 className="text-xl font-semibold mb-4">
//             Book Free Consultation to Study in Australia
//           </h3>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Full Name"
//               className="w-full px-4 py-2 rounded text-black"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Your Mobile No."
//               className="w-full px-4 py-2 rounded text-black"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-2 rounded text-black"
//               required
//             />
//             <select className="w-full px-4 py-2 rounded text-black" required>
//               <option value="">--Please choose a branch--</option>
//               <option>Delhi</option>
//               <option>Bangalore</option>
//               <option>Hyderabad</option>
//             </select>
//             <select className="w-full px-4 py-2 rounded text-black" required>
//               <option value="">--Please choose a country--</option>
//               <option>Australia</option>
//               <option>Canada</option>
//               <option>UK</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Preferred Time"
//               className="w-full px-4 py-2 rounded text-black"
//             />
//             <button
//               type="submit"
//               className="bg-black text-white font-semibold w-full py-2 rounded hover:bg-gray-800"
//             >
//               Request Free Consultation
//             </button>
//           </form>
//         </div>
//       </div>
//       {/* How We Help Section */}
// <section className="bg-gray-100 py-12 px-6">
//   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//     {/* Left Image */}
//     <div className="flex justify-center">
//       <img
//         src="/abroad.jpg" // <-- make sure this image exists in public/images/australia/
//         alt="Study Abroad"
//         className="w-full max-w-md"
//       />
//     </div>

//     {/* Right Content */}
//     <div>
//       <h2 className="text-2xl font-bold mb-4">How We Help You?</h2>
//       <p className="text-gray-700 mb-4">
//         We offer end-to-end expert guidance and services to help you achieve your study abroad goals with ease.
//       </p>
//       <ul className="list-disc pl-5 text-gray-700 space-y-2">
//         <li>Training for Standardized Global tests</li>
//         <li>Personalized Counseling Sessions</li>
//         <li>Guidance on Selection of the best-fit University</li>
//         <li>Application Preparation & Financial Aid Guidance</li>
//         <li>Visa Counseling & Intensive Interview Training</li>
//         <li>Pre-departure Preparation and Orientation</li>
//       </ul>

//       <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
//         Book Free Consultation
//       </button>
//     </div>
//   </div>
// </section>

//     </div>
//   );
// }
'use client';
import AustraliaUniversities from "../../components/universities/AustraliaUniversities";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AustraliaPage() {
  const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        branch: '',
        country: '',
        time: ''
      });
    
      const [errors, setErrors] = useState<any>({});
      const [submitted, setSubmitted] = useState(false);
    
      const validate = () => {
        const newErrors: any = {};
        let valid = true;
    
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
          valid = false;
        }
    
        if (!/^\d{10}$/.test(formData.phone)) {
          newErrors.phone = 'Enter valid 10-digit phone number';
          valid = false;
        }
    
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Enter a valid email address';
          valid = false;
        }
    
        if (!formData.branch) {
          newErrors.branch = 'Please choose a branch';
          valid = false;
        }
    
        if (!formData.country) {
          newErrors.country = 'Please choose a country';
          valid = false;
        }
    
        setErrors(newErrors);
        return valid;
      };
    
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validate()) {
          setSubmitted(true);
          setFormData({
            name: '',
            phone: '',
            email: '',
            branch: '',
            country: '',
            time: ''
          });
        }
      };
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
        style={{ backgroundImage: "url('/australia.jpg')" }}
      >
        <div className=" bg-opacity-60 text-white p-6 sm:p-10 rounded-lg max-w-2xl w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" >
            Study abroad in <span className="text-red-500">Australia</span>
          </h1>
          <p className="mb-4 text-base sm:text-lg" style={{color:'white'}}>
            Here's a comprehensive guide for all students who want to study abroad.
          </p>
          {/* <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold">
            Book Free Consultation
          </button> */}
        </div>
      </div>

      {/* Content + Form Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 py-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Study in Australia?</h2>
          <p className="mb-4">
            Australia is consistently voted one of the best places to live, with a vibrant mix of cultures and a welcoming atmosphere.
          </p>
          <p className="mb-4">
            It’s the third most popular destination for overseas education, known for its safety, inclusivity, and support for international students.
          </p>
          <p className="mb-4">
            With over 1,000 academic institutions, Australia's education system offers value, top-tier research, and post-study work rights.
          </p>
          <p className="mb-4">
            Students enjoy affordable tuition, multicultural campuses, and work opportunities.
          </p>
          <ul className="list-disc pl-5 mb-6 text-sm space-y-1">
            <li>Globally ranked universities</li>
            <li>Excellent value for money</li>
            <li>Supportive visa policies</li>
            <li>PR prospects and quality of life</li>
            <li>Elite Group of 8 universities (Go8)</li>
            <li>Affordability</li>
            <li>Work while you study</li>
            <li>Extensive student support services</li>
            <li>Assured quality education</li>
            <li>Diverse, inclusive society</li>
            <li>High standard of living</li>
            <li>Simplified visa process</li>
            <li>No GRE/GMAT needed</li>
          </ul>
        </div>

        {/* Right Form
        <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full" style={{marginBottom:'150px'}}>
          <h3 className="text-xl font-semibold mb-4">
            Book Free Consultation to Study in Australia
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 rounded text-black"
              required
            />
            <input
              type="text"
              placeholder="Your Mobile No."
              className="w-full px-4 py-2 rounded text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded text-black"
              required
            />
            <select className="w-full px-4 py-2 rounded text-black" required>
              <option value="">--Please choose a branch--</option>
            
              <option>Hyderabad</option>
            </select>
            <select className="w-full px-4 py-2 rounded text-black" required>
              <option value="">--Please choose a country--</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>UK</option>SA
              <option>USA</option>
              <option>Germany</option>
              <option>Ireland</option>
            </select>
            <input
              type="text"
              placeholder="Preferred Time"
              className="w-full px-4 py-2 rounded text-black"
            />
            <button
              type="submit"
              className="bg-black text-white font-semibold w-full py-2 rounded hover:bg-gray-800"
            >
              Request Free Consultation
            </button>
          </form>
        </div>
      </div> */}
      <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full" style={{ marginBottom: '120px' }}>
      <h3 className="text-xl font-semibold mb-4">
        Book Free Consultation to Study in Austria
      </h3>

      {submitted && (
        <p className="bg-green-500 text-white text-center py-2 rounded mb-4">
          ✅ Thank you! Form submitted.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        />
        {errors.name && <p className="text-yellow-200 text-sm">{errors.name}</p>}

        <input
          type="text"
          name="phone"
          placeholder="Your Mobile No."
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        />
        {errors.phone && <p className="text-yellow-200 text-sm">{errors.phone}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        />
        {errors.email && <p className="text-yellow-200 text-sm">{errors.email}</p>}

        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        >
          <option value="">--Please choose a branch--</option>
          <option>Hyderabad</option>
        </select>
        {errors.branch && <p className="text-yellow-200 text-sm">{errors.branch}</p>}

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        >
          <option value="">--Please choose a country--</option>
          <option>Australia</option>
          <option>Canada</option>
          <option>Germany</option>
          <option>USA</option>
          <option>UK</option>
          <option>Ireland</option>
        </select>
        {errors.country && <p className="text-yellow-200 text-sm">{errors.country}</p>}

        <input
          type="text"
          name="time"
          placeholder="Preferred Time"
          value={formData.time}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        />

        <button
          type="submit"
          className="bg-black text-white font-semibold w-full py-2 rounded hover:bg-gray-800"
        >
          Request Free Consultation
        </button>
      </form>
    </div>
      </div>

      {/* How We Help Section */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/abroad.jpg"
              alt="Study Abroad"
              className="w-full max-w-xs sm:max-w-md rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl font-bold mb-4">How We Help You?</h2>
            <p className="text-gray-700 mb-4">
              We offer expert guidance and personalized services to help you study abroad with confidence.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
              <li>Standardized test preparation</li>
              <li>Personalized counseling</li>
              <li>University & course selection</li>
              <li>Application & financial aid guidance</li>
              <li>Visa documentation and interview prep</li>
              <li>Pre-departure orientation</li>
            </ul>

            {/* <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
              Book Free Consultation
            </button> */}
            <Link href="/counselling">
  <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
    Book Free Consultation
  </button>
</Link>
          </div>
        </div>
      </section>
      {/* Australia Universities */}
<AustraliaUniversities />
    </div>
  );
}
