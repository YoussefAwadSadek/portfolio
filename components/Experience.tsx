'use client';

import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '@/lib/data';
import { Reveal } from './Reveal';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-heading">Where I&apos;ve worked</h2>
        </Reveal>

        <ol className="relative mt-12 space-y-10 border-l-2 border-slate-200 pl-8 dark:border-slate-800">
          {experience.map((item, i) => (
            <Reveal as="li" key={`${item.company}-${item.role}`} delay={i * 0.1}>
              <span
                className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent-500 bg-white dark:bg-slate-950"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-accent-500" />
              </span>

              <div className="card p-6 transition-transform hover:-translate-y-0.5">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                    <Briefcase
                      size={18}
                      className="text-accent-600 dark:text-accent-400"
                      aria-hidden
                    />
                    {item.role}
                  </h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {item.period}
                  </span>
                </div>

                <p className="mt-1 font-medium text-accent-700 dark:text-accent-300">
                  {item.company}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin size={14} aria-hidden />
                  {item.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400"
                        aria-hidden
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
