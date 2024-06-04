/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontWeight: {
        custom: '800', // Your custom font weight
      },
      boxShadow: {
        'custom': '0 2px 6px rgba(0, 0, 0, 0.05), 0 3px 10px rgba(0, 0, 0, 0.025)',
      },
      
    },
  },
  plugins: [],
}

