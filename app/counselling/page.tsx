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

import React, { useState } from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';
// // import { useForm } from 'react-hook-form';
// Define the form data structure
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
          {/* Responsive Navbar */}
          <nav className=" px-4 py-4 sm:px-6 lg:px-10 flex justify-between items-center">
            <div className="text-xl font-bold">Hakeem Consultancy Services Private Limited</div>
    
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 text-sm font-medium items-center" style={{fontWeight:'bold'}}>
              
                <a href="/" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
                  HOME
                </a>
              
              <a href="/about" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">ABOUT US</a>
              <a href="/services" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">SERVICES</a>
              <a href="/countries" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">COUNTRIES</a>
              <a href="/contact" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">CONTACT US</a>
              <Link href="/counselling" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm font-semibold">Book Free Counselling</Link>
            </div>
    
            {/* Mobile Hamburger Button */}
            <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </nav>
    
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white px-4 py-4 space-y-3 text-sm font-medium shadow">
              
                <a href="/" className="block">
                  HOME
                </a>
              
              <a href="/about" className="block">ABOUT US</a>
              <a href="/services" className="block">SERVICES</a>
              <a href="/countries" className="block">COUNTRIES</a>
              <a href="/contact" className="block">CONTACT US</a>
              <Link href="/counselling" className="block text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Book Free Counselling</Link>
            </div>
          )}
    <div className="max-w-md mx-auto mt-10 p-6 bg-red-600 text-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Book Free Consultation to Study</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded text-black" />
        {errors.name && <p className="text-sm text-yellow-200">{errors.name}</p>}

        <input type="text" name="phone" placeholder="Your Mobile No." value={formData.phone} onChange={handleChange} className="w-full p-2 rounded text-black" />
        {errors.phone && <p className="text-sm text-yellow-200">{errors.phone}</p>}

        <input type="text" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded text-black" />
        {errors.email && <p className="text-sm text-yellow-200">{errors.email}</p>}

        <select name="branch" value={formData.branch} onChange={handleChange} className="w-full p-2 rounded text-black">
          <option value="">--Please choose a branch--</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
           <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
             <option value="Goa">Goa</option>
              <option value="Other city">Other city</option>
          
        </select>
        {errors.branch && <p className="text-sm text-yellow-200">{errors.branch}</p>}

        <select name="country" value={formData.country} onChange={handleChange} className="w-full p-2 rounded text-black">
          <option value="">--Please choose a country--</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
          <option value="USA">USA</option>
          <option value="Ireland">Ireland</option>

        </select>
        {errors.country && <p className="text-sm text-yellow-200">{errors.country}</p>}

        <input type="text" name="time" placeholder="Preferred Time" value={formData.time} onChange={handleChange} className="w-full p-2 rounded text-black" />
        {errors.time && <p className="text-sm text-yellow-200">{errors.time}</p>}

        <button type="submit" className="w-full bg-black py-2 rounded font-semibold hover:bg-gray-800">Request Free Consultation</button>
      </form>

      {submitted && <p className="mt-4 text-green-200 font-semibold">Form submitted successfully!</p>}
    </div>
    <footer className="bg-blue-900 text-white px-6 py-10 text-sm w-full" style={{marginTop:'45px'}}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">HAKEEM CONSULTANCY SERVICES PRIVATE LIMITED</h2>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p>Flat no.301, Okaz Complex</p>
            <p>Opp. Pillar Number 5</p>
           
            <p>Hyderabad, Telangana 500028</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
         <div>
                     <h3 className="font-semibold mb-2">Contact</h3>
                     <p className="flex items-center gap-2"><MdEmail className="text-lg" /><a href="mailto:studyvisa2000@gmail.com" className="hover:underline">studyvisa2000@gmail.com</a></p>
                     <p className="flex items-center gap-2 mt-2"><MdPhone className="text-lg" /><a href="tel:+919000065858" className="hover:underline">+918374779361</a></p>
                     <p className="flex items-center gap-2 mt-2"><MdPhone className="text-lg" /><a href="tel:+919000065858" className="hover:underline">+919704879361</a></p>
                   </div>
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mt-2 text-xl">
              <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-300 text-xs mt-10 pt-4 border-t border-gray-700">
          &copy; 2025 hakeemconsultancy. All rights reserved.
        </div>
      </footer>
    </div>
     
  );
 
}
    
