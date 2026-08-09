import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playTickSound, getMuted, setMuted } from '../lib/audio';
import { 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  BookOpen, 
  Layers, 
  User, 
  Mail, 
  GraduationCap,
  Menu,
  X
} from 'lucide-react';

interface NavigationProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenPitchDrawer: () => void;
  onOpenAiAssistant: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  theme,
  onToggleTheme,
  activeSection,
  onNavigate,
  onOpenPitchDrawer,
  onOpenAiAssistant,
}) => {
  const [muted, setMutedState] = useState(getMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMuteToggle = () => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
    if (!next) playTickSound(520, 'sine', 0.08);
  };

  const navItems = [
    { id: 'hero', label: '00 // Overview', icon: User },
    { id: 'about', label: '01 // Narrative', icon: BookOpen },
    { id: 'projects', label: '02 // Projects', icon: Layers },
    { id: 'contact', label: '03 // Contact', icon: Mail },
  ];

  return (
    <>
      {/* Top Unconventional Asymmetric Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'py-3 backdrop-blur-md bg-opacity-80 border-b border-neutral-800/20 dark:border-neutral-700/20' 
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Candidate Identity Badge */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                playTickSound(300);
                onNavigate('hero');
              }}
              className="text-left group cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs tracking-widest text-amber-600 dark:text-amber-400 font-bold uppercase">
                  AV
                </span>
                <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-amber-500 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
              </div>
              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>AI Engineer</span>
              </div>
            </button>

            {/* Live Status Pill */}
            <div className="hidden md:flex items-center space-x-2 px-2.5 py-1 rounded-full text-[11px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to New Opportunities</span>
            </div>
          </div>

          {/* Desktop Asymmetric Nav Bar */}
          <nav className="hidden lg:flex items-center space-x-1 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    playTickSound(400);
                    onNavigate(item.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center space-x-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 font-medium shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Controls: AI Assistant, Pitch Deck, Theme & Audio */}
          <div className="flex items-center space-x-2">
            
            {/* AI Representative Button */}
            <button
              onClick={() => {
                playTickSound(600);
                onOpenAiAssistant();
              }}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-medium flex items-center space-x-1.5 border border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-all cursor-pointer shadow-xs"
              title="Ask Tuan's AI Representative about skills, projects or career goals"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span className="hidden sm:inline">Ask AI Rep</span>
            </button>

            {/* Pitch Deck Button */}
            <button
              onClick={() => {
                playTickSound(550);
                onOpenPitchDrawer();
              }}
              className="hidden sm:flex px-3 py-1.5 rounded-full text-xs font-mono font-medium items-center space-x-1.5 border border-neutral-300 dark:border-neutral-700 bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
              <span>About Me</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={handleMuteToggle}
              className="p-2 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
              title={muted ? "Unmute UI audio" : "Mute UI audio"}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-500" />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => {
                playTickSound(350);
                onToggleTheme();
              }}
              className="p-2 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
              title="Toggle Editorial Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 px-4 py-4 bg-neutral-100/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    playTickSound(400);
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 rounded-lg text-sm font-mono flex items-center space-x-3 text-left transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 font-medium'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center space-x-2">
              <button
                onClick={() => {
                  onOpenPitchDrawer();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 rounded-lg text-xs font-mono font-medium flex items-center justify-center space-x-2 border border-neutral-300 dark:border-neutral-700 bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200"
              >
                <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                <span>MITB Pitch Deck</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
