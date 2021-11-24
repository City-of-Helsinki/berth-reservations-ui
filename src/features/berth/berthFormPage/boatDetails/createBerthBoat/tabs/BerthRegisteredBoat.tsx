import { useTranslation } from 'react-i18next';

import FormTab from '../../../../../../common/formTab/FormTab';
import Accessibility from './fragments/Accessibility';
import BigShips from './fragments/BigShips';
import BoatInfoFragment from '../../../../../../common/boatInfoFragment/BoatInfoFragment';
import BoatMeasures from '../../../../../../common/boatMeasuresFragment/BoatMeasuresFragment';
import RegisteredBoatDetails from '../../../../../../common/registeredBoatDetails/RegisteredBoatDetails';
import { WithBoatType } from '../../../../../../common/selects/Selects';

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
      <BoatInfoFragment />
      <Accessibility />
    </FormTab>
  );
};

export default BerthRegisteredBoat;
