import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Indigo accent + slate neutrals form a cohesive, modern palette.
        accent: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: ({ theme }) => ({
        // Light beam that traces the hero photo's border (rotated by animate-beam).
        beam: `conic-gradient(transparent 0 68%, ${theme('colors.accent.400')} 84%, ${theme('colors.fuchsia.400')} 94%, transparent)`,
      }),
      keyframes: {
        'grid-pan': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'grid-pan': 'grid-pan 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
        beam: 'spin 5s linear infinite',
        // Project popup: panel rises in, backdrop fades in.
        'pop-in': 'fade-up 0.25s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.2s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
