import React, { useState, useEffect, useCallback } from "react";
import { FaArrowRight, FaLock, FaSpinner } from "react-icons/fa";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

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

  const indianFees = [
    { category: "UG - PG Students", fee: "INR 3,000" },
    { category: "Research Scholars", fee: "INR 4,000" },
    {
      category: "Regular (Faculty / Researchers / Industry)",
      fee: "INR 5,000",
    },
  ];

  const registrationDeadline = "22 November 2026";

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
      points: [
        "Conference fees are non-refundable.",
        "All rights are reserved by the Conference Secretariat.",
      ],
    },
    {
      title: "Payment Policy",
      points: [
        "Payments must be made in INR or USD.",
        "No registration will be confirmed without full payment.",
        "Only online payments (Visa/MasterCard) are accepted.",
      ],
    },
    {
      title: "Terms & Conditions",
      points: [
        "Registration must be completed before deadlines.",
        "Terms may change according to government norms and regulations.",
      ],
    },
    {
      title: "Privacy Policy",
      points: [
        "Photography and videography may take place during the event.",
        "Attendance grants permission for media usage for promotional purposes.",
      ],
    },
    {
      title: "Publication Policy",
      points: [
        "Publication with any specific publisher is not guaranteed.",
        "Indexing is not guaranteed; indexing bodies act independently.",
      ],
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
        const orderRes = await fetch(
          `${API_BASE_URL}/api/payment/create-order`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          },
        );

        const orderData = await orderRes.json();

        if (!orderRes.ok) {
          throw new Error(
            orderData.error || "Could not start payment. Please try again.",
          );
        }

        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded || !window.Razorpay) {
          throw new Error(
            "Could not load payment gateway. Check your connection and try again.",
          );
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
              const verifyRes = await fetch(
                `${API_BASE_URL}/api/payment/verify`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  }),
                },
              );
              const verifyData = await verifyRes.json();

              if (!verifyRes.ok || !verifyData.success) {
                throw new Error(
                  verifyData.error || "Payment could not be verified.",
                );
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
          setErrorMessage(
            response.error?.description || "Payment failed. Please try again.",
          );
          setPaymentState("error");
        });

        rzp.open();
      } catch (err) {
        setErrorMessage(err.message);
        setPaymentState("error");
      }
    },
    [formData],
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
          <h1 className="text-5xl font-bold">Registration</h1>
          <p className="mt-4 text-xl text-red-100">
            Join us for ICSISDG 2026 - 27 November 2026
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
              <span className="font-bold text-red-800">27 November 2026</span>.
            </p>
          </div>

          {/* Registration Category and Fees - Indian Delegates Table */}
          <div className="flex justify-center">
            <div className="w-full max-w-xl rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100">
              <div className="bg-gradient-to-r from-red-900 to-red-950 px-8 py-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  Indian Delegates
                </h3>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between bg-yellow-50 rounded-lg px-5 py-3 mb-4">
                  <span className="text-xs font-bold text-gray-500 tracking-wider">
                    CATEGORY
                  </span>
                  <span className="text-xs font-bold text-gray-500 tracking-wider">
                    FEE (INCL. GST)
                  </span>
                </div>

                <ul className="divide-y divide-gray-100">
                  {indianFees.map((row, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between gap-4 py-4"
                    >
                      <span className="text-gray-700 font-medium">
                        {row.category}
                      </span>
                      <span className="bg-yellow-50 border border-yellow-300 text-red-800 font-extrabold text-sm px-4 py-1.5 rounded-lg whitespace-nowrap">
                        {row.fee}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Deadline notice */}
          <div className="bg-red-50 border border-red-100 rounded-xl px-8 py-5 mt-10 text-center">
            <p className="text-red-800">
              <span className="font-bold">Important:</span> Registration window
              opening soon!
              {/* <a
                href="#register-form"
                onClick={scrollToRegisterForm}
                className="font-bold underline decoration-red-300 hover:text-red-900"
              >
                {registrationDeadline}
              </a> */}
              .
            </p>
          </div>

          {/* Proceed to Registration */}
          <div className="flex justify-center mt-10">
            <a
              href="#register-form"
              onClick={scrollToRegisterForm}
              className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 hover:shadow-yellow-400/40 transition-all duration-300"
            >
              Registration Opening Soon <FaArrowRight />
            </a>
          </div>

          {/* Notes */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8 mt-10">
            <h3 className="text-xl font-bold text-red-800 mb-4">Note</h3>
            <ul className="space-y-3">
              {notes.map((note, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      {/* <section id="register-form" className="py-10 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-10">
            Registration Form
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
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
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
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
                <label className="block text-gray-700 font-semibold mb-2">
                  Affiliation *
                </label>
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
                <label className="block text-gray-700 font-semibold mb-2">
                  Country *
                </label>
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
              <label className="block text-gray-700 font-semibold mb-2">
                Registration Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 outline-none"
              >
                <option value="ugpg">UG - PG Students (₹3,000)</option>
                <option value="scholar">Research Scholars (₹4,000)</option>
                <option value="regular">
                  Regular (Faculty / Researchers / Industry) (₹5,000)
                </option>
              </select>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-sm">
                By registering, you agree to our Terms & Conditions and will
                receive conference updates via email.
              </p>
            </div>

            {paymentState === "success" && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="text-green-800 font-semibold">
                  Payment successful! Your registration is confirmed. A
                  confirmation email will follow shortly.
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
              disabled={[
                "creatingOrder",
                "awaitingPayment",
                "verifying",
              ].includes(paymentState)}
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
              Payments are processed securely by Razorpay. We never see or store
              your card details.
            </p>
          </form>
        </div>
      </section> */}

      {/* Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">
            Policies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-red-50 border-l-4 border-red-700 rounded-lg p-6"
              >
                <h3 className="font-bold text-red-800 mb-3">{policy.title}</h3>
                <ul className="space-y-2">
                  {policy.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
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
    </>
  );
}

export default Registration;
