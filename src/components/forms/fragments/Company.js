// @flow

import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Text } from '../Fields';

import FullName from './FullName';
import PostalDetails from './PostalDetails';
import ContactDetails from './ContactDetails';

import type { FormFragmentProps } from '../../../types/form';

const CompanyForm = ({ prefix }: FormFragmentProps) => (
  <Fragment>
    <FormattedMessage tagName="h3" id="form.company.header.title" />
    <Row>
      <Col sm={5}>
        <Text
          name={`${prefix}.name`}
          label="form.company.field.name.label"
          placeholder="form.company.field.name.placeholder"
        />
      </Col>
    </Row>
    <Row>
      <Col sm={5}>
        <Text
          name={`${prefix}.businessId`}
          label="form.company.field.business_id.label"
          placeholder="form.company.field.business_id.placeholder"
        />
      </Col>
    </Row>
    <PostalDetails prefix={prefix} />
    <FormattedMessage tagName="h3" id="form.company.header.contact_person" />
    <FullName prefix={prefix} />
    <ContactDetails prefix={prefix} />
  </Fragment>
);

export default CompanyForm;
