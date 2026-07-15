import React from "react";
import {
  FaFileUpload,
  FaEnvelope,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import springerTemplate from "../assets/springer-template.pdf";

function Submission() {
  const guidelines = [
    {
      text: "Strictly follow the Springer manuscript preparation guidelines",
      linkText: "(view guidelines)",
      url: "https://www.springer.com/gp/authors-editors/book-authors-editors/your-publication-journey/manuscript-preparation",
    },
    {
      text: "To download Springer templates",
      linkText: "(Click here)",
      url: springerTemplate,
    },
    "Camera-ready papers: 6-8 pages for short papers, 10-12 pages for long papers",
    "Maximum of 5 authors per paper",
    "The manuscript must fall under the scope and allied tracks of the conference; the TPC has full right to determine scope before recommending a paper for review",
    "Simultaneous submission to multiple conferences is discouraged; the TPC's decision will be final in such cases",
    "Papers with a maximum 15% similarity report will be considered for review (excluding bibliography)",
    "Papers must be written in English using the standard Springer template; only PDF files are accepted, and a double-blind review process is followed",
    "It is the responsibility of authors to submit the final camera-ready paper and transfer copyright through the link shared after acceptance",
    "All papers accepted and presented at the conference will be forwarded for further publication",
  ];

  const acceptanceCriteria = [
    {
      title: "Relevance to Conference Themes",
      desc: "The paper must relate to the conference's core themes or scope of the conference domains, ideally addressing issues, works, or advancements in these areas.",
    },
    {
      title: "Originality and Innovation",
      desc: "Submissions must be completely original works that are not published or under review elsewhere, presenting novel ideas, methods, or applications.",
    },
    {
      title: "Technical Depth and Contribution",
      desc: "The paper must present in-depth technical work and a substantial contribution to the field, with proposed methods, frameworks, or systems well delineated.",
    },
    {
      title: "Methodology and Validation",
      desc: "The research methodology must be robust, well described, suitable for the study, and the results must be properly verified.",
    },
    {
      title: "Clarity of Presentation",
      desc: "The paper should be well structured with a clear introduction, literature review, methodology, results, discussion, and conclusion, with minimal grammatical errors.",
    },
    {
      title: "Ethical Consideration",
      desc: "Ethical considerations must be addressed, especially for sensitive topics such as AI, healthcare, and data privacy, with proper citation and unbiased reporting.",
    },
    {
      title: "Comprehensive Literature Review",
      desc: "The paper should identify gaps in existing literature, explain how the proposed work fills those gaps, and include proper citations and references.",
    },
    {
      title: "Quality of Result and Analysis",
      desc: "Results should be presented with graphs, charts, tables, or visual tools, with efficient analysis and clearly stated limitations.",
    },
    {
      title: "Submission Guidelines Compliance",
      desc: "All submissions must adhere to the conference's guidelines on page limit, font style, and other formatting requirements, and be submitted within the deadline.",
    },
  ];

  const ethicalCriteria = [
    {
      title: "Originality",
      desc: "The paper must be original and not plagiarized, with all references cited correctly and properly.",
    },
    {
      title: "Ethical Practice",
      desc: "Transparency related to the collection, use, and sharing of data; authors must disclose any potential conflict of interest.",
    },
    {
      title: "Data Integrity",
      desc: "Authors need to ensure the integrity of their data and methods, with accurate, reliable, unmanipulated data.",
    },
    {
      title: "Acknowledgment",
      desc: "Authors should acknowledge and give credit to funding sources, institutions, or individuals as applicable.",
    },
    {
      title: "Disclosure of Funding and Conflicts of Interest",
      desc: "Authors must disclose any funding sources and any financial or non-financial conflict of interest.",
    },
    {
      title: "Compliance with Conference Policies",
      desc: "Authors should follow conference policies and agree to publish corrections or retractions in the event of substantial ethical concerns.",
    },
  ];

  return (
    <>
      {/*Hero Sectino */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-red-800 to-red-900 text-white py-10">
        {/* Plexus network line pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-55 pointer-events-none mix-blend-screen"
          viewBox="0 0 700 320"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <line
            x1="44.5"
            y1="122.1"
            x2="78.1"
            y2="139.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="603.2"
            y1="184.8"
            x2="554.5"
            y2="135.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="55.9"
            y1="74.5"
            x2="63.6"
            y2="15.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="670.0"
            y1="107.7"
            x2="698.3"
            y2="163.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="613.5"
            y1="100.7"
            x2="554.5"
            y2="135.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="580.6"
            y1="197.9"
            x2="603.2"
            y2="184.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="192.5"
            y1="71.4"
            x2="160.3"
            y2="10.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="565.0"
            y1="233.5"
            x2="590.0"
            y2="248.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="259.1"
            y1="67.0"
            x2="220.8"
            y2="85.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="692.7"
            y1="204.8"
            x2="697.3"
            y2="169.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="375.4"
            y1="311.4"
            x2="389.9"
            y2="219.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="64.9"
            y1="30.9"
            x2="63.6"
            y2="15.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="454.9"
            y1="174.4"
            x2="458.8"
            y2="126.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="159.5"
            y1="92.6"
            x2="185.4"
            y2="78.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="670.0"
            y1="107.7"
            x2="613.5"
            y2="100.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="18.6"
            y1="63.6"
            x2="64.9"
            y2="30.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="445.0"
            y1="116.7"
            x2="458.8"
            y2="126.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="70.7"
            y1="89.0"
            x2="114.4"
            y2="121.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="640.2"
            y1="146.8"
            x2="697.3"
            y2="169.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="295.3"
            y1="9.5"
            x2="259.1"
            y2="67.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="670.0"
            y1="107.7"
            x2="640.2"
            y2="146.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="454.9"
            y1="174.4"
            x2="477.2"
            y2="171.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="70.7"
            y1="89.0"
            x2="44.5"
            y2="122.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="565.0"
            y1="233.5"
            x2="580.6"
            y2="197.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="76.8"
            y1="200.8"
            x2="78.1"
            y2="139.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="515.5"
            y1="216.5"
            x2="453.6"
            y2="194.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="692.7"
            y1="204.8"
            x2="698.3"
            y2="163.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="154.3"
            y1="188.6"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="55.9"
            y1="74.5"
            x2="70.7"
            y2="89.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="593.2"
            y1="193.2"
            x2="603.2"
            y2="184.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="564.1"
            y1="223.4"
            x2="565.0"
            y2="233.5"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="453.6"
            y1="194.9"
            x2="389.9"
            y2="219.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="192.5"
            y1="71.4"
            x2="159.5"
            y2="92.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="458.8"
            y1="126.6"
            x2="477.2"
            y2="171.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="192.5"
            y1="71.4"
            x2="185.4"
            y2="78.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="624.5"
            y1="27.8"
            x2="670.0"
            y2="107.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="698.3"
            y1="163.0"
            x2="697.3"
            y2="169.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="295.3"
            y1="9.5"
            x2="238.2"
            y2="49.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="640.2"
            y1="146.8"
            x2="698.3"
            y2="163.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="580.6"
            y1="197.9"
            x2="554.5"
            y2="135.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="220.8"
            y1="85.7"
            x2="185.4"
            y2="78.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="238.2"
            y1="49.8"
            x2="259.1"
            y2="67.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="603.2"
            y1="184.8"
            x2="640.2"
            y2="146.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="453.6"
            y1="194.9"
            x2="477.2"
            y2="171.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="238.2"
            y1="49.8"
            x2="220.8"
            y2="85.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="259.1"
            y1="67.0"
            x2="279.6"
            y2="70.2"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="18.6"
            y1="63.6"
            x2="55.9"
            y2="74.5"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="159.5"
            y1="92.6"
            x2="114.4"
            y2="121.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="186.9"
            y1="299.7"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="613.5"
            y1="100.7"
            x2="640.2"
            y2="146.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="515.5"
            y1="216.5"
            x2="565.0"
            y2="233.5"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="76.8"
            y1="200.8"
            x2="8.0"
            y2="230.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="265.0"
            y1="176.7"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="119.8"
            y1="233.3"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="692.7"
            y1="204.8"
            x2="679.8"
            y2="275.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="580.6"
            y1="197.9"
            x2="590.0"
            y2="248.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="447.6"
            y1="8.0"
            x2="493.2"
            y2="14.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="119.8"
            y1="233.3"
            x2="76.8"
            y2="200.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="153.0"
            y1="161.7"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="624.5"
            y1="27.8"
            x2="566.6"
            y2="2.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="593.2"
            y1="193.2"
            x2="580.6"
            y2="197.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="159.5"
            y1="92.6"
            x2="160.3"
            y2="10.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="18.6"
            y1="63.6"
            x2="63.6"
            y2="15.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="564.1"
            y1="223.4"
            x2="593.2"
            y2="193.2"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="515.5"
            y1="216.5"
            x2="564.1"
            y2="223.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="564.1"
            y1="223.4"
            x2="590.0"
            y2="248.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="447.6"
            y1="8.0"
            x2="393.0"
            y2="84.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="454.9"
            y1="174.4"
            x2="453.6"
            y2="194.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="153.0"
            y1="161.7"
            x2="154.3"
            y2="188.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="375.4"
            y1="311.4"
            x2="317.6"
            y2="305.2"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="458.8"
            y1="126.6"
            x2="393.0"
            y2="84.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <circle cx="447.6" cy="8.0" r="1.2" fill="white" opacity="0.5" />
          <circle cx="192.5" cy="71.4" r="2.8" fill="white" opacity="0.9" />
          <circle cx="515.5" cy="216.5" r="1.2" fill="white" opacity="0.5" />
          <circle cx="624.5" cy="27.8" r="2.8" fill="white" opacity="0.9" />
          <circle cx="295.3" cy="9.5" r="1.2" fill="white" opacity="0.5" />
          <circle cx="153.0" cy="161.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="18.6" cy="63.6" r="2.8" fill="white" opacity="0.9" />
          <circle cx="454.9" cy="174.4" r="2.8" fill="white" opacity="0.9" />
          <circle cx="154.3" cy="188.6" r="1.2" fill="white" opacity="0.5" />
          <circle cx="566.6" cy="2.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="564.1" cy="223.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="238.2" cy="49.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="670.0" cy="107.7" r="2.8" fill="white" opacity="0.9" />
          <circle cx="64.9" cy="30.9" r="2.8" fill="white" opacity="0.9" />
          <circle cx="593.2" cy="193.2" r="1.2" fill="white" opacity="0.5" />
          <circle cx="565.0" cy="233.5" r="2.8" fill="white" opacity="0.9" />
          <circle cx="375.4" cy="311.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="265.0" cy="176.7" r="2.2" fill="white" opacity="0.9" />
          <circle cx="580.6" cy="197.9" r="1.2" fill="white" opacity="0.5" />
          <circle cx="603.2" cy="184.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="493.2" cy="14.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="159.5" cy="92.6" r="1.2" fill="white" opacity="0.5" />
          <circle cx="55.9" cy="74.5" r="1.2" fill="white" opacity="0.5" />
          <circle cx="70.7" cy="89.0" r="1.2" fill="white" opacity="0.5" />
          <circle cx="445.0" cy="116.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="259.1" cy="67.0" r="2.8" fill="white" opacity="0.9" />
          <circle cx="186.9" cy="299.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="453.6" cy="194.9" r="1.2" fill="white" opacity="0.5" />
          <circle cx="119.8" cy="233.3" r="2.2" fill="white" opacity="0.9" />
          <circle cx="114.4" cy="121.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="692.7" cy="204.8" r="2.8" fill="white" opacity="0.9" />
          <circle cx="389.9" cy="219.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="590.0" cy="248.3" r="1.2" fill="white" opacity="0.5" />
          <circle cx="160.3" cy="10.3" r="2.2" fill="white" opacity="0.9" />
          <circle cx="220.8" cy="85.7" r="2.8" fill="white" opacity="0.9" />
          <circle cx="147.7" cy="301.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="613.5" cy="100.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="458.8" cy="126.6" r="2.8" fill="white" opacity="0.9" />
          <circle cx="640.2" cy="146.8" r="2.8" fill="white" opacity="0.9" />
          <circle cx="185.4" cy="78.9" r="2.2" fill="white" opacity="0.9" />
          <circle cx="393.0" cy="84.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="409.2" cy="287.3" r="2.8" fill="white" opacity="0.9" />
          <circle cx="279.6" cy="70.2" r="1.2" fill="white" opacity="0.5" />
          <circle cx="698.3" cy="163.0" r="1.2" fill="white" opacity="0.5" />
          <circle cx="63.6" cy="15.1" r="2.2" fill="white" opacity="0.9" />
          <circle cx="76.8" cy="200.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="554.5" cy="135.1" r="2.2" fill="white" opacity="0.9" />
          <circle cx="44.5" cy="122.1" r="2.8" fill="white" opacity="0.9" />
          <circle cx="697.3" cy="169.3" r="2.2" fill="white" opacity="0.9" />
          <circle cx="679.8" cy="275.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="8.0" cy="230.6" r="1.2" fill="white" opacity="0.5" />
          <circle cx="477.2" cy="171.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="186.8" cy="205.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="78.1" cy="139.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="317.6" cy="305.2" r="1.2" fill="white" opacity="0.5" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block text-s font-semibold tracking-widest text-yellow-400 uppercase mb-3">
            ICSISDG 2026
          </span>
          <h1 className="text-5xl font-bold">Submission </h1>
          <p className="mt-4 text-xl text-red-100">
            Paper submission process for ICSISDG 2026.
          </p>
        </div>
      </section>

      {/* Paper Submission Intro */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Paper Submission
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              Authors are invited to submit papers through the{" "}
              <span className="font-bold text-red-800">
                icsisdg2026@gmail.com
              </span>{" "}
              before the submission deadline. For any inquiry about the
              conference, please feel free to{" "}
              <Link
                to="/contact"
                className="font-semibold text-red-800 hover:underline"
              >
                contact us
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <a
                                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICSSCC2026"
                                className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition flex items-center gap-2"
                            >
                                <FaFileUpload />
                                Submit via Microsoft CMT
                            </a> */}
              {/* <a
                                href="https://icsscc.in.net/resource/upload/splnproc1703.docm"
                                className="bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition flex items-center gap-2"
                            >
                                <FaDownload />
                                Download Springer Template
                            </a> */}
              <a
                href="mailto:icsisdg2026@gmail.com"
                className="bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition flex items-center gap-2"
              >
                <FaEnvelope />
                icsisdg2026@gmail.com
              </a>
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-red-800 mb-6">
              Submission Guidelines
            </h2>
            <ul className="space-y-4">
              {guidelines.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                  {typeof item === "string" ? (
                    <span>{item}</span>
                  ) : (
                    <span>
                      {item.text}{" "}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 font-semibold underline hover:text-red-900 transition"
                      >
                        {item.linkText}
                      </a>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Policy for Plagiarism */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
            Policy for Plagiarism
          </h2>
          <div className="bg-red-50 border-l-4 border-yellow-400 rounded-lg p-8">
            <p className="text-gray-700 leading-8">
              All submitted manuscripts will be subjected to a similarity check
              using a licensed version of iThenticate Plagiarism Detection
              Software. Articles achieving a minimal similarity index (less than
              15%) alone will be examined, and those deemed unacceptable will be
              rejected or withdrawn without a formal review. Submissions should
              also ensure less than 3% similarity from a single source. Authors
              are requested to refrain from plagiarism in any form and must
              submit original, unpublished research work not under consideration
              elsewhere. Manuscripts with a higher similarity index will be
              rejected during any review stage. As per the copyright transfer
              agreement, authors are deemed individually and collectively
              responsible for the content of manuscripts published by them.
            </p>
          </div>
        </div>
      </section>

      {/* AI-Generated Text Policy */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
            Important Instructions for AI-Generated Text
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 leading-8">
              The use of content generated by artificial intelligence (AI) in an
              article, in any form (text, figures, images, and code), must be
              clearly disclosed in the acknowledgments section of the paper
              submitted for review. The AI system used must be identified, and
              the specific sections of the article that use AI-generated content
              must be identified and accompanied by a brief explanation of the
              level at which the AI system was used to generate the content.
              Failure to disclose this will result in the paper being directly
              rejected without any reviewer comments.
            </p>
          </div>
        </div>
      </section>

      {/* Peer Review Policy */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
            Peer Review Policy
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg shadow p-6">
              <p className="text-gray-700 leading-7">
                The conference review process follows a double-blind review. The
                plagiarism check committee initially verifies the submitted
                paper using the iThenticate plagiarism detection tool. A maximum
                of 15% similarity with proper citations, and content overlap
                below 3%, is permitted before the review process begins.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow p-6">
              <p className="text-gray-700 leading-7">
                Each paper will be reviewed by a minimum of three subject-expert
                reviewers. A maximum of 5 papers will be assigned to a single
                reviewer.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow p-6">
              <p className="text-gray-700 leading-7">
                Papers are selected based on technical quality, relevance to the
                conference theme, originality, significance, and clarity, and
                undergo a double-blind peer review process organized by a strong
                team of national and international technical committee members
                with specialized domain expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptance Criteria */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-4 text-center">
            Acceptance Criteria for Papers
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Papers submitted to ICSISDG 2026 will be evaluated against the
            following criteria
          </p>
          <div className="space-y-4">
            {acceptanceCriteria.map((item, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
              >
                <summary className="font-bold text-red-800 flex justify-between items-center">
                  {item.title}
                  <span className="text-yellow-400">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-7">{item.desc}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Quality Criteria */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-4 text-center">
            Ethical Quality Criteria for Reviewers
          </h2>
          <p className="text-gray-600 text-center mb-12">
            To ensure ethical quality of submissions, reviewers follow the
            criteria below
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {ethicalCriteria.map((item, index) => (
              <div
                key={index}
                className="bg-red-50 border-l-4 border-red-700 rounded-lg p-6"
              >
                <h3 className="font-bold text-red-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviewer Suggestions & Role */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-red-800 mb-6">
                Reviewer Suggestions
              </h3>
              <ul className="space-y-4">
                {[
                  "Mandatory changes / corrections",
                  "Possible modifications for betterment",
                  "Suggestions for extending the work in future (for implementing while submitting to journal special issues of the conference)",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-7 h-7 flex-shrink-0 bg-yellow-400 rounded-full flex items-center justify-center text-red-900 font-bold text-sm"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-red-800 mb-6">
                Role of the Reviewers
              </h3>
              <ul className="space-y-4">
                {[
                  "Strict and rigorous review process for papers received",
                  "Identify and point out gaps in the paper that require explanation, additional work, or validation",
                  "Provide valid suggestions for authors to further improve their contribution",
                  "No compromise will be entertained in the consideration or acceptance of a paper",
                  "Papers will be rigorously evaluated based on novelty, significance, clarity, relevance, and repeatability",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-7 h-7 flex-shrink-0 bg-red-800 rounded-full flex items-center justify-center text-white font-bold text-sm"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-10 bg-red-800 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Submit Your Paper?</h2>
                    <p className="text-lg text-gray-200 mb-8">
                        Submit your manuscript electronically through the Microsoft CMT service.
                    </p>
                    <a
                        href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICSSCC2026"
                        className="inline-block bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
                    >
                        Submit via Microsoft CMT
                    </a>
                </div>
            </section> */}
    </>
  );
}

export default Submission;
