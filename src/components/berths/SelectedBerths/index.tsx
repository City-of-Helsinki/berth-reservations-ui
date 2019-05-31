import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert } from 'reactstrap';

import SelectedBerth from '../Berth/SelectedBerth';

import { IconNames } from '../../common/Icon';
import { Berths } from '../types';

import './selectedBerths.scss';

interface Props {
  berths: Berths;
  moveDown: Function;
  moveUp: Function;
  deselectBerth: Function;
  berthValidator: Function;
}

const SelectedBerths = ({ berths, moveUp, moveDown, deselectBerth, berthValidator }: Props) => {
  if (berths.size === 0) {
    return (
      <Alert color="danger">
        <FormattedMessage tagName="strong" id="page.berth.selected.alert.strong" />
        <FormattedMessage tagName="h2" id="page.berth.selected.alert.paragraph" />
      </Alert>
    );
  }

  return (
    <div className="vene-selected-berths">
      {berths.map((berth, index) => {
        const services: Array<[IconNames, boolean]> =
          berth.__typename === 'HarborType'
            ? [
                ['plug', berth.electricity],
                ['waterTap', berth.water],
                ['trash', berth.wasteCollection],
                ['fence', berth.gate],
                ['streetLight', berth.lighting]
              ]
            : [
                ['waterTap', berth.water],
                ['fence', berth.gate],
                ['plug', berth.electricity],
                ['dollyEmpty', berth.summerStorageForTrailers],
                ['trestle', berth.summerStorageForDockingEquipment],
                ['tools', berth.repairArea]
              ];

        return (
          <SelectedBerth
            className="vene-selected-berths__berth"
            title={`${index + 1}. ${berth.name}`}
            key={berth.id}
            berth={berth}
            services={services}
            moveUp={index !== 0 ? moveUp : undefined}
            moveDown={index !== berths.size - 1 ? moveDown : undefined}
            handleRemove={deselectBerth}
            isValid={berthValidator(berth)}
          />
        );
      })}
    </div>
  );
};

export default SelectedBerths;
