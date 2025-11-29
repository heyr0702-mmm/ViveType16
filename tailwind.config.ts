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
                background: "var(--background)",
                foreground: "var(--foreground)",
                paper: "#f4f4f0",
                ink: "#2b2b2b",
                "neon-yellow": "#ccff00",
                "neon-pink": "#ff00cc",
                "neon-blue": "#00ccff",
            },
            fontFamily: {
                handwriting: ["var(--font-handwriting)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
