import classNames from 'classnames';
import React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import './ScreenReaderLabel.scss';

interface Props {
  intl: InjectedIntl;
  id: string;
  prepend?: string;
  textKey?: string;
  append?: string;
}

const buildLabelString = (parts: Array<string | undefined>): string => {
  return parts.filter(value => value !== undefined).join(', ');
};

const ScreenReaderLabel: React.FC<Props> = ({ intl, id, prepend, textKey, append }) => {
  return (
    <p id={id} className={classNames('vene-formfield__screen-reader-label')}>
      {buildLabelString([
        prepend,
        textKey ? intl.formatMessage({ id: textKey }) : undefined,
        append
      ])}
    </p>
  );
};

export default injectIntl(ScreenReaderLabel);
