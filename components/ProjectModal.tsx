'use client';

import { ExternalLink, Github, Sparkles } from 'lucide-react';
import type { Project } from '@/lib/data';
import { Modal } from './Modal';
import { ProjectDemo } from './ProjectDemo';

/** Project details popup: the demo on top, then the write-up and links. */
export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Modal
      open={project !== null}
      onClose={onClose}
      title={project?.title ?? ''}
      badges={
        project && (
          <>
            <span className="shrink-0 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              {project.category}
            </span>
            {project.featured && (
              <span className="hidden shrink-0 items-center gap-1 rounded-md bg-accent-100 px-2 py-0.5 text-xs font-semibold text-accent-700 sm:inline-flex dark:bg-accent-900/40 dark:text-accent-300">
                <Sparkles size={12} aria-hidden />
                Featured
              </span>
            )}
          </>
        )
      }
    >
      {project && (
        <>
          <ProjectDemo key={project.title} project={project} />

          <div className="space-y-6 p-5 sm:p-6">
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="section-eyebrow">Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="section-eyebrow">Built with</h3>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {(project.demo || project.github) && (
              <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={16} aria-hidden />
                    Live demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github size={16} aria-hidden />
                    Source code
                  </a>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </Modal>
  );
}
