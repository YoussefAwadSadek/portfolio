'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  Globe,
  Loader2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  type LucideIcon,
} from 'lucide-react';
import { withBasePath } from '@/lib/basePath';
import type { Project, ProjectMedia } from '@/lib/data';
import { ComingSoon } from './ComingSoon';
import { Gallery } from './Gallery';

// Icon for the "Demo coming soon" panel, per project category.
const CATEGORY_ICONS: Record<Project['category'], LucideIcon> = {
  Web: Globe,
  Mobile: Smartphone,
  AI: Sparkles,
  Security: ShieldCheck,
  CLI: Terminal,
};

// Embedded demos may run scripts and open links, but can't navigate this page.
const IFRAME_SANDBOX =
  'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox';

function youTubeId(url: string) {
  return (
    url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/)?.[1] ??
    null
  );
}

/**
 * The demo at the top of a project's popup: the live site, a screenshot, a
 * video, or a "coming soon" panel. A project with a `demo` URL and no `media`
 * embeds its live site.
 */
export function ProjectDemo({ project }: { project: Project }) {
  const media: ProjectMedia | null =
    project.media ?? (project.demo ? { type: 'website', url: project.demo } : null);

  return (
    <div className="border-b border-slate-200 bg-slate-50 p-4 sm:p-6 dark:border-slate-800 dark:bg-slate-950/50">
      {media?.type === 'website' &&
        (project.category === 'Mobile' ? (
          <PhoneFrame url={media.url} title={project.title} />
        ) : (
          <BrowserFrame url={media.url} title={project.title} />
        ))}
      {media?.type === 'image' && (
        <Image
          src={media.src}
          alt={media.alt}
          loading="eager"
          className="h-auto w-full rounded-xl border border-slate-200 dark:border-slate-700"
        />
      )}
      {media?.type === 'gallery' && <Gallery images={media.images} title={project.title} />}
      {media?.type === 'video' && (
        <Video src={media.src} poster={media.poster} title={project.title} />
      )}
      {!media && <ComingSoon icon={CATEGORY_ICONS[project.category]} label="Demo coming soon" />}
    </div>
  );
}

/**
 * A live site in an iframe. Until the visitor clicks in, it's inert and can't
 * capture scrolling or keep focus: embedded apps may focus themselves as they
 * boot (Flutter does), which would swallow Esc, so focus is handed back.
 */
function LiveDemo({ url, title, className }: { url: string; title: string; className: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(false);

  useLayoutEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    iframe.inert = !active;
    if (active) iframe.focus();
  }, [active]);

  useEffect(() => {
    if (active) return;
    let lastFocused: HTMLElement | null = null;
    const onFocusOut = (e: FocusEvent) => {
      lastFocused = e.target as HTMLElement;
    };
    // Focus moving into the frame blurs this window.
    const onWindowBlur = () => {
      const iframe = iframeRef.current;
      if (!iframe || document.activeElement !== iframe) return;
      window.setTimeout(() => (lastFocused?.isConnected ? lastFocused.focus() : iframe.blur()));
    };
    document.addEventListener('focusout', onFocusOut);
    window.addEventListener('blur', onWindowBlur);
    return () => {
      document.removeEventListener('focusout', onFocusOut);
      window.removeEventListener('blur', onWindowBlur);
    };
  }, [active]);

  return (
    <>
      <iframe
        ref={iframeRef}
        src={url}
        title={`${title} live demo`}
        sandbox={IFRAME_SANDBOX}
        onLoad={() => setLoaded(true)}
        className={className}
      />
      {!loaded && <Loading />}
      {loaded && !active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Interact with the ${title} demo`}
          className="group/demo absolute inset-0 flex items-end justify-center pb-4"
        >
          <span className="rounded-full bg-slate-900/85 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity group-hover/demo:opacity-100 group-focus-visible/demo:opacity-100">
            Click to interact
          </span>
        </button>
      )}
    </>
  );
}

function BrowserFrame({ url, title }: { url: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center gap-3 border-b border-slate-200 px-3 py-2 dark:border-slate-700">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="min-w-0 flex-1 truncate rounded-md bg-slate-100 px-3 py-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          {url.replace(/^https?:\/\//, '')}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the ${title} demo in a new tab`}
          title="Open in a new tab"
          className="text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
        >
          <ExternalLink size={16} aria-hidden />
        </a>
      </div>
      <div className="relative aspect-[4/3] sm:aspect-video">
        <LiveDemo url={url} title={title} className="absolute inset-0 h-full w-full bg-white" />
      </div>
    </div>
  );
}

function PhoneFrame({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-[2.25rem] border-[10px] border-slate-900 bg-slate-900 shadow-xl dark:border-slate-700">
        {/* The app lays out at a real phone size (390×844) and is shown at 2/3 scale. */}
        <div className="relative h-[563px] w-[260px] overflow-hidden rounded-[1.5rem] bg-white">
          <LiveDemo
            url={url}
            title={title}
            className="absolute left-0 top-0 h-[844px] w-[390px] origin-top-left scale-[0.6667] bg-white"
          />
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
      >
        Open full screen
        <ExternalLink size={14} aria-hidden />
      </a>
    </div>
  );
}

function Video({ src, poster, title }: { src: string; poster?: string; title: string }) {
  const id = youTubeId(src);
  const className = 'aspect-video w-full rounded-xl bg-black';

  return id ? (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title={`${title} demo video`}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={className}
    />
  ) : (
    <video
      src={withBasePath(src)}
      poster={poster && withBasePath(poster)}
      controls
      playsInline
      preload="metadata"
      className={className}
    />
  );
}

function Loading() {
  return (
    <div
      role="status"
      className="absolute inset-0 flex items-center justify-center bg-white text-slate-400 dark:bg-slate-900"
    >
      <Loader2 size={24} className="animate-spin" aria-hidden />
      <span className="sr-only">Loading demo…</span>
    </div>
  );
}
