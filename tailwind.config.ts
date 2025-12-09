import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f5f0e8',
          dark: '#0f0f0f',
        },
        text: {
          light: '#1f1f1f',
          dark: '#f5f5f5',
        },
        primary: '#0f3b2c',
        accent: '#b08b2e',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '16px',
      },
    },
  },
  plugins: [],
};

export default config;
