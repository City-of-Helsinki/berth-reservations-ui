// @flow

import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Overview from '../fragments/Overview';
import OverviewInfo from './OverviewInfo';

const Content = styled(Container)``;

type Props = {
  values: {}
};

const Submit = ({ values }: Props) => (
  <Content>
    <OverviewInfo values={values} />
    <Overview prefix="overview" />
  </Content>
);

export default Submit;
