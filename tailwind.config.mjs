/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        accent: '#22d3ee',
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body':          theme('colors.slate[400]'),
            '--tw-prose-headings':      theme('colors.slate[100]'),
            '--tw-prose-lead':          theme('colors.slate[400]'),
            '--tw-prose-links':         theme('colors.cyan[400]'),
            '--tw-prose-bold':          theme('colors.slate[200]'),
            '--tw-prose-counters':      theme('colors.slate[500]'),
            '--tw-prose-bullets':       theme('colors.slate[600]'),
            '--tw-prose-hr':            theme('colors.slate[800]'),
            '--tw-prose-quotes':        theme('colors.slate[300]'),
            '--tw-prose-quote-borders': theme('colors.cyan[400]'),
            '--tw-prose-captions':      theme('colors.slate[500]'),
            '--tw-prose-code':          theme('colors.cyan[300]'),
            '--tw-prose-pre-code':      theme('colors.slate[200]'),
            '--tw-prose-pre-bg':        theme('colors.slate[900]'),
            '--tw-prose-th-borders':    theme('colors.slate[700]'),
            '--tw-prose-td-borders':    theme('colors.slate[800]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
