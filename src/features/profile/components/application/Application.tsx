import { Button } from 'hds-react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import AvailabilityLevel from '../../../../common/availabilityLevel/AvailabilityLevel';
import { formatDate } from '../../../../common/utils/format';
import { Choice } from '../../types';
import ConfirmIntent from '../confirmIntent/ComfirmIntent';
import './application.scss';

export interface ApplicationProps<T extends Record<string, boolean>> {
  applicationDate: string;
  choices: Choice<T>[];
  heading?: string;
  subHeading: string;
  disableButtons?: boolean;
  onDelete?: () => void;
  renderProperties(properties: T): React.ReactNode;
}

const Application = <T extends Record<string, boolean>>({
  heading,
  subHeading,
  applicationDate,
  choices,
  disableButtons,
  renderProperties,
  onDelete,
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
        {onDelete && (
          <div className="vene-application__button">
            <ConfirmIntent
              id="delete-berth-application"
              title={t('page.profile.application.confirm_delete_title')}
              cancelIntentLabel={t('page.profile.application.confirm_delete_cancel')}
              confirmIntentLabel={t('page.profile.application.confirm_delete_confirm')}
              description={t('page.profile.application.confirm_delete_description')}
              intent={() => onDelete()}
              renderControl={({ ref, onClick }) => (
                <Button ref={ref} size="small" variant="danger" onClick={onClick}>
                  {t('page.profile.application.delete_application')}
                </Button>
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Application;
