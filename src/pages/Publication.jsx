import React from "react";
import { FaBook, FaCheckCircle } from "react-icons/fa";

function Publication() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-s font-semibold tracking-widest text-yellow-400 uppercase mb-3">
            ICSISDG 2026
          </span>
          <h1 className="text-5xl font-bold">Publication</h1>
          <p className="mt-4 text-xl text-gray-200">
            Publication & Indexing details for ICSISDG 2026
          </p>
        </div>
      </section>

      {/* Publication & Indexing */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 flex-shrink-0 bg-red-800 rounded-full flex items-center justify-center text-yellow-400 text-2xl">
              <FaBook />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">
                Publication & Indexing
              </h2>
              <p className="text-gray-600 leading-8">
                All accepted & presented papers will be published in a{" "}
                <span className="font-bold text-red-800">
                  Scopus indexed Springer Series
                </span>
                , Advances in Science, Technology & Innovation (ASTI)
                <span className="text-gray-500"> (Approved)</span>.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              "Springer Book Series Publication",
              "Scopus Indexed Proceedings",
              "Rigorous Peer-Review Process",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-red-50 border-l-4 border-yellow-400 rounded-lg p-6 flex items-center gap-3"
              >
                <FaCheckCircle className="text-red-700 flex-shrink-0" />
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
            About Conference
          </h2>
          <div className="bg-red-50 border-l-4 border-yellow-400 rounded-lg p-8">
            <p className="text-gray-700 leading-8">
              The International Conference on Smart Innovation for Sustainable
              Development Goals (ICSISDG 2026) aims to bring together
              researchers, academicians, industry professionals, and thought
              leaders from around the globe to discuss advancements,
              challenges, and opportunities in the rapidly evolving domains of
              smart technologies and sustainability. The conference provides a
              platform for interdisciplinary dialogue and collaboration,
              fostering innovative solutions that integrate smart innovation
              with sustainable development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Publication;