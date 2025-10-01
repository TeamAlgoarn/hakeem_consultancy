

// import { useEffect, useState } from 'react';

// export default function PopupForm() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(true);
//     }, 3000); // Show after 3 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Get Free Consultation</h2>
//         <form className="space-y-3">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full px-4 py-2 border rounded"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full px-4 py-2 border rounded"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//           >
//             Submit
//           </button>
//         </form>
//         <button
//           onClick={() => setShow(false)}
//           className="mt-4 text-sm text-blue-600 hover:underline"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from 'react';

// export default function PopupForm() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShow(true), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-xl shadow-2xl">
//         <div className="bg-white bg-opacity-90 p-6 rounded-xl w-80">
//           <h2 className="text-2xl font-bold text-purple-900 text-center">Hello!</h2>
//           <p className="text-sm text-center text-gray-600 mb-6">Welcome to the website</p>
// <form>
//           {/* Existing Fields (Example below — replace with yours if needed) */}
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <input
//             type="text"
//             placeholder="Your Email"
//             className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />

//           <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-4 rounded-full w-full hover:opacity-90">
//             Submit
//           </button>
//           </form>
//           <button
//          onClick={() => setShow(false)}
//         className="mt-4 text-sm text-blue-600 hover:underline"
//        >
//           Close
//          </button>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// Define form data type
interface FormData {
  name: string;
  phone: string;
  email: string;
  branch: string;
  country: string;
  time: string;
}

export default function PopupCounsellingForm() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSubmitted = sessionStorage.getItem('popupDismissed');
    if (!hasSubmitted) {
      const timer = setTimeout(() => setShowPopup(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data);
    sessionStorage.setItem('popupDismissed', 'true');
    setShowPopup(false);
    alert('Your consultation request has been submitted successfully.');
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-200 text-3xl transition-all duration-300"
          onClick={() => {
            setShowPopup(false);
            sessionStorage.setItem('popupDismissed', 'true');
          }}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">
          Book Free <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Consultation</span> to Study Abroad
        </h2>
        <p className="text-blue-100 mb-6">Fill out the form below and our visa experts will contact you shortly</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder="Your Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800 bg-white"
            />
            {errors.name && <p className="mt-1 text-sm text-yellow-200">{errors.name.message}</p>}
          </div>

          <div>
            <input
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Phone number must be 10 digits',
                },
              })}
              placeholder="Your Mobile No."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800 bg-white"
            />
            {errors.phone && <p className="mt-1 text-sm text-yellow-200">{errors.phone.message}</p>}
          </div>

          <div>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800 bg-white"
            />
            {errors.email && <p className="mt-1 text-sm text-yellow-200">{errors.email.message}</p>}
          </div>

          <div>
            <select
              {...register('branch', { required: 'Please select a branch' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800 bg-white"
            >
              <option value="">-- Select Branch --</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
            </select>
            {errors.branch && <p className="mt-1 text-sm text-yellow-200">{errors.branch.message}</p>}
          </div>

          <div>
            <select
              {...register('country', { required: 'Please select a country' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800 bg-white"
            >
              <option value="">-- Select Country --</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="Australia">Australia</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Ireland">Ireland</option>
            </select>
            {errors.country && <p className="mt-1 text-sm text-yellow-200">{errors.country.message}</p>}
          </div>

          <div>
            <input
              {...register('time', { required: 'Preferred time is required' })}
              placeholder="Preferred Time (e.g., 10 AM - 12 PM)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800 bg-white"
            />
            {errors.time && <p className="mt-1 text-sm text-yellow-200">{errors.time.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] shadow-md"
          >
            Request Free Consultation
          </button>
        </form>
      </div>
    </div>
  );
}