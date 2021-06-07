import classNames from 'classnames';
import './screenReaderLabel.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  id: string;
  prepend?: string;
  textKey?: string;
  append?: string;
}

const buildLabelString = (parts: (string | undefined)[]): string => {
  return parts.filter((value) => value !== undefined).join(', ');
};

const ScreenReaderLabel = ({ id, prepend, textKey, append }: Props) => {
  const { t } = useTranslation();
  return (
    <label id={id} className={classNames('vene-formfield__screen-reader-label')}>
      {buildLabelString([prepend, textKey ? t(textKey) : undefined, append])}
    </label>
  );
};

export default ScreenReaderLabel;
