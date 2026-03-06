module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#E65100',
        surface: '#F5F5F5',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
