// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';

const Legend = styled.div`
  background-color: ${props => props.theme.colors.helFog};
  padding-top: 3em;
`;

const LegendContainer = styled(Container)`
  width: 80%;
  padding-bottom: 3em;
`;

type Props = {
  children: Node
};

export default ({ children }: Props) => (
  <Legend>
    <LegendContainer>
      <Row>
        <Col md="12">{children}</Col>
      </Row>
    </LegendContainer>
  </Legend>
);
