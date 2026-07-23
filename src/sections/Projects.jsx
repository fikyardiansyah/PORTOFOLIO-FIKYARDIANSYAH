// import React from "react";
import Eyebrow from "../components/Eyebrow.jsx";
import { PROJECTS } from "../data.js";

export default function Projects({ registerRef }) {
  return (
    <section id="projects" ref={registerRef("projects")} className="wrap">
      <Eyebrow index="04">Project</Eyebrow>
      <h2 className="section-title">Things I've shipped</h2>
      <p className="section-lede">
        A selection of web projects covering tourism, local business, and vehicle rental —
        spanning Vue.js, Next.js, and full-stack builds with Django and Supabase.
      </p>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.id}>
            <div className={`project-thumb ${p.accent}`}>
              <span className="tag-index">{p.tag}</span>
            </div>
            <div className="project-body">
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-stack">
                {p.stack.map((t) => <span className="stack-pill" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="placeholder-note">
        Note — thumbnails above are placeholders. Swap the `.project-thumb` div in each card
        for an &lt;img src="/your-screenshot.jpg" /&gt; to show real project screenshots.
      </div>
    </section>
  );
}