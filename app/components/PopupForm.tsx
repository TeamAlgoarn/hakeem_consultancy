

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
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-3xl"
          onClick={() => {
            setShowPopup(false);
            sessionStorage.setItem('popupDismissed', 'true');
          }}
        >
          &times;
        </button>
        <h2 className="text-lg font-bold text-red-600 mb-4">Book Free Consultation to Study Abroad</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register('name', { required: 'Name is required' })} placeholder="Your Full Name" className="w-full p-2 border rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be 10 digits',
              },
            })}
            placeholder="Your Mobile No."
            className="w-full p-2 border rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            placeholder="Your Email"
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <select {...register('branch', { required: 'Please select a branch' })} className="w-full p-2 border rounded">
            <option value="">--Please choose a branch--</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          {errors.branch && <p className="text-red-500 text-sm">{errors.branch.message}</p>}

          <select {...register('country', { required: 'Please select a country' })} className="w-full p-2 border rounded">
            <option value="">--Please choose a country--</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Ireland">Ireland</option>
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}

          <input {...register('time', { required: 'Preferred time is required' })} placeholder="Preferred Time" className="w-full p-2 border rounded" />
          {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}

          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Request Free Consultation
          </button>
        </form>
      </div>
    </div>
  );
}
