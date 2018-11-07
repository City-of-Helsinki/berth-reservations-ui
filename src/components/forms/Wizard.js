// @flow
import React, { Component, Fragment } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import Form from './Form';

type State = any;
type Props = any;

export default class Wizard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      initialValues: props.initialValues
    };
  }

  hasNextStep = () => {
    const { step, children } = this.props;
    return step < React.Children.count(children);
  };

  hasPreviousStep = () => {
    const { step } = this.props;
    return step > 0;
  };

  getActiveStep = () => {
    const { step, children } = this.props;
    return React.Children.toArray(children)[step];
  };

  handleSubmit = (values: any) => {
    const { nextStep, goForward } = this.props;
    if (this.hasNextStep()) {
      nextStep();
    } else {
      goForward(values);
    }
  };

  handlePrevious = (values: any) => {
    const { prevStep, goBackwards } = this.props;

    if (this.hasPreviousStep()) {
      prevStep();
    } else {
      goBackwards(values);
    }
  };

  render() {
    const { initialValues } = this.state;
    const activePage = this.getActiveStep();

    return (
      <Form initialValues={initialValues} onSubmit={this.handleSubmit}>
        {({ submitting, invalid, values }) => (
          <Fragment>
            {activePage && React.cloneElement(activePage, { values })}
            <Container>
              <Row>
                <Col>
                  <Button type="button" onClick={() => this.handlePrevious(values)}>
                    « Previous
                  </Button>
                  {this.hasNextStep() ? (
                    <Button type="submit">{invalid ? 'Fill the form to proceed' : 'Next »'}</Button>
                  ) : (
                    <Button type="submit" disabled={submitting || invalid}>
                      Submit
                    </Button>
                  )}
                </Col>
              </Row>
            </Container>
          </Fragment>
        )}
      </Form>
    );
  }
}
