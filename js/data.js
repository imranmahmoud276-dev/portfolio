/* ==========================================================================
   IMRAN MAHMOUD — PORTFOLIO DATA CONFIGURATION
   ========================================================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: "Imran Mahmoud",
    roleTitles: [
      "Frontend Developer",
      "AI Automation Builder",
      "Software Engineering Student",
      "Hilcoe College (2nd Year)"
    ],
    bio: "20-year-old 2nd-year Software Engineering student at Hilcoe College in Addis Ababa. I build modern frontend interfaces, responsive web portals, and intelligent end-to-end n8n AI automation pipelines.",
    status: "Available for Hire & Projects",
    location: "Addis Ababa, Ethiopia",
    email: "imranmahmoud276@gmail.com",
    phone: "0970688545",
    telegram: "@imrruu",
    telegramUrl: "https://t.me/imrruu",
    github: "https://github.com/imranmahmoud276-dev",
    linkedin: "https://www.linkedin.com/in/imran-mahmoud/",
    avatar: "image.png",
    stats: {
      experience: "2nd Year",
      projects: "6 Uploaded",
      institution: "Hilcoe College",
      focus: "Frontend + AI"
    }
  },

  skills: [
    { name: "HTML & HTML5", level: 95, category: "frontend", icon: "🌐" },
    { name: "CSS3 & Modern Layouts", level: 92, category: "frontend", icon: "🎨" },
    { name: "JavaScript (ES6+)", level: 85, category: "frontend", icon: "📜" },
    { name: "Bootstrap 5", level: 90, category: "frontend", icon: "🅱️" },

    { name: "Python", level: 88, category: "languages", icon: "🐍" },
    { name: "C++", level: 85, category: "languages", icon: "⚡" },
    { name: "Java", level: 85, category: "languages", icon: "☕" },

    { name: "AI Automation (n8n)", level: 92, category: "automation", icon: "🤖" },
    { name: "Git & Version Control", level: 88, category: "tools", icon: "🔀" }
  ],

  projects: [
    {
      id: "ai-research-automation",
      title: "AI Research-to-Report Automation Pipeline",
      category: "automation",
      desc: "A two-workflow n8n automation pipeline turning any research topic into a finished report: Tavily handles web research, LLM drafts HTML report, PDFMonkey converts to PDF, with Google Drive, Sheets, and Gmail human approval cycles.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'><rect width='100%' height='100%' fill='%230f172a'/><path d='M100 200 Q250 100 400 200 T600 200' stroke='%23f59e0b' stroke-width='4' fill='none'/><circle cx='250' cy='150' r='50' fill='%238b5cf6' opacity='0.4'/><text x='50%' y='45%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='22' font-weight='bold'>🤖 n8n AI Automation</text><text x='50%' y='60%' dominant-baseline='middle' text-anchor='middle' fill='%23f59e0b' font-family='sans-serif' font-size='15'>Research-to-Report Workflow Pipeline</text></svg>",
      videoUrl: "https://www.loom.com/share/a794151e38f949e5a51cdddb96b11345",
      tags: ["n8n", "AI Automation", "Tavily API", "PDFMonkey", "Gmail API", "Google Workspace"],
      liveUrl: "https://www.loom.com/share/a794151e38f949e5a51cdddb96b11345",
      githubUrl: "https://github.com/imranmahmoud276-dev",
      features: [
        "Automated deep web research via Tavily API",
        "LLM-generated structured HTML & PDF reports",
        "Human-in-the-loop email review & approval workflow",
        "Zero-assembly document delivery via Google Drive & Sheets"
      ]
    },
    {
      id: "apple-website-clone",
      title: "Apple.com Homepage Clone",
      category: "frontend",
      desc: "Pixel-focused Apple.com homepage clone built with clean HTML5 & CSS3. Features CSS checkbox hacks for mobile drawer navigation, smooth scroll-snap carousels, and responsive typography.",
      image: "Apple Website/images/home/iphone.jpg",
      tags: ["HTML5", "CSS3", "Responsive Layout", "No JavaScript", "CSS Grid"],
      liveUrl: "Apple Website/APPLE.html",
      githubUrl: "https://github.com/imranmahmoud276-dev",
      features: [
        "Pixel-perfect responsive navigation header",
        "CSS-only mobile drawer menu trigger",
        "Smooth CSS scroll-snap product carousel",
        "Semantic HTML5 structure and clean CSS"
      ]
    },
    {
      id: "addis-books-store",
      title: "Addis Books — Bookstore Website",
      category: "frontend",
      desc: "E-Commerce bookstore application for Ethiopian literature and authors. Includes book showcases, author profiles, category filtering, and custom CSS styling.",
      image: "Book Store Website/the girl.png",
      tags: ["HTML5", "CSS3", "E-Commerce UI", "Ethiopian Books"],
      liveUrl: "Book Store Website/Addis.html",
      githubUrl: "https://github.com/imranmahmoud276-dev",
      features: [
        "Curated Ethiopian literature catalog layout",
        "Author spotlight cards & bestselling badges",
        "Payment integration badge icons (Visa, Chapa, PayPal)",
        "Fully responsive grid layout"
      ]
    },
    {
      id: "ethioconnect-bootstrap",
      title: "EthioConnect — Responsive Bootstrap Platform",
      category: "frontend",
      desc: "Comprehensive Bootstrap 5 web platform covering modern grid layouts, custom navigation components, cards, and responsive behaviors across 8 graded sections.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='350' viewBox='0 0 600 350'><rect width='100%' height='100%' fill='%231e1b4b'/><rect x='40' y='40' width='520' height='270' rx='12' fill='%23312e81' stroke='%236366f1' stroke-width='2'/><text x='50%' y='45%' dominant-baseline='middle' text-anchor='middle' fill='%23818cf8' font-family='sans-serif' font-size='24' font-weight='bold'>🅱️ Bootstrap 5 EthioConnect</text><text x='50%' y='60%' dominant-baseline='middle' text-anchor='middle' fill='%23c7d2fe' font-family='sans-serif' font-size='15'>Responsive Web Platform Layout</text></svg>",
      tags: ["Bootstrap 5", "HTML5", "CSS3", "Responsive UI"],
      liveUrl: "Bootstrap/ethioconnect.html",
      githubUrl: "https://github.com/imranmahmoud276-dev",
      features: [
        "Full Bootstrap 5 component integration",
        "Mobile-first responsive grid layout",
        "Interactive navigation & content cards",
        "Clean, structured HTML code"
      ]
    },
    {
      id: "edu-web-portal",
      title: "Edu Web — University & Education Portal",
      category: "frontend",
      desc: "Interactive educational portal featuring background video integration, course listings, campus news, and modern CSS layout.",
      image: "Edu web/univ.jpg",
      tags: ["HTML5", "CSS3", "Video Integration", "Education UI"],
      liveUrl: "Edu web/project 3.html",
      githubUrl: "https://github.com/imranmahmoud276-dev",
      features: [
        "HTML5 video background integration (uni.mp4)",
        "Academic department course catalog cards",
        "Student enrollment call-to-action sections",
        "Clean responsive container layout"
      ]
    },
    {
      id: "business-license-portal",
      title: "Business License Registration Portal",
      category: "frontend",
      desc: "Web portal for business license application and permit processing with structured forms, status tracking UI, and custom CSS styling.",
      image: "businesslicense/images/AATB.jfif",
      tags: ["HTML5", "CSS3", "Form Processing", "Web Portal"],
      liveUrl: "businesslicense/licence.html",
      githubUrl: "https://github.com/imranmahmoud276-dev",
      features: [
        "License application input form design",
        "Step-by-step registration guidelines",
        "Custom CSS button & card components",
        "Structured HTML form validation"
      ]
    },
    {
      id: "puppy-lovers-community",
      title: "Puppy Lovers Community Landing Page",
      category: "frontend",
      desc: "Community landing web page for pet lovers built with custom HTML & CSS styling.",
      image: "puupy/Puupy-lovers/puppy-lovers-page-design.jpg",
      tags: ["HTML5", "CSS3", "Community Landing"],
      liveUrl: "puupy/project5.html",
      githubUrl: "https://github.com/imranmahmoud276-dev",
      features: [
        "Pet adoption showcase layout",
        "Responsive card grid",
        "Simple HTML/CSS implementation"
      ]
    }
  ],

  experience: [
    {
      role: "2nd Year Software Engineering Student",
      company: "Hilcoe College",
      period: "2024 — Present",
      description: "Studying core computer science & software engineering: Java OOP, Data Structures, Web Development, Discrete Mathematics, and C++ System Programming."
    },
    {
      role: "Frontend & AI Automation Fellow",
      company: "InVision Africa Program",
      period: "2024 — Present",
      description: "Built production-grade n8n AI automation pipelines (research-to-report workflows) and developed responsive web projects."
    }
  ]
};
