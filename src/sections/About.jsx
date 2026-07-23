// import React from "react";
import Eyebrow from "../components/Eyebrow.jsx";

export default function About() {
  return (
    <section id="about" className="wrap">
      <Eyebrow index="01">About</Eyebrow>
      <h2 className="section-title">A quick word on who I am</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm <strong>Moh Fiky Ardiansyah</strong>, a 6th-semester Information Technology
            student at Politeknik Negeri Bali. My main focus sits at the intersection of
            <strong> frontend development</strong> and <strong>UI/UX design</strong> — I enjoy
            shaping ideas into interfaces that feel clear, fast, and easy to use.
          </p>
          <p>
            I like working close to the details: consistent spacing, honest typography, and
            interactions that make sense the first time. Outside of the screen, I stay active
            through <strong>sports</strong>, which keeps me disciplined and gives me the focus
            I bring back into my work.
          </p>
          <div className="focus-tags">
            <span className="focus-tag">Frontend development</span>
            <span className="focus-tag">UI / UX design</span>
            <span className="focus-tag">Sports enthusiast</span>
          </div>
        </div>
        <div className="info-card">
          <div className="info-row"><span className="k">Name</span><span className="v">Moh Fiky Ardiansyah</span></div>
          <div className="info-row"><span className="k">Major</span><span className="v">Information Technology</span></div>
          <div className="info-row"><span className="k">Semester</span><span className="v">6</span></div>
          <div className="info-row"><span className="k">Focus</span><span className="v">Frontend &amp; UI/UX</span></div>
          <div className="info-row"><span className="k">Status</span><span className="v">Open for internship</span></div>
          <div className="info-row"><span className="k">Base</span><span className="v">Denpasar, Bali</span></div>
        </div>
      </div>
    </section>
  );
}