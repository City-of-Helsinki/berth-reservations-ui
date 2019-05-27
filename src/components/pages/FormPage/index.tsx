import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Wizard from '../../forms/Wizard';
import Layout from '../../layout';
import FormLegend from '../../legends/FormLegend';
import Steps from '../../steps';

import { Steps as StepsType } from '../../steps/StepTypes';
import './FormPage.scss';

interface Props {
  initialValues: {};
  goForward: Function;
  goBackwards: Function;
  nextStep: Function;
  prevStep: Function;
  currentStep: number;
  steps: StepsType;
  children: React.ReactNode;
}

const BoatPage = ({
  initialValues,
  goForward,
  goBackwards,
  nextStep,
  prevStep,
  children,
  steps,
  currentStep
}: Props) => {
  return (
    <Layout>
      <div className="vene-form-page">
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
              <Steps steps={steps} />
              <FormLegend step={currentStep} />
            </Col>
          </Row>
        </Container>
      </div>
      <Wizard
        step={currentStep}
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
