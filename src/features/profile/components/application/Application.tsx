import { Button } from 'hds-react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import AvailabilityLevel from '../../../../common/availabilityLevel/AvailabilityLevel';
import { formatDate } from '../../../../common/utils/format';
import { ApplicationStatus } from '../../../../__generated__/globalTypes';
import { Choice } from '../../types';
import ConfirmIntent from '../confirmIntent/ConfirmIntent';
import ApplicationNoSuitableBerths from './ApplicationNoSuitableBerthsNotice';
import Divider from '../divider/Divider';
import './application.scss';

export interface ApplicationProps<T extends Record<string, boolean>> {
  applicationDate: string;
  choices: Choice<T>[];
  heading?: string;
  subHeading: string;
  disableButtons?: boolean;
  status: ApplicationStatus;
  onDelete?: () => void;
  onExtendApplication?: () => void;
  renderProperties(properties: T): React.ReactNode;
}

const Application = <T extends Record<string, boolean>>({
  heading,
  subHeading,
  applicationDate,
  choices,
  disableButtons,
  status,
  renderProperties,
  onExtendApplication,
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
      {status === ApplicationStatus.NO_SUITABLE_BERTHS && onExtendApplication && (
        <>
          <ApplicationNoSuitableBerths onExtendApplication={onExtendApplication} />
          <Divider />
        </>
      )}

      {heading && <h2 className="vene-application__heading">{heading}</h2>}

      <p>
        {t('common.sent')}: {formatDate(applicationDate, language)}
      </p>

      <h3 className="vene-application__sub-heading">{subHeading}</h3>
      <ol className="vene-application__choices">{choices.map(renderChoices)}</ol>

      {status === ApplicationStatus.PENDING && (
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
      )}
    </div>
  );
};

export default Application;
