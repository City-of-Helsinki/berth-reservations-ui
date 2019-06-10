import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import { isBerthSelected } from '../../utils/berths';
import Berth from './Berth/Berth';

import { BerthProps } from './types';

import './Berths.scss';

export default ({ filtered, filteredNot, onClick, selected, berthLimit }: BerthProps) => (
  <Container className="vene-berths">
    {filtered.size > 0 && (
      <Row>
        <Col xs={12}>
          <FormattedMessage
            tagName="h3"
            id="page.berths.list.berth_count"
            values={{ count: filtered.size }}
          />
        </Col>
      </Row>
    )}
    {filtered.map(berth => (
      <Berth
        key={berth.id}
        berth={berth}
        onClick={() => onClick(berth)}
        selected={isBerthSelected(selected, berth)}
        disabled={selected.size >= berthLimit}
      />
    ))}
    {filteredNot.size > 0 && (
      <Row>
        <Col xs={12}>
          <FormattedMessage tagName="h3" id="page.berths.list.header.others" />
        </Col>
      </Row>
    )}
    {filteredNot.map(berth => (
      <Berth
        className="vene-berth__excluded"
        excluded={true}
        key={berth.id}
        berth={berth}
        onClick={() => onClick(berth)}
        selected={isBerthSelected(selected, berth)}
        disabled={selected.size >= berthLimit}
      />
    ))}
  </Container>
);
