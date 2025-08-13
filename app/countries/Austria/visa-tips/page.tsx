'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function VisaTipsAustria() {
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
        style={{ backgroundImage: "url('/aus-visa.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-black bg-opacity-60 text-white p-6 sm:p-10 rounded-lg max-w-2xl w-full text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Austria Student <span className="text-blue-300">Visa Guide</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-base sm:text-lg"
          >
            Everything you need to know before applying for your Austrian student visa
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
                Austria Student Visa Tips
              </h2>
              <p className="mb-4 text-gray-700">
                Austria offers world-class education, diverse culture, and a welcoming environment for international students. Here are some visa-related tips and benefits to keep in mind.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Why Study in Austria?
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "University Visits & Campus Tours",
                    "High-quality education system",
                    "Affordable tuition fees",
                    "Attend Education Fairs or Conferences",
                    "Rich cultural heritage",
                    "Attend Short-Term Courses or Workshops",
                    "Beautiful landscapes and cities",
                    "Strong job opportunities after graduation"
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

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Types of Austria Student Visa
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg text-blue-600">Type D Visa (Long-term)</h3>
                    <p className="text-gray-700">For students planning to stay longer than 6 months for studies.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg text-blue-600">Type C Visa (Short-term)</h3>
                    <p className="text-gray-700">For short courses or language programs under 6 months.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Benefits of Austria Student Visa
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Work part-time (up to 20 hours/week)",
                    "Travel freely across Schengen area",
                    "Bring dependents in some cases",
                    "Post-study work opportunities",
                    "Access to high-quality education",
                    "Safe and welcoming environment",
                    "Cultural immersion",
                    "Pathway to permanent residency"
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

            {/* Google Maps Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {/* <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Austria Location
              </h2> */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808677.013104938!2d12.1413465!3d47.5854945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079b259d2a7f%3A0x1012d47bdde4c1af!2sAustria!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="mt-4 text-gray-600">
                Austria is located in Central Europe, bordered by Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-md mx-auto relative z-10">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-2">
                Free Visa Consultation
              </h2>
              <p className="text-blue-100 mb-6">Fill out the form below and our visa experts will contact you shortly</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Full Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800"
                  />
                  {errors.email && <p className="mt-1 text-sm text-yellow-200">{errors.email}</p>}
                </div>

                <div>
                  <select 
                    name="branch" 
                    value={formData.branch} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800"
                  >
                    <option value="">-- Select Country --</option>
                    <option value="Austria">Austria</option>
                    <option value="Germany">Germany</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                    <option value="Ireland">Ireland</option>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-gray-800"
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
                  <div className="mt-4 p-3 bg-white bg-opacity-20 text-white rounded-lg">
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
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">How We Help You?</h2>
              <p className="text-gray-700 mb-6">
                We offer end-to-end expert guidance and services to help you achieve your study abroad goals with ease.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Visa Documentation Assistance",
                  "Personalized Visa Counseling",
                  "Financial Proof Guidance",
                  "Interview Preparation",
                  "University Application Support",
                  "Post-Visa Orientation"
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
                    Get Free Visa Consultation
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