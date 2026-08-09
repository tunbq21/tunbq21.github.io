import React, { useState } from 'react';
import { playTickSound } from '../lib/audio';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  GraduationCap, 
  Loader2, 
  Copy, 
  Check,
  HelpCircle
} from 'lucide-react';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: "Hello! I am Bui Quang Tuan's AI Representative. Ask me anything about Tuan's background in AI engineering and data pipelines, his experience at FPT Software and Thien AN, his technical projects, or his career goals."
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const sampleQuestions = [
    "What AI agent systems has Tuan built at FPT Software?",
    "How does Tuan's Azure Big Data Pipeline (Medallion Architecture) work?",
    "What makes Tuan's approach to RAG and Vector Databases unique?",
    "What are Tuan's career goals and technical strengths as an AI Engineer?"
  ];

  const handleSendQuestion = async (qText?: string) => {
    const query = qText || question;
    if (!query.trim() || loading) return;

    playTickSound(450);
    const userMsg = { sender: 'user' as const, text: query };
    setMessages(prev => [...prev, userMsg]);
    if (!qText) setQuestion('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini-ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: query })
      });

      const data = await res.json();
      const aiText = data.answer || "I received your question! Bui Quang Tuan is an AI Engineer at FPT Software, specializing in autonomous AI agents, RAG architectures, and enterprise-scale data pipelines on Azure and GCP.";

      setMessages(prev => [...prev, { sender: 'ai', text: aiText }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: "Bui Quang Tuan is an AI Engineer specializing in autonomous agents, RAG systems with Vector Databases, end-to-end data pipelines processing 50M+ rows (Azure/GCP), and production AI-powered web applications."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyMessage = (text: string, idx: number) => {
    playTickSound(300);
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      
      <div className="relative w-full max-w-2xl bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[85vh]">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-mono text-amber-400 font-bold uppercase flex items-center space-x-1.5">
                <span>AI REPRESENTATIVE</span>
                <span className="text-neutral-500">// Gemini Powered</span>
              </div>
              <h2 className="text-lg font-serif font-bold text-white">
                Ask Tuan's AI Twin
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              playTickSound(300);
              onClose();
            }}
            className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Sample Question Pills */}
        <div className="p-4 bg-neutral-950/60 border-b border-neutral-800 space-y-2">
          <div className="text-[11px] font-mono text-neutral-400 flex items-center space-x-1">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Click a sample question to ask instantly:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {sampleQuestions.map((sq, idx) => (
              <button
                key={idx}
                onClick={() => handleSendQuestion(sq)}
                disabled={loading}
                className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:border-amber-500/50 bg-neutral-900 text-[11px] font-mono text-neutral-300 hover:text-amber-300 transition-colors text-left cursor-pointer disabled:opacity-50"
              >
                {sq}
              </button>
            ))}
          </div>
        </div>

        {/* Messages Stream Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 font-sans text-sm">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex space-x-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-4 rounded-2xl max-w-[85%] space-y-2 relative group ${
                  msg.sender === 'user'
                    ? 'bg-amber-500 text-neutral-950 font-medium'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-200'
                }`}
              >
                <p className="whitespace-pre-line leading-relaxed">
                  {msg.text}
                </p>

                {msg.sender === 'ai' && (
                  <button
                    onClick={() => handleCopyMessage(msg.text, idx)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-neutral-400 hover:text-amber-400 flex items-center space-x-1"
                  >
                    {copiedIndex === idx ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedIndex === idx ? "Copied" : "Copy"}</span>
                  </button>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 p-2">
              <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
              <span>Analyzing Bui Quang Tuan's portfolio & AI engineering credentials...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuestion();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about Tuan's AI projects, skills, or career goals..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900 text-white text-xs font-mono focus:outline-none focus:ring-1 focus:ring-amber-500"
            />

            <button
              type="submit"
              disabled={!question.trim() || loading}
              className="p-2.5 rounded-xl bg-amber-500 text-neutral-950 hover:bg-amber-400 font-bold transition-colors disabled:opacity-40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
