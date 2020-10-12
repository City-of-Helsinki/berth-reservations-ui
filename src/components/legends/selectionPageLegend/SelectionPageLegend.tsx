import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import { StepType } from '../../../common/steps/step/Step';
import Steps from '../../../common/steps/Steps';

import './selectionPageLegend.scss';

interface Props {
  legend: { title: string; legend: string };
  steps: StepType[];
}

const SelectionPageLegend = ({ steps, legend }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="vene-selection-page-legend">
      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
            <Steps steps={steps} />
            <h3>{t(legend.title)}</h3>
            <p>{t(legend.legend)}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SelectionPageLegend;
