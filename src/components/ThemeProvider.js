import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'open-city-design/src/scss/main.scss';
import theme from '../config/theme';

const GlobalStyles = createGlobalStyle``;

export default ({ children }) => (
  <Fragment>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Fragment>
);
