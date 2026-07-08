import React from "react";
import { FaCalendar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold leading-tight">
            ICSISDG 2026
          </h1>
          <p className="mt-6 text-2xl text-gray-200">
            International Conference on Smart Innovation for Sustainable
            Development Goals
          </p>
          <p className="mt-4 text-lg text-gray-200">
            Organized In-person and Online (Hybrid Mode) by
          </p>
          <p className="mt-1 text-lg font-semibold text-yellow-400">
            School of Computing
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-yellow-400" />
              <span>JG University, Ahmedabad</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-yellow-400" />
              <span>November, 2026</span>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <NavLink to="/registration">
              <button className="bg-yellow-400 text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300">
                Submit Paper
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://placehold.co/600x450/fee2e2/991b1b?text=Conference+Image"
              alt="ICSISDG 2026 Conference"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
            <div>
              <p className="text-red-700 font-semibold uppercase tracking-wide mb-2">
                International Conference on Smart Innovation for Sustainable
                Development Goals (ICSISDG 2026)
              </p>
              <h2 className="text-4xl font-bold text-red-800 mb-6">
                About ICSISDG 2026
              </h2>
              <p className="text-gray-700 leading-8 mb-4">
                The International Conference on Smart Innovation for Sustainable
                Development Goals (ICSISDG 2026) offers a global platform for
                academics, researchers, industry professionals, scientists, and
                scholars to present innovative research, exchange ideas, and
                explore emerging technologies that support the Sustainable
                Development Goals (SDGs).
              </p>
              <p className="text-gray-700 leading-8 mb-4">
                The conference emphasizes interdisciplinary research in
                Artificial Intelligence and Machine Learning for Sustainable
                Development, the Internet of Things (IoT), Smart Systems,
                Emerging Technologies, Smart Finance and FinTech, Business
                Intelligence and Data Analytics, Entrepreneurship, Innovation,
                and Sustainable Startup Ecosystems. It aims to foster
                collaboration among academia, industry, and policymakers to
                develop intelligent, sustainable solutions to real-world
                challenges.
              </p>
              <p className="text-gray-700 leading-8">
                ICSISDG 2026 will feature keynote lectures, invited talks,
                technical paper presentations, panel discussions, tutorials,
                and workshops, providing an excellent forum for knowledge
                sharing, networking, and the promotion of research excellence
                toward a smarter and more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#FBF3E7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-red-800 mb-16">
            Important Dates
          </h2>
          <div className="relative">
            <div
              className="absolute left-0 right-0 h-1 bg-yellow-400"
              style={{ top: "8px" }}
            ></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3">
              {[
                ["30 September 2026", "Submission Deadline"],
                ["24 October 2026", "Acceptance Notification"],
                ["31 October 2026", "Registration Deadline"],
                ["6 November 2026", "Camera Ready Submission"],
                ["14 November 2026", "Conference Schedule"],
                ["27 November 2026", "Conference Starts"],
              ].map((d, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-md relative z-10 mb-6"></div>
                  <div className="bg-white rounded-2xl shadow-lg px-4 py-6 text-center w-full">
                    <p className="font-bold text-yellow-500">{d[0]}</p>
                    <p className="text-gray-700 mt-3 text-sm">{d[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-red-800 mb-6">
                About JG University
              </h2>
              <p className="text-gray-700 leading-8 mb-4">
                JG University is a new-age, technology-driven university
                committed to delivering future-focused education aligned with
                evolving industry needs and global academic standards. It
                offers undergraduate, postgraduate, doctoral and professional
                programmes across Engineering, Computer Science, Management,
                Commerce, Law, Science & Technology, and Investigative &
                Applied Sciences.
              </p>
              <p className="text-gray-700 leading-8">
                Sponsored by the ASIA Charitable Trust (established in 1965),
                JG University builds on more than six decades of educational
                excellence, preparing globally competent professionals
                committed to sustainable development.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-red-800 mb-6">
                Contact Us
              </h2>
              <div className="space-y-2 text-gray-700 mb-6">
                <p className="font-semibold text-red-700">JG University</p>
                <p>[Address line 1, Address line 2]</p>
                <p>Ahmedabad, Gujarat, India</p>
                <p>Email: [email protected]</p>
                <p>Phone: [phone number]</p>
              </div>
              <div className="w-full h-72 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="JG University Location"
                  src="https://www.google.com/maps?q=JG+University+Ahmedabad&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;