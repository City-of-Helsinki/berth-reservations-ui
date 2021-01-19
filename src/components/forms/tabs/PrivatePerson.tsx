import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';

import ContactDetails from '../fragments/ContactDetails';
import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import './Tabs.scss';

export default () => {
  const { t } = useTranslation();
  return (
    <Container className="vene-form__styled-container">
      <h3>{t('form.private_person.header.title')}</h3>
      <FullName />
      <PostalDetails />
      <ContactDetails />
    </Container>
  );
};
