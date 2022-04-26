import { Button } from 'hds-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AvailabilityLevel from '../../../../common/availabilityLevel/AvailabilityLevel';
import { formatDate } from '../../../../common/utils/format';
import { ApplicationStatus } from '../../../../__generated__/globalTypes';
import { Choice } from '../../types';
import ConfirmIntent from '../confirmIntent/ConfirmIntent';
import ApplicationNoSuitableBerths from './ApplicationNoSuitableBerthsNotice';
import Divider from '../divider/Divider';
import EditApplicationModal, { EditApplicationModalProps } from '../editApplicationModal/EditApplicationModal';
import { TContext } from '../../../../common/types/translation';
import './application.scss';

type EditingProps<T extends Record<string, boolean>> = Pick<
  EditApplicationModalProps<Choice<T>>,
  'ownBoatsOptions' | 'ownBoatsLoading' | 'placesOptions' | 'placesLoading' | 'getChoiceFromData' | 'renderChoices'
>;

export type ApplicationProps<T extends Record<string, boolean>> = {
  applicationDate: string;
  translationContext: TContext;
  boat: {
    id: string;
    name: string;
    registrationNumber: string;
  } | null;
  choices: Choice<T>[];
  heading?: string;
  subHeading: string;
  disableButtons?: boolean;
  status: ApplicationStatus;
  onDelete?: () => void;
  onExtendApplication?: () => void;
  onEditApplication?: (addChoicesIds: string[], boatId?: string | null) => void;
  renderProperties(properties: T): React.ReactNode;
} & EditingProps<T>;

const Application = <T extends Record<string, boolean>>({
  boat,
  heading,
  subHeading,
  applicationDate,
  choices,
  disableButtons,
  status,
  placesOptions,
  placesLoading,
  ownBoatsOptions,
  ownBoatsLoading,
  translationContext,
  getChoiceFromData,
  renderProperties,
  renderChoices,
  onExtendApplication,
  onEditApplication,
  onDelete,
}: ApplicationProps<T>) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [isEditing, setIsEditing] = useState(false);

  const renderInitialChoices = ({ name, availabilityLevel, properties }: Choice<T>, index: number) => (
    <li key={index}>
      <p>{name}</p>
      <div className="vene-application__details">
        <AvailabilityLevel level={availabilityLevel.id} label={availabilityLevel.title} />
        <div className="vene-application__properties">{renderProperties(properties)}</div>
      </div>
    </li>
  );

  return (
    <>
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
        <ol className="vene-application__choices">{choices.map(renderInitialChoices)}</ol>

        {status === ApplicationStatus.PENDING && (
          <div className="vene-application__buttons">
            <Button
              size="small"
              variant="secondary"
              theme="coat"
              disabled={disableButtons}
              onClick={() => setIsEditing(true)}
            >
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
      {onEditApplication && isEditing && (
        <EditApplicationModal
          translationContext={translationContext}
          isOpen={isEditing}
          onClose={() => setIsEditing(false)}
          onSubmit={onEditApplication}
          boat={boat}
          placesOptions={placesOptions}
          placesLoading={placesLoading}
          ownBoatsOptions={ownBoatsOptions}
          ownBoatsLoading={ownBoatsLoading}
          initialChoices={choices}
          getChoiceFromData={getChoiceFromData}
          renderChoices={renderChoices}
        />
      )}
    </>
  );
};

export default Application;
