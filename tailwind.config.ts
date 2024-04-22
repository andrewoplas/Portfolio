import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        h1: "var(--font-h1)",
        h2: "var(--font-h2)",
        h3: "var(--font-h3)",
        h4: "var(--font-h4)",
        h5: "var(--font-h5)",
        h6: "var(--font-h6)",
        body: "var(--font-body)",
        "body-large": "var(--font-body-large)",
      },
      fontFamily: {
        heading: ["var(--font-family-heading)"],
        body: ["var(--font-family-body)"],
      },
      borderRadius: {
        button: "10px",
        card: "24px",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        "t-primary": "var(--color-text-primary)",
        "t-secondary": "var(--color-text-secondary)",

        textBold: "var(--color-text-bold)",
        appBlue: "var(--color-blue)",
        appLightblue: "var(--color-lightblue)",
        appLightgrey: "var(--color-lightgrey)",
        appMint: "var(--color-mint)",
        appLilac: "var(--color-lilac)",
        appRust: "var(--color-rust)",
        appBabyblue: "var(--color-babyblue)",
        appPink: "var(--color-pink)",
      },
      boxShadow: {
        cards: "0px 50px 100px -20px rgba(0, 0, 0, .15)",
      },
      gridTemplateColumns: {
        "32": "repeat(32, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
      },
      maxWidth: {
        section: "1600px",
      },
    },
  },
  plugins: [],
};
export default config;
