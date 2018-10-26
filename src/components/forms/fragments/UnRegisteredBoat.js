// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';

import { Text, Number } from '../Fields';

import RegistrationAdditionalInfo from './RegistrationAdditionalInfo';
import { mustBeNumber } from '../../../utils/formValidation';

type Props = {
  prefix: string
};

const UnRegisteredBoatForm = ({ prefix }: Props) => (
  <Fragment>
    <FormattedMessage tagName="h3" id="form.unregistered.header.title" />
    <Row>
      <Col sm={6}>
        <Text
          name={`${prefix}.type`}
          label="form.unregistered.type.label"
          placeholder="form.unregistered.type.placeholder"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          validate={mustBeNumber}
          name={`${prefix}.width`}
          label="form.unregistered.width.label"
          append="m"
          required
        />
      </Col>
      <Col sm={3}>
        <Number
          validate={mustBeNumber}
          name={`${prefix}.length`}
          label="form.unregistered.lenght.label"
          append="m"
          required
        />
      </Col>
    </Row>
    <RegistrationAdditionalInfo prefix={prefix} />
  </Fragment>
);

export default injectIntl(UnRegisteredBoatForm);
