import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import Berth from './Berth';

const StyledBerth = styled(Berth)`
  opacity: ${props => (props.excluded ? '0.5' : '1')};
`;

const Wrapper = styled(Container)`
  ${StyledBerth} + ${StyledBerth} {
    margin-top: 1em;
  }
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

const { REACT_APP_MAX_SELECTED_BERTHS } = process.env;

export default ({ filtered, filteredNot, onClick, selected }) => (
  <Wrapper>
    <Row>
      <Col xs={12}>
        <BerthCount>
          <FormattedMessage id="page.berths.list.berth_count" values={{ count: filtered.size }} />
        </BerthCount>
      </Col>
    </Row>
    {filtered.size > 0 && (
      <Row>
        <Col xs={12}>
          <FormattedMessage tagName="h2" id="page.berths.list.header.hits" />
        </Col>
      </Row>
    )}
    {filtered.map(berth => (
      <StyledBerth
        key={berth.identifier}
        berth={berth}
        onClick={() => onClick(berth.identifier)}
        selected={selected.includes(berth.identifier)}
        disabled={selected.size >= REACT_APP_MAX_SELECTED_BERTHS}
      />
    ))}
    {filteredNot.size > 0 && (
      <Row>
        <Col xs={12}>
          <FormattedMessage tagName="h2" id="page.berths.list.header.others" />
        </Col>
      </Row>
    )}
    {filteredNot.map(berth => (
      <StyledBerth
        excluded
        key={berth.identifier}
        berth={berth}
        onClick={() => onClick(berth.identifier)}
        selected={selected.includes(berth.identifier)}
        disabled={selected.size >= REACT_APP_MAX_SELECTED_BERTHS}
      />
    ))}
  </Wrapper>
);
