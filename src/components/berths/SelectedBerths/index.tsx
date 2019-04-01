import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert } from 'reactstrap';
import SelectedBerth from '../Berth/SelectedBerth';

import { Berths } from '../types';

interface Props {
  berths: Berths;
  moveDown: Function;
  moveUp: Function;
  deselectBerth: Function;
  berthValidator: Function;
}

const SelectedBerths = ({ berths, moveUp, moveDown, deselectBerth, berthValidator }: Props) =>
  berths.size > 0 ? (
    <div>
      {berths.map((berth, index) => (
        <SelectedBerth
          index={index}
          first={index === 0}
          last={index === berths.size - 1}
          key={berth.identifier}
          berth={berth}
          moveUp={moveUp}
          moveDown={moveDown}
          deselectBerth={deselectBerth}
          isValid={berthValidator(berth)}
        />
      ))}
    </div>
  ) : (
    <Alert color="danger">
      <FormattedMessage tagName="strong" id="page.berth.selected.alert.strong" />
      <FormattedMessage tagName="h2" id="page.berth.selected.alert.paragraph" />
    </Alert>
  );
export default SelectedBerths;
