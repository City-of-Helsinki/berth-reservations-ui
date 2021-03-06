import { Col, Container, Row } from 'reactstrap';

import AutoSave from '../../../../common/autoSave/AutoSave';
import Form from '../../../../common/form/Form';
import { StepType } from '../../../../common/steps/step/Step';
import Steps from '../../../../common/steps/Steps';
import { UnmarkedWinterFormValues } from '../../types';

import './unmarkedWinterStorageLegend.scss';

export type UnmarkedWinterStorageLegendProps = {
  legend: {
    title: string;
    legend: string;
  };
  form: {
    initialValues: UnmarkedWinterFormValues;
    onSubmit: (values: UnmarkedWinterFormValues) => void;
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
            <Steps steps={steps} />
            <div className="vene-unmarked-winter-storage-legend__header">
              <h3>{legend.title}</h3>
              <p>{legend.legend}</p>
            </div>
            <Form initialValues={form.initialValues} onSubmit={form.onSubmit}>
              {() => (
                <>
                  {form.render()}
                  <AutoSave debounceInMs={500} save={form.onSubmit} />
                </>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UnmarkedWinterStorageLegend;
