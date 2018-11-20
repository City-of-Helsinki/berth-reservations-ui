// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import BoatMeasures from '../fragments/BoatMeasures';
import RegisteredBoatDetails from '../fragments/RegisteredBoatDetails';
import BoatInfo from '../fragments/BoatInfo';
import BigShips from '../fragments/BigShips';
import Accessibility from '../fragments/Accessibility';
import type { WithBoatType } from '../Selects';
import StyledContainer from '../StyledContainer';

type Props = {
  prefix: string,
  ShowBigShipsForm: boolean
} & WithBoatType;

const GrayBackground = styled.div`
  background: #eee;
  padding: 1em;
`;

export default ({ prefix, ShowBigShipsForm, boatTypes }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.registered.header.title" />
    <RegisteredBoatDetails prefix={prefix} boatTypes={boatTypes} />

    <FormattedMessage tagName="h3" id="form.registered.header.measures" />
    <BoatMeasures prefix={prefix} />
    {ShowBigShipsForm && (
      <GrayBackground>
        <FormattedMessage tagName="h3" id="form.big_ship.header.title" />
        <FormattedMessage tagName="p" id="form.big_ship.text.summary" />
        <FormattedMessage tagName="h3" id="form.big_ship.header.details" />
        <BigShips prefix={`${prefix}.big_ships`} />
        <FormattedMessage tagName="p" id="form.big_ship.text.inspection_and_insurance" />
      </GrayBackground>
    )}
    <FormattedMessage tagName="h3" id="form.registered.header.additional_info" />

    <BoatInfo prefix={prefix} />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />

    <Accessibility prefix={prefix} />
  </StyledContainer>
);
