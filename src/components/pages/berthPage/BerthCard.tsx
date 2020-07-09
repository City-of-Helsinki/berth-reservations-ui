import React from 'react';

import { BerthType } from '../../../types/berth';
import { convertCmToM } from '../../../utils/berths';
import AreaCard, { AreaCardProps } from '../../common/areaCard/AreaCard';
import Property from '../../common/areaCard/property/Property';

export interface BerthCardProps {
  harbor: BerthType;
  isExcluded: boolean;
  handleSelect: AreaCardProps['handleSelect'];
  selected: AreaCardProps['selected'];
  disabled: AreaCardProps['disabled'];
}

const BerthCard = ({ isExcluded, harbor, selected, disabled, handleSelect }: BerthCardProps) => {
  const maximumWidth = convertCmToM(harbor.maximumWidth);
  const address = `${harbor.streetAddress}, ${harbor.zipCode} ${harbor.municipality}`;
  const excluded = isExcluded ? 'error.message.invalid_berth' : undefined;

  return (
    <AreaCard
      name={harbor.name}
      excluded={excluded}
      key={harbor.id}
      id={harbor.id}
      address={address}
      imageFile={harbor.imageFile}
      servicemapId={harbor.servicemapId}
      availabilityLevel={harbor.availabilityLevel}
      handleSelect={handleSelect}
      selected={selected}
      disabled={disabled}
      details={[
        <Property
          key="numberOfPlaces"
          available
          value={harbor.numberOfPlaces}
          titleId="page.berths.number_of_places"
        />,
        <Property
          key="maximumWidth"
          available
          value={maximumWidth}
          unit="m"
          titleId="page.berths.maximum_width"
        />,
        <Property
          key="wasteCollection"
          available={harbor.wasteCollection}
          iconName="trash"
          titleId="page.berths.waste_collection"
        />,
        <Property
          key="electricity"
          available={harbor.electricity}
          iconName="plug"
          titleId="page.berths.electricity"
        />,
        <Property
          key="gate"
          available={harbor.gate}
          iconName="fence"
          titleId="page.berths.fence"
        />,
        <Property
          key="water"
          available={harbor.water}
          iconName="waterTap"
          titleId="page.berths.water_tap"
        />,
        <Property
          key="lighting"
          available={harbor.lighting}
          iconName="streetLight"
          titleId="page.berths.lighting"
        />
      ]}
    />
  );
};

export default BerthCard;
