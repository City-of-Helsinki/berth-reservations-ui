// @flow
import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const Legend = styled.div`
  background-color: ${props => props.theme.colors.helFog};
`;

const LegendContainer = styled(Container)`
  width: 80%;
  padding-bottom: 3em;
`;

const stepLegends = [
  {
    title: 'legend.berths.title',
    legend: 'legend.berths.legend'
  },
  {
    title: 'legend.person.title',
    legend: 'legend.person.legend'
  },
  {
    title: 'legend.overview.title',
    legend: 'legend.overview.legend'
  }
];

type Props = {
  step: number
};

export default ({ step }: Props) => (
  <Legend>
    <LegendContainer>
      <Row>
        <Col md="12">
          <FormattedMessage tagName="h3" id={stepLegends[step].title} />
          <FormattedMessage tagName="p" id={stepLegends[step].legend} />
        </Col>
      </Row>
    </LegendContainer>
  </Legend>
);
