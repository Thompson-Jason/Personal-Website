import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  // Scan everything under src/, not just pages/components/app - class names
  // that only live in src/constants (or anywhere else) need to be found too,
  // or Tailwind silently omits them from the generated CSS.
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#181926",
          text: "#cad3f5",
          accent: "#b7bdf8",
          secondary: "#24273a",
          success: "#a6da95",
          error: "#ed8796",
          warning: "#eed49f",
          surface: "#232946",
          border: "#363a4f",
          hover: "#494d64",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [typography],
};
export default config;
