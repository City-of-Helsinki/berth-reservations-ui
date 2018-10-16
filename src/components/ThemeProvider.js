// @flow
import React, { Fragment, type Node } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../config/theme';

// $SuppressFlowComment
require('open-city-design/src/scss/main.scss');

/* eslint-disable */
// eslint-disable-next-line $SuppressFlowComment
const extractedTheme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./themeProvider.scss');
/* eslint-enable */

const GlobalStyles = createGlobalStyle``;

type Props = {
  children: Node
};

export default ({ children }: Props) => (
  <Fragment>
    <GlobalStyles />
    <ThemeProvider theme={{ ...extractedTheme, ...theme }}>{children}</ThemeProvider>
  </Fragment>
);
