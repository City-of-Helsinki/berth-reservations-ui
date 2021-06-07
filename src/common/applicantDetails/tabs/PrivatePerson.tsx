import { useTranslation } from 'react-i18next';

import FormTab from '../../formTab/FormTab';
import ContactDetails from './fragments/ContactDetails';
import FullName from './fragments/FullName';
import PostalDetails from './fragments/PostalDetails';

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
