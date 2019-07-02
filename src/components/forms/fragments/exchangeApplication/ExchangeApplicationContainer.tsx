import React from 'react';
import { Query } from 'react-apollo';

import { BerthSwitchReasonsQuery } from '../../../../utils/__generated__/BerthSwitchReasonsQuery';
import { BERTH_SWITCH_REASONS_QUERY } from '../../../../utils/graphql';
import ExchangeApplication, { ExchangeApplicationProps } from './ExchangeApplication';

type Props = Pick<ExchangeApplicationProps, Exclude<keyof ExchangeApplicationProps, 'reasons'>>;

const ExchangeApplicationContainer = (props: Props) => {
  return (
    <Query<BerthSwitchReasonsQuery> query={BERTH_SWITCH_REASONS_QUERY}>
      {({ data }) => {
        const reasons = data && data.berthSwitchReasons;
        return <ExchangeApplication reasons={reasons} {...props} />;
      }}
    </Query>
  );
};

export default ExchangeApplicationContainer;
