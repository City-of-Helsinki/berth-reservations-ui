// @flow

import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import ContactBy from '../fragments/ContactBy';
import Newsletter from '../fragments/Newsletter';
import OverviewInfo from './OverviewInfo';
import type { Berths } from '../../../types/berths';
import { type WithBoatType } from '../Selects';

const StyledContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

type Props = {
  values: {},
  selectedBerths: Berths,
  tabs: Array<string>
} & WithBoatType;

const Submit = ({ values, selectedBerths, tabs, boatTypes }: Props) => (
  <StyledContainer>
    <OverviewInfo
      selectedBerths={selectedBerths}
      tabs={tabs}
      values={values}
      boatTypes={boatTypes}
    />
    <FormattedMessage tagName="h3" id="form.overview.header.title" />
    <ContactBy prefix="overview" />
    <FormattedMessage tagName="h5" id="form.overview.header.receivable_items.title" />
    <Newsletter prefix="overview" />
  </StyledContainer>
);

export default Submit;
