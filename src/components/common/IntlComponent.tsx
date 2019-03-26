// @flow
import React, { type Node } from 'react';
import { injectIntl, type IntlShape } from 'react-intl';

type Props = {
  Component: () => Node,
  id: string,
  intl: IntlShape
};

const IntlComponent = ({ Component, id, intl: { formatMessage }, ...rest }: Props) => (
  <Component {...rest}>{formatMessage({ id })}</Component>
);

export default injectIntl(IntlComponent);
