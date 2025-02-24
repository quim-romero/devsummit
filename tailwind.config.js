/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.{js,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        background: '#f8fafc',
        primary: '#6366f1',
        accent: '#14b8a6',
        muted: '#64748b',

        dark: {
          background: '#0f172a',
          surface: '#1e293b',
          text: '#e2e8f0',
        },
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(99, 102, 241, 0.5)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
