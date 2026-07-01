'use client';

import {
  Code2,
  Figma,
  Globe,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { skills } from '@/lib/data';
import { Reveal } from './Reveal';

// Map of icon names (from data.ts) to their components.
const ICONS: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Smartphone,
  Figma,
  Wrench,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-slate-200/70 bg-slate-50/60 py-20 sm:py-28 dark:border-slate-800/70 dark:bg-slate-900/30"
    >
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-heading">Tools &amp; technologies</h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            The stack I reach for when building mobile apps and full-stack web
            products.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Code2;
            return (
              <Reveal key={group.category} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-300">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
