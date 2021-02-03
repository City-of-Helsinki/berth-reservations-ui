import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import Alert from '../../../../../common/alert/Alert';
import Input from '../../../../../common/input/Input';
import { ApplicationOptions } from '../../../../../common/types/applicationType';

export interface ApplicationSelectorProps {
  alertVisible: boolean;
  className?: string;
  berthsApplicationType: string;
  onSwitch(e: React.FormEvent<HTMLInputElement>): void;
  closeAlert(): void;
}

const ApplicationSelector = ({
  alertVisible,
  className,
  berthsApplicationType,
  onSwitch,
  closeAlert,
}: ApplicationSelectorProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames('vene-application-selector', className)}>
      <Container>
        <Row>
          <Col xs="12" md="6">
            <Input
              type="radio"
              value={ApplicationOptions.NewApplication}
              checked={berthsApplicationType === ApplicationOptions.NewApplication}
              id="vene-application-selector-new"
              onChange={onSwitch}
              name="application-selector-radio"
              label={
                <>
                  <strong>{t('page.berth.exchange_application.new.title')}</strong>
                  <p>{t('page.berth.exchange_application.new.info_text')}</p>
                </>
              }
            />
          </Col>
          <Col xs="12" md="6">
            <Input
              type="radio"
              value={ApplicationOptions.ExchangeApplication}
              checked={berthsApplicationType === ApplicationOptions.ExchangeApplication}
              onChange={onSwitch}
              id="vene-application-selector-exchange"
              name="application-selector-radio"
              label={
                <>
                  <strong>{t('page.berth.exchange_application.exchange.title')}</strong>
                  <p>{t('page.berth.exchange_application.exchange.info_text')}</p>
                </>
              }
            />
          </Col>
        </Row>
      </Container>

      {alertVisible && (
        <Alert toggle={() => closeAlert()} color="danger" messageId="page.berth.exchange_application.warning" />
      )}
    </div>
  );
};

export default ApplicationSelector;
