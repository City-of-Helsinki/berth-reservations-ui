import { Button, RadioButton } from 'hds-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../../common/layout/Layout';
import './berthSwitchOfferPage.scss';

type BerthSwitchOfferPageProps = {
  // TODO: This can not be queried yet
  /*berthDetails: {
    harbor: string;
    pier: string;
    berth: string;
  };*/
  initialChoice?: boolean;
  onConfirm(isAccepted: boolean): void;
};

const BerthSwitchOfferPage = ({ initialChoice, onConfirm }: BerthSwitchOfferPageProps) => {
  const { t } = useTranslation();
  const [isAccepted, setIsAccepted] = useState<boolean | null>(initialChoice ?? null);

  return (
    <Layout>
      <div className="vene-offer-page">
        <div className="vene-offer-page__header">
          <div className="vene-offer-page__content">
            <h2>{t('page.profile.berths.berth_switch_offer.heading')}</h2>
            <p>{t('page.profile.berths.berth_switch_offer.info_text')}</p>
            <p>
              {t('page.profile.berths.berth_switch_offer.questions')}
              <a href="mailto:venepaikkavaraukset@hel.fi" rel="noopener noreferrer" target="_blank">
                venepaikkavaraukset@hel.fi
              </a>
            </p>
          </div>
        </div>

        <div className="vene-offer-page__content">
          {/*<div className="vene-offer-page__berth-info">
            <p className="vene-offer-page__berth-info-label">Venepaikan tiedot:</p>
            <p>Satama: {berthDetails.harbor}</p>
            <p>Laituri: {berthDetails.pier}</p>
            <p>Paikka: {berthDetails.berth}</p>
          </div>*/}

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
          {isAccepted !== null && (
            <Button onClick={() => onConfirm(isAccepted)}>{t('page.profile.berths.berth_switch_offer.confirm')}</Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BerthSwitchOfferPage;
