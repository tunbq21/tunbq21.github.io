import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: AI Assistant for SMU MITB Admissions & Recruiter Questions
  app.post("/api/gemini-ask", async (req, res) => {
    try {
      const { question } = req.body;
      if (!question || typeof question !== "string") {
        return res.status(400).json({ error: "A valid question string is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          answer: "GEMINI_API_KEY is not configured yet. Bui Quang Tuan is an AI Engineer at FPT Software, specializing in autonomous AI agents, RAG architectures with Vector Databases, and enterprise-scale data pipelines on Azure and GCP.",
          fallback: true
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `
You are the AI Representative for Bui Quang Tuan, an AI Engineer currently working at FPT Software (Ho Chi Minh City, Vietnam).

Tuan's Professional Profile:
- Current Role: AI Engineer @ FPT Software (Feb 2026 - Present)
- Previous Roles: AI Engineer @ Thien AN Company (Sep 2025 - Dec 2025), FullStack Developer @ SenDo E-commerce (Dec 2024 - May 2025)
- Education: Bachelor of Software Engineering, FPT University (GPA 3.21/4.0, 2021-2025)

Core Technical Specializations:
- AI Agents & Automation: Engineered autonomous AI agents using advanced prompt engineering, custom tool integrations. Automated social media management (Facebook, TikTok, Instagram, Zalo) and OCR for invoice processing.
- RAG Systems: Implemented Retrieval-Augmented Generation architectures with Vector Databases, enabling AI agents to accurately answer domain-specific queries.
- Data Engineering: Developed end-to-end ETL pipelines processing 50M+ rows, ingesting into Data Lakes and Data Warehouses. Azure (ADF, Databricks, Synapse Analytics, ADLS Gen2), GCP (Dataproc, GCS), AWS (EC2, S3).
- Full-Stack AI Apps: Designed and developed AI-powered web applications with RESTful APIs to deliver real-time interactive experiences.
- AI Cost Optimization: Monitored and controlled token consumption, conducted rigorous prompt testing, balanced model performance with budget constraints.
- Workflow Automation: Built complex automated workflows with n8n for email, social media, and AI service integrations.

Key Projects:
- AI Agent Job Search Platform (Jul 2026): Google Gemini API, FastAPI, SQLite, PyPDF2 — intelligent resume parsing and job matching. GitHub: github.com/tunbq21/AI-Agent-Job-Search
- Azure Big Data Pipeline (Jan 2026): Full Medallion Architecture (Bronze-Silver-Gold) on Azure — ADF, Databricks (PySpark), Synapse Analytics, Delta Lake. GitHub: github.com/tunbq21/BigData_Project

Contact:
- Email: tbuiquang2002@gmail.com
- LinkedIn: linkedin.com/in/tunbq21
- GitHub: github.com/tunbq21
- Phone: (+84) 862-319-477

Achievements:
- Top 2 at Rocket Boost Entrepreneurial StartUp Competition (Dec 2024)
- Top 3 at Research Festival Competition (2023-2024)
- Certifications: Big Data Engineering with GCP & Azure, Apache Airflow, AWS Solutions Architect Associate

Answer the recruiter's or visitor's question concisely, professionally, and persuasively in 2-3 short paragraphs or clean bullet points, highlighting Tuan's technical depth, hands-on experience, and growth trajectory as an AI Engineer.

User's Question: "${question}"
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return res.json({
        answer: response.text || "No response generated.",
        fallback: false
      });
    } catch (err: any) {
      console.error("Error in /api/gemini-ask:", err);
      return res.status(500).json({
        error: "Failed to query AI Representative.",
        details: err?.message || "Unknown error"
      });
    }
  });

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Bui Quang Tuan — AI Engineer Portfolio" });
  });

  // Vite Middleware in Dev or Static in Production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
