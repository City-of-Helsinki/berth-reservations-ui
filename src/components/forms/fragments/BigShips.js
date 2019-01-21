// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { Text, MultiRadio, Checkbox } from '../Fields';
import { Propulsion, HullMaterial } from '../Selects';

const InsuraneAndAgreementHeader = styled.h3`
  margin-top: 0;
`;

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
          name={`boat_intended_use`}
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
              name: `renting_period`,
              label: 'form.big_ship.field.time_period.for_now',
              value: 'for_now'
            },
            {
              name: `renting_period`,
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
              name={`rent_from`}
              placeholder="form.big_ship.field.time_period.from.placeholder"
            />
          </Col>
          <Col sm={1}>
            <center>-</center>
          </Col>
          <Col sm={5}>
            <Text name={`rent_till`} placeholder="form.big_ship.field.time_period.to.placeholder" />
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <InsuraneAndAgreementHeader>
          <FormattedMessage id="form.big_ship.header.inspection_and_insurance" />
        </InsuraneAndAgreementHeader>

        <Checkbox
          required
          name="boat_is_inspected"
          label="form.big_ship.field.inspected.label"
          value="inspected"
        />
        <Checkbox
          required
          name="boat_is_insured"
          label="form.big_ship.field.insurance.label"
          value="insurance"
        />
        <Checkbox
          required
          name="agree_to_terms"
          label="form.big_ship.field.agreed.label"
          value="agreed"
        />
      </Col>
    </Row>
  </Fragment>
);

export default BigShipsFragment;
