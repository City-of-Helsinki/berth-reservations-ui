import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import './contractInfo.scss';

export interface ContractInfoProps {
  className?: string;
  issuedAt: string;
  editedAt: string;
}

const ContractInfo = ({ className, issuedAt, editedAt }: ContractInfoProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames('vene-contract-info', className)}>
      <h3 className="vene-contract-info__heading">{t('page.profile.berths.contract.label')}</h3>
      <LabelValuePair label={t('page.profile.berths.contract.issued')} value={issuedAt} />
      <LabelValuePair label={t('page.profile.berths.contract.edited')} value={editedAt} />
      <LabelValuePair label={t('page.profile.berths.contract.status')} value={issuedAt} />
      {/* FIXME */}
      <a className="vene-contract-info__link" href="#">
        {t('page.profile.berths.contract.show')}
      </a>
    </div>
  );
};

export default ContractInfo;
