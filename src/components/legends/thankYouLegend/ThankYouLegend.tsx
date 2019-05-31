import React from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import './thankYouLegend.scss';

export default () => (
  <div className="vene-thankyou-legend">
    <Container>
      <Row>
        <Col md="12">
          <FormattedMessage id="legend.thankyou.title">
            {text => <h3 className="vene-thankyou-legend__title">{text}</h3>}
          </FormattedMessage>
          <FormattedMessage tagName="p" id="legend.thankyou.legend.regards" />
          <FormattedHTMLMessage tagName="p" id="legend.thankyou.legend.contact_information" />
        </Col>
      </Row>
    </Container>
  </div>
);
