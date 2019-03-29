import { css, CSSObject } from 'styled-components';
import theme from '../config/theme';

const { breakpoint }: { [prop: string]: number } = theme;

export default Object.entries(breakpoint).reduce<{ [prop: string]: Function }>(
  (acc, [size, pixels]) => ({
    ...acc,
    [size]: (first: CSSObject, ...args: CSSObject[]) => css`
      @media (min-width: ${pixels / 16}em) {
        ${css(first, ...args)};
      }
    `
  }),
  {}
);
