import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/**.{js,jsx,ts,tsx}",
    "./src/components/**/**.{js,jsx,ts,tsx}",
    "./src/styles/**/**.*",
  ],
  theme: {
  },
  plugins: [],
}
export default config
