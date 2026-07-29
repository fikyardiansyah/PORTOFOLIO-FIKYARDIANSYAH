// import React from "react";
import { GraduationCap } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { EDUCATION } from "../data.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function Education() {
  const [ref, visible] = useScrollReveal();
  const orderedEducation = [...EDUCATION].reverse();

  return (
    <section id="education" ref={ref} className={`wrap reveal ${visible ? "reveal-visible" : ""}`}>
      <Eyebrow index="02">Education journey</Eyebrow>
      <h2 className="section-title">Where it started, where it's going</h2>
      <div className="timeline">
        {orderedEducation.map((e, i) => (
          <div
            className="timeline-item"
            key={e.school}
            style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
          >
            <div className="timeline-dot">
              <GraduationCap size={16} />
            </div>
            <div className="timeline-content">
              <div className="timeline-year">{e.year}</div>
              <div className="timeline-school">{e.school}</div>
              <div className="timeline-note">{e.note}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}