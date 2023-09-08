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
        cta_hover: "#9D2C24"
      },
      fontSize: {
        'cta-caption': '0.8em',
      },
    },
    plugins: [],
  },
};
