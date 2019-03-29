import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Link, LinkProps } from 'react-router-dom';

type Props = InjectedIntlProps & LinkProps;

const LocalizedLink = ({ to, children, intl, className }: Props) => (
  <Link className={className} to={`/${intl.locale}/${to}`}>
    {children}
  </Link>
);

export default injectIntl(LocalizedLink);
