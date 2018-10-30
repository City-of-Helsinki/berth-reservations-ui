// @flow

import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import ContactBy from '../fragments/ContactBy';
import Newsletter from '../fragments/Newsletter';
import OverviewInfo from './OverviewInfo';

const Content = styled(Container)``;

type Props = {
  values: {}
};

const Submit = ({ values }: Props) => (
  <Content>
    <OverviewInfo values={values} />
    <FormattedMessage tagName="h3" id="form.overview.header.title" />
    <ContactBy prefix="overview" />
    <FormattedMessage tagName="h5" id="form.overview.header.receivable_items.title" />
    <Newsletter prefix="overview" />
  </Content>
);

export default Submit;
