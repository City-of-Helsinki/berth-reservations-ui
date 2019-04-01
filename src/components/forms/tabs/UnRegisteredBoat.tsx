import React from 'react';
import { FormattedMessage } from 'react-intl';

import Accessibility from '../fragments/Accessibility';
import BoatInfo from '../fragments/BoatInfo';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import { WithBoatType } from '../Selects';
import StyledContainer from '../StyledContainer';

type Props = {
  prefix: string;
} & WithBoatType;

export default ({ prefix, boatTypes }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.unregistered.header.title" />
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    <BoatInfo />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Accessibility />
  </StyledContainer>
);
