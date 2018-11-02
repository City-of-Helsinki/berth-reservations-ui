// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { injectIntl } from 'react-intl';

import { Text, Select, MultiCheckbox, MultiRadio } from '../Fields';
import type { FormFragmentPropsWithIntl } from '../../../types/form';

const BigShipsFragment = ({
  prefix,
  noValidate = false,
  intl: { formatMessage }
}: FormFragmentPropsWithIntl) => (
  <Fragment>
    <Row>
      <Col sm={6}>
        <Select
          noValidate={noValidate}
          name={`${prefix}.propulsion`}
          label="form.big_ship.field.propulsion.label"
          required
        >
          <option>{formatMessage({ id: 'form.big_ship.field.propulsion.placeholder' })}</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </Select>
      </Col>
      <Col sm={6}>
        <Select
          noValidate={noValidate}
          name={`${prefix}.hull_material`}
          label="form.big_ship.field.hull_material.label"
          required
        >
          <option>{formatMessage({ id: 'form.big_ship.field.hull_material.placeholder' })}</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </Select>
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <Text
          noValidate={noValidate}
          name={`${prefix}.usage`}
          label="form.big_ship.field.usage.label"
          placeholder="form.big_ship.field.usage.placeholder"
          required
          text="form.big_ship.field.usage.info"
        />
      </Col>
    </Row>
    <Row>
      <Col sm={3}>
        <MultiRadio
          noValidate={noValidate}
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
              noValidate={noValidate}
              name={`${prefix}.time_period_from`}
              placeholder="form.big_ship.field.time_period.from.placeholder"
            />
          </Col>
          <Col sm={1}>
            <center>-</center>
          </Col>
          <Col sm={5}>
            <Text
              noValidate={noValidate}
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
          noValidate={noValidate}
          id="multiCheckbox"
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

export default injectIntl(BigShipsFragment);
