// // 'use client';

// // import React, { useState } from 'react';
// // import { Mail, MapPin, Phone } from 'lucide-react';
// // import { FaWhatsapp } from 'react-icons/fa';
// // import Link from 'next/link';
// // import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
// // import {MdEmail, MdPhone}from 'react-icons/md';
// // export default function ContactPage() {
// //   const [error, setError] = useState('');

// //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     const form = e.currentTarget;
// //     const inputs = form.querySelectorAll('input, textarea');
// //     let isValid = true;

// //     inputs.forEach((input: any) => {
// //       if (!input.value.trim()) {
// //         isValid = false;
// //         input.classList.add('border-red-500');
// //       } else {
// //         input.classList.remove('border-red-500');
// //       }
// //     });

// //     if (!isValid) {
// //       setError('Please fill all fields before submitting.');
// //     } else {
// //       setError('');
// //       alert('Message sent successfully!');
// //       form.reset();
// //     }
// //   };

// //   return (
// //     <div >
// //     <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
// //             <div className="text-xl font-bold">Hakeem Consultancy</div>
// //             <div className="space-x-6 text-sm font-medium">
// //               <a href="/about" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">
// //       ABOUT US
// //     </a>
// //               <a href="/services" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">SERVICES</a>
// //               <a href="/countries" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">COUNTRIES</a>
// //               <a href="/contact" className="px-3 py-2 rounded hover:bg-blue-100 active:bg-blue-200 transition">CONTACT US</a>
// //             </div>
// //             <Link
// //               href="/counselling"
// //               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm font-semibold"
// //             >
// //               Book Free Counselling
// //             </Link>
// //           </nav>
// //     <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
// //         {/* Contact Form */}
// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h2 className="text-2xl font-bold mb-6">Contact us</h2>
// //           <p className="text-gray-600 mb-4">Our friendly team would love to hear from you!</p>

// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div className="flex gap-4">
// //               <input type="text" placeholder="First name" className="w-full input-style" />
// //               <input type="text" placeholder="Last name" className="w-full input-style" />
// //             </div>
// //             <input type="email" placeholder="Email" className="w-full input-style" />
// //             <input type="tel" placeholder="Phone number" className="w-full input-style" />
// //             <textarea placeholder="Message" className="w-full input-style" rows={4}></textarea>

// //             {error && <p className="text-red-600">{error}</p>}

// //             <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
// //               Send message
// //             </button>
// //           </form>
// //         </div>

// //         {/* Contact Info */}
// //         <div className="space-y-6">
// //           <iframe
// //             className="w-full h-60 rounded-md border"
// //             src="https://www.google.com/maps?q=Flat+No.301,+Okaz+Building,+opp.+Pillar+Number+5,+above+Habitat+Furniture,+Royal+Colony,+Mehdipatnam,+Hyderabad,+Telangana+500028&output=embed"
// //             allowFullScreen
// //             loading="lazy"
// //           ></iframe>
// //           <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
// //             <div className="flex gap-4 items-start">
// //               <Mail className="text-blue-600" />
// //               <div>
// //                 <p className="font-semibold">Email us</p>
// //                 <a href="mailto:info@i20fever.com" className="text-blue-600 hover:underline">info@i20fever.com</a>
// //               </div>
// //             </div>
// //             <div className="flex gap-4 items-start">
// //               <MapPin className="text-blue-600" />
// //               <div>
// //                 <p className="font-semibold">Visit us</p>
// //                 <p className="text-gray-600">
// //                   Flat no.301, Okaz Building, Mehdipatnam, Hyderabad, Telangana 500028
// //                 </p>
// //               </div>
// //             </div>
// //             <div className="flex gap-4 items-start">
// //               <Phone className="text-blue-600" />
// //               <div>
// //                 <p className="font-semibold">Call us</p>
// //                 <a href="tel:+919000065858" className="text-blue-600 hover:underline">
// //                   +91-097048 79361
// //                 </a>
// //               </div>
// //             </div>
// //             <div className="flex gap-4 items-start">
// //               {/* <FaWhatsapp className="text-green-600 w-5 h-5 mt-1" /> */}
// //               <div>
// //                 {/* <p className="font-semibold">WhatsApp</p>
// //                 <a href="https://wa.me/919000065858" target="_blank" className="text-blue-600 hover:underline">
// //                   Chat on WhatsApp
// //                 </a> */}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     <footer className="bg-blue-900 text-white py-10 mt-10" style={{marginTop:'-31px'}}>
// //         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
              
// //                       {/* Column 1: Branding */}
// //                       <div>
// //                         <h2 className="text-xl font-bold mb-4">HAKEEM CONSULTANCY</h2>
// //                       </div>
              
// //                       {/* Column 2: Address */}
// //                       <div>
// //                         <h3 className="font-semibold mb-2">Address</h3>
// //                         <p>Flat no.301, Okaz Building</p>
// //                         <p>Opp. Pillar Number 5</p>
// //                         <p>Above Habitat Furniture</p>
// //                         <p>Royal Colony, Mehdipatnam</p>
// //                         <p>Hyderabad, Telangana 500028</p>
// //                       </div>
              
// //                       {/* Column 3: Navigation */}
// //                       <div>
// //                         <h3 className="font-semibold mb-2">Navigation</h3>
// //                         <ul className="space-y-1">
// //                           <li><a href="/about" className="hover:underline">About Us</a></li>
// //                           <li><a href="/services" className="hover:underline">Services</a></li>
// //                           <li><a href="/contact" className="hover:underline">Contact</a></li>
// //                         </ul>
// //                       </div>
              
// //                       {/* Column 4: Contact with icons */}
// //                       <div>
// //                         <h3 className="font-semibold mb-2">Contact</h3>
// //                         <p className="flex items-center gap-2">
// //                           <MdEmail className="text-lg" />
// //                           <a href="mailto:info@i20fever.com" className="hover:underline">info@i20fever.com</a>
// //                         </p>
// //                         <p className="flex items-center gap-2 mt-2">
// //                           <MdPhone className="text-lg" />
// //                           <a href="tel:+919000065858" className="hover:underline">+91- 097048 79361</a>
// //                         </p>
// //                       </div>
              
// //                       {/* Column 5: Social Media */}
// //                       <div>
// //                         <h3 className="font-semibold mb-2">Follow Us</h3>
// //                         <div className="flex space-x-4 mt-2 text-xl">
// //                           <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
// //                           <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
// //                           <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
// //                         </div>
// //                       </div>
// //                     </div>
              
// //                     {/* Bottom Note */}
// //                     <div className="text-center text-gray-300 text-xs mt-10 pt-4 border-t border-gray-700">
// //                       &copy; 2025 hakeemconsultancy. All rights reserved.
// //                     </div>
// //                   </footer>
// //     </div>
    
// //   );
// // }
// //       {/* Footer */}

'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdEmail, MdPhone } from 'react-icons/md';

const GoogleRatingComponent: React.FC = () => {
  const handleGoogleClick = (): void => {
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
          <button onClick={handleGoogleClick} className="text-gray-600 font-medium hover:text-blue-600 transition-colors cursor-pointer bg-transparent border-none outline-none text-sm">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ContactPage() {
  const [error, setError] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });

  const jitsiContainerRef = useRef<HTMLDivElement>(null);
  const [scheduleVideoCall, setScheduleVideoCall] = useState(false); // CHANGED: Simple checkbox
  const [meetingDateTime, setMeetingDateTime] = useState('');
  const [meetingReady, setMeetingReady] = useState(false);
  const [meetingLink, setMeetingLink] = useState('');

  // UNIFIED SUBMIT: Handles both contact message AND video meeting in ONE submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('🚀 Unified Form Submission Started');
    setError('');
    setLoading(true);
    setSubmitted(false);

    const form = e.currentTarget;
    let isValid = true;
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    
    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData].trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      setError('Please fill all required fields.');
      setLoading(false);
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      setLoading(false);
      return;
    }

    // If user wants video call, validate date/time
    if (scheduleVideoCall && !meetingDateTime) {
      setError('Please select a date and time for the video meeting.');
      setLoading(false);
      return;
    }

    if (scheduleVideoCall) {
      const selectedTime = new Date(meetingDateTime);
      const now = new Date();
      if (selectedTime < now) {
        setError('Meeting cannot be scheduled for a past time.');
        setLoading(false);
        return;
      }
    }

    try {
      // First: Send contact message
      const contactData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        honeypot: formData.honeypot,
      };

      console.log('📝 Sending contact form data...');
      const contactResponse = await fetch('/api/contact-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });

      const contactResult = await contactResponse.json();

      // Second: If video call requested, schedule it
      let meetingResult = null;
      if (scheduleVideoCall && meetingDateTime) {
        console.log('🎥 Scheduling video meeting...');
        const meetingId = `StudyVisum-${Date.now()}`;
        const generatedMeetingLink = `https://meet.jit.si/${meetingId}`;
        setMeetingLink(generatedMeetingLink);

        const meetingResponse = await fetch('/api/schedule-meeting', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userName: `${formData.firstName} ${formData.lastName}`,
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            message: formData.message.trim(),
            meetingDateTime,
            meetingLink: generatedMeetingLink,
          }),
        });

        meetingResult = await meetingResponse.json();
      }

      // Check results
      if (contactResponse.ok && contactResult.success) {
        console.log('✅ Form submitted successfully!');
        setSubmitted(true);
        setError('');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          honeypot: '',
        });
        setScheduleVideoCall(false);
        setMeetingDateTime('');
        form.reset();

        setTimeout(() => setSubmitted(false), 8000);
      } else {
        console.error('❌ Submission failed:', contactResult);
        setError(contactResult.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  // Auto-open meeting when time arrives
  useEffect(() => {
    if (meetingLink && meetingDateTime && !meetingReady) {
      const timer = setInterval(() => {
        const now = new Date();
        const scheduled = new Date(meetingDateTime);
        if (now >= scheduled) {
          setMeetingReady(true);
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [meetingLink, meetingDateTime, meetingReady]);

  // Load Jitsi when meeting is ready
  useEffect(() => {
    if (meetingReady && meetingLink) {
      const script = document.createElement('script');
      script.src = 'https://meet.jit.si/external_api.js';
      script.async = true;
      script.onload = () => {
        const domain = 'meet.jit.si';
        const options = {
          roomName: meetingLink.split('/').pop() || `StudyVisum-${Date.now()}`,
          parentNode: jitsiContainerRef.current,
          width: '100%',
          height: '100%',
          configOverwrite: { startWithAudioMuted: true },
          interfaceConfigOverwrite: {},
          userInfo: { displayName: `${formData.firstName} ${formData.lastName}` }
        };
        new (window as any).JitsiMeetExternalAPI(domain, options);
      };
      document.body.appendChild(script);
    }
  }, [meetingReady, meetingLink, formData.firstName, formData.lastName]);

  return (
    <div>
      <div className="bg-black text-white text-sm flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2">
        <div className="flex items-center gap-4">
          <span className="text-blue-200">📞 +91 8374779361, +91 9704879361</span>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-blue-200">📧 info@studyvisum.com </span>
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

      <nav className="bg-black backdrop-blur-sm shadow-lg px-4 py-2 lg:px-6 flex justify-between items-center sticky top-0 z-50 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Image src="/Studyvisummp4logo (1) (1).gif" alt="StudyVisum Logo" width={300} height={35} className="object-contain drop-shadow-lg" />
          </div>
        </div>
        <div className="hidden lg:flex">
          <GoogleRatingComponent />
        </div>
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
        <button className="lg:hidden text-white text-2xl hover:text-blue-400 transition-colors duration-300" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm px-4 py-4 space-y-2 border-b border-slate-700">
          <div className="flex justify-center mb-4"><GoogleRatingComponent /></div>
          <Link href="/" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">HOME</Link>
          <Link href="/about" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">ABOUT US</Link>
          <Link href="/services" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">SERVICES</Link>
          <Link href="/countries" className="block text-white hover:text-blue-400 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all duration-300">COUNTRIES</Link>
          <Link href="/contact" className="block text-white bg-gradient-to-r from-blue-600 to-purple-600 py-1.5 px-3 rounded-lg">CONTACT US</Link>
          <Link href="/counselling" className="block text-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300">Book Free Counselling</Link>
        </div>
      )}

      <section className="py-12 bg-gradient-to-br from-white via-blue-50 to-purple-50 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-bounce animation-delay-500"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-red-500 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-yellow-500 rounded-full animate-bounce animation-delay-1500"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Contact Us</h2>
            <p className="text-gray-600 mb-6">Our friendly team would love to hear from you!</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="honeypot" value={formData.honeypot} onChange={handleInputChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First name *" disabled={loading} className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last name *" disabled={loading} className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100" />
              </div>
              
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email *" disabled={loading} className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100" />
              
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone number *" disabled={loading} className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100" />
              
              <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message *" rows={4} disabled={loading} className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none disabled:bg-gray-100"></textarea>

              {/* IMPROVED: Simple checkbox to request video call */}
              <div className="border-t border-gray-200 pt-4 mt-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={scheduleVideoCall}
                    onChange={(e) => setScheduleVideoCall(e.target.checked)}
                    disabled={loading}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer disabled:opacity-50"
                  />
                  <div>
                    <span className="font-medium text-gray-700">🎥 I would like to schedule a video call</span>
                    <p className="text-sm text-gray-500 mt-1">We'll contact you at the scheduled time using your email and phone above</p>
                  </div>
                </label>
              </div>

              {/* IMPROVED: Show date/time picker only if checkbox is checked */}
              {scheduleVideoCall && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📅 Select Date & Time for Video Call
                  </label>
                  <input
                    type="datetime-local"
                    value={meetingDateTime}
                    onChange={(e) => setMeetingDateTime(e.target.value)}
                    min={new Date().toISOString().slice(0,16)}
                    disabled={loading}
                    className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    ℹ️ Our team will be notified and join at this time
                  </p>
                </div>
              )}

              {submitted && (
                <div className="p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Success!</strong>
                      <p className="mt-1">Message sent successfully! Our team will get back to you soon.</p>
                      {scheduleVideoCall && meetingDateTime && (
                        <p className="mt-2 font-medium">
                          🎥 Video meeting scheduled for: {new Date(meetingDateTime).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>{error}</div>
                </div>
              )}

              <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Show meeting room when time arrives */}
              {meetingReady && meetingLink && (
                <div className="mt-6">
                  <div className="mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-800 rounded-lg">
                    <p className="font-bold">🎥 Your meeting is ready! Join now:</p>
                  </div>
                  <div className="w-full h-[500px] bg-black rounded-lg overflow-hidden">
                    <div ref={jitsiContainerRef} className="w-full h-full"></div>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <iframe className="w-full h-60 md:h-80 rounded-t-xl" src="https://www.google.com/maps?q=Flat+No.+301,+Okaz+Complex,+Opposite+to+Pillar+No.+5,+Mehdipatnam,+Hyderabad-500028&output=embed" allowFullScreen loading="lazy"></iframe>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">Email us</p>
                  <a href="mailto:info@studyvisum.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300">info@studyvisum.com</a>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">Visit us</p>
                  <p className="text-gray-600">Flat No. 301 A Block Okaz Complex, Opposite to Pillar No.5, Mehdipatnam, Hyderabad, India-500028.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">Call us</p>
                  <a href="tel:+918374779361" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300">+91 8374779361</a>
                  <br />
                  <a href="tel:+919704879361" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300">+91 9704879361</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 lg:py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Image src="/Studyvisummp4logo (1) (1).gif" alt="StudyVisum Logo" width={300} height={35} className="object-contain drop-shadow-lg" />
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-blue-300">Address</h3>
            <div className="space-y-1 text-gray-300 text-sm">
              <p>Flat No. 301 A Block Okaz Complex</p>
              <p>Opp. Pillar Number 5, Mehdipatnam</p>
              <p>Hyderabad, India-500028.</p>
            </div>
          </div>

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

        <div className="relative text-center text-gray-400 text-sm mt-8 pt-6 border-t border-gray-700">
          <p>&copy; 2025 hakeemconsultancy. All rights reserved.</p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2"></div>
        </div>
      </footer>
    </div>
  );
}