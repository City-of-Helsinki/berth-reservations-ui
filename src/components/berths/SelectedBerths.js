import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert } from 'reactstrap';
import SelectedBerth from './SelectedBerth';

const SelectedBerths = ({ berths, moveUp, moveDown, deselectBerth, berthValidator }) =>
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
      <FormattedMessage tagName="h1" id="page.berth.selected.alert.paragraph" />
    </Alert>
  );
export default SelectedBerths;
