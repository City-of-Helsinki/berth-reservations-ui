// @flow
import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
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
    return React.Children.toArray(children)[step - 1];
  };

  handleSubmit = (values: any) => {
    const { nextStep, onSubmit, localePush } = this.props;
    if (this.hasNextStep()) {
      nextStep();
    } else {
      onSubmit(values);
      localePush('thank-you');
    }
  };

  render() {
    const { initialValues } = this.state;
    const { prevStep } = this.props;
    const activePage = this.getActiveStep();

    return (
      <Form initialValues={initialValues} onSubmit={this.handleSubmit}>
        {({ submitting, invalid, values }) => (
          <Fragment>
            {React.cloneElement(activePage, { values })}
            <div>
              {this.hasPreviousStep() && (
                <Button type="button" onClick={prevStep}>
                  « Previous
                </Button>
              )}
              {this.hasNextStep() ? (
                <Button type="submit">{invalid ? 'Fill the form to proceed' : 'Next »'}</Button>
              ) : (
                <Button type="submit" disabled={submitting || invalid}>
                  Submit
                </Button>
              )}
            </div>
          </Fragment>
        )}
      </Form>
    );
  }
}
