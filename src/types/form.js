// @flow
import { type intlShape } from 'react-intl';

export type DefaultFieldProps = {
  id: string,
  name: string,
  value?: string | number,
  noValidate?: boolean,
  validate?: Function,
  label?: string,
  required?: boolean,
  text?: string,
  children?: any
};

export type FormFragmentProps = {
  prefix: string,
  noValidate?: boolean,
  values?: Object
};

export type FormFragmentPropsWithIntl = FormFragmentProps & {
  intl: intlShape
};
