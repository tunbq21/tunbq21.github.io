import React, { useState } from 'react';
import { NARRATIVE_CHAPTERS } from '../data/portfolioData';
import { ChapterNarrative } from '../types';
import { playChapterTransitionSound, playTickSound } from '../lib/audio';
import { 
  BookOpen, 
  Code, 
  Compass, 
  Quote, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Sparkles,
  Milestone
} from 'lucide-react';

interface AboutSectionProps {
  onOpenPitchDrawer: () => void;
  onOpenAiAssistant: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenPitchDrawer,
  onOpenAiAssistant,
}) => {
  const [activeChapterId, setActiveChapterId] = useState<string>('marketing-education');

  const activeChapter = NARRATIVE_CHAPTERS.find(c => c.id === activeChapterId) || NARRATIVE_CHAPTERS[0];

  const handleChapterChange = (chapterId: string) => {
    if (chapterId === activeChapterId) return;
    playChapterTransitionSound();
    setActiveChapterId(chapterId);
  };

  return (
    <section id="about" className="py-24 relative border-t border-neutral-200/80 dark:border-neutral-800/80">
      
      {/* Background Accent Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-widest">
              <BookOpen className="w-4 h-4" />
              <span>Section 01 // Narrative Progression</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mt-1">
              Three Chapters of Growth
            </h2>
          </div>
          <p className="max-w-md text-sm font-sans text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            From consumer psychology to code architecture and enterprise AI. A narrative story behind my application to SMU MITB.
          </p>
        </div>

        {/* Chapter Selector Switcher Tabs (Unconventional Magazine/Editorial Header) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {NARRATIVE_CHAPTERS.map((chapter) => {
            const isActive = chapter.id === activeChapterId;
            return (
              <button
                key={chapter.id}
                onClick={() => handleChapterChange(chapter.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 relative border cursor-pointer ${
                  isActive
                    ? 'border-amber-500 bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 shadow-xl scale-[1.01]'
                    : 'border-neutral-200 dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-900/40 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                {/* Active Indicator Top Bar */}
                {isActive && (
                  <div className="absolute top-0 left-6 right-6 h-1 bg-amber-500 rounded-b-md" />
                )}

                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-semibold ${
                    isActive
                      ? 'bg-amber-500 text-neutral-950 font-bold'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}>
                    {chapter.badge}
                  </span>
                  <span className={isActive ? 'text-amber-400 dark:text-amber-600 font-mono font-bold' : 'text-neutral-400'}>
                    {chapter.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl font-serif font-bold tracking-tight">
                    {chapter.number}. {chapter.title}
                  </div>
                  <div className={`text-xs font-mono line-clamp-2 ${isActive ? 'opacity-90' : 'text-neutral-500'}`}>
                    {chapter.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Detailed Narrative Body */}
        <div className="grid grid-cols-12 gap-y-10 lg:gap-12 pt-4 items-start">
          
          {/* Main Chapter Story Text Column (7 cols) */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-widest flex items-center space-x-2">
                <span>Chapter {activeChapter.number} Narrative</span>
                <span>—</span>
                <span>{activeChapter.period}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                {activeChapter.subtitle}
              </h3>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
              {activeChapter.narrativeParagraphs.map((paragraph, index) => (
                <p key={index} className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-500 first-letter:mr-1">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Chapter Quote Box */}
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 space-y-3 relative overflow-hidden">
              <Quote className="w-8 h-8 text-amber-500/20 absolute -right-2 -bottom-2" />
              <p className="text-base font-serif italic text-neutral-800 dark:text-neutral-200 leading-relaxed">
                "{activeChapter.quote.text}"
              </p>
              <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                — {activeChapter.quote.context}
              </div>
            </div>

            {/* Skills / Capabilities Acquired */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                Competencies & Capabilities Forged In This Phase:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeChapter.skillsAcquired.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono border border-neutral-300 dark:border-neutral-700 bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200 flex items-center space-x-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-amber-500" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Chapter Milestones & Interactive Timeline Side Column (5 cols) */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center space-x-2">
                  <Milestone className="w-4 h-4 text-amber-500" />
                  <span>Phase Milestones & Data</span>
                </div>
                <span className="text-xs font-mono text-amber-500 font-bold">{activeChapter.period}</span>
              </div>

              {/* Milestones Vertical Card Stack */}
              <div className="space-y-4">
                {activeChapter.keyMilestones.map((ms, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                        {ms.year}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        {ms.tag}
                      </span>
                    </div>

                    <div className="font-serif font-bold text-sm text-neutral-900 dark:text-neutral-100">
                      {ms.title}
                    </div>

                    <p className="text-xs font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {ms.description}
                    </p>

                    {ms.metrics && (
                      <div className="pt-1 flex items-center space-x-1.5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                        <TrendingUp className="w-3 h-3" />
                        <span>{ms.metrics}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Chapter-Specific SMU Link Callout */}
              {activeChapter.id === 'the-future' && (
                <div className="p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-amber-700 dark:text-amber-300 font-bold">
                    <GraduationCap className="w-4 h-4 text-amber-500" />
                    <span>SMU MITB Application Focus</span>
                  </div>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 font-sans">
                    Explore my complete candidacy pitch deck prepared for the admissions committee.
                  </p>
                  <button
                    onClick={() => {
                      playTickSound(500);
                      onOpenPitchDrawer();
                    }}
                    className="w-full py-2 rounded-lg bg-amber-500 text-neutral-950 font-mono font-bold text-xs hover:bg-amber-400 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Open MITB Pitch Deck</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Ask AI Representative Prompt */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    playTickSound(400);
                    onOpenAiAssistant();
                  }}
                  className="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline flex items-center justify-center space-x-1 mx-auto cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Ask AI Representative about this chapter</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
