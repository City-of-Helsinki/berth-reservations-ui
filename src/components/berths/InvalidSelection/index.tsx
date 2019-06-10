import React from 'react';
import { FormattedMessage } from 'react-intl';

import Icon from '../../common/Icon';
import Popover from '../../common/popover/Popover';

import './InvalidSelection.scss';

interface Props {
  id?: string;
}

const InvalidSelection = ({ id = 'default' }: Props) => {
  const errorMessageId =
    id === 'default' ? 'error.message.invalid_berth_selection' : 'error.message.invalid_berth';
  return (
    <Popover
      id={id}
      body={<FormattedMessage id={errorMessageId} />}
      placement="bottom"
      className="vene-invalid-selection"
    >
      <Icon name="exclamationCircle" className="vene-invalid-selection__icn" />
    </Popover>
  );
};

export default InvalidSelection;
