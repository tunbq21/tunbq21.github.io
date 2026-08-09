# Bui Quang Tuan — AI Engineer Portfolio

A modern, interactive, and highly stylized portfolio website designed for an AI Engineer. Built with a distinctive "Yellow Style / Dark Mode" aesthetic, this project combines sleek typography, micro-animations, and a built-in AI Assistant to showcase technical credentials in AI Agents, RAG architectures, and Cloud Data Engineering.

## ✨ Features

- **Dark Mode / Yellow Accent Aesthetic:** A premium, tech-focused design system using glassmorphism and Framer Motion animations.
- **Interactive AI Twin:** An integrated Gemini-powered AI assistant that can answer recruiter questions about the candidate's background, skills, and projects in real-time.
- **Career Pitch Deck:** A built-in presentation drawer summarizing the candidate's career vision, technical edge, and future trajectory.
- **Interactive Narrative Structure:** Experience and education are presented as "Chapters" in a chronological narrative format.
- **Functional Contact Form:** Direct messaging integrated with Web3Forms for instant email delivery without backend overhead.
- **Video Hero Section:** Dynamic video background presets including custom motion clips.

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript
- **Styling:** TailwindCSS v4, Framer Motion (Animations), Lucide React (Icons)
- **Backend / API Proxy:** Node.js, Express, `@google/genai` (Gemini SDK)
- **Build Tool:** Vite

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A Google Gemini API Key (for the AI Assistant feature)

### 1. Installation
Clone the repository (or extract the project folder), open your terminal, and install the dependencies:
```bash
cd Porfolio-Yellow-Style-Dark-Mode
npm install
```

### 2. Environment Setup
To enable the AI Assistant (AI Twin) feature, you need to configure your Gemini API Key.
Create a `.env` file in the root directory (you can copy from `.env.example` if it exists) and add your key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```
*(If you don't provide an API key, the AI Assistant will gracefully fall back to a predefined static response).*

### 3. Running the Development Server
Start both the React frontend and the Express backend simultaneously:
```bash
npm run dev
```

The application will be accessible at: **[http://localhost:3000](http://localhost:3000)**

## 📂 Project Structure (Data Layer)

All personal data, projects, and narrative content are decoupled from the UI components. To update the portfolio content in the future, simply edit:
- `src/data/portfolioData.ts` (Main data hub)
- `server.ts` (To update the AI's internal system prompt)

## 📄 License
This project is for personal portfolio usage.
