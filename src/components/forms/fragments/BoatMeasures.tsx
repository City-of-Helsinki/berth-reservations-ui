import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

import { Number } from '../Fields';

import { mustBePositiveNumber } from '../../../utils/formValidation';

interface Props {
  showDraught?: boolean;
  showWeight?: boolean;
}

const RegisteredBoatFragment = ({ showDraught, showWeight }: Props) => (
  <>
    <FormattedMessage tagName="h3" id="form.registered.header.measures" />
    <Row>
      <Col sm={3}>
        <Number
          validate={mustBePositiveNumber}
          name={`boatWidth`}
          label="form.registered.field.width.label"
          placeholder="form.registered.field.width.placeholder"
          append="m"
          min="0"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          validate={mustBePositiveNumber}
          name={`boatLength`}
          label="form.registered.field.length.label"
          placeholder="form.registered.field.length.placeholder"
          append="m"
          min="0"
          required
        />
      </Col>
      {showDraught && (
        <Col sm={3}>
          <Number
            validate={mustBePositiveNumber}
            name={`boatDraught`}
            label="form.registered.field.draught.label"
            placeholder="form.registered.field.draught.placeholder"
            append="m"
            min="0"
            required
          />
        </Col>
      )}
      {showWeight && (
        <Col sm={3}>
          <Number
            validate={mustBePositiveNumber}
            name={`boatWeight`}
            step={100}
            label="form.registered.field.weight.label"
            placeholder="form.registered.field.weight.placeholder"
            append="kg"
            min="0"
            required
          />
        </Col>
      )}
    </Row>
  </>
);

export default RegisteredBoatFragment;
