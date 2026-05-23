import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        selva: {
          50:  "#f2f9f4",
          100: "#ddf0e3",
          200: "#b8dfc8",
          300: "#84c8a0",
          400: "#4aaa73",
          500: "#268f53",
          600: "#177240",
          700: "#125b33",
          800: "#0f482a",
          900: "#0c3c23",
          950: "#062214",
        },
        tierra: {
          50:  "#fdf8f0",
          100: "#faebd6",
          200: "#f3d4aa",
          300: "#e9b674",
          400: "#dc9244",
          500: "#c97626",
          600: "#aa5c1c",
          700: "#874519",
          800: "#6e3919",
          900: "#5b3018",
          950: "#30160a",
        },
        caribe: {
          50:  "#ecfeff",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        arena: {
          50:  "#fdfaf3",
          100: "#f9f1e0",
          200: "#f0e0bc",
          300: "#e5ca92",
        },
      },
      fontFamily: {
        heading: ["var(--font-lora)", "Georgia", "serif"],
        body:    ["var(--font-nunito)", "sans-serif"],
      },
      backgroundImage: {
        "texture-selva": "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23268f53' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
