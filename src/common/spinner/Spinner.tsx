import React, { useEffect, useState } from 'react';
import './spinner.scss';
import { useTranslation } from 'react-i18next';

export interface SpinnerProps {
  withText?: boolean;
  text?: string;
}

const Spinner = ({ withText, text }: SpinnerProps) => {
  const { t } = useTranslation();
  const initialText = text ?? t('site.common.loading');

  const [loadingText, setLoadingText] = useState(initialText);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setCounter(counter + 1), 750);
    return () => clearTimeout(timeout);
  }, [counter]);

  useEffect(() => {
    setLoadingText(`${initialText}${'.'.repeat(counter % 4)}`);
  }, [counter, initialText]);

  if (!withText) {
    return <div className="vene-spinner__spinner" />;
  }

  return (
    <div className="vene-spinner">
      <div className="vene-spinner__spinner" />
      <span className="vene-spinner__text">{loadingText}</span>
    </div>
  );
};

export default Spinner;
