import React from 'react';
import './formLegend.scss';
import { useTranslation } from 'react-i18next';

const stepLegends = [
  {
    title: 'legend.boat.title',
    legend: 'legend.boat.legend',
  },
  {
    title: 'legend.person.title',
    legend: 'legend.person.legend',
  },
  {
    title: 'legend.overview.title',
    legend: 'legend.overview.legend',
  },
];

interface Props {
  step: number;
}

export default ({ step }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="vene-form-legend">
      <h3>{t(stepLegends[step].title)}</h3>
      <p>{t(stepLegends[step].legend)}</p>
    </div>
  );
};
