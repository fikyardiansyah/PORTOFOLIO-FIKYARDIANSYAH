// import React from "react";
import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Info, ExternalLink, Github, Check } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { PROJECTS } from "../data.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function Projects({ registerRef }) {
  const [ref, visible] = useScrollReveal();
  const [activeProject, setActiveProject] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const autoPlayRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setSlideIndex((i) => (i + 1) % PROJECTS.length);
    }, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  const resetAutoPlay = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setSlideIndex((i) => (i + 1) % PROJECTS.length);
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
      setSlideIndex((i) => (i + 1) % PROJECTS.length);
      resetAutoPlay();
    } else if (diff < -50) {
      setSlideIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
      resetAutoPlay();
    }
  };

  const openProject = (project) => {
    setActiveProject(project);
    setImgIndex(0);
  };

  const closeModal = () => setActiveProject(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % activeProject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + activeProject.images.length) % activeProject.images.length);
  };

  return (
    <section
      id="projects"
      ref={(el) => { registerRef("projects")(el); ref.current = el; }}
      className={`wrap reveal ${visible ? "reveal-visible" : ""}`}
    >
      <Eyebrow index="04">Project</Eyebrow>
      <h2 className="section-title">Things I've shipped</h2>
      <p className="section-lede">
        A selection of web projects covering tourism, local business, and vehicle rental —
        spanning Vue.js, Next.js, and full-stack builds with Django and Supabase.
      </p>

      <div className="project-carousel">
        <div
          className="project-carousel-track"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {PROJECTS.map((p) => (
            <div className="project-carousel-slide" key={p.id}>
              <div className="project-card">
                <button
                  className={`project-thumb ${p.accent}`}
                  onClick={() => openProject(p)}
                  aria-label={`View ${p.name} screenshots`}
                >
                  <img src={p.images[0]} alt={p.name} />
                  <span className="project-thumb-overlay">
                    <ZoomIn size={18} /> View gallery
                  </span>
                  <span className="tag-index">{p.tag}</span>
                </button>
                <div className="project-body">
                  <div className="project-name">{p.name}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-stack">
                    {p.stack.map((t) => <span className="stack-pill" key={t}>{t}</span>)}
                  </div>
                  <button className="project-more-btn" onClick={() => openProject(p)}>
                    Selengkapnya <span className="btn-arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="project-carousel-dots">
          {PROJECTS.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === slideIndex ? "dot-active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <span className="video-modal-title">{activeProject.name}</span>
              <button className="video-modal-close" onClick={closeModal} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div className="project-modal-scroll">
              <div className="project-modal-image-wrap">
                {activeProject.images.length > 1 && (
                  <button className="project-modal-nav prev" onClick={prevImage} aria-label="Previous image">
                    <ChevronLeft size={22} />
                  </button>
                )}
                <img src={activeProject.images[imgIndex]} alt={activeProject.name} />
                {activeProject.images.length > 1 && (
                  <button className="project-modal-nav next" onClick={nextImage} aria-label="Next image">
                    <ChevronRight size={22} />
                  </button>
                )}
              </div>
              {activeProject.images.length > 1 && (
                <div className="project-modal-dots">
                  {activeProject.images.map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i === imgIndex ? "dot-active" : ""}`}
                      onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                    />
                  ))}
                </div>
              )}

              <div className="project-details">
                <p className="project-details-text">{activeProject.fullDescription}</p>

                {activeProject.features && (
                  <>
                    <span className="project-details-label">Key Features</span>
                    <ul className="project-details-list">
                      {activeProject.features.map((f) => (
                        <li key={f}><Check size={14} /> {f}</li>
                      ))}
                    </ul>
                  </>
                )}

                <span className="project-details-label">Tech Stack</span>
                <div className="project-stack" style={{ marginBottom: 20 }}>
                  {activeProject.stack.map((t) => <span className="stack-pill" key={t}>{t}</span>)}
                </div>

                <div className="project-details-links">
                  {activeProject.liveUrl && (
                    <a href={activeProject.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" className="btn">
                      <Github size={14} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}