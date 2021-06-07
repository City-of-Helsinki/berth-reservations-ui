import * as React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { Form as BootstrapForm } from 'reactstrap';

interface Props {
  onSubmit: Function;
  initialValues: object;
  children: (props: any) => React.ReactNode;
}

const Form = ({ onSubmit, initialValues, children }: Props) => {
  const { i18n } = useTranslation();

  return (
    <FinalForm
      onSubmit={(formData) => onSubmit(formData)}
      initialValues={{ ...initialValues, language: i18n.language }}
      render={({ handleSubmit, ...renderProps }) => (
        <BootstrapForm noValidate onSubmit={handleSubmit}>
          {children(renderProps)}
          <Field name="language" component="input" type="hidden" />
        </BootstrapForm>
      )}
    />
  );
};

export default Form;
