/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxxs: '280px',
      xxs: '375px',
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      blue: '#0064FF',
      gray: '#202632',
      transparent: 'transparent',
      red: '#ef4444',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
    },
    zIndex: {
      1: 1000,
      2: 500,
      3: 0,
      4: -1,
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
    },
    extend: {
      boxShadow: {
        highlight: 'inset 0 -8px 0 #3572EF',
      },
      height: {
        header: '75px',
      },
      margin: {
        header: '75px',
      },
      backgroundImage: {
        'logo-black': "url('/logo/logo_black.png')",
        'logo-white': "url('/logo/logo_white.png')",
        'edge-round-1': "url('/header_edge_left_round.svg')",
        'edge-round-2': "url('/header_edge_right_round.svg')",
        'edge-round-3': "url('/header_edge_right_round_light.svg')",
        'edge-round-4': "url('/header_edge_left_round_light.svg')",
        'contact-mask-dark': "url('/contact_mask.svg')",
        'contact-mask-light': "url('/contact_mask_light.svg')",
      },
      fontFamily: {
        display: 'Pretendard', // Adds a new `font-display` class
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
    },
  },
  plugins: [],
}
