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
        grey: "#968E83",
        cream: "#F3F4ED",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        saans: ['var(--font-saans)'],
        saansMono: ['var(--font-saans-mono)'],
        abc: ['var(--font-abc)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
