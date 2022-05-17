import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Wizard from '../wizard/Wizard';
import Layout from '../layout/Layout';
import FormLegend from '../formLegend/FormLegend';
import Spinner from '../spinner/Spinner';
import Steps from '../steps/Steps';
import { StepType } from '../steps/step/Step';

import './formPage.scss';

interface Props {
  children: React.ReactNode;
  gdprNotes?: React.ReactNode;
  currentStep: number;
  goBackward: Function;
  goForward: Function;
  initialValues: {};
  loading: boolean;
  steps: StepType[];
  stepsBeforeForm?: number;
  submit: Function;
}

const FormPage = ({
  children,
  gdprNotes,
  currentStep,
  goBackward,
  goForward,
  initialValues,
  loading,
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
      {loading ? (
        <Spinner />
      ) : (
        <Wizard
          currentStep={currentStep}
          goBackward={goBackward}
          goForward={goForward}
          initialValues={initialValues}
          steps={steps}
          stepsBeforeForm={stepsBeforeForm}
          submit={submit}
          gdprNotes={gdprNotes}
        >
          {children}
        </Wizard>
      )}
    </Layout>
  );
};
export default FormPage;
