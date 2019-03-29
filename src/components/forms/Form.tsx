import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { Form as BootstrapForm } from 'reactstrap';
import { injectIntl } from 'react-intl';

type Props = {
  onSubmit: Function;
  initialValues: Object;
  children: (props: any) => React.ReactNode;
  intl: any;
};

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
