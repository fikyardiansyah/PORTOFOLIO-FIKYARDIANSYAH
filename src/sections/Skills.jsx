// import React from "react";
import Eyebrow from "../components/Eyebrow.jsx";
import { SKILLS } from "../data.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function Skills() {
  const allSkills = SKILLS.flatMap((group) => group.items);
  const [ref, visible] = useScrollReveal();

  return (
    <section id="skills" ref={ref} className={`wrap reveal ${visible ? "reveal-visible" : ""}`}>
      <Eyebrow index="03">Skills</Eyebrow>
      <h2 className="section-title">Tools I build with</h2>
      <div className="skills-panel">
        <div className="skills-icon-grid">
          {allSkills.map((item) => (
            <div className="skill-icon-item" key={item.name}>
              <div className="skill-icon-box">
                {item.slug ? (
                  <img
                    src={`https://skillicons.dev/icons?i=${item.slug}`}
                    alt={item.name}
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="skill-icon-fallback">{item.name.charAt(0)}</div>
                )}
              </div>
              <span className="skill-icon-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}