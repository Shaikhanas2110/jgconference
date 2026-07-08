import React, { useState } from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    country: "",
    category: "student",
  });

  const feeTable = [
    {
      category: "UG - PG Students",
      india: "₹ 3,000 /-",
    },
    {
      category: "Research Scholars",
      india: "₹ 4,000 /-",
    },
    {
      category: "Regular (Faculty / Researchers / Industry)",
      india: "₹ 5,000 /-",
    },
  ];

  const notes = [
    "All registrations include admission to all technical sessions and e-proceedings.",
    "At least one author must register to include the paper in the conference.",
    "The paper will be considered only when full registration is received.",
    "No refunds after acceptance and registration.",
    "Publisher may reject papers failing to meet quality standards.",
    "Tea/coffee, high tea & working lunch will be provided on the conference day.",
  ];

  const policies = [
    {
      title: "Refund & Cancellation",
      points: ["Conference fees are non-refundable.", "All rights are reserved by the Conference Secretariat."],
    },
    {
      title: "Payment Policy",
      points: ["Payments must be made in INR or USD.", "No registration will be confirmed without full payment.", "Only online payments (Visa/MasterCard) are accepted."],
    },
    {
      title: "Terms & Conditions",
      points: ["Registration must be completed before deadlines.", "Terms may change according to government norms and regulations."],
    },
    {
      title: "Privacy Policy",
      points: ["Photography and videography may take place during the event.", "Attendance grants permission for media usage for promotional purposes."],
    },
    {
      title: "Publication Policy",
      points: ["Publication with any specific publisher is not guaranteed.", "Indexing is not guaranteed; indexing bodies act independently."],
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

  const scrollToRegisterForm = (e) => {
    e.preventDefault();
    const el = document.getElementById("register-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Registration</h1>
          <p className="mt-4 text-xl text-gray-200">
            Join us for ICSISDG 2026 - 22 November 2026
          </p>
        </div>
      </section>

      {/* Registration Category and Fees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Registration Category and Fees
            </h2>
            <p className="text-gray-600 leading-8">
              On behalf of the Organizing Committee of{" "}
              <span className="font-bold text-red-800">ICSISDG 2026</span>, we
              take pleasure in inviting you to the{" "}
              <span className="font-bold text-red-800">
                International Conference on Smart Innovation for Sustainable
                Development Goals
              </span>
              , to be held on{" "}
              <span className="font-bold text-red-800">22 November 2026</span>.
            </p>
          </div>

          {/* Fee Table - Desktop */}
          <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-red-800 text-white">
                  <th className="text-left px-6 py-4 font-bold">Author Category</th>
                  <th className="text-left px-6 py-4 font-bold">India</th>
                  <th className="text-left px-6 py-4 font-bold">Register</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {feeTable.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-5 text-gray-700 font-semibold">{row.category}</td>
                    <td className="px-6 py-5 text-red-700 font-bold">{row.india}</td>
                    <td className="px-6 py-5">
                      <a
                        href="#register-form"
                        onClick={scrollToRegisterForm}
                        className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 transition text-sm"
                      >
                        Register <FaArrowRight className="text-xs" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fee Table - Mobile Cards */}
          <div className="md:hidden space-y-4">
            {feeTable.map((row, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="bg-red-800 text-white px-5 py-3">
                  <p className="font-bold">{row.category}</p>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm font-semibold">India</span>
                    <span className="text-red-700 font-bold">{row.india}</span>
                  </div>
                  <a
                    href="#register-form"
                    onClick={scrollToRegisterForm}
                    className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 text-red-900 px-4 py-2.5 rounded-lg font-bold hover:bg-yellow-300 transition text-sm mt-2"
                  >
                    Register <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8 mt-10">
            <h3 className="text-xl font-bold text-red-800 mb-4">Note</h3>
            <ul className="space-y-3">
              {notes.map((note, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>



      {/* Registration Packages (visual summary) */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">
            What's Included
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Student",
                price: "₹ 3,000",
                features: ["Conference Access", "Proceedings", "Certificate", "Networking Events"],
              },
              {
                category: "Researchers",
                price: "₹ 5,000",
                features: ["Conference Access", "Proceedings", "Certificate", "Networking Events", "Lunch & Refreshments"],
                highlighted: true,
              },
              {
                category: "Co-Author",
                price: "₹ 2,000",
                features: ["Conference Access", "Proceedings", "Certificate"],
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl ${pkg.highlighted
                    ? "ring-2 ring-yellow-400 transform md:scale-105 hover:md:scale-[1.08]"
                    : "hover:ring-2 hover:ring-red-300"
                  }`}
              >
                <div className="bg-red-700 text-white p-6 transition-colors duration-300 group-hover:bg-red-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-2xl font-bold relative">{pkg.category}</h3>
                  <p className="text-3xl font-bold mt-4 relative transition-transform duration-300 group-hover:scale-110 origin-left">
                    {pkg.price}
                  </p>
                </div>
                <div className="bg-white p-6">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-600 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 40}ms` }}
                      >
                        <FaCheck className="text-green-500 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#register-form"
                    onClick={scrollToRegisterForm}
                    className={`relative overflow-hidden block text-center w-full mt-6 py-3 rounded-lg font-bold transition-all duration-300 ${pkg.highlighted
                        ? "bg-yellow-400 text-red-900 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/50"
                        : "bg-red-700 text-white hover:bg-red-800 hover:shadow-lg hover:shadow-red-700/50"
                      } hover:tracking-wide`}
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Registration Form */}
      <section id="register-form" className="py-20 bg-white scroll-mt-20">
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
                <option value="student">Research Scholars / UG - PG Students</option>
                <option value="regular">Regular (Faculty / Researchers / Industry)</option>
                <option value="coauthor">Co-Author Registration</option>
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

      {/* Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">
            Policies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-700 rounded-lg p-6">
                <h3 className="font-bold text-red-800 mb-3">{policy.title}</h3>
                <ul className="space-y-2">
                  {policy.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
            About Conference
          </h2>
          <div className="bg-red-50 border-l-4 border-yellow-400 rounded-lg p-8">
            <p className="text-gray-700 leading-8">
              The International Conference on Smart Innovation for Sustainable
              Development Goals (ICSISDG 2026) aims to bring together
              researchers, academicians, industry professionals, and thought
              leaders from around the globe to discuss advancements,
              challenges, and opportunities in the rapidly evolving domains of
              smart technologies and sustainability. The conference provides a
              platform for interdisciplinary dialogue and collaboration,
              fostering innovative solutions that integrate smart innovation
              with sustainable development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;