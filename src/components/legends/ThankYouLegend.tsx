import React from 'react';
import styled from 'styled-components';
import { Col, Row, Container } from 'reactstrap';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const Legend = styled.div`
  background-color: ${props => props.theme.colors.helFog};
  padding-top: 1em;
`;

const LegendContainer = styled(Container)`
  padding-bottom: 3em;
`;

const ThankYouHeader = styled.div`
  margin-bottom: 1.5em;
`;

export default () => (
  <Legend>
    <LegendContainer>
      <Row>
        <Col md="12">
          <ThankYouHeader>
            <FormattedMessage tagName="h3" id="legend.thankyou.title" />
          </ThankYouHeader>
          <FormattedMessage tagName="p" id="legend.thankyou.legend.regards" />
          <FormattedHTMLMessage tagName="p" id="legend.thankyou.legend.contact_information" />
        </Col>
      </Row>
    </LegendContainer>
  </Legend>
);
