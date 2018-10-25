// @flow
import React, { Component, Fragment } from 'react';
import Form from './Form';
import { Button } from 'reactstrap';

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
        {({ submitting, invalid }) => (
          <Fragment>
            {activePage}
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
