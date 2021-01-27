import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';

import Accessibility from '../fragments/Accessibility';
import BigShips from '../fragments/BigShips';
import BoatInfo from '../fragments/BoatInfo';
import BoatMeasures from '../fragments/BoatMeasures';
import RegisteredBoatDetails from '../fragments/RegisteredBoatDetails';
import { WithBoatType } from '../Selects';

import './tabs.scss';

type Props = {
  showBigShipsForm: boolean;
} & WithBoatType;

const BerthRegisteredBoat = ({ showBigShipsForm, boatTypes }: Props) => {
  const { t } = useTranslation();
  return (
    <Container className="vene-form__styled-container">
      <RegisteredBoatDetails boatTypes={boatTypes} />
      <BoatMeasures showWeight showDraught />
      {showBigShipsForm && (
        <div className="vene-form__big-ships">
          <h3>{t('form.big_ship.header.title')}</h3>
          <p>{t('form.big_ship.text.summary')}</p>
          <h3>{t('form.big_ship.header.details')}</h3>
          <BigShips />
          <p>{t('form.big_ship.text.inspection_and_insurance')}</p>
        </div>
      )}
      <BoatInfo />
      <Accessibility />
    </Container>
  );
};

export default BerthRegisteredBoat;
