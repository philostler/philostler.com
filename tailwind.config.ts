import type { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";

const config: Config = {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  plugins: [flowbitePlugin],
};
export default config;
