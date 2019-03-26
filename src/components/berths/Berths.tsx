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

const ListHeader = styled.h3`
  margin: 1em 0;
`;

const { REACT_APP_MAX_SELECTED_BERTHS } = process.env;

export default ({ filtered, filteredNot, onClick, selected }) => (
  <Wrapper>
    {filtered.size > 0 && (
      <Row>
        <Col xs={12}>
          <ListHeader>
            <FormattedMessage id="page.berths.list.berth_count" values={{ count: filtered.size }} />
          </ListHeader>
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
          <ListHeader>
            <FormattedMessage id="page.berths.list.header.others" />
          </ListHeader>
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
