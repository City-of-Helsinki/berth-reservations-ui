import { useTranslation } from 'react-i18next';

import LabelValuePair from '../../../common/labelValuePair/LabelValuePair';
import './berthInfo.scss';

export interface BerthInfoProps {
  harbor: string | null | undefined;
  pier: string | null | undefined;
  berth: string | null | undefined;
}

const BerthInfo = ({ harbor, pier, berth }: BerthInfoProps) => {
  const { t } = useTranslation();

  return (
    <div className="vene-payment-berth-info">
      <h3 className="vene-payment-berth-info__heading">{t('page.payment.berth_information')}</h3>
      <LabelValuePair label={t('common.harbor')} value={harbor} />
      <LabelValuePair label={t('common.pier')} value={pier} />
      <LabelValuePair label={t('common.berth')} value={berth} />
    </div>
  );
};

export default BerthInfo;
