import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Berth from './Berth';

const StyledBerth = styled(Berth)``;

const Wrapper = styled(Container)`
  ${StyledBerth} + ${StyledBerth} {
    margin-top: 1em;
  }
`;

export default ({ berths, onClick, selected }) => (
  <Wrapper>
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
