import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import './ScreenReaderLabel.scss';

interface Props {
  id: string;
  prepend?: string;
  text?: string;
  append?: string;
}

const ScreenReaderLabel: React.FC<Props> = ({ id, prepend, text, append }) => (
  <p id={id} className={classNames('vene-formfield__screen-reader-label')}>
    {prepend}
    {text && <FormattedMessage id={text} />}
    {append}
  </p>
);

export default ScreenReaderLabel;
