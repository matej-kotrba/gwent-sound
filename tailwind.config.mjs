
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gwent-green': {
          'british-racing': '#01432E',
          'castleton': '#115D3F',
          'philippine': '#038742',
        },
        'gwent-yellow': {
          'icterine': '#F9F568',
          'minion': '#FADC4F',
        },
        'gwent-orange': {
          'gamboge': '#976006',
        }
      }
    },
  },
  plugins: [],
}
