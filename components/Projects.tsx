'use client';

import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import { Reveal } from './Reveal';

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-slate-200/70 bg-slate-50/60 py-20 sm:py-28 dark:border-slate-800/70 dark:bg-slate-900/30"
    >
      <div className="section-container">
        <Reveal>
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-heading">Things I&apos;ve built</h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            A selection of mobile apps, full-stack web platforms, and
            security-focused tools — shipped end to end.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`card group flex h-full flex-col p-6 hover:-translate-y-1 hover:shadow-lg ${
        project.featured
          ? 'ring-1 ring-accent-300 dark:ring-accent-700'
          : ''
      }`}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          {project.category}
        </span>
        {project.featured && (
          <span className="inline-flex items-center gap-1 rounded-md bg-accent-100 px-2 py-0.5 text-xs font-semibold text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
            <Sparkles size={12} aria-hidden />
            Featured
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
        {project.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-slate-200 px-2 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-400"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
            aria-label={`${project.title} source code on GitHub`}
          >
            <Github size={16} aria-hidden />
            Code
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 dark:text-slate-600">
            <Github size={16} aria-hidden />
            Private
          </span>
        )}

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
            aria-label={`${project.title} live demo`}
          >
            <ExternalLink size={16} aria-hidden />
            Live demo
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 dark:text-slate-600"
            title="Live demo coming soon"
          >
            <ExternalLink size={16} aria-hidden />
            Demo soon
          </span>
        )}
      </div>
    </article>
  );
}
