import React from "react";
import { FaFileAlt, FaCheckCircle, FaClipboardList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Guidelines() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Submission Guidelines</h1>
          <p className="mt-4 text-xl text-gray-200">
            Instructions for preparing and submitting your research papers
          </p>
        </div>
      </section>

      {/* Guidelines Content */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          {/* General Guidelines */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
              <FaFileAlt className="text-red-700" />
              General Guidelines
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                • Papers must be prepared in IEEE standard two-column conference
                format.
              </p>
              <p>• Manuscripts must be written in English.</p>
              <p>
                • Papers should be between four and six pages, including
                references and figures.
              </p>
              <p>
                • Literature-review-only papers are not accepted and any
                submission exceeding six pages will be rejected.
              </p>
              <p>
                • Submitted papers must NOT list any author names, affiliations,
                or other personally identifiable information, and must not
                include page numbers.
              </p>
              <p>• Submissions exceeding the page limit may be rejected.</p>
              {/* <p>
                • <strong>Page Numbers:</strong> Include page numbers for review
              </p> */}
            </div>
          </div>

          {/* Paper Structure */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
              <FaClipboardList className="text-red-700" />
              Recommended Paper Structure
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Title",
                  description: "Clear, concise, and descriptive title",
                },
                {
                  title: "Abstract",
                  description: "150-250 words summarizing the paper",
                },
                { title: "Keywords", description: "5-7 relevant keywords" },
                {
                  title: "Introduction",
                  description: "Problem statement and research motivation",
                },
                {
                  title: "Literature Review",
                  description: "Related work and background",
                },
                {
                  title: "Methodology",
                  description: "Research methods and approach",
                },
                {
                  title: "Results & Discussion",
                  description: "Findings and analysis",
                },
                { title: "Conclusion", description: "Summary and future work" },
                {
                  title: "References",
                  description: "Complete bibliography in IEEE format",
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="border-l-4 border-yellow-400 pl-4 py-2"
                >
                  <p className="font-semibold text-gray-800">{section.title}</p>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Requirements */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3">
              <FaCheckCircle className="text-green-600" />
              Important Requirements
            </h2>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold mt-1">✓</span>
                <span>
                  <strong>Originality:</strong> Papers must be original and not
                  published elsewhere
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold mt-1">✓</span>
                <span>
                  <strong>Author Information:</strong> Include author name,
                  affiliation, and email
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold mt-1">✓</span>
                <span>
                  <strong>Figures & Tables:</strong> High quality, well-labeled
                  with captions
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold mt-1">✓</span>
                <span>
                  <strong>References:</strong> Use IEEE format for all citations
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold mt-1">✓</span>
                <span>
                  <strong>Plagiarism:</strong> Papers will be checked for
                  plagiarism (Max 20% allowed)
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold mt-1">✓</span>
                <span>
                  <strong>Ethics:</strong> If research involves human subjects,
                  include ethics approval
                </span>
              </p>
            </div>
          </div>

          {/* Submission Process */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Submission Process
            </h3>
            <ol className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">1.</span>
                <span>Prepare your paper following all guidelines</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">2.</span>
                <span>Create an account on our submission system</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">3.</span>
                <span>Upload your paper and supporting documents</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">4.</span>
                <span>
                  Submit before the deadline: <strong>20 January 2026</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">5.</span>
                <span>Receive confirmation email with paper ID</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-yellow-600">6.</span>
                <span>Track review status through the portal</span>
              </li>
            </ol>
          </div>
          <div className="mt-8 text-center">
            <NavLink to="/registration"><button className="bg-yellow-400 text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300">
              Submit Paper
            </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Guidelines;
