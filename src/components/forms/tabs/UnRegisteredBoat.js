// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import BoatInfo from '../fragments/BoatInfo';
import Accessibility from '../fragments/Accessibility';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import type { WithBoatType } from '../Selects';
import StyledContainer from '../StyledContainer';

type Props = {
  prefix: string
} & WithBoatType;

export default ({ prefix, boatTypes }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.unregistered.header.title" />
    <FormattedMessage tagName="p" id="form.unregistered.header.paragraph" />
    <UnRegisteredBoatDetails prefix={prefix} boatTypes={boatTypes} />
    <BoatInfo prefix={prefix} />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Accessibility prefix={prefix} />
  </StyledContainer>
);
