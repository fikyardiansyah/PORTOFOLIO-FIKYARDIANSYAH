// import React from "react";
import { Dot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Moh Fiky Ardiansyah — built with React</span>
      <span className="eyebrow" style={{ marginBottom: 0 }}>
        <Dot size={16} style={{ color: "var(--accent)" }} /> Available for internship
      </span>
    </footer>
  );
}