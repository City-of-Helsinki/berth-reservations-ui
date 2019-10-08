import React from 'react';
import { Col, Row } from 'reactstrap';

import { FormattedHTMLMessage } from 'react-intl';
import { Checkbox } from '../Fields';

interface Props {
  label: string;
}

const Agreement = ({ label }: Props) => (
  <Row>
    <Col sm={6}>
      <Checkbox
        name={`informationAccuracyConfirmed`}
        label={<FormattedHTMLMessage id={label} />}
        required
      />
    </Col>
  </Row>
);

export default Agreement;
