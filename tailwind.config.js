/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#151218",
      },
      backgroundImage: {
        'footerGradient': 'linear-gradient(114deg, #9f6eed, #fc907e, #9f6eed, #fc907e)',
        'boxGradient':'linear-gradient(142deg, #fc907e, #9f6eed)',
        'gradient': 'linear-gradient(157deg, #fc907e, #9f6eed)',
        'image': 'url(https://cdn.prod.website-files.com/639b3e775b326dc…cea3e70/639b3e775b326d7eb5ea3efb_home-hero-bg.svg)',
        'custom-gradient': 'linear-gradient(157deg, #fc907e, #9f6eed)',
      },
      keyframes: {
        scrollDown: {
          '0%': { transform: 'translateY(-10rem)', opacity: 0 },
          '100%': { transform: 'translateY(0rem)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 4s linear infinite',
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideOutLeft: 'slideOutLeft 0.5s ease-in',
        scrollDown: 'scrollDown 0.5s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
