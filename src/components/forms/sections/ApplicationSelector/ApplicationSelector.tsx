import React, { FC } from 'react';
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
  const isOverLimit = selected > SELECTED_BERTH_LIMIT;

  return (
    <div className="vene-application-selector">
      <div className="vene-application-selector__input-wrapper">
        <Input type="radio" id="vene-application-selector-new" name="application-selector-radio">
          <Label>{formatMessage({ id: 'page.berth.exchange_application.new' })}</Label>
          <p>{formatMessage({ id: 'page.berth.exchange_application.new.info_text' })}</p>
        </Input>

        <Input
          className={isOverLimit ? 'disabled' : ''}
          type="radio"
          id="vene-application-selector-exchange"
          name="application-selector-radio"
          disabled={isOverLimit}
        >
          <Label>{formatMessage({ id: 'page.berth.exchange_application.exchange' })}</Label>
          <p>{formatMessage({ id: 'page.berth.exchange_application.exchange.info_text' })}</p>
        </Input>
      </div>

      {isOverLimit && <Alert color="danger" messageId="page.berth.exchange_application.warning" />}
    </div>
  );
};
const mapStateToProps = (state: Store) => ({
  selected: state.berths.selectedBerths.size
});

export const UnconnectedApplicationSelector = injectIntl(ApplicationSelector);

export default connect(mapStateToProps)(UnconnectedApplicationSelector);
