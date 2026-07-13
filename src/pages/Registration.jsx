import React, { useState, useEffect, useCallback } from "react";
import { FaCheck, FaArrowRight, FaLock, FaSpinner } from "react-icons/fa";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const RAZORPAY_CHECKOUT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

// Loads the Razorpay checkout script once and reuses it on subsequent opens.
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = RAZORPAY_CHECKOUT_SRC;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    country: "",
    category: "ugpg",
  });

  // "idle" | "creatingOrder" | "awaitingPayment" | "verifying" | "success" | "error"
  const [paymentState, setPaymentState] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    loadRazorpayScript();
  }, []);

  const feeTable = [
    {
      category: "UG - PG Students",
      india: "₹ 3,000 /-",
    },
    {
      category: "Research Scholars",
      india: "₹ 4,000 /-",
    },
    {
      category: "Regular (Faculty / Researchers / Industry)",
      india: "₹ 5,000 /-",
    },
  ];

  const packages = [
    {
      category: "UG - PG Students",
      subtitle: "Undergraduate & postgraduate authors",
      price: "₹ 3,000",
      features: [
        "Access to all technical sessions",
        "Conference e-proceedings",
        "Certificate of participation",
        "Tea/coffee, high tea & working lunch",
      ],
    },
    {
      category: "Research Scholars",
      subtitle: "PhD & doctoral researchers",
      price: "₹ 4,000",
      highlighted: true,
      features: [
        "Access to all technical sessions",
        "Conference e-proceedings",
        "Certificate of participation",
        "Tea/coffee, high tea & working lunch",
        "Priority seating at technical sessions",
      ],
    },
    {
      category: "Regular",
      subtitle: "Faculty / Researchers / Industry",
      price: "₹ 5,000",
      features: [
        "Access to all technical sessions",
        "Conference e-proceedings",
        "Certificate of participation",
        "Tea/coffee, high tea & working lunch",
        "Priority seating at technical sessions",
        "Networking with industry delegates",
      ],
    },
  ];

  const notes = [
    "All registrations include admission to all technical sessions and e-proceedings.",
    "At least one author must register to include the paper in the conference.",
    "The paper will be considered only when full registration is received.",
    "No refunds after acceptance and registration.",
    "Publisher may reject papers failing to meet quality standards.",
    "Tea/coffee, high tea & working lunch will be provided on the conference day.",
  ];

  const policies = [
    {
      title: "Refund & Cancellation",
      points: ["Conference fees are non-refundable.", "All rights are reserved by the Conference Secretariat."],
    },
    {
      title: "Payment Policy",
      points: ["Payments must be made in INR or USD.", "No registration will be confirmed without full payment.", "Only online payments (Visa/MasterCard) are accepted."],
    },
    {
      title: "Terms & Conditions",
      points: ["Registration must be completed before deadlines.", "Terms may change according to government norms and regulations."],
    },
    {
      title: "Privacy Policy",
      points: ["Photography and videography may take place during the event.", "Attendance grants permission for media usage for promotional purposes."],
    },
    {
      title: "Publication Policy",
      points: ["Publication with any specific publisher is not guaranteed.", "Indexing is not guaranteed; indexing bodies act independently."],
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setErrorMessage("");
      setPaymentState("creatingOrder");

      try {
        // Step 1: ask the backend to create a Razorpay order.
        // Note: we never send an amount from the client — the backend
        // looks up the real price for `category` itself.
        const orderRes = await fetch(`${API_BASE_URL}/api/payment/create-order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const orderData = await orderRes.json();

        if (!orderRes.ok) {
          throw new Error(orderData.error || "Could not start payment. Please try again.");
        }

        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded || !window.Razorpay) {
          throw new Error("Could not load payment gateway. Check your connection and try again.");
        }

        setPaymentState("awaitingPayment");

        // Step 2: open Razorpay Checkout with the server-generated order.
        const rzp = new window.Razorpay({
          key: orderData.keyId,
          amount: orderData.amount,
          currency: orderData.currency,
          name: "ICSISDG 2026",
          description: `Registration - ${orderData.planLabel}`,
          order_id: orderData.orderId,
          prefill: {
            name: formData.name,
            email: formData.email,
          },
          theme: { color: "#991b1b" },
          handler: async (response) => {
            // Step 3: verify the payment server-side before treating it as successful.
            setPaymentState("verifying");
            try {
              const verifyRes = await fetch(`${API_BASE_URL}/api/payment/verify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });
              const verifyData = await verifyRes.json();

              if (!verifyRes.ok || !verifyData.success) {
                throw new Error(verifyData.error || "Payment could not be verified.");
              }

              setPaymentState("success");
            } catch (err) {
              setErrorMessage(err.message);
              setPaymentState("error");
            }
          },
          modal: {
            ondismiss: () => {
              // User closed the checkout without paying.
              setPaymentState("idle");
            },
          },
        });

        rzp.on("payment.failed", (response) => {
          setErrorMessage(response.error?.description || "Payment failed. Please try again.");
          setPaymentState("error");
        });

        rzp.open();
      } catch (err) {
        setErrorMessage(err.message);
        setPaymentState("error");
      }
    },
    [formData]
  );

  const scrollToRegisterForm = (e) => {
    e.preventDefault();
    const el = document.getElementById("register-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Registration</h1>
          <p className="mt-4 text-xl text-gray-200">
            Join us for ICSISDG 2026 - 22 November 2026
          </p>
        </div>
      </section>

      {/* Registration Category and Fees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Registration Category and Fees
            </h2>
            <p className="text-gray-600 leading-8">
              On behalf of the Organizing Committee of{" "}
              <span className="font-bold text-red-800">ICSISDG 2026</span>, we
              take pleasure in inviting you to the{" "}
              <span className="font-bold text-red-800">
                International Conference on Smart Innovation for Sustainable
                Development Goals
              </span>
              , to be held on{" "}
              <span className="font-bold text-red-800">22 November 2026</span>.
            </p>
          </div>

          {/* Registration Packages - Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`group relative flex flex-col rounded-2xl overflow-hidden bg-white transition-all duration-300 ease-out hover:-translate-y-2 ${pkg.highlighted
                  ? "shadow-2xl ring-2 ring-yellow-400 md:scale-105 md:hover:scale-[1.07]"
                  : "shadow-lg hover:shadow-2xl border border-gray-100"
                  }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-red-900 text-xs font-bold px-4 py-1.5 rounded-bl-xl tracking-wide">
                    MOST CHOSEN
                  </div>
                )}

                <div
                  className={`p-8 ${pkg.highlighted
                    ? "bg-gradient-to-br from-red-800 to-red-900"
                    : "bg-red-800"
                    } text-white`}
                >
                  <h3 className="text-xl font-bold">{pkg.category}</h3>
                  <p className="text-red-200 text-sm mt-1">{pkg.subtitle}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">{pkg.price}</span>
                    <span className="text-red-200 text-sm font-medium">/ India</span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-8">
                  <ul className="space-y-4 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                        <FaCheck className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#register-form"
                    onClick={scrollToRegisterForm}
                    className={`mt-8 inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold text-sm transition-all duration-300 ${pkg.highlighted
                      ? "bg-yellow-400 text-red-900 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/40"
                      : "bg-red-50 text-red-800 hover:bg-red-700 hover:text-white"
                      }`}
                  >
                    Register <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8 mt-10">
            <h3 className="text-xl font-bold text-red-800 mb-4">Note</h3>
            <ul className="space-y-3">
              {notes.map((note, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>



      {/* Registration Form */}
      <section id="register-form" className="py-10 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-10">
            Registration Form
          </h2>
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Affiliation *</label>
                <input
                  type="text"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  placeholder="University/Organization"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Country *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
                  placeholder="Your country"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Registration Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
              >
                <option value="ugpg">UG - PG Students (₹3,000)</option>
                <option value="scholar">Research Scholars (₹4,000)</option>
                <option value="regular">Regular (Faculty / Researchers / Industry) (₹5,000)</option>
              </select>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-sm">
                By registering, you agree to our Terms & Conditions and will receive conference updates via email.
              </p>
            </div>

            {paymentState === "success" && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="text-green-800 font-semibold">
                  Payment successful! Your registration is confirmed. A confirmation email will follow shortly.
                </p>
              </div>
            )}

            {paymentState === "error" && errorMessage && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="text-red-800 font-semibold">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={["creatingOrder", "awaitingPayment", "verifying"].includes(paymentState)}
              className="w-full bg-red-700 text-white py-3 rounded-lg font-bold hover:bg-red-800 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {paymentState === "creatingOrder" && (
                <>
                  <FaSpinner className="animate-spin" /> Preparing payment...
                </>
              )}
              {paymentState === "awaitingPayment" && (
                <>
                  <FaSpinner className="animate-spin" /> Waiting for payment...
                </>
              )}
              {paymentState === "verifying" && (
                <>
                  <FaSpinner className="animate-spin" /> Verifying payment...
                </>
              )}
              {["idle", "success", "error"].includes(paymentState) && (
                <>
                  <FaLock className="text-sm" /> Proceed to Secure Payment
                </>
              )}
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">
              Payments are processed securely by Razorpay. We never see or store your card details.
            </p>
          </form>
        </div>
      </section>

      {/* Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">
            Policies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-700 rounded-lg p-6">
                <h3 className="font-bold text-red-800 mb-3">{policy.title}</h3>
                <ul className="space-y-2">
                  {policy.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Conference */}
      {/* <section className="py-20 bg-gray-50">
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
      </section> */}
    </>
  );
}

export default Registration;