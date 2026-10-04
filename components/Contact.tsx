'use client';

import { useState, type FormEvent } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { site, socials } from '@/lib/data';
import { Reveal } from './Reveal';

export function Contact() {
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [message, setMessage] = useState('');

  // No backend: compose a mailto link so the form works on a static host.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${name || 'someone'}`,
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${from ? ` (${from})` : ''}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-slate-200/70 py-20 sm:py-28 dark:border-slate-800/70"
    >
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="section-eyebrow">Contact</span>
              <h2 className="section-heading">Let&apos;s build something</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400">
                I&apos;m open to software development roles, freelance work, and
                collaboration on interesting products. The fastest way to reach
                me is email — I usually reply within a day.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={socials.email}
                className="btn-primary mt-6"
                aria-label={`Email ${site.fullName}`}
              >
                <Mail size={16} aria-hidden />
                {site.email}
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 flex items-center gap-3">
                <SocialIcon
                  href={socials.github}
                  label="GitHub"
                  icon={<Github size={18} aria-hidden />}
                />
                <SocialIcon
                  href={socials.linkedin}
                  label="LinkedIn"
                  icon={<Linkedin size={18} aria-hidden />}
                />
                <SocialIcon
                  href={socials.email}
                  label="Email"
                  external={false}
                  icon={<Mail size={18} aria-hidden />}
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="card space-y-4 p-6 sm:p-8"
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-accent-900"
                  placeholder="Jane Recruiter"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-accent-900"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-accent-900"
                  placeholder="Tell me about the role or project…"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send size={16} aria-hidden />
                Send message
              </button>
              <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                This opens your email client — no data is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
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
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent-500 dark:hover:text-accent-300"
    >
      {icon}
    </a>
  );
}
