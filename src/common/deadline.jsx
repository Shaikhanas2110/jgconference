import React, { useEffect, useState } from "react";
import "./deadline.css";

function DeadlinePopup() {
  const [open, setOpen] = useState(true);

  // Close on Escape + lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  
  return (
    <div className="dp-overlay" onClick={() => setOpen(false)}>
      <div
        className="dp-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dp-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="dp-close"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
        >
          ×
        </button>

        <p className="dp-surprise">🎉 SURPRISE! 🎉</p>
        <h2 id="dp-title" className="dp-title">
          We Have GREAT NEWS!
        </h2>
        <p className="dp-subtitle">Your Research Journey Gets More Time!</p>

        <p className="dp-text">
          Great news! By popular demand, the opportunity to submit your research
          papers has been extended.
        </p>
        <p className="dp-text">
          This is your chance to share your ideas, showcase your research, and
          make your contribution count!
        </p>

        <div className="dp-deadline">
          <span className="dp-deadline-label">NEW SUBMISSION DEADLINE</span>
          <span className="dp-deadline-date">5th December 2026</span>
        </div>

        <p className="dp-cta">Don't Miss This Opportunity!</p>
        <p className="dp-tagline">More Time, More Ideas, More Opportunities</p>

        <button className="dp-button" onClick={() => setOpen(false)}>
          Got it
        </button>
      </div>
    </div>
  );
}

export default DeadlinePopup;
