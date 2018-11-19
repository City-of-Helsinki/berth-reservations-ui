// @flow
import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import UnRegisteredBoatDetails from '../fragments/UnRegisteredBoatDetails';
import Accessibility from '../fragments/Accessibility';
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
    <FormattedMessage tagName="h3" id="form.no_boat.header.title" />
    <UnRegisteredBoatDetails prefix={prefix} boatTypes={boatTypes} />
    <FormattedMessage tagName="h3" id="form.registered.header.accessibility" />
    <Accessibility prefix={prefix} />
  </StyledContainer>
);
