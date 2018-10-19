import { css } from 'styled-components';
import theme from '../config/theme';

const { breakpoint } = theme;

export default Object.entries(breakpoint).reduce(
  (acc, [size, pixels]) => ({
    ...acc,
    [size]: (...args) => css`
      @media (min-width: ${pixels / 16}em) {
        ${css(...args)};
      }
    `
  }),
  {}
);
