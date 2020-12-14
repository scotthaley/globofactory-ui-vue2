module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: '#5E86D3',
        DEFAULT: '#4469B1'
      },
      black: {
        light: '#787878',
        DEFAULT: '#2E2E2E'
      },
      white: {
        DEFAULT: '#FAFAFA'
      },
      highlight: {
        green: '#34E5BB'
      },
    },
    extend: {
      transitionProperty: {
        'border-opacity': 'tw-border-opacity'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
