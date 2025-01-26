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
        'background': '#0A0A0A',
        'foreground': '#FAFAFA',
        'border': '#262626',
        'muted-foreground': '#a3a3a3',
        'destructive': '#FF3333'
      },
    },
  },
  plugins: [],
}
