import type { Config } from "tailwindcss";
import flowbiteReactTailwind from "flowbite-react/tailwind";

const config: Config = {
  content: [
    flowbiteReactTailwind.content(),
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  plugins: [flowbiteReactTailwind.plugin()],
};
export default config;
