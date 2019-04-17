import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

import { Checkbox, MultiRadio, Text } from '../Fields';
import { HullMaterial, Propulsion } from '../Selects';

const BigShipsFragment = () => (
  <Fragment>
    <Row>
      <Col sm={6}>
        <Propulsion />
      </Col>
      <Col sm={6}>
        <HullMaterial />
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <Text
          name={`boatIntendedUse`}
          label="form.big_ship.field.usage.label"
          placeholder="form.big_ship.field.usage.placeholder"
          required
        />
      </Col>
    </Row>
    <Row>
      <Col sm={3}>
        <MultiRadio
          items={[
            {
              name: `rentingPeriod`,
              label: 'form.big_ship.field.time_period.for_now',
              value: 'for_now'
            },
            {
              name: `rentingPeriod`,
              label: 'form.big_ship.field.time_period.fixed',
              value: 'fixed'
            }
          ]}
          required
          label="form.big_ship.field.time_period.label"
        />
      </Col>
      <Col sm={6}>
        <Row>
          <Col sm={5}>
            <Text
              name={`rentFrom`}
              placeholder="form.big_ship.field.time_period.from.placeholder"
            />
          </Col>
          <Col sm={1}>-</Col>
          <Col sm={5}>
            <Text name={`rentTill`} placeholder="form.big_ship.field.time_period.to.placeholder" />
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 className=".vene-form__big-ship">
          <FormattedMessage id="form.big_ship.header.inspection_and_insurance" />
        </h3>

        <Checkbox
          required
          name="boatIsInspected"
          label="form.big_ship.field.inspected.label"
          value="inspected"
        />
        <Checkbox
          required
          name="boatIsInsured"
          label="form.big_ship.field.insurance.label"
          value="insurance"
        />
        <Checkbox
          required
          name="agreeToTerms"
          label="form.big_ship.field.agreed.label"
          value="agreed"
        />
      </Col>
    </Row>
  </Fragment>
);

export default BigShipsFragment;
