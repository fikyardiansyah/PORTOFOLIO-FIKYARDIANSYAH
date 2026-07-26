// import React from "react";
import { Radio, Download, Heart, ChevronRight } from "lucide-react";
import DitherField from "../components/DitherField.jsx";
import profilePhoto from "../assets/images/Fiky1.jpeg";

export default function Hero({ registerRef, scrollTo }) {
  return (
    <section id="profile" ref={registerRef("profile")} className="hero">
      <DitherField />
      <div className="hero-inner">
        <div>
          <div className="eyebrow"><Radio size={14} /> Frontend &amp; UI/UX developer</div>
          <h1 className="hero-name">
            Moh Fiky<br />Ardiansyah<span className="cursor-blink">&nbsp;</span>
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
            <a className="btn btn-coral" href="https://saweria.co/" target="_blank" rel="noreferrer">
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