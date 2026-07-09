import React from "react";
import {
  FaRobot,
  FaDatabase,
  FaCloud,
  FaNetworkWired,
  FaLeaf,
} from "react-icons/fa";

function Tracks() {
  const tracks = [
    {
      id: 1,
      title: "Track I",
      subtitle:
        "Track 1 :- Artificial Intelligence and Machine Learning for Sustainable Development",
      icon: <FaRobot />,
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
      subtitle:
        "Track 2 :- Internet of Things, Smart Systems, and Emerging Technologies",
      icon: <FaNetworkWired />,
      description:
        "Innovative research in IoT, smart systems, embedded technologies and intelligent communication.",
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
      subtitle: "Track 3 :- Smart Finance, FinTech and Economic Sustainability",
      icon: <FaCloud />,
      description:
        "Emerging financial technologies and intelligent economic systems.",
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
      subtitle:
        "Track 4 :- Business Intelligence and Data Analytics for Responsible Decision-Making",
      icon: <FaDatabase />,
      description:
        "Advanced analytics and business intelligence for sustainable organizations.",
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
      subtitle:
        "Track 5 :- Entrepreneurship, Innovation, and Sustainable Startup Ecosystems",
      icon: <FaLeaf />,
      description:
        "Research on entrepreneurship, innovation ecosystems and sustainable startups.",
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

  return (
    <>
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Technical Tracks</h1>
          <p className="mt-4 text-xl text-gray-200">
            Explore the official research tracks of ICSISDG 2026.
          </p>
        </div>
      </section>

      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {tracks.map((track) => (
              <div
                key={track.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col ${track.id === 5 ? "lg:col-span-2 lg:max-w-[calc(50%-1rem)] lg:mx-auto lg:w-full" : ""
                  }`}
              >
                <div className="bg-gradient-to-r from-red-700 to-red-600 p-6 text-white">
                  <h3 className="text-xl font-bold leading-snug">
                    {track.subtitle}
                  </h3>
                </div>

                <div className="p-6 flex-1">
                  <ul className="space-y-3">
                    {track.topics.map((topic, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-700 leading-6"
                      >
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
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

      {/* <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
            Paper Submission
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-10">
            <p className="text-gray-700 leading-8 mb-8">
              Authors are invited to submit original and unpublished research
              papers related to any of the conference tracks. All submissions
              will undergo a rigorous peer-review process and should follow the
              prescribed IEEE conference format.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-red-800 mb-2">
                  Submission Deadline
                </h3>
                <p>20 January 2026</p>
              </div>

              <div>
                <h3 className="font-bold text-red-800 mb-2">
                  Acceptance Notification
                </h3>
                <p>10 February 2026</p>
              </div>

              <div>
                <h3 className="font-bold text-red-800 mb-2">
                  Paper Format
                </h3>
                <p>IEEE Conference Template (6–8 Pages)</p>
              </div>

              <div>
                <h3 className="font-bold text-red-800 mb-2">Publication</h3>
                <p>Scopus / Web of Science (Subject to Approval)</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Tracks;
