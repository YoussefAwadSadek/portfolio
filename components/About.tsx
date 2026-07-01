'use client';

import { about, stats } from '@/lib/data';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">About</span>
          <h2 className="section-heading">A bit about me</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-3">
            {about.bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="card h-full p-5 hover:-translate-y-1 hover:border-accent-300 dark:hover:border-accent-700">
                    <div className="text-3xl font-extrabold text-accent-600 dark:text-accent-400">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
