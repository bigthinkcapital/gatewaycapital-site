/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50:  '#EDF2FF',
          100: '#D9E4FF',
          200: '#B3C9FF',
          300: '#80A8FF',
          400: '#4A7BF8',
          500: '#2563EB',
          600: '#1B4FD8',
          700: '#1540B5',
          800: '#0F2D8A',
          900: '#0A1F5C',
          950: '#0F1F4A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
