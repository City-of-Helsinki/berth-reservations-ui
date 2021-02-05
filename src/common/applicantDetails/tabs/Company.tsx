import React from 'react';
import { useTranslation } from 'react-i18next';

import FormTab from '../../formTab/FormTab';
import CompanyDetails from './fragments/CompanyDetails';
import ContactDetails from './fragments/ContactDetails';
import FullName from './fragments/FullName';
import PostalDetails from './fragments/PostalDetails';

const Company = () => {
  const { t } = useTranslation();
  return (
    <FormTab>
      <h3>{t('form.company.header.title')}</h3>
      <CompanyDetails />
      <PostalDetails />
      <h3>{t('form.company.header.contact_person')}</h3>
      <FullName />
      <ContactDetails />
    </FormTab>
  );
};

export default Company;
