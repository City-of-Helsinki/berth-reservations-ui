import { Checkbox, IconFaceSad, IconInfoCircle, Button } from 'hds-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './applicationNoSuitableBerths.scss';

export interface Props {
  onExtendApplication: () => void;
}

const ApplicationNoSuitableBerths = ({ onExtendApplication }: Props) => {
  const { t } = useTranslation();
  const [continueIntent, setContinueInter] = useState(false);

  return (
    <>
      <div className="vene-applicationNoSuitableBerths__title">
        <IconFaceSad size="xl" aria-hidden="true" /> <h1>{t('page.profile.application.no_berths')}</h1>
      </div>
      <div className="vene-applicationNoSuitableBerths__stack">
        <p>{t('page.profile.application.extend_application_explanation')}</p>
        <Checkbox
          checked={continueIntent}
          id="keep-application-active"
          label={t('page.profile.application.keep_application_active')}
          onChange={() => setContinueInter((prev) => !prev)}
          className="vene-applicationNoSuitableBerths__checkbox"
        />
        <p className="vene-applicationNoSuitableBerths__notice">
          <IconInfoCircle size="s" /> {t('page.profile.application.application_will_be_deleted_explanation')}
        </p>
        <Button
          variant="secondary"
          disabled={!continueIntent}
          onClick={onExtendApplication}
          size="small"
          className="vene-applicationNoSuitableBerths__button"
        >
          {t('page.profile.application.confirm_my_choice')}
        </Button>
      </div>
    </>
  );
};

export default ApplicationNoSuitableBerths;
