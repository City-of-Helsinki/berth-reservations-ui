import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from 'reactstrap';
import styled, { css } from 'styled-components';

interface StyledLabelProps {
  required: boolean;
}

const StyledLabel = styled(Label)<StyledLabelProps>`
  ${props =>
    props.required &&
    css`
      &::after {
        margin-left: 1ch;
        content: '*';
        color: red;
      }
    `};
`;

interface Props {
  htmlFor: string;
  required: boolean;
  text: string;
}

export default ({ htmlFor, required, text }: Props) => (
  <StyledLabel htmlFor={htmlFor} required={required}>
    <FormattedMessage id={text} />
  </StyledLabel>
);
