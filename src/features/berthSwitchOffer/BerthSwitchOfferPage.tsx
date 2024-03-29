import { Button, RadioButton } from 'hds-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../../common/layout/Layout';
import { OfferDetails_offerDetails } from '../__generated__/OfferDetails';
import './berthSwitchOfferPage.scss';

type BerthSwitchOfferPageProps = {
  berthDetails: OfferDetails_offerDetails;
  initialChoice?: boolean;
  onConfirm(isAccepted: boolean): void;
};

const BerthSwitchOfferPage = ({ berthDetails, initialChoice, onConfirm }: BerthSwitchOfferPageProps) => {
  const { t } = useTranslation();
  const [isAccepted, setIsAccepted] = useState<boolean | null>(initialChoice ?? null);

  return (
    <Layout>
      <div className="vene-offer-page">
        <div className="vene-offer-page__header">
          <div className="vene-offer-page__content">
            <h2 className="vene-offer-page__header-title">{t('page.profile.berths.berth_switch_offer.heading')}</h2>
            <p className="vene-offer-page__header-paragraph">{t('page.profile.berths.berth_switch_offer.info_text')}</p>
            <p className="vene-offer-page__header-paragraph">
              {t('page.profile.berths.berth_switch_offer.questions')}
              <a href="mailto:venepaikkavaraukset@hel.fi" rel="noopener noreferrer" target="_blank">
                venepaikkavaraukset@hel.fi
              </a>
            </p>
          </div>
        </div>

        <div className="vene-offer-page__content">
          <div className="vene-offer-page__berth-info">
            <p className="vene-offer-page__berth-info-label">{t('page.payment.berth_information')}:</p>
            <p>
              {t('common.harbor')}: {berthDetails.harbor}
            </p>
            <p>
              {t('common.pier')}: {berthDetails.pier}
            </p>
            <p>
              {t('common.berth')}: {berthDetails.berth}
            </p>
          </div>

          <div className="vene-offer-page__choices">
            <RadioButton
              className="vene-offer-page__choice"
              id="choice-accept"
              onClick={() => setIsAccepted(true)}
              checked={isAccepted === true}
              label={t('page.profile.berths.berth_switch_offer.accept')}
            />
            <RadioButton
              className="vene-offer-page__choice"
              id="choice-decline"
              onClick={() => setIsAccepted(false)}
              checked={isAccepted === false}
              label={t('page.profile.berths.berth_switch_offer.decline')}
            />
          </div>
          <Button disabled={isAccepted === null} onClick={() => isAccepted !== null && onConfirm(isAccepted)}>
            {t('page.profile.berths.berth_switch_offer.confirm')}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default BerthSwitchOfferPage;
