'use client';

import { Award, GraduationCap, Languages } from 'lucide-react';
import { certifications, education, languages } from '@/lib/data';
import { Reveal } from './Reveal';

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">Education</span>
          <h2 className="section-heading">Education &amp; certifications</h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          {/* Degree + languages */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-300">
                    <GraduationCap size={22} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {education.degree}
                    </h3>
                    <p className="mt-0.5 font-medium text-accent-700 dark:text-accent-300">
                      {education.school}
                    </p>
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                      {education.period}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {education.details}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                  <Languages
                    size={20}
                    className="text-accent-600 dark:text-accent-400"
                    aria-hidden
                  />
                  Languages
                </h3>
                <ul className="space-y-3">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {lang.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Certifications list */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="card p-6">
                <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                  <Award
                    size={20}
                    className="text-accent-600 dark:text-accent-400"
                    aria-hidden
                  />
                  Courses &amp; certifications
                </h3>
                <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3 first:pt-0 last:pb-0"
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                          {cert.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {cert.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
