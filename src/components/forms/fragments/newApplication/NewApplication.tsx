import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'reactstrap';

const NewApplication: FC = () => {
  return (
    <div className="vene-new-application">
      <Row>
        <Col sm={10}>
          <FormattedMessage tagName="h1" id={`page.berth.exchange_application.new`} />

          <FormattedMessage id={`page.berth.exchange_application.new.info_text`} />
        </Col>
      </Row>
    </div>
  );
};

export default NewApplication;