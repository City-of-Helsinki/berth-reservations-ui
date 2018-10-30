// @flow
import React, { type Node } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../config/theme';

type Props = {
  children: Node
};

export default ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
