import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import Berth from './Berth';
import './_berths.scss';

const { REACT_APP_MAX_SELECTED_BERTHS } = process.env;

export default ({ filtered, filteredNot, onClick, selected }) => (
  <Container className="app-berths">
    {filtered.size > 0 && (
      <Row>
        <Col xs={12}>
          <h3>
            <FormattedMessage id="page.berths.list.berth_count" values={{ count: filtered.size }} />
          </h3>
        </Col>
      </Row>
    )}
    {filtered.map(berth => (
      <Berth
        className={berth.excluded ? 'app-berth__excluded' : ''}
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
          <h3>
            <FormattedMessage id="page.berths.list.header.others" />
          </h3>
        </Col>
      </Row>
    )}
    {filteredNot.map(berth => (
      <Berth
        className={berth.excluded ? 'app-berth__excluded' : ''}
        key={berth.identifier}
        berth={berth}
        onClick={() => onClick(berth.identifier)}
        selected={selected.includes(berth.identifier)}
        disabled={selected.size >= REACT_APP_MAX_SELECTED_BERTHS}
      />
    ))}
  </Container>
);
