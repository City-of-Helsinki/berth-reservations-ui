import get from 'lodash/get';
import React, { SFC } from 'react';
import { Query } from 'react-apollo';
import { Col, Row } from 'reactstrap';
import { BoatTypesBerthsQuery_harbors_edges_node as Harbor } from '../../../../../utils/__generated__/BoatTypesBerthsQuery';

import { BERTH_SWITCH_REASONS_QUERY, GET_HARBOR_NAME } from '../../../../../utils/graphql';
import LabelValuePair from '../../../../common/labelValuePair/LabelValuePair';

import { ApplicationState } from '../../../../../redux/types';
import {
  BerthSwitchReasonsQuery,
  BerthSwitchReasonsQuery_berthSwitchReasons as Reason,
} from '../../../../../utils/__generated__/BerthSwitchReasonsQuery';

const OldBerthInfo: SFC<{ application: ApplicationState }> = ({ application }) => {
  const isReason = (reason: Reason | null): reason is Reason => reason !== null;

  return (
    <Row>
      <Col xs={12}>
        <Query<
          Harbor,
          {
            id: string;
          }
        >
          query={GET_HARBOR_NAME(application.berthSwitch.harborId)}
        >
          {({
            // TODO: handle errors
            data,
          }) => (
            <LabelValuePair
              label="page.berth.exchange_application.form.current_harbour_area.label"
              value={get(data, 'harbor.properties.name') || application.berthSwitch.harborId}
            />
          )}
        </Query>

        <LabelValuePair
          label="page.berth.exchange_application.form.pier.title"
          value={application.berthSwitch.pier}
        />

        <LabelValuePair
          label="page.berth.exchange_application.form.berth.title"
          value={application.berthSwitch.berthNumber}
        />

        <Query<BerthSwitchReasonsQuery> query={BERTH_SWITCH_REASONS_QUERY}>
          {({ data }) => {
            const reasons =
              data && data.berthSwitchReasons ? data.berthSwitchReasons.filter(isReason) : [];
            const selectedReason = reasons.find(
              (reason) => reason.id === application.berthSwitch.reason
            );

            return (
              <LabelValuePair
                label="page.berth.exchange_application.reason.title"
                value={selectedReason && selectedReason.title}
              />
            );
          }}
        </Query>
      </Col>
    </Row>
  );
};

export default OldBerthInfo;
