// import React from "react";
import { Radio, Download, Heart, ChevronRight } from "lucide-react";
import DitherField from "../components/DitherField.jsx";
import profilePhoto from "../assets/images/Fiky1.jpeg";
import { Fragment } from "react";
import { useTypewriterLines } from "../hooks/useTypewriterLines.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

  const NAME_LINES = ["Moh Fiky", "Ardiansyah"];
export default function Hero({ registerRef, scrollTo }) {
    const [revealRef, visible] = useScrollReveal();
    const { displayed, activeLine } = useTypewriterLines(NAME_LINES, {
    charSpeed: 60,
    lineDelay: 260,
    startDelay: 300,
  });

  return (
    <section
      id="profile"
      ref={(el) => {
        registerRef("profile")(el);
        revealRef.current = el;
      }}
      className={`hero reveal ${visible ? "reveal-visible" : ""}`}
    >
      <DitherField />
      <div className="hero-inner">
        <div>
          <div className="eyebrow"><Radio size={14} /> Frontend &amp; UI/UX developer</div>
            <h1 className="hero-name">
    {NAME_LINES.map((line, i) => (
      <Fragment key={line}>
        {displayed[i]}
        {i === activeLine && <span className="cursor-blink">&nbsp;</span>}
        {i < NAME_LINES.length - 1 && <br />}
      </Fragment>
    ))}
  </h1>
          <div className="hero-role">
            <b>Teknologi Informasi</b> student · Semester 6 · Politeknik Negeri Bali
          </div>
          <div className="hero-cta">
           <a className="btn btn-primary" href="/documents/CV_fikyardiansyah.pdf" 
             target="_blank" rel="noreferrer">
              <Download size={15} /> 
              <b>Lihat & Download CV</b>
            </a>
            <a className="btn btn-coral" href="https://saweria.co/fikyARDstory" rel="noreferrer">
              <Heart size={15} /> 
              <b>Support via Saweria</b>
            </a>
            <button className="btn" onClick={() => scrollTo("projects")}>
              View projects <ChevronRight size={15} />
            </button>
          </div>
        </div>
        <div className="photo-frame">
          <span className="corner tl" /><span className="corner br" />
          <img src={profilePhoto} alt="Moh Fiky Ardiansyah" className="photo-img" />
        </div>
      </div>
    </section>
  );
}