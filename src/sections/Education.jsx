// import React from "react";
import { GraduationCap } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { EDUCATION } from "../data.js";

export default function Education() {
  return (
    <section id="education" className="wrap">
      <Eyebrow index="02">Education journey</Eyebrow>
      <h2 className="section-title">Where it started, where it's going</h2>
      <div className="timeline">
        {EDUCATION.map((e) => (
          <div className="timeline-item" key={e.school}>
            <div className="timeline-year">{e.year}</div>
            <div className="timeline-school">
              <GraduationCap size={16} style={{ marginRight: 8, verticalAlign: -2 }} />
              {e.school}
            </div>
            <div className="timeline-note">{e.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}