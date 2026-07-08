import React from "react";
import { FaStar, FaMicrophoneAlt, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

function Speakers() {
  const speakerCategories = [
    {
      title: "Keynote Speakers",
      status: "To Be Announced",
      topic: "Global Research & Innovation",
      expertise: "International Experts",
    },
    {
      title: "Invited Speakers",
      status: "To Be Announced",
      topic: "Emerging Technologies",
      expertise: "Academia & Industry",
    },
    {
      title: "Resource Persons",
      status: "To Be Announced",
      topic: "Technical Sessions",
      expertise: "Research & Development",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Keynote & Invited Speakers</h1>
          <p className="mt-4 text-xl text-gray-200">
            Distinguished experts from academia, industry and research organizations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-50 rounded-2xl shadow-lg border-l-4 border-yellow-400 p-10">
            <h2 className="text-4xl font-bold text-red-800 mb-6">Speaker Sessions</h2>
            <p className="text-gray-700 leading-8 mb-5">
              The conference will feature keynote and invited talks by renowned experts across the globe,
              along with pre-conference tutorials, panel discussions, and refereed technical paper presentations.
            </p>
            <p className="text-gray-700 leading-8 mb-5">
              These sessions are designed to provide participants with valuable insights into emerging trends,
              foster knowledge exchange, and encourage interdisciplinary collaboration.
            </p>
            <p className="text-gray-700 leading-8">
              Details of the keynote speakers, invited experts, and resource persons will be announced on
              the conference website as they are confirmed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {speakerCategories.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="bg-gradient-to-r from-red-700 to-red-600 h-36 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <FaMicrophoneAlt className="text-red-700 text-4xl" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-800">{item.title}</h3>
                  <p className="text-gray-500 mt-2">{item.status}</p>

                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-semibold text-red-700 mb-2">Session Theme</h4>
                    <p className="text-gray-600">{item.topic}</p>

                    <div className="flex items-start gap-3 mt-4">
                      <FaStar className="text-yellow-400 mt-1" />
                      <div>
                        <p className="font-semibold text-sm">Expertise</p>
                        <p className="text-sm text-gray-600">{item.expertise}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
            Conference Highlights
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-yellow-50 rounded-xl shadow p-8 text-center">
              <FaMicrophoneAlt className="mx-auto text-5xl text-red-700 mb-4"/>
              <h3 className="font-bold text-red-800 mb-2">Keynote Talks</h3>
              <p className="text-gray-600 text-sm">Visionary talks by globally renowned experts.</p>
            </div>

            <div className="bg-yellow-50 rounded-xl shadow p-8 text-center">
              <FaChalkboardTeacher className="mx-auto text-5xl text-red-700 mb-4"/>
              <h3 className="font-bold text-red-800 mb-2">Tutorials</h3>
              <p className="text-gray-600 text-sm">Pre-conference tutorials by domain specialists.</p>
            </div>

            <div className="bg-yellow-50 rounded-xl shadow p-8 text-center">
              <FaUsers className="mx-auto text-5xl text-red-700 mb-4"/>
              <h3 className="font-bold text-red-800 mb-2">Panel Discussions</h3>
              <p className="text-gray-600 text-sm">Interactive discussions on emerging trends.</p>
            </div>

            <div className="bg-yellow-50 rounded-xl shadow p-8 text-center">
              <FaStar className="mx-auto text-5xl text-red-700 mb-4"/>
              <h3 className="font-bold text-red-800 mb-2">Paper Presentations</h3>
              <p className="text-gray-600 text-sm">Peer-reviewed technical paper presentation sessions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Speakers;
