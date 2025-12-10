const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "float-lg": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-26px)" },
        },
      },
      animation: {
        float: "float 1.5s ease-in-out infinite",
        "float-lg": "float-lg 1.5s ease-in-out infinite",
      },
      backgroundImage: {
        "purple-radial":
          "radial-gradient(68.28% 92.86% at 50.28% 92.86%, #26153B 0%, #3A2358 35%, #1E152A 70%, #111111 100%)",
        "black-radial":
          "radial-gradient(68.28% 92.86% at 50.28% 92.86%, #727272 0%, #282828 49.68%, #111111 100%)",
        "gold-gradient":
          "linear-gradient(180deg, #FFF8C9 0%, #EEB730 12.5%, #A97B2A 53%, #B6844F 84%, #F8E19C 100%)",
      },
      colors: {
        blue: {
          DEFAULT: "#3066FF",
          500: "#3066FF",
        },
        yellow: {
          DEFAULT: "#F19937",
          500: "#F19937",
        },
        red: {
          DEFAULT: "#EA4E3D",
          500: "#EA4E3D",
        },
        green: {
          DEFAULT: "#67C23A",
          500: "#67C23A",
        },
        sky: {
          DEFAULT: "#55A6F8",
          500: "#55A6F8",
        },
        slate: {
          DEFAULT: "#64748B",
          500: "#64748B",
        },
        dark: {
          DEFAULT: "#1E293B",
          500: "#0F172A",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
