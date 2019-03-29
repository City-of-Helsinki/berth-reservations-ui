import React from 'react';
import { FormattedMessage } from 'react-intl';

import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import Accessibility from '../fragments/Accessibility';
import { WithBoatType } from '../Selects';
import StyledContainer from '../StyledContainer';

type Props = WithBoatType;

export default ({ boatTypes }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.no_boat.header.title" />
    <UnRegisteredBoatDetails boatTypes={boatTypes} />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Accessibility />
  </StyledContainer>
);
