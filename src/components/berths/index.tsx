import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import { isBerthSelected } from '../../utils/berths';
import Berth from './Berth';

import { BerthProps } from './types';

const { REACT_APP_MAX_SELECTED_BERTHS } = process.env;
import './Berths.scss';

export default ({ filtered, filteredNot, onClick, selected }: BerthProps) => (
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
        key={berth.identifier}
        berth={berth}
        onClick={() => onClick(berth)}
        selected={isBerthSelected(selected, berth)}
        disabled={selected.size >= Number(REACT_APP_MAX_SELECTED_BERTHS)}
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
        key={berth.identifier}
        berth={berth}
        onClick={() => onClick(berth)}
        selected={isBerthSelected(selected, berth)}
        disabled={selected.size >= Number(REACT_APP_MAX_SELECTED_BERTHS)}
      />
    ))}
  </Container>
);
