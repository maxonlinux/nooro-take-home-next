import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        header: "#0D0D0D",
        text: "#F2F2F2",
        blue: "#4EA8DE",
        purple: "#8284FA",
        "blue-dark": "#1E6F9F",
        "purple-dark": "#5E60CE",
      },
    },
  },
  plugins: [],
} satisfies Config;
