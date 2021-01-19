import classNames from 'classnames';
import React, { Component } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { EXCHANGE_APPLICATION_LIMIT } from '../../../../constants/BerthConstants';
import { switchApplication as switchApplicationAction } from '../../../../redux/actions/ApplicationActions';
import {
  resetBerthLimit as resetBerthLimitAction,
  setBerthLimit as setBirthLimitAction,
} from '../../../../redux/actions/BerthActions';
import Alert from '../../../../common/alert/Alert';
import Input from '../../../../common/input/Input';
import { Store } from '../../../../redux/types';
import { ApplicationOptions } from '../../../../types/applicationType';

import './applicationSelector.scss';

export type ApplicationSelectorProps = {
  className?: string;
  selectedBerthCount: number;
  berthsApplicationType: string;
  switchApplication: Function;
  setBerthLimit: Function;
  resetBerthLimit: Function;
  berthLimit: number;
} & WithTranslation;

export interface ApplicationSelectorState {
  alertVisibility: boolean;
}

class ApplicationSelector extends Component<ApplicationSelectorProps, ApplicationSelectorState> {
  private autoDismiss: NodeJS.Timeout | null = null;

  constructor(props: ApplicationSelectorProps) {
    super(props);
    this.state = { alertVisibility: false };
  }

  componentWillUnmount() {
    if (this.autoDismiss) {
      clearTimeout(this.autoDismiss);
    }
  }

  toggleAlert = (value: boolean) => {
    if (!value) {
      this.setState({
        alertVisibility: false,
      });
    } else {
      this.setState(
        {
          alertVisibility: true,
        },
        () => {
          this.autoDismiss = setTimeout(() => {
            this.setState({ alertVisibility: false });
          }, 10000);
        }
      );
    }
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
    const { className, berthsApplicationType, t } = this.props;

    return (
      <div className={classNames('vene-application-selector', className)}>
        <Container>
          <Row>
            <Col xs="12" md="6">
              <Input
                type="radio"
                value={ApplicationOptions.NewApplication}
                checked={berthsApplicationType === ApplicationOptions.NewApplication}
                id="vene-application-selector-new"
                onChange={this.onToggleSwitch}
                name="application-selector-radio"
                label={
                  <>
                    <strong>{t('page.berth.exchange_application.new.title')}</strong>
                    <p>{t('page.berth.exchange_application.new.info_text')}</p>
                  </>
                }
              />
            </Col>
            <Col xs="12" md="6">
              <Input
                type="radio"
                value={ApplicationOptions.ExchangeApplication}
                checked={berthsApplicationType === ApplicationOptions.ExchangeApplication}
                onChange={this.onToggleSwitch}
                id="vene-application-selector-exchange"
                name="application-selector-radio"
                label={
                  <>
                    <strong>{t('page.berth.exchange_application.exchange.title')}</strong>
                    <p>{t('page.berth.exchange_application.exchange.info_text')}</p>
                  </>
                }
              />
            </Col>
          </Row>
        </Container>

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
  berthsApplicationType: state.application.berthsApplicationType,
  berthLimit: state.berths.berthLimit,
});

export const UnconnectedApplicationSelector = withTranslation()(ApplicationSelector);

export default connect(mapStateToProps, {
  switchApplication: switchApplicationAction,
  setBerthLimit: setBirthLimitAction,
  resetBerthLimit: resetBerthLimitAction,
})(UnconnectedApplicationSelector);
