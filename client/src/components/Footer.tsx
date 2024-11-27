import React, { useState } from 'react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold pb-4">ANY ISSUES...??</h2>
        <p className="text-lg pb-8">We'd love to hear from you! Please fill out the form below explaning your issue faced and we'll get back to you soon.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full sm:w-1/2 px-6 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full sm:w-1/2 px-6 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          
          <button
            type="submit"
            className="w-[30] bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </footer>
  );
}
