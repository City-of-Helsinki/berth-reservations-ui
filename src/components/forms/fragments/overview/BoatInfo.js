// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import './_data.scss';

type Props = {
  name: String,
  registerNumber: String
};

const BoatInfo = ({ name, registerNumber }: Props) => (
  <Row>
    <Col md={registerNumber ? 6 : 12}>
      <FormattedMessage tagName="span" id="page.overview.info.boat_name" />:
      <span className="app-form__data">{name}</span>
    </Col>
    {registerNumber && (
      <Col md={6}>
        <FormattedMessage tagName="span" id="page.overview.info.boat_register_number" />:
        <span className="app-form__data">{registerNumber}</span>
      </Col>
    )}
  </Row>
);

export default BoatInfo;
