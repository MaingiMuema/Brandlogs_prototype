/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#3783B4",
        green: "#1C9346",
        orange: "#F7A01C",
        red: "#DB2127",
        card_bg: "#B5E3FF",
      },
      fontSize: {
        'cta-caption': '0.8em',
      },
    },
    plugins: [],
  },
};
