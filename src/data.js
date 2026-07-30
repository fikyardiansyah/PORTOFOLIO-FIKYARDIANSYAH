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
    fullDescription: "Balinara adalah platform wisata digital yang membantu wisatawan merencanakan perjalanan ke Bali dengan lebih mudah. Dilengkapi AI chatbot untuk menjawab pertanyaan seputar destinasi, serta fitur pencarian tempat wisata berdasarkan kategori dan lokasi.",
    features: [
      "AI chatbot untuk rekomendasi destinasi wisata",
      "Pencarian & filter destinasi berdasarkan kategori",
      "Galeri foto tiap destinasi dengan sumber terpercaya",
      "Desain responsif untuk mobile dan desktop",
    ],
    stack: ["Vue.js", "Django", "MySQL"],
    accent: "mint",
    images: ["/projects/balinara.png"],
    liveUrl: "https://balinara.example.com",
    githubUrl: "https://github.com/fikyardiansyah/balinara",
  },
  {
    id: "neptune-thrift",
    tag: "02",
    name: "NeptuneThrift",
    desc: "A web-based sales and information system for a second-hand shoe store, and online order processing.",
    fullDescription: "NeptuneThrift adalah sistem informasi penjualan untuk toko sepatu bekas (thrift), membantu pemilik toko mengelola katalog produk, stok barang, dan memproses pesanan online dari pelanggan secara terpusat.",
    features: [
      "Manajemen katalog produk & kategori",
      "Pelacakan stok barang secara real-time",
      "Proses pemesanan online end-to-end",
      "Dashboard admin untuk kelola penjualan",
    ],
    stack: ["PHP", "Next.js", "MySQL"],
    accent: "coral",
    images: ["/projects/neptune.jpeg"],
    liveUrl: "https://neptunethrift.example.com",
    githubUrl: "https://github.com/fikyardiansyah/neptune-thrift",
  },
  {
    id: "gasngo",
    tag: "03",
    name: "GASNGO",
    desc: "A web-based information system for car rental, handling listings, availability, and rental transactions.",
    fullDescription: "GASNGO adalah sistem informasi rental mobil berbasis web yang memudahkan pengguna mencari kendaraan berdasarkan kategori (city car, premium, luxury), mengecek ketersediaan, dan melakukan transaksi sewa secara online.",
    features: [
      "Eksplorasi kendaraan berdasarkan kategori",
      "Cek ketersediaan mobil secara real-time",
      "Sistem transaksi sewa terintegrasi",
      "Terhubung dengan database Supabase",
    ],
    stack: ["Vue.js", "JavaScript", "Supa"],
    accent: "mint",
    images: ["/projects/gasngo1.png", "/projects/gasngo2.png"],
    liveUrl: "https://gasngo.example.com",
    githubUrl: "https://github.com/fikyardiansyah/gasngo",
  },
];

export const CERTIFICATES = [
  {
    id: "PTINET",
    org: "PT INET GLOBAL INDO",
    title: "Certificate of Competence",
    icon: "shield",
    image: "/certificates/PT inet.jpeg",
  },
  {
    id: "sawah",
    org: "Sawah Cyber Security",
    title: "Certificate of Competence",
    icon: "cloud",
    image: "/certificates/sawah-competence.png",
  },
  {
    id: "sawah",
    org: "Sawah Cyber Security",
    title: "Certificate of Participation",
    icon: "cloud",
    image: "/certificates/sawah-participation.png",
  },
  {
    id: "ccna",
    org: "Cisco CCNAIT",
    title: "Certificate of Course Completion",
    icon: "network",
    image: "/certificates/CCNA Cisco.jpeg",
  },
];

export const SEED_COMMENTS = [
  { id: 1, name: "Ayu Kartika", rating: 5, message: "Clean layout and the project section makes it very easy to see the tech stack at a glance. Nice work!" },
  { id: 2, name: "Dimas Prakoso", rating: 4, message: "Love the terminal-inspired theme, it fits a frontend/UI-UX portfolio really well." },
];