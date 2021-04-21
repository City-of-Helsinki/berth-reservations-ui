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
                  <strong>{t('page.berth.switch_application.new.title')}</strong>
                  <p>{t('page.berth.switch_application.new.info_text')}</p>
                </>
              }
            />
          </Col>
          <Col xs="12" md="6">
            <Input
              type="radio"
              value={ApplicationOptions.SwitchApplication}
              checked={berthsApplicationType === ApplicationOptions.SwitchApplication}
              onChange={onSwitch}
              id="vene-application-selector-switch"
              name="application-selector-radio"
              label={
                <>
                  <strong>{t('page.berth.switch_application.switch.title')}</strong>
                  <p>{t('page.berth.switch_application.switch.info_text')}</p>
                </>
              }
            />
          </Col>
        </Row>
      </Container>

      {alertVisible && <Alert toggle={closeAlert} color="danger" messageId="page.berth.switch_application.warning" />}
    </div>
  );
};

export default ApplicationSelector;
