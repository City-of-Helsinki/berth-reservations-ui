import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from 'reactstrap';

interface Props {
  htmlFor: string;
  required: boolean;
  text: string;
}

export default ({ htmlFor, required, text }: Props) => (
  <Label
    htmlFor={htmlFor}
    className={classNames('app-Formfield__label', { 'is-required': required })}
  >
    <FormattedMessage id={text} />
  </Label>
);
