'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AppNavbar from '../../../components/AppNavbar';
export default function VisaTipsSwitzerland() {
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
      <AppNavbar />
      {/* Hero Section */}
      <div 
        className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
        style={{ backgroundImage: "url('/swiz.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-black bg-opacity-60 text-white p-6 sm:p-10 rounded-lg max-w-2xl w-full text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Switzerland <span className="text-blue-300">Student Visa</span>
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
                Switzerland Student Visa Tips
              </h2>
              <p className="mb-4 text-gray-700">
                Switzerland offers world-class education, diverse culture, and a welcoming environment for international students. Here are some visa-related tips and benefits to keep in mind.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Why Apply for a Switzerland Tourist Visa?
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "University Visits & Campus Tours",
                    "See Swiss Alps & Matterhorn",
                    "Explore Historic Cities like Zurich",
                    "Attend Education Fairs or Conferences",
                    "Attend 5,000+ events yearly",
                    "Short-Term Courses or Workshops",
                    "Experience Swiss Culture & Festivals",
                    "Visit World-Famous Alpine Lakes"
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

              <p className="text-gray-700 mt-4">
                Always keep your documents organized and answer visa officer questions confidently. Expert guidance makes the journey smoother.
              </p>
            </motion.div>

            {/* Visa Types Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Types of Switzerland Tourist Visa
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Single Entry Visa", desc: "Allows one entry for up to 6 months" },
                  { title: "Multiple Entry Visa", desc: "Allows multiple entries, each up to 6 months" }
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

            {/* Benefits Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Benefits of Visit Visa
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Stay up to 6 months",
                  "Travel freely across Switzerland", 
                  "Bring dependents or children",
                  "Attend short-term programs",
                  "Understand Switzerland's education system",
                  "Qualify for in-Switzerland study permits"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center"
                  >
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Google Maps Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d694812.3083821633!2d8.2!3d46.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596927%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="mt-4 text-gray-600">
                Switzerland is a landlocked Alpine country in Central Europe, known for its mountains, lakes, and high quality of life.
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <div className="max-w-md mx-auto relative z-10">
            <div className="bg-gradient-to-b from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-2">
                Free Visa Consultation
              </h2>
              <p className="text-blue-100 mb-6">Fill out the form below and our Switzerland experts will contact you shortly</p>
              
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
                    <option value="Switzerland">Switzerland</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Other">Other</option>
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

              {/* <div className="mt-6">
                <Image
                  src="/swiz-stu.jpg"
                  alt="Happy Student"
                  width={400}
                  height={240}
                  className="rounded-lg w-full object-cover"
                />
              </div> */}
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
                Overseas Education Consultants for Switzerland
              </h2>
              <p className="text-gray-700 mb-4">
                With years of experience, our consultants help students pick the right courses, prepare strong SOPs, and apply with confidence.
              </p>
              <p className="text-gray-700 mb-4">
                From shortlisting universities to visa interview prep—we guide your entire study abroad journey.
              </p>
              <p className="text-gray-700 mb-6">
                Hakeem Consulting Services is a trusted <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SWITZERLAND study visa consultant in Hyderabad</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  "University Selection",
                  "Visa Documentation", 
                  "Financial Proof Guidance",
                  "Interview Preparation",
                  "Language Test Preparation",
                  "Pre-departure Orientation"
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

              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Link href="#form">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
                    Get Free Switzerland Consultation
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}