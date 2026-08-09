import React, { useState } from 'react';
import { SMU_MITB_SLIDES } from '../data/portfolioData';
import { playTickSound } from '../lib/audio';
import { 
  GraduationCap, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Quote, 
  Award, 
  Target, 
  Briefcase, 
  CheckCircle2,
  Download,
  Copy,
  Check
} from 'lucide-react';

interface MitbPitchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MitbPitchDrawer: React.FC<MitbPitchDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [copiedBrief, setCopiedBrief] = useState(false);

  if (!isOpen) return null;

  const currentSlide = SMU_MITB_SLIDES[currentSlideIndex];

  const handleNext = () => {
    playTickSound(350);
    setCurrentSlideIndex((prev) => (prev + 1) % SMU_MITB_SLIDES.length);
  };

  const handlePrev = () => {
    playTickSound(350);
    setCurrentSlideIndex((prev) => (prev - 1 + SMU_MITB_SLIDES.length) % SMU_MITB_SLIDES.length);
  };

  const handleCopyStatement = () => {
    playTickSound(500);
    const statement = `
Alex Vance — SMU Master of IT in Business (MITB) Application Summary
Track: Analytics / AI & Financial Technology Candidate ('26 Cohort)

Vision Statement:
"Bridging brand strategy, consumer economics, and full-stack software architecture. Seeking SMU MITB to master enterprise AI, big data systems, and algorithmic decision frameworks to lead digital transformation across Asia-Pacific."

Core Highlights:
1. Marketing & Business Analytics: B.B.A background, $1.2M budget attribution models, consumer decision theory.
2. Self-Taught Full-Stack Code: TypeScript, React 19, Express, Python data pipelines, 10+ production applications.
3. SMU MITB Alignment: Applied AI capstones, financial technology systems, and collaborative industry leadership.
    `;
    navigator.clipboard.writeText(statement.trim());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      
      <div className="relative w-full max-w-4xl bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-amber-400 font-bold uppercase">
                SMU MITB CANDIDACY PITCH DECK
              </div>
              <h2 className="text-xl font-serif font-bold text-white">
                Master of IT in Business Application Statement
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

        {/* Slide Progress Dots Bar */}
        <div className="px-6 py-3 bg-neutral-950/60 border-b border-neutral-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-2">
            {SMU_MITB_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  playTickSound(300);
                  setCurrentSlideIndex(idx);
                }}
                className={`px-3 py-1 rounded-full text-[11px] transition-all cursor-pointer ${
                  idx === currentSlideIndex
                    ? 'bg-amber-500 text-neutral-950 font-bold'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                0{idx + 1} // {slide.chapterTag}
              </button>
            ))}
          </div>

          <span className="text-neutral-500">
            Slide {currentSlideIndex + 1} of {SMU_MITB_SLIDES.length}
          </span>
        </div>

        {/* Main Slide Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1 font-sans">
          
          {/* Slide Title */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-amber-400 uppercase font-bold tracking-widest">
              {currentSlide.chapterTag}
            </div>
            <h3 className="text-3xl font-serif font-bold text-white">
              {currentSlide.title}
            </h3>
            <p className="text-sm font-mono text-neutral-400">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-4 text-base text-neutral-300 leading-relaxed">
            {currentSlide.content.map((point, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Key Quote Box */}
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2 relative">
            <Quote className="w-6 h-6 text-amber-500/30 absolute right-4 bottom-4" />
            <div className="text-xs font-mono text-amber-400 font-bold uppercase">
              Core Application Premise
            </div>
            <p className="font-serif italic text-white text-base">
              "{currentSlide.keyQuote}"
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {currentSlide.stats.map((st, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                <div className="text-[10px] font-mono text-neutral-500 uppercase">{st.label}</div>
                <div className="text-lg font-serif font-bold text-amber-400">{st.value}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Slide Controls Footer */}
        <div className="p-6 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <button
            onClick={handleCopyStatement}
            className="px-4 py-2 rounded-xl border border-neutral-700 hover:border-neutral-500 text-neutral-200 flex items-center space-x-2 transition-colors cursor-pointer"
          >
            {copiedBrief ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
            <span>{copiedBrief ? "Copied MITB Brief!" : "Copy Narrative Statement"}</span>
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white flex items-center space-x-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-xl bg-amber-500 text-neutral-950 font-bold hover:bg-amber-400 flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <span>Next Slide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
