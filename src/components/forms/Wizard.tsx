import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Col, Container, Row } from 'reactstrap';
import { MAX_STEP } from '../../constants/StepConstant';
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

  handlePrevious = (values: {}) => {
    const { prevStep, goBackwards, step } = this.props;

    if (step >= 1) {
      prevStep(values);
    } else {
      goBackwards(values);
    }
  };
  handleSubmit = (values: {}) => {
    const { nextStep, goForward, step } = this.props;
    if (step < MAX_STEP) {
      nextStep(values);
    } else {
      goForward(values);
    }
  };

  hasNextStep = () => {
    const { step } = this.props;

    return step < MAX_STEP;
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

    return (
      <Form initialValues={initialValues} onSubmit={this.handleSubmit}>
        {({ invalid, values }: { invalid: boolean; values: {} }) => (
          <Fragment>
            {this.props.children}
            <div className="vene-form__wizard-wrapper">
              <Container>
                <Row>
                  <Col xs={12} className="vene-form__wizard-wrapper__button-group">
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
