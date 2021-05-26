import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatDate } from '../../../../common/utils/format';
import './berthHistory.scss';

export interface BerthHistoryProps {
  reservations: Array<{
    startDate: string;
    endDate: string;
    harbor: string;
    berth: string;
  }>;
}

const BerthHistory = ({ reservations }: BerthHistoryProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const reservationComponents = reservations.map(({ startDate, endDate, harbor, berth }, i) => {
    return (
      <li key={i}>{`${formatDate(startDate, language)} - ${formatDate(endDate, language)} - ${harbor}, ${t(
        'page.profile.berths.history.berth'
      )} ${berth}`}</li>
    );
  });

  return (
    <div className="vene-berth-history">
      <h3 className="vene-berth-history__heading">{t('page.profile.berths.history.label')}</h3>
      <ul className="vene-berth-history__list">{reservationComponents}</ul>
    </div>
  );
};

export default BerthHistory;
