import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Col, Container, Row } from 'reactstrap';
import Form from './Form';
import './Wizard.scss';

type State = any;
type Props = any;

class Wizard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    window.scrollTo(0, 0);
    this.state = {
      initialValues: props.initialValues,
      isSubmitting: false
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

  handleSubmit = (values: {}) => {
    const { nextStep, goForward } = this.props;
    if (this.hasNextStep()) {
      window.scrollTo(0, 0);
      nextStep(values);
    } else {
      this.setState({ isSubmitting: true });
      goForward(values);
    }
  };

  handlePrevious = (values: {}) => {
    const { prevStep, goBackwards } = this.props;

    if (this.hasPreviousStep()) {
      prevStep(values);
    } else {
      goBackwards(values);
    }
  };

  getSubmitText = (invalid: boolean) => {
    if (this.hasNextStep()) {
      if (invalid) {
        return 'form.wizard.button.invalid';
      }
      return 'form.wizard.button.next';
    }
    return 'form.wizard.button.submit';
  };

  render() {
    const { initialValues } = this.state;
    const activePage = this.getActiveStep();

    return (
      <Form initialValues={initialValues} onSubmit={this.handleSubmit}>
        {({ invalid, values }: { invalid: boolean; values: {} }) => (
          <Fragment>
            {React.isValidElement(activePage) &&
              React.cloneElement<{ values?: {} }>(activePage, { values })}
            <div className="app-Form__wizard-wrapper">
              <Container>
                <Row>
                  <Col xs={12} className="app-Form__wizard-wrapper__button-group">
                    <Button color="link" type="button" onClick={() => this.handlePrevious(values)}>
                      <FormattedMessage id="form.wizard.button.previous" />
                    </Button>
                    <Button
                      type="submit"
                      outline={this.hasNextStep()}
                      color="primary"
                      disabled={this.state.isSubmitting}
                    >
                      <FormattedMessage id={this.getSubmitText(invalid)} />
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fragment>
        )}
      </Form>
    );
  }
}

export default Wizard;
