import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap';

import { FORM_MODE } from '../../../constants/formConstants';
import Accessibility from '../fragments/Accessibility';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import { WithBoatType } from '../Selects';
import { FormMode } from '../types';

import './Tabs.scss';

type Props = {
  mode: FormMode;
} & WithBoatType;

export default ({ boatTypes, mode }: Props) => (
  <Container className="vene-form__styled-container">
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    {mode === FORM_MODE.BERTH && <Accessibility />}
  </Container>
);
