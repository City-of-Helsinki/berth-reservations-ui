import React from 'react';
import { useTranslation } from 'react-i18next';

import FormTab from '../../formTab/FormTab';
import CompanyDetails from '../../../components/forms/fragments/CompanyDetails';
import ContactDetails from '../../../components/forms/fragments/ContactDetails';
import FullName from '../../../components/forms/fragments/FullName';
import PostalDetails from '../../../components/forms/fragments/PostalDetails';

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
