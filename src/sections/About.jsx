// import React from "react";
import Eyebrow from "../components/Eyebrow.jsx";
import mainVideo from "../assets/videos/main.mp4";
import clip1 from "../assets/videos/clip-1.mp4";
import clip2 from "../assets/videos/clip-2.mp4";
import clip3 from "../assets/videos/clip-3.mp4";

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

        <div className="about-video-main">
          <video src={mainVideo} autoPlay loop muted playsInline />
        </div>
      </div>

      <div className="about-video-row">
        <div className="about-video-item">
          <video src={clip1} autoPlay loop muted playsInline />
        </div>
        <div className="about-video-item">
          <video src={clip2} autoPlay loop muted playsInline />
        </div>
        <div className="about-video-item">
          <video src={clip3} autoPlay loop muted playsInline />
        </div>
      </div>
    </section>
  );
}