import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Label as RSLabel } from 'reactstrap';
import './label.scss';

interface Props {
  htmlFor: string;
  required: boolean;
  text: string;
}

const Label = ({ htmlFor, required, text }: Props) => {
  const { t } = useTranslation();
  return (
    <RSLabel htmlFor={htmlFor} className={classNames('vene-formfield__label', { 'is-required': required })}>
      <span>{t(text)}</span>
    </RSLabel>
  );
};

export default Label;
