// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { Text, MultiCheckbox, MultiRadio } from '../Fields';
import { Propulsion, HullMaterial } from '../Selects';
import type { FormFragmentProps } from '../../../types/form';

const BigShipsFragment = ({ prefix }: FormFragmentProps) => (
  <Fragment>
    <Row>
      <Col sm={6}>
        <Propulsion prefix={prefix} />
      </Col>
      <Col sm={6}>
        <HullMaterial prefix={prefix} />
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <Text
          name={`${prefix}.usage`}
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
              name: `${prefix}.time_period`,
              label: 'form.big_ship.field.time_period.for_now',
              value: 'for_now'
            },
            {
              name: `${prefix}.time_period`,
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
              name={`${prefix}.time_period_from`}
              placeholder="form.big_ship.field.time_period.from.placeholder"
            />
          </Col>
          <Col sm={1}>
            <center>-</center>
          </Col>
          <Col sm={5}>
            <Text
              name={`${prefix}.time_period_to`}
              placeholder="form.big_ship.field.time_period.to.placeholder"
            />
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <MultiCheckbox
          id="multiCheckbox"
          required
          items={[
            {
              name: `${prefix}.inspected`,
              label: 'form.big_ship.field.inspected.label',
              value: 'inspected'
            },
            {
              name: `${prefix}.insurance`,
              label: 'form.big_ship.field.insurance.label',
              value: 'insurance'
            },
            { name: `${prefix}.agreed`, label: 'form.big_ship.field.agreed.label', value: 'agreed' }
          ]}
          label="form.big_ship.header.inspection_and_insurance"
        />
      </Col>
    </Row>
  </Fragment>
);

export default BigShipsFragment;
