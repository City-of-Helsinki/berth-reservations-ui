import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';

import CompanyDetails from '../fragments/CompanyDetails';
import ContactDetails from '../fragments/ContactDetails';
import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';

import './Tabs.scss';

export default () => {
  const { t } = useTranslation();
  return (
    <Container className="vene-form__styled-container">
      <h3>{t('form.company.header.title')}</h3>
      <CompanyDetails />
      <PostalDetails />
      <h3>{t('form.company.header.contact_person')}</h3>
      <FullName />
      <ContactDetails />
    </Container>
  );
};
