// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';

const Steps = styled.div`
  background-color: #52a4ca;
  padding-top: 4em;
`;

const StepContainer = styled(Container)`
  width: 600px;
  margin-bottom: 50px;
`;

const LegendContainer = styled(Container)`
  width: 80%;
  padding-bottom: 50px;
`;

const StepIcon = styled(Col)`
  text-align: center;
  margin-bottom: 10px;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 2px solid #000;
  background-color: #efefef;
  border-radius: 50%;
  padding-top: 8px;
  font-size: 20px;
  margin-bottom: 10px;

  &.active {
    background-color: #0072c6;
  }
`;

type Props = {
  children: Node
};

export default ({ children }: Props) => (
  <Steps>
    <StepContainer>
      <Row>
        <StepIcon sm="3">
          <div>
            <Circle>&#10003;</Circle>
          </div>
          <div>Satamat</div>
        </StepIcon>
        <StepIcon sm="3">
          <div>
            <Circle className="active">&nbsp;</Circle>
          </div>
          <div>Veneen tiedot</div>
        </StepIcon>
        <StepIcon sm="3">
          <div>
            <Circle>&nbsp;</Circle>
          </div>
          <div>Hakija</div>
        </StepIcon>
        <StepIcon sm="3">
          <div>
            <Circle>&nbsp;</Circle>
          </div>
          <div>Lähetä hakemus</div>
        </StepIcon>
      </Row>
    </StepContainer>
    <LegendContainer>
      <Row>
        <Col md="12">{children}</Col>
      </Row>
    </LegendContainer>
  </Steps>
);
