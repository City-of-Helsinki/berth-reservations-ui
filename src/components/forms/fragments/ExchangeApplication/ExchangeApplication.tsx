import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

const ExchangeApplication: FC = () => {
  return (
    <div className="vene-exchange-application">
      <FormattedMessage tagName="h3" id="page.berth.exchange_application.current_berth.title" />
      <FormattedMessage id="page.berth.exchange_application.current_berth.info_text" />
    </div>
  );
};

export default ExchangeApplication;
