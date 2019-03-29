/* eslint-disable */
require('./bootstrap.scss');
const extractedTheme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./theme.scss');
/* eslint-enable */

const breakpoint = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const maxWidth = Object.entries(breakpoint).reduce((acc, [size, pixels]) => ({
  ...acc,
  [size]: `${pixels / 16}em`
}));

const theme = {
  ...extractedTheme,
  breakpoint,
  maxWidth,
  colors: {
    helFog: '#9fc8eb',
    blue: '#0072c6',
    light: '#ebedf1'
  }
};

export default theme;
