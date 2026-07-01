/**
 * Single source of truth for all personal/portfolio content.
 *
 * Edit this file to update the site — every section component reads from here,
 * so you never need to touch JSX to change copy, projects, skills, etc.
 */

export const GITHUB_USER = 'YoussefAwadSadek';

export const site = {
  name: 'Youssef Awad',
  fullName: 'Youssef Awad Sadek',
  initials: 'YA',
  role: 'Software Developer — Flutter & Full-Stack Web',
  title: 'Youssef Awad — Flutter & Full-Stack Web Developer',
  description:
    'Computer Science student specializing in cross-platform Flutter apps and full-stack web development. Built an AI-powered collaboration platform and interned at Schneider Electric. 1st place — GDG Flutter Course.',
  url: 'https://youssefawadsadek.github.io/portfolio',
  location: 'Egypt — open to remote',
  email: 'Youssefawadsadek@gmail.com',
  phone: '+201018802712',
  resumeUrl: '/resume.pdf',
} as const;

export const socials = {
  github: 'https://github.com/YoussefAwadSadek',
  linkedin: 'https://linkedin.com/in/youssef-awad-312b14305',
  email: 'mailto:Youssefawadsadek@gmail.com',
} as const;

/** Roles that the hero headline rotates through. */
export const heroRoles: string[] = [
  'Flutter Developer',
  'Full-Stack Web Developer',
  'AI Builder',
];

export const heroTagline =
  'Computer Science student (graduating 2026) building real, user-facing products — from cross-platform Flutter apps to AI-powered full-stack web platforms.';

export const about = {
  bio: [
    "I'm a Computer Science student at the Arab Open University (graduating 2026), focused on cross-platform mobile development with Flutter and full-stack web development with the Next.js / Node.js ecosystem.",
    'I built an AI-powered collaboration platform as my graduation project, completed an automation internship at Schneider Electric, and placed 1st in the Google Developer Group (GDG) Flutter course at my university — where I now serve as an active member of the mobile team.',
    "I'm looking for a software development role focused on shipping real products that people actually use.",
  ],
};

export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { value: '1st', label: 'GDG Flutter Course' },
  { value: '2026', label: 'Graduating' },
  { value: '11+', label: 'Certifications & courses' },
  { value: '7', label: 'Shipped projects' },
];

export interface SkillCategory {
  category: string;
  /** lucide-react icon name, resolved in the Skills component. */
  icon: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    icon: 'Code2',
    items: ['Python', 'Java', 'C', 'Dart', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Web',
    icon: 'Globe',
    items: [
      'Next.js',
      'React',
      'Angular',
      'Node.js',
      'PHP (Laravel)',
      'HTML',
      'CSS',
      'WordPress',
    ],
  },
  {
    category: 'Mobile',
    icon: 'Smartphone',
    items: ['Flutter', 'Dart', 'Riverpod', 'Hive'],
  },
  {
    category: 'UI/UX',
    icon: 'Figma',
    items: ['Figma', 'Adobe XD', 'Responsive design'],
  },
  {
    category: 'Tools & Cloud',
    icon: 'Wrench',
    items: ['Git', 'Supabase', 'Microsoft Office', 'Linux'],
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Mobile Team Member',
    company: 'University Google Developer Group (GDG)',
    period: 'Jan 2025 – May 2026',
    location: 'Arab Open University, Egypt',
    bullets: [
      'Placed 1st in the Flutter Development Course run by Google at the university.',
      'Helped organize and run developer events across multiple universities as part of the AOU GDG mobile team.',
      'Mentored peers on Flutter fundamentals, state management, and shipping their first apps.',
    ],
  },
  {
    role: 'Automation Intern',
    company: 'Schneider Electric',
    period: 'Jul 2025 – Aug 2025',
    location: 'Egypt',
    bullets: [
      'Completed a structured internship covering industrial automation (PLC, SCADA, DCS), process control, and classic control systems.',
      'Performed data analysis and cleaning in Excel; produced technical designs and drawings in AutoCAD.',
      'Gained exposure to supply chain & logistics, networking, cybersecurity, and IoT within digital transformation.',
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** Full GitHub URL, or null if private/not published. */
  github: string | null;
  /** Live demo URL, or null for a placeholder. */
  demo: string | null;
  featured?: boolean;
  /** Short category label shown on the card. */
  category: 'Web' | 'Mobile' | 'AI' | 'Security' | 'CLI';
}

export const projects: Project[] = [
  {
    title: 'Collab Workspaces',
    description:
      'AI-powered full-stack platform for team collaboration: time management, remote work groups, and teacher–student groups. Ships an AI chatbot, a document summarizer, and an automatic quiz generator. My graduation project.',
    tags: ['Next.js', 'Node.js', 'Supabase', 'AI'],
    github: `https://github.com/${GITHUB_USER}/collab-workspaces`,
    demo: null,
    featured: true,
    category: 'AI',
  },
  {
    title: 'Tasky',
    description:
      'Offline-first Flutter task & habit tracker. Persists locally with Hive, manages state with Riverpod, and visualizes streaks and progress with fl_chart — fully usable with no network connection.',
    tags: ['Flutter', 'Riverpod', 'Hive', 'fl_chart'],
    github: `https://github.com/${GITHUB_USER}/tasky`,
    demo: 'https://youssefawadsadek.github.io/tasky/',
    category: 'Mobile',
  },
  {
    title: 'AskDocs',
    description:
      'Chat with your PDFs. A retrieval-augmented-generation (RAG) app that ingests documents, embeds them, and answers questions with grounded citations using the Claude API.',
    tags: ['Next.js', 'RAG', 'Claude API', 'TypeScript'],
    github: `https://github.com/${GITHUB_USER}/askdocs`,
    demo: null,
    category: 'AI',
  },
  {
    title: 'Snip',
    description:
      'Full-stack URL shortener with a dashboard for per-link click analytics, geographic and referrer breakdowns, and QR generation. Built on Next.js with a Supabase Postgres backend.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Analytics'],
    github: `https://github.com/${GITHUB_USER}/snip`,
    demo: null,
    category: 'Web',
  },
  {
    title: 'VaultCLI',
    description:
      'Hardened, offline encrypted password manager for the terminal. Derives keys with Argon2id and encrypts the vault with AES-256-GCM — a security-first rewrite of my earlier password manager.',
    tags: ['Python', 'AES-256-GCM', 'Argon2id', 'CLI'],
    github: `https://github.com/${GITHUB_USER}/vaultcli`,
    demo: null,
    category: 'Security',
  },
  {
    title: 'Noti',
    description:
      'AI-powered notes app and final project for the EraaSoft Flutter diploma. Summarizes notes and automatically categorizes them, built end-to-end in Flutter and Dart.',
    tags: ['Flutter', 'Dart', 'AI'],
    github: `https://github.com/${GITHUB_USER}/noti`,
    demo: null,
    category: 'Mobile',
  },
  {
    title: 'Encrypted Password Manager',
    description:
      'Local, offline password manager and generator that stores credentials in an encrypted vault. Built in Python with AES-256-GCM authenticated encryption.',
    tags: ['Python', 'AES-256-GCM', 'Cryptography'],
    github: `https://github.com/${GITHUB_USER}/password-manager`,
    demo: null,
    category: 'Security',
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
}

export const education: Education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Arab Open University',
  period: '2022 – 2026',
  details:
    'Cross-platform mobile development, full-stack web, algorithms & data structures, operating systems, software engineering, and machine learning.',
};

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  { name: 'Mobile Development Diploma', issuer: 'Route', date: 'Apr 2026 – Present' },
  { name: 'Google AI Course', issuer: 'Google', date: 'Jul – Aug 2025' },
  { name: 'Google Cybersecurity Course', issuer: 'Google', date: 'Jul – Aug 2025' },
  { name: 'Flutter Development Diploma', issuer: 'EraaSoft (on-site)', date: 'Mar – Aug 2025' },
  { name: 'Software Engineering', issuer: 'Course', date: 'Oct 2024 – Feb 2025' },
  { name: 'Algorithms & Data Structures', issuer: 'Course', date: 'Oct 2024 – Feb 2025' },
  { name: 'UI/UX Mobile App Design', issuer: 'Course', date: 'Mar – May 2024' },
  { name: 'Operating Systems / Linux', issuer: 'Course', date: 'Mar – Jun 2024' },
  { name: 'CCNA — Cisco Certified Network Associate', issuer: 'Cisco', date: 'Jan – Mar 2023' },
  { name: 'Mastering Python Diploma', issuer: 'Diploma', date: 'Jan – Mar 2023' },
  { name: 'Front-End Web Developer Diploma', issuer: 'Diploma', date: 'Jan – Apr 2022' },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const languages: { name: string; level: string }[] = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'German', level: 'Beginner' },
];
