
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        
        
        cream: 'rgb(var(--cream-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        'ink-muted': 'rgb(var(--ink-muted-rgb) / <alpha-value>)',
        'ink-faint': 'rgb(var(--ink-faint-rgb) / <alpha-value>)',
        terra: 'rgb(var(--terra-rgb) / <alpha-value>)',
        'terra-light': 'rgb(var(--terra-rgb) / 0.08)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2-rgb) / <alpha-value>)',
        border: 'rgb(var(--terra-rgb) / 0.14)',
      },
      fontFamily: {
        serif: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}
