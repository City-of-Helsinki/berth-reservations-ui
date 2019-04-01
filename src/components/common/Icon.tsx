import React from 'react';
import Svg from 'react-svg';
import angleDown from './icons/angle-down.svg';
import angleUp from './icons/angle-up.svg';
import arrowRight from './icons/arrow-right.svg';
import business from './icons/business.svg';
import check from './icons/check.svg';
import commenting from './icons/commenting-o.svg';
import exclamationCircle from './icons/exclamation-circle.svg';
import fence from './icons/fence.svg';
import globe from './icons/globe.svg';
import helsinkiLogo from './icons/helsinki-logo.svg';
import individual from './icons/individual.svg';
import noBoat from './icons/noboat.svg';
import pencil from './icons/pencil.svg';
import plug from './icons/plug.svg';
import pole from './icons/pole.svg';
import registeredBoat from './icons/registered.svg';
import streetLight from './icons/street-light.svg';
import times from './icons/times.svg';
import trash from './icons/trash-o.svg';
import unregisteredBoat from './icons/unregistered.svg';
import waterTap from './icons/water-tap.svg';

const icons = {
  helsinkiLogo,
  globe,
  check,
  registeredBoat,
  unregisteredBoat,
  noBoat,
  business,
  individual,
  pole,
  plug,
  pencil,
  waterTap,
  trash,
  fence,
  streetLight,
  angleUp,
  angleDown,
  times,
  commenting,
  arrowRight,
  exclamationCircle
};

export type IconNames = keyof typeof icons;

interface Props {
  name: IconNames;
  color?: string;
  width?: string;
  height?: string;
  className?: string;
}

const Icon = ({
  name,
  color: fill = 'currentColor',
  width = 'auto',
  height = 'auto',
  className,
  ...rest
}: Props) => (
  <Svg className={className} svgStyle={{ width, height, fill }} src={icons[name]} {...rest} />
);

export default Icon;
