'use client';

import { useEffect, useId, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  /** Chips shown next to the title. */
  badges?: ReactNode;
  /** Panel max width from `sm` up, as a Tailwind class. */
  width?: string;
  children: ReactNode;
}

/**
 * Popup shell built on the native <dialog>: showModal() makes the rest of the
 * page inert, Esc closes it, and focus returns to whatever opened it.
 * Full-screen on phones, a centered panel from `sm` up; the body scrolls.
 */
export function Modal({
  open,
  onClose,
  title,
  badges,
  width = 'sm:max-w-4xl',
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();

    // Lock page scroll while the popup is open.
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      // Every close path goes through state; the effect above then closes the dialog.
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      // Fallback for native closes. The event arrives a frame late, so ignore
      // it if the popup has already been reopened.
      onClose={() => {
        if (!dialogRef.current?.open) onClose();
      }}
      // The panel fills the dialog, so a click on the dialog itself is a click on the backdrop.
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby={titleId}
      className={`m-0 h-[100dvh] max-h-none w-full max-w-none overflow-visible bg-transparent p-0 text-slate-800 backdrop:animate-fade-in backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm sm:m-auto sm:h-fit sm:max-h-[90vh] sm:w-[calc(100%-2rem)] ${width} dark:text-slate-200`}
    >
      {open && (
        <div className="flex h-full animate-pop-in flex-col bg-white sm:h-auto sm:max-h-[90vh] sm:rounded-2xl sm:border sm:border-slate-200 sm:shadow-2xl dark:bg-slate-900 dark:sm:border-slate-800">
          <header className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 dark:border-slate-800">
            <h2
              id={titleId}
              className="min-w-0 text-lg font-semibold leading-snug text-slate-900 dark:text-white"
            >
              {title}
            </h2>
            {badges}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <X size={18} aria-hidden />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto overscroll-contain">{children}</div>
        </div>
      )}
    </dialog>
  );
}
