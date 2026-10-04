/**
 * Single source of truth for all personal/portfolio content.
 *
 * Edit this file to update the site — every section component reads from here,
 * so you never need to touch JSX to change copy, projects, skills, etc.
 */

import type { StaticImageData } from 'next/image';
import { withBasePath } from '@/lib/basePath';
import profilePhoto from '@/assets/profile.jpg';
import ccnaEnsaCertificate from '@/assets/certificates/ccna-ensa.jpg';
import ccnaItnCertificate from '@/assets/certificates/ccna-itn.jpg';
import ccnaSrweCertificate from '@/assets/certificates/ccna-srwe.jpg';
import gdgFlutterCertificate from '@/assets/certificates/gdg-flutter-course.jpg';
import collabBoard from '@/assets/projects/collab/board.webp';
import collabHero from '@/assets/projects/collab/hero.webp';
import collabMobile from '@/assets/projects/collab/mobile.jpg';
import moviesHomeDetails from '@/assets/projects/movies/home-details.jpg';
import moviesPromo from '@/assets/projects/movies/promo.webp';
import moviesSearchBrowse from '@/assets/projects/movies/search-browse.jpg';
import lumenCollection from '@/assets/projects/lumen/collection.webp';
import lumenContact from '@/assets/projects/lumen/contact.webp';
import lumenHero from '@/assets/projects/lumen/hero.webp';
import lumenShowcase from '@/assets/projects/lumen/showcase.webp';
import lumenStory from '@/assets/projects/lumen/story.webp';

export const GITHUB_USER = 'YoussefAwadSadek';

export const site = {
  name: 'Youssef Awad',
  fullName: 'Youssef Awad Sadek',
  initials: 'YA',
  role: 'Software & AI Engineer — Flutter & Full-Stack Web',
  title: 'Youssef Awad — Software & AI Engineer',
  description:
    'Software and AI Engineer specializing in cross-platform Flutter apps and full-stack web development. Built an AI-powered collaboration platform and interned at Schneider Electric. 1st place — GDG Flutter Course.',
  url: 'https://youssefawadsadek.github.io/portfolio',
  location: 'Egypt — open to remote',
  email: 'Youssefawadsadek@gmail.com',
  phone: '+201018802712',
  /** Your CV — replace public/resume.pdf to update it. */
  resumeUrl: withBasePath('/resume.pdf'),
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
  'AI Engineer',
];

export const heroTagline =
  'Software and AI Engineer building real, user-facing products — from cross-platform Flutter apps to AI-powered full-stack web platforms.';

/**
 * Portrait beside the hero text. Replace `assets/profile.jpg` to change it
 * (4:5 portrait, ~640×800). Imported statically so the GitHub Pages base path
 * is applied automatically.
 */
export const heroPhoto = {
  src: profilePhoto,
  alt: site.name,
  /** Code-style name tag under the photo. */
  tag: '<Youssef />',
};

export const about = {
  bio: [
    "I'm a Software and AI Engineer who studied Computer Science at the Arab Open University (2022 – 2026), focused on cross-platform mobile development with Flutter and full-stack web development with the Next.js / Node.js ecosystem.",
    'I built an AI-powered collaboration platform as my graduation project, completed an automation internship at Schneider Electric, and placed 1st in the Google Developer Group (GDG) Flutter course at my university — where I now serve as an active member of the mobile team.',
    "I'm looking for a software engineering role focused on building real, user-facing products.",
  ],
};

export interface Stat {
  label: string;
  value: string;
}

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
    items: ['Flutter', 'Dart', 'React Native', 'Riverpod', 'Hive'],
  },
  {
    category: 'Data & ML',
    icon: 'BarChart3',
    items: ['NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    category: 'UI/UX',
    icon: 'Figma',
    items: ['Figma', 'Adobe XD', 'Responsive design'],
  },
  {
    category: 'Tools & Cloud',
    icon: 'Wrench',
    items: ['Git', 'Supabase', 'Microsoft Office', 'AutoCAD', 'Linux'],
  },
  {
    category: 'Soft skills',
    icon: 'Users',
    items: [
      'Problem Solving',
      'Teamwork & Collaboration',
      'Communication',
      'Adaptability',
      'Eagerness to Learn',
    ],
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
      'Placed 1st in the Flutter Development Course run by Google at the university and joined the team.',
      'Helped organize and run developer events across multiple universities as part of the AOU GDG mobile team — the biggest being DevFest 2026 in Cairo.',
      'Participated in many workshops as an instructor.',
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

export interface Achievement {
  event: string;
  role: string;
  /** Headline result, shown as a badge. */
  result: string;
  period: string;
  bullets: string[];
}

export const achievements: Achievement[] = [
  {
    event: 'Egyptian Collegiate Programming Contest (ECPC)',
    role: 'Competitor',
    result: 'Top 10',
    period: 'Aug 2026',
    bullets: [
      'Competed in a 5-hour collegiate competitive programming contest as part of a 3-person team.',
      'Solved algorithmic and data-structure problems under strict time constraints.',
      'Applied problem-solving, algorithmic thinking, debugging, and time-management skills in a high-pressure environment.',
      'Collaborated with teammates to analyze problems, develop solutions, and optimize approaches.',
    ],
  },
];

/**
 * What plays at the top of a project's popup:
 * - website: a live URL, shown in a browser frame (a phone frame for Mobile projects)
 * - image: a screenshot imported from assets/, e.g. `import shot from '@/assets/projects/app.png'`
 * - gallery: several screenshots imported from assets/, shown one at a time
 * - video: a YouTube link, or an MP4 in public/, e.g. '/projects/demo.mp4'
 */
export type ProjectMedia =
  | { type: 'website'; url: string }
  | { type: 'image'; src: StaticImageData; alt: string }
  | { type: 'gallery'; images: { src: StaticImageData; alt: string }[] }
  | { type: 'video'; src: string; poster?: string };

export interface Project {
  title: string;
  description: string;
  /** Bullet points shown in the project's popup. */
  highlights?: string[];
  tags: string[];
  /** Full GitHub URL, or null if private/not published. */
  github: string | null;
  /** Live demo URL, or null for a placeholder. Embedded in the popup unless `media` is set. */
  demo: string | null;
  /** Popup demo; omit to embed `demo`, or to show "Demo coming soon" when there's none. */
  media?: ProjectMedia;
  featured?: boolean;
  /** Short category label shown on the card. */
  category: 'Web' | 'Mobile' | 'AI' | 'Security' | 'CLI';
}

export const projects: Project[] = [
  {
    title: 'Collab Workspaces',
    description:
      'AI-powered full-stack platform for team collaboration: time management, remote work groups, and teacher–student groups. Ships an AI chatbot, a document summarizer, and an automatic quiz generator. My graduation project.',
    highlights: [
      'Workspaces for time management, remote work groups, and teacher–student groups',
      'Built-in AI chatbot, document summarizer, and automatic quiz generator',
      'Full-stack build with Next.js, Node.js, and Supabase',
      'My graduation project',
    ],
    tags: ['Next.js', 'Node.js', 'Supabase', 'AI'],
    github: `https://github.com/${GITHUB_USER}/collab-workspaces`,
    demo: null,
    media: {
      type: 'gallery',
      images: [
        { src: collabHero, alt: 'Hero: "Everything App for Your Time, Tasks, and Teams"' },
        {
          src: collabBoard,
          alt: 'Sprint board with live task, calendar, and chat updates: "Stop juggling Notion, Slack, and Jira."',
        },
        { src: collabMobile, alt: 'Mobile app (coming soon) with tasks and a Pomodoro timer' },
      ],
    },
    featured: true,
    category: 'AI',
  },
  {
    title: 'LUMEN',
    description:
      'Showcase website for a small-batch candle studio, presenting sculptural, made-to-order candles in a crimson-and-gold "candlelight" style. Browse and filter the collection, tilt and zoom each candle in a 3D quick view, and keep a cart saved in the browser.',
    highlights: [
      'Browse and filter the candle collection',
      'Tilt and zoom each candle in a 3D quick-view viewer',
      'Pick a color and quantity; the cart is saved in the browser',
      'Crimson-and-gold "candlelight" design',
      'Fast, static React + TypeScript site that can be hosted anywhere',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Vitest'],
    github: `https://github.com/${GITHUB_USER}/lumen`,
    demo: 'https://youssefawadsadek.github.io/lumen/',
    media: {
      type: 'gallery',
      images: [
        { src: lumenShowcase, alt: 'LUMEN on a laptop and a phone' },
        { src: lumenHero, alt: 'Home page hero: "The dark was made for candlelight."' },
        { src: lumenCollection, alt: 'The collection, with category filters' },
        { src: lumenStory, alt: 'The "Our story" section' },
        { src: lumenContact, alt: 'Contact form and footer' },
      ],
    },
    category: 'Web',
  },
  {
    title: 'Tasky',
    description:
      'Offline-first Flutter task & habit tracker. Persists locally with Hive, manages state with Riverpod, and visualizes streaks and progress with fl_chart — fully usable with no network connection.',
    highlights: [
      'Offline-first — fully usable with no network connection',
      'Local persistence with Hive',
      'State management with Riverpod',
      'Streak and progress charts with fl_chart',
    ],
    tags: ['Flutter', 'Riverpod', 'Hive', 'fl_chart'],
    github: `https://github.com/${GITHUB_USER}/tasky`,
    demo: 'https://youssefawadsadek.github.io/tasky/',
    category: 'Mobile',
  },
  {
    title: 'Movies App',
    description:
      'Cross-platform movie discovery app built with Flutter and Dart: browse, search, and open detailed information on movies pulled from external REST APIs. Final project of the Route Mobile Development Diploma.',
    highlights: [
      'Modern, responsive mobile UI for browsing and exploring movies',
      'Movie data integrated from external REST APIs',
      'Browsing, search, and detailed movie pages',
      'Reusable widgets, navigation, state management, and API integration',
      'Final project of the Route Mobile Development Diploma',
    ],
    tags: ['Flutter', 'Dart', 'REST API'],
    github: null,
    demo: null,
    media: {
      type: 'gallery',
      images: [
        { src: moviesPromo, alt: 'Movies App promo: onboarding and home screens on two phones' },
        { src: moviesHomeDetails, alt: 'Home and movie details screens' },
        { src: moviesSearchBrowse, alt: 'Search and browse-by-genre screens' },
      ],
    },
    category: 'Mobile',
  },
  {
    title: 'Encrypted Password Manager',
    description:
      'Local, offline password manager and generator that stores credentials in an encrypted vault. Built in Python with AES-256-GCM authenticated encryption.',
    highlights: [
      'Local, offline vault for credentials',
      'Built-in password generator',
      'AES-256-GCM authenticated encryption',
      'Written in Python',
    ],
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
  /** Degree certificate image from assets/certificates/; a placeholder shows until it's set. */
  image?: StaticImageData;
  /** Verification link, shown as "Verify credential" in the popup. */
  url?: string;
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
  /** Certificate or badge image from assets/certificates/; a placeholder shows until it's set. */
  image?: StaticImageData;
  /** Verification link (e.g. Credly), shown as "Verify credential" in the popup. */
  url?: string;
}

export const certifications: Certification[] = [
  { name: 'AI Internship', issuer: 'CodeAlpha', date: 'Sep – Oct 2026' },
  { name: 'LLMs Internship', issuer: 'Tips Hindawi', date: 'Aug – Oct 2026' },
  {
    name: 'Microsoft Machine Learning Engineer',
    issuer: 'DEPI (Digital Egypt Pioneers Initiative)',
    date: 'Jun 2026 – Present',
  },
  { name: 'HCCDA-Tech Essentials Course', issuer: 'Huawei', date: 'Jul – Aug 2026' },
  {
    name: 'Summer Training 2026 — Cybersecurity',
    issuer: 'ITI (Information Technology Institute)',
    date: 'Jul – Aug 2026',
  },
  { name: 'Mobile Development Diploma', issuer: 'Route', date: 'Apr 2026 – Present' },
  { name: 'Google AI Course', issuer: 'Google', date: 'Jul – Aug 2025' },
  { name: 'Google Cybersecurity Course', issuer: 'Google', date: 'Jul – Aug 2025' },
  { name: 'Flutter Development Diploma', issuer: 'EraaSoft (on-site)', date: 'Mar – Aug 2025' },
  {
    name: 'GDG Flutter Course — 1st place',
    issuer: 'Google Developer Groups · Arab Open University',
    date: '2024 – 2025',
    image: gdgFlutterCertificate,
  },
  { name: 'Software Engineering', issuer: 'Course', date: 'Oct 2024 – Feb 2025' },
  { name: 'Algorithms & Data Structures', issuer: 'Course', date: 'Oct 2024 – Feb 2025' },
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: ccnaItnCertificate,
  },
  {
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: ccnaSrweCertificate,
  },
  {
    name: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: ccnaEnsaCertificate,
    url: 'https://www.credly.com/badges/f7c2cd2b-a81e-47f2-a786-27923d940c7b',
  },
  { name: 'UI/UX Mobile App Design', issuer: 'Course', date: 'Mar – May 2024' },
  { name: 'Operating Systems / Linux', issuer: 'Course', date: 'Mar – Jun 2024' },
  { name: 'Mastering Python Diploma', issuer: 'Diploma', date: 'Jan – Mar 2023' },
  { name: 'Front-End Web Developer Diploma', issuer: 'Diploma', date: 'Jan – Apr 2022' },
];

// Counted from the lists above, so the About stats stay in sync as items are added.
export const stats: Stat[] = [
  { value: '1st', label: 'GDG Flutter Course' },
  { value: '2026', label: 'CS degree' },
  { value: String(certifications.length), label: 'Certifications & courses' },
  { value: String(projects.length), label: 'Shipped projects' },
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
