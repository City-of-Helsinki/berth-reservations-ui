import React from 'react';
import { useTranslation } from 'react-i18next';

import FormTab from '../../../../../common/formTab/FormTab';
import Accessibility from '../../../../../components/forms/fragments/Accessibility';
import BigShips from '../../../../../components/forms/fragments/BigShips';
import BoatInfo from '../../../../../components/forms/fragments/BoatInfo';
import BoatMeasures from '../../../../../components/forms/fragments/BoatMeasures';
import RegisteredBoatDetails from '../../../../../components/forms/fragments/RegisteredBoatDetails';
import { WithBoatType } from '../../../../../components/forms/Selects';

type Props = {
  showBigShipsForm: boolean;
} & WithBoatType;

const BerthRegisteredBoat = ({ showBigShipsForm, boatTypes }: Props) => {
  const { t } = useTranslation();
  return (
    <FormTab>
      <RegisteredBoatDetails boatTypes={boatTypes} />
      <BoatMeasures showWeight showDraught />
      {showBigShipsForm && (
        <div>
          <h3>{t('form.big_ship.header.title')}</h3>
          <p>{t('form.big_ship.text.summary')}</p>
          <h3>{t('form.big_ship.header.details')}</h3>
          <BigShips />
          <p>{t('form.big_ship.text.inspection_and_insurance')}</p>
        </div>
      )}
      <BoatInfo />
      <Accessibility />
    </FormTab>
  );
};

export default BerthRegisteredBoat;
