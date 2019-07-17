import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'recompose';

import { Store } from '../../redux/types';
import Steps, { Props as StepsProps } from './Steps';

import { ApplicationType } from '../../types/applicationType';

type Props = {
  appType: string;
} & StepsProps &
  RouteComponentProps<{ app: ApplicationType }>;

const StepsContainer = ({ match, appType, ...props }: Props) => {
  let title = '';
  if (match.params.app === ApplicationType.WinterStorageApp) {
    title = 'site.steps.title.winter_storage';
  } else if (match.params.app === ApplicationType.BerthApp) {
    title =
      appType === 'new_application'
        ? 'site.steps.title.berths.new'
        : 'site.steps.title.berths.exchange';
  }
  return <Steps title={title} {...props} />;
};

const mapStateToProps = ({ application }: Store) => ({
  appType: application.get('berthsApplicationType')
});

export default compose<Props, Pick<StepsProps, Exclude<keyof StepsProps, 'title'>>>(
  withRouter,
  connect(mapStateToProps)
)(StepsContainer);
