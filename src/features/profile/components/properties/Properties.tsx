import Property from './Property';
import './properties.scss';

type CommonProperties = Record<
  | 'electricity'
  | 'gate'
  | 'lighting'
  | 'wasteCollection'
  | 'water'
  | 'summerStorageForDockingEquipment'
  | 'summerStorageForTrailers',
  boolean
>;

export type PropertiesProps<T extends Partial<CommonProperties>> = T;

const Properties = <T extends Partial<CommonProperties>>({
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
      {summerStorageForDockingEquipment && <Property icon="trestle" labelKey="common.waste_collection" />}
      {summerStorageForTrailers && <Property icon="dollyEmpty" labelKey="common.waste_collection" />}
    </div>
  );
};

export default Properties;
