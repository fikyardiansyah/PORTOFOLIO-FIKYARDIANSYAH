// import React from "react";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import mainVideo from "../assets/videos/main.mp4";
import clip1 from "../assets/videos/clip-1.mp4";
import clip2 from "../assets/videos/clip-2.mp4";
import clip3 from "../assets/videos/clip-3.mp4";
// import clip4 from "../assets/videos/clip-4.mp4";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

const CLIPS = [
  {
    id: "clip1",
    src: clip1,
    label: "Mercedes-Benz G63 AMG GT55 - 0-100 km/h Acceleration",
    synopsis: "Uji akselerasi Mercedes-Benz G63 AMG GT55 dari 0 ke 100 km/h, menampilkan tenaga dan performa mesin V8 twin-turbo khas AMG.",
    url: "https://youtu.be/6_YMnm5JFGc?si=qiJdmcLdroUBDdYS",
  },
  {
    id: "clip2",
    src: clip2,
    label: "Nissan GT-R (R34) - 0-100 km/h Acceleration",
    synopsis: "Momen ikonik akselerasi Nissan GT-R R34, salah satu legenda JDM dengan performa mesin RB26DETT yang legendaris.",
    url: "https://youtu.be/kwS7sqWfK6A?si=rHHSLMFdgLWOAYO5",
  },
  {
    id: "clip3",
    src: clip3,
    label: "Nissan GT-R (R35) - 0-100 km/h Acceleration",
    synopsis: "Generasi modern Nissan GT-R R35 menunjukkan lompatan performa dengan sistem AWD dan mesin twin-turbo V6 VR38DETT.",
    url: "https://youtu.be/GmqQV_KAz8Y?si=TEt_7-_2xGZfY8VK",
  },
];

export default function About() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [ref, visible] = useScrollReveal();
  const [slideIndex, setSlideIndex] = useState(0);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setSlideIndex((i) => (i + 1) % CLIPS.length);
    }, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  const goToSlide = (i) => {
    clearInterval(autoPlayRef.current);
    setSlideIndex(i);
    autoPlayRef.current = setInterval(() => {
      setSlideIndex((idx) => (idx + 1) % CLIPS.length);
    }, 5000);
  };

  return (
    <section id="about" ref={ref} className={`wrap reveal ${visible ? "reveal-visible" : ""}`}>
      <Eyebrow index="01">About</Eyebrow>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm <strong>Moh Fiky Ardiansyah</strong>, a 6th-semester Information Technology
            student at Politeknik Negeri Bali with a strong interest in
            <strong> Frontend Development</strong> and <strong>UI/UX Design</strong>.
            I enjoy building clean, responsive, and user-friendly digital experiences
            that combine functionality with modern design.
          </p>
          <p>
            I like working close to the details: consistent spacing, honest typography, and
            interactions that make sense the first time. Outside of the screen, I stay active
            through <strong>sports</strong>, which keeps me disciplined and gives me the focus
            I bring back into my work.
          </p>
          <p>
            Outside of development, you'll usually find me watching Formula 1 or staying
            active through sports. I'm a <strong>Max Verstappen</strong> supporter and
            appreciate his focus, consistency, and competitive mindset—values that also
            shape how I learn and build software.
          </p>
          <div className="focus-tags">
            <span className="focus-tag">Frontend development</span>
            <span className="focus-tag">UI / UX design</span>
            <span className="focus-tag">Sports enthusiast</span>
            <span className="focus-tag">Max Verstappen Supporter</span>
          </div>
        </div>

        <div className="about-video-main">
          <video src={mainVideo} autoPlay loop muted playsInline />
        </div>
      </div>

      <div className="must-watch-label">
        <span className="must-watch-line" />
        <span className="must-watch-text">Visual Highlight</span>
        <span className="must-watch-line" />
      </div>

      <div className="video-carousel">
        <div
          className="video-carousel-track"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {CLIPS.map((clip) => (
            <div className="video-carousel-slide" key={clip.id}>
              <button
                className="video-carousel-video-btn"
                onClick={() => setActiveVideo(clip)}
                aria-label={`View ${clip.label} in detail`}
              >
                <video src={clip.src} autoPlay loop muted playsInline />
                <span className="about-video-overlay">View</span>
              </button>
              <a
                href={clip.url}
                target="_blank"
                rel="noreferrer"
                className="about-video-caption"
            >
                {clip.label}
              </a>
            </div>
          ))}
        </div>

        <div className="video-carousel-dots">
          {CLIPS.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === slideIndex ? "dot-active" : ""}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <span className="video-modal-title">{activeVideo.label}</span>
              <button className="video-modal-close" onClick={() => setActiveVideo(null)} aria-label="Close">
                <X size={18} />
              </button>
            </div>
            <video src={activeVideo.src} controls autoPlay loop playsInline />
            {activeVideo.synopsis && (
              <div className="video-modal-synopsis">
                <span className="video-modal-synopsis-label">Synopsis</span>
                <p>{activeVideo.synopsis}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}