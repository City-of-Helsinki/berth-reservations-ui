import classNames from 'classnames';
import React from 'react';

import { string } from 'prop-types';
import './availabilityLevel.scss';

export interface Props {
  label?: string | null;
  level: string;
}

const AvailabilityLevel = ({ label, level }: Props) => {
  let color: 'red' | 'green' | 'yellow' | undefined;

  switch (level) {
    case '1':
      color = 'green';
      break;

    case '2':
      color = 'yellow';
      break;

    case '3':
      color = 'red';
      break;

    case '4':
      color = 'red';
      break;

    case '5':
      color = 'green';
      break;

    default:
      break;
  }

  return (
    <span
      className={classNames('vene-availability-level', {
        [`vene-availability-level--${color}`]: color,
      })}
    >
      {label}
    </span>
  );
};

export default AvailabilityLevel;
