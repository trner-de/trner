const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeOut 1s ease-in-out',
        fadeOut: 'fadeIn 1s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.blue.400') },
        },
        fadeIn: {
          '0%': { backgroundColor: theme('colors.blue.400') },
          '100%': { backgroundColor: theme('colors.red.300') },
        },
      }),
    },
  },
  plugins: [],
  darkMode: 'class',
};
