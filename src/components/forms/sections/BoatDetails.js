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
  values: Object,
  tab: string
};

const GrayBackground = styled.div`
  background: #eee;
  padding: 1em;
`;

const BoatDetails = ({ values, tab }: Props) => {
  const ShowBigShipsForm = get(values, 'boat.type') === BigBoatTypeValue;
  return (
    <Content>
      <SectionSelector
        name="boat"
        selected={tab}
        types={[
          {
            label: 'form.boat_type_selector.registered_boat.label',
            tab: 'registered_boat',
            icon: 'registeredBoat'
          },
          {
            label: 'form.boat_type_selector.unregistered_boat.label',
            tab: 'unregistered_boat',
            icon: 'unregisteredBoat'
          },
          {
            label: 'form.boat_type_selector.no_boat.label',
            tab: 'no_boat',
            icon: 'noBoat'
          }
        ]}
      />
      {tab === 'registered_boat' && (
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
