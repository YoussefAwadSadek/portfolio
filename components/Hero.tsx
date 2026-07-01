'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { heroRoles, heroTagline, site, socials } from '@/lib/data';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % heroRoles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Animated grid + gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="hero-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px] dark:bg-accent-600/25" />
        <div className="absolute right-[5%] top-[30%] h-[280px] w-[280px] rounded-full bg-fuchsia-500/10 blur-[100px] dark:bg-fuchsia-500/15" />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to software developer roles
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            Hi, I&apos;m{' '}
            <span className="gradient-text animate-gradient-shift">
              {site.name}
            </span>
          </h1>

          <div className="mt-4 flex h-9 items-center text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-200">
            <span className="text-accent-600 dark:text-accent-400">&lt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                transition={{ duration: 0.3 }}
                className="mx-1.5"
              >
                {heroRoles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="text-accent-600 dark:text-accent-400">/&gt;</span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            {heroTagline}
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin size={16} aria-hidden />
            <span>{site.location}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} aria-hidden />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialLink
              href={socials.github}
              label="GitHub profile"
              icon={<Github size={18} aria-hidden />}
            />
            <SocialLink
              href={socials.linkedin}
              label="LinkedIn profile"
              icon={<Linkedin size={18} aria-hidden />}
            />
            <SocialLink
              href={socials.email}
              label="Send an email"
              icon={<Mail size={18} aria-hidden />}
              external={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
  external = true,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent-500 dark:hover:text-accent-300"
    >
      {icon}
    </a>
  );
}
