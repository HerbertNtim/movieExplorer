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
        "dark-bg": '#0B0B0B',
        'dark-button': '#F59115',
        'dark-section-bg': '#100F11',
        'dark-card': '#1F1C3F',
      }
    }
  },
  plugins: [],
  darkMode: "class",
};
export default config;
