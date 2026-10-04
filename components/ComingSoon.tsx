import type { LucideIcon } from 'lucide-react';

/** Placeholder panel for a demo or certificate that isn't available yet. */
export function ComingSoon({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex h-48 w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-slate-300 bg-gradient-to-br from-accent-50 to-fuchsia-50 sm:h-64 dark:border-slate-700 dark:from-accent-950/40 dark:to-fuchsia-950/20">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-300">
        <Icon size={24} aria-hidden />
      </span>
      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</p>
    </div>
  );
}
