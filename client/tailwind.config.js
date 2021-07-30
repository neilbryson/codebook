module.exports = {
  purge: ['./src/**/*/.{ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '800px',
      md: '1200px',
      lg: '1600px',
      xl: '1920px',
      '2xl': '2400px',
    },
    fontFamily: {
      sans: ['Atkinson Hyperlegible', 'sans-serif'],
      mono: ['Jetbrains Mono', 'monospace'],
    },
  },
  variants: {

  },
  plugins: [],
};
