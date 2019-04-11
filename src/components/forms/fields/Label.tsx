import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from 'reactstrap';
import './Label.scss';

interface Props {
  htmlFor: string;
  required: boolean;
  text: string;
}

export default ({ htmlFor, required, text }: Props) => (
  <Label
    htmlFor={htmlFor}
    className={classNames('vene-formfield__label', { 'is-required': required })}
  >
    <FormattedMessage id={text} />
  </Label>
);
