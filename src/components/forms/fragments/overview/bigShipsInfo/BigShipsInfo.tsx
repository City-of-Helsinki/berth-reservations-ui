import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';

import './bigShipsInfo.scss';

interface Props {
  propulsion?: string | null;
  hullMaterial?: string | null;
  intendedUse?: string | null;
  rentingPeriod?: string | null;
}

const BigShipsInfo = ({ propulsion, hullMaterial, intendedUse, rentingPeriod }: Props) => (
  <>
    <Row>
      <Col className="vene-big-ships-info__header">
        <FormattedMessage tagName="strong" id="form.big_ship.header.details" />
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <LabelValuePair label="form.big_ship.field.propulsion.label" value={propulsion} />
      </Col>
      <Col md="6">
        <LabelValuePair label="form.big_ship.field.hull_material.label" value={hullMaterial} />
      </Col>
    </Row>
    <Row>
      <Col>
        <LabelValuePair label="form.big_ship.field.usage.label" value={intendedUse} />
      </Col>
    </Row>
    <Row>
      <Col>
        <LabelValuePair label="form.big_ship.field.time_period.label" value={rentingPeriod} />
      </Col>
    </Row>
  </>
);

export default BigShipsInfo;
