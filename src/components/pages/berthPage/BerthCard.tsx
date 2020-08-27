import React from 'react';

import { BerthType } from '../../../types/berth';
import { convertCmToM } from '../../../utils/berths';
import AreaCard, { AreaCardProps } from '../../common/areaCard/AreaCard';
import Property from '../../common/areaCard/property/Property';

export interface BerthCardProps {
  berth: BerthType;
  isExcluded: boolean;
  handleSelect: AreaCardProps['handleSelect'];
  selected: AreaCardProps['selected'];
  disabled: AreaCardProps['disabled'];
}

const BerthCard = ({ isExcluded, berth, selected, disabled, handleSelect }: BerthCardProps) => {
  const maximumWidth = convertCmToM(berth.maximumWidth);
  const address = `${berth.streetAddress}, ${berth.zipCode} ${berth.municipality}`;
  const excluded = isExcluded ? 'error.message.invalid_berth' : undefined;

  return (
    <AreaCard
      name={berth.name}
      excluded={excluded}
      id={berth.id}
      address={address}
      imageFile={berth.imageFile}
      servicemapId={berth.servicemapId}
      availabilityLevel={berth.availabilityLevel}
      handleSelect={handleSelect}
      selected={selected}
      disabled={disabled}
      details={[
        <Property
          key="numberOfPlaces"
          available
          value={berth.numberOfPlaces}
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
          available={berth.wasteCollection}
          iconName="trash"
          titleId="page.berths.waste_collection"
        />,
        <Property
          key="electricity"
          available={berth.electricity}
          iconName="plug"
          titleId="page.berths.electricity"
        />,
        <Property key="gate" available={berth.gate} iconName="fence" titleId="page.berths.fence" />,
        <Property
          key="water"
          available={berth.water}
          iconName="waterTap"
          titleId="page.berths.water_tap"
        />,
        <Property
          key="lighting"
          available={berth.lighting}
          iconName="streetLight"
          titleId="page.berths.lighting"
        />,
      ]}
    />
  );
};

export default BerthCard;
