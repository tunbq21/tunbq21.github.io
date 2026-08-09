import React, { useState, useRef } from 'react';
import { HERO_VIDEO_PRESETS, PERSONAL_INFO } from '../data/portfolioData';
import { VideoPreset } from '../types';
import { playTickSound } from '../lib/audio';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ArrowDownRight, 
  Sparkles, 
  GraduationCap, 
  Settings2, 
  Layers,
  Compass,
  Link
} from 'lucide-react';

interface HeroSectionProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenPitchDrawer: () => void;
  onOpenAiAssistant: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateSection,
  onOpenPitchDrawer,
  onOpenAiAssistant,
}) => {
  const [selectedPreset, setSelectedPreset] = useState<VideoPreset>(HERO_VIDEO_PRESETS[0]);
  const [customVideoUrl, setCustomVideoUrl] = useState('');
  const [showVideoConfig, setShowVideoConfig] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [frameRatio, setFrameRatio] = useState<'cinematic' | 'portal' | 'asymmetric'>('asymmetric');

  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    playTickSound(300);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVideoMute = () => {
    playTickSound(350);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSpeedChange = (speed: number) => {
    playTickSound(400);
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const handleApplyCustomVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customVideoUrl.trim()) return;
    playTickSound(500);
    const customPreset: VideoPreset = {
      id: "custom-video",
      name: "Custom User Video",
      category: "User Uploaded",
      videoUrl: customVideoUrl.trim(),
      posterUrl: selectedPreset.posterUrl,
      description: "Custom video integrated directly into Alex Vance's portfolio composition."
    };
    setSelectedPreset(customPreset);
    setShowVideoConfig(false);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 overflow-hidden flex flex-col justify-between">
      
      {/* Background Ambient Geometric Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Asymmetric Header Grid */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-12 items-start">
          
          {/* Main Typography Column (7 cols on desktop) */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            
            {/* Top Chapter Tagline */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md border border-neutral-300 dark:border-neutral-800 bg-neutral-200/40 dark:bg-neutral-900/40 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">SMU MITB Portfolio</span>
              <span>// 2026 Narrative</span>
            </div>

            {/* Oversized Art-Directed Title */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[0.95]">
                ALEX <br />
                <span className="italic font-light text-neutral-500 dark:text-neutral-400 font-sans">VANCE</span>
              </h1>
              <p className="text-lg sm:text-xl font-mono text-amber-600 dark:text-amber-400 font-medium tracking-tight pt-2">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Unconventional Narrative Intro */}
            <div className="max-w-xl text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-sans space-y-4">
              <p>
                A personal progression site presenting my application to <strong className="font-semibold text-neutral-900 dark:text-neutral-100">SMU's Master of IT in Business (MITB)</strong>.
              </p>
              <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 border-l-2 border-amber-500 pl-4 py-0.5">
                "Not displaying credentials—telling the story of how consumer psychology and strategic marketing evolved into executable code and algorithmic systems."
              </p>
            </div>

            {/* Primary Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  playTickSound(450);
                  onNavigateSection('about');
                }}
                className="px-6 py-3.5 rounded-full bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 text-sm font-mono font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all flex items-center space-x-2 group cursor-pointer shadow-md"
              >
                <span>Read 3-Chapter Story</span>
                <ArrowDownRight className="w-4 h-4 text-amber-400 dark:text-amber-600 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  playTickSound(400);
                  onNavigateSection('projects');
                }}
                className="px-5 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-800 dark:text-neutral-200 text-sm font-mono transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-amber-500" />
                <span>Explore Projects</span>
              </button>

              <button
                onClick={() => {
                  playTickSound(500);
                  onOpenPitchDrawer();
                }}
                className="px-5 py-3.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-sm font-mono transition-all flex items-center space-x-2 cursor-pointer hover:bg-amber-500/20"
              >
                <GraduationCap className="w-4 h-4 text-amber-500" />
                <span>SMU MITB Pitch</span>
              </button>
            </div>

            {/* Key Capabilities Quick Tags */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <span className="text-neutral-400 dark:text-neutral-600">Cross-Disciplinary Focus:</span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-800 dark:text-neutral-200">Marketing Analytics</span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-800 dark:text-neutral-200">TypeScript / Full-Stack</span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-800 dark:text-neutral-200">Enterprise AI</span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-800 dark:text-neutral-200">FinTech Systems</span>
            </div>

          </div>

          {/* Integrated Video Portal Frame Column (5 cols on desktop) */}
          <div className="col-span-12 lg:col-span-5 relative space-y-4">
            
            {/* The Integrated Video Portal Box */}
            <div className={`relative rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-500 ${
              frameRatio === 'cinematic' ? 'aspect-[21/9]' : frameRatio === 'portal' ? 'aspect-[4/3]' : 'aspect-[16/10]'
            }`}>
              
              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                src={selectedPreset.videoUrl}
                poster={selectedPreset.posterUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover filter contrast-105 brightness-90 hover:brightness-100 transition-all duration-700"
              />

              {/* Video Overlay Layering & Framing Lines */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
              
              {/* Corner Frame Accents */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-amber-400/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span>VIDEO PORTAL // {selectedPreset.category.toUpperCase()}</span>
              </div>

              <div className="absolute top-3 right-3 flex items-center space-x-1">
                <button
                  onClick={() => setShowVideoConfig(!showVideoConfig)}
                  className="p-1.5 rounded-md bg-black/60 text-neutral-300 hover:text-white backdrop-blur-xs transition-colors cursor-pointer"
                  title="Configure Video Source / Upload"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Video Title & Preset Selector Bar at Bottom */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono z-10">
                <div className="space-y-0.5 max-w-[200px] truncate">
                  <div className="font-semibold text-amber-300">{selectedPreset.name}</div>
                  <div className="text-[10px] text-neutral-300 truncate">{selectedPreset.description}</div>
                </div>

                <div className="flex items-center space-x-1 bg-black/70 p-1 rounded-lg backdrop-blur-md border border-neutral-700/50">
                  <button
                    onClick={togglePlay}
                    className="p-1 text-neutral-200 hover:text-white cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={toggleVideoMute}
                    className="p-1 text-neutral-200 hover:text-white cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-amber-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>

                  {/* Speed Controls */}
                  <div className="flex items-center space-x-0.5 pl-1 border-l border-neutral-700 text-[10px]">
                    {[0.75, 1, 1.5].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => handleSpeedChange(speed)}
                        className={`px-1 rounded ${playbackSpeed === speed ? 'bg-amber-500 text-black font-bold' : 'text-neutral-400'}`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Source Preset Switcher Buttons */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <span>Integrated Video Feeds:</span>
                <span className="text-[10px] text-amber-600 dark:text-amber-400">You can also supply a video link</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {HERO_VIDEO_PRESETS.map((preset) => {
                  const isSelected = selectedPreset.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        playTickSound(350);
                        setSelectedPreset(preset);
                      }}
                      className={`p-2 rounded-lg text-left text-xs font-mono transition-all border cursor-pointer ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-neutral-900 dark:text-neutral-100 font-medium'
                          : 'border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div className="truncate text-[11px] font-semibold">{preset.name}</div>
                      <div className="text-[9px] opacity-70 truncate">{preset.category}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Video URL Upload Modal Drawer */}
            {showVideoConfig && (
              <div className="p-4 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center space-x-1.5">
                    <Link className="w-3.5 h-3.5 text-amber-500" />
                    <span>Provide Custom Video URL</span>
                  </span>
                  <button
                    onClick={() => setShowVideoConfig(false)}
                    className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                  >
                    Close
                  </button>
                </div>

                <form onSubmit={handleApplyCustomVideo} className="space-y-2">
                  <input
                    type="url"
                    placeholder="https://example.com/my-background-video.mp4"
                    value={customVideoUrl}
                    onChange={(e) => setCustomVideoUrl(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <div className="flex items-center justify-between text-[10px] text-neutral-500">
                    <span>Supports MP4, WebM HTML5 video links.</span>
                    <button
                      type="submit"
                      className="px-3 py-1 rounded bg-amber-500 text-neutral-950 font-bold hover:bg-amber-400 transition-colors"
                    >
                      Apply Video
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Visual Quote / Narrative Callout */}
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 text-xs font-mono space-y-1.5">
              <div className="flex items-center justify-between text-neutral-500 dark:text-neutral-400 text-[10px]">
                <span>NARRATIVE DIRECTIVE //</span>
                <span className="text-amber-500 font-bold">SMU MITB CANDIDATE</span>
              </div>
              <p className="text-neutral-800 dark:text-neutral-200 italic font-serif text-sm">
                "Video as a design element, not just a background: symbolizing the continuous motion of high-velocity data and real-time user experiences."
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400 border-t border-neutral-200/60 dark:border-neutral-800/60">
        <div className="flex items-center space-x-2">
          <Compass className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '10s' }} />
          <span>CHAPTER 01: MARKETING & EDUCATION NEXT</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4 text-[11px]">
          <span>SCROLL FOR 3-CHAPTER NARRATIVE</span>
          <span className="w-12 h-px bg-neutral-300 dark:bg-neutral-700" />
        </div>
      </div>

    </section>
  );
};
