// // 'use client';

// // import Image from 'next/image';

// // export default function USAPage() {
// //   return (
// //     <div>
// //       {/* Hero Section */}
// //       <div
// //         className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-start"
// //         style={{ backgroundImage: "url('/usa.jpg')", height: '800px' }}
// //       >
// //         <div className="p-10 text-white max-w-xl ml-10 rounded" style={{ marginInline: '500px', color: 'black' }}>
// //           <h1 className="text-4xl font-bold mb-3">Study abroad in <span className="text-black">United States</span></h1>
// //           <p className="mb-4 text-lg">
// //             Here's a comprehensive guide for all students who want to study abroad.
// //           </p>
// //           <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold">
// //             Book Free Consultation
// //           </button>
// //         </div>
// //       </div>

// //       {/* Content + Form Section */}
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
// //         {/* Left Content */}
// //         <div>
// //           <h2 className="text-2xl font-bold mb-4">Why Study in USA</h2>
// //           <p className="mb-4">
// //             The United States of America (USA) is one of the top study destinations with the world’s largest number of international students. The USA is known for its majestic mountains, beautiful beaches, mouth-watering fast food, and most reputed universities and colleges offering higher education in the USA.
// //           </p>
// //           <p className="mb-4">
// //             Every year hundreds of thousands of international students worldwide, including India, flock to study abroad in America.
// //           </p>
// //           <p className="mb-4">
// //             Our study abroad consultants help students in India to find the right university to match their academic goals.
// //           </p>
// //           <p className="mb-4">
// //             There are many benefits of studying in the USA, right from excellent academic education to securing the best-paying job for yourself.
// //           </p>
// //           <p className="mb-4">
// //             Here are some reasons why studying in the USA is so prevalent in the world:
// //           </p>
// //           <ul className="list-disc pl-5 mb-6">
// //             <li>Academic excellence with world-class learning institutions and universities</li>
// //             <li>Premier destination for international students</li>
// //             <li>Pioneers in cutting-edge technology</li>
// //             <li>Flexible education system</li>
// //             <li>Opportunities for Graduate, Teaching, and Research Assistantships</li>
// //             <li>Availability of Fellowship/Assistantship and Scholarships</li>
// //             <li>Global education system</li>
// //             <li>Prospects of internships & career enhancement</li>
// //           </ul>

// //           <h2 className="text-xl font-semibold mt-8 mb-2">Overseas Education Consultants to Study in the USA</h2>
// //           <p className="mb-4">
// //             Every year hundreds of thousands of international students worldwide, including India, flock to study abroad in the United States of America.
// //           </p>
// //           <p className="mb-4">
// //             At Maven Consulting Services, Indian students get assistance with the admission process when they are willing to study abroad in the USA.
// //           </p>
// //           <p className="mb-4">
// //             Our Overseas Education Consultant in Bangalore guides students to find the right university and after selection ensures that they meet the visa requirements to match their academic goals.
// //           </p>
// //         </div>

// //         {/* Right Form */}
// //         <div className="bg-red-600 text-white p-6 rounded shadow" style={{ width: "500px", marginBottom: "200px", marginTop: "77px" }}>
// //           <h3 className="text-xl font-semibold mb-4">
// //             Book Free Consultation to Study in USA
// //           </h3>
// //           <form className="space-y-4">
// //             <input
// //               type="text"
// //               placeholder="Your Full Name"
// //               className="w-full px-4 py-2 rounded text-black"
// //               required
// //             />
// //             <input
// //               type="text"
// //               placeholder="Your Mobile No."
// //               className="w-full px-4 py-2 rounded text-black"
// //               required
// //             />
// //             <input
// //               type="email"
// //               placeholder="Your Email"
// //               className="w-full px-4 py-2 rounded text-black"
// //               required
// //             />
// //             <select className="w-full px-4 py-2 rounded text-black" required>
// //               <option value="">--Please choose a branch--</option>
// //               <option>Delhi</option>
// //               <option>Bangalore</option>
// //               <option>Hyderabad</option>
// //               <option>Chennai</option>
// //               <option>Goa</option>
// //               <option>Other City</option>
// //             </select>
// //             <select className="w-full px-4 py-2 rounded text-black" required>
// //               <option value="">--Please choose a country--</option>
// //               <option>Australia</option>
// //               <option>Canada</option>
// //               <option>Germany</option>
// //               <option>UK</option>
// //               <option>USA</option>
// //               <option>Ireland</option>
// //             </select>
// //             <input
// //               type="text"
// //               placeholder="Preferred Time"
// //               className="w-full px-4 py-2 rounded text-black"
// //             />
// //             <button
// //               type="submit"
// //               className="bg-black text-white font-semibold w-full py-2 rounded hover:bg-gray-800"
// //             >
// //               Request Free Consultation
// //             </button>
// //           </form>
// //         </div>
// //       </div>

// //       {/* How We Help Section */}
// //       <section className="bg-gray-100 py-12 px-6" style={{ marginTop: '-78px' }}>
// //         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
// //           {/* Left Image */}
// //           <div className="flex justify-center">
// //             <img
// //               src="/pics4.jpg"
// //               alt="Study Abroad"
// //               className="w-full max-w-md"
// //             />
// //           </div>

// //           {/* Right Content */}
// //           <div>
// //             <h2 className="text-2xl font-bold mb-4">How We Help You?</h2>
// //             <p className="text-gray-700 mb-4">
// //               We offer end-to-end expert guidance and services to help you achieve your study abroad goals with ease.
// //             </p>
// //             <ul className="list-disc pl-5 text-gray-700 space-y-2">
// //               <li>Training for Standardized Global tests</li>
// //               <li>Personalized Counseling Sessions</li>
// //               <li>Guidance on Selection of the best-fit University</li>
// //               <li>Application Preparation & Financial Aid Guidance</li>
// //               <li>Visa Counseling & Intensive Interview Training</li>
// //               <li>Pre-departure Preparation and Orientation</li>
// //             </ul>

// //             <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
// //               Book Free Consultation
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// 'use client';
// import USAUniversities from '../../components/universities/USAUniversities';
// import CounsellingForm from '@/app/components/CounsellingForm';
// import Image from 'next/image';
// import Link from 'next/link';
// export default function USAPage() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: "url('/usa.jpg')" }}
//       >
//         <div className="p-6 text-white text-center max-w-2xl mx-4bg-opacity-70 rounded">
//           <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
//             Study abroad in <span className="text-red-600">United States</span>
//           </h1>
//           <p className="mb-4 text-lg text-white">
//             Here's a comprehensive guide for all students who want to study abroad.
//           </p>
          
//         </div>
//       </div>

//       {/* Content + Form Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
//         {/* Left Content */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Why Study in USA</h2>
//           <p className="mb-4">
//             The United States of America (USA) is one of the top study destinations with the world’s largest number of international students. The USA is known for its majestic mountains, beautiful beaches, mouth-watering fast food, and most reputed universities and colleges offering higher education in the USA.
//           </p>
//           <p className="mb-4">
//             Every year hundreds of thousands of international students worldwide, including India, flock to study abroad in America.
//           </p>
//           <p className="mb-4">
//             Our study abroad consultants help students in India to find the right university to match their academic goals.
//           </p>
//           <p className="mb-4">
//             There are many benefits of studying in the USA, right from excellent academic education to securing the best-paying job for yourself.
//           </p>
//           <p className="mb-4">
//             Here are some reasons why studying in the USA is so prevalent in the world:
//           </p>
//           <ul className="list-disc pl-5 mb-6 space-y-2">
            // <li>Academic excellence with world-class learning institutions and universities</li>
            // <li>Premier destination for international students</li>
            // <li>Pioneers in cutting-edge technology</li>
            // <li>Flexible education system</li>
            // <li>Opportunities for Graduate, Teaching, and Research Assistantships</li>
            // <li>Availability of Fellowship/Assistantship and Scholarships</li>
            // <li>Global education system</li>
            // <li>Prospects of internships & career enhancement</li>
//           </ul>
       


//           {/* <h2 className="text-xl font-semibold mt-8 mb-2">Overseas Education Consultants to Study in the USA</h2>
//           <p className="mb-4">
//             Every year hundreds of thousands of international students worldwide, including India, flock to study abroad in the United States of America.
//           </p>
//           <p className="mb-4">
//             At Maven Consulting Services, Indian students get assistance with the admission process when they are willing to study abroad in the USA.
//           </p>
//           <p className="mb-4">
//             Our Overseas Education Consultant in Bangalore guides students to find the right university and after selection ensures that they meet the visa requirements to match their academic goals.
//           </p> */}
//         </div>

//         {/* Right Form */}
//        {/* <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full" style={{marginBottom:'400px'}}>
//           <h3 className="text-xl font-semibold mb-4">
//             Book Free Consultation to Study in USA
//           </h3>
//           <form className="space-y-4">
//             <input type="text" placeholder="Your Full Name" className="w-full px-4 py-2 rounded text-black" required />
//             <input type="text" placeholder="Your Mobile No." className="w-full px-4 py-2 rounded text-black" required />
//             <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded text-black" required />
//             <select className="w-full px-4 py-2 rounded text-black" required>
//               <option value="">--Please choose a branch--</option>
             
//               <option>Hyderabad</option>
          
//             </select>
//             <select className="w-full px-4 py-2 rounded text-black" required>
//               <option value="">--Please choose a country--</option>
//               <option>Australia</option>
//               <option>Canada</option>
//               <option>Germany</option>
//               <option>UK</option>
//               <option>USA</option>
//               <option>Ireland</option>
//             </select>
//             <input type="text" placeholder="Preferred Time" className="w-full px-4 py-2 rounded text-black" />
//             <button type="submit" className="bg-black text-white font-semibold w-full py-2 rounded hover:bg-gray-800">
//               Request Free Consultation
//             </button>
//           </form>
//         </div> */}
//         <CounsellingForm/>
//       </div>
      

//       {/* How We Help Section */}
//       <section className="bg-gray-100 py-12 px-6" style={{marginTop:'-205px'}}>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Image */}
//           <div className="flex justify-center">
//             <img src="/pics4.jpg" alt="Study Abroad" className="w-full max-w-md" />
//           </div>

//           {/* Right Content */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">How We Help You?</h2>
            // <p className="text-gray-700 mb-4">
            //   We offer end-to-end expert guidance and services to help you achieve your study abroad goals with ease.
            // </p>
            // <ul className="list-disc pl-5 text-gray-700 space-y-2">
            //   <li>Training for Standardized Global tests</li>
            //   <li>Personalized Counseling Sessions</li>
            //   <li>Guidance on Selection of the best-fit University</li>
            //   <li>Application Preparation & Financial Aid Guidance</li>
            //   <li>Visa Counseling & Intensive Interview Training</li>
            //   <li>Pre-departure Preparation and Orientation</li>
//             </ul>
//             <Link href="/counselling">
//   <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold">
//     Book Free Consultation
//   </button>
// </Link>
//           </div>
//         </div>
//       </section>
//       {/* Universities Section */}
// <USAUniversities />

//     </div>
//   );
// }


'use client';
import USAUniversities from '../../components/universities/USAUniversities';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function USAPage() {
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
        style={{ backgroundImage: "url('/australia.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-black bg-opacity-60 text-white p-6 sm:p-10 rounded-lg max-w-2xl w-full text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Study abroad in <span className="text-blue-300">United States</span>
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
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">Why Study in United States?</h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">
                The United States of America (USA) is one of the top study destinations with the world’s largest number of international students. The USA is known for its majestic mountains, beautiful beaches, mouth-watering fast food, and most reputed universities and colleges offering higher education in the USA.
              </p>
              <p className="mb-4">
                Every year hundreds of thousands of international students worldwide, including India, flock to study abroad in America.
              </p>
              <p className="mb-4">
                Our study abroad consultants help students in India to find the right university to match their academic goals.
              </p>
              <p className="mb-4">
                There are many benefits of studying in the USA, right from excellent academic education to securing the best-paying job for yourself.
              </p>
              <p className="mb-4 font-bold italic">
                Here are some reasons why studying in the USA is so prevalent in the world:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                {[
                  "Academic excellence with world-class learning institutions and universities",
                  "Premier destination for international students",
                  "Pioneers in cutting-edge technology",
                  "Flexible education system",
                  "Opportunities for Graduate, Teaching, and Research Assistantships",
                  "Availability of Fellowship/Assistantship and Scholarships",
                  "Global education system",
                  "Prospects of internships & career enhancement"
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
                  src="/pics4.jpg"
                  alt="Study Abroad"
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
                We offer end-to-end expert guidance and services to help you achieve your study abroad goals with ease.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Training for Standardized Global tests",
                  "Personalized Counseling Sessions",
                  "Guidance on Selection of the best-fit University",
                  "Application Preparation & Financial Aid Guidance",
                  "Visa Counseling & Intensive Interview Training",
                  "Pre-departure Preparation and Orientation"
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

              {/* <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Link href="/counselling">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
                    Book Free Consultation
                  </button>
                </Link>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* USA Universities */}
      <USAUniversities />
    </div>
    </div>
  );
}