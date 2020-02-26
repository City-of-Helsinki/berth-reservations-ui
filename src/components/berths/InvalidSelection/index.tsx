import React from 'react';
import { FormattedMessage } from 'react-intl';

import Icon from '../../common/Icon';
import Popover from '../../common/popover/Popover';

import './InvalidSelection.scss';

interface Props {
  id: string;
  msg: string;
}

const InvalidSelection = ({ id, msg }: Props) => {
  return (
    <Popover
      id={id}
      body={<FormattedMessage id={msg} />}
      placement="bottom"
      className="vene-invalid-selection"
    >
      <Icon name="exclamationCircle" className="vene-invalid-selection__icn" />
    </Popover>
  );
};

export default InvalidSelection;
