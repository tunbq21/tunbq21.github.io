import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { playTickSound } from '../lib/audio';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Sliders, 
  TrendingUp, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap,
  Play,
  RefreshCw,
  BarChart3,
  Terminal,
  Cpu
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  // State for OptiTrend Simulator
  const [metaBudget, setMetaBudget] = useState(40);
  const [googleBudget, setGoogleBudget] = useState(35);
  const [tiktokBudget, setTiktokBudget] = useState(25);

  // State for MorphUI Simulator
  const [activePersona, setActivePersona] = useState<'minimal' | 'cyberpunk' | 'executive'>('minimal');

  // State for Sentience Radar Simulator
  const [sentimentThreshold, setSentimentThreshold] = useState(75);
  const [simulatedSpike, setSimulatedSpike] = useState(false);

  // State cho AI Engineering Use Case Simulator (Demo 4)
  const [selectedCourse, setSelectedCourse] = useState<'ai' | 'analytics' | 'fintech'>('ai');

  // Calculated values for OptiTrend
  const totalBudget = metaBudget + googleBudget + tiktokBudget;
  const projectedRoas = ((metaBudget * 3.4 + googleBudget * 4.1 + tiktokBudget * 2.8) / Math.max(1, totalBudget)).toFixed(2);
  const estimatedRevenue = Math.round(totalBudget * parseFloat(projectedRoas) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      
      <div className="relative w-full max-w-5xl bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-800 flex items-start justify-between bg-neutral-950/80 sticky top-0 z-20 backdrop-blur-md">
          <div className="space-y-1">
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold uppercase">
                {project.category}
              </span>
              <span className="text-neutral-500">// {project.year} Case Study</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {project.title}: <span className="font-sans font-light text-neutral-400 text-xl sm:text-2xl">{project.subtitle}</span>
            </h2>
          </div>

          <button
            onClick={() => {
              playTickSound(300);
              onClose();
            }}
            className="p-2.5 rounded-full border border-neutral-700 bg-neutral-800/80 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            title="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 flex-1 font-sans">
          
          {/* Main Hero Media Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 aspect-[16/8] bg-neutral-950">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-105 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
              <span className="text-amber-400 font-bold">INTERACTIVE CASE STUDY & PROTOTYPE</span>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 flex items-center space-x-1.5 transition-colors"
                >
                  <span>Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Business Impact Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.businessImpact.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-1"
              >
                <div className="text-xs font-mono text-neutral-500 uppercase">{metric.label}</div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Context, Challenge & Solution Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm leading-relaxed">
            
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/40 space-y-3">
              <h3 className="text-xs font-mono text-amber-500 uppercase font-bold tracking-wider flex items-center space-x-1.5">
                <Terminal className="w-4 h-4" />
                <span>The Strategic Challenge</span>
              </h3>
              <p className="text-neutral-300">
                {project.theChallenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/40 space-y-3">
              <h3 className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider flex items-center space-x-1.5">
                <Cpu className="w-4 h-4" />
                <span>Architectural Solution</span>
              </h3>
              <p className="text-neutral-300">
                {project.theArchitecturalSolution}
              </p>
            </div>

          </div>

          {/* LIVE INTERACTIVE DEMO / PLAYGROUND SECTION */}
          <div className="p-6 sm:p-8 rounded-2xl border border-amber-500/30 bg-neutral-950 space-y-6">
            
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 font-bold">
                  <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                  <span>LIVE PROTOTYPE SIMULATOR</span>
                </div>
                <h4 className="text-xl font-serif font-bold text-white">
                  Test the Logic in Real-Time
                </h4>
              </div>
              <span className="text-xs font-mono text-neutral-500">Interactive Sandbox</span>
            </div>

            {/* DEMO 1: OptiTrend Ad-Spend Optimizer */}
            {project.interactiveDemoId === 'ad-optimizer' && (
              <div className="space-y-6 font-mono text-xs">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2 p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                    <label className="text-neutral-400 flex justify-between">
                      <span>Meta Ads ($k/mo):</span>
                      <span className="text-amber-400 font-bold">${metaBudget}k</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={metaBudget}
                      onChange={(e) => setMetaBudget(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2 p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                    <label className="text-neutral-400 flex justify-between">
                      <span>Google Search ($k/mo):</span>
                      <span className="text-amber-400 font-bold">${googleBudget}k</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={googleBudget}
                      onChange={(e) => setGoogleBudget(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2 p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                    <label className="text-neutral-400 flex justify-between">
                      <span>TikTok Video ($k/mo):</span>
                      <span className="text-amber-400 font-bold">${tiktokBudget}k</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="80"
                      value={tiktokBudget}
                      onChange={(e) => setTiktokBudget(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Live Output Simulation Card */}
                <div className="p-4 rounded-xl bg-neutral-900 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-neutral-400 text-[10px] uppercase">Algorithmic Output</div>
                    <div className="text-lg font-serif text-white font-bold">
                      Blended ROAS: <span className="text-emerald-400">{projectedRoas}x</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-neutral-400 text-[10px] uppercase">Projected Revenue</div>
                    <div className="text-2xl font-mono text-amber-400 font-bold">
                      ${estimatedRevenue.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                      OptiTrend Reallocated +24% ROAS
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 2: MorphUI Generative System */}
            {project.interactiveDemoId === 'generative-ui' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-neutral-400">Select Brand Persona:</span>
                  <div className="flex items-center space-x-2 font-mono text-xs">
                    {(['minimal', 'cyberpunk', 'executive'] as const).map((persona) => (
                      <button
                        key={persona}
                        onClick={() => {
                          playTickSound(400);
                          setActivePersona(persona);
                        }}
                        className={`px-3 py-1.5 rounded-lg uppercase cursor-pointer transition-all ${
                          activePersona === persona
                            ? 'bg-amber-500 text-neutral-950 font-bold'
                            : 'bg-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {persona}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Morphing Canvas Container */}
                <div
                  className={`p-6 rounded-2xl transition-all duration-500 border ${
                    activePersona === 'minimal'
                      ? 'bg-neutral-950 text-neutral-100 border-neutral-700 font-sans tracking-tight'
                      : activePersona === 'cyberpunk'
                      ? 'bg-black text-cyan-400 border-cyan-500 font-mono tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'bg-neutral-900 text-amber-100 border-amber-500/60 font-serif tracking-normal'
                  }`}
                >
                  <div className="text-xs font-mono uppercase opacity-70 mb-2">
                    Dynamic Token Output // Persona: {activePersona}
                  </div>
                  <h5 className="text-2xl font-bold mb-2">
                    {activePersona === 'minimal' && "Architectural Simplicity & Clean Precision"}
                    {activePersona === 'cyberpunk' && "> CYBERPUNK_DATA_STREAM // REALTIME_ENGAGEMENT"}
                    {activePersona === 'executive' && "Enterprise Capital & High-Yield Strategy"}
                  </h5>
                  <p className="text-sm opacity-80">
                    Notice how typography, border glow, background luminance, and spatial padding automatically morph using tokenized state rules.
                  </p>
                </div>
              </div>
            )}

            {/* DEMO 3: Sentience Radar */}
            {project.interactiveDemoId === 'sentiment-analytics' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <div className="text-neutral-400">Live NLP Sentiment Stream (Simulated):</div>
                  <button
                    onClick={() => {
                      playTickSound(500);
                      setSimulatedSpike(!simulatedSpike);
                    }}
                    className="px-3 py-1 rounded bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 cursor-pointer font-bold"
                  >
                    {simulatedSpike ? "Reset Normal Stream" : "Trigger Sentiment Spike Anomaly"}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-neutral-400">Current Velocity Index:</span>
                    <span className={simulatedSpike ? "text-red-400 font-bold animate-pulse" : "text-emerald-400"}>
                      {simulatedSpike ? "CRITICAL SPIKE (+88% Volatility)" : "STABLE (98.4% Confidence)"}
                    </span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${simulatedSpike ? 'bg-red-500 w-[92%]' : 'bg-emerald-500 w-[24%]'}`}
                    />
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    {simulatedSpike
                      ? "ALERT: Early social sentiment drop detected in APAC consumer forum. Auto-notifying marketing response team."
                      : "Processing 12,400 micro-mentions/sec. All brand sentiment metrics nominal."}
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 4: AI Engineering Use Case Simulator */}
            {project.interactiveDemoId === 'mitb-simulator' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="text-neutral-400">Select AI Engineering Use Case:</div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedCourse('ai')}
                    className={`p-3 rounded-xl border text-left cursor-pointer ${
                      selectedCourse === 'ai'
                        ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                    }`}
                  >
                    <div>AI Agents</div>
                    <div className="text-[10px] opacity-70">Autonomous Workflow Automation</div>
                  </button>
                  <button
                    onClick={() => setSelectedCourse('analytics')}
                    className={`p-3 rounded-xl border text-left cursor-pointer ${
                      selectedCourse === 'analytics'
                        ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                    }`}
                  >
                    <div>RAG Systems</div>
                    <div className="text-[10px] opacity-70">Knowledge Base + Vector DB</div>
                  </button>
                  <button
                    onClick={() => setSelectedCourse('fintech')}
                    className={`p-3 rounded-xl border text-left cursor-pointer ${
                      selectedCourse === 'fintech'
                        ? 'border-amber-500 bg-amber-500/10 text-white font-bold'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                    }`}
                  >
                    <div>Data Pipelines</div>
                    <div className="text-[10px] opacity-70">ETL at Medallion Scale</div>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 font-sans">
                  <div className="text-amber-400 font-mono font-bold text-xs uppercase">
                    AI Engineering Impact Scenario:
                  </div>
                  <p className="text-neutral-200 text-sm">
                    {selectedCourse === 'ai' && "Autonomous AI agents automate social media management and invoice processing via OCR — eliminating 15+ hours of manual work per week across multiple business platforms."}
                    {selectedCourse === 'analytics' && "RAG pipeline grounds AI responses in 50M+ rows of proprietary company data via Vector DB — eliminating hallucinations and enabling domain-specific query answering at enterprise scale."}
                    {selectedCourse === 'fintech' && "Medallion Architecture pipeline on Azure (Bronze-Silver-Gold) ingests multi-source data, transforms via PySpark/Databricks, and surfaces clean analytics to Synapse for business intelligence."}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-neutral-500 uppercase">
              Technology Stack & Tools Utilized:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono border border-neutral-700 bg-neutral-800 text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-xs font-mono">
          <span className="text-neutral-500">Bui Quang Tuan — AI Engineer Portfolio</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold cursor-pointer transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>

    </div>
  );
};
