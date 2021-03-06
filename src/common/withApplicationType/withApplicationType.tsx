import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'recompose';

import { Store } from '../../redux/types';
import { ApplicationOptions, ApplicationType } from '../types/applicationType';

type Props = {
  appType: string;
} & Pick<RouteComponentProps<{ app: ApplicationType }>, 'match'>;

export const getApplicationType = (Component: React.ComponentType<{ applicationType: string }>) => ({
  match,
  appType,
  ...props
}: Props) => {
  let applicationType = '';

  if (match.params.app === ApplicationType.WinterStorageApp) {
    applicationType = 'site.steps.title.winter_storage';
  } else if (match.params.app === ApplicationType.BerthApp) {
    applicationType =
      appType === ApplicationOptions.SwitchApplication
        ? 'site.steps.title.berths.switch'
        : 'site.steps.title.berths.new';
  }

  return <Component {...props} applicationType={applicationType} />;
};

const mapStateToProps = ({ berths }: Store) => ({
  appType: berths.get('applicationType'),
});

const withApplicationType = <P extends object>(C: React.ComponentType<P>) =>
  compose<P, Pick<P, Exclude<keyof P, 'applicationType'>>>(withRouter, connect(mapStateToProps), getApplicationType)(C);

export default withApplicationType;
