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
      <FormattedMessage tagName="span" id="page.overview.info.boat_name" />:
      <span className="vene-form__data">{name}</span>
    </Col>
    {registerNumber && (
      <Col md={6}>
        <FormattedMessage tagName="span" id="page.overview.info.boat_register_number" />:
        <span className="vene-form__data">{registerNumber}</span>
      </Col>
    )}
  </Row>
);

export default BoatInfo;
