import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../layout/Layout';
import { Button } from 'reactstrap';
import './paymentPage.scss';
import Input from '../../../common/Input';
import { getTermsDocumentUrl } from '../../../utils/urls';

interface Props {
  handlePay: () => void;
}

const PaymentPage = ({ handlePay }: Props) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const handleAcceptTermsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    setTermsAccepted(target.checked);
  };

  const termsDocumentUrl = getTermsDocumentUrl(language);

  return (
    <Layout>
      <div id="vene-payment-page" className="vene-payment-page">
        <div className="vene-payment-page__content-container">
          <div className="vene-payment-page__content">
            <h2>{t('page.payment.title')}</h2>
            <p>{t('page.payment.terms_info')}</p>
            <p className="vene-payment-page__contact-info">
              {t('page.payment.questions')}&nbsp;
              <a href="mailto:venepaikat@hel.fi" className="vene-payment-page__link">
                venepaikat@hel.fi
              </a>
            </p>
          </div>
        </div>
        <div className="vene-payment-page__content-container">
          <div className="vene-payment-page__content vene-payment-page__accept-terms-content">
            <div>
              <a
                href={termsDocumentUrl}
                className="vene-payment-page__link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('page.payment.terms_pdf')}
              </a>
            </div>
            <div>
              <Input
                type="checkbox"
                id="acceptTerms"
                label="page.payment.accept_terms"
                onChange={handleAcceptTermsChange}
              />
            </div>
            <Button
              className="vene-payment-page__pay-button"
              color="secondary"
              disabled={!termsAccepted}
              onClick={handlePay}
            >
              {t('page.payment.pay')}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;
