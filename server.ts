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
          answer: "GEMINI_API_KEY is not configured yet. Here is a summary: Alex Vance is a candidate for SMU's Master of IT in Business (MITB), bridging marketing strategy, business analytics, UI/UX design, and full-stack software development.",
          fallback: true
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `
You are the AI Representative for Alex Vance, an applicant for Singapore Management University's (SMU) Master of IT in Business (MITB) program.
Alex's Background:
- Marketing & Business Strategy (B.B.A / Brand Marketing & Consumer Analytics background)
- Self-taught Full-Stack Developer & Systems Architect (TypeScript, React, Node.js, Python, Data Pipelines)
- Intersection: Combining marketing psychology, human-centered UI design, and data-driven algorithmic systems to solve complex business problems.
- Key Goal at SMU MITB: Master Enterprise AI, Financial/Retail Analytics, and Algorithmic Decision Systems to lead tech-driven business transformation.

Answer the user's question concisely, professionally, and persuasively in 2-3 short paragraphs or clean bullet points, highlighting why Alex is an ideal fit for SMU MITB and modern tech leadership.

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
    res.json({ status: "ok", app: "Alex Vance SMU MITB Portfolio" });
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
