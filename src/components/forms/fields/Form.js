// @flow
import React, { type Node } from 'react';
import { Form as FinalForm } from 'react-final-form';
import { Form as BootstrapForm } from 'reactstrap';

type Props = {
  onSubmit: Function,
  validate: Function,
  submit: Function,
  initialValues: Object,
  children: any => Node
};

export default ({ onSubmit, validate, initialValues, getHandleSubmit, children }: Props) => (
  <FinalForm
    onSubmit={formData => onSubmit(formData)}
    validate={validate}
    initialValues={initialValues}
    render={({ handleSubmit, ...renderProps }) => {
      if (getHandleSubmit) {
        getHandleSubmit(handleSubmit);
      }
      return (
        <BootstrapForm noValidate onSubmit={handleSubmit}>
          {children(renderProps)}
        </BootstrapForm>
      );
    }}
  />
);
