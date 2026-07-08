import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    country: "",
    category: "student",
  });

  const registrationCategories = [
    {
      category: "Student",
      price: "₹3,000",
      features: ["Conference Access", "Proceedings", "Certificate", "Networking Events"],
    },
    {
      category: "Researchers",
      price: "₹4,000",
      features: ["Conference Access", "Proceedings", "Certificate", "Networking Events", "Lunch & Refreshments"],
      highlighted: true,
    },
    {
      category: "Faculties ",
      price: "₹5,000",
      features: ["Conference Access", "Proceedings", "Certificate", "Networking Events", "Lunch & Refreshments", "Booth Space"],
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    alert("Registration submitted successfully! You will receive a confirmation email shortly.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Register Now</h1>
          <p className="mt-4 text-xl text-gray-200">
            Join us for ICSISDG 2026 - 27 November at JG University, Ahmedabad
          </p>
        </div>
      </section>

      {/* Registration Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">Registration Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {registrationCategories.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg transition ${pkg.highlighted
                    ? "ring-2 ring-yellow-400 transform md:scale-105"
                    : ""
                  }`}
              >
                <div className="bg-red-700 text-white p-6">
                  <h3 className="text-2xl font-bold">{pkg.category}</h3>
                  <p className="text-3xl font-bold mt-4">{pkg.price}</p>
                </div>
                <div className="bg-white p-6">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <FaCheck className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full mt-6 py-3 rounded-lg font-bold transition ${pkg.highlighted
                        ? "bg-yellow-400 text-red-900 hover:bg-yellow-300"
                        : "bg-red-700 text-white hover:bg-red-800"
                      }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-10">
            Registration Form
          </h2>
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Affiliation *</label>
                <input
                  type="text"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  placeholder="University/Organization"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Country *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  placeholder="Your country"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Registration Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
              >
                <option value="student">Student (₹3,000)</option>
                <option value="academic">Researchers (₹4,000)</option>
                <option value="industry">Faculties  (₹5,000)</option>
              </select>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-sm">
                By registering, you agree to our Terms & Conditions and will receive conference updates via email.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 rounded-lg font-bold hover:bg-red-800 transition"
            >
              Complete Registration
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Registration;
