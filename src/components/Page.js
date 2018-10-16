// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

const Page = ({ children }: any) => (
  <div className="App">
    <h1>
      <FormattedMessage id="site.title" />
    </h1>
    {children}
  </div>
);

export default Page;
