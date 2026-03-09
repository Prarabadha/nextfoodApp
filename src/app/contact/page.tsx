"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      alert("Thank you for your message! We will get back to you soon.");
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Contact Info & Decor */}
        <div className="md:w-5/12 bg-red-600 text-white p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-red-100 mb-8 leading-relaxed">
              Have questions about our menu, seating, or catering options? Fill
              out the form and our team will get back to you shortly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <span>123 Pizza Street, Food City, FC 90210</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <span>support@nextfood.com</span>
              </div>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -bottom-20 -right-20 pointer-events-none"></div>
          <div className="absolute w-48 h-48 bg-red-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -top-10 -left-10 pointer-events-none"></div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-7/12 p-10 lg:p-14">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Send us a Message
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors outline-none"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors outline-none"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors outline-none"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors outline-none resize-none"
                placeholder="How can we help you today?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
