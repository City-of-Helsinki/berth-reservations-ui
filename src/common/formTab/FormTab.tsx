import * as React from 'react';
import { Container } from 'reactstrap';

import './formTab.scss';

export interface FormTabProps {
  children: React.ReactNode;
}

const FormTab = ({ children }: FormTabProps) => (
  <Container className="vene-form__styled-container">{children}</Container>
);

export default FormTab;
