import React from 'react';
import { Query } from 'react-apollo';

import {
  BerthSwitchReasonsQuery,
  BerthSwitchReasonsQuery_berthSwitchReasons as Reason
} from '../../../../utils/__generated__/BerthSwitchReasonsQuery';
import { BERTH_SWITCH_REASONS_QUERY } from '../../../../utils/graphql';
import ExchangeApplication, { ExchangeApplicationProps } from './ExchangeApplication';

type Props = Pick<ExchangeApplicationProps, Exclude<keyof ExchangeApplicationProps, 'reasons'>>;

const isReason = (reason: Reason | null): reason is Reason => reason !== null;

const ExchangeApplicationContainer = (props: Props) => {
  return (
    <Query<BerthSwitchReasonsQuery> query={BERTH_SWITCH_REASONS_QUERY}>
      {({ data }) => {
        const reasons =
          data && data.berthSwitchReasons ? data.berthSwitchReasons.filter(isReason) : [];

        return <ExchangeApplication reasons={reasons} {...props} />;
      }}
    </Query>
  );
};

export default ExchangeApplicationContainer;
