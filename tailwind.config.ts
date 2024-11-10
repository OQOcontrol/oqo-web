import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      '4xl': ['36px', {
        lineHeight: '40px',
        letterSpacing: '-0.01em',
        fontWeight: '350',
      }],
    },
    extend: {
      colors: {
        grey: "#968E83",
        cream: "#F3F4ED",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
