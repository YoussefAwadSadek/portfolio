'use client';

import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { site, socials } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-200/70 py-10 dark:border-slate-800/70">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              © {year} {site.fullName}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Built with Next.js &amp; Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              <Github size={18} aria-hidden />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              <Linkedin size={18} aria-hidden />
            </a>
            <a
              href={socials.email}
              aria-label="Email"
              className="text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              <Mail size={18} aria-hidden />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-accent-500 dark:hover:text-accent-300"
            >
              <ArrowUp size={16} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
