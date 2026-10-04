'use client';

import { useRef, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: StaticImageData;
  alt: string;
}

/**
 * Screenshot gallery for the project popup: one image at a time, with arrows,
 * dots, arrow keys and swipe. Only the visible image is rendered, so only it
 * loads.
 */
export function Gallery({ images, title }: { images: GalleryImage[]; title: string }) {
  const [index, setIndex] = useState(0);
  const swipeStartX = useRef<number | null>(null);
  const count = images.length;
  const current = images[index];
  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      // Arrow keys work while focus is in the gallery; Esc is left to the popup.
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          go(1);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          go(-1);
        }
      }}
      className="space-y-3"
    >
      {/* Fixed 16:9 stage, so switching screenshots never shifts the layout. */}
      <div
        className="relative aspect-video touch-pan-y overflow-hidden rounded-xl border border-slate-200 bg-slate-950 dark:border-slate-700"
        onPointerDown={(e) => {
          if (e.pointerType !== 'mouse') swipeStartX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (swipeStartX.current === null) return;
          const dx = e.clientX - swipeStartX.current;
          swipeStartX.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
      >
        <Image
          src={current.src}
          alt={current.alt}
          loading="eager"
          className="absolute inset-0 h-full w-full object-contain"
        />

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous screenshot"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/60 text-white backdrop-blur-sm transition-colors hover:bg-slate-950/80"
        >
          <ChevronLeft size={20} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next screenshot"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/60 text-white backdrop-blur-sm transition-colors hover:bg-slate-950/80"
        >
          <ChevronRight size={20} aria-hidden />
        </button>

        <span
          aria-live="polite"
          className="absolute bottom-3 right-3 rounded-full bg-slate-950/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm"
        >
          {index + 1} / {count}
        </span>
      </div>

      <div className="flex justify-center gap-1">
        {images.map((image, i) => (
          <button
            key={image.alt}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show screenshot ${i + 1}: ${image.alt}`}
            aria-current={i === index}
            className="flex h-6 items-center px-1"
          >
            <span
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? 'w-6 bg-accent-500'
                  : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500'
              }`}
              aria-hidden
            />
          </button>
        ))}
      </div>
    </section>
  );
}
