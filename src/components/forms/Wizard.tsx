import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Container, Row } from 'reactstrap';

import Form from './Form';
import { StepType } from '../../common/steps/step/Step';
import { WinterStorageMethod } from '../../__generated__/globalTypes';
import './Wizard.scss';

type Props = {
  children: React.ReactNode;
  currentStep: number;
  goBackward: Function;
  goForward: Function;
  initialValues: {
    boatStoredOnTrailer?: boolean;
    storageMethod?: unknown;
    [key: string]: unknown;
  };
  steps: StepType[];
  stepsBeforeForm: number;
  submit: Function;
};

const Wizard = ({
  children,
  currentStep,
  goBackward,
  goForward,
  initialValues: _initialValues,
  steps,
  stepsBeforeForm,
  submit,
}: Props) => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Suggest using trail option if have no selected data.
  const { boatStoredOnTrailer: onTrailer, storageMethod: currentStorageMethod } = _initialValues;
  const initialValues =
    onTrailer && !currentStorageMethod
      ? { ..._initialValues, storageMethod: WinterStorageMethod.ON_TRAILER }
      : _initialValues;

  const isLastFormStep = (step: number) => {
    return step + 1 === steps.length;
  };

  const isFirstFormStep = (step: number) => {
    return step === stepsBeforeForm;
  };

  const focusFirstPageElement = () => {
    const mainLink = document.getElementById('main-link');
    if (mainLink) {
      mainLink.focus();
    }
  };

  const handlePrevious = (values: {}) => {
    if (!isFirstFormStep(currentStep)) {
      focusFirstPageElement();
    }
    goBackward(values);
  };

  const handleSubmit = (values: {}) => {
    if (isLastFormStep(currentStep)) {
      setIsSubmitting(true);
      submit(values);
    } else {
      window.scrollTo(0, 0);
      focusFirstPageElement();
      goForward(values);
    }
  };

  const getSubmitText = (invalid: boolean) => {
    if (isLastFormStep(currentStep)) return 'form.wizard.button.submit';
    if (invalid) return 'form.wizard.button.invalid';
    return 'form.wizard.button.next';
  };

  const formContentComponent = React.Children.toArray(children)[0];

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      {({ invalid, values }: { invalid: boolean; values: {} }) => (
        <>
          {React.isValidElement(formContentComponent) &&
            React.cloneElement<{ values?: {} }>(formContentComponent, { values })}
          <div className="vene-form__wizard-wrapper">
            <Container>
              <Row>
                <Col xs={12} className="vene-form__wizard-wrapper__button-group">
                  <Button color="link" type="button" onClick={() => handlePrevious(values)}>
                    <span>{t('form.wizard.button.previous')}</span>
                  </Button>
                  <Button type="submit" outline={!isLastFormStep(currentStep)} color="primary" disabled={isSubmitting}>
                    <span>{t(getSubmitText(invalid))}</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </Form>
  );
};

export default Wizard;
