import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Berth from './Berth';

const StyledBerth = styled(Berth)``;

const Wrapper = styled(Container)`
  ${StyledBerth} + ${StyledBerth} {
    margin-top: 1em;
  }
`;

const StyledCol = styled(Col)`
  padding: 0em;
`;

const BerthCount = styled.div`
  width: 100%;
  margin-bottom: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  font-weight: 500;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export default ({ berths, onClick, selected }) => (
  <Wrapper>
    <Row>
      <StyledCol xs={12}>
        <BerthCount>{berths.size} hakuehdot täyttävää satamaa</BerthCount>
      </StyledCol>
    </Row>
    {berths.map(berth => (
      <StyledBerth
        key={berth.identifier}
        berth={berth}
        onClick={() => onClick(berth.identifier)}
        selected={selected.includes(berth.identifier)}
      />
    ))}
  </Wrapper>
);
