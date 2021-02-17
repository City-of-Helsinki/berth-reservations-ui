import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, IconFaceSad } from 'hds-react';

import { LocalePush, withMatchParamsHandlers } from '../../../common/utils/container';
import './noBerths.scss';

interface NoBerthsProps {
  localePush: LocalePush;
}

const NoBerths = ({ localePush }: NoBerthsProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <IconFaceSad size="m" aria-hidden="true" /> <strong>{t('page.profile.berths.no_berths')}</strong>
      <br />
      <Button className="vene-no-berths__action-btn" onClick={() => localePush('berths')}>
        {t('page.profile.berths.apply_for_berth')}
      </Button>
    </div>
  );
};

export default withMatchParamsHandlers(NoBerths);
