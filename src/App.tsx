import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { MitbPitchDrawer } from './components/MitbPitchDrawer';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { GraduationCap, Sparkles, ArrowUp, Compass } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [pitchDrawerOpen, setPitchDrawerOpen] = useState<boolean>(false);
  const [aiDrawerOpen, setAiDrawerOpen] = useState<boolean>(false);

  // Sync dark class on html root
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Section Scroll Observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0b0c0e] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950 transition-colors duration-500">
      
      {/* Fixed Navigation Header */}
      <Navigation
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenPitchDrawer={() => setPitchDrawerOpen(true)}
        onOpenAiAssistant={() => setAiDrawerOpen(true)}
      />

      {/* Main Narrative Page View */}
      <main className="relative">
        
        {/* Hero Section */}
        <HeroSection
          onNavigateSection={handleNavigate}
          onOpenPitchDrawer={() => setPitchDrawerOpen(true)}
          onOpenAiAssistant={() => setAiDrawerOpen(true)}
        />

        {/* 3-Chapter About Narrative */}
        <AboutSection
          onOpenPitchDrawer={() => setPitchDrawerOpen(true)}
          onOpenAiAssistant={() => setAiDrawerOpen(true)}
        />

        {/* Curated Visual Projects */}
        <ProjectsSection />

        {/* Narrative Conclusion & Contact */}
        <ContactSection
          onOpenPitchDrawer={() => setPitchDrawerOpen(true)}
          onOpenAiAssistant={() => setAiDrawerOpen(true)}
        />

      </main>

      {/* Narrative Footer */}
      <footer className="py-12 border-t border-neutral-200/80 dark:border-neutral-800/80 text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100/40 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3">
            <span className="font-bold text-amber-600 dark:text-amber-400">AV // {PERSONAL_INFO.name}</span>
            <span>—</span>
            <span>SMU Master of IT in Business Applicant</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setPitchDrawerOpen(true)}
              className="hover:text-amber-500 transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
              <span>MITB Pitch Deck</span>
            </button>

            <button
              onClick={() => setAiDrawerOpen(true)}
              className="hover:text-amber-500 transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>AI Representative</span>
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 hover:border-amber-500 transition-colors cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-amber-500" />
            </button>
          </div>

        </div>
      </footer>

      {/* Global Interactive Pitch Drawer */}
      <MitbPitchDrawer
        isOpen={pitchDrawerOpen}
        onClose={() => setPitchDrawerOpen(false)}
      />

      {/* Global Interactive AI Assistant Drawer */}
      <AiAssistantDrawer
        isOpen={aiDrawerOpen}
        onClose={() => setAiDrawerOpen(false)}
      />

    </div>
  );
}
