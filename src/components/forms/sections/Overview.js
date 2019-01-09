// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row, Container } from 'reactstrap';
import Agreement from '../fragments/Agreement';
import ContactBy from '../fragments/ContactBy';
import Newsletter from '../fragments/Newsletter';
import OverviewInfo from './OverviewInfo';
import type { Berths } from '../../../types/berths';
import { type WithBoatType } from '../Selects';
import StyledContainer from '../StyledContainer';

type Props = {
  values: {},
  selectedBerths: Berths,
  tabs: Array<string>
} & WithBoatType;

const Submit = ({ values, selectedBerths, tabs, boatTypes }: Props) => (
  <Container>
    <Row>
      <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
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
          <FormattedMessage tagName="h3" id="form.overview.header.agreement.title" />
          <Agreement prefix="overview" />
        </StyledContainer>
      </Col>
    </Row>
  </Container>
);

export default Submit;
