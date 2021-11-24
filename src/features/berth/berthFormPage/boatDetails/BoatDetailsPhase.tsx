import { ReactNode } from 'react';
import { Col, Container, Row } from 'reactstrap';
import classNames from 'classnames';

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
    <Container className={classNames(className, 'boat-details-phase')}>
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
