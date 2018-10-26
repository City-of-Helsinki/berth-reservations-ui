// @flow
import { type intlShape } from 'react-intl';

export type DefaultFieldProps = {
  id: string,
  name: string,
  value?: string | number,
  label?: string,
  required?: boolean,
  text?: string,
  children?: any
};

export type FormFragmentProps = {
  prefix: string,
  values?: Object
};

export type FormFragmentPropsWithIntl = FormFragmentProps & {
  intl: intlShape
};
