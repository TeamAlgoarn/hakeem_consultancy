// // //  export default function CounsellingForm() {
// // //     return (
// // //       <div className="min-h-screen bg-[#f4faff] px-4 sm:px-10 py-12">
// // //         <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
// // //           <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
// // //             Book Your Free Counselling
// // //           </h2>
  
// // //           <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //             <input type="text" placeholder="First Name" className="input" />
// // //             <input type="text" placeholder="Last Name" className="input" />
// // //             <input type="email" placeholder="E-Mail" className="input" />
// // //             <div className="flex gap-2">
// // //               <input type="text" placeholder="Enter 10 digit Phone number" className="input w-full" />
// // //               <button type="button" className="bg-blue-600 text-white px-4 rounded">Send OTP</button>
// // //             </div>
// // //             {/* <select className="input"><option>Assistance With</option></select> */}
// // //             <select className="input"><option>Select Country</option>
// // //             <option>Germany</option>
// // //             <option>USA</option>
// // //             <option>UK</option>
// // //             <option>AUSTRALIA</option>
// // //             <option>IRELAND</option>
// // //             <option>Other Country</option>
// // //             </select>
// // //             <input type="text" placeholder="Desired Major" className="input" />
// // //             <input type="text" placeholder="Intake?" className="input" />
// // //             <input type="text" placeholder="Bachelors College" className="input" />
// // //             <input type="text" placeholder="Select your bachelors major" className="input" />
// // //             <input type="text" placeholder="Percentage" className="input" />
// // //             <input type="text" placeholder="Backlogs" className="input" />
// // //             <input type="text" placeholder="Passout Year" className="input" />
// // //             <input type="text" placeholder="Work Experience (If Any)" className="input" />
// // //             <input type="text" placeholder="IELTS | TOEFL | PTE | DET" className="input" />
// // //             <input type="text" placeholder="GRE" className="input" />
// // //             <input type="date" placeholder="Select Date" className="input" />
// // //             {/* <input type="time" placeholder="Select Time" className="input" /> */}
// // //             <textarea placeholder="Past Admission/Visa History" className="input col-span-full h-28 resize-none"></textarea>
// // //             <div className="col-span-full">
// // //               <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded">
// // //                 Book Your Free Counselling
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // 'use client';

// // import React, { useState } from 'react';
// // import { useForm } from 'react-hook-form';

// // type FormValues = {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// //   phone: string;
// //   country: string;
// //   major: string;
// //   intake: string;
// //   bachelorsCollege: string;
// //   bachelorsMajor: string;
// //   percentage: string;
// //   backlogs: string;
// //   passoutYear: string;
// //   experience: string;
// //   testScores: string;
// //   gre: string;
// //   date: string;
// //   time: string;
// //   history: string;
// // };

// // export default function CounsellingForm() {
// //   const {
// //     register,
// //     handleSubmit,
// //     watch,
// //     formState: { errors },
// //   } = useForm<FormValues>();

// //   const [otpSent, setOtpSent] = useState(false);

// //   const onSubmit = (data: FormValues) => {
// //     console.log('Form Data:', data);
// //     alert('Form Submitted!');
// //   };

// //   const handleSendOtp = () => {
// //     const phone = watch('phone');
// //     if (/^\d{10}$/.test(phone)) {
// //       alert(`OTP sent to ${phone}`);
// //       setOtpSent(true);
// //     } else {
// //       alert('Please enter a valid 10-digit phone number');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
// //       <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
// //         <h2 className="text-2xl font-bold text-center mb-6">
// //           Book Your Free Counselling
// //         </h2>
// //         <form
// //           onSubmit={handleSubmit(onSubmit)}
// //           className="grid grid-cols-1 md:grid-cols-2 gap-4"
// //         >
// //           <div>
// //             <input
// //               {...register('firstName', { required: 'First name is required' })}
// //               placeholder="First Name"
// //               className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //             <p className="text-red-600 text-sm mt-1">{errors.firstName?.message}</p>
// //           </div>

// //           <div>
// //             <input
// //               {...register('lastName', { required: 'Last name is required' })}
// //               placeholder="Last Name"
// //               className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //             <p className="text-red-600 text-sm mt-1">{errors.lastName?.message}</p>
// //           </div>

// //           <div>
// //             <input
// //               {...register('email', {
// //                 required: 'Email is required',
// //                 pattern: {
// //                   value: /^\S+@\S+\.\S+$/,
// //                   message: 'Invalid email format',
// //                 },
// //               })}
// //               placeholder="E-Mail"
// //               className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //             <p className="text-red-600 text-sm mt-1">{errors.email?.message}</p>
// //           </div>

// //           <div className="flex gap-2">
// //             <input
// //               {...register('phone', {
// //                 required: 'Phone number is required',
// //                 pattern: {
// //                   value: /^\d{10}$/,
// //                   message: 'Phone number must be 10 digits',
// //                 },
// //               })}
// //               placeholder="Enter 10 digit Phone number"
// //               className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //             {/* <button
// //               type="button"
// //               onClick={handleSendOtp}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
// //             >
// //               Send OTP
// //             </button> */}
// //           </div>
// //           <p className="text-red-600 text-sm mt-1 col-span-2">{errors.phone?.message}</p>

// //           <select
// //             {...register('country', { required: true })}
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           >
// //             <option value="">Select Country</option>
// //             <option>Germany</option>
// //             <option>USA</option>
// //             <option>UK</option>
// //             <option>AUSTRALIA</option>
// //             <option>IRELAND</option>
// //             <option>Other Country</option>
// //           </select>

// //           <input
// //             {...register('major', { required: true })}
// //             placeholder="Desired Major"
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <input
// //             {...register('intake', { required: true })}
// //             placeholder="Intake?"
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <input
// //             {...register('bachelorsCollege', { required: true })}
// //             placeholder="Bachelors College"
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <input
// //             {...register('bachelorsMajor', { required: true })}
// //             placeholder="Select your bachelors major"
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <input
// //             {...register('percentage', { required: true })}
// //             placeholder="Percentage"
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <input
// //             {...register('backlogs', { required: true })}
// //             placeholder="Backlogs"
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <input
// //             {...register('passoutYear', { required: true })}
// //             placeholder="Passout Year"
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <input
// //             {...register('experience')}
// //             placeholder="Work Experience (If Any)"
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <input
// //             {...register('testScores')}
// //             placeholder="IELTS | TOEFL | PTE | DET"
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <input
// //             {...register('gre')}
// //             placeholder="GRE Score"
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <input
// //             type="date"
// //             {...register('date', { required: true })}
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           {/* <input
// //             type="time"
// //             {...register('time', { required: true })}
// //             className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           /> */}

// //           <textarea
// //             {...register('history')}
// //             placeholder="Past Admission/Visa History"
// //             className="border border-gray-300 rounded px-4 py-2 col-span-full h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           ></textarea>

// //           <div className="col-span-full">
// //             <button
// //               type="submit"
// //               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded"
// //             >
// //               Book Your Free Counselling
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// type FormValues = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   country: string;
//   major: string;
//   intake: string;
//   bachelorsCollege: string;
//   bachelorsMajor: string;
//   percentage: string;
//   backlogs: string;
//   passoutYear: string;
//   experience: string;
//   testScores: string;
//   gre: string;
//   date: string;
//   history: string;
// };

// export default function CounsellingForm() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<FormValues>();

 

//   const onSubmit = (data: FormValues) => {
//     console.log('Form Data:', data);
//     alert('Form Submitted!');
//   };

  

//   return (
//     <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full">
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
   
//   );
// }

'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaStar } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';

// Google Rating Component
const GoogleRatingComponent: React.FC = () => {
  const handleGoogleClick = (): void => {
    // Open the Google review link in a new tab
    window.open('https://share.google/sgZIfNjCMD2PZyENv', '_blank');
  };

  return (
    <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-gray-800 text-sm">Rated 4.9</span>
        <div className="flex items-center space-x-1">
          {/* Google Logo SVG */}
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

type FormData = {
  name: string;
  phone: string;
  email: string;
  branch: string;
  country: string;
  time: string;
};

export default function CounsellingForm() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    branch: '',
    country: '',
    time: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.branch) newErrors.branch = 'Branch is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.time.trim()) newErrors.time = 'Preferred time is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div>
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white text-sm flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2">
        <div className="flex items-center gap-4">
          <span className="text-blue-200">📞 +91 8374779361, +91 9704879361</span>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-blue-200">📧 studyvisa2000@gmail.com</span>
          <div className="flex gap-2">
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <FaLinkedinIn className="w-3 h-3 text-blue-400" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <FaInstagram className="w-3 h-3 text-pink-400" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <FaFacebookF className="w-3 h-3 text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar - Matching the previous pages */}
      <nav className="bg-black backdrop-blur-sm shadow-lg px-4 py-2 lg:px-6 flex justify-between items-center sticky top-0 z-50 border-b border-slate-700">
  <div className="flex items-center space-x-3">
    {/* Logo - Updated with GIF */}
   <div className="transform hover:scale-105 transition-transform duration-300">
               <Image
                 src="/Studyvisummp4logo (1) (1).gif"
                 alt="StudyVisum Logo"
                 width={300}
                 height={35}
                 className="object-contain drop-shadow-lg"
               />
             </div>
    
    {/* Brand Text */}
    {/* <div className="flex items-center">
      <h1 className="text-2xl lg:text-3xl font-extrabold">
        <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Study</span>{' '}
        <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">Visum</span>
      </h1>
    </div> */}
  </div>

  {/* Center - Google Rating Component (Desktop) */}
  <div className="hidden lg:flex">
    <GoogleRatingComponent />
  </div>

  {/* Desktop Navigation */}
  <div className="hidden lg:flex items-center space-x-1 text-sm font-medium">
    <Link href="/" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">HOME</Link>
    <Link href="/about" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">ABOUT US</Link>
    <Link href="/services" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">SERVICES</Link>
    <Link href="/countries" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">COUNTRIES</Link>
    <Link href="/contact" className="px-3 py-1.5 text-white rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">CONTACT US</Link>
    <Link href="/counselling" className="ml-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-1.5 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-md animate-pulse">
      Book Free Counselling
    </Link>
  </div>

  {/* Mobile Menu Button */}
  <button 
    className="lg:hidden text-white text-2xl hover:text-blue-400 transition-colors duration-300" 
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <HiX /> : <HiMenu />}
  </button>
</nav>

{/* Mobile Menu */}
{menuOpen && (
  <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm px-4 py-4 space-y-2 border-b border-slate-700">
    {/* Google Rating Component (Mobile) */}
    <div className="flex justify-center mb-4">
      <GoogleRatingComponent />
    </div>
    
    <Link href="/" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">HOME</Link>
    <Link href="/about" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">ABOUT US</Link>
    <Link href="/services" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">SERVICES</Link>
    <Link href="/countries" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">COUNTRIES</Link>
    <Link href="/contact" className="block text-white bg-gradient-to-r from-blue-600 to-purple-600 py-1.5 px-3 rounded-lg">CONTACT US</Link>
    <Link href="/counselling" className="block text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300">Book Free Counselling</Link>
  </div>
)}

{/* Main Content */}
<section className="py-12 bg-gradient-to-br from-white via-blue-50 to-purple-50 px-4 relative overflow-hidden min-h-screen">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
    <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-bounce animation-delay-500"></div>
    <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-red-500 rounded-full animate-pulse animation-delay-1000"></div>
    <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-yellow-500 rounded-full animate-bounce animation-delay-1500"></div>
  </div>

  <div className="max-w-2xl mx-auto relative z-10">
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r text-center from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
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
</section>

{/* Footer - Updated with GIF logo */}
<footer className="bg-black text-white py-8 lg:py-10 relative overflow-hidden">
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
  </div>

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
    {/* Brand - Updated with GIF logo */}
    <div className="lg:col-span-1 text-center lg:text-left">
      <div className="transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/Studyvisummp4logo (1) (1).gif"
                    alt="StudyVisum Logo"
                    width={300}
                    height={35}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
    </div>

    {/* Address */}
    <div className="lg:col-span-1">
      <h3 className="font-semibold mb-3 text-blue-300">Address</h3>
      <div className="space-y-1 text-gray-300 text-sm">
        <p>Flat no.301, Okaz Complex</p>
        <p>Opp. Pillar Number 5, Mehdipatnam</p>
        <p>Hyderabad, Telangana 500028</p>
      </div>
    </div>

    {/* Navigation */}
    <div className="lg:col-span-1">
      <h3 className="font-semibold mb-3 text-blue-300">Navigation</h3>
      <ul className="space-y-1">
        {[
          { href: "/about", text: "About Us" },
          { href: "/services", text: "Services" },
          { href: "/contact", text: "Contact" },
          { href: "/countries", text: "Countries" }
        ].map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact */}
    <div className="lg:col-span-1">
      <h3 className="font-semibold mb-3 text-blue-300">Contact</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
          <MdEmail className="text-base text-blue-400 flex-shrink-0" />
          <a href="mailto:studyvisa2000@gmail.com" className="hover:underline text-sm">studyvisa2000@gmail.com</a>
        </div>
        <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
          <MdPhone className="text-base text-green-400 flex-shrink-0" />
          <a href="tel:+918374779361" className="hover:underline text-sm">+91 8374779361</a>
        </div>
        <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
          <MdPhone className="text-base text-green-400 flex-shrink-0" />
          <a href="tel:+919704879361" className="hover:underline text-sm">+91 9704879361</a>
        </div>
      </div>
    </div>

    {/* Social Media */}
    <div className="lg:col-span-1">
      <h3 className="font-semibold mb-3 text-blue-300">Follow Us</h3>
      <div className="flex space-x-3 text-xl">
        <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="relative text-center text-gray-400 text-sm mt-8 pt-6 border-t border-gray-700">
    <p>&copy; 2025 hakeemconsultancy. All rights reserved.</p>
    <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2"></div>
  </div>
</footer>
    </div>
  );
}