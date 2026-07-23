import { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Education from "./sections/Education.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Achievements from "./sections/Achievements.jsx";
import Contact from "./sections/Contact.jsx";
import Guestbook from "./sections/Guestbook.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("profile");
  const sectionRefs = useRef({});

  useEffect(() => {
    const opts = { rootMargin: "-45% 0px -50% 0px", threshold: 0 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, opts);
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const registerRef = useCallback((id) => (el) => {
    sectionRefs.current[id] = el;
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="site">
      <Navbar active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <Hero registerRef={registerRef} scrollTo={scrollTo} />
      <About />
      <Education />
      <Skills />
      <Projects registerRef={registerRef} />
      <Achievements registerRef={registerRef} />
      <Guestbook />
      <Contact />
      <Footer />
    </div>
  );
}