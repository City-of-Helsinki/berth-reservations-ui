import React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Row } from 'reactstrap';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';

import './bigShipsInfo.scss';

type Props = {
  propulsion?: string | null;
  hullMaterial?: string | null;
  intendedUse?: string | null;
  rentingPeriod?: string | null;
  rentFrom?: string | null;
  rentTill?: string | null;
} & InjectedIntlProps;

const BigShipsInfo = ({
  propulsion,
  hullMaterial,
  intendedUse,
  rentingPeriod,
  rentFrom,
  rentTill,
  intl: { formatMessage }
}: Props) => {
  let rentingPeriodLabel;

  switch (rentingPeriod) {
    case 'for_now':
      rentingPeriodLabel = formatMessage({ id: 'form.big_ship.field.time_period.for_now' });
      break;
    case 'fixed':
      rentingPeriodLabel = formatMessage({ id: 'form.big_ship.field.time_period.fixed' });
      break;
    default:
      rentingPeriodLabel = null;
      break;
  }

  const rentingPeriodWDates = `${rentingPeriodLabel} ${rentFrom ? rentFrom : ''}-${
    rentTill ? rentTill : ''
  }`;

  return (
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
          <LabelValuePair
            label="form.big_ship.field.time_period.label"
            value={rentingPeriodWDates}
          />
        </Col>
      </Row>
    </>
  );
};

export default injectIntl(BigShipsInfo);
