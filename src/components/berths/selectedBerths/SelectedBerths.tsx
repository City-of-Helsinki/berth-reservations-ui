import React from 'react';

import { IconNames } from '../../common/Icon';
import SelectedResource from '../Berth/selectedResource/SelectedResource';

import { Resources } from '../types';

import './selectedBerths.scss';

interface Props {
  resources: Resources;
  moveDown: Function;
  moveUp: Function;
  deselectBerth: Function;
  berthValidator: Function;
}

const SelectedBerths = ({ resources, moveUp, moveDown, deselectBerth, berthValidator }: Props) => {
  return (
    <div className="vene-selected-berths">
      {resources.map((resource, index) => {
        const services: Array<[IconNames, boolean]> =
          resource.__typename === 'HarborType'
            ? [
                ['plug', resource.electricity],
                ['waterTap', resource.water],
                ['trash', resource.wasteCollection],
                ['fence', resource.gate],
                ['streetLight', resource.lighting]
              ]
            : [
                ['waterTap', resource.water],
                ['fence', resource.gate],
                ['plug', resource.electricity],
                ['dollyEmpty', resource.summerStorageForTrailers],
                ['trestle', resource.summerStorageForDockingEquipment],
                ['tools', resource.repairArea]
              ];

        return (
          <SelectedResource
            className="vene-selected-berths__berth"
            title={`${index + 1}. ${resource.name}`}
            id={resource.id}
            key={resource.id}
            services={services}
            moveUp={index !== 0 ? moveUp : undefined}
            moveDown={index !== resources.size - 1 ? moveDown : undefined}
            handleRemove={deselectBerth}
            availabilityLevel={resource.availabilityLevel}
            validationErrMsg={berthValidator(resource) && 'error.message.invalid_berth'}
          />
        );
      })}
    </div>
  );
};

export default SelectedBerths;
