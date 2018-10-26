// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Text } from '../Fields';

import FullName from './FullName';
import PostalDetails from './PostalDetails';
import ContactDetails from './ContactDetails';

import type { FormFragmentProps } from '../../../types/form';

const PrivatePersonForm = ({ prefix }: FormFragmentProps) => (
  <Fragment fluid>
    <FormattedMessage tagName="h3" id="form.person.person_info" />
    <FullName prefix={prefix} />
    <Row>
      <Col sm={3}>
        <Text
          name={`${prefix}.ssn`}
          label="form.person.field.ssn.label"
          placeholder="form.person.field.ssn.placeholder"
        />
      </Col>
    </Row>
    <PostalDetails prefix={prefix} />
    <ContactDetails prefix={prefix} />
  </Fragment>
);

export default PrivatePersonForm;
