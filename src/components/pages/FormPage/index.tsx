import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Wizard from '../../forms/Wizard';
import Layout from '../../layout';
import FormLegend from '../../legends/FormLegend';
import Steps from '../../steps';

import './FormPage.scss';

interface Props {
  initialValues: {};
  goForward: Function;
  goBackwards: Function;
  children: React.ReactNode;
}

const BoatPage = ({ initialValues, goForward, goBackwards, children }: Props) => {
  return (
    <Layout>
      <div className="vene-form-page">
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
              <Steps />
              {/* <FormLegend /> */}
            </Col>
          </Row>
        </Container>
      </div>
      <Wizard initialValues={initialValues} goForward={goForward} goBackwards={goBackwards}>
        {children}
      </Wizard>
    </Layout>
  );
};
export default BoatPage;
