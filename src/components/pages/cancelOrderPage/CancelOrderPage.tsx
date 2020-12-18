import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Layout from '../../../common/layout/Layout';
import { Button } from 'reactstrap';
import Input from '../../../common/Input';

import './cancelOrderPage.scss';

export interface CancelOrderPageProps {
  handleCancel(): void;
}

const CancelOrderPage = ({ handleCancel }: CancelOrderPageProps) => {
  const { t } = useTranslation();
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Layout>
      <div className="vene-cancel-order-page">
        <div className="vene-cancel-order-page__content">
          <div className="vene-cancel-order-page__max-width">
            <h2>{t('page.cancel_order.title')}</h2>
            <p>{t('page.cancel_order.message.paragraph1')}</p>
            <p>
              <strong>
                <Trans i18nKey="page.cancel_order.message.paragraph2" />
              </strong>
            </p>
            <p>
              <Trans i18nKey="page.cancel_order.message.paragraph3" />
            </p>
          </div>
        </div>
        <div className="vene-cancel-order-page__buttons">
          <div className="vene-cancel-order-page__max-width">
            <Input
              type="checkbox"
              id="confirmation"
              label="page.cancel_order.confirmation"
              onChange={(e) => setConfirmed(e.target.checked)}
            />
            <Button
              className="vene-cancel-order-page__btn"
              disabled={!confirmed}
              onClick={handleCancel}
              color="secondary"
            >
              {t('page.cancel_order.submit_button')}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CancelOrderPage;
