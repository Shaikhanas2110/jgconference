import React, { useState } from "react";
import { FaUser, FaChevronRight } from "react-icons/fa";

function Committees() {
  // Main committee sections (titles copied from reference structure)
  const sections = [
    {
      title: "Chief Patron & Patron",
      members: [
        "Placeholder Name 1, Designation, Institution",
        "Placeholder Name 2, Designation, Institution",
        "Placeholder Name 3, Designation, Institution",
        "Placeholder Name 4, Designation, Institution",
      ],
    },
    {
      title: "General Chair",
      members: [
        "Placeholder Name 1, Institution",
        "Placeholder Name 2, Institution",
        "Placeholder Name 3, Institution",
      ],
    },
    {
      title: "Program Chair",
      members: [
        "Placeholder Name 1, Institution",
        "Placeholder Name 2, Institution",
        "Placeholder Name 3, Institution",
      ],
    },
    {
      title: "Steering Committee",
      members: [
        "Placeholder Name 1, Institution",
        "Placeholder Name 2, Institution",
        "Placeholder Name 3, Institution",
        "Placeholder Name 4, Institution",
      ],
    },
    {
      title: "Technical Program Committee",
      members: [
        "Placeholder Name 1, Institution",
        "Placeholder Name 2, Institution",
        "Placeholder Name 3, Institution",
        "Placeholder Name 4, Institution",
      ],
    },
    {
      title: "National Advisory Board",
      members: [
        "Placeholder Name 1, Institution",
        "Placeholder Name 2, Institution",
        "Placeholder Name 3, Institution",
      ],
    },
    {
      title: "Organizing Committee",
      isGrouped: true,
      groups: [
        {
          groupTitle: "Organizing Chairs",
          members: [
            "Placeholder Name 1, Institution",
            "Placeholder Name 2, Institution",
          ],
        },
        {
          groupTitle: "Publication Committee",
          members: [
            "Placeholder Name 1 (Convener), Institution",
            "Placeholder Name 2, Institution",
          ],
        },
        {
          groupTitle: "Registration and Invitation Committee",
          members: [
            "Placeholder Name 1 (Convener), Institution",
            "Placeholder Name 2, Institution",
          ],
        },
        {
          groupTitle: "Website, Publicity and Brochure Committee",
          members: [
            "Placeholder Name 1 (Convener), Institution",
            "Placeholder Name 2, Institution",
          ],
        },
        {
          groupTitle: "Session Chairs Committee",
          members: [
            "Placeholder Name 1 (Convener), Institution",
            "Placeholder Name 2, Institution",
          ],
        },
        {
          groupTitle: "Finance Committee",
          members: [
            "Placeholder Name 1 (Convener), Institution",
            "Placeholder Name 2, Institution",
          ],
        },
        {
          groupTitle: "Logistics Committee",
          members: [
            "Placeholder Name 1 (Convener), Institution",
            "Placeholder Name 2, Institution",
          ],
        },
        {
          groupTitle: "Food and Hospitality Committee",
          members: [
            "Placeholder Name 1 (Convener), Institution",
            "Placeholder Name 2, Institution",
          ],
        },
        {
          groupTitle:
            "Inauguration, Anchoring and Valedictory Session Committee",
          members: [
            "Placeholder Name 1 (Convener), Institution",
            "Placeholder Name 2, Institution",
          ],
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = sections[activeIndex];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-red-800 to-red-900 text-white py-10">
        {/* Plexus network line pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-55 pointer-events-none mix-blend-screen"
          viewBox="0 0 700 320"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <line
            x1="44.5"
            y1="122.1"
            x2="78.1"
            y2="139.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="603.2"
            y1="184.8"
            x2="554.5"
            y2="135.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="55.9"
            y1="74.5"
            x2="63.6"
            y2="15.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="670.0"
            y1="107.7"
            x2="698.3"
            y2="163.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="613.5"
            y1="100.7"
            x2="554.5"
            y2="135.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="580.6"
            y1="197.9"
            x2="603.2"
            y2="184.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="192.5"
            y1="71.4"
            x2="160.3"
            y2="10.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="565.0"
            y1="233.5"
            x2="590.0"
            y2="248.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="259.1"
            y1="67.0"
            x2="220.8"
            y2="85.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="692.7"
            y1="204.8"
            x2="697.3"
            y2="169.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="375.4"
            y1="311.4"
            x2="389.9"
            y2="219.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="64.9"
            y1="30.9"
            x2="63.6"
            y2="15.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="454.9"
            y1="174.4"
            x2="458.8"
            y2="126.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="159.5"
            y1="92.6"
            x2="185.4"
            y2="78.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="670.0"
            y1="107.7"
            x2="613.5"
            y2="100.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="18.6"
            y1="63.6"
            x2="64.9"
            y2="30.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="445.0"
            y1="116.7"
            x2="458.8"
            y2="126.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="70.7"
            y1="89.0"
            x2="114.4"
            y2="121.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="640.2"
            y1="146.8"
            x2="697.3"
            y2="169.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="295.3"
            y1="9.5"
            x2="259.1"
            y2="67.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="670.0"
            y1="107.7"
            x2="640.2"
            y2="146.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="454.9"
            y1="174.4"
            x2="477.2"
            y2="171.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="70.7"
            y1="89.0"
            x2="44.5"
            y2="122.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="565.0"
            y1="233.5"
            x2="580.6"
            y2="197.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="76.8"
            y1="200.8"
            x2="78.1"
            y2="139.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="515.5"
            y1="216.5"
            x2="453.6"
            y2="194.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="692.7"
            y1="204.8"
            x2="698.3"
            y2="163.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="154.3"
            y1="188.6"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="55.9"
            y1="74.5"
            x2="70.7"
            y2="89.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="593.2"
            y1="193.2"
            x2="603.2"
            y2="184.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="564.1"
            y1="223.4"
            x2="565.0"
            y2="233.5"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="453.6"
            y1="194.9"
            x2="389.9"
            y2="219.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="192.5"
            y1="71.4"
            x2="159.5"
            y2="92.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="458.8"
            y1="126.6"
            x2="477.2"
            y2="171.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="192.5"
            y1="71.4"
            x2="185.4"
            y2="78.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="624.5"
            y1="27.8"
            x2="670.0"
            y2="107.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="698.3"
            y1="163.0"
            x2="697.3"
            y2="169.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="295.3"
            y1="9.5"
            x2="238.2"
            y2="49.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="640.2"
            y1="146.8"
            x2="698.3"
            y2="163.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="580.6"
            y1="197.9"
            x2="554.5"
            y2="135.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="220.8"
            y1="85.7"
            x2="185.4"
            y2="78.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="238.2"
            y1="49.8"
            x2="259.1"
            y2="67.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="603.2"
            y1="184.8"
            x2="640.2"
            y2="146.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="453.6"
            y1="194.9"
            x2="477.2"
            y2="171.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="238.2"
            y1="49.8"
            x2="220.8"
            y2="85.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="259.1"
            y1="67.0"
            x2="279.6"
            y2="70.2"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="18.6"
            y1="63.6"
            x2="55.9"
            y2="74.5"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="159.5"
            y1="92.6"
            x2="114.4"
            y2="121.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="186.9"
            y1="299.7"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="613.5"
            y1="100.7"
            x2="640.2"
            y2="146.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="515.5"
            y1="216.5"
            x2="565.0"
            y2="233.5"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="76.8"
            y1="200.8"
            x2="8.0"
            y2="230.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="265.0"
            y1="176.7"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="119.8"
            y1="233.3"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="692.7"
            y1="204.8"
            x2="679.8"
            y2="275.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="580.6"
            y1="197.9"
            x2="590.0"
            y2="248.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="447.6"
            y1="8.0"
            x2="493.2"
            y2="14.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="119.8"
            y1="233.3"
            x2="76.8"
            y2="200.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="153.0"
            y1="161.7"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="624.5"
            y1="27.8"
            x2="566.6"
            y2="2.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="593.2"
            y1="193.2"
            x2="580.6"
            y2="197.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="159.5"
            y1="92.6"
            x2="160.3"
            y2="10.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="18.6"
            y1="63.6"
            x2="63.6"
            y2="15.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="564.1"
            y1="223.4"
            x2="593.2"
            y2="193.2"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="515.5"
            y1="216.5"
            x2="564.1"
            y2="223.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="564.1"
            y1="223.4"
            x2="590.0"
            y2="248.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="447.6"
            y1="8.0"
            x2="393.0"
            y2="84.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="454.9"
            y1="174.4"
            x2="453.6"
            y2="194.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="153.0"
            y1="161.7"
            x2="154.3"
            y2="188.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="375.4"
            y1="311.4"
            x2="317.6"
            y2="305.2"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="458.8"
            y1="126.6"
            x2="393.0"
            y2="84.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <circle cx="447.6" cy="8.0" r="1.2" fill="white" opacity="0.5" />
          <circle cx="192.5" cy="71.4" r="2.8" fill="white" opacity="0.9" />
          <circle cx="515.5" cy="216.5" r="1.2" fill="white" opacity="0.5" />
          <circle cx="624.5" cy="27.8" r="2.8" fill="white" opacity="0.9" />
          <circle cx="295.3" cy="9.5" r="1.2" fill="white" opacity="0.5" />
          <circle cx="153.0" cy="161.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="18.6" cy="63.6" r="2.8" fill="white" opacity="0.9" />
          <circle cx="454.9" cy="174.4" r="2.8" fill="white" opacity="0.9" />
          <circle cx="154.3" cy="188.6" r="1.2" fill="white" opacity="0.5" />
          <circle cx="566.6" cy="2.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="564.1" cy="223.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="238.2" cy="49.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="670.0" cy="107.7" r="2.8" fill="white" opacity="0.9" />
          <circle cx="64.9" cy="30.9" r="2.8" fill="white" opacity="0.9" />
          <circle cx="593.2" cy="193.2" r="1.2" fill="white" opacity="0.5" />
          <circle cx="565.0" cy="233.5" r="2.8" fill="white" opacity="0.9" />
          <circle cx="375.4" cy="311.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="265.0" cy="176.7" r="2.2" fill="white" opacity="0.9" />
          <circle cx="580.6" cy="197.9" r="1.2" fill="white" opacity="0.5" />
          <circle cx="603.2" cy="184.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="493.2" cy="14.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="159.5" cy="92.6" r="1.2" fill="white" opacity="0.5" />
          <circle cx="55.9" cy="74.5" r="1.2" fill="white" opacity="0.5" />
          <circle cx="70.7" cy="89.0" r="1.2" fill="white" opacity="0.5" />
          <circle cx="445.0" cy="116.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="259.1" cy="67.0" r="2.8" fill="white" opacity="0.9" />
          <circle cx="186.9" cy="299.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="453.6" cy="194.9" r="1.2" fill="white" opacity="0.5" />
          <circle cx="119.8" cy="233.3" r="2.2" fill="white" opacity="0.9" />
          <circle cx="114.4" cy="121.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="692.7" cy="204.8" r="2.8" fill="white" opacity="0.9" />
          <circle cx="389.9" cy="219.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="590.0" cy="248.3" r="1.2" fill="white" opacity="0.5" />
          <circle cx="160.3" cy="10.3" r="2.2" fill="white" opacity="0.9" />
          <circle cx="220.8" cy="85.7" r="2.8" fill="white" opacity="0.9" />
          <circle cx="147.7" cy="301.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="613.5" cy="100.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="458.8" cy="126.6" r="2.8" fill="white" opacity="0.9" />
          <circle cx="640.2" cy="146.8" r="2.8" fill="white" opacity="0.9" />
          <circle cx="185.4" cy="78.9" r="2.2" fill="white" opacity="0.9" />
          <circle cx="393.0" cy="84.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="409.2" cy="287.3" r="2.8" fill="white" opacity="0.9" />
          <circle cx="279.6" cy="70.2" r="1.2" fill="white" opacity="0.5" />
          <circle cx="698.3" cy="163.0" r="1.2" fill="white" opacity="0.5" />
          <circle cx="63.6" cy="15.1" r="2.2" fill="white" opacity="0.9" />
          <circle cx="76.8" cy="200.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="554.5" cy="135.1" r="2.2" fill="white" opacity="0.9" />
          <circle cx="44.5" cy="122.1" r="2.8" fill="white" opacity="0.9" />
          <circle cx="697.3" cy="169.3" r="2.2" fill="white" opacity="0.9" />
          <circle cx="679.8" cy="275.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="8.0" cy="230.6" r="1.2" fill="white" opacity="0.5" />
          <circle cx="477.2" cy="171.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="186.8" cy="205.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="78.1" cy="139.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="317.6" cy="305.2" r="1.2" fill="white" opacity="0.5" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block text-s font-semibold tracking-widest text-yellow-400 uppercase mb-3">
            ICSISDG 2026
          </span>
          <h1 className="text-5xl font-bold">Committees</h1>
          <p className="mt-4 text-xl text-red-100">
            Meet the organizing committees driving ICSISDG 2026
          </p>
        </div>
      </section>

      {/* Committees Section - Sidebar + Content Layout */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left px-5 py-4 flex items-center justify-between gap-2 border-b border-gray-100 last:border-b-0 transition-colors ${
                      activeIndex === index
                        ? "bg-red-800 text-white font-semibold"
                        : "text-gray-700 hover:bg-red-50"
                    }`}
                  >
                    <span>{section.title}</span>
                    <FaChevronRight
                      className={`text-xs flex-shrink-0 ${
                        activeIndex === index
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-red-800 mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-yellow-400 rounded-full"></span>
                  {active.title}
                </h2>

                {!active.isGrouped ? (
                  <div className="space-y-4">
                    {active.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <span className="w-9 h-9 flex-shrink-0 bg-red-800 rounded-full flex items-center justify-center text-white">
                          <FaUser className="text-sm" />
                        </span>
                        <p className="text-gray-700">{member}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {active.groups.map((group, gIdx) => (
                      <div key={gIdx}>
                        <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-red-900 text-xs font-bold">
                            {gIdx + 1}
                          </span>
                          {group.groupTitle}
                        </h3>
                        <div className="space-y-3 pl-8">
                          {group.members.map((member, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
                            >
                              <span className="w-8 h-8 flex-shrink-0 bg-red-800 rounded-full flex items-center justify-center text-white">
                                <FaUser className="text-xs" />
                              </span>
                              <p className="text-gray-700 text-sm">{member}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Advisory Board */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Placeholder Name 1, Institution",
              "Placeholder Name 2, Institution",
              "Placeholder Name 3, Institution",
              "Placeholder Name 4, Institution",
              "Placeholder Name 5, Institution",
              "Placeholder Name 6, Institution",
            ].map((member, index) => (
              <div
                key={index}
                className="bg-red-50 rounded-xl p-6 text-center shadow-lg"
              >
                <FaUser className="text-red-700 text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Committees;
