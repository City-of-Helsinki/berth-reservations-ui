// @flow
import React, { type Node } from 'react';
import { Form as FinalForm } from 'react-final-form';
import { Form as BootstrapForm } from 'reactstrap';

type Props = {
  onSubmit: Function,
  validate: Function,
  initialValues: Object,
  children: any => Node
};

export default ({ onSubmit, validate, initialValues, children }: Props) => (
  <FinalForm
    onSubmit={formData => onSubmit(formData)}
    validate={validate}
    initialValues={initialValues}
    render={({ handleSubmit, ...renderProps }) => (
      <BootstrapForm noValidate onSubmit={handleSubmit}>
        {children(renderProps)}
      </BootstrapForm>
    )}
  />
);
