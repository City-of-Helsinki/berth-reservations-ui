import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap';

import Accessibility from '../fragments/Accessibility';
import StorageMethod from '../fragments/StorageMethod';
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
    {mode === 'berth' && <Accessibility />}
  </Container>
);
