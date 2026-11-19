/** @type {import('tailwindcss').Config} */
module.exports = {
  // 'class' mode: required for SSR hydration with NativeWind on web —
  // 'media' mode makes react-native-css-interop throw on manual color scheme changes.
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        navy: '#183B56',
        coral: '#E76F51',
        'coral-soft': '#FDEDE8',
        muted: '#718096',
        line: '#E2E8F0',
        surface: '#F7F9FC',
      },
    },
  },
  plugins: [],
};
