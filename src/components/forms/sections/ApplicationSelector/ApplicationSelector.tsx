import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Label } from 'reactstrap';
import { APPLICATION_OPTIONS } from '../../../../constants/ApplicationConstants';
import { SELECTED_BERTH_LIMIT } from '../../../../constants/BerthConstants';
import { switchApplication as switchApplicationAction } from '../../../../redux/actions/ApplicationActions';
import { Store } from '../../../../redux/types';
import Alert from '../../../common/Alert';
import Input from '../../../common/Input';

import { InjectedIntlProps, injectIntl } from 'react-intl';
import './ApplicationSelector.scss';

export type ApplicationSelectorProps = InjectedIntlProps & {
  selectedBerthCount: number;
  selectedApplicationType: string;
  switchApplication: Function;
};

export interface ApplicationSelectorState {
  alertVisibility: boolean;
}

class ApplicationSelector extends Component<ApplicationSelectorProps, ApplicationSelectorState> {
  constructor(props: ApplicationSelectorProps) {
    super(props);
    this.state = { alertVisibility: false };
  }

  componentDidUpdate() {
    // Make sure new application is selected when limit is over
    // but user have selected exchange application before

    const { selectedApplicationType, switchApplication } = this.props;
    if (
      this.isOverLimit() &&
      selectedApplicationType === APPLICATION_OPTIONS.EXCHANGE_APPLICATION
    ) {
      switchApplication(APPLICATION_OPTIONS.NEW_APPLICATION);
    }
  }

  isOverLimit = () => {
    return this.props.selectedBerthCount > SELECTED_BERTH_LIMIT;
  };

  toggleAlert = (value: boolean) => {
    this.setState({
      alertVisibility: value
    });
  };

  onToggleSwitch = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === APPLICATION_OPTIONS.EXCHANGE_APPLICATION && this.isOverLimit()) {
      this.toggleAlert(true);
    } else {
      this.toggleAlert(false);
      this.props.switchApplication(e.currentTarget.value);
    }
  };

  render() {
    const {
      intl: { formatMessage },
      selectedBerthCount,
      selectedApplicationType,
      switchApplication
    } = this.props;

    return (
      <div className="vene-application-selector">
        <div className="vene-application-selector__input-wrapper">
          <Input
            type="radio"
            value={APPLICATION_OPTIONS.NEW_APPLICATION}
            checked={selectedApplicationType === APPLICATION_OPTIONS.NEW_APPLICATION}
            id="vene-application-selector-new"
            onChange={this.onToggleSwitch}
            name="application-selector-radio"
          >
            <Label>{formatMessage({ id: 'page.berth.exchange_application.new' })}</Label>
            <p>{formatMessage({ id: 'page.berth.exchange_application.new.info_text' })}</p>
          </Input>

          <Input
            type="radio"
            value={APPLICATION_OPTIONS.EXCHANGE_APPLICATION}
            checked={selectedApplicationType === APPLICATION_OPTIONS.EXCHANGE_APPLICATION}
            onChange={this.onToggleSwitch}
            id="vene-application-selector-exchange"
            name="application-selector-radio"
          >
            <Label>{formatMessage({ id: 'page.berth.exchange_application.exchange' })}</Label>
            <p>{formatMessage({ id: 'page.berth.exchange_application.exchange.info_text' })}</p>
          </Input>
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
  selectedApplicationType: state.application.selectedApplicationType
});

export const UnconnectedApplicationSelector = injectIntl(ApplicationSelector);

export default connect(
  mapStateToProps,
  { switchApplication: switchApplicationAction }
)(UnconnectedApplicationSelector);
