'use client';
import { useState } from 'react';

export default function CounsellingForm() {
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
    <div className="bg-red-600 text-white p-6 sm:p-8 rounded shadow w-full" style={{ marginBottom: '120px' }}>
      <h3 className="text-xl font-semibold mb-4">
        Book Free Consultation to Study 
      </h3>

      {submitted && (
        <p className="bg-green-500 text-white text-center py-2 rounded mb-4">
          ✅ Thank you! Form submitted.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        />
        {errors.name && <p className="text-yellow-200 text-sm">{errors.name}</p>}

        <input
          type="text"
          name="phone"
          placeholder="Your Mobile No."
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        />
        {errors.phone && <p className="text-yellow-200 text-sm">{errors.phone}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        />
        {errors.email && <p className="text-yellow-200 text-sm">{errors.email}</p>}

        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        >
          <option value="">--Please choose a branch--</option>
          <option>Hyderabad</option>
        </select>
        {errors.branch && <p className="text-yellow-200 text-sm">{errors.branch}</p>}

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        >
          <option value="">--Please choose a country--</option>
          <option>Australia</option>
          <option>Canada</option>
          <option>Germany</option>
          <option>USA</option>
          <option>UK</option>
          <option>Ireland</option>
          <option>Other</option>
        </select>
        {errors.country && <p className="text-yellow-200 text-sm">{errors.country}</p>}

        <input
          type="text"
          name="time"
          placeholder="Preferred Time"
          value={formData.time}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-black"
        />

        <button
          type="submit"
          className="bg-black text-white font-semibold w-full py-2 rounded hover:bg-gray-800"
        >
          Request Free Consultation
        </button>
        
      </form>
    </div>
  );
}