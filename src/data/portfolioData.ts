import { ChapterNarrative, ProjectItem, VideoPreset, PitchSlide } from '../types';

export const PERSONAL_INFO = {
  name: "Alex Vance",
  targetProgram: "SMU Master of IT in Business (MITB)",
  degreeTrack: "Analytics & Financial Technology Track Candidate",
  tagline: "Bridging Brand Psychology, Business Strategy & Algorithmic Architecture",
  location: "Singapore & Regional Tech Hubs",
  email: "alex.vance.mitb@smu-candidate.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  applicationYear: "2026 Cohort",
  bioHeadline: "I build software that turns complex business strategy into responsive, human-centered intelligent systems."
};

export const HERO_VIDEO_PRESETS: VideoPreset[] = [
  {
    id: "architectural-data",
    name: "Architectural Grid",
    category: "Data & Systems",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-41539-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    description: "Visualizing high-frequency enterprise data flows and geometric architectural grids."
  },
  {
    id: "terminal-code",
    name: "Kinetic Code Stream",
    category: "Technology",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-code-and-data-on-a-computer-screen-41552-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    description: "The mechanics of raw code transforming into structured business logic."
  },
  {
    id: "fluid-canvas",
    name: "Fluid Brand Dynamics",
    category: "Design & Perception",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-41584-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description: "Exploration of visual tension, perception, and human experience in digital interfaces."
  }
];

export const NARRATIVE_CHAPTERS: ChapterNarrative[] = [
  {
    id: "marketing-education",
    number: "01",
    title: "Marketing & Education",
    subtitle: "The Foundation: Brand Psychology & Business Strategy",
    period: "2021 — 2023",
    badge: "Chapter One",
    summary: "Where my journey began: understanding human motives, market signals, and consumer decision frameworks.",
    narrativeParagraphs: [
      "My foundational years were rooted in business administration and marketing analytics. I spent my early career analyzing consumer journey maps, running A/B experiments, and crafting brand positioning for competitive markets.",
      "While traditional marketing taught me *why* consumers make choices, I quickly encountered a recurring ceiling: static campaign strategies could never adapt to real-time market turbulence. I realized that modern brand loyalty is governed by latency, algorithmic recommendation engines, and dynamic user interfaces.",
      "To truly drive business growth, I needed to go beyond managing campaigns—I had to understand and build the computational pipelines that fuel them."
    ],
    keyMilestones: [
      {
        year: "2021",
        title: "Bachelor of Business Administration",
        description: "Specialized in Marketing & Quantitative Consumer Insights. Graduated Top 5% with research in behavioral decision theory.",
        tag: "Academics",
        metrics: "GPA 3.88 / 4.00"
      },
      {
        year: "2022",
        title: "Growth & Brand Analyst @ Nexus Digital",
        description: "Led multi-channel data attribution models. Reallocated $1.2M marketing budget using linear regression models.",
        tag: "Industry Experience",
        metrics: "+34% Customer Acquisition Efficiency"
      },
      {
        year: "2023",
        title: "The Epiphany",
        description: "Recognized that manual spreadsheet analytics were obsolete. Decided to learn software engineering to build automated decision systems.",
        tag: "Pivotal Shift"
      }
    ],
    quote: {
      text: "Marketing gave me empathy for the user; business gave me respect for ROI; technology gave me the leverage to scale both.",
      context: "Personal Progression Note, 2023"
    },
    skillsAcquired: ["Consumer Behavior Theory", "Attribution Modeling", "Financial ROI Analysis", "Market Segmentation", "A/B Testing Methodology"],
    visualEmphasis: "Warm Ochre & Deep Charcoal"
  },
  {
    id: "coding-journey",
    number: "02",
    title: "My Coding Journey",
    subtitle: "The Transition: Crossing into Full-Stack Systems & Algorithmic Code",
    period: "2023 — 2025",
    badge: "Chapter Two",
    summary: "Breaking out of non-technical boundaries by mastering full-stack web development, software engineering, and data pipelines.",
    narrativeParagraphs: [
      "I began teaching myself programming by building simple scripts to clean marketing logs. Within months, basic automation evolved into a full-blown obsession with software engineering, object-oriented design, and reactive frontends.",
      "Instead of taking standard tutorial shortcuts, I immersed myself in core computer science principles: data structures, asynchronous event loops, API design, state machine management, and mathematical visualization.",
      "Over two years, I built 10+ end-to-end applications: from algorithmic ad-spend reallocators to generative brand UI systems. Coding shifted from being a utility to becoming my primary canvas for creative and business problem-solving."
    ],
    keyMilestones: [
      {
        year: "Late 2023",
        title: "First Production Full-Stack App",
        description: "Built a real-time campaign dashboard using React, Node.js, and WebSockets to process live social media sentiment stream.",
        tag: "Milestone Code"
      },
      {
        year: "2024",
        title: "Lead Frontend & Analytics Systems Architect",
        description: "Designed bespoke internal tools for growth teams, combining custom canvas charts, state machines, and microservice APIs.",
        tag: "Professional Engineering",
        metrics: "Reduced Reporting Time from 4 hrs to 3 mins"
      },
      {
        year: "2025",
        title: "Generative UI & Algorithmic Systems",
        description: "Pioneered adaptive component systems that dynamically alter UI density and color palette based on user engagement metrics.",
        tag: "R&D & Innovation"
      }
    ],
    quote: {
      text: "Code isn't just syntax—it is executable business logic. Writing clean code feels like writing a bulletproof strategy deck that executes itself.",
      context: "Engineering Journal Entry, 2024"
    },
    skillsAcquired: ["TypeScript / JavaScript", "React 19 & Next.js", "Node.js & Express Architecture", "Python & Pandas Data Science", "Tailwind CSS & Motion", "REST & WebSocket APIs"],
    visualEmphasis: "Electric Cyan & Slate Monochrome"
  },
  {
    id: "the-future",
    number: "03",
    title: "The Future & SMU MITB",
    subtitle: "The Synthesis: Enterprise AI, Analytics & Strategic Tech Leadership",
    period: "2026 & Beyond",
    badge: "Chapter Three",
    summary: "My vision for SMU's Master of IT in Business and my ambition to lead enterprise AI transformation in Singapore and Asia-Pacific.",
    narrativeParagraphs: [
      "The next decade in business will belong to leaders who are deeply bilingual: capable of sitting in boardrooms discussing EBITDA and P&L, while sitting with engineering leads discussing model latency, vector embeddings, and database sharding.",
      "SMU's Master of IT in Business (MITB) represents the exact convergence I seek. The program's rigorous curriculum in Enterprise AI, Data Analytics, and Financial Technology will sharpen my technical capability while expanding my strategic perspective.",
      "At SMU, I aim to collaborate with world-class faculty, engage in applied industry projects, and contribute my unique cross-disciplinary perspective—bridging marketing psychology, aesthetic precision, and robust software architecture."
    ],
    keyMilestones: [
      {
        year: "2026 Target",
        title: "SMU MITB Matriculation",
        description: "Focusing on Analytics & AI/Financial Technology tracks. Aiming for Capstone Applied Project in AI-Driven Consumer Finance.",
        tag: "Academic Goal",
        metrics: "SMU Master of IT in Business"
      },
      {
        year: "2027+",
        title: "Strategic Tech Product / Analytics Leader",
        description: "Leading enterprise digital transformation, AI integration, or fintech product strategy across Asia-Pacific.",
        tag: "Career Vision"
      }
    ],
    quote: {
      text: "I do not wish to be just a business leader who uses technology, nor a developer isolated from business outcome. I aim to be the bridge.",
      context: "SMU MITB Personal Statement Highlight"
    },
    skillsAcquired: ["Enterprise AI Deployment", "Financial Technology Systems", "Big Data Architecture", "Executive Stakeholder Management", "Ethical AI Governance"],
    visualEmphasis: "Monochrome Obsidian with Gold Accents"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "optitrend-engine",
    title: "OptiTrend",
    subtitle: "Algorithmic Brand Spend & Real-Time ROAS Reallocator",
    category: "Marketing Analytics",
    year: "2025",
    featured: true,
    gridSpan: "col-span-12 lg:col-span-8",
    imageAspect: "aspect-[16/9]",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    mediaType: "image",
    tags: ["TypeScript", "Data Modeling", "Algorithmic Finance", "Recharts", "Express API"],
    narrativeSummary: "A multi-channel marketing budget optimization engine that automatically shifts spend across ad networks based on live marginal ROAS curves rather than static quarterly budgets.",
    theChallenge: "Marketing teams often lose 20-30% of ad budget due to delayed performance reporting and static channel allocations that fail to adapt to intraday conversions.",
    theArchitecturalSolution: "Built a custom mathematical optimization model in TypeScript that recalculates marginal returns every 15 minutes and executes automated budget balancing via API webhooks.",
    businessImpact: [
      { label: "Ad Spend Efficiency", value: "+28.4%" },
      { label: "Intraday Waste Cut", value: "320 hrs/yr" },
      { label: "Campaign Revenue", value: "$1.4M Managed" }
    ],
    techStack: ["TypeScript", "Node.js", "Tailwind CSS", "Recharts", "Framer Motion"],
    interactiveDemoId: "ad-optimizer",
    externalUrl: "https://github.com"
  },
  {
    id: "morph-ui",
    title: "MorphUI Engine",
    subtitle: "Generative UI System for Dynamic Brand Personas",
    category: "Generative Systems",
    year: "2025",
    featured: true,
    gridSpan: "col-span-12 lg:col-span-4",
    imageAspect: "aspect-[3/4]",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    mediaType: "image",
    tags: ["React 19", "Design Tokens", "Tailwind CSS v4", "Generative Rules"],
    narrativeSummary: "An adaptive frontend architecture that mutates typography scale, spatial rhythm, and accent hues in real time based on user intent signals and brand persona profiles.",
    theChallenge: "Traditional static design systems force every user segment into an identical visual template regardless of whether they are a high-speed trader or a casual consumer.",
    theArchitecturalSolution: "Created a tokenized CSS-in-JS & CSS Variables engine with smooth spring physics transitions that re-skins components on the fly without page reloads.",
    businessImpact: [
      { label: "Session Time", value: "+42%" },
      { label: "Conversion Lift", value: "+18.9%" }
    ],
    techStack: ["React 19", "Tailwind CSS v4", "Framer Motion", "TypeScript"],
    interactiveDemoId: "generative-ui"
  },
  {
    id: "sentience-radar",
    title: "Sentience Radar",
    subtitle: "Consumer Sentiment Micro-Signals & Anomalies",
    category: "FinTech & Data",
    year: "2024",
    featured: false,
    gridSpan: "col-span-12 lg:col-span-5",
    imageAspect: "aspect-[4/3]",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    mediaType: "image",
    tags: ["Python Data Stream", "WebSockets", "Natural Language Processing", "D3.js"],
    narrativeSummary: "A real-time market sentiment monitor aggregating thousands of social feeds, customer support transcripts, and forum discussions to detect subtle early product perception shifts.",
    theChallenge: "Negative brand sentiment often spreads for days before registering in traditional quarterly Net Promoter Score (NPS) surveys.",
    theArchitecturalSolution: "Designed a streaming NLP classification pipeline that flags sentiment velocity spikes and plots early warning vectors on a radar dashboard.",
    businessImpact: [
      { label: "Early Bug Discovery", value: "3.5 Days Faster" },
      { label: "Crisis Mitigation", value: "94% Accuracy" }
    ],
    techStack: ["React", "D3.js", "Node.js WebSockets", "NLP Microservice"],
    interactiveDemoId: "sentiment-analytics"
  },
  {
    id: "smu-mitb-matrix",
    title: "SMU MITB Synergy Matrix",
    subtitle: "Enterprise AI & Business Impact Simulator",
    category: "Human-AI Interfaces",
    year: "2026",
    featured: true,
    gridSpan: "col-span-12 lg:col-span-7",
    imageAspect: "aspect-[16/9]",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    mediaType: "image",
    tags: ["Interactive Simulator", "SMU Coursework Mapping", "Gemini AI", "Executive Dashboard"],
    narrativeSummary: "An interactive portfolio tool mapping SMU MITB core learning modules (AI, Applied Analytics, FinTech, Governance) to real-world business ROI outcomes.",
    theChallenge: "Academic credentials are often presented as passive text bullet points rather than dynamic demonstrations of applied value.",
    theArchitecturalSolution: "Built a interactive matrix component allowing admissions committees and tech leaders to simulate business problem scenarios and see how MITB skills solve them.",
    businessImpact: [
      { label: "Program Alignment", value: "100% Fit" },
      { label: "Interactive Modules", value: "4 Track Scenarios" }
    ],
    techStack: ["React 19", "Gemini 2.5 API", "Tailwind CSS", "Motion"],
    interactiveDemoId: "mitb-simulator"
  }
];

export const SMU_MITB_SLIDES: PitchSlide[] = [
  {
    id: 1,
    chapterTag: "Why SMU MITB?",
    title: "Strategic Fit & Vision",
    subtitle: "Why the Master of IT in Business is my definitive next step",
    content: [
      "SMU's MITB stands at the premier intersection of business acumen, analytical rigor, and artificial intelligence.",
      "Having mastered marketing strategy and full-stack web engineering, MITB will equip me with enterprise-grade data management, deep learning deployment, and financial technology architecture.",
      "My goal is to graduate as an agile technology leader who drives high-impact digital initiatives across Singapore and global markets."
    ],
    keyQuote: "SMU MITB is not just a degree; it is the ultimate accelerator for cross-disciplinary leaders in Asia's tech ecosystem.",
    stats: [
      { label: "Target Track", value: "Analytics / AI & FinTech" },
      { label: "Core Competency", value: "Marketing + Software + Business" },
      { label: "Location Focus", value: "Singapore & Global Markets" }
    ]
  },
  {
    id: 2,
    chapterTag: "What I Bring to SMU",
    title: "Unique Value Proposition",
    subtitle: "A candidate who builds, designs, and understands market economics",
    content: [
      "Real-World Business Experience: Proven track record in budget allocation, brand positioning, and ROI tracking.",
      "Hands-On Full-Stack Code: Proficiency in TypeScript, React, Node.js, Python, and modern web architectures.",
      "Human-Centered Design Focus: Deep commitment to user experience, visual clarity, and accessible AI systems."
    ],
    keyQuote: "I bring a builder's mindset to the classroom—ready to collaborate, prototype, and push project boundaries.",
    stats: [
      { label: "Full-Stack Apps Built", value: "10+ Systems" },
      { label: "Years in Strategy & Dev", value: "4+ Years Combined" }
    ]
  },
  {
    id: 3,
    chapterTag: "Post-Graduation Roadmap",
    title: "Impact & Ambition",
    subtitle: "Leading the next wave of intelligent business products",
    content: [
      "Short-Term (0-2 Years post-MITB): Lead Product Manager or Lead Analytics Specialist for enterprise AI tools in Singapore.",
      "Long-Term (3-5 Years): Chief Product / Analytics Officer bridging corporate strategy, software teams, and customer experience."
    ],
    keyQuote: "Creating technology that doesn't just run smoothly, but creates measurable economic value and delightful user moments.",
    stats: [
      { label: "Target Role", value: "AI Product / Tech Strategy Leader" },
      { label: "Domain", value: "FinTech, Retail AI, Enterprise SaaS" }
    ]
  }
];
