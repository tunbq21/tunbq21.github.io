import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { playTickSound } from '../lib/audio';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  MapPin, 
  Github, 
  Linkedin, 
  GraduationCap, 
  Sparkles,
  FileText,
  Compass
} from 'lucide-react';

interface ContactSectionProps {
  onOpenPitchDrawer: () => void;
  onOpenAiAssistant: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenPitchDrawer,
  onOpenAiAssistant,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    organization: '',
    role: 'SMU Admissions / Faculty',
    email: '',
    message: '',
    interestedIn: ['SMU MITB Discussion']
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    playTickSound(300);
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    playTickSound(600);
    setSubmitted(true);
  };

  const handleToggleInterest = (item: string) => {
    playTickSound(250);
    setFormData(prev => {
      const exists = prev.interestedIn.includes(item);
      if (exists) {
        return { ...prev, interestedIn: prev.interestedIn.filter(i => i !== item) };
      } else {
        return { ...prev, interestedIn: [...prev.interestedIn, item] };
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/30 dark:bg-neutral-950/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Narrative Header */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-8 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-widest">
            <Mail className="w-4 h-4" />
            <span>Section 03 // Narrative Conclusion</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
            The Next Chapter
          </h2>
          <p className="max-w-2xl text-base font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
            Whether you are reviewing my application for SMU's Master of IT in Business, looking for a cross-disciplinary tech leader, or discussing collaborative R&D—I welcome thoughtful conversations.
          </p>
        </div>

        {/* Narrative Conclusion Grid */}
        <div className="grid grid-cols-12 gap-y-10 lg:gap-12 items-start">
          
          {/* Left Summary & Direct Credentials Card (5 cols) */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 space-y-6 shadow-sm">
              <div className="space-y-2">
                <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase">
                  Candidate Contact Card
                </div>
                <div className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center space-x-1">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                  <span>{PERSONAL_INFO.targetProgram}</span>
                </div>
              </div>

              {/* Location & Availability Badge */}
              <div className="space-y-3 pt-2 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono">
                <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>

                <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold">Ready for SMU MITB '26 Cohort & Strategic Projects</span>
                </div>
              </div>

              {/* Direct Email Copy Box */}
              <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 space-y-2">
                <div className="text-[10px] font-mono text-neutral-500 uppercase">Direct Email Address</div>
                <div className="flex items-center justify-between font-mono text-xs text-neutral-900 dark:text-neutral-100 truncate">
                  <span className="truncate pr-2">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold flex items-center space-x-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-amber-500" />}
                    <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    playTickSound(450);
                    onOpenPitchDrawer();
                  }}
                  className="w-full py-3 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono font-bold text-xs hover:bg-amber-500/20 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-amber-500" />
                  <span>Review SMU MITB Pitch Deck</span>
                </button>

                <button
                  onClick={() => {
                    playTickSound(400);
                    onOpenAiAssistant();
                  }}
                  className="w-full py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-mono text-xs hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Ask AI Twin Specific Questions</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Narrative Message Crafting Form (7 cols) */}
          <div className="col-span-12 lg:col-span-7">
            
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl space-y-6">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
                    Narrative Message Sent
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                    Thank you for reviewing my personal progression portfolio. I will respond to your email promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-full bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 text-xs font-mono font-bold cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase">
                      Interactive Narrative Letter
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
                      Craft a Direct Message
                    </h3>
                  </div>

                  {/* Role Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neutral-500 uppercase">
                      Your Perspective / Role:
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      {[
                        'SMU Admissions / Faculty',
                        'Tech Leader / Recruiter',
                        'Collaborator',
                        'General Inquiry'
                      ].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => {
                            playTickSound(300);
                            setFormData(prev => ({ ...prev, role: r as any }));
                          }}
                          className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                            formData.role === r
                              ? 'border-amber-500 bg-amber-500/10 text-neutral-900 dark:text-neutral-100 font-bold'
                              : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 font-mono text-xs">
                      <label className="text-neutral-500">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. / Ms. / Mr. Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div className="space-y-1 font-mono text-xs">
                      <label className="text-neutral-500">Your Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="email@organization.edu"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1 font-mono text-xs">
                    <label className="text-neutral-500">Your Message or Thoughts on Alex's Candidacy</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your note or question regarding SMU MITB, research, or projects..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 font-mono font-bold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                  >
                    <span>Transmit Narrative Note</span>
                    <Send className="w-4 h-4 text-amber-400 dark:text-amber-600" />
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
