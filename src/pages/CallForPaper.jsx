import React, { useState } from "react";
import {
  FaFileAlt,
  FaCheckCircle,
  FaDownload,
  FaChevronDown,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaNetworkWired,
  FaLeaf,
} from "react-icons/fa";

function CallForPaper() {
  // Real tracks pulled from Tracks.jsx
  const tracks = [
    {
      id: 1,
      title: "Track I",
      subtitle:
        "Artificial Intelligence and Machine Learning for Sustainable Development",
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
      subtitle: "Internet of Things, Smart Systems, and Emerging Technologies",
      icon: <FaNetworkWired />,
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
      subtitle: "Smart Finance, FinTech and Economic Sustainability",
      icon: <FaCloud />,
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
        "Business Intelligence and Data Analytics for Responsible Decision-Making",
      icon: <FaDatabase />,
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
      subtitle: "Entrepreneurship, Innovation, and Sustainable Startup Ecosystems",
      icon: <FaLeaf />,
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

  const importantDates = [
    ["Due date for submission", "30 September 2026"],
    ["Notification of acceptance", "24 October 2026"],
    ["Registration deadline", "31 October 2026"],
    ["Camera-ready paper submission due", "6 November 2026"],
    ["Conference schedule", "14 November 2026"],
    ["Conference starts on", "22 November 2026"],
  ];

  const [openTrack, setOpenTrack] = useState(1);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Call For Papers</h1>
          <p className="mt-4 text-xl text-gray-200">
            Submit Your Research for ICSISDG 2026
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6">About This Conference</h2>
            <p className="text-gray-600 leading-8 mb-4">
              The International Conference on Smart Innovation for Sustainable Development Goals (ICSISDG 2026) invites authors to submit original, unpublished research papers on topics related to emerging technologies and their applications toward achieving sustainable development.
            </p>
            <p className="text-gray-600 leading-8">
              We welcome papers from researchers, academicians, industry professionals, and students presenting novel ideas, research findings, and practical applications that contribute to smart innovation and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Important Dates - Timeline style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">Important Dates</h2>
          <div className="relative pl-8 border-l-4 border-yellow-400 space-y-10">
            {importantDates.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[38px] top-0 w-6 h-6 bg-red-800 rounded-full border-4 border-yellow-400"></span>
                <p className="text-gray-700 font-semibold">{item[0]}</p>
                <p className="text-red-700 font-bold text-lg">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Tracks - Accordion using real track content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-4 text-center">Research Tracks</h2>
          <p className="text-gray-600 text-center mb-12">
            Submissions are invited under any of the following five tracks
          </p>
          <div className="space-y-5">
            {tracks.map((track) => {
              const isOpen = openTrack === track.id;
              return (
                <div
                  key={track.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => setOpenTrack(isOpen ? null : track.id)}
                    className="w-full flex items-center gap-4 p-6 text-left"
                  >
                    <span className="text-3xl text-red-700 flex-shrink-0">{track.icon}</span>
                    <div className="flex-1">
                      <span className="inline-block bg-yellow-400 text-red-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {track.title}
                      </span>
                      <h3 className="text-lg font-bold text-red-800 leading-snug">
                        {track.subtitle}
                      </h3>
                    </div>
                    <FaChevronDown
                      className={`text-red-700 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <h4 className="font-bold text-red-800 mb-4">Research Areas</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
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
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Submission Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">Submission Requirements</h2>
          <div className="space-y-6">
            {[
              {
                title: "Paper Format",
                description: "6-8 pages including references and figures",
                items: ["Times New Roman, 12pt", "1.5 or double-spaced", "1 inch margins", "PDF or MS Word format"],
              },
              {
                title: "Content Requirements",
                description: "Papers must include the following sections",
                items: ["Title and Abstract", "Introduction and Literature Review", "Methodology", "Results & Discussion", "Conclusion and References"],
              },
              {
                title: "Quality Standards",
                description: "Papers will be evaluated on these criteria",
                items: ["Originality and novelty", "Technical quality and rigor", "Clarity of presentation", "Relevance to conference scope", "Potential impact"],
              },
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-red-800 mb-2">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">Submission Process</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Prepare Your Paper", description: "Follow our guidelines and use the provided template" },
              { step: "2", title: "Create Account", description: "Register on our submission portal" },
              { step: "3", title: "Upload Paper", description: "Submit your paper and supporting documents" },
              { step: "4", title: "Receive Confirmation", description: "Get your paper ID via email" },
              { step: "5", title: "Track Status", description: "Monitor your paper through the review process" },
              { step: "6", title: "Presentation", description: "Present your paper at the conference (if accepted)" },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-700 text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow bg-white rounded-lg shadow p-4">
                  <h4 className="font-bold text-red-800 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads & Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">Downloads & Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Paper Template (Word)", icon: <FaFileAlt /> },
              { title: "Guidelines PDF", icon: <FaFileAlt /> },
              { title: "Formatting Checklist", icon: <FaCheckCircle /> },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl text-red-700 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-4">{item.title}</h3>
                <button className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition flex items-center justify-center gap-2 mx-auto">
                  <FaDownload size={16} />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Submit?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join us in this exciting international conference by submitting your research paper.
          </p>
          <a
            href="/guidelines"
            className="inline-block bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            View Guidelines & Submit
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I submit a paper that is already published?",
                a: "No, papers must be original and not previously published in any conference or journal.",
              },
              {
                q: "What is the maximum number of authors per paper?",
                a: "There is no limit on the number of authors, but clearly identify the corresponding author.",
              },
              {
                q: "Can I submit my paper in another language?",
                a: "No, all papers must be submitted in English. Non-English submissions will be rejected.",
              },
              {
                q: "What happens if my paper is rejected?",
                a: "You will receive detailed feedback from reviewers to help improve your research for future submissions.",
              },
              {
                q: "Is presentation at the conference mandatory?",
                a: "Yes, at least one author must register and present the paper at the conference.",
              },
            ].map((item, index) => (
              <details key={index} className="bg-gray-50 rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-bold text-red-800 flex justify-between items-center">
                  {item.q}
                  <span className="text-yellow-400">+</span>
                </summary>
                <p className="text-gray-600 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CallForPaper;