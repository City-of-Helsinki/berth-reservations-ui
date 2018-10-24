// @flow

import React from 'react';
import Svg from 'react-svg';
import helsinkiLogo from '../assets/shapes/helsinki-logo.svg';

const icons = {
  helsinkiLogo
};

type Names = $Keys<typeof icons>;

type Props = {
  name: Names,
  color: string,
  width: string
};

const Icon = ({ name, color, width }: Props) => (
  <Svg svgStyle={{ width, height: 'auto', fill: color }} src={icons[name]} />
);

export default Icon;
