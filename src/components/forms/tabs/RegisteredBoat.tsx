import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap';
import { FORM_MODE } from '../../../constants/formConstants';
import Accessibility from '../fragments/Accessibility';
import BigShips from '../fragments/BigShips';
import BoatInfo from '../fragments/BoatInfo';
import BoatMeasures from '../fragments/BoatMeasures';
import RegisteredBoatDetails from '../fragments/RegisteredBoatDetails';
import { WithBoatType } from '../Selects';
import { FormMode } from '../types';

import './Tabs.scss';

type Props = {
  ShowBigShipsForm: boolean;
  mode: FormMode;
} & WithBoatType;

const RegisteredBoat = ({ mode, ShowBigShipsForm, boatTypes }: Props) => (
  <Container className="vene-form__styled-container">
    <RegisteredBoatDetails boatTypes={boatTypes} />
    <BoatMeasures showWeight={mode === FORM_MODE.BERTH} showDraught={mode === FORM_MODE.BERTH} />
    {ShowBigShipsForm && (
      <div className="vene-form__big-ships">
        <FormattedMessage tagName="h3" id="form.big_ship.header.title" />
        <FormattedMessage tagName="p" id="form.big_ship.text.summary" />
        <FormattedMessage tagName="h3" id="form.big_ship.header.details" />
        <BigShips />
        <FormattedMessage tagName="p" id="form.big_ship.text.inspection_and_insurance" />
      </div>
    )}
    <BoatInfo />

    {mode === FORM_MODE.BERTH && <Accessibility />}
  </Container>
);

export default RegisteredBoat;
