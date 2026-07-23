// import React from "react";
import { Code2, Wrench, Database, Palette, Terminal } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { SKILLS } from "../data.js";

const ICONS = { Code2, Wrench, Database, Palette, Terminal };

export default function Skills() {
  return (
    <section id="skills" className="wrap">
      <Eyebrow index="03">Skills</Eyebrow>
      <h2 className="section-title">Tools I build with</h2>
      <div className="skills-grid">
        {SKILLS.map((s) => {
          const Icon = ICONS[s.iconName];
          return (
            <div className="skill-card" key={s.group}>
              <div className="skill-head"><Icon size={17} /><span>{s.group}</span></div>
              <div className="skill-tags">
                {s.items.map((i) => <span className="skill-tag" key={i}>{i}</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}