import React from 'react';
import { useTranslation } from 'react-i18next';

import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import './contactInfo.scss';

export interface ContactInfoProps {
  name: string;
  address: string;
  postalCode: string;
  municipality: string;
  phoneNumber: string;
  emailAddress: string;
  customerGroup: string;
  language: string;
}

const ContactInfo = ({
  name,
  address,
  postalCode,
  municipality,
  phoneNumber,
  emailAddress,
  customerGroup,
  language,
}: ContactInfoProps) => {
  const { t } = useTranslation();

  return (
    <div className="vene-contact-info">
      <h1>{t('page.profile.contact.heading', { name })}</h1>
      <div className="vene-contact-info__section">
        <LabelValuePair label={t('page.profile.contact.address')} value={address} />
        <LabelValuePair label={t('page.profile.contact.postal_code')} value={postalCode} />
        <LabelValuePair label={t('page.profile.contact.municipality')} value={municipality} />
      </div>
      <div className="vene-contact-info__section">
        <LabelValuePair label={t('page.profile.contact.phone_number')} value={phoneNumber} />
        <LabelValuePair label={t('page.profile.contact.email_address')} value={emailAddress} />
      </div>
      <div className="vene-contact-info__section">
        <LabelValuePair label={t('page.profile.contact.customer_group')} value={customerGroup} />
        <LabelValuePair label={t('page.profile.contact.language')} value={language} />
      </div>
    </div>
  );
};

export default ContactInfo;
