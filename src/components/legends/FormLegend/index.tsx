import React from 'react';
import { FormattedMessage } from 'react-intl';

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
  <div className="app-FormLegend">
    <FormattedMessage tagName="h3" id={stepLegends[step].title} />
    <FormattedMessage tagName="p" id={stepLegends[step].legend} />
  </div>
);
