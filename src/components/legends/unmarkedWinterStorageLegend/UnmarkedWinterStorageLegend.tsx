import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import AutoSave from '../../forms/AutoSave';
import Form from '../../forms/Form';
import { StepType } from '../../steps/step/Step';
import Steps from '../../steps/Steps';

import './unmarkedWinterStorageLegend.scss';

export type UnmarkedWinterStorageLegendProps = {
  legend: any;
  form: {
    initialValues: object;
    onSubmit: Function;
    render: () => JSX.Element;
  };
  steps: StepType[];
};

const UnmarkedWinterStorageLegend = ({ legend, form, steps }: UnmarkedWinterStorageLegendProps) => {
  return (
    <div className="vene-unmarked-winter-storage-legend">
      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
            {steps && (
              <div className="vene-unmarked-winter-storage-legend__steps">
                <Steps steps={steps} />
              </div>
            )}
            {legend && (
              <div className="vene-unmarked-winter-storage-legend__header">
                <h3>{legend.title}</h3>
                <p>{legend.legend}</p>
              </div>
            )}
            {form && (
              <Form initialValues={form.initialValues} onSubmit={form.onSubmit}>
                {() => (
                  <>
                    {form.render()}
                    <AutoSave debounce={500} save={form.onSubmit} />
                  </>
                )}
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UnmarkedWinterStorageLegend;
