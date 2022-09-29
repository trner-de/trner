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
        lightToDark: 'lightToDark 2s ease-in-out',
        darkToLight: 'darkToLight 2s ease-in-out',
      },
      keyframes: (theme) => ({
        lightToDark: {
          '0%': { backgroundColor: theme('colors.gray.50') },
          '100%': { backgroundColor: theme('colors.gray.900') },
        },
        darkToLight: {
          '0%': { backgroundColor: theme('colors.gray.900') },
          '100%': { backgroundColor: theme('colors.gray.50') },
        },
      }),
    },
  },
  plugins: [],
  darkMode: 'class',
};
