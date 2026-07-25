import { Menu, X, Lock } from "lucide-react";
import { NAV_LINKS } from "../data.js";

export default function Navbar({ active, menuOpen, setMenuOpen, scrollTo, onOpenAdmin }) {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">Porto<span>FiardStore</span></div>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <button key={l.id} className={active === l.id ? "is-active" : ""} onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
        <div className="nav-right">
          <span className="badge-status" style={{ display: window.innerWidth < 700 ? "none" : "inline-flex" }}>
            <span className="badge-dot" />
            Open for internship
          </span>
          <button className="nav-admin-btn" onClick={onOpenAdmin} aria-label="Admin dashboard" title="Admin dashboard">
            <Lock size={15} />
          </button>
          <button className="nav-burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>
          ))}
          <button onClick={onOpenAdmin}>Admin</button>
          <span className="badge-status" style={{ width: "fit-content" }}>
            <span className="badge-dot" />
            Open for internship
          </span>
        </div>
      )}
    </>
  );
}