import React from "react";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

function ReviewProcess() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Review Process</h1>
          <p className="mt-4 text-xl text-gray-200">
            Understand our peer review process and evaluation criteria
          </p>
        </div>
      </section>

      {/* Review Process Workflow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">
            Paper Review Workflow
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Submission",
                description: "Authors submit their papers through the online submission portal",
                icon: "📝",
              },
              {
                step: "2",
                title: "Initial Screening",
                description: "Editorial team checks paper for completeness and compliance with guidelines",
                icon: "📋",
              },
              {
                step: "3",
                title: "Peer Review",
                description: "Paper is assigned to 2-3 expert reviewers for blind peer review",
                icon: "👥",
              },
              {
                step: "4",
                title: "Review Reports",
                description: "Reviewers provide detailed feedback and recommendations",
                icon: "📊",
              },
              {
                step: "5",
                title: "Decision",
                description: "Editor makes acceptance decision based on reviews and comments",
                icon: "✅",
              },
              {
                step: "6",
                title: "Notification",
                description: "Authors receive decision and feedback from reviewers",
                icon: "📧",
              },
              {
                step: "7",
                title: "Revision (if needed)",
                description: "Authors revise and resubmit papers based on reviewer comments",
                icon: "🔄",
              },
              {
                step: "8",
                title: "Publication",
                description: "Accepted papers are published in conference proceedings",
                icon: "📚",
              },
            ].map((process, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white font-bold">
                    {process.step}
                  </div>
                </div>
                <div className="flex-grow bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-red-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                <div className="text-3xl">{process.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">
            Evaluation Criteria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                criteria: "Originality",
                description: "Novel contribution to the field with new insights or findings",
                weight: "25%",
              },
              {
                criteria: "Technical Quality",
                description: "Sound methodology, proper experimental design, and rigorous analysis",
                weight: "25%",
              },
              {
                criteria: "Clarity & Presentation",
                description: "Clear writing, well-structured paper, and effective communication",
                weight: "20%",
              },
              {
                criteria: "Relevance",
                description: "Alignment with conference scope and research focus areas",
                weight: "15%",
              },
              {
                criteria: "Impact & Significance",
                description: "Potential impact on the research community and practical applications",
                weight: "10%",
              },
              {
                criteria: "References",
                description: "Appropriate citations of related work and current literature",
                weight: "5%",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-yellow-400">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-red-800">{item.criteria}</h3>
                  <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.weight}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">
            Review Decisions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-700 mb-3">Accept</h3>
              <p className="text-gray-600">
                Paper is accepted and will be published in conference proceedings
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <FaClock className="text-yellow-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-yellow-700 mb-3">Revision Required</h3>
              <p className="text-gray-600">
                Paper requires revisions and will be re-reviewed after modification
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <FaTimesCircle className="text-red-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-700 mb-3">Reject</h3>
              <p className="text-gray-600">
                Paper does not meet conference standards or research quality criteria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">
            Review Timeline
          </h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                <span className="text-gray-600">Paper Submission Deadline</span>
                <span className="font-bold text-red-700">20 January 2026</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                <span className="text-gray-600">Review Period</span>
                <span className="font-bold text-red-700">21 Jan - 5 Feb 2026</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                <span className="text-gray-600">Revision Period (if needed)</span>
                <span className="font-bold text-red-700">6 - 8 Feb 2026</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                <span className="text-gray-600">Final Decision Notification</span>
                <span className="font-bold text-red-700">10 February 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Conference Dates</span>
                <span className="font-bold text-red-700">20-22 March 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReviewProcess;
