import classNames from 'classnames';
import React from 'react';
import { ReactComponent as angleDown } from './icons/angle-down.svg';
import { ReactComponent as angleUp } from './icons/angle-up.svg';
import { ReactComponent as arrowRight } from './icons/arrow-right.svg';
import { ReactComponent as business } from './icons/business.svg';
import { ReactComponent as check } from './icons/check.svg';
import { ReactComponent as commenting } from './icons/commenting-o.svg';
import { ReactComponent as exclamationCircle } from './icons/exclamation-circle.svg';
import { ReactComponent as fence } from './icons/fence.svg';
import { ReactComponent as globe } from './icons/globe.svg';
import { ReactComponent as helsinkiLogo } from './icons/helsinki-logo.svg';
import { ReactComponent as individual } from './icons/individual.svg';
import { ReactComponent as noBoat } from './icons/noboat.svg';
import { ReactComponent as pencil } from './icons/pencil.svg';
import { ReactComponent as plug } from './icons/plug.svg';
import { ReactComponent as pole } from './icons/pole.svg';
import { ReactComponent as registeredBoat } from './icons/registered.svg';
import { ReactComponent as streetLight } from './icons/street-light.svg';
import { ReactComponent as times } from './icons/times.svg';
import { ReactComponent as trash } from './icons/trash-o.svg';
import { ReactComponent as unregisteredBoat } from './icons/unregistered.svg';
import { ReactComponent as waterTap } from './icons/water-tap.svg';

import './Icon.scss';

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

export interface IconProps {
  name: IconNames;
  className?: string;
}

const Icon = ({ name, className, ...rest }: IconProps) => {
  const SvgIcon = icons[name];

  return <SvgIcon className={classNames('vene-icon', className)} {...rest} />;
};

export default Icon;
