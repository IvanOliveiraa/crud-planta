import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          100: "#A2B281",
          200: "#347A3B",
          250: "#2F6F36",
          300: "#2F4E32",
          400: "#313A33",
          700: "#1B271D",
          900: "#171F18",
        },
        // ...
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        VT323: ['"VT323"', "display"],
      },
    },
  },
  plugins: [],
};
export default config;
