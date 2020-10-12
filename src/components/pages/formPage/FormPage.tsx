import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Wizard from '../../forms/Wizard';
import Layout from '../../../common/layout/Layout';
import FormLegend from '../../legends/formLegend/FormLegend';
import Steps from '../../../common/steps/Steps';

import { StepType } from '../../../common/steps/step/Step';

import './formPage.scss';

interface Props {
  children: React.ReactNode;
  currentStep: number;
  goBackward: Function;
  goForward: Function;
  initialValues: {};
  steps: StepType[];
  stepsBeforeForm?: number;
  submit: Function;
}

const FormPage = ({
  children,
  currentStep,
  goBackward,
  goForward,
  initialValues,
  steps,
  stepsBeforeForm = 0,
  submit,
}: Props) => {
  const { legend } = steps[currentStep];

  return (
    <Layout>
      <div className="vene-form-page">
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
              <Steps steps={steps} />
              {legend !== undefined && <FormLegend legend={legend} />}
            </Col>
          </Row>
        </Container>
      </div>
      <Wizard
        currentStep={currentStep}
        goBackward={goBackward}
        goForward={goForward}
        initialValues={initialValues}
        steps={steps}
        stepsBeforeForm={stepsBeforeForm}
        submit={submit}
      >
        {children}
      </Wizard>
    </Layout>
  );
};
export default FormPage;
