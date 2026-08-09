export type ThemeMode = 'dark' | 'light';

export interface Milestone {
  year: string;
  title: string;
  description: string;
  tag: string;
  metrics?: string;
}

export interface ChapterNarrative {
  id: 'marketing-education' | 'coding-journey' | 'the-future';
  number: string;
  title: string;
  subtitle: string;
  period: string;
  badge: string;
  summary: string;
  narrativeParagraphs: string[];
  keyMilestones: Milestone[];
  quote: {
    text: string;
    context: string;
  };
  skillsAcquired: string[];
  visualEmphasis: string;
}

export interface MetricItem {
  label: string;
  value: string;
  change?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Marketing Analytics' | 'Generative Systems' | 'FinTech & Data' | 'Human-AI Interfaces';
  year: string;
  featured: boolean;
  gridSpan: string; // Tailored asymmetrical layout span e.g. "col-span-12 md:col-span-7"
  imageAspect: 'aspect-[16/9]' | 'aspect-[4/3]' | 'aspect-[3/4]' | 'aspect-[21/9]';
  imageUrl: string;
  mediaType: 'video' | 'image' | 'canvas';
  videoUrl?: string;
  tags: string[];
  narrativeSummary: string;
  theChallenge: string;
  theArchitecturalSolution: string;
  businessImpact: MetricItem[];
  techStack: string[];
  interactiveDemoId: 'ad-optimizer' | 'generative-ui' | 'sentiment-analytics' | 'mitb-simulator';
  externalUrl?: string;
}

export interface VideoPreset {
  id: string;
  name: string;
  category: string;
  videoUrl: string;
  posterUrl: string;
  description: string;
}

export interface PitchSlide {
  id: number;
  chapterTag: string;
  title: string;
  subtitle: string;
  content: string[];
  keyQuote: string;
  stats: { label: string; value: string }[];
}

export interface ContactFormData {
  fullName: string;
  organization: string;
  role: 'SMU Admissions / Faculty' | 'Tech Leader / Recruiter' | 'Collaborator' | 'General';
  email: string;
  message: string;
  interestedIn: string[];
}
