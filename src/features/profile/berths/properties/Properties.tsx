import React from 'react';

import './properties.scss';
import Property from './Property';

export interface PropertiesProps {
  electricity: boolean;
  gate: boolean;
  lighting: boolean;
  wasteCollection: boolean;
  water: boolean;
}

const Properties = ({ electricity, gate, lighting, wasteCollection, water }: PropertiesProps) => {
  return (
    <div className="vene-properties">
      {electricity && <Property icon="plug" labelKey="common.electricity" />}
      {gate && <Property icon="fence" labelKey="common.gate" />}
      {lighting && <Property icon="streetLight" labelKey="common.lighting" />}
      {wasteCollection && <Property icon="trash" labelKey="common.waste_collection" />}
      {water && <Property icon="waterTap" labelKey="common.water" />}
    </div>
  );
};

export default Properties;
