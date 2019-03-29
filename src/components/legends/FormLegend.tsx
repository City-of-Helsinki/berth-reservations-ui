import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Legend = styled.div`
  padding-bottom: 2em;
`;

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

type Props = {
  step: number;
};

export default ({ step }: Props) => (
  <Legend>
    <FormattedMessage tagName="h3" id={stepLegends[step].title} />
    <FormattedMessage tagName="p" id={stepLegends[step].legend} />
  </Legend>
);
