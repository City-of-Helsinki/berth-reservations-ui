// @flow

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import { Text } from '../Fields';

import FullName from './FullName';
import PostalDetails from './PostalDetails';
import ContactDetails from './ContactDetails';

import type { FormFragmentProps } from '../../../types/form';

const PrivatePersonForm = ({ prefix }: FormFragmentProps) => (
  <Container fluid>
    <FormattedMessage tagName="h3" id="form.private_person.header.title" />
    <FullName prefix={prefix} />
    <PostalDetails prefix={prefix} />
    <ContactDetails prefix={prefix} />
  </Container>
);

export default PrivatePersonForm;
