/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "focus":
          "linear-gradient(to right, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0)), url('/focus.jpg')",
        "focus-mobile":
          "linear-gradient(to top, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0)), url('/focus.jpg')",
        "team-meeting":
          "linear-gradient(to left, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0)), url('/team-meeting.jpg')",
        "team-meeting-mobile":
          "linear-gradient(to top, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0)), url('/team-meeting.jpg')",
        "team-top-down":
          "linear-gradient(to left, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0)), url('/team.jpg')",
        "team-top-down-mobile":
          "linear-gradient(to top, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0)), url('/team.jpg')",
      },
      screens: {
        xs: "400px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        heading: "karla, semi-bold",
        body: "roboto flex",
      },
      colors: {
        groupBlue: "#398BF9",
        groupWhite: "#fafafa",
        groupBlack: "#343333",
      },
    },
  },
  plugins: [],
};
