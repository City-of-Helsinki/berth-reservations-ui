// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import Accessibility from '../fragments/Accessibility';
import type { WithBoatType } from '../Selects';
import StyledContainer from '../StyledContainer';

type Props = {
  prefix: string
} & WithBoatType;

export default ({ prefix, boatTypes }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.no_boat.header.title" />
    <FormattedMessage tagName="p" id="form.no_boat.header.paragraph" />
    <UnRegisteredBoatDetails prefix={prefix} boatTypes={boatTypes} />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Accessibility prefix={prefix} />
  </StyledContainer>
);
