import React from 'react';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const LocalizedLink = ({ to, children, intl, className }) => (
  <Link className={className} to={`/${intl.locale}/${to}`}>
    {children}
  </Link>
);

export default injectIntl(LocalizedLink);
