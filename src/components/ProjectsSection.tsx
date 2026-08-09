import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { playTickSound } from '../lib/audio';
import { 
  Layers, 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  SlidersHorizontal,
  Code2,
  TrendingUp,
  Cpu
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Marketing Analytics', 'Generative Systems', 'FinTech & Data', 'Human-AI Interfaces'];

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative border-t border-neutral-200/80 dark:border-neutral-800/80">
      
      {/* Detail Modal */}
      <ProjectDetailModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 dark:border-neutral-800 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-widest">
              <Layers className="w-4 h-4" />
              <span>Section 02 // Curated Visual Stories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight mt-1">
              Selected Works & Systems
            </h2>
          </div>
          <p className="max-w-md text-sm font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Not uniform grid cards—curated visual stories detailing how business strategy and software engineering solve high-stakes problems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-neutral-500 mr-2 flex items-center space-x-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter Domain:</span>
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playTickSound(350);
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 font-bold shadow-sm'
                    : 'bg-neutral-100/80 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border border-neutral-200/60 dark:border-neutral-800/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Unconventional Asymmetrical Projects Layout Grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {filteredProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                className={`${project.gridSpan} group relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 hover:border-amber-500/50 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-xl`}
              >
                {/* Top Badge & Year Bar */}
                <div className="flex items-center justify-between text-xs font-mono z-10">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20">
                    {project.category}
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 font-semibold">
                    {project.year} // 0{idx + 1}
                  </span>
                </div>

                {/* Project Media Container with Asymmetric Aspect Ratio */}
                <div className={`relative rounded-2xl overflow-hidden ${project.imageAspect} bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group-hover:scale-[1.01] transition-transform duration-700`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-105 group-hover:contrast-110 brightness-90 group-hover:brightness-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Interactive Floating Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono backdrop-blur-md bg-black/60 p-2.5 rounded-xl border border-white/10">
                    <span className="flex items-center space-x-1.5 text-amber-300 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Interactive Playground Inside</span>
                    </span>
                    <span className="text-[10px] text-neutral-300">Click to Launch</span>
                  </div>
                </div>

                {/* Narrative Summary & Typography */}
                <div className="space-y-3 z-10">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                  <p className="text-sm font-sans text-neutral-700 dark:text-neutral-300 leading-relaxed line-clamp-3">
                    {project.narrativeSummary}
                  </p>
                </div>

                {/* Key Metrics Quick Ribbon */}
                <div className="pt-2 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-2 gap-2 text-xs font-mono">
                  {project.businessImpact.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <div className="text-[10px] text-neutral-500 truncate">{m.label}</div>
                      <div className="text-base font-serif font-bold text-amber-600 dark:text-amber-400">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Bottom Trigger Button */}
                <div className="pt-2 z-10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      playTickSound(450);
                      setActiveProjectModal(project);
                    }}
                    className="px-4 py-2 rounded-full bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 text-xs font-mono font-bold flex items-center space-x-1.5 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3 h-3 text-amber-400 dark:text-amber-600" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
