// @flow

import React from 'react';
import Svg from 'react-svg';
import helsinkiLogo from './icons/helsinki-logo.svg';
import globe from './icons/globe.svg';
import check from './icons/check.svg';
import registeredBoat from './icons/registered.svg';
import unregisteredBoat from './icons/unregistered.svg';
import noBoat from './icons/noboat.svg';
import business from './icons/business.svg';
import individual from './icons/individual.svg';

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
