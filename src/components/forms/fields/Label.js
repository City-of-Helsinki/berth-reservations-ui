// @flow
import React from 'react';
import { Label } from 'reactstrap';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';

const StyledLabel = styled(Label)`
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

type Props = {
  htmlFor: string,
  required: boolean,
  text: string
};

export default ({ htmlFor, required, text }: Props) => (
  <StyledLabel htmlFor={htmlFor} required={required}>
    <FormattedMessage id={text} />
  </StyledLabel>
);
