// import React from "react";
import { Phone, Mail, MapPin, Github, ExternalLink } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";

export default function Contact() {
  return (
    <section id="contact" className="wrap">
      <Eyebrow index="06">Contact</Eyebrow>
      <h2 className="section-title">Let's talk</h2>
      <div className="contact-grid">
        <a className="contact-card" href="tel:089635542413">
          <div className="contact-icon"><Phone size={19} /></div>
          <div><div className="contact-k">Phone</div><div className="contact-v link">089635542413</div></div>
        </a>
        <a className="contact-card" href="mailto:fikyardiansyah01@gmail.com">
          <div className="contact-icon"><Mail size={19} /></div>
          <div><div className="contact-k">Email</div><div className="contact-v link">fikyardiansyah01@gmail.com</div></div>
        </a>
        <div className="contact-card">
          <div className="contact-icon"><MapPin size={19} /></div>
          <div><div className="contact-k">Location</div><div className="contact-v">Denpasar Barat, Bali, Indonesia</div></div>
        </div>
        <a className="contact-card" href="https://github.com/fikyardiansyah" target="_blank" rel="noreferrer">
          <div className="contact-icon"><Github size={19} /></div>
          <div>
            <div className="contact-k">GitHub</div>
            <div className="contact-v link">
              github.com/fikyardiansyah <ExternalLink size={11} style={{ display: "inline", marginLeft: 4 }} />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}