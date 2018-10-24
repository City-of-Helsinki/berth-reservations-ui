// @flow
import React, { Component, Fragment } from 'react';
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
    return step < React.Children.count(children) - 1;
  };

  hasPreviousStep = () => {
    const { step } = this.props;
    return step > 0;
  };

  getActiveStep = () => {
    const { step, children } = this.props;
    return React.Children.toArray(children)[step];
  };

  validate = (values: any) => {
    const activePage = this.getActiveStep();
    return activePage.props.validate ? activePage.props.validate(values) : {};
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
      <Form initialValues={initialValues} validate={this.validate} onSubmit={this.handleSubmit}>
        {({ submitting }) => (
          <Fragment>
            {activePage}
            <div>
              {this.hasPreviousStep() && (
                <button type="button" onClick={prevStep}>
                  « Previous
                </button>
              )}
              {this.hasNextStep() ? (
                <button type="submit">Next »</button>
              ) : (
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
              )}
            </div>
          </Fragment>
        )}
      </Form>
    );
  }
}
