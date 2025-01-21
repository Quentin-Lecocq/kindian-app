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
        'bodoni-moda': ['Bodoni-Moda', 'sans-serif'],
        'bodoni-moda-bold': ['Bodoni-Moda-Bold', 'sans-serif'],
        'bodoni-moda-medium': ['Bodoni-Moda-Medium', 'sans-serif'],
        'bodoni-moda-extra-bold': ['Bodoni-Moda-ExtraBold', 'sans-serif'],
        'bodoni-moda-black': ['Bodoni-Moda-Black', 'sans-serif'],
        'dm-mono': ['DM-Mono', 'sans-serif'],
        'dm-mono-light': ['DM-Mono-Light', 'sans-serif'],
        'dm-mono-light-italic': ['DM-Mono-Light-Italic', 'sans-serif'],
        'dm-mono-medium': ['DM-Mono-Medium', 'sans-serif'],
        'dm-mono-medium-italic': ['DM-Mono-Medium-Italic', 'sans-serif'],
        'roboto-mono': ['Roboto-Mono', 'sans-serif'],
      },
      colors: {
        'primary': '#F57230',
        'secondary': '#FFEFD7',
        'tertiary': '#F9DC3D',
        'black': '#0E0D0A',
      },
    },
  },
  plugins: [],
}
