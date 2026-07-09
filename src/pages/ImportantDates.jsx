import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

function ImportantDates() {
    const dates = [
        { title: "Full Paper Submission Open", date: "1 August 2026", highlight: false },
        { title: "Paper Submission Deadline", date: "30 September 2026", highlight: true },
        { title: "Notification of Acceptance", date: "24 October 2026", highlight: false },
        { title: "Registration Deadline", date: "31 October 2026", highlight: false },
        { title: "Camera-Ready Paper Submission Due", date: "6 November 2026", highlight: false },
        { title: "Conference Schedule Release", date: "14 November 2026", highlight: false },
        { title: "Conference Dates", date: "22 November 2026", highlight: true },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl font-bold">Important Dates</h1>
                    <p className="mt-4 text-xl text-gray-200">
                        Key deadlines for ICSISDG 2026
                    </p>
                </div>
            </section>

            {/* Intro + Dates Table */}
            <section className="py-10 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
                        <p className="text-gray-600 leading-8">
                            On behalf of the Organizing Committee of{" "}
                            <span className="font-bold text-red-800">ICSISDG 2026</span>, we take
                            pleasure in inviting you to the{" "}
                            <span className="font-bold text-red-800">
                                International Conference on Smart Innovation for Sustainable
                                Development Goals
                            </span>
                            , to be held on{" "}
                            <span className="font-bold text-red-800">22 November 2026</span>.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-red-800 text-white grid grid-cols-2 px-8 py-4">
                            <span className="font-bold text-lg">Title</span>
                            <span className="font-bold text-lg text-right md:text-left">Dates</span>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {dates.map((item, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-2 px-8 py-5 items-center ${item.highlight ? "bg-yellow-50" : "bg-white"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <FaCalendarAlt
                                            className={item.highlight ? "text-red-700" : "text-gray-400"}
                                        />
                                        <span
                                            className={`${item.highlight
                                                ? "font-bold text-red-800"
                                                : "text-gray-700 font-medium"
                                                }`}
                                        >
                                            {item.title}
                                        </span>
                                    </div>
                                    <span
                                        className={`text-right md:text-left ${item.highlight
                                            ? "font-bold text-red-800"
                                            : "text-gray-600 font-semibold"
                                            }`}
                                    >
                                        {item.date}
                                    </span>
                                </div>
                            ))}
                        </div>
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
                            researchers, academicians, industry professionals, and students
                            from around the globe to discuss advancements, challenges, and
                            opportunities in emerging technologies. The conference provides a
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

export default ImportantDates;