import React, { useState } from "react";
import { FaCheckCircle, FaClock, FaTimesCircle, FaSearch } from "react-icons/fa";

function PaperStatus() {
  const [paperId, setPaperId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (paperId.trim()) {
      setSubmitted(true);
    }
  };

  // Mock data for demonstration
  const mockPaperStatus = {
    paperId: paperId,
    title: "Smart Innovation in Sustainable Development",
    authors: "Dr. John Smith, Prof. Jane Doe",
    submittedDate: "2026-01-15",
    status: "Under Review",
    reviewStatus: {
      "Reviewer 1": "Completed",
      "Reviewer 2": "Completed",
      "Reviewer 3": "In Progress",
    },
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Accepted":
        return <FaCheckCircle className="text-green-500 text-2xl" />;
      case "Under Review":
        return <FaClock className="text-yellow-500 text-2xl" />;
      case "Rejected":
        return <FaTimesCircle className="text-red-500 text-2xl" />;
      default:
        return <FaClock className="text-gray-500 text-2xl" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Paper Status Tracker</h1>
          <p className="mt-4 text-xl text-gray-200">
            Track the review status of your submitted paper
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6">Search Your Paper</h2>
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Paper ID / Submission Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={paperId}
                    onChange={(e) => setPaperId(e.target.value)}
                    placeholder="e.g., ICSISDG-2026-0001"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition flex items-center gap-2 font-semibold"
                  >
                    <FaSearch />
                    Search
                  </button>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                You will find your Paper ID in the confirmation email after submission
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Status Display */}
      {submitted && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-start justify-between mb-8 pb-8 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-red-800 mb-2">Paper Information</h3>
                  <p className="text-gray-600 mb-4">{mockPaperStatus.paperId}</p>
                </div>
                <div className="flex flex-col items-center">
                  {getStatusIcon(mockPaperStatus.status)}
                  <span className="mt-2 font-bold text-lg text-yellow-600">
                    {mockPaperStatus.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-yellow-400 pl-4 py-2">
                  <p className="text-gray-600 mb-1">Paper Title</p>
                  <p className="font-semibold text-gray-800">{mockPaperStatus.title}</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4 py-2">
                  <p className="text-gray-600 mb-1">Authors</p>
                  <p className="font-semibold text-gray-800">{mockPaperStatus.authors}</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4 py-2">
                  <p className="text-gray-600 mb-1">Submission Date</p>
                  <p className="font-semibold text-gray-800">{mockPaperStatus.submittedDate}</p>
                </div>
              </div>
            </div>

            {/* Review Status */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-6">Review Status</h3>
              <div className="space-y-4">
                {Object.entries(mockPaperStatus.reviewStatus).map(([reviewer, status], index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg">
                    <span className="font-semibold text-gray-800">{reviewer}</span>
                    <div className="flex items-center gap-2">
                      {status === "Completed" ? (
                        <>
                          <FaCheckCircle className="text-green-500" />
                          <span className="text-green-600 font-semibold">{status}</span>
                        </>
                      ) : (
                        <>
                          <FaClock className="text-yellow-500" />
                          <span className="text-yellow-600 font-semibold">{status}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Definitions */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">Understanding Status</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
                  <div className="flex items-center gap-3 mb-3">
                    <FaClock className="text-yellow-500 text-2xl" />
                    <h4 className="font-bold text-yellow-700">Under Review</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your paper is currently being reviewed by our expert reviewers
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
                  <div className="flex items-center gap-3 mb-3">
                    <FaCheckCircle className="text-green-500 text-2xl" />
                    <h4 className="font-bold text-green-700">Accepted</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Congratulations! Your paper has been accepted for publication
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
                  <div className="flex items-center gap-3 mb-3">
                    <FaTimesCircle className="text-red-500 text-2xl" />
                    <h4 className="font-bold text-red-700">Rejected</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your paper does not meet the conference requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Need Help?</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-6">
              If you cannot find your paper status or have questions about the review process, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="font-bold text-red-800 mb-2">Email Support</p>
                <p className="text-gray-600">conference@jgu.edu.in</p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="font-bold text-red-800 mb-2">Response Time</p>
                <p className="text-gray-600">Within 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaperStatus;
