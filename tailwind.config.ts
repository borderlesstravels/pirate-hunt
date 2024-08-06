import type { Config } from "tailwindcss";

const colors = {
  "orange-color": "#EDA063",
  "dark-blue": "#1A314F",
  "dark-blue-2": "#152B4A",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
export default config;
