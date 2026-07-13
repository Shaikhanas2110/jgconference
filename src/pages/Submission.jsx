import React from "react";
import {
    FaFileUpload,
    FaEnvelope,
    FaDownload,
    FaCheckCircle,
} from "react-icons/fa";

function Submission() {
    const guidelines = [
        {
            text: "Strictly follow the Springer manuscript preparation guidelines",
            linkText: "(view guidelines)",
            url:
                "https://www.springer.com/gp/authors-editors/book-authors-editors/your-publication-journey/manuscript-preparation",
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
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <span className="inline-block text-s font-semibold tracking-widest text-yellow-400 uppercase mb-3">
                        ICSISDG 2026
                    </span>
                    <h1 className="text-5xl font-bold">Submission</h1>
                    <p className="mt-4 text-xl text-gray-200">
                        Paper submission process for ICSISDG 2026
                    </p>
                </div>
            </section>

            {/* Paper Submission Intro */}
            <section className="py-10 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-red-800 mb-4">Paper Submission</h2>
                        <p className="text-gray-600 leading-8 mb-6">
                            Authors are invited to submit papers through the{" "}
                            <span className="font-bold text-red-800">official Email</span>{" "}
                            before the submission deadline. For any inquiry about the conference,
                            please feel free to contact us.
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
                        <h2 className="text-2xl font-bold text-red-800 mb-6">Submission Guidelines</h2>
                        <ul className="space-y-4">
                            {guidelines.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700">
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
                            Software. Articles achieving a minimal similarity index (less
                            than 15%) alone will be examined, and those deemed unacceptable
                            will be rejected or withdrawn without a formal review.
                            Submissions should also ensure less than 3% similarity from a
                            single source. Authors are requested to refrain from plagiarism
                            in any form and must submit original, unpublished research work
                            not under consideration elsewhere. Manuscripts with a higher
                            similarity index will be rejected during any review stage. As
                            per the copyright transfer agreement, authors are deemed
                            individually and collectively responsible for the content of
                            manuscripts published by them.
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
                            The use of content generated by artificial intelligence (AI) in
                            an article, in any form (text, figures, images, and code), must
                            be clearly disclosed in the acknowledgments section of the paper
                            submitted for review. The AI system used must be identified, and
                            the specific sections of the article that use AI-generated
                            content must be identified and accompanied by a brief
                            explanation of the level at which the AI system was used to
                            generate the content. Failure to disclose this will result in
                            the paper being directly rejected without any reviewer comments.
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
                                The conference review process follows a double-blind review.
                                The plagiarism check committee initially verifies the
                                submitted paper using the iThenticate plagiarism detection
                                tool. A maximum of 15% similarity with proper citations, and
                                content overlap below 3%, is permitted before the review
                                process begins.
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
                                Papers are selected based on technical quality, relevance to
                                the conference theme, originality, significance, and clarity,
                                and undergo a double-blind peer review process organized by a
                                strong team of national and international technical committee
                                members with specialized domain expertise.
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
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="w-7 h-7 flex-shrink-0 bg-yellow-400 rounded-full flex items-center justify-center text-red-900 font-bold text-sm">
                                            {String.fromCharCode(97 + index)}
                                        </span>
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
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="w-7 h-7 flex-shrink-0 bg-red-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {index + 1}
                                        </span>
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