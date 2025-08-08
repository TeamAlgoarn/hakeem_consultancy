// 'use client';

// import Image from 'next/image';

// export default function CanadaPage() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-start"
//         style={{ backgroundImage: "url('/can.jpg')" }}
//       >
//         <div className=" p-10 text-white max-w-xl ml-10 rounded"  style={{ marginInline: '500px', color:'black' }}>
//           <h1 className="text-4xl font-bold mb-3">Study abroad in <span className="text-black">Canada</span></h1>
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
//           <h2 className="text-2xl font-bold mb-4">Why Study in Canada?</h2>
//           <p className="mb-4">
//             Canada is recognized as a land of ideas, known for its world-class education and technological prowess. Canada is the ideal destination drawing international students for excellent academics.
//           </p>
//           <p className="mb-4">
//             When you choose to study abroad in canada, you will study in universities that boast highly acclaimed international degrees.
//           </p>
//           <p className="mb-4">
//             Thousands of students travel to canada annually to seek education in some of the world’s best academies of higher learning.
//           </p>
//           <p className="mb-4">
//             Education in canada for Indian students has proven to be highly beneficial. Indian students who study in Canada join an international community of high achievers.
//           </p>
//           <p className="mb-4">
//             It is the most populous member state and the largest economy in the European Union. Despite world-class universities, there are several more benefits of studying in  as follow:
//           </p>Canada
//           <ul className="list-disc pl-5 mb-6">
//             <li>Globally recognized programs</li>
//             <li>Forefront in cutting edge technology</li>
//             <li>A world-class education at affordable costs</li>
//             <li>Free-tuition academics in most universities (very low fees at some)</li>
//             <li>Opportunities to live and explore</li>
//             <li>The powerhouse of Schengen countries</li>
//             <li>English-taught courses</li>
//             <li>Opportunity to explore Europe</li>
//             <li>Scholarship Opportunities:</li>
//           </ul>
//         </div>

//         {/* Right Form */}
//         <div className="bg-red-600 text-white p-6 rounded shadow" style={{width:"500px", marginBottom:"200px" ,marginTop:"77px"}}>
//           <h3 className="text-xl font-semibold mb-4">
//             Book Free Consultation to Study in canada
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
//               <option>Chennai </option>
//               <option>Goa</option>
//               <option>Other City</option>
              
//             </select>
//             <select className="w-full px-4 py-2 rounded text-black" required>
//               <option value="">--Please choose a country--</option>
//               <option>Australia</option>
//               <option>Canada</option>
//               <option>Germany</option>
//               <option>UK</option>
//               <option>Ireland</option>
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
//       <section className="bg-gray-100 py-12 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Image */}
//           <div className="flex justify-center">
//             <img
//               src="/flag-canada.jpg"
//               alt="Study Abroad"
//               className="w-full max-w-md"
//             />
//           </div>

//           {/* Right Content */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">How We Help You?</h2>
//             <p className="text-gray-700 mb-4">
//               We offer end-to-end expert guidance and services to help you achieve your study abroad goals with ease.
//             </p>
//             <ul className="list-disc pl-5 text-gray-700 space-y-2">
//               <li>Training for Standardized Global tests</li>
//               <li>Personalized Counseling Sessions</li>
//               <li>Guidance on Selection of the best-fit University</li>
//               <li>Application Preparation & Financial Aid Guidance</li>
//               <li>Visa Counseling & Intensive Interview Training</li>
//               <li>Pre-departure Preparation and Orientation</li>
//             </ul>

//             <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
//               Book Free Consultation
//             </button>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
'use client';
import CanadaUniversities from '../../components/universities/CanadaUniversities';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CanadaPage() {
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
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
        style={{ backgroundImage: "url('/can.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-black bg-opacity-60 text-white p-6 sm:p-10 rounded-lg max-w-2xl w-full text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Study abroad in <span className="text-blue-300">Canada</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-base sm:text-lg"
          >
            Here's a comprehensive guide for all students who want to study abroad.
          </motion.p>
        </motion.div>
      </div>

      {/* Content + Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">Why Study in Canada?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Canada is recognized as a land of ideas, known for its world-class education and technological prowess.
              </p>
              <p>
                When you choose to study abroad in Canada, you will study in universities that boast highly acclaimed international degrees.
              </p>
              <p>
                Thousands of students travel to Canada annually to seek education in some of the world's best academies of higher learning.
              </p>
              <p>
                Education in Canada for Indian students has proven to be highly beneficial, joining an international community of high achievers.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                {[
                  "Globally recognized programs",
                  "Forefront in cutting-edge technology",
                  "World-class education at affordable costs",
                  "Low to no tuition in some universities",
                  "Opportunities to live and explore",
                  "English-taught courses",
                  "Opportunity to explore North America",
                  "Scholarship opportunities"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Form */}
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Book Free Consultation
              </h2>
              <p className="text-gray-600 mb-6">Fill out the form below and our experts will contact you shortly</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Full Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder="Your Mobile Number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <input 
                    type="text" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <select 
                    name="branch" 
                    value={formData.branch} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700"
                  >
                    <option value="">-- Select Branch --</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                  {errors.branch && <p className="mt-1 text-sm text-red-600">{errors.branch}</p>}
                </div>

                <div>
                  <select 
                    name="country" 
                    value={formData.country} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700"
                  >
                    <option value="">-- Select Country --</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="UK">UK</option>
                    <option value="Germany">Germany</option>
                    <option value="USA">USA</option>
                    <option value="Ireland">Ireland</option>
                  </select>
                  {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                </div>

                <div>
                  <input 
                    type="text" 
                    name="time" 
                    placeholder="Preferred Time (e.g., 10 AM - 12 PM)" 
                    value={formData.time} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] shadow-md"
                >
                  Request Free Consultation
                </button>

                {submitted && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    Form submitted successfully! Our team will contact you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* How We Help Section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Left Image */}
            <div className="flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src="/flag-canada.jpg"
                  alt="Study in Canada"
                  width={600}
                  height={400}
                  className="w-full max-w-xs sm:max-w-md transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">How We Help You?</h2>
              <p className="text-gray-700 mb-6">
                We offer expert guidance and personalized services to help you study in Canada with confidence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Standardized test preparation",
                  "Personalized counseling",
                  "University & course selection",
                  "Application & financial aid guidance",
                  "Visa documentation and interview prep",
                  "Pre-departure orientation"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                    className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Canada Universities Section */}
      <CanadaUniversities />
    </div>
  );
}