/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f5f1',
          100: '#dae6dc',
          200: '#b7cdbb',
          300: '#8fb096',
          400: '#649071',
          500: '#456f52',
          600: '#345940',
          700: '#2a4735',
          800: '#23392c',
          900: '#1c2e24',
          950: '#0f1a15',
        },
        sand: {
          50: '#fbf9f5',
          100: '#f5f0e6',
          200: '#e9dfc9',
          300: '#dbc9a3',
          400: '#c9ab74',
          500: '#b8935a',
          600: '#a17a45',
          700: '#82613a',
          800: '#684e32',
          900: '#54402b',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}