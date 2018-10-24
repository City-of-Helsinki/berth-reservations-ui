// @flow

import React from 'react';
import Svg from 'react-svg';
import * as icons from '../assets/shapes';

type Props = {
  name: string,
  color: string,
  width: number
};

const Icon = ({ name, color, width }: Props) => {
  return <Svg svgStyle={{ width, height: 'auto', fill: color }} src={icons[name]} />;
};

export default Icon;
