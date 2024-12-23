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
        foreground: "#F2F2F2",
        blue: "#4EA8DE",
        "blue-dark": "#1E6F9F",
        purple: "#8284FA",
        "purple-dark": "#5E60CE",
      },
    },
  },
  plugins: [],
} satisfies Config;
