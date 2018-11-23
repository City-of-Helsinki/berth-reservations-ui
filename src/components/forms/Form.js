// @flow
import React, { type Node } from 'react';
import { Form as FinalForm } from 'react-final-form';
import { Form as BootstrapForm } from 'reactstrap';

type Props = {
  onSubmit: Function,
  initialValues: Object,
  children: any => Node
};

export default ({ onSubmit, initialValues, children }: Props) => (
  <FinalForm
    debug={console.debug}
    onSubmit={formData => onSubmit(formData)}
    initialValues={initialValues}
    render={({ handleSubmit, ...renderProps }) => (
      <BootstrapForm noValidate onSubmit={handleSubmit}>
        {children(renderProps)}
      </BootstrapForm>
    )}
  />
);
