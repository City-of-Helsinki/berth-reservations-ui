import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Wizard from '../../forms/Wizard';
import Layout from '../../layout/Layout';
import FormLegend from '../../legends/FormLegend';
import Steps from '../../steps/StepsContainer';

import { StepType } from '../../steps/step/Step';
import './FormPage.scss';

interface Props {
  initialValues: {};
  goForward: Function;
  goBackwards: Function;
  nextStep: Function;
  prevStep: Function;
  step: number;
  steps: StepType[];
  children: React.ReactNode;
}

const BoatPage = ({
  initialValues,
  goForward,
  goBackwards,
  nextStep,
  prevStep,
  step,
  steps,
  children
}: Props) => {
  return (
    <Layout>
      <div className="vene-form-page">
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
              <Steps steps={steps} />
              <FormLegend step={step} />
            </Col>
          </Row>
        </Container>
      </div>
      <Wizard
        step={step}
        initialValues={initialValues}
        goForward={goForward}
        goBackwards={goBackwards}
        nextStep={nextStep}
        prevStep={prevStep}
      >
        {children}
      </Wizard>
    </Layout>
  );
};
export default BoatPage;
