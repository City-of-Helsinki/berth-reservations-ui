import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { stripLeadingSlash } from '../utils/common';

type Props = NavLinkProps;

const LocalizedLink = ({ to, children, className, ...rest }: Props) => {
  const { i18n } = useTranslation();
  const toAsString = to.toString();
  const uri = stripLeadingSlash(toAsString);
  return (
    <NavLink className={className} to={`/${i18n.language}/${uri}`} {...rest}>
      {children}
    </NavLink>
  );
};

export default LocalizedLink;
