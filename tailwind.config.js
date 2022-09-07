/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 35px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      rotate: {
        '360': '360deg',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1.1)' },
        },
        microzoom: {
          '0%, 100%': { transform: 'scale(1.05)' },
        },
        alternate: {
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-75px)' },
        },
        load1: {
          '0%': {width: '0%'},
          '100%': {width: '95%'},
        },
        load2: {
          '0%': {width: '0%'},
          '100%': {width: '90%'},
        },
        load3: {
          '0%': {width: '0%'},
          '100%': {width: '85%'},
        },
        load4: {
          '0%': {width: '0%'},
          '100%': {width: '80%'},
        },
        load5: {
          '0%': {width: '0%'},
          '100%': {width: '75%'},
        },
        load6: {
          '0%': {width: '0%'},
          '100%': {width: '70%'},
        },
      },
      animation: {
        zoom: 'zoom 1.5s ease-in-out infinite',
        microzoom: 'microzoom 1.5s ease-in-out infinite',
        alternate: 'alternate 2s ease-in-out infinite alternate',
        barOneAnimation: 'load1 3s normal forwards',
        barTwoAnimation: 'load2 3.3s normal forwards',
        barThreeAnimation: 'load3 3.6s normal forwards',
        barFourAnimation: 'load4 4s normal forwards',
        barFiveAnimation: 'load5 4.3s normal forwards',
        barSixAnimation: 'load6 4.6s normal forwards',
        barSevenAnimation: 'load6 5s normal forwards',
      }
    },
    backgroundImage: {
      'profile': "url('../src/assets/profile.jpg')",
      'profile2': "url('../src/assets/profile2.jpg')",
      'background': "url('../src/assets/background.jpg')",
    },
    screens: {
      'xsm':'350px',
      'sm':'500px',
      'xmd':'625px',
      'md':'750px',
      'xlg':'875px',
      'lg':'1000px',
      'xl':'1125px',
      '2xl':'1250px',
      '3xl':'1325px',
      '4xl':'1450px',
      '5xl':'1575px',
      '6xl':'1700px',
      '7xl':'1825px',
      '8xl':'1950px',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
