import React from 'react';
import { FormattedMessage } from 'react-intl';
import './formLegend.scss';

const stepLegends = [
  {
    title: 'legend.boat.title',
    legend: 'legend.boat.legend'
  },
  {
    title: 'legend.person.title',
    legend: 'legend.person.legend'
  },
  {
    title: 'legend.overview.title',
    legend: 'legend.overview.legend'
  }
];

interface Props {
  step: number;
}

export default ({ step }: Props) => (
  <div className="vene-form-legend">
    <FormattedMessage tagName="h3" id={stepLegends[step].title} />
    <FormattedMessage tagName="p" id={stepLegends[step].legend} />
  </div>
);
