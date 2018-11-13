// @flow
import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import BoatMeasures from '../fragments/BoatMeasures';
import RegisteredBoatDetails from '../fragments/RegisteredBoatDetails';
import BoatInfo from '../fragments/BoatInfo';
import BigShips from '../fragments/BigShips';
import Accessibility from '../fragments/Accessibility';

type Props = {
  prefix: string,
  ShowBigShipsForm: boolean
};

const GrayBackground = styled.div`
  background: #eee;
  padding: 1em;
`;

export default ({ prefix, ShowBigShipsForm }: Props) => (
  <Container>
    <FormattedMessage tagName="h3" id="form.registered.header.title" />
    <RegisteredBoatDetails prefix="boat" />

    <FormattedMessage tagName="h3" id="form.registered.header.measures" />
    <BoatMeasures prefix="boat" />
    {ShowBigShipsForm && (
      <GrayBackground>
        <FormattedMessage tagName="h3" id="form.big_ship.header.title" />
        <FormattedMessage tagName="p" id="form.big_ship.text.summary" />
        <FormattedMessage tagName="h3" id="form.big_ship.header.details" />
        <BigShips prefix="boat.big_ships" />
        <FormattedMessage tagName="p" id="form.big_ship.text.inspection_and_insurance" />
      </GrayBackground>
    )}
    <FormattedMessage tagName="h3" id="form.registered.header.additional_info" />

    <BoatInfo prefix="boat" />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />

    <Accessibility prefix="boat" />
  </Container>
);
