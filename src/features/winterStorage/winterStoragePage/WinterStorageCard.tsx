import { WinterStorageAreaType } from '../types';
import AreaCard, { AreaCardProps } from '../../../common/areaCard/AreaCard';
import Property from '../../../common/areaCard/property/Property';

export interface WinterStorageCardProps {
  area: WinterStorageAreaType;
  isExcluded: boolean;
  selected: AreaCardProps['selected'];
  disabled: AreaCardProps['disabled'];
  handleSelect: AreaCardProps['handleSelect'];
}

const WinterStorageCard = ({ area, selected, disabled, isExcluded, handleSelect }: WinterStorageCardProps) => {
  const maxWidth = area.maxWidth;
  const maxLength = area.maxLength;
  const address = `${area.streetAddress}, ${area.zipCode} ${area.municipality}`;
  const excluded = isExcluded ? 'error.message.invalid_area' : undefined;

  return (
    <AreaCard
      name={area.name}
      excluded={excluded}
      id={area.id}
      address={address}
      imageFile={area.imageFile}
      availabilityLevel={area.availabilityLevel}
      servicemapId={area.servicemapId}
      handleSelect={handleSelect}
      selected={selected}
      disabled={disabled}
      details={[
        <Property key="maxWidth" available value={maxWidth} unit="m" titleId="page.winter_storage.maximum_width" />,
        <Property key="maxLength" available value={maxLength} unit="m" titleId="page.winter_storage.maximum_length" />,
        <Property
          key="appointed"
          available={!!area.estimatedNumberOfSectionSpaces}
          iconName="divided"
          titleId="page.winter_storage.appointed"
        />,
        <Property key="gate" available={area.gate} iconName="fence" titleId="page.winter_storage.fence" />,
        <Property
          key="electricity"
          available={area.electricity}
          iconName="plug"
          titleId="page.winter_storage.electricity"
        />,
        <Property
          key="summerStorageForDockingEquipment"
          available={area.summerStorageForDockingEquipment}
          iconName="trestle"
          titleId="page.winter_storage.storage_for_docking_equip"
        />,
        <Property key="water" available={area.water} iconName="waterTap" titleId="page.winter_storage.water_tap" />,
        <Property
          key="summerStorageForTrailers"
          available={area.summerStorageForTrailers}
          iconName="dollyEmpty"
          titleId="page.winter_storage.storage_for_trailers"
        />,
      ]}
    />
  );
};

export default WinterStorageCard;
