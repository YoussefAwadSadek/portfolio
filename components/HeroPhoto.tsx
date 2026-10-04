import Image from 'next/image';
import { heroPhoto } from '@/lib/data';

// Code-style brackets sitting just outside each corner of the card.
const CORNERS = [
  '-left-2.5 -top-2.5 rounded-tl-md border-l-2 border-t-2',
  '-right-2.5 -top-2.5 rounded-tr-md border-r-2 border-t-2',
  '-bottom-2.5 -left-2.5 rounded-bl-md border-b-2 border-l-2',
  '-bottom-2.5 -right-2.5 rounded-br-md border-b-2 border-r-2',
];

/**
 * Hero portrait in a "border beam" frame: a light beam circles the card's
 * edge, with code-style corner brackets and a name tag. The motion is pure
 * CSS, so the global prefers-reduced-motion rule stills it.
 */
export function HeroPhoto() {
  return (
    <div className="relative isolate w-40 sm:w-48 lg:w-[280px] xl:w-[320px]">
      {/* Soft glow behind the card */}
      <div
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent-500/20 blur-2xl dark:bg-accent-600/25"
        aria-hidden
      />

      {/* The rotating beam only shows through the 2px rim around the photo */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800">
        <div className="absolute -inset-1/2 animate-beam bg-beam" aria-hidden />
        <div className="absolute inset-[2px] overflow-hidden rounded-[22px] bg-slate-100 dark:bg-slate-900">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {CORNERS.map((corner) => (
        <span
          key={corner}
          className={`absolute h-5 w-5 animate-pulse border-accent-500 dark:border-accent-400 ${corner}`}
          aria-hidden
        />
      ))}

      <span
        className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-slate-200 bg-white px-2.5 py-0.5 font-mono text-xs font-medium text-accent-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-accent-200"
        aria-hidden
      >
        {heroPhoto.tag}
      </span>
    </div>
  );
}
