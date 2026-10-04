'use client';

import { useState } from 'react';
import { ArrowUpRight, Award, ChevronRight, GraduationCap, Languages } from 'lucide-react';
import { certifications, education, languages, type Certification } from '@/lib/data';
import { CertificateModal } from './CertificateModal';
import { Reveal } from './Reveal';

// The degree opens in the same certificate popup as the courses.
const degreeCertificate: Certification = {
  name: education.degree,
  issuer: education.school,
  date: education.period,
  image: education.image,
  url: education.url,
};

export function Education() {
  const [activeCertification, setActiveCertification] = useState<Certification | null>(null);

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
              <div className="card group relative cursor-pointer p-6 hover:-translate-y-0.5 hover:border-accent-300 dark:hover:border-accent-700">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-300">
                    <GraduationCap size={22} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                      {/* Stretched over the whole card, so clicking anywhere on it opens the certificate. */}
                      <button
                        type="button"
                        onClick={() => setActiveCertification(degreeCertificate)}
                        aria-haspopup="dialog"
                        className="text-left after:absolute after:inset-0 after:rounded-2xl"
                      >
                        {education.degree}
                      </button>
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
                    <span
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors group-hover:text-accent-600 dark:text-slate-500 dark:group-hover:text-accent-400"
                      aria-hidden
                    >
                      View certificate
                      <ArrowUpRight size={16} />
                    </span>
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
                    <li key={cert.name} className="py-3 first:pt-0 last:pb-0">
                      {/* Every certificate opens a popup (a placeholder until its image is added). */}
                      <button
                        type="button"
                        onClick={() => setActiveCertification(cert)}
                        aria-haspopup="dialog"
                        className="group -mx-3 -my-2 flex w-[calc(100%+1.5rem)] flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg px-3 py-2 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      >
                        <span>
                          <span className="block text-sm font-medium text-slate-800 transition-colors group-hover:text-accent-600 dark:text-slate-200 dark:group-hover:text-accent-400">
                            {cert.name}
                          </span>
                          <span className="block text-xs text-slate-500 dark:text-slate-400">
                            {cert.issuer}
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                          {cert.date}
                          <ChevronRight
                            size={14}
                            className="text-accent-500 transition-transform group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <CertificateModal
        certification={activeCertification}
        onClose={() => setActiveCertification(null)}
      />
    </section>
  );
}
