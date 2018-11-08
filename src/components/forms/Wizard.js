// @flow
import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import Form from './Form';

type State = any;
type Props = any;

const ButtonWrapper = styled.div`
  background-color: ${props => props.theme.helLight};
  padding: 1em;
  display: flex;
  justify-content: space-between;
  padding-bottom: 3em;
`;
const FooterButton = styled(Button)``;

class Wizard extends Component<Props, State> {
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

  getSubmitText = (invalid: boolean) => {
    if (this.hasNextStep()) {
      if (invalid) {
        return 'Fill the form to proceed';
      }
      return 'Next »';
    }
    return 'Submit';
  };

  render() {
    const { initialValues } = this.state;
    const activePage = this.getActiveStep();

    return (
      <Form initialValues={initialValues} onSubmit={this.handleSubmit}>
        {({ submitting, invalid, values }) => (
          <Fragment>
            {activePage && React.cloneElement(activePage, { values })}
            <ButtonWrapper>
              <FooterButton type="button" onClick={() => this.handlePrevious(values)}>
                « Previous
              </FooterButton>
              <FooterButton type="submit" disabled={submitting}>
                {this.getSubmitText(invalid)}
              </FooterButton>
            </ButtonWrapper>
          </Fragment>
        )}
      </Form>
    );
  }
}

export default Wizard;
