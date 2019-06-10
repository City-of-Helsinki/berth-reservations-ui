import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';
import './Form.scss';

interface Props {
  name: string;
  registerNumber: string;
}

const BoatInfo = ({ name, registerNumber }: Props) => (
  <Row>
    <Col md={registerNumber ? 6 : 12}>
      <div className="vene-overview-info__boat-info">
        <FormattedMessage tagName="span" id="page.overview.info.boat_name" />
        <span>:</span>
        <span className="vene-form__data">{name}</span>
      </div>
    </Col>
    {registerNumber && (
      <Col md={6}>
        <div className="vene-overview-info__boat-info">
          <FormattedMessage tagName="span" id="page.overview.info.boat_register_number" />
          <span>:</span>
          <span className="vene-form__data">{registerNumber}</span>
        </div>
      </Col>
    )}
  </Row>
);

export default BoatInfo;
