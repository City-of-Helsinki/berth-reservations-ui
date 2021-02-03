import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import { Berths } from '../../types';
import { Select, Text } from '../../../../common/fields/Fields';
import { BerthSwitchReasonsQuery_berthSwitchReasons } from '../../../__generated__/BerthSwitchReasonsQuery';

import './exchangeApplication.scss';

export interface ExchangeApplicationProps {
  berths: Berths;
  reasons?: BerthSwitchReasonsQuery_berthSwitchReasons[];
}

const ExchangeApplication = ({ berths, reasons }: ExchangeApplicationProps) => {
  const { t } = useTranslation();
  return (
    <Container className="vene-exchange-application">
      <Row>
        <Col>
          <h3 className="vene-exchange-application__heading">
            {t('page.berth.exchange_application.current_berth.title')}
          </h3>
          <p className="vene-exchange-application__description">
            {t('page.berth.exchange_application.current_berth.info_text')}
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Select name="harborId" label="page.berth.exchange_application.form.current_harbour_area.label" required>
            <option />
            {berths.size &&
              berths.map((berth) => (
                <option key={berth.id} value={berth.id}>
                  {berth.name}
                </option>
              ))}
          </Select>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Text
            name="pier"
            label="page.berth.exchange_application.form.pier.title"
            placeholder="page.berth.exchange_application.form.pier.placeholder"
          />
        </Col>

        <Col sm={6}>
          <Text
            name="berthNumber"
            required
            label="page.berth.exchange_application.form.berth.title"
            placeholder="page.berth.exchange_application.form.berth.placeholder"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="vene-exchange-application__heading">{t('page.berth.exchange_application.reason.title')}</h3>
          <p className="vene-exchange-application__description">
            {t('page.berth.exchange_application.reason.info_text')}
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Select name="reason">
            <option value="">{t('page.berth.exchange_application.reason.default')}</option>
            {reasons &&
              reasons.map((reason) => (
                <option key={reason.id} value={reason.id}>
                  {reason.title}
                </option>
              ))}
          </Select>
        </Col>
      </Row>
    </Container>
  );
};

export default ExchangeApplication;
