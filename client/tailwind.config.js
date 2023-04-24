/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#F5F8FA',
        'google-but-color': '#DCDBDD',
      },
    },
  },
  plugins: [],
};
