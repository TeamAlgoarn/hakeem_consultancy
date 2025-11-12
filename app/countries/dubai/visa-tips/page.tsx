// 'use client';
// import Image from 'next/image';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function VisaTipsDenmark() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     branch: '',
//     country: '',
//     time: ''
//   });

//   const [errors, setErrors] = useState<any>({});
//   const [submitted, setSubmitted] = useState(false);

//   const validate = () => {
//     const newErrors: any = {};
//     let valid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//       valid = false;
//     }

//     if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = 'Enter valid 10-digit phone number';
//       valid = false;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Enter a valid email address';
//       valid = false;
//     }

//     if (!formData.branch) {
//       newErrors.branch = 'Please choose a branch';
//       valid = false;
//     }

//     if (!formData.country) {
//       newErrors.country = 'Please choose a country';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     if (validate()) {
//       setSubmitted(true);
//       setFormData({
//         name: '',
//         phone: '',
//         email: '',
//         branch: '',
//         country: '',
//         time: ''
//       });
//     }
//   };

//   return (
    





    
//     <div className="bg-white">
//       {/* Hero Section */}
//       <div 
//         className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
//         style={{ backgroundImage: "url('/dubai.jpg')" }}  /* was '/den-visa.jpg' */
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 bg-black bg-opacity-60 text-white p-6 sm:p-10 rounded-lg max-w-2xl w-full text-center"
//         >
//           <h1 className="text-3xl sm:text-4xl font-bold mb-3">
//             Dubai / UAE <span className="text-blue-300">Student Visa</span> {/* was Denmark */}
//           </h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="mb-4 text-base sm:text-lg"
//           >
//             Everything you need to know before applying
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Main Content */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Content */}
//           <div className="md:col-span-2 space-y-8">
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//               className="bg-white p-6 rounded-lg shadow-sm"
//             >
//               <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Dubai / UAE Student Visa Tips {/* was Denmark */}
//               </h2>
//               <p className="mb-4 text-gray-700">
//                 Dubai has become a top study destination with international campuses, strong industry links, and a safe, modern lifestyle. Here are practical visa tips and a checklist to help you prepare your application smoothly.
//               </p>

//               <div className="mt-6">
//                 <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Key Requirements:
//                 </h3>
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {[
//                     "Offer/Admission letter from a UAE university",
//                     "Passport valid for at least 6 months",
//                     "Recent passport-sized photos (as per UAE specs)",
//                     "Proof of funds / financial support (per university/immigration)",
//                     "Medical screening (post-arrival) & Emirates ID biometrics",
//                     "Health insurance (university or approved provider)",
//                     "Attested academic transcripts & certificates",
//                     "Accommodation details (on/off campus)",
//                     "Completed visa/residence permit application",
//                     "Applicable visa/entry permit fees receipts"
//                   ].map((item, index) => (
//                     <motion.li 
//                       key={index}
//                       whileHover={{ scale: 1.02 }}
//                       className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all"
//                     >
//                       <span className="font-medium text-gray-800">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>

//             {/* Visa Types Section */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               className="bg-white p-6 rounded-lg shadow-sm"
//             >
//               <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Types of Student Visas in UAE {/* was Denmark */}
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {[
//                   { title: "Higher Education Residence Visa", desc: "For undergraduate/graduate programs at licensed UAE institutions" },
//                   { title: "Exchange/Short-Term Study Entry Permit", desc: "For semester exchanges or short academic programs" },
//                   { title: "Vocational/Training Visa", desc: "For diploma, certification, or professional training" },
//                   { title: "PhD/Research Visa", desc: "For doctoral or research-focused residency" }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ y: -5 }}
//                     className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
//                   >
//                     <h3 className="font-bold text-blue-600">{item.title}</h3>
//                     <p className="text-sm mt-1 text-gray-700">{item.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Google Maps Section */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="bg-white p-6 rounded-lg shadow-sm"
//             >
//               <div className="overflow-hidden rounded-lg shadow-md">
//                 <iframe 
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577342.393040691!2d54.842956!3d25.076381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c8b0b1d3b45%3A0x4f3d1a3d9b1f4f9d!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1620000000001!5m2!1sen!2sin" 
//                   width="100%" 
//                   height="400" 
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   className="rounded-lg"
//                 ></iframe>
//               </div>
//               <p className="mt-4 text-gray-600">
//                 Dubai is the UAE’s most international city, home to numerous global university branch campuses and a vibrant student community.
//               </p>
//             </motion.div>
//           </div>

//           {/* Form */}
//           <div className="max-w-md mx-auto relative z-10">
//             <div className="bg-gradient-to-b from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
//               <h2 className="text-3xl font-bold mb-2">
//                 Free Visa Consultation
//               </h2>
//               <p className="text-blue-100 mb-6">Fill out the form below and our Dubai/UAE experts will contact you shortly</p> {/* was Denmark */}
              
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <input 
//                     type="text" 
//                     name="name" 
//                     placeholder="Your Full Name" 
//                     value={formData.name} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
//                   />
//                   {errors.name && <p className="mt-1 text-sm text-yellow-200">{errors.name}</p>}
//                 </div>

//                 <div>
//                   <input 
//                     type="text" 
//                     name="phone" 
//                     placeholder="Your Mobile Number" 
//                     value={formData.phone} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
//                   />
//                   {errors.phone && <p className="mt-1 text-sm text-yellow-200">{errors.phone}</p>}
//                 </div>

//                 <div>
//                   <input 
//                     type="text" 
//                     name="email" 
//                     placeholder="Your Email" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
//                   />
//                   {errors.email && <p className="mt-1 text-sm text-yellow-200">{errors.email}</p>}
//                 </div>

//                 <div>
//                   <select 
//                     name="branch" 
//                     value={formData.branch} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
//                   >
//                     <option value="">-- Select Branch --</option>
//                     <option value="Hyderabad">Hyderabad</option>
//                   </select>
//                   {errors.branch && <p className="mt-1 text-sm text-yellow-200">{errors.branch}</p>}
//                 </div>

//                 <div>
//                   <select 
//                     name="country" 
//                     value={formData.country} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
//                   >
//                     <option value="">-- Select Country --</option>
//                     <option value="UAE">UAE</option> {/* added UAE */}
//                     <option value="Germany">Germany</option>
//                     <option value="Sweden">Sweden</option>
//                     <option value="Norway">Norway</option>
//                     <option value="UK">UK</option>
//                     <option value="Canada">Canada</option>
//                   </select>
//                   {errors.country && <p className="mt-1 text-sm text-yellow-200">{errors.country}</p>}
//                 </div>

//                 <div>
//                   <input 
//                     type="text" 
//                     name="time" 
//                     placeholder="Preferred Time (e.g., 10 AM - 12 PM)" 
//                     value={formData.time} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
//                   />
//                   {errors.time && <p className="mt-1 text-sm text-yellow-200">{errors.time}</p>}
//                 </div>

//                 <button 
//                   type="submit" 
//                   className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] shadow-md"
//                 >
//                   Get Visa Consultation
//                 </button>
//                 {submitted && (
//                   <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
//                     Form submitted successfully! Our team will contact you shortly.
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final Info Section */}
//       <section className="bg-gray-50 py-12 px-4 sm:px-6">
//         <div className="max-w-6xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
//           >
//             {/* Left Image */}
//             <div className="flex justify-center">
//               <motion.div 
//                 whileHover={{ scale: 1.02 }}
//                 className="overflow-hidden rounded-xl shadow-lg"
//               >
//                   <Image
//                                   src="/university.jpg"
//                                   alt="Study Abroad"
//                                   width={600}
//                                   height={400}
//                                   className="w-full max-w-xs sm:max-w-md transition-transform duration-500 hover:scale-105"
//                                 />
//               </motion.div>
//             </div>

//             {/* Right Content */}
//             <div>
//               <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">How We Help You?</h2>
//               <p className="text-gray-700 mb-6">
//                 We offer end-to-end expert guidance and services to help you achieve your study abroad goals in Dubai/UAE with ease. {/* was Denmark */}
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {[
//                   "University Selection",
//                   "Visa Documentation",
//                   "Financial Proof Guidance",
//                   "Interview Preparation",
//                   "Language Test Preparation",
//                   "Pre-departure Orientation"
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
//                     className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
//                   >
//                     <div className="flex items-center">
//                       <div className="bg-blue-100 p-2 rounded-full mr-3">
//                         <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                         </svg>
//                       </div>
//                       <span className="font-medium text-gray-800">{item}</span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="mt-8"
//               >
//                 <Link href="#form">
//                   <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
//                     Get Free Dubai Consultation {/* was Denmark */}
//                   </button>
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }



'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// ⬇️ NEW: Icons needed for the navbar you shared
// import { FaInstagram, FaLinkedinIn, FaFacebookF, FaPhone, FaEnvelope } from 'react-icons/fa';
import {  FaPhone} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';
import AppNavbar from '../../../components/AppNavbar';
/* ⬇️ NEW: Google Rating chip from your navbar block */
const GoogleRatingComponent: React.FC = () => {
  const handleGoogleClick = () => {
    window.open('https://share.google/sgZIfNjCMD2PZyENv', '_blank');
  };

  return (
    <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-gray-800 text-sm">Rated 4.9</span>
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <button
            onClick={handleGoogleClick}
            className="text-gray-600 font-medium hover:text-blue-600 transition-colors cursor-pointer bg-transparent border-none outline-none text-sm"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default function VisaTipsDenmark() {
  // ⬇️ NEW: state for navbar mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

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
      <AppNavbar/>
      {/* ⬇️ NEW: same top contact strip you had */}
      

      
      <div className="bg-white">
        {/* Hero Section */}
        <div
          className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
          style={{ backgroundImage: "url('/dubai.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 bg-black bg-opacity-60 text-white p-6 sm:p-10 rounded-lg max-w-2xl w-full text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Dubai / UAE <span className="text-blue-300">Student Visa</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4 text-base sm:text-lg"
            >
              Everything you need to know before applying
            </motion.p>
          </motion.div>
        </div>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Content */}
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dubai / UAE Student Visa Tips
                </h2>
                <p className="mb-4 text-gray-700">
                  Dubai has become a top study destination with international campuses, strong industry links, and a safe, modern lifestyle. Here are practical visa tips and a checklist to help you prepare your application smoothly.
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Key Requirements:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Offer/Admission letter from a UAE university',
                      'Passport valid for at least 6 months',
                      'Recent passport-sized photos (as per UAE specs)',
                      'Proof of funds / financial support (per university/immigration)',
                      'Medical screening (post-arrival) & Emirates ID biometrics',
                      'Health insurance (university or approved provider)',
                      'Attested academic transcripts & certificates',
                      'Accommodation details (on/off campus)',
                      'Completed visa/residence permit application',
                      'Applicable visa/entry permit fees receipts',
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                      >
                        <span className="font-medium text-gray-800">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Visa Types Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Types of Student Visas in UAE
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Higher Education Residence Visa', desc: 'For undergraduate/graduate programs at licensed UAE institutions' },
                    { title: 'Exchange/Short-Term Study Entry Permit', desc: 'For semester exchanges or short academic programs' },
                    { title: 'Vocational/Training Visa', desc: 'For diploma, certification, or professional training' },
                    { title: 'PhD/Research Visa', desc: 'For doctoral or research-focused residency' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                      <h3 className="font-bold text-blue-600">{item.title}</h3>
                      <p className="text-sm mt-1 text-gray-700">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Google Maps Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="overflow-hidden rounded-lg shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577342.393040691!2d54.842956!3d25.076381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c8b0b1d3b45%3A0x4f3d1a3d9b1f4f9d!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1620000000001!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="mt-4 text-gray-600">
                  Dubai is the UAE’s most international city, home to numerous global university branch campuses and a vibrant student community.
                </p>
              </motion.div>
            </div>

            {/* Form */}
            <div className="max-w-md mx-auto relative z-10">
              <div className="bg-gradient-to-b from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-2">Free Visa Consultation</h2>
                <p className="text-blue-100 mb-6">
                  Fill out the form below and our Dubai/UAE experts will contact you shortly
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
                    />
                    {errors.name && <p className="mt-1 text-sm text-yellow-200">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-yellow-200">{errors.phone}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
                    />
                    {errors.email && <p className="mt-1 text-sm text-yellow-200">{errors.email}</p>}
                  </div>

                  <div>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
                    >
                      <option value="">-- Select Branch --</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </select>
                    {errors.branch && <p className="mt-1 text-sm text-yellow-200">{errors.branch}</p>}
                  </div>

                  <div>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
                    >
                      <option value="">-- Select Country --</option>
                      <option value="UAE">UAE</option>
                      <option value="Germany">Germany</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Norway">Norway</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                    </select>
                    {errors.country && <p className="mt-1 text-sm text-yellow-200">{errors.country}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="time"
                      placeholder="Preferred Time (e.g., 10 AM - 12 PM)"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800"
                    />
                    {errors.time && <p className="mt-1 text-sm text-yellow-200">{errors.time}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] shadow-md"
                  >
                    Get Visa Consultation
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
        </section>

        {/* Final Info Section */}
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
                    src="/university.jpg"
                    alt="Study Abroad"
                    width={600}
                    height={400}
                    className="w-full max-w-xs sm:max-w-md transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  How We Help You?
                </h2>
                <p className="text-gray-700 mb-6">
                  We offer end-to-end expert guidance and services to help you achieve your study abroad goals in Dubai/UAE with ease.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'University Selection',
                    'Visa Documentation',
                    'Financial Proof Guidance',
                    'Interview Preparation',
                    'Language Test Preparation',
                    'Pre-departure Orientation',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-800">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8"
                >
                  <Link href="#form">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
                      Get Free Dubai Consultation
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Optional: You can add your footer here if you want it on this page too */}
    </div>
  );
}
