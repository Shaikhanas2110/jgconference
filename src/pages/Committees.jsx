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
          members: ["Placeholder Name 1, Institution", "Placeholder Name 2, Institution"],
        },
        {
          groupTitle: "Publication Committee",
          members: ["Placeholder Name 1 (Convener), Institution", "Placeholder Name 2, Institution"],
        },
        {
          groupTitle: "Registration and Invitation Committee",
          members: ["Placeholder Name 1 (Convener), Institution", "Placeholder Name 2, Institution"],
        },
        {
          groupTitle: "Website, Publicity and Brochure Committee",
          members: ["Placeholder Name 1 (Convener), Institution", "Placeholder Name 2, Institution"],
        },
        {
          groupTitle: "Session Chairs Committee",
          members: ["Placeholder Name 1 (Convener), Institution", "Placeholder Name 2, Institution"],
        },
        {
          groupTitle: "Finance Committee",
          members: ["Placeholder Name 1 (Convener), Institution", "Placeholder Name 2, Institution"],
        },
        {
          groupTitle: "Logistics Committee",
          members: ["Placeholder Name 1 (Convener), Institution", "Placeholder Name 2, Institution"],
        },
        {
          groupTitle: "Food and Hospitality Committee",
          members: ["Placeholder Name 1 (Convener), Institution", "Placeholder Name 2, Institution"],
        },
        {
          groupTitle: "Inauguration, Anchoring and Valedictory Session Committee",
          members: ["Placeholder Name 1 (Convener), Institution", "Placeholder Name 2, Institution"],
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = sections[activeIndex];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Committees</h1>
          <p className="mt-4 text-xl text-gray-200">
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
                    className={`w-full text-left px-5 py-4 flex items-center justify-between gap-2 border-b border-gray-100 last:border-b-0 transition-colors ${activeIndex === index
                        ? "bg-red-800 text-white font-semibold"
                        : "text-gray-700 hover:bg-red-50"
                      }`}
                  >
                    <span>{section.title}</span>
                    <FaChevronRight
                      className={`text-xs flex-shrink-0 ${activeIndex === index ? "text-yellow-400" : "text-gray-300"
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
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">
            International Advisory Board
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Placeholder Name 1, Institution",
              "Placeholder Name 2, Institution",
              "Placeholder Name 3, Institution",
              "Placeholder Name 4, Institution",
              "Placeholder Name 5, Institution",
              "Placeholder Name 6, Institution",
            ].map((member, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 text-center shadow-lg">
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