/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green_primary: '#45EC9C',
        green_light: '#63DCA4',
        pink_primary: '#e71575',
      },
      boxShadow: {
        spread: '0 0 10px -1px rgba(0, 0, 0, 0.2)',
        small: '0 1px 5px 0px rgba(0, 0, 0, .1)',
        pop: '0 3px 30px -5px rgb(0, 0, 0, .3)',
      },
      maxHeight: {
        popover: 'calc(100vh - 120px)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1064px',
      xl: '1240px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        lg: '20px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1064px',
        xl: '1240px',
      },
    },
  },
  plugins: [],
};
