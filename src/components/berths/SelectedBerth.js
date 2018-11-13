import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Icon from '../common/Icon';

const StyledRow = styled(Row)`
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`;

const BerthName = styled(Col)`
  background-color: #2d72c0;
  color: #fff;
  font-size: 1.5em;
  padding: 0.3em;
  padding-left: 0.8em;
`;

const BerthOptions = styled(Col)`
  display: flex;
  align-content: center;
`;

const StyledButton = styled.button`
  background-color: none;
  height: 100%;
  margin-left: 1em;
  border: 2px solid ${props => (props.disabled ? 'lightgray' : 'black')};
`;

const SelectedBerth = ({ berth, index, moveUp, moveDown, first, last }) => (
  <Container fluid>
    <StyledRow>
      <BerthName sm={10}>
        <span key={berth.identifier}>
          {index + 1}. {berth.name.fi}
        </span>
      </BerthName>
      <BerthOptions sm={2}>
        <StyledButton type="button" onClick={() => moveUp(berth.identifier)} disabled={first}>
          <Icon name="angleUp" width="30" color={first ? 'lightgray' : 'black'} />
        </StyledButton>
        <StyledButton type="button" onClick={() => moveDown(berth.identifier)} disabled={last}>
          <Icon name="angleDown" width="30" color={last ? 'lightgray' : 'black'} />
        </StyledButton>
      </BerthOptions>
    </StyledRow>
  </Container>
);

export default SelectedBerth;
