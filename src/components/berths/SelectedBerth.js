import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Icon from '../common/Icon';

const StyledRow = styled(Row)`
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`;

const BerthName = styled(Col)`
  display: flex;
  align-content: center;
  background-color: #2d72c0;
  color: #fff;
  font-size: 1.5em;
  padding: 0.3em;
  padding-left: 0.8em;
`;

const StyledButton = styled.button`
  background-color: none;
  height: 100%;
  margin-left: 1em;
`;

const SelectedBerth = ({ berth, index, moveUp, moveDown, first, last }) => {
  const upIconColor = first ? 'lightgray' : 'black';
  const downIconColor = last ? 'lightgray' : 'black';

  const StyledButtonUp = styled(StyledButton)`
    border: 2px solid ${upIconColor};
  `;

  const StyledButtonDown = styled(StyledButton)`
    border: 2px solid ${downIconColor};
  `;

  return (
    <Container fluid>
      <StyledRow>
        <BerthName sm={10}>
          <span key={berth.identifier}>
            {index + 1}. {berth.name.fi}
          </span>
        </BerthName>
        <Col sm={1}>
          <StyledButtonUp type="button" onClick={() => moveUp(berth.identifier)} disabled={first}>
            <Icon name="angleUp" width="30" color={upIconColor} />
          </StyledButtonUp>
        </Col>
        <Col sm={1}>
          <StyledButtonDown
            type="button"
            onClick={() => moveDown(berth.identifier)}
            disabled={last}
          >
            <Icon name="angleDown" width="30" color={downIconColor} />
          </StyledButtonDown>
        </Col>
      </StyledRow>
    </Container>
  );
};

export default SelectedBerth;
