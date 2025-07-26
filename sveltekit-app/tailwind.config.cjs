const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // include all default Tailwind colors:
        ...colors,

        // your custom tokens mapping to CSS custom-properties:
        border: 'var(--color-border)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          foreground: 'var(--color-surface-foreground)',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        muted: 'var(--color-muted)',
        ring: 'var(--color-ring)',
        input: 'var(--color-input)',
      },
      spacing: {
        ...defaultTheme.spacing,
      },
      fontWeight: {
        ...defaultTheme.fontWeight,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.border-border': {
          'border-width': '1px',
          'border-color': theme('colors.border'),
        },
      });
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
