/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#F5F8FA',
        'google-but-color': '#DCDBDD',
        'nav-color': '#272E71',
        'side-bar-color': '#F9FAFB',
      },
    },
  },
  plugins: [],
};
