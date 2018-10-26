// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { get } from 'lodash';
import { injectIntl, FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { Text, Select, Number } from '../Fields';

import RegistrationAdditionalInfo from './RegistrationAdditionalInfo';
import BigShips from './BigShips';

import type { FormFragmentPropsWithIntl } from '../../../types/form';
import { mustBeNumber } from '../../../utils/formValidation';

const GrayBackground = styled.div`
  background: #eee;
  padding: 1em;
`;

const RegisteredBoatForm = ({ prefix, intl, values }: FormFragmentPropsWithIntl) => {
  const needBigBoatInfo = get(values, [prefix, 'type']) === 'bigboat';
  return (
    <Fragment>
      <FormattedMessage tagName="h3" id="page.boat.form.section.boat_info" />
      <Row>
        <Col sm={6}>
          <Text
            name={`${prefix}.register_number`}
            label="page.boat.form.registernumber.label"
            placeholder="page.boat.form.registernumber.placeholder"
            required
          />
        </Col>
        <Col sm={6}>
          <Select name={`${prefix}.type`} label="page.boat.form.type.label" required>
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
            validate={mustBeNumber}
            name={`${prefix}.width`}
            label="page.boat.form.width.label"
            append="m"
            required
          />
        </Col>
        <Col sm={3}>
          <Number
            validate={mustBeNumber}
            name={`${prefix}.length`}
            label="page.boat.form.length.label"
            append="m"
            required
          />
        </Col>
        <Col sm={3}>
          <Number
            validate={mustBeNumber}
            name={`${prefix}.depth`}
            label="page.boat.form.depth.label"
            append="m"
            required
          />
        </Col>
        <Col sm={3}>
          <Number
            validate={mustBeNumber}
            name={`${prefix}.weight`}
            label="page.boat.form.weight.label"
            append="kg"
            required
          />
        </Col>
      </Row>

      {needBigBoatInfo && (
        <GrayBackground>
          <BigShips prefix={`${prefix}.big_ships`} />
        </GrayBackground>
      )}
      <RegistrationAdditionalInfo prefix={prefix} />
    </Fragment>
  );
};

export default injectIntl(RegisteredBoatForm);
