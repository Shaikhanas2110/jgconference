import React from "react";
import {
  FaCalendar,
  FaFileAlt,
  FaGlobeAmericas,
  FaMicrophoneAlt,
  FaThLarge,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";
import image from '../assets/image.jpeg';

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
        {/* faint dotted network texture */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        ></div>

        {/* diagonal light-streak / network lines, confined to the right side behind the photo */}
        <svg
          className="absolute inset-y-0 right-0 w-[60%] h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 660 500"
        >
          <line x1="60" y1="0" x2="500" y2="500" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line x1="150" y1="0" x2="600" y2="500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="300" y1="0" x2="660" y2="380" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="0" y1="120" x2="660" y2="330" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="0" y1="300" x2="450" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="200" y1="0" x2="660" y2="260" stroke="rgba(250,204,21,0.18)" strokeWidth="1.5" />
          <line x1="380" y1="0" x2="660" y2="180" stroke="rgba(250,204,21,0.12)" strokeWidth="1" />
          <circle cx="500" cy="500" r="2.5" fill="rgba(250,204,21,0.6)" />
          <circle cx="600" cy="500" r="2" fill="rgba(255,255,255,0.5)" />
          <circle cx="450" cy="0" r="2" fill="rgba(255,255,255,0.5)" />
          <circle cx="660" cy="260" r="2.5" fill="rgba(250,204,21,0.5)" />
        </svg>

        {/* campus photo as full banner background */}
        <img
          src={image}
          alt="JG University campus"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* ADJUSTED: Lighter overlay gradients to match the base section */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-900/85 to-red-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 min-h-[560px] flex items-center">
          <div className="max-w-2xl py-14 mt-10 flex flex-col items-center">
            <h1 className="text-6xl font-bold leading-tight text-center">
              ICSISDG 2026
            </h1>
            <p className="mt-4 text-3xl text-white-200 max-w-xl text-center">
              International Conference on Smart Innovation for Sustainable
              Development Goals
            </p>
            <p className="mt-3 text-lg text-gray-300 text-center">
              Organized In-person and Online (Hybrid Mode) by{" "}
            </p>
            <p className="font-semibold text-lg text-yellow-400 text-center">
              School of Computing
            </p>

            {/* Metadata items */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-yellow-400" />
                <span>
                  JG University
                  <br />
                  Ahmedabad, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar className="text-yellow-400" />
                <span>19 &ndash; 21 November, 2026</span>
              </div>
            </div>

            {/* Buttons container */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <NavLink to="/registration">
                <button className="bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-yellow-300 transition-colors">
                  Submit Paper
                </button>
              </NavLink>
              <NavLink to="/registration">
                <button className="border border-white/50 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors">
                  Register Now
                </button>
              </NavLink>
            </div>
          </div>

          {/* countdown card, floating on the right side of the banner */}
          {/* ADJUSTED: Changed bg-red-950/80 to bg-red-900/80 */}
          <div className="hidden md:block absolute bottom-8 right-6 w-[420px] bg-red-900/80 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 shadow-xl">
            <span className="block text-sm font-medium text-gray-200 mb-3">
              Conference Starts In
            </span>
            <div className="flex gap-10">
              {[
                ["120", "Days"],
                ["14", "Hours"],
                ["32", "Minutes"],
                ["10", "Seconds"],
              ].map(([num, label], i) => (
                <div key={i} className="text-center pl-6 first:pl-0">
                  <p className="text-2xl font-bold text-yellow-400">{num}</p>
                  <p className="text-[11px] uppercase tracking-wide text-white-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* countdown card, mobile version */}
        {/* ADJUSTED: Changed bg-red-950/80 to bg-red-900/80 */}
        <div className="md:hidden relative px-6 pb-8 -mt-6">
          <div className="inline-flex flex-wrap items-center gap-5 bg-red-900/80 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
            <span className="text-sm font-medium text-gray-200">
              Conference Starts In
            </span>
            <div className="flex gap-5">
              {[
                ["120", "Days"],
                ["14", "Hours"],
                ["32", "Minutes"],
                ["10", "Seconds"],
              ].map(([num, label], i) => (
                <div key={i} className="text-center">
                  <p className="text-xl font-bold text-yellow-400">{num}</p>
                  <p className="text-[11px] uppercase tracking-wide text-gray-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* stats strip */}
        {/* ADJUSTED: Swapped bg-red-800/60 for bg-red-700/60 to keep the icons popping */}
        <div className="relative mt-14 border-t border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:divide-x sm:divide-white/10">
            {[
              [FaFileAlt, "500+", "Research Papers"],
              [FaGlobeAmericas, "30+", "Countries"],
              [FaMicrophoneAlt, "80+", "Speakers"],
              [FaThLarge, "10+", "Tracks"],
            ].map(([Icon, num, label], i) => (
              <div key={i} className="flex items-center gap-3 sm:pl-6 first:sm:pl-0">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-700/60 text-yellow-400 shrink-0">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="text-2xl font-bold text-yellow-400 leading-none">{num}</p>
                  <p className="text-xs text-gray-300 mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
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

      <section className="py-10" style={{ backgroundColor: "#FBF3E7" }}>
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

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl font-bold text-red-800 mb-3 py-3">
                Contact Us
              </h2>
              <div className="space-y-1 text-gray-700 mb-6">
                <p className="font-semibold text-red-700">JG University</p>
                <p>Drive in road, Ahmedabad, India</p>
                <p>Email: [email protected]</p>
                <p>Phone: [phone number]</p>
              </div>
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
              <div className="flex justify-center">
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    title="JG University Location"
                    src="https://www.google.com/maps?q=JG+University+Ahmedabad&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}

export default Home;