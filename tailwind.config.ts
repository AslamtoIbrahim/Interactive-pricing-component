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
        primary: {
          softCyan: "hsl(174, 77%, 80%)", // Full Slider Bar
          strongCyan: "hsl(174, 86%, 45%)", // Slider Background
          lightGrayishRed: "hsl(14, 92%, 95%)", // Discount Background
          lightRed: "hsl(15, 100%, 70%)", // Discount Text
          paleBlue: "hsl(226, 100%, 87%)", // CTA Text
        },
        neutral: {
          white: "hsl(0, 0%, 100%)", // Pricing Component Background
          veryPaleBlue: "hsl(230, 100%, 99%)", // Main Background
          lightGrayishBlue: "hsl(224, 65%, 95%)", // Empty Slider Bar
          toggleBg: "hsl(223, 50%, 87%)", // Toggle Background
          grayishBlue: "hsl(225, 20%, 60%)", // Text
          darkDesaturatedBlue: "hsl(227, 35%, 25%)", // Text & CTA Background
        },
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage :{
        circles: "url('../../public/images/pattern-circles.svg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
