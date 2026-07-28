// import React from "react";
import { Github, Instagram, Linkedin, Mail, Dot } from "lucide-react";

const EXPLORE_LINKS = [
  { label: "Profile", href: "#profile" },
  { label: "Project", href: "#projects" },
  { label: "Achievement", href: "#achievements" },
];

const INFO_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

const CONNECT_LINKS = [
  { label: "Leave a comment", href: "#guestbook" },
  { label: "Send a message", href: "#contact" },
  { label: "Download CV", href: "/documents/CV_fikyardiansyah.pdf" },
];

export default function Footer() {
  return (
    <footer className="footer-wrap wrap">
      <div className="footer-panels">
        <div className="footer-panel">
          <div className="footer-panel-head">
            <h3>Before you go,<br />check out these links</h3>
            <span className="footer-bubble">See you around!</span>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <span className="footer-col-title">Explore</span>
              {EXPLORE_LINKS.map((l) => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Info</span>
              {INFO_LINKS.map((l) => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Connect</span>
              {CONNECT_LINKS.map((l) => (
                <a key={l.label} href={l.href} target={l.href.startsWith("/") ? "_blank" : undefined} rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-panel">
          <div className="footer-panel-head">
            <h3>Let's work<br />together</h3>
          </div>
          <div className="footer-quick-list">
            <a href="mailto:fikyardiansyah01@gmail.com">Send me an email</a>
            <a href="tel:089635542413">Give me a call</a>
            <a href="https://saweria.co/fikyARDstory" target="_blank" rel="noreferrer">Support via Saweria</a>
            <a href="#contact">Work with me</a>
          </div>
          <div className="footer-social-row">
            <a className="footer-social-icon" href="https://github.com/fikyardiansyah" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a className="footer-social-icon" href="https://www.instagram.com/fikyardiansyah_30/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a className="footer-social-icon footer-social-follow" href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
              {/* <span className="footer-bubble footer-bubble-pink">Follow me</span> */}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-badge">
          <Mail size={12} /> Portfolio by Moh Fiky Ardiansyah
        </span>
        <div className="footer-bottom-right">
          <span>© {new Date().getFullYear()} Moh Fiky Ardiansyah — built with React</span>
          <span className="eyebrow" style={{ marginBottom: 0, display: "flex", alignItems: "center", gap: 6 }}>
            <Dot size={16} style={{ color: "var(--accent)" }} /> Available for internship
          </span>
        </div>
      </div>
    </footer>
  );
}