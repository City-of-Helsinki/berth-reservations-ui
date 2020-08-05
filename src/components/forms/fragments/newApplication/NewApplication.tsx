import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import './newApplication.scss';

const NewApplication: FC = () => {
  return (
    <Container className="vene-new-application">
      <Row>
        <Col sm={10}>
          <FormattedMessage id={`page.berth.exchange_application.new`}>
            {(txt) => <h3 className="vene-new-application__heading">{txt}</h3>}
          </FormattedMessage>
          <FormattedMessage id={`page.berth.exchange_application.new.info_text`} />
        </Col>
      </Row>
    </Container>
  );
};

export default NewApplication;
