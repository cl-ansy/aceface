import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/game/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#daf5f0",
        main: "#c4a1ff",
        mainAccent: "#9e66ff", // not needed for shadcn
      },
      borderRadius: {
        base: "4px",
      },
      boxShadow: {
        base: "2px 2px 0px 0px rgba(0,0,0,1)",
      },
      translate: {
        boxShadowX: "2px",
        boxShadowY: "2px",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
    },
  },
  plugins: [],
};

export default config;
