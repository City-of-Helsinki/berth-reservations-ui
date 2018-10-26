// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { injectIntl, FormattedMessage, type intlShape } from 'react-intl';

import { Text, Select, MultiCheckbox, MultiRadio } from '../Fields';

type Props = {
  prefix: string,
  intl: intlShape
};

const BigShipsForm = ({ prefix, intl }: Props) => (
  <Fragment>
    <FormattedMessage tagName="h3" id="form.big_ship.header.title" />
    <FormattedMessage tagName="p" id="form.big_ship.summary" />
    <FormattedMessage tagName="h3" id="form.big_ship.header.details" />

    <Row>
      <Col sm={6}>
        <Select name={`${prefix}.propulsion`} label="form.big_ship.propulsion.label" required>
          <option>{intl.messages['form.big_ship.propulsion.placeholder']}</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </Select>
      </Col>
      <Col sm={6}>
        <Select name={`${prefix}.hull_material`} label="form.big_ship.hull_material.label" required>
          <option>{intl.messages['form.big_ship.hull_material.placeholder']}</option>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </Select>
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <Text
          name={`${prefix}.usage`}
          label="form.big_ship.usage.label"
          placeholder="form.big_ship.usage.placeholder"
          required
        />
        <FormattedMessage tagName="p" id="form.big_ship.usage.info" />
      </Col>
    </Row>
    <Row>
      <Col sm={3}>
        <MultiRadio
          items={[
            {
              name: `${prefix}.time_period`,
              label: 'form.big_ship.time_period.for_now',
              value: 'for_now'
            },
            {
              name: `${prefix}.time_period`,
              label: 'form.big_ship.time_period.fixed',
              value: 'fixed'
            }
          ]}
          label="form.big_ship.time_period.label"
        />
      </Col>
      <Col sm={6}>
        <Row>
          <Col sm={5}>
            <Text
              name={`${prefix}.time_period_from`}
              placeholder="form.big_ship.time_period.from.placeholder"
            />
          </Col>
          <Col sm={1}>
            <center>-</center>
          </Col>
          <Col sm={5}>
            <Text
              name={`${prefix}.time_period_to`}
              placeholder="form.big_ship.time_period.to.placeholder"
            />
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <MultiCheckbox
          id="multiCheckbox"
          name="MultiCheckbox"
          items={[
            {
              name: `${prefix}.inspected`,
              label: 'form.big_ship.inspected.label',
              value: 'inspected'
            },
            {
              name: `${prefix}.insurance`,
              label: 'form.big_ship.insurance.label',
              value: 'insurance'
            },
            { name: `${prefix}.agreed`, label: 'form.big_ship.agreed.label', value: 'agreed' }
          ]}
          label="form.big_ship.header.inspection_and_insurance"
        />
        <FormattedMessage tagName="p" id="form.big_ship.inspection_and_insurance" />
      </Col>
    </Row>
  </Fragment>
);

export default injectIntl(BigShipsForm);
