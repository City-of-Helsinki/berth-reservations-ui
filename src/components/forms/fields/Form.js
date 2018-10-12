import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { Form as BootstrapForm } from 'reactstrap';

export default ({ onSubmit, validate, children }) => (
  <FinalForm
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, ...renderProps }) => (
      <BootstrapForm noValidate onSubmit={handleSubmit}>
        {children(renderProps)}
      </BootstrapForm>
    )}
  />
);
