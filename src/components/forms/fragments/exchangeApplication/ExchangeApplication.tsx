import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import { Select, Text } from '../../Fields';

import { HarborOption, HarborOptions } from '../../../../types/harborOptionsTypes';
import { BerthSwitchReasonsQuery_berthSwitchReasons } from '../../../../utils/__generated__/BerthSwitchReasonsQuery';

import './exchangeApplication.scss';

export interface ExchangeApplicationProps {
  harbors: HarborOptions;
  reasons?: BerthSwitchReasonsQuery_berthSwitchReasons[];
}

const ExchangeApplication: FC<ExchangeApplicationProps> = ({ harbors, reasons }) => {
  return (
    <Container className="vene-exchange-application">
      <Row>
        <Col>
          <FormattedMessage id="page.berth.exchange_application.current_berth.title">
            {txt => <h3 className="vene-exchange-application__heading">{txt}</h3>}
          </FormattedMessage>
          <FormattedMessage id="page.berth.exchange_application.current_berth.info_text">
            {txt => <p className="vene-exchange-application__description">{txt}</p>}
          </FormattedMessage>
        </Col>
      </Row>

      <Row>
        <Col>
          <Select
            name="harborId"
            label="page.berth.exchange_application.form.current_harbour_area.label"
            required
          >
            <option />
            {harbors.size &&
              harbors.map((harbor: HarborOption) => (
                <option key={harbor.id} value={harbor.id}>
                  {harbor.name}
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
          <FormattedMessage id="page.berth.exchange_application.reason.title">
            {txt => <h3 className="vene-exchange-application__heading">{txt}</h3>}
          </FormattedMessage>
          <FormattedMessage id="page.berth.exchange_application.reason.info_text">
            {txt => <p className="vene-exchange-application__description">{txt}</p>}
          </FormattedMessage>
        </Col>
      </Row>

      <Row>
        <Col>
          <Select name="reason">
            <FormattedMessage id="page.berth.exchange_application.reason.default">
              {txt => <option value="">{txt}</option>}
            </FormattedMessage>
            {reasons &&
              reasons.map(reason => (
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
