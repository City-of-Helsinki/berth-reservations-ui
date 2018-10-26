// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { get } from 'lodash';
import { injectIntl, FormattedMessage, type intlShape } from 'react-intl';
import styled from 'styled-components';

import { Text, Select, Number } from '../Fields';

import RegistrationAdditionalInfo from './RegistrationAdditionalInfo';
import BigShips from './BigShips';

type Props = {
  intl: intlShape
};

const GrayBackground = styled.div`
  background: #eee;
  padding: 1em;
`;

const RegisteredBoatForm = ({ prefix, intl, values, initFragment }: Props) => {
  const needBigBoatInfo = get(values, [prefix, 'type']) === 'bigboat';
  return (
    <Container fluid>
      <FormattedMessage tagName="h3" id="page.boat.form.section.boat_info" />
      <Row>
        <Col sm={6}>
          <Text
            id="registerNumber"
            name={`${prefix}.registerNumber`}
            label="page.boat.form.registernumber.label"
            placeholder="page.boat.form.registernumber.placeholder"
            required
          />
        </Col>
        <Col sm={6}>
          <Select id="boatType" name={`${prefix}.type`} label="page.boat.form.type.label" required>
            <option>{intl.messages['page.boat.form.type.placeholder']}</option>
            <option value="bigboat">a</option>
            <option>b</option>
            <option>c</option>
          </Select>
        </Col>
      </Row>
      <FormattedMessage tagName="h3" id="page.boat.form.section.boat_measures" />
      <Row>
        <Col sm={3}>
          <Number
            id="boatWidth"
            name={`${prefix}.width`}
            label="page.boat.form.width.label"
            append="m"
            required
          />
        </Col>
        <Col sm={3}>
          <Number
            id="boatLength"
            name={`${prefix}.length`}
            label="page.boat.form.length.label"
            append="m"
            required
          />
        </Col>
        <Col sm={3}>
          <Number
            id="boatDepth"
            name={`${prefix}.depth`}
            label="page.boat.form.depth.label"
            append="m"
            required
          />
        </Col>
        <Col sm={3}>
          <Number
            id="boatWeight"
            name={`${prefix}.weight`}
            label="page.boat.form.weight.label"
            append="kg"
            required
          />
        </Col>
      </Row>

      {needBigBoatInfo && (
        <GrayBackground>
          <BigShips prefix={`${prefix}.big_ships`} initFragment={initFragment} />
        </GrayBackground>
      )}
      <RegistrationAdditionalInfo prefix={prefix} />
    </Container>
  );
};

export default injectIntl(RegisteredBoatForm);
