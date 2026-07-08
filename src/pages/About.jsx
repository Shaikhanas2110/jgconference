import React from "react";
import { FaAward, FaUsers, FaGlobeAmericas, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">About ICSISDG 2026</h1>
          <p className="mt-4 text-xl text-gray-200">
            International Conference on Smart Innovation for Sustainable Development Goals
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-8 mb-6">
                The International Conference on Smart Innovation for Sustainable Development Goals (ICSISDG 2026) is dedicated to bringing together researchers, academicians, students, and industry professionals from around the globe to present innovative research and exchange ideas on emerging technologies and their applications.
              </p>
              <p className="text-gray-600 leading-8">
                We are committed to fostering a collaborative environment where groundbreaking research meets practical applications, contributing to the achievement of the United Nations Sustainable Development Goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-50 p-8 rounded-xl text-center">
                <FaAward className="text-red-700 text-4xl mx-auto mb-4" />
                <h3 className="font-bold text-lg text-red-800">Excellence</h3>
              </div>
              <div className="bg-yellow-50 p-8 rounded-xl text-center">
                <FaUsers className="text-yellow-600 text-4xl mx-auto mb-4" />
                <h3 className="font-bold text-lg text-yellow-600">Collaboration</h3>
              </div>
              <div className="bg-red-50 p-8 rounded-xl text-center">
                <FaGlobeAmericas className="text-red-700 text-4xl mx-auto mb-4" />
                <h3 className="font-bold text-lg text-red-800">Global Impact</h3>
              </div>
              <div className="bg-yellow-50 p-8 rounded-xl text-center">
                <FaLightbulb className="text-yellow-600 text-4xl mx-auto mb-4" />
                <h3 className="font-bold text-lg text-yellow-600">Innovation</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">
            Conference Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Research Areas",
                items: ["Artificial Intelligence", "Data Science", "Cloud Computing", "IoT", "Blockchain"],
              },
              {
                title: "Focus Areas",
                items: ["Sustainability", "Smart Cities", "Healthcare Tech", "Green Energy", "Education"],
              },
              {
                title: "Participation",
                items: ["Research Presentation", "Workshops", "Keynote Sessions", "Networking Events", "Industry Showcase"],
              },
            ].map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-red-700 mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
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

      {/* Vision & Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-red-800 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-8 mb-4">
                To create a global platform where innovative research and practical applications converge to address the world's most pressing challenges through technology and sustainable development.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-800 mb-6">Our Objectives</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-yellow-500 font-bold">•</span>
                  Promote innovative research in emerging technologies
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 font-bold">•</span>
                  Foster collaboration between academia and industry
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 font-bold">•</span>
                  Contribute to Sustainable Development Goals
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 font-bold">•</span>
                  Facilitate knowledge exchange globally
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;