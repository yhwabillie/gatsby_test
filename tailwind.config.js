/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

function pxToRem(px, base = 16) {
  return `${px / base}rem`
}

module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/layouts/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: pxToRem(280),
      xs: pxToRem(416),
      sm: pxToRem(768),
      md: pxToRem(1024),
      lg: pxToRem(1440),
      xl: pxToRem(1903),
    },
    maxWidth: {
      xxs: '100%',
      xs: pxToRem(384),
      sm: pxToRem(712),
      md: pxToRem(948),
      lg: pxToRem(1316),
      xl: pxToRem(1712),
      sidebar: pxToRem(412),
    },
    width: {
      full: '100%',
      38: pxToRem(38),
      'icon-medium': pxToRem(34),
      'icon-large': pxToRem(36),
      'icon-xlarge': pxToRem(48),
      tooltip: pxToRem(100),
      180: pxToRem(180),
      206: pxToRem(206),
      232: pxToRem(232),
      272: pxToRem(272),
      755: pxToRem(755),
      1094: pxToRem(1094),
      1424: pxToRem(1424),
    },
    height: {
      full: '100%',
      auto: 'auto',
      38: pxToRem(38),
      'icon-medium': pxToRem(34),
      'icon-large': pxToRem(36),
      'icon-xlarge': pxToRem(48),
      'header-small': pxToRem(72),
      'header-medium': pxToRem(84),
      'header-large': pxToRem(90),
      'dynamic-layout-small': `calc(100vh - ${pxToRem(72)})`,
      'dynamic-layout-medium': `calc(100vh - ${pxToRem(84)})`,
      'dynamic-layout-large': `calc(100vh - ${pxToRem(90)})`,
      120: pxToRem(120),
      124: pxToRem(124),
      164: pxToRem(164),
      158: pxToRem(158),
      160: pxToRem(160),
      170: pxToRem(170),
      180: pxToRem(180),
      206: pxToRem(206),
      220: pxToRem(220),
      232: pxToRem(232),
      259: pxToRem(259),
      272: pxToRem(272),
      340: pxToRem(340),
      405: pxToRem(405),
      486: pxToRem(486),
      621: pxToRem(621),
      808: pxToRem(808),
    },
    fontSize: {
      'icon-small': '1.625rem',
      'icon-medium': '2.125rem',
      sm: '0.875rem' /* 14 */,
      md: '1rem' /* 16 */,
      lg: '1.125rem' /* 18 */,
      xl: '1.5rem' /* 24 */,
      15: pxToRem(15),
      22: pxToRem(22),
      26: pxToRem(26),
      32: pxToRem(32),
      48: pxToRem(48),
      52: pxToRem(52),
    },
    lineHeight: {
      'header-small': '4.5rem',
      'header-medium': '5.25rem',
      'header-large': '5.625rem',
      lg: '2.25rem' /* 36 */,
      xl: '2.5rem' /* 40 */,
      1.6: 1.6,
      64: pxToRem(64),
    },
    borderRadius: {
      xs: pxToRem(18),
      sm: pxToRem(20),
      md: pxToRem(24),
      lg: pxToRem(36),
    },
    colors: {
      theme: 'var(--theme)',
      'theme-reverse': 'var(--theme-reverse)',
      'theme-gray': 'var(--theme-gray)',
      'theme-active': 'var(--theme-active)',
      'theme-unactive': 'var(--theme-unactive)',
      'theme-hover': 'var(--theme-hover)',
      black: 'var(--black)',
      white: 'var(--white)',
      blue: 'var(--blue)',
      darkGray1: 'var(--gray1)',
      transparent: 'transparent',
    },
    margin: {
      'header-small': '4.5rem',
      'header-medium': '5.25rem',
      'header-large': '5.625rem',
      auto: 'auto',
      0: 0,
      8: pxToRem(8),
      16: pxToRem(16),
      20: pxToRem(20),
      40: pxToRem(40),
    },
    padding: {
      0: 0,
      xs: '0.875rem' /* 14 */,
      sm: '1.5rem' /* 24 */,
      md: '2.25rem' /* 36 */,
      lg: '2.938rem' /* 47.008 */,
      xl: '4.125rem' /* 66 */,
      2: '1.25rem' /* 20 */,
      12: pxToRem(12),
      14: pxToRem(14),
      23: pxToRem(23),
      28: pxToRem(28),
      58: pxToRem(58),
    },
    zIndex: {
      0: 9999,
      1: 1000,
      2: 500,
      3: 0,
      4: -1,
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0,0,0,.45)',
        },
        '.visual-text-bg': {
          background: 'linear-gradient(77deg,rgba(0,0,0,.2),transparent 85%)',
        },

        '.l-b-corner': {
          'background-image': 'var(--theme-corner-left-bottom)',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          zIndex: 1,
        },
      })
    }),
  ],
}
