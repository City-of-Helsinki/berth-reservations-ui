import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';

import ContactDetails from '../fragments/ContactDetails';
import FullName from '../fragments/FullName';
import PostalDetails from '../fragments/PostalDetails';
import './tabs.scss';

const PrivatePerson = () => {
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

export default PrivatePerson;
