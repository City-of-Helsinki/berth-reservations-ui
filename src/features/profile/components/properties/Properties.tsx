import Property from './Property';
import './properties.scss';

type AllProperties = Record<
  | 'electricity'
  | 'gate'
  | 'lighting'
  | 'wasteCollection'
  | 'water'
  | 'summerStorageForDockingEquipment'
  | 'summerStorageForTrailers',
  boolean
>;

export type PropertiesProps<T extends Partial<AllProperties>> = T;

const Properties = <T extends Partial<AllProperties>>({
  electricity,
  gate,
  lighting,
  wasteCollection,
  water,
  summerStorageForDockingEquipment,
  summerStorageForTrailers,
}: PropertiesProps<T>) => {
  return (
    <div className="vene-properties">
      {electricity && <Property icon="plug" labelKey="common.electricity" />}
      {gate && <Property icon="fence" labelKey="common.gate" />}
      {lighting && <Property icon="streetLight" labelKey="common.lighting" />}
      {wasteCollection && <Property icon="trash" labelKey="common.waste_collection" />}
      {water && <Property icon="waterTap" labelKey="common.water" />}
      {summerStorageForDockingEquipment && <Property icon="trestle" labelKey="common.storage_for_docking_equip" />}
      {summerStorageForTrailers && <Property icon="dollyEmpty" labelKey="common.storage_for_trailers" />}
    </div>
  );
};

export default Properties;
