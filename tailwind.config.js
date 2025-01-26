/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './features/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'gm-thin': ['gm-thin', 'sans-serif'],
        'gm-extra-light': ['gm-extra-light', 'sans-serif'],
        'gm-light': ['gm-light', 'sans-serif'],
        'gm-regular': ['gm-regular', 'sans-serif'],
        'gm-medium': ['gm-medium', 'sans-serif'],
        'gm-semi-bold': ['gm-semi-bold', 'sans-serif'],
        'gm-bold': ['gm-bold', 'sans-serif'],
        'gm-extra-bold': ['gm-extra-bold', 'sans-serif'],
        'gm-black': ['gm-black', 'sans-serif'],
      },
      colors: {
        'primary': '#F57230',
        'secondary': '#FFEFD7',
        'tertiary': '#F9DC3D',
        'black': '#0E0D0A',
        'brown': '#5E513D',
      },
    },
  },
  plugins: [],
}
