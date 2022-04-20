module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '20': '20px',
      '40':'40px'
    },
    extend: {
      height: {
        '128': '32rem',
      },
      outlineWidth: {
        '6': '6px',
      }
    },
  },
  plugins: [],
}
