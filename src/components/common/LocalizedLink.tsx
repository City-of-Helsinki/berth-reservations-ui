import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { stripLeadingSlash } from '../../utils/common';

type Props = InjectedIntlProps & NavLinkProps;

const LocalizedLink = ({ to, children, intl, className, ...rest }: Props) => {
  const toAsString = to.toString();
  const uri = stripLeadingSlash(toAsString);
  return (
    <NavLink className={className} to={`/${intl.locale}/${uri}`} {...rest}>
      {children}
    </NavLink>
  );
};

export default injectIntl(LocalizedLink);
