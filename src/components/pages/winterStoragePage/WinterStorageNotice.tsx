import React from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

const WinterStorageNotice = () => {
  return (
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <FormattedMessage tagName="h3" id="page.winter_storage.notice.title" />
          <FormattedHTMLMessage tagName="p" id="page.winter_storage.notice.paragraph1" />
          <FormattedHTMLMessage tagName="p" id="page.winter_storage.notice.paragraph2" />
          <FormattedMessage tagName="p" id="page.winter_storage.notice.paragraph3" />
        </Col>
      </Row>
    </Container>
  );
};

export default WinterStorageNotice;
