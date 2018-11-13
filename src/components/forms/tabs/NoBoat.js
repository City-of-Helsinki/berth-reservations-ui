// @flow
import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import Accessibility from '../fragments/Accessibility';

type Props = {
  prefix: string
};

export default ({ prefix }: Props) => (
  <Container>
    <FormattedMessage tagName="h3" id="form.no_boat.header.title" />
    <UnRegisteredBoatDetails prefix={prefix} />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Accessibility prefix={prefix} />
  </Container>
);
