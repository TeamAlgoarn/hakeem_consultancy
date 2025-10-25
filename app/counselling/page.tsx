'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaStar,FaPhone ,FaEnvelope } from 'react-icons/fa';
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
  honeypot?: string; // ADDED: Anti-spam field
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
    honeypot: '', // ADDED: Hidden field for spam prevention
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // ADDED: Loading state
  const [errorMessage, setErrorMessage] = useState(''); // ADDED: Error message state

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
    // ADDED: Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // MODIFIED: Complete rewrite of handleSubmit to call API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          branch: '',
          country: '',
          time: '',
          honeypot: '',
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div>
         <div className="bg-black text-white text-base flex flex-col sm:flex-row justify-between items-center px-4 py-3 gap-3">
           <div className="flex items-center gap-3 justify-center w-full sm:w-auto sm:flex-1">
             <FaPhone className="w-4 h-4 text-blue-400" />
             <span className="text-blue-200">+91 8374779361</span>
             <span className="text-blue-200">+91 9704879361</span>
       
           </div>
           <div className="flex gap-4 items-center justify-center sm:justify-end w-full sm:w-auto sm:flex-1">
             <div className="flex items-center gap-2">
               <FaEnvelope className="w-4 h-4 text-blue-400" />
               <span className="text-blue-200">info@studyvisum.com</span>
             </div>
             <div className="flex gap-2">
               <a href="#" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                 <FaLinkedinIn className="w-3.5 h-3.5 text-blue-400" />
               </a>
               <a href="#" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                 <FaInstagram className="w-3.5 h-3.5 text-pink-400" />
               </a>
               <a href="#" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                 <FaFacebookF className="w-3.5 h-3.5 text-blue-400" />
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
      <p className="text-gray-600 mb-6 text-center">Fill out the form below and our experts will contact you shortly</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ADDED: Honeypot field - hidden from users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Full Name" 
            value={formData.name} 
            onChange={handleChange}
            disabled={loading} // ADDED: Disable during submission
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100" // ADDED: disabled styles
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
            disabled={loading} // ADDED
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100" // ADDED: disabled styles
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
            disabled={loading} // ADDED
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100" // ADDED: disabled styles
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <select 
            name="branch" 
            value={formData.branch} 
            onChange={handleChange}
            disabled={loading} // ADDED
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700 disabled:bg-gray-100" // ADDED: disabled styles
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
            disabled={loading} // ADDED
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700 disabled:bg-gray-100" // ADDED: disabled styles
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
            disabled={loading} // ADDED
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100" // ADDED: disabled styles
          />
          {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
        </div>

        {/* MODIFIED: Button with loading state and spinner */}
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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

        {/* MODIFIED: Enhanced success message with icon */}
        {submitted && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg flex items-start">
            <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <strong>Success!</strong> Form submitted successfully. Our team will contact you shortly.
            </div>
          </div>
        )}

        {/* ADDED: Error message display */}
        {errorMessage && (
          <div className="mt-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg flex items-start">
            <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div>
              <strong>Error!</strong> {errorMessage}
            </div>
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
        <p>Flat No. 301 A Block, Okaz Complex</p>
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
          <a href="mailto:info@studyvisum.com" className="hover:underline text-sm">info@studyvisum.com</a>
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