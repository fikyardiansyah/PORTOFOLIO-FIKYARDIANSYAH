// import React from "react";
import { useState, useEffect, useRef } from "react";
import { X, ZoomIn } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { CERTIFICATES } from "../data.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function Achievements({ registerRef }) {
  const [ref, visible] = useScrollReveal();
  const [activeCert, setActiveCert] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const autoPlayRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setSlideIndex((i) => (i + 1) % CERTIFICATES.length);
    }, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  const resetAutoPlay = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setSlideIndex((i) => (i + 1) % CERTIFICATES.length);
    }, 5000);
  };

  const goToSlide = (i) => {
    setSlideIndex(i);
    resetAutoPlay();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      setSlideIndex((i) => (i + 1) % CERTIFICATES.length);
      resetAutoPlay();
    } else if (diff < -50) {
      setSlideIndex((i) => (i - 1 + CERTIFICATES.length) % CERTIFICATES.length);
      resetAutoPlay();
    }
  };

  return (
    <section
      id="achievements"
      ref={(el) => { registerRef("achievements")(el); ref.current = el; }}
      className={`wrap reveal ${visible ? "reveal-visible" : ""}`}
    >
      <Eyebrow index="05">Achievement</Eyebrow>
      <h2 className="section-title">Certificates</h2>

      <div className="cert-carousel">
        <div
          className="cert-carousel-track"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {CERTIFICATES.map((c) => (
            <div className="cert-carousel-slide" key={c.id}>
              <button
                className="cert-card"
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
            </div>
          ))}
        </div>

        <div className="cert-carousel-dots">
          {CERTIFICATES.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === slideIndex ? "dot-active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
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