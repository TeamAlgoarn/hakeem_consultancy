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
  honeypot?: string;
}

export default function PopupCounsellingForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('🚀 Form Submission Started:', data);
    setLoading(true);
    setSubmitError('');

    try {
      const formDataToSend = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        branch: data.branch,
        country: data.country,
        time: data.time,
        honeypot: '',
      };

      console.log('📝 Sending data to API...');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log('✅ Form submitted successfully!');
        
        sessionStorage.setItem('popupDismissed', 'true');
        
        alert('Your consultation request has been submitted successfully. Our team will contact you shortly.');
        
        reset();
        
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      } else {
        console.error('❌ API returned error:', result);
        setSubmitError(result.message || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl transition-all duration-300"
          onClick={() => {
            setShowPopup(false);
            sessionStorage.setItem('popupDismissed', 'true');
          }}
          disabled={loading}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Book Free <span className="text-blue-600">Consultation</span> to Study Abroad
        </h2>
        <p className="text-gray-600 mb-6">Fill out the form below and our visa experts will contact you shortly</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            style={{ display: 'none' }}
            {...register('honeypot')}
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder="Your Full Name"
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 bg-white disabled:bg-gray-100"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
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
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 bg-white disabled:bg-gray-100"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
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
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 bg-white disabled:bg-gray-100"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <select
              {...register('branch', { required: 'Please select a branch' })}
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 bg-white disabled:bg-gray-100"
            >
              <option value="">-- Select Branch --</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
            {errors.branch && <p className="mt-1 text-sm text-red-600">{errors.branch.message}</p>}
          </div>

          <div>
            <select
              {...register('country', { required: 'Please select a country' })}
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 bg-white disabled:bg-gray-100"
            >
              <option value="">-- Select Country --</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="Australia">Australia</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Ireland">Ireland</option>
            </select>
            {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>}
          </div>

          <div>
            <input
              {...register('time', { required: 'Preferred time is required' })}
              placeholder="Preferred Time (e.g., 10 AM - 12 PM)"
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 bg-white disabled:bg-gray-100"
            />
            {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>}
          </div>

          {submitError && (
            <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Request Free Consultation'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}