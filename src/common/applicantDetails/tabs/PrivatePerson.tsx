import React from 'react';
import { useTranslation } from 'react-i18next';

import FormTab from '../../formTab/FormTab';
import ContactDetails from '../../../components/forms/fragments/ContactDetails';
import FullName from '../../../components/forms/fragments/FullName';
import PostalDetails from '../../../components/forms/fragments/PostalDetails';

const PrivatePerson = () => {
  const { t } = useTranslation();
  return (
    <FormTab>
      <h3>{t('form.private_person.header.title')}</h3>
      <FullName />
      <PostalDetails />
      <ContactDetails />
    </FormTab>
  );
};

export default PrivatePerson;
