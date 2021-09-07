import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Button } from 'reactstrap';

import Layout from '../../../common/layout/Layout';
import Input from '../../../common/input/Input';

import './cancelOrderPage.scss';

export interface CancelOrderPageProps {
  isApplicationOrder: boolean;
  translationContext: 'winter' | 'berth';
  handleCancel(): void;
}

const CancelOrderPage = ({ isApplicationOrder, translationContext, handleCancel }: CancelOrderPageProps) => {
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
                <Trans
                  i18nKey={
                    isApplicationOrder
                      ? 'page.cancel_order.message.paragraph2_application'
                      : 'page.cancel_order.message.paragraph2'
                  }
                  tOptions={{ context: translationContext }}
                />
              </strong>
            </p>
            <p>
              <Trans
                i18nKey="page.cancel_order.message.paragraph3"
                components={[
                  <br key="newLine" />,
                  <a
                    key={'emailLink'}
                    href="mailto:venepaikkavaraukset@hel.fi"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    venepaikkavaraukset@hel.fi
                  </a>,
                ]}
              />
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
