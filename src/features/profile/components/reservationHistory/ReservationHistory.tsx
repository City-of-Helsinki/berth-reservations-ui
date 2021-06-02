import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatDate } from '../../../../common/utils/format';
import './reservationHistory.scss';

export interface ReservationHistoryProps {
  label: string;
  reservations: Array<{
    startDate: string;
    endDate: string;
    area: string;
    place: string;
  }>;
}

const ReservationHistory = ({ label, reservations }: ReservationHistoryProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const reservationComponents = reservations.map(({ startDate, endDate, area, place }, i) => {
    return (
      <li key={i}>{`${formatDate(startDate, language)} - ${formatDate(endDate, language)} - ${area}, ${t(
        'common.place'
      )} ${place}`}</li>
    );
  });

  return (
    <div className="vene-reservation-history">
      <h3 className="vene-reservation-history__heading">{label}</h3>
      <ul className="vene-reservation-history__list">{reservationComponents}</ul>
    </div>
  );
};

export default ReservationHistory;
