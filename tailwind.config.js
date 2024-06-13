/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "hsl(223, 87%, 63%)",
      paleBlue: "hsl(223, 100%, 88%)",
      red: "hsl(354, 100%, 66%)",
      gray: "hsl(0, 0%, 59%)",
      veryDarkBlue: "hsl(209, 33%, 12%)",
      white: "#fff",
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "600px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
