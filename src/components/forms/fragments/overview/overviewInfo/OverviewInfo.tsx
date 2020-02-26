import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import './overviewInfo.scss';

export interface Props {
  title: string;
  children: React.ReactNode;
}

const OverviewInfo = ({ title, children }: Props) => (
  <Container className="vene-overview-info">
    <Row>
      <Col>
        <FormattedMessage id={title}>
          {txt => <h3 className="vene-overview-info__title">{txt}</h3>}
        </FormattedMessage>
      </Col>
    </Row>
    {children}
  </Container>
);

export default OverviewInfo;
