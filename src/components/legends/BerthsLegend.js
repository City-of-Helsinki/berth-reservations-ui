// @flow
import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import UnRegisteredBoatDetails from '../forms/fragments/UnRegisteredBoatDetails';
import Services from '../forms/fragments/Services';
import type { WithBoatType } from '../forms/Selects';

const Legend = styled.div`
  background-color: ${props => props.theme.colors.helFog};
  padding-top: 3em;
`;

const LegendContainer = styled(Container)`
  width: 80%;
  padding-bottom: 3em;
`;

type Props = WithBoatType;

export default ({ boatTypes }: Props) => (
  <Legend>
    <LegendContainer>
      <Row>
        <Col md="12">
          <FormattedMessage tagName="h3" id="legend.berths.title" />
          <FormattedMessage tagName="p" id="legend.berths.legend" />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <UnRegisteredBoatDetails prefix="boat" noValidate boatTypes={boatTypes} />
          <Services prefix="services" noValidate />
        </Col>
      </Row>
    </LegendContainer>
  </Legend>
);
