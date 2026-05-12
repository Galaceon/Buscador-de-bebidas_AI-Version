import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 1s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '50%': {
            opacity: '0.5',
          },
        },
      },
    },
  },
} satisfies Config
