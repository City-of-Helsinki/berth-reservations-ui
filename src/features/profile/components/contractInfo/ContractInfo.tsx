import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';
import { formatDate } from '../../../../common/utils/format';
import './contractInfo.scss';

export interface ContractInfoProps {
  className?: string;
  issuedAt: string;
  editedAt: string;
  signedAt: string;
}

const ContractInfo = ({ className, issuedAt, editedAt, signedAt }: ContractInfoProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const contractStatus = `${t('page.profile.contract.signed')} ${formatDate(signedAt, language)}`;

  return (
    <div className={classNames('vene-contract-info', className)}>
      <h3 className="vene-contract-info__heading">{t('page.profile.contract.label')}</h3>
      <LabelValuePair label={t('page.profile.contract.issued')} value={formatDate(issuedAt, language)} />
      <LabelValuePair label={t('page.profile.contract.edited')} value={formatDate(editedAt, language)} />
      <LabelValuePair label={t('page.profile.contract.status')} value={contractStatus} />
      <button
        className="vene-contract-info__link"
        onClick={() => {
          /* show contract */
        }}
      >
        {t('page.profile.contract.show')}
      </button>
    </div>
  );
};

export default ContractInfo;
