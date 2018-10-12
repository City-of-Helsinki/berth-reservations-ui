// @flow
import React, { type Node } from 'react';
import { Form as FinalForm } from 'react-final-form';
import { Form as BootstrapForm } from 'reactstrap';

type Props = {
  onSubmit: Function,
  validate: Function,
  children: any => Node
};

export default ({ onSubmit, validate, children }: Props) => (
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
