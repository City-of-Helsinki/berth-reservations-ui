import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import './overviewInfo.scss';

export interface Props {
  title?: string;
  children: React.ReactNode;
}

const OverviewInfo = ({ title, children }: Props) => {
  const { t } = useTranslation();
  return (
    <Container className="vene-overview-info">
      <Row>
        <Col>
          <h3 className="vene-overview-info__title">{title && t(title)}</h3>
        </Col>
      </Row>
      {children}
    </Container>
  );
};

export default OverviewInfo;
