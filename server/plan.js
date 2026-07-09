// Server-side source of truth for pricing.
// The client only ever sends a `category` key — never an amount.
// This is the single most important anti-fraud measure in the whole
// flow: if we trusted a client-supplied price, anyone could open
// devtools and register for ₹1.

const PLANS = {
    ugpg: {
        label: "UG - PG Students",
        amountInRupees: 3000,
    },
    scholar: {
        label: "Research Scholars",
        amountInRupees: 4000,
    },
    regular: {
        label: "Regular (Faculty / Researchers / Industry)",
        amountInRupees: 5000,
    },
};

const CURRENCY = "INR";

function getPlan(category) {
    return PLANS[category] || null;
}

// Razorpay expects amount in the smallest currency unit (paise for INR)
function toPaise(rupees) {
    return Math.round(rupees * 100);
}

module.exports = { PLANS, CURRENCY, getPlan, toPaise };