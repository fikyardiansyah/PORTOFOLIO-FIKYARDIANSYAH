// import React from "react";
import { useState } from "react";
import { Phone, Mail, MapPin, Github, ExternalLink, Send } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { supabase } from "../lib/supabase.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function Contact() {
  const [ref, visible] = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submitMessage = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setSending(true);
    setError("");
    const { error: insertError } = await supabase.from("messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
    setSending(false);

    if (insertError) {
      setError("Gagal mengirim pesan, coba lagi.");
      return;
    }

    setForm({ name: "", email: "", message: "" });
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className={`wrap reveal ${visible ? "reveal-visible" : ""}`}>
      <Eyebrow index="06">Contact</Eyebrow>
      
      {/* Bungkus dengan contact-split */}
      <div className="contact-split">
        
        {/* KOLOM KIRI: Judul dan Grid Kartu */}
        <div className="contact-info-side">
          <h2 className="section-title">Information Contact</h2>
          <p className="info-subtitle">
            My inbox is always open. Whether you have a question, a project proposal, 
            or just want to say hello, I'll get back to you!
          </p>
      
      <div className="info-list">
  <a href="tel:089635542413" className="info-item">
    <Phone size={19} className="info-icon" />
    <span>+62 896-3554-2413</span>
  </a>

  <a href="mailto:fikyardiansyah01@gmail.com" className="info-item">
    <Mail size={19} className="info-icon" />
    <span>fikyardiansyah01@gmail.com</span>
  </a>

  <div className="info-item">
    <MapPin size={19} className="info-icon" />
    <span>Denpasar Barat, Bali, Indonesia</span>
  </div>

  <a href="https://github.com/fikyardiansyah" target="_blank" rel="noreferrer" className="info-item">
    <Github size={19} className="info-icon" />
    <span>github.com/fikyardiansyah</span>
  </a>
</div>
    </div>

        {/* KOLOM KANAN: Form */}
        <form className="gb-form contact-form" onSubmit={submitMessage}>
          <div className="contact-form-note">
            <span className="lock-dot" /> Contact me if it's important.
          </div>
          <div className="gb-field">
            <label>Your Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div className="gb-field">
            <label>Your Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>
          <div className="gb-field">
            <label>Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What would you like to say?"
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={sending}>
            <Send size={14} /> {sending ? "Sending..." : "Send message"}
          </button>
          {sent && <div className="gb-toast">Message sent — thank you!</div>}
          {error && <div className="gb-toast" style={{ color: "var(--coral)" }}>{error}</div>}
        </form>

      </div>
    </section>
  );
}