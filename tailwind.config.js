module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        screens:{
          'lg': '1440px',
          'xl':'1745px',
          '4xl':'1650px'
        }
      },
    },
    variants: {
      extend: {
        visibility: ['hover', 'focus'],
      },
    },
    plugins: [],
  }
  