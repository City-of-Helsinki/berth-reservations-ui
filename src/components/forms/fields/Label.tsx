import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Label } from 'reactstrap';
import './Label.scss';

interface Props {
  htmlFor: string;
  required: boolean;
  text: string;
}

export default ({ htmlFor, required, text }: Props) => {
  const { t } = useTranslation();
  return (
    <Label
      htmlFor={htmlFor}
      className={classNames('vene-formfield__label', { 'is-required': required })}
    >
      <span>{t(text)}</span>
    </Label>
  );
};
