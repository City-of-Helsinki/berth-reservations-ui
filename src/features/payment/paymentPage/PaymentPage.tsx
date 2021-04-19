import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';

import Layout from '../../../common/layout/Layout';
import BerthInfo from '../berthInfo/BerthInfo';
import './paymentPage.scss';

interface Props {
  placeDetails: {
    harbor: string | undefined;
    pier: string | undefined;
    berth: string | undefined;
  };
  handlePay: () => void;
}

const PaymentPage = ({ placeDetails, handlePay }: Props) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div id="vene-payment-page" className="vene-payment-page">
        <div className="vene-payment-page__content-container">
          <div className="vene-payment-page__content">
            <h2>{t('page.payment.title')}</h2>
            <p>{t('page.payment.info')}</p>
            <p className="vene-payment-page__contact-info">
              {t('page.payment.questions')}&nbsp;
              <a href="mailto:venepaikkavaraukset@hel.fi" className="vene-payment-page__link">
                venepaikkavaraukset@hel.fi
              </a>
            </p>
          </div>
        </div>
        <div className="vene-payment-page__content-container">
          <div className="vene-payment-page__content vene-payment-page__accept-terms-content">
            <BerthInfo {...placeDetails} />
            <Button className="vene-payment-page__pay-button" color="secondary" onClick={handlePay}>
              {t('page.payment.pay')}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;
