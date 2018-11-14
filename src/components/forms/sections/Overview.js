// @flow

import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import ContactBy from '../fragments/ContactBy';
import Newsletter from '../fragments/Newsletter';
import OverviewInfo from './OverviewInfo';
import type { Berths } from '../../../types/berths';

const Content = styled(Container)``;

type Props = {
  values: {},
  selectedBerths: Berths,
  tabs: Array<string>
};

const Submit = ({ values, selectedBerths, tabs }: Props) => (
  <Content>
    <OverviewInfo selectedBerths={selectedBerths} tabs={tabs} values={values} />
    <FormattedMessage tagName="h3" id="form.overview.header.title" />
    <ContactBy prefix="overview" />
    <FormattedMessage tagName="h5" id="form.overview.header.receivable_items.title" />
    <Newsletter prefix="overview" />
  </Content>
);

export default Submit;
