import React from "react";
import logo from "../assets/logo.png";
import { MdLocationOn, MdPhone, MdMailOutline } from "react-icons/md";
import { FaClock } from "react-icons/fa";

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-s font-semibold tracking-widest text-yellow-400 uppercase mb-3">
            ICSISDG 2026
          </span>
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-200">
            Get in touch with the ICSISDG 2026 conference team at JG University
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: College info */}
            <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
              <img src={logo} alt="JG University" className="w-40 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-red-800">JG University</h2>
              <p className="text-gray-600 mt-2 mb-8">
                Empowering Innovation Through Research & Technology
              </p>

              <div className="space-y-6 text-left max-w-sm mx-auto">
                <div className="flex items-start gap-4">
                  <MdLocationOn className="text-red-700 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">
                      JG University Campus, Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdPhone className="text-red-700 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdMailOutline className="text-red-700 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">conference@jgu.edu.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaClock className="text-red-700 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Office Hours</p>
                    <p className="text-gray-600">Monday – Saturday, 9:00 AM – 5:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Self-made illustrative map */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4 text-center">
                Find Us Here
              </h3>
              <svg viewBox="0 0 400 320" className="w-full h-auto rounded-xl">
                <rect width="400" height="320" fill="#eef2f0" />
                {/* roads */}
                <path d="M0 100 H400" stroke="#cbd5cf" strokeWidth="12" />
                <path d="M0 230 H400" stroke="#cbd5cf" strokeWidth="12" />
                <path d="M100 0 V320" stroke="#cbd5cf" strokeWidth="12" />
                <path d="M290 0 V320" stroke="#cbd5cf" strokeWidth="12" />
                <path d="M0 100 H400" stroke="#fff" strokeWidth="2" strokeDasharray="8 6" />
                <path d="M0 230 H400" stroke="#fff" strokeWidth="2" strokeDasharray="8 6" />
                <path d="M100 0 V320" stroke="#fff" strokeWidth="2" strokeDasharray="8 6" />
                <path d="M290 0 V320" stroke="#fff" strokeWidth="2" strokeDasharray="8 6" />

                {/* green patches */}
                <circle cx="60" cy="60" r="28" fill="#bbf7d0" />
                <circle cx="350" cy="280" r="34" fill="#bbf7d0" />

                {/* campus building */}
                <rect x="150" y="120" width="110" height="90" rx="6" fill="#b91c1c" opacity="0.9" />
                <rect x="168" y="140" width="20" height="18" fill="#fff" opacity="0.85" />
                <rect x="198" y="140" width="20" height="18" fill="#fff" opacity="0.85" />
                <rect x="228" y="140" width="20" height="18" fill="#fff" opacity="0.85" />
                <rect x="168" y="168" width="20" height="18" fill="#fff" opacity="0.85" />
                <rect x="198" y="168" width="20" height="18" fill="#fff" opacity="0.85" />
                <rect x="228" y="168" width="20" height="18" fill="#fff" opacity="0.85" />

                {/* map pin */}
                <circle cx="205" cy="100" r="16" fill="#facc15" stroke="#b91c1c" strokeWidth="3" />
                <path d="M205 116 L205 120" stroke="#b91c1c" strokeWidth="3" />
                <text x="205" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7f1d1d">
                  JGU
                </text>

                <text x="205" y="245" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#374151">
                  JG University Campus
                </text>
                <text x="205" y="265" textAnchor="middle" fontSize="12" fill="#6b7280">
                  Ahmedabad, Gujarat, India
                </text>
              </svg>
              <p className="text-center text-gray-400 text-xs mt-3">
                Illustrative map for reference only — not to scale
              </p>
            </div>
          </div>

          {/* Message form */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
              Send Us a Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for reaching out! Our team will get back to you shortly.");
              }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-700 text-white py-3 rounded-lg font-bold hover:bg-red-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
