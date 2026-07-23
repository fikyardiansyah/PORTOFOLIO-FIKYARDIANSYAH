import { useState, useEffect, useRef, useCallback } from "react";
import { 
  Menu, X, Phone, Mail, MapPin, Download, Heart, Star, 
  GraduationCap, ChevronRight, Send, Radio 
} from "lucide-react";

// Pastikan folder kamu namanya 'components' (pakai s) atau sesuaikan
import DitherField from "./components/DitherField"; 
import { NAV_LINKS, EDUCATION, SKILLS, PROJECTS } from "./constants/data";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("profile");
  const sectionRefs = useRef({});
  


 // 2. BUAT ULANG FUNGSI INI (Gunakan useCallback agar tidak error)
  const registerRef = useCallback((id) => (el) => {
    if (el) {
      sectionRefs.current[id] = el;
    }
  }, []);

  // 3. Logika deteksi scroll (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Amati semua section yang sudah didaftarkan
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  /* Kita hapus bg-white dan text-zinc-900, kita ganti ke bg-[#0a0a0b] */
  <div className="min-h-screen bg-[#0a0a0b] text-[#ecece6] font-sans selection:bg-accent/30">
    
    {/* EFEK OVERLAY RETRO (Agar makin mirip hacker) */}
    <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    <div className="fixed inset-0 pointer-events-none z-[61] bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.015)_0px,rgba(255,255,255,0.015)_1px,transparent_1px,transparent_3px)]" />
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl uppercase tracking-tighter font-display">MFA<span className="text-accent">.</span></div>
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
          {NAV_LINKS.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} 
              className={`hover:text-accent transition-colors cursor-pointer ${active === link.id ? 'text-accent' : 'text-zinc-500'}`}>
              {link.label}
            </button>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* HERO SECTION */}
      <section id="profile" ref={registerRef("profile")} className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden">
        <DitherField />
        <div className="relative z-10 max-w-5xl">
          <div className="flex items-center gap-3 text-accent mb-4 font-mono text-xs uppercase tracking-widest">
            <Radio size={14} /> Frontend & UI/UX Student
          </div>
          <h1 className="font-bold text-5xl md:text-8xl leading-none tracking-tighter mb-8 font-display">
            Moh Fiky<br />Ardiansyah<span className="inline-block w-3 h-10 md:h-20 bg-accent animate-pulse ml-3" />
          </h1>
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <button className="bg-accent text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 cursor-pointer hover:brightness-110">
              <Download size={16} /> CV
            </button>
            <button className="text-coral flex items-center gap-2 px-4 border border-coral/20 rounded-lg">
              <Heart size={16} fill="currentColor" /> Support Me
            </button>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 md:px-20 bg-zinc-50 dark:bg-[#0c0c0e]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-accent transition-colors group">
              <div className="flex items-center gap-3 text-accent mb-4">
                <skill.icon size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold uppercase text-xs tracking-wider">{skill.group}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span key={item} className="text-[10px] font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded border border-zinc-200 dark:border-zinc-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" ref={registerRef("projects")} className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 font-display italic">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map(proj => (
            <div key={proj.id} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className={`h-48 flex items-center justify-center ${proj.accent === 'mint' ? 'bg-accent/10 text-accent' : 'bg-coral/10 text-coral'}`}>
                <span className="text-7xl font-bold opacity-10 group-hover:opacity-30 transition-opacity uppercase">{proj.tag}</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
                <p className="text-sm text-zinc-500 mb-6">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-zinc-400">
                  {proj.stack.join(" • ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS / EDUCATION SECTION */}
      <section id="achievements" ref={registerRef("achievements")} className="py-24 px-6 md:px-20 max-w-4xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-12">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="flex gap-8 items-start group">
              <div className="text-accent bg-accent/10 p-3 rounded-full group-hover:bg-accent group-hover:text-black transition-colors">
                <GraduationCap size={24} />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 mb-1">{edu.year}</div>
                <h3 className="text-xl font-bold">{edu.school}</h3>
                <p className="text-zinc-500 text-sm font-mono mt-1">{edu.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-6 md:px-20 bg-zinc-50 dark:bg-[#0c0c0e] border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Star className="text-accent mb-6 animate-pulse" size={32} />
            <h2 className="text-4xl font-bold mb-8 font-display">Let's talk?</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4"><Phone size={18} className="text-zinc-400" /> 089635542413</div>
              <div className="flex items-center gap-4"><Mail size={18} className="text-zinc-400" /> fikyardiansyah01@gmail.com</div>
              <div className="flex items-center gap-4"><MapPin size={18} className="text-zinc-400" /> Bali, Indonesia</div>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <textarea className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 text-sm mb-4 outline-none border border-transparent focus:border-accent" rows="4" placeholder="Your Message..."></textarea>
            <button className="w-full bg-accent text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer">
              Send Message <Send size={18} />
            </button>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center text-zinc-500 font-mono text-[10px]">
           <span>© 2025 MOH FIKY ARDIANSYAH</span>
           <div className="flex gap-4 items-center">
              {/* <a href="https://github.com/fikyardiansyah" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><GitHub size={20} /></a> */}
              <ChevronRight size={16} className="text-zinc-700" />
           </div>
        </div>
      </footer>
    </div>
  );
} // <--- Jangan lupa tutup fungsi dengan ini!