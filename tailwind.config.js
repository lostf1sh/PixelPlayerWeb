/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Varela Round"', 'sans-serif'],
      },
      colors: {
        base: 'rgb(var(--ctp-base) / <alpha-value>)',
        mantle: 'rgb(var(--ctp-mantle) / <alpha-value>)',
        crust: 'rgb(var(--ctp-crust) / <alpha-value>)',
        text: 'rgb(var(--ctp-text) / <alpha-value>)',
        subtext0: 'rgb(var(--ctp-subtext0) / <alpha-value>)',
        subtext1: 'rgb(var(--ctp-subtext1) / <alpha-value>)',
        surface0: 'rgb(var(--ctp-surface0) / <alpha-value>)',
        surface1: 'rgb(var(--ctp-surface1) / <alpha-value>)',
        surface2: 'rgb(var(--ctp-surface2) / <alpha-value>)',
        overlay0: 'rgb(var(--ctp-overlay0) / <alpha-value>)',
        overlay1: 'rgb(var(--ctp-overlay1) / <alpha-value>)',
        overlay2: 'rgb(var(--ctp-overlay2) / <alpha-value>)',
        blue: 'rgb(var(--ctp-blue) / <alpha-value>)',
        lavender: 'rgb(var(--ctp-lavender) / <alpha-value>)',
        sapphire: 'rgb(var(--ctp-sapphire) / <alpha-value>)',
        sky: 'rgb(var(--ctp-sky) / <alpha-value>)',
        teal: 'rgb(var(--ctp-teal) / <alpha-value>)',
        green: 'rgb(var(--ctp-green) / <alpha-value>)',
        yellow: 'rgb(var(--ctp-yellow) / <alpha-value>)',
        peach: 'rgb(var(--ctp-peach) / <alpha-value>)',
        maroon: 'rgb(var(--ctp-maroon) / <alpha-value>)',
        red: 'rgb(var(--ctp-red) / <alpha-value>)',
        mauve: 'rgb(var(--ctp-mauve) / <alpha-value>)',
        pink: 'rgb(var(--ctp-pink) / <alpha-value>)',
        flamingo: 'rgb(var(--ctp-flamingo) / <alpha-value>)',
        rosewater: 'rgb(var(--ctp-rosewater) / <alpha-value>)',
        primary: 'rgb(var(--ctp-primary) / <alpha-value>)',
        secondary: 'rgb(var(--ctp-secondary) / <alpha-value>)',
        accent: 'rgb(var(--ctp-accent) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}
