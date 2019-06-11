import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';
import { stringToFloat } from '../../../../utils/berths';
import './Form.scss';

interface Props {
  width: string;
  length: string;
}

const BoatMeasures = ({ width, length }: Props) => (
  <Row>
    <Col md={6}>
      <div className="vene-overview-info__boat-info">
        <FormattedMessage tagName="span" id="page.overview.info.boat_width" />
        <span>:</span>
        <span className="vene-form__data">{stringToFloat(width)}m</span>
      </div>
    </Col>
    <Col md={6}>
      <div className="vene-overview-info__boat-info">
        <FormattedMessage tagName="span" id="page.overview.info.boat_length" />
        <span>:</span>
        <span className="vene-form__data">{stringToFloat(length)}m</span>
      </div>
    </Col>
  </Row>
);

export default BoatMeasures;
