'use client';

import { Trophy } from 'lucide-react';
import { achievements } from '@/lib/data';
import { Reveal } from './Reveal';

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-20 border-t border-slate-200/70 py-20 sm:py-28 dark:border-slate-800/70"
    >
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">Achievements</span>
          <h2 className="section-heading">Competitions &amp; recognition</h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {achievements.map((item, i) => (
            <Reveal key={item.event} delay={i * 0.1}>
              <article className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300">
                      <Trophy size={20} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {item.event}
                      </h3>
                      <p className="mt-0.5 font-medium text-accent-700 dark:text-accent-300">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                      {item.result}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {item.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
