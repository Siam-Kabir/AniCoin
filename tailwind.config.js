/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D1B2A',
          light: '#1B263B',
        },
        secondary: '#415A77',
        accent: '#778DA9',
        light: '#E0E1DD',
        anime: {
          purple: '#9D4EDD',
          pink: '#FF48B0',
          red: '#FF3366',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        anime: ['"Zen Tokyo Zoo"', 'cursive'],
        jp: ['"Noto Sans JP"', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        gradient: 'gradient 15s ease infinite',
        'cherry-fall': 'cherry-fall 10s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(157, 78, 221, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(157, 78, 221, 0.6)' },
        },
        'cherry-fall': {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(100%) rotate(360deg)', opacity: 0 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};