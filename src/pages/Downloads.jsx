import React from "react";
import { FaDownload, FaFilePdf, FaFileWord } from "react-icons/fa";

function Downloads() {
  const downloadItems = [
    {
      category: "Templates",
      items: [
        {
          name: "Paper Template (Word)",
          size: "250 KB",
          icon: <FaFileWord />,
          type: "Word",
        },
        {
          name: "Paper Template (LaTeX)",
          size: "180 KB",
          icon: <FaFilePdf />,
          type: "LaTeX",
        },
        {
          name: "Poster Template",
          size: "320 KB",
          icon: <FaFileWord />,
          type: "Word",
        },
      ],
    },
    {
      category: "Guidelines & Forms",
      items: [
        {
          name: "Submission Guidelines PDF",
          size: "450 KB",
          icon: <FaFilePdf />,
          type: "PDF",
        },
        {
          name: "Copyright Transfer Form",
          size: "280 KB",
          icon: <FaFilePdf />,
          type: "PDF",
        },
        {
          name: "Camera Ready Instructions",
          size: "320 KB",
          icon: <FaFilePdf />,
          type: "PDF",
        },
      ],
    },
    {
      category: "Call for Papers",
      items: [
        {
          name: "Call for Papers (Full)",
          size: "520 KB",
          icon: <FaFilePdf />,
          type: "PDF",
        },
        {
          name: "Conference Brochure",
          size: "1.2 MB",
          icon: <FaFilePdf />,
          type: "PDF",
        },
        {
          name: "Conference Schedule",
          size: "380 KB",
          icon: <FaFileWord />,
          type: "Word",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Downloads</h1>
          <p className="mt-4 text-xl text-gray-200">
            Access templates, guidelines, and conference materials
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {downloadItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-red-800 mb-8 pb-4 border-b-2 border-yellow-400">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl text-red-700">{item.icon}</div>
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{item.size}</p>
                    <button className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition flex items-center justify-center gap-2 font-semibold">
                      <FaDownload size={16} />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
            Useful Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "IEEE Citation Style",
                description: "Reference formatting guidelines for IEEE format",
                link: "#",
              },
              {
                title: "Research Ethics",
                description: "Guidelines for ethical research and data handling",
                link: "#",
              },
              {
                title: "Plagiarism Prevention",
                description: "Tools and tips to avoid plagiarism in your research",
                link: "#",
              },
              {
                title: "Presentation Tips",
                description: "Best practices for effective conference presentations",
                link: "#",
              },
              {
                title: "Academic Writing",
                description: "Resources for improving academic writing skills",
                link: "#",
              },
              {
                title: "Peer Review",
                description: "Understanding the peer review process",
                link: "#",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="border-l-4 border-yellow-400 bg-gray-50 p-6 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-red-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <a href={resource.link} className="text-red-700 font-semibold text-sm hover:text-red-900">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "What format should I use for my paper?",
                answer: "You can use either the Microsoft Word template or LaTeX template. Both are available in our Downloads section.",
              },
              {
                question: "How do I cite references in IEEE format?",
                answer: "Download the IEEE Citation Style guide from our resources section for detailed instructions and examples.",
              },
              {
                question: "What is the maximum file size for submissions?",
                answer: "Maximum file size for paper submissions is 10 MB. Please compress images and figures accordingly.",
              },
              {
                question: "Can I submit papers in languages other than English?",
                answer: "No, all papers must be in English (British or American). Non-English papers will be rejected.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
              >
                <summary className="font-bold text-red-800 flex justify-between items-center">
                  {faq.question}
                  <span className="text-yellow-400">+</span>
                </summary>
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Downloads;
