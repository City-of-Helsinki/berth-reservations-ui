// @flow
import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import BoatInfo from '../fragments/BoatInfo';

import Accessibility from '../fragments/Accessibility';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';

type Props = {
  prefix: string
};

export default ({ prefix }: Props) => (
  <Container>
    <FormattedMessage tagName="h3" id="form.unregistered.header.title" />
    <UnRegisteredBoatDetails prefix="boat" />
    <BoatInfo prefix="boat" />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Accessibility prefix="boat" />
  </Container>
);
