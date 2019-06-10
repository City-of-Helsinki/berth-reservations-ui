import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

import { Select, Text } from '../../Fields';

import { HarborOption, HarborOptions } from '../../../../types/harborOptionsTypes';

import './ExchangeApplication.scss';

const ExchangeApplication: FC<{
  harbors: HarborOptions;
}> = ({ harbors }) => {
  return (
    <div className="vene-exchange-application">
      <div className="vene-exchange-application__title">
        <FormattedMessage tagName="h3" id="page.berth.exchange_application.current_berth.title" />
        <FormattedMessage
          tagName="p"
          id="page.berth.exchange_application.current_berth.info_text"
        />
      </div>

      <div className="vene-exchange-application__select-harbour">
        <Select
          name={`harborId`}
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

        <Row>
          <Col sm={6}>
            <Text
              name={`pier`}
              label={`page.berth.exchange_application.form.pier.title`}
              placeholder={`page.berth.exchange_application.form.pier.placeholder`}
            />
          </Col>

          <Col sm={6}>
            <Text
              name={`berthNumber`}
              required
              label={`page.berth.exchange_application.form.berth.title`}
              placeholder={`page.berth.exchange_application.form.berth.placeholder`}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ExchangeApplication;
