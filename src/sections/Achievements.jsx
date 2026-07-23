// import React from "react";
import Eyebrow from "../components/Eyebrow.jsx";
import StatIcon from "../components/StatIcon.jsx";
import { CERTIFICATES } from "../data.js";

export default function Achievements({ registerRef }) {
  return (
    <section id="achievements" ref={registerRef("achievements")} className="wrap">
      <Eyebrow index="05">Achievement</Eyebrow>
      <h2 className="section-title">Certificates</h2>
      <div className="cert-list">
        {CERTIFICATES.map((c) => (
          <div className="cert-card" key={c.id}>
            <div className="cert-banner"><StatIcon name={c.icon} /></div>
            <div className="cert-body">
              <div className="cert-org">{c.org}</div>
              <div className="cert-title">{c.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="placeholder-note">
        Note — banners above are placeholders. Swap each `.cert-banner` for an
        &lt;img src="/your-certificate.jpg" /&gt; to show the actual certificate scans.
      </div>
    </section>
  );
}