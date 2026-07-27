// import React from "react";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { CERTIFICATES } from "../data.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function Achievements({ registerRef }) {
  const [ref, visible] = useScrollReveal();
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section
      id="achievements"
      ref={(el) => { registerRef("achievements")(el); ref.current = el; }}
      className={`wrap reveal ${visible ? "reveal-visible" : ""}`}
    >
      <Eyebrow index="05">Achievement</Eyebrow>
      <h2 className="section-title">Certificates</h2>
      <div className="cert-list">
        {CERTIFICATES.map((c) => (
          <button
            className="cert-card"
            key={c.id}
            onClick={() => setActiveCert(c)}
            aria-label={`View ${c.title} in detail`}
          >
            <div className="cert-banner">
              <img src={c.image} alt={c.title} />
              <span className="cert-banner-overlay">
                <ZoomIn size={18} /> View certificate
              </span>
            </div>
            <div className="cert-body">
              <div className="cert-org">{c.org}</div>
              <div className="cert-title">{c.title}</div>
            </div>
          </button>
        ))}
      </div>

      {activeCert && (
        <div className="video-modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="video-modal project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <span className="video-modal-title">{activeCert.title}</span>
              <button className="video-modal-close" onClick={() => setActiveCert(null)} aria-label="Close">
                <X size={18} />
              </button>
            </div>
            <div className="project-modal-image-wrap">
              <img src={activeCert.image} alt={activeCert.title} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}