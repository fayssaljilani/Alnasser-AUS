/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0056a4',
          600: '#004d93',
          700: '#003f7a',
          800: '#003366',
          900: '#002a54',
          950: '#001a33',
        },
        secondary: {
          50: '#f7f7f6',
          100: '#e4e4e1',
          200: '#c9c8c3',
          300: '#a7a59e',
          400: '#88857c',
          500: '#6f6c62',
          600: '#5a574f',
          700: '#4a4742',
          800: '#3d3a36',
          900: '#35322f',
          950: '#1c1a18',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}