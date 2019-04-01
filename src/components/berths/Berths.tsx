import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

import Berth from './Berth';

import { Berths as BerthsType, SelectedBerths } from '../../types/berths';

interface Props {
  filtered: BerthsType;
  filteredNot: BerthsType;
  selected: SelectedBerths;
  onClick: Function;
  TabHeader?: React.FC;
}

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

export default ({ filtered, filteredNot, onClick, selected }: Props) => (
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
        disabled={selected.size >= Number(REACT_APP_MAX_SELECTED_BERTHS)}
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
        disabled={selected.size >= Number(REACT_APP_MAX_SELECTED_BERTHS)}
      />
    ))}
  </Wrapper>
);
