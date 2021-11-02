import { ReactNode } from 'react';
import { Col, Container, Row } from 'reactstrap';

import './boatDetailsPhase.scss';

type BoatDetailsPhaseSectionProps = {
  children: ReactNode;
};

const BoatDetailsPhaseSection = ({ children }: BoatDetailsPhaseSectionProps) => {
  return <div className="boat-details-phase-section">{children}</div>;
};

type Props = {
  children: ReactNode;
  className?: string;
};

const BoatDetailsPhase = ({ children, className }: Props) => {
  return (
    <Container className={className} style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

BoatDetailsPhase.Section = BoatDetailsPhaseSection;

export default BoatDetailsPhase;
