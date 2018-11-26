import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Icon from '../common/Icon';
import responsive from '../../utils/responsive';

const StyledRow = styled(Row)`
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`;

const BerthName = styled(Col)`
  background-color: #2d72c0;
  color: #fff;
  font-size: 1em;
  padding: 0.3em;
  padding-left: 0.8em;
  ${responsive.sm`
    font-size: 1.5em;
  `}
`;

const BerthOptions = styled(Col)`
  display: flex;
  align-content: center;
`;

const StyledButton = styled.button`
  background: none;
  height: 100%;
  margin-left: 1em;
  border: 2px solid ${props => (props.disabled ? 'lightgray' : 'black')};
`;
const DeselectButton = styled.button`
  background: none;
  height: 100%;
  margin-left: 1em;
  border: none;
  float: right;
  color: white;
`;

const SelectedBerth = ({ berth, index, moveUp, moveDown, first, last, deselectBerth }) => (
  <Container fluid>
    <StyledRow>
      <BerthName xs={8} md={10}>
        <DeselectButton type="button" onClick={() => deselectBerth(berth.identifier)}>
          <Icon name="times" width="30px" />
        </DeselectButton>
        <span key={berth.identifier}>
          {index + 1}. {berth.name.fi}
        </span>
      </BerthName>
      <BerthOptions xs={4} md={2}>
        <Row>
          <Col xs={12} sm={6}>
            <StyledButton type="button" onClick={() => moveUp(berth.identifier)} disabled={first}>
              <Icon name="angleUp" width="30px" color={first ? 'lightgray' : 'black'} />
            </StyledButton>
          </Col>
          <Col xs={12} sm={6}>
            <StyledButton type="button" onClick={() => moveDown(berth.identifier)} disabled={last}>
              <Icon name="angleDown" width="30px" color={last ? 'lightgray' : 'black'} />
            </StyledButton>
          </Col>
        </Row>
      </BerthOptions>
    </StyledRow>
  </Container>
);

export default SelectedBerth;
