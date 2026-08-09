import { ChapterNarrative, ProjectItem, VideoPreset, PitchSlide } from '../types';

// =====================================================
// THÔNG TIN CÁ NHÂN
// =====================================================
export const PERSONAL_INFO = {
  name: "Bui Quang Tuan",
  title: "AI Engineer",
  tagline: "Building Autonomous AI Agents & End-to-End Data Pipelines",
  location: "Ho Chi Minh City, Viet Nam",
  phone: "(+84) 862-319-477",
  email: "tbuiquang2002@gmail.com",
  github: "https://github.com/tunbq21",
  linkedin: "https://www.linkedin.com/in/tunbq21",
  applicationYear: "2026",
  bioHeadline: "I engineer AI systems that turn raw data into intelligent, automated decisions — from pipeline to product.",
  summary: "Dedicated AI Engineering Fresher with a 'learn-by-doing' mindset and a strong foundation in data infrastructure. I specialize in building end-to-end pipelines on Azure and GCP, alongside developing automated workflow applications and AI Agents to support smart integrations.",
};

// =====================================================
// VIDEO PRESETS CHO HERO SECTION
// =====================================================
export const HERO_VIDEO_PRESETS: VideoPreset[] = [
  {
    id: "robot-fighter",
    name: "Robot Fighter",
    category: "Custom",
    videoUrl: "/Robot_Fighter_Motion_10s.webm",
    posterUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    description: "Custom motion clip — high-energy cinematic energy for the AI engineering portfolio."
  },
  {
    id: "data-pipeline",
    name: "Data in Motion",
    category: "AI & Data Engineering",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-41539-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    description: "Visualizing high-velocity data flows powering modern AI systems."
  },
  {
    id: "terminal-code",
    name: "Kinetic Code Stream",
    category: "Engineering",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-code-and-data-on-a-computer-screen-41552-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    description: "Raw Python and SQL logic transforming into structured data insights."
  },
  {
    id: "ai-network",
    name: "Neural Lattice",
    category: "Artificial Intelligence",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-41584-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop",
    description: "The invisible architecture of AI agents making real-time autonomous decisions."
  }
];

// =====================================================
// 3 CHƯƠNG HÀNH TRÌNH (ABOUT SECTION)
// =====================================================
export const NARRATIVE_CHAPTERS: ChapterNarrative[] = [
  {
    id: "marketing-education",
    number: "01",
    title: "Education & FullStack Foundation",
    subtitle: "The Starting Point: Software Engineering Degree & First Professional Steps",
    period: "2021 — 2025",
    badge: "Chapter One",
    summary: "Where it all began: a Software Engineering degree at FPT University, building the foundation in code — and the first real-world encounter with production-grade systems at an E-commerce Platform.",
    narrativeParagraphs: [
      "My journey started at FPT University, Ho Chi Minh City, where I pursued a Bachelor of Software Engineering (GPA 3.21/4.0). Rather than treating university as a passive experience, I used it as a launchpad — constantly building side projects, exploring backend architecture, and diving deep into database systems from day one.",
      "Towards graduation, I joined an E-commerce Platform as a FullStack Developer (Dec 2024 – May 2025). There, I maintained and extended the platform, developed backend microservices in Node.js, and collaborated with DevOps to containerize applications with Docker and deploy on cloud infrastructure.",
      "These early experiences gave me critical instincts: how production systems fail, how databases scale, and why clean architecture isn't optional — it's a survival skill in real engineering teams."
    ],
    keyMilestones: [
      {
        year: "2021",
        title: "FPT University — Software Engineering",
        description: "Began Bachelor of Software Engineering. Specialized in backend systems, database design, and software architecture principles.",
        tag: "Education",
        metrics: "GPA 3.21 / 4.0"
      },
      {
        year: "2024",
        title: "Startup Competition — Top 2",
        description: "Pitched an automated 3D solution for the fashion design industry. Recognized for outstanding entrepreneurial innovation at the national level.",
        tag: "Achievement"
      },
      {
        year: "Dec 2024",
        title: "FullStack Developer @ E-commerce Platform",
        description: "Maintained the platform features, developed Node.js microservices, containerized apps with Docker, deployed on AWS EC2.",
        tag: "Professional",
        metrics: "PHP (Laravel), Node.js, MySQL, AWS"
      }
    ],
    quote: {
      text: "A degree teaches you to think; production systems teach you to survive. The gap between them is where real engineering begins.",
      context: "Personal Engineering Journal, 2025"
    },
    skillsAcquired: ["PHP (Laravel)", "Node.js", "MySQL", "JavaScript", "AWS EC2", "Docker", "Database Design", "Software Architecture"],
    visualEmphasis: "Warm Ochre & Deep Charcoal"
  },
  {
    id: "coding-journey",
    number: "02",
    title: "AI Engineering Journey",
    subtitle: "The Transition: From FullStack to Autonomous Agents & Big Data Pipelines",
    period: "Sep 2025 — Present",
    badge: "Chapter Two",
    summary: "The pivot into AI Engineering — building autonomous agents, architecting cloud-scale data pipelines, and integrating AI into real-world business workflows across two companies.",
    narrativeParagraphs: [
      "In September 2025, I made a deliberate pivot into AI Engineering at a Technology Startup. There, I designed and built scalable backend architectures for outsourced projects, engineered autonomous AI agents to automate social media management across Facebook and Instagram, and orchestrated complex workflows with n8n. I also containerized everything with Docker for seamless deployment across environments.",
      "In February 2026, I joined a Tech Corporation as an AI Engineer — a leap into enterprise-scale AI. Here, I engineer autonomous AI agents with advanced prompt engineering, implement RAG (Retrieval-Augmented Generation) architectures with Vector Databases, and develop end-to-end data pipelines processing over 50 million rows. I actively monitor and optimize AI operational costs by controlling token consumption across multiple models.",
      "Beyond agents, I've built full AI-powered web applications with RESTful APIs, integrated OCR for automated invoice processing, and collaborated directly with clients to deliver tailored AI and data solutions. Every project deepened my conviction: the future belongs to engineers who can bridge raw data and real business impact."
    ],
    keyMilestones: [
      {
        year: "Sep 2025",
        title: "AI Engineer @ Technology Startup",
        description: "Engineered AI agents for social media automation (Facebook & Instagram), built complex n8n workflows, containerized apps with Docker.",
        tag: "Industry AI",
        metrics: "Python, n8n, Meta Graph API, Docker"
      },
      {
        year: "Dec 2025",
        title: "Big Data Engineering Bootcamp Certification",
        description: "Certified in Big Data Engineering covering GCP (Dataproc, GCS) and Azure Cloud (ADF, Databricks, Synapse) from Udemy — Mayank Aggarwal & Krish Naik.",
        tag: "Certification"
      },
      {
        year: "Feb 2026",
        title: "AI Engineer @ Enterprise Tech Corporation",
        description: "Building enterprise AI agents, RAG systems with Vector DBs, ETL pipelines (50M+ rows), AI web apps with RESTful APIs, and OCR automation for invoice processing.",
        tag: "Current Role",
        metrics: "Python, PySpark, RAG, Vector DB, Azure, GCP"
      }
    ],
    quote: {
      text: "Code isn't just syntax — it is executable intelligence. Writing a clean AI pipeline feels like building a decision engine that works even when you sleep.",
      context: "Engineering Journal Entry, 2026"
    },
    skillsAcquired: ["Python", "AI Agents", "RAG", "Prompt Engineering", "Vector Databases", "n8n", "PySpark", "Azure Data Factory", "Azure Databricks", "GCP", "OCR", "RESTful APIs"],
    visualEmphasis: "Electric Cyan & Slate Monochrome"
  },
  {
    id: "the-future",
    number: "03",
    title: "Vision & Future Goals",
    subtitle: "The Synthesis: Leading AI Systems That Create Real Business Value",
    period: "2026 & Beyond",
    badge: "Chapter Three",
    summary: "A clear north star — becoming an engineer who builds AI systems at the intersection of scale, intelligence, and measurable impact, driving digital transformation across industries.",
    narrativeParagraphs: [
      "My ambition is to be an AI Engineer who doesn't just ship models — but ships systems that genuinely change how organizations operate. Whether that means a pipeline that saves 300 hours of manual analysis annually, or an AI agent that replaces an entire workflow with zero human intervention, I measure success in business outcomes, not lines of code.",
      "In the short term, I aim to deepen my expertise in enterprise-grade AI deployment: multi-agent orchestration, advanced RAG systems, production LLM optimization, and large-scale data infrastructure. I want to lead projects that demand both deep technical precision and strategic thinking.",
      "Long-term, I see myself at the intersection of AI product leadership and engineering architecture — building intelligent platforms that define how companies in Southeast Asia make decisions, automate operations, and compete in an AI-first economy."
    ],
    keyMilestones: [
      {
        year: "2026 Target",
        title: "Senior AI Engineer / AI Systems Lead",
        description: "Lead the architecture and deployment of multi-agent AI systems and production-scale data platforms for enterprise clients.",
        tag: "Career Goal",
        metrics: "AI Systems Architecture"
      },
      {
        year: "2027+",
        title: "AI Product & Platform Leadership",
        description: "Drive AI-first transformation — building intelligent platforms that redefine operations in FinTech, E-commerce, and Enterprise SaaS across Southeast Asia.",
        tag: "Long-term Vision"
      }
    ],
    quote: {
      text: "I do not want to be just an engineer who uses AI tools. I want to be the one who builds the tools that others rely on.",
      context: "Personal Career Manifesto, 2026"
    },
    skillsAcquired: ["Multi-Agent Orchestration", "LLM Optimization", "Production AI Deployment", "Cloud Architecture", "AI Product Strategy", "Executive Stakeholder Communication"],
    visualEmphasis: "Monochrome Obsidian with Gold Accents"
  }
];

// =====================================================
// PROJECTS (2 thật + 2 từ kinh nghiệm làm việc)
// =====================================================
export const PROJECTS: ProjectItem[] = [
  {
    id: "ai-agent-job-search",
    title: "AI Agent Job Search Platform",
    subtitle: "Intelligent Resume Parsing & Job Matching with Google Gemini",
    category: "Human-AI Interfaces",
    year: "2026",
    featured: true,
    gridSpan: "col-span-12 lg:col-span-8",
    imageAspect: "aspect-[16/9]",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
    mediaType: "image",
    tags: ["Python", "FastAPI", "Google Gemini API", "SQLite", "PyPDF2", "RESTful APIs"],
    narrativeSummary: "An intelligent job matching platform that uses the Google Gemini API to automatically parse unstructured resume data (PDF, DOCX) and match candidates to relevant job listings based on dynamic AI analysis.",
    theChallenge: "Job seekers waste hours manually scanning job boards for roles that match their profile — and often apply to mismatched positions. There was no intelligent layer connecting their actual skills to relevant opportunities in real-time.",
    theArchitecturalSolution: "Built a smart discovery pipeline with FastAPI and SQLite that parses resumes via PyPDF2, extracts core skills and experience using Gemini AI, then curates and filters job listings dynamically. Integrated a Kanban-style application tracking system for full pipeline management.",
    businessImpact: [
      { label: "Resume Parsing", value: "PDF + DOCX" },
      { label: "AI Model", value: "Google Gemini" },
      { label: "Tracking System", value: "Kanban Workflow" }
    ],
    techStack: ["Python", "FastAPI", "Google Gemini API", "PyPDF2", "SQLite", "RESTful APIs"],
    interactiveDemoId: "mitb-simulator",
    externalUrl: "https://github.com/tunbq21/AI-Agent-Job-Search"
  },
  {
    id: "azure-big-data-pipeline",
    title: "Azure Big Data Pipeline",
    subtitle: "Medallion Architecture (Bronze-Silver-Gold) on Azure Cloud",
    category: "FinTech & Data",
    year: "2026",
    featured: true,
    gridSpan: "col-span-12 lg:col-span-4",
    imageAspect: "aspect-[3/4]",
    imageUrl: "https://images.unsplash.com/photo-1667984390527-850f63192709?q=80&w=1200&auto=format&fit=crop",
    mediaType: "image",
    tags: ["Azure Data Factory", "Databricks", "Synapse Analytics", "PySpark", "Delta Lake", "SQL"],
    narrativeSummary: "A scalable ETL pipeline on Azure implementing the Medallion Architecture (Bronze-Silver-Gold) to process multi-source data from GitHub APIs and SQL Databases for enterprise-level business intelligence.",
    theChallenge: "Multi-source raw data from GitHub and SQL databases arrived in inconsistent formats, making it impossible for business teams to run reliable analytics without hours of manual transformation and validation.",
    theArchitecturalSolution: "Architected a full Medallion pipeline: Azure Data Factory for orchestrated ingestion into ADLS Gen2, Azure Databricks (PySpark) for cleaning and transformation stored in Delta Lake format, and Azure Synapse Analytics for Gold-layer business intelligence aggregation.",
    businessImpact: [
      { label: "Architecture", value: "Medallion (B/S/G)" },
      { label: "Processing Engine", value: "PySpark + Databricks" },
      { label: "Storage Format", value: "Delta Lake" }
    ],
    techStack: ["Azure Data Factory", "Azure Databricks", "Synapse Analytics", "ADLS Gen2", "PySpark", "Delta Lake", "SQL"],
    interactiveDemoId: "sentiment-analytics",
    externalUrl: "https://github.com/tunbq21/BigData_Project"
  },
  {
    id: "social-media-ai-automation",
    title: "Social Media AI Automation",
    subtitle: "Autonomous Agent System for Multi-Platform Content Management",
    category: "Generative Systems",
    year: "2025",
    featured: false,
    gridSpan: "col-span-12 lg:col-span-5",
    imageAspect: "aspect-[4/3]",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    mediaType: "image",
    tags: ["Python", "n8n", "Meta Graph API", "Docker", "AI Agents"],
    narrativeSummary: "An autonomous AI agent system built at Technology Startup that automates social media management across Facebook and Instagram, orchestrated with n8n for email and workflow automation.",
    theChallenge: "The client's team spent 15+ hours per week manually scheduling, posting, and monitoring content across multiple social media platforms — a task with zero strategic value that was ripe for full automation.",
    theArchitecturalSolution: "Engineered autonomous AI agents integrated with Meta Graph API for Facebook and Instagram management. Orchestrated complex multi-step workflows in n8n (including email automation and AI integration). Containerized all services with Docker for consistent cross-environment deployment.",
    businessImpact: [
      { label: "Platforms Automated", value: "FB + Instagram" },
      { label: "Workflow Engine", value: "n8n" },
      { label: "Deployment", value: "Dockerized" }
    ],
    techStack: ["Python", "n8n", "Meta Graph API", "Docker", "Node.js", "AI Agents"],
    interactiveDemoId: "generative-ui"
  },
  {
    id: "enterprise-rag-pipeline",
    title: "Enterprise RAG System",
    subtitle: "Domain-Specific AI Knowledge Base with Vector Database",
    category: "Marketing Analytics",
    year: "2026",
    featured: true,
    gridSpan: "col-span-12 lg:col-span-7",
    imageAspect: "aspect-[16/9]",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    mediaType: "image",
    tags: ["Python", "RAG", "Vector Databases", "Prompt Engineering", "PySpark", "APIs"],
    narrativeSummary: "An enterprise-grade Retrieval-Augmented Generation system built at the Enterprise Tech Corporation, enabling AI agents to accurately answer domain-specific internal queries by grounding responses in processed company knowledge.",
    theChallenge: "Internal AI agents produced unreliable, hallucinated answers on domain-specific queries because they lacked access to proprietary company knowledge. Standard LLMs alone couldn't provide trustworthy responses at enterprise scale.",
    theArchitecturalSolution: "Implemented a full RAG pipeline: developed end-to-end data pipelines to crawl, clean, and process 50M+ row datasets, ingested processed data into Vector Databases, and engineered AI agents with custom tool integrations and advanced prompt engineering to retrieve accurate, grounded answers in real-time.",
    businessImpact: [
      { label: "Data Processed", value: "50M+ Rows" },
      { label: "Architecture", value: "RAG + Vector DB" },
      { label: "Query Accuracy", value: "Domain-Specific" }
    ],
    techStack: ["Python", "RAG", "Vector Databases", "PySpark", "Prompt Engineering", "RESTful APIs"],
    interactiveDemoId: "ad-optimizer"
  }
];

// =====================================================
// CAREER PITCH SLIDES
// =====================================================
export const SMU_MITB_SLIDES: PitchSlide[] = [
  {
    id: 1,
    chapterTag: "Why AI Engineering?",
    title: "The Path I Chose",
    subtitle: "Why I moved from FullStack into Autonomous AI Systems & Data Engineering",
    content: [
      "Traditional software development solves known problems. AI Engineering solves problems we didn't know we had — and creates capabilities that didn't exist before.",
      "After experiencing production systems at SenDo and seeing the limits of manual data workflows, I realized the next frontier wasn't just writing better code — it was building systems that learn, reason, and act autonomously.",
      "I chose AI Engineering because it sits at the intersection of everything I care about: elegant architecture, real-world impact, and systems that continue to create value long after the last commit."
    ],
    keyQuote: "I don't just want to use AI tools — I want to build the systems that others depend on to make decisions.",
    stats: [
      { label: "Current Role", value: "AI Engineer @ Enterprise Tech Corporation" },
      { label: "Core Focus", value: "AI Agents + Data Pipelines" },
      { label: "Location", value: "Ho Chi Minh City, VN" }
    ]
  },
  {
    id: 2,
    chapterTag: "What I Bring",
    title: "Technical Value Proposition",
    subtitle: "A full-stack AI engineer with cloud, agents, and data engineering depth",
    content: [
      "End-to-End AI Pipelines: From raw data ingestion (50M+ rows) on Azure and GCP to clean, structured, AI-ready datasets in Delta Lake — I build the whole stack.",
      "Autonomous AI Agents: Advanced prompt engineering, custom tool integrations, RAG architectures, and Vector Databases — not just calling APIs, but engineering real autonomous systems.",
      "Production-Ready Deployment: Docker containerization, RESTful API design, cloud-native architectures (Azure ADF, Databricks, Synapse; GCP Dataproc) — systems that run reliably at enterprise scale."
    ],
    keyQuote: "I bring a builder's mindset: if the tool doesn't exist, I engineer it. If the pipeline breaks, I fix the architecture.",
    stats: [
      { label: "Data Processed", value: "50M+ Rows" },
      { label: "Cloud Platforms", value: "Azure + GCP + AWS" },
      { label: "Apps & Pipelines", value: "10+ Built" }
    ]
  },
  {
    id: 3,
    chapterTag: "Future Vision",
    title: "Where I'm Headed",
    subtitle: "Building AI systems that define how organizations operate in an AI-first world",
    content: [
      "Short-Term (0-2 Years): Become a Senior AI Engineer specializing in multi-agent orchestration, production LLM optimization, and enterprise-scale data infrastructure.",
      "Long-Term (3-5 Years): Lead AI product and platform architecture — building intelligent systems that power decision-making for FinTech, E-commerce, and Enterprise SaaS companies across Southeast Asia.",
      "My defining measure of success: not model accuracy metrics, but real business outcomes — hours saved, revenue generated, and decisions made faster and smarter through intelligent automation."
    ],
    keyQuote: "Creating AI that doesn't just run smoothly — but creates measurable economic value and transforms how organizations compete.",
    stats: [
      { label: "Target Role", value: "Senior AI Engineer / AI Lead" },
      { label: "Domain Focus", value: "FinTech, E-commerce, SaaS" },
      { label: "Specialization", value: "Multi-Agent AI Systems" }
    ]
  }
];
