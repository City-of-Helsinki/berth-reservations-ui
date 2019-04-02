import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import Berth from './Berth';

import { BerthProps } from './types';

const { REACT_APP_MAX_SELECTED_BERTHS } = process.env;

export default ({ filtered, filteredNot, onClick, selected }: BerthProps) => (
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
        disabled={selected.size >= Number(REACT_APP_MAX_SELECTED_BERTHS)}
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
        // TODO: fix this
        // tslint:disable-next-line: jsx-no-lambda
        onClick={() => onClick(berth.identifier)}
        selected={selected.includes(berth.identifier)}
        disabled={selected.size >= Number(REACT_APP_MAX_SELECTED_BERTHS)}
      />
    ))}
  </Container>
);
