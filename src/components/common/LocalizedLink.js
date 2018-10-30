import React from 'react';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const LocalizedLink = ({ to, children, intl }) => (
  <Link to={`/${intl.locale}${to}`}>{children}</Link>
);

export default injectIntl(LocalizedLink);
