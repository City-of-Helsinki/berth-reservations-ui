import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Label } from 'reactstrap';
import { SELECTED_BERTH_LIMIT } from '../../../../constants/berths';
import { Store } from '../../../../types/ducks';
import Alert from '../../../common/Alert';
import Input from '../../../common/Input';

import { InjectedIntlProps, injectIntl } from 'react-intl';
import './ApplicationSelector.scss';

export type ApplicationSelectorProps = InjectedIntlProps & {
  selected: number;
};

const ApplicationSelector: FC<ApplicationSelectorProps> = ({
  intl: { formatMessage },
  selected
}) => {
  const SELECT_OPTIONS = {
    NEW_APPLICATION: 'new_application',
    EXCHANGE_APPLICATION: 'exchange_application'
  };

  const isOverLimit = selected > SELECTED_BERTH_LIMIT;
  const [alertVisibility, toggleAlert] = useState(false);

  // New application is selected by default
  const [selectedOption, toggleSelect] = useState(SELECT_OPTIONS.NEW_APPLICATION);

  // Make sure new application is selected when limit is over
  // but user have selected exchange application before
  if (isOverLimit && selectedOption === SELECT_OPTIONS.EXCHANGE_APPLICATION) {
    toggleSelect(SELECT_OPTIONS.NEW_APPLICATION);
  }

  const onToggleSwitch = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === SELECT_OPTIONS.EXCHANGE_APPLICATION && isOverLimit) {
      toggleAlert(true);
    } else {
      toggleAlert(false);
      toggleSelect(e.currentTarget.value);
    }
  };
  return (
    <div className="vene-application-selector">
      <div className="vene-application-selector__input-wrapper">
        <Input
          type="radio"
          value={SELECT_OPTIONS.NEW_APPLICATION}
          checked={selectedOption === SELECT_OPTIONS.NEW_APPLICATION}
          id="vene-application-selector-new"
          onChange={e => onToggleSwitch(e)}
          name="application-selector-radio"
        >
          <Label>{formatMessage({ id: 'page.berth.exchange_application.new' })}</Label>
          <p>{formatMessage({ id: 'page.berth.exchange_application.new.info_text' })}</p>
        </Input>

        <Input
          type="radio"
          value={SELECT_OPTIONS.EXCHANGE_APPLICATION}
          checked={selectedOption === SELECT_OPTIONS.EXCHANGE_APPLICATION}
          onChange={e => onToggleSwitch(e)}
          id="vene-application-selector-exchange"
          name="application-selector-radio"
        >
          <Label>{formatMessage({ id: 'page.berth.exchange_application.exchange' })}</Label>
          <p>{formatMessage({ id: 'page.berth.exchange_application.exchange.info_text' })}</p>
        </Input>
      </div>

      {alertVisibility && (
        <Alert
          toggle={() => toggleAlert(!alertVisibility)}
          color="danger"
          messageId="page.berth.exchange_application.warning"
        />
      )}
    </div>
  );
};
const mapStateToProps = (state: Store) => ({
  selected: state.berths.selectedBerths.size
});

export const UnconnectedApplicationSelector = injectIntl(ApplicationSelector);

export default connect(mapStateToProps)(UnconnectedApplicationSelector);
