// @flow
import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import BoatInfo from '../fragments/BoatInfo';
import Accessibility from '../fragments/Accessibility';
import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import type { WithBoatType } from '../Selects';

type Props = {
  prefix: string
} & WithBoatType;

const StyledContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default ({ prefix, boatTypes }: Props) => (
  <StyledContainer>
    <FormattedMessage tagName="h3" id="form.unregistered.header.title" />
    <UnRegisteredBoatDetails prefix={prefix} boatTypes={boatTypes} />
    <BoatInfo prefix={prefix} />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Accessibility prefix={prefix} />
  </StyledContainer>
);
