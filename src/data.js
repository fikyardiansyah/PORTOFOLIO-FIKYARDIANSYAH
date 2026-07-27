export const NAV_LINKS = [
  { id: "profile", label: "Profile" },
  { id: "projects", label: "Project" },
  { id: "achievements", label: "Achievement" },
];

export const EDUCATION = [
  { year: "2016 — 2019", school: "SMP Al Muhajirin 2", note: "Junior high school" },
  { year: "2020 — 2023", school: "SMK TI Bali Global Denpasar", note: "Vocational high school, Information Technology" },
  { year: "2023 — Present", school: "Politeknik Negeri Bali", note: "Information Technology · Semester 6" },
];

export const SKILLS = [
  {
    group: "Frontend",
    iconName: "Code2",
    items: [
      { name: "Tailwind CSS", slug: "tailwind" },
      { name: "HTML", slug: "html" },
      { name: "CSS", slug: "css" },
      { name: "JavaScript", slug: "js" },
      { name: "React.js", slug: "react" },
    ],
  },
  {
    group: "Backend",
    iconName: "Wrench",
    items: [
      { name: "Node.js", slug: "nodejs" },
      { name: "Laravel", slug: "laravel" },
      { name: "PHP", slug: "php" },
    ],
  },
  {
    group: "Database",
    iconName: "Database",
    items: [
      { name: "MySQL", slug: "mysql" },
      { name: "SQLite", slug: "sqlite" },
      { name: "Supabase", slug: "supabase" },
    ],
  },
  {
    group: "UI/UX tools",
    iconName: "Palette",
    items: [
      { name: "Figma", slug: "figma" },
      { name: "Google Stitch", slug: null },
    ],
  },
  {
    group: "Others",
    iconName: "Terminal",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Visual Studio Code", slug: "vscode" },
      { name: "AntiGravity", slug: null },
    ],
  },
];

export const PROJECTS = [
  {
    id: "balinara",
    tag: "01",
    name: "Balinara",
    desc: "A digital web platform built to be your main guide for exploring the beauty of the Island of the Gods, Bali.",
    stack: ["Vue.js", "Django", "MySQL"],
    accent: "mint",
    images: [
      "/projects/balinara.png",
      // "/projects/balinara-2.jpeg",
      // "/projects/balinara-3.jpg",
    ],
  },
  {
    id: "NeptuneThrift",
    tag: "02",
    name: "NeptuneThrift",
    desc: "A web-based sales and information system for a second-hand shoe store, featuring product catalog management, detailed product information, inventory tracking, and online order processing.",
    stack: ["PHP", "Next.js", "MySQL"],
    accent: "coral",
    images: [
      "/projects/neptune.jpeg",
      // "/projects/balinara-2.jpeg",
    ],
  },
  {
    id: "gasngo",
    tag: "03",
    name: "GASNGO",
    desc: "A web-based information system for car rental, handling listings, availability, and rental transactions.",
    stack: ["Vue.js", "JavaScript", "Supabase"],
    accent: "mint",
    images: [
      "/projects/gasngo1.png",
      "/projects/gasngo2.png",
    ],
  },
];

export const CERTIFICATES = [
  { id: "cyber", org: "SAWAH Cyber Security", title: "Certificate of Competence", icon: "shield" },
  { id: "aws", org: "AWS Academy", title: "AWS Academy Graduate — Introduction to Cloud, Semester 1", icon: "cloud" },
  { id: "ccna", org: "Cisco CCNAIT", title: "Certificate of Course Completion", icon: "network" },
];

export const SEED_COMMENTS = [
  { id: 1, name: "Ayu Kartika", rating: 5, message: "Clean layout and the project section makes it very easy to see the tech stack at a glance. Nice work!" },
  { id: 2, name: "Dimas Prakoso", rating: 4, message: "Love the terminal-inspired theme, it fits a frontend/UI-UX portfolio really well." },
];