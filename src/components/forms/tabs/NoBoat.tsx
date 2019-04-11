import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap';
import Accessibility from '../fragments/Accessibility';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import { WithBoatType } from '../Selects';
import './Tabs.scss';

type Props = WithBoatType;

export default ({ boatTypes }: Props) => (
  <Container className="vene-form__styled-container">
    <FormattedMessage tagName="h3" id="form.no_boat.header.title" />
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Accessibility />
  </Container>
);
