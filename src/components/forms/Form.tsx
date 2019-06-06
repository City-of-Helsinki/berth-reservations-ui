import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { injectIntl } from 'react-intl';
import { Form as BootstrapForm } from 'reactstrap';

interface Props {
  onSubmit: Function;
  initialValues: object;
  children: (props: any) => React.ReactNode;
  intl: any;
}

const form = ({ onSubmit, initialValues, children, intl }: Props) => (
  <FinalForm
    onSubmit={formData => onSubmit(formData)}
    initialValues={{ ...initialValues, language: intl.locale }}
    render={({ handleSubmit, ...renderProps }) => (
      <BootstrapForm noValidate onSubmit={handleSubmit}>
        {children(renderProps)}
        <Field name="language" component="input" type="hidden" />
      </BootstrapForm>
    )}
  />
);

export default injectIntl(form);
