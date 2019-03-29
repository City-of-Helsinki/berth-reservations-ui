// @flow
import React from 'react';
import { Label } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import './_label.scss';

type Props = {
  htmlFor: string,
  required: boolean,
  text: string
};

export default ({ htmlFor, required, text }: Props) => (
  <Label htmlFor={htmlFor} className={classNames('app-label', { 'is-required': required })}>
    <FormattedMessage id={text} />
  </Label>
);
