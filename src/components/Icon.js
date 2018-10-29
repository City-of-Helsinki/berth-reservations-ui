// @flow

import React from 'react';
import Svg from 'react-svg';
import helsinkiLogo from '../assets/shapes/helsinki-logo.svg';
import globe from '../assets/shapes/globe.svg';
import check from '../assets/shapes/check.svg';
import registeredBoat from '../assets/shapes/registered.svg';
import unregisteredBoat from '../assets/shapes/unregistered.svg';
import noBoat from '../assets/shapes/noboat.svg';
import business from '../assets/shapes/business.svg';
import individual from '../assets/shapes/individual.svg';

const icons = {
  helsinkiLogo,
  globe,
  check,
  registeredBoat,
  unregisteredBoat,
  noBoat,
  business,
  individual
};

type Names = $Keys<typeof icons>;

type Props = {
  name: Names,
  color: string,
  width: string,
  className?: string
};

const Icon = ({ name, color, width, className }: Props) => (
  <Svg className={className} svgStyle={{ width, height: 'auto', fill: color }} src={icons[name]} />
);

export default Icon;
