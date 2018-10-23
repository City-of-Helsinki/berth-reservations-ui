import { Label } from 'reactstrap';
import styled, { css } from 'styled-components';

export default styled(Label)`
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
