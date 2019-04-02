import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import Accessibility from '../fragments/Accessibility';
import BigShips from '../fragments/BigShips';
import BoatInfo from '../fragments/BoatInfo';
import BoatMeasures from '../fragments/BoatMeasures';
import RegisteredBoatDetails from '../fragments/RegisteredBoatDetails';
import { WithBoatType } from '../Selects';
import StyledContainer from '../StyledContainer';

type Props = {
  prefix: string;
  ShowBigShipsForm: boolean;
} & WithBoatType;

export default ({ prefix, ShowBigShipsForm, boatTypes }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.registered.header.title" />
    <RegisteredBoatDetails boatTypes={boatTypes} />

    <FormattedMessage tagName="h3" id="form.registered.header.measures" />
    <BoatMeasures />
    {ShowBigShipsForm && (
      <Fragment>
        <FormattedMessage tagName="h3" id="form.big_ship.header.title" />
        <FormattedMessage tagName="p" id="form.big_ship.text.summary" />
        <FormattedMessage tagName="h3" id="form.big_ship.header.details" />
        <BigShips />
        <FormattedMessage tagName="p" id="form.big_ship.text.inspection_and_insurance" />
      </Fragment>
    )}
    <FormattedMessage tagName="h3" id="form.registered.header.additional_info" />

    <BoatInfo />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />

    <Accessibility />
  </StyledContainer>
);
