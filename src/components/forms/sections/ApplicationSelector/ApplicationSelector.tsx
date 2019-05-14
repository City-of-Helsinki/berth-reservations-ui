import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Label } from 'reactstrap';
import { EXCHANGE_APPLICATION_LIMIT } from '../../../../constants/BerthConstants';

import { switchApplication as switchApplicationAction } from '../../../../redux/actions/ApplicationActions';
import {
  resetBerthLimit as resetBerthLimitAction,
  setBerthLimit as setBirthLimitAction
} from '../../../../redux/actions/BerthActions';

import { Store } from '../../../../redux/types';
import { ApplicationOptions } from '../../../../types/applicationType';
import Alert from '../../../common/Alert';
import Input from '../../../common/Input';

import { InjectedIntlProps, injectIntl } from 'react-intl';
import './ApplicationSelector.scss';

export type ApplicationSelectorProps = InjectedIntlProps & {
  selectedBerthCount: number;
  selectedApplicationType: string;
  switchApplication: Function;
  setBerthLimit: Function;
  resetBerthLimit: Function;
  berthLimit: number;
};

export interface ApplicationSelectorState {
  alertVisibility: boolean;
}

class ApplicationSelector extends Component<ApplicationSelectorProps, ApplicationSelectorState> {
  constructor(props: ApplicationSelectorProps) {
    super(props);
    this.state = { alertVisibility: false };
  }

  toggleAlert = (value: boolean) => {
    this.setState({
      alertVisibility: value
    });
  };

  onToggleSwitch = (e: React.FormEvent<HTMLInputElement>) => {
    const { setBerthLimit, resetBerthLimit, switchApplication, selectedBerthCount } = this.props;

    // new application selected
    if (e.currentTarget.value === ApplicationOptions.NewApplication) {
      this.toggleAlert(false);
      switchApplication(e.currentTarget.value);
      resetBerthLimit();
    } else if (selectedBerthCount > EXCHANGE_APPLICATION_LIMIT) {
      this.toggleAlert(true);
    } else {
      switchApplication(e.currentTarget.value);
      setBerthLimit(EXCHANGE_APPLICATION_LIMIT);
    }
  };

  render() {
    const {
      intl: { formatMessage },
      selectedApplicationType
    } = this.props;

    return (
      <div className="vene-application-selector">
        <div className="vene-application-selector__input-wrapper">
          <Input
            type="radio"
            value={ApplicationOptions.NewApplication}
            checked={selectedApplicationType === ApplicationOptions.NewApplication}
            id="vene-application-selector-new"
            onChange={this.onToggleSwitch}
            name="application-selector-radio"
            label={
              <Fragment>
                <Label>{formatMessage({ id: 'page.berth.exchange_application.new' })}</Label>
                <p>{formatMessage({ id: 'page.berth.exchange_application.new.info_text' })}</p>
              </Fragment>
            }
          />

          <Input
            type="radio"
            value={ApplicationOptions.ExchangeApplication}
            checked={selectedApplicationType === ApplicationOptions.ExchangeApplication}
            onChange={this.onToggleSwitch}
            id="vene-application-selector-exchange"
            name="application-selector-radio"
            label={
              <Fragment>
                <Label>{formatMessage({ id: 'page.berth.exchange_application.exchange' })}</Label>
                <p>{formatMessage({ id: 'page.berth.exchange_application.exchange.info_text' })}</p>
              </Fragment>
            }
          />
        </div>

        {this.state.alertVisibility && (
          <Alert
            toggle={() => this.toggleAlert(!this.state.alertVisibility)}
            color="danger"
            messageId="page.berth.exchange_application.warning"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: Store) => ({
  selectedBerthCount: state.berths.selectedBerths.size,
  selectedApplicationType: state.application.selectedApplicationType,
  berthLimit: state.berths.berthLimit
});

export const UnconnectedApplicationSelector = injectIntl(ApplicationSelector);

export default connect(
  mapStateToProps,
  {
    switchApplication: switchApplicationAction,
    setBerthLimit: setBirthLimitAction,
    resetBerthLimit: resetBerthLimitAction
  }
)(UnconnectedApplicationSelector);
