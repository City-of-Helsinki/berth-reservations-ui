import { Button } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import './application.scss';
import AvailabilityLevel from '../../../../common/availabilityLevel/AvailabilityLevel';
import { formatDate } from '../../../../common/utils/format';

export interface Choice<T extends Record<string, boolean>> {
  name: string;
  availabilityLevel: {
    id: string;
    label: string;
  };
  properties: T;
}

export interface ApplicationProps<T extends Record<string, boolean>> {
  applicationDate: string;
  choices: Choice<T>[];
  heading?: string;
  subHeading: string;
  disableButtons?: boolean;
  renderProperties(properties: T): React.ReactNode;
}

const Application = <T extends Record<string, boolean>>({
  heading,
  subHeading,
  applicationDate,
  choices,
  disableButtons,
  renderProperties,
}: ApplicationProps<T>) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const renderChoices = ({ name, availabilityLevel, properties }: Choice<T>, index: number) => (
    <li key={index}>
      <p>{name}</p>
      <div className="vene-application__details">
        <AvailabilityLevel level={availabilityLevel.id} label={availabilityLevel.label} />
        <div className="vene-application__properties">{renderProperties(properties)}</div>
      </div>
    </li>
  );

  return (
    <div className="vene-application">
      {heading && <h1>{heading}</h1>}

      <p>
        {t('common.sent')}: {formatDate(applicationDate, language)}
      </p>

      <h2 className="vene-application__heading">{subHeading}</h2>
      <ol className="vene-application__choices">{choices.map(renderChoices)}</ol>

      {/* Removing the checkbox until the design is ready
      <Checkbox
        checked
        id="keep-application-active"
        labelText={t('page.profile.application.keep_application_active')}
      /> */}

      <div className="vene-application__buttons">
        <Button size="small" variant="secondary" disabled={disableButtons}>
          {t('page.profile.application.edit_application')}
        </Button>
        <Button size="small" variant="danger" disabled={disableButtons}>
          {t('page.profile.application.delete_application')}
        </Button>
      </div>
    </div>
  );
};

export default Application;
