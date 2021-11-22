import { Button, TextInput, Select } from 'hds-react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { Language } from '../../../__generated__/globalTypes';
import { MUNICIPALITIES, PRIORITIZED_MUNICIPALITIES } from '../../../common/utils/constants';
import validator, { mustBePresent } from '../../../common/utils/formValidation';
import { ContactInfo } from '../types';
import './editContactInfo.scss';

export interface EditContactInfoProps {
  initialValues?: ContactInfo;
  handleCancel(): void;
  handleSave(values: ContactInfo): void;
}

const FormField = ({ id, label }: { id: string; label: string }) => {
  const { t } = useTranslation();

  return (
    <div className="vene-edit-contact-info__field">
      <Field name={id} required validate={validator(mustBePresent)}>
        {({ input, meta }) => <TextInput {...input} errorText={t(meta.error)} required id={id} label={label} />}
      </Field>
    </div>
  );
};

const EditContactInfo = ({ initialValues, handleCancel, handleSave }: EditContactInfoProps) => {
  const { t, i18n } = useTranslation();

  const mapMunicipalityOption = (municipality: { id: string; translations: Record<string, string> }) => {
    const translated = municipality.translations[i18n.language] ?? municipality.translations.fi;
    return {
      value: municipality.translations.fi,
      label: translated,
    };
  };

  const municipalityOptions = [
    ...PRIORITIZED_MUNICIPALITIES.map(mapMunicipalityOption),
    ...MUNICIPALITIES.map(mapMunicipalityOption),
  ];
  const languageOptions = Object.keys(Language).map((language) => ({
    value: language,
    label: t(`common.language.${language}`),
  }));

  return (
    <Form
      onSubmit={handleSave}
      initialValues={initialValues}
      render={({ invalid, handleSubmit }) => (
        <div className="vene-edit-contact-info">
          <h1>{t('page.profile.contact.edit')}</h1>
          <div className="vene-edit-contact-info__section">
            <FormField id="firstName" label={t('page.profile.contact.first_name')} />
            <FormField id="lastName" label={t('page.profile.contact.last_name')} />
          </div>
          <div className="vene-edit-contact-info__section">
            <FormField id="address" label={t('page.profile.contact.address')} />
            <FormField id="zipCode" label={t('page.profile.contact.postal_code')} />
            <div className="vene-edit-contact-info__field">
              <Field name="municipality">
                {({ input }) => (
                  <Select
                    {...input}
                    onChange={(option: { value: string; label: string }) => input.onChange(option.value)}
                    value={municipalityOptions.find((option) => option.value === input.value)}
                    id="municipality"
                    label={t('page.profile.contact.municipality')}
                    options={municipalityOptions}
                  />
                )}
              </Field>
            </div>
          </div>
          <div className="vene-edit-contact-info__section">
            <FormField id="phoneNumber" label={t('page.profile.contact.phone_number')} />
            <FormField id="email" label={t('page.profile.contact.email_address')} />
          </div>
          <div className="vene-edit-contact-info__section">
            <div className="vene-edit-contact-info__field">
              <Field name="language">
                {({ input }) => (
                  <Select
                    {...input}
                    onChange={(option: { value: string; label: string }) => input.onChange(option.value)}
                    value={languageOptions.find((option) => option.value === input.value)}
                    id="language"
                    label={t('page.profile.contact.language')}
                    options={languageOptions}
                  />
                )}
              </Field>
            </div>
          </div>
          <div className="vene-edit-contact-info__buttons">
            <Button size="small" variant="secondary" onClick={handleCancel}>
              {t('page.profile.contact.cancel')}
            </Button>
            <Button size="small" disabled={invalid} type="submit" onClick={handleSubmit}>
              {t('page.profile.contact.save')}
            </Button>
          </div>
        </div>
      )}
    />
  );
};

export default EditContactInfo;
