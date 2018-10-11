// @flow
import React, { Fragment, type Node } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../config/theme';

// $SuppressFlowComment
require('open-city-design/src/scss/main.scss');

const GlobalStyles = createGlobalStyle``;

type Props = {
  children: Node
};

export default ({ children }: Props) => (
  <Fragment>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Fragment>
);
