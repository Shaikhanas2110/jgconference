import React from "react";
import {
  FaRobot,
  FaDatabase,
  FaCloud,
  FaNetworkWired,
  FaLeaf,
  FaLayerGroup,
  FaUsers,
  FaMicrophone,
  FaGlobeAmericas,
  FaArrowRight,
} from "react-icons/fa";

function Tracks() {
  const tracks = [
    {
      id: 1,
      title: "Track I",
      label: "TRACK 1",
      subtitle:
        "Artificial Intelligence and Machine Learning for Sustainable Development",
      icon: <FaRobot />,
      theme: {
        badge: "bg-red-600",
        iconBg: "bg-red-50",
        iconText: "text-red-600",
        titleText: "text-red-800",
        dot: "bg-red-500",
        link: "text-red-700 hover:text-red-800",
        ring: "ring-red-100",
      },
      topics: [
        "Explainable AI (XAI) for Sustainable Decision Making",
        "AI for Sustainable Innovation",
        "Reinforcement Learning for Resource Optimization",
        "Automation in Sustainable Agriculture",
        "Machine Learning and Deep Learning Tools for Sustainable Development",
        "Predictive Maintenance using AI and ML",
        "AI-Ethics, Data Governance, and Bias Prevention",
        "Cognitive Technologies in Real-Time Sustainable Decision-Making",
        "AI-powered Chatbots and Virtual Customer Service",
        "Agent-Based System and Architecture",
        "Blockchain for Green Procurement and Ethical Sourcing",
      ],
    },
    {
      id: 2,
      title: "Track II",
      label: "TRACK 2",
      subtitle: "Internet of Things, Smart Systems, and Emerging Technologies",
      icon: <FaNetworkWired />,
      theme: {
        badge: "bg-orange-500",
        iconBg: "bg-orange-50",
        iconText: "text-orange-600",
        titleText: "text-orange-700",
        dot: "bg-orange-400",
        link: "text-orange-700 hover:text-orange-800",
        ring: "ring-orange-100",
      },
      topics: [
        "IoT and AI for Environmental Sensing and Data Collection",
        "IoT and AI for Sustainable Logistics and Waste Reduction",
        "Industrial IoT and Real-Time Monitoring",
        "Smart Healthcare and Assistive Technologies",
        "Sustainable Communication Technologies",
        "Cybersecurity in Smart Systems and Embedded Devices",
        "Digital Signal and Image Processing",
        "Agent-Based Systems and Architecture",
        "Automation in Sustainable Agriculture",
        "Cloud-based ERP and Cross-Domain Collaboration",
      ],
    },
    {
      id: 3,
      title: "Track III",
      label: "TRACK 3",
      subtitle: "Smart Finance, FinTech and Economic Sustainability",
      icon: <FaCloud />,
      theme: {
        badge: "bg-emerald-600",
        iconBg: "bg-emerald-50",
        iconText: "text-emerald-600",
        titleText: "text-emerald-700",
        dot: "bg-emerald-500",
        link: "text-emerald-700 hover:text-emerald-800",
        ring: "ring-emerald-100",
      },
      topics: [
        "Green FinTech & Sustainable Investment Analytics",
        "Robo-Advisory Systems and Algorithmic Trading Ethics",
        "Smart FinTech and Economic Sustainability",
        "Sustainable Financial Technologies",
        "Digital Financial Inclusion",
        "Financial Analytics for Sustainable Growth",
      ],
    },
    {
      id: 4,
      title: "Track IV",
      label: "TRACK 4",
      subtitle:
        "Business Intelligence and Data Analytics for Responsible Decision-Making",
      icon: <FaDatabase />,
      theme: {
        badge: "bg-blue-600",
        iconBg: "bg-blue-50",
        iconText: "text-blue-600",
        titleText: "text-blue-700",
        dot: "bg-blue-500",
        link: "text-blue-700 hover:text-blue-800",
        ring: "ring-blue-100",
      },
      topics: [
        "Big Data Analytics and Processing",
        "Business Intelligence and Analytics for Responsible Decision-Making",
        "Cognitive Technologies in Real-Time Sustainable Decision-Making",
        "Business Analytics for SDG-Oriented Strategy",
        "AI and Data Analytics for Sustainable Market Entry",
        "Adaptive and Circular Business Models for Sustainable Development",
        "Predictive and Prescriptive Models in Crisis Management",
        "Data-Driven Sustainable Decision Support Systems",
        "Intelligent Enterprise Systems",
      ],
    },
    {
      id: 5,
      title: "Track V",
      label: "TRACK 5",
      subtitle: "Entrepreneurship, Innovation, and Sustainable Startup Ecosystems",
      icon: <FaLeaf />,
      theme: {
        badge: "bg-purple-600",
        iconBg: "bg-purple-50",
        iconText: "text-purple-600",
        titleText: "text-purple-700",
        dot: "bg-purple-500",
        link: "text-purple-700 hover:text-purple-800",
        ring: "ring-purple-100",
      },
      topics: [
        "Green Innovation & Tech-enabled Sustainable Startups",
        "Smart Incubators and Accelerators for Green Ventures",
        "Startups Leveraging Smart Tech for Social Impact",
        "Startup Ecosystems & Smart Innovation Hubs",
        "Innovation Clusters and Digital Venture Networks",
        "Digital Platforms Enabling Entrepreneurial Ecosystems",
        "Entrepreneurship, Startups and Smart Innovations",
        "Sustainable Innovation Management",
      ],
    },
  ];

  const stats = [
    { icon: <FaLayerGroup />, value: "5", label: "Technical Tracks" },
    { icon: <FaUsers />, value: "200+", label: "Expected Papers" },
    { icon: <FaMicrophone />, value: "40+", label: "Speakers" },
    { icon: <FaGlobeAmericas />, value: "15+", label: "Countries" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-s font-semibold tracking-widest text-yellow-400 uppercase mb-3">
            ICSISDG 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Technical Tracks</h1>
          <p className="mt-4 text-lg md:text-xl text-red-100 max-w-2xl">
            Explore the official research tracks of ICSISDG 2026.
          </p>
        </div>
      </section>

      {/* Track cards */}
      <section className="pt-10 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="relative bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
              >
                {/* Badge */}
                <span
                  className={`absolute -top-3 left-5 ${track.theme.badge} text-white text-[11px] font-bold tracking-wide px-3 py-1 rounded-full shadow-md`}
                >
                  {track.label}
                </span>

                <div className="p-6 pt-8 flex-1 flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${track.theme.iconBg} ${track.theme.iconText} text-xl mb-4 ring-4 ${track.theme.ring}`}
                  >
                    {track.icon}
                  </div>

                  <h3
                    className={`text-base font-bold leading-snug mb-4 ${track.theme.titleText}`}
                  >
                    {track.subtitle}
                  </h3>

                  <ul className="space-y-2.5 flex-1">
                    {track.topics.slice(0, 6).map((topic, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-gray-600 leading-5"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${track.theme.dot}`}
                        ></span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Tracks;