// @flow

import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { get } from 'lodash';
import { injectIntl, FormattedMessage } from 'react-intl';

import BoatMeasures from '../fragments/BoatMeasures';
import RegisteredBoatDetails from '../fragments/RegisteredBoatDetails';
import BoatInfo from '../fragments/BoatInfo';
import BigShips from '../fragments/BigShips';

import Accessibility from '../fragments/Accessibility';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';

import SectionSelector from '../SectionSelector';

import { BigBoatTypeValue } from '../Fields';

const Content = styled.div``;

type Props = {
  values: any
};

const GrayBackground = styled.div`
  background: #eee;
  padding: 1em;
`;

const BoatDetails = ({ values, tab }: Props) => {
  const selected = get(values, ['sections', 'boat']);
  const ShowBigBoats = tab === 'registered_big_boat';
  return (
    <Content>
      <SectionSelector
        name="boat"
        selected={selected}
        types={[
          {
            id: 'boat_type.selector.registered_boat',
            label: 'form.boat_type_selector.registered_boat.label',
            value: 'registered_boat',
            iconName: 'registeredBoat'
          },
          {
            id: 'boat_type.selector.unregistered_boat',
            label: 'form.boat_type_selector.unregistered_boat.label',
            value: 'unregistered_boat',
            iconName: 'unregisteredBoat'
          },
          {
            id: 'boat_type.selector.no_boat',
            label: 'form.boat_type_selector.no_boat.label',
            value: 'no_boat',
            iconName: 'noBoat'
          }
        ]}
      />
      {(tab === 'registered_boat' || tab === 'registered_big_boat') && (
        <Container>
          <FormattedMessage tagName="h3" id="form.registered.header.title" />
          <RegisteredBoatDetails prefix="boat" />

          <FormattedMessage tagName="h3" id="form.registered.header.measures" />
          <BoatMeasures prefix="boat" />
          {ShowBigBoats && (
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
      )}
      {tab === 'unregistered_boat' && (
        <Container>
          <FormattedMessage tagName="h3" id="form.unregistered.header.title" />
          <UnRegisteredBoatDetails prefix="boat" />
          <BoatInfo prefix="boat" />
          <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
          <Accessibility prefix="boat" />
        </Container>
      )}
      {tab === 'no_boat' && (
        <Container>
          <FormattedMessage tagName="h3" id="form.no_boat.header.title" />
          <UnRegisteredBoatDetails prefix="boat" />
          <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
          <Accessibility prefix="boat" />
        </Container>
      )}
    </Content>
  );
};

export default injectIntl(BoatDetails);
